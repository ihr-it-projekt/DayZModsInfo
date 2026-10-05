# Adding custom crafting actions to the "Crafting Count" condition

This is a developer/modder guide for hooking a **custom crafting action** (your own mod's recipe or
hand action) into TB Daily Reward's "Crafting Count" level condition, so that completing it increases
a player's crafting count the same way vanilla recipes (rags, cleaning a weapon, ...) and vanilla
single-item craft actions (armband, bone knife, rope belt, improvised covers, ...) already do.

This requires script access (a server-side addon/mod that can add Enforce Script files and depends on
`TBDailyRewardServer`), not just JSON config. If you only want to *require* specific crafted item types
in a level condition (not add a new source of crafting events), see
[LevelConditions/Example_Level_Condition_1.md](./Configs/Example_Level_Condition_1.md) instead.

## How crafting is currently tracked

All of this lives in `TBDailyRewardServer`. There is no
single vanilla "a craft happened" event - DayZ has two unrelated crafting systems:

1. **Two-item "combine" recipes** (rag -> rags, cleaning a weapon, chelating water, blood tests, the
   drag-and-drop world-crafting UI, ...). These all run through `RecipeBase.PerformRecipe()`, which on
   success calls `SpawnItems(...)`. TB Daily Reward hooks that:

   ```c
   modded class RecipeBase {
       override void SpawnItems(ItemBase ingredients[], PlayerBase player, array<ItemBase> spawned_objects) {
           super.SpawnItems(ingredients, player, spawned_objects);

           TBDRCraftingCounter.Increment(player, GetName());
       }
   }
   ```

   `SpawnItems` is used instead of the more obviously-named `Do()` because several vanilla recipes
   (`CleanWeapon`, `ChelateWater`, `BloodTest`, ...) override `Do()` without calling `super.Do(...)`,
   which would silently swallow the count. No vanilla recipe overrides `SpawnItems`, so this is the
   reliable hook point. `GetName()` is the recipe's name and becomes the key in the per-type
   `craftingCounts` map.

2. **Standalone single-item "hold to craft" actions** (armband, bone knife, rope belt, improvised
   covers, bolt crafting/fletching, ...). Each of these is its own `ActionContinuousBase` subclass with
   its own `OnFinishProgressServer(ActionData action_data)` that spawns a fixed result item. These do
   **not** go through `RecipeBase` at all, so each needs its own override, for example:

   ```c
   modded class ActionCraftArmband {
       override void OnFinishProgressServer(ActionData action_data) {
           super.OnFinishProgressServer(action_data);
           TBDRCraftingCounter.Increment(action_data.m_Player, "Armband_White");
       }
   }
   ```

Both patterns funnel into the same shared helper:

```c
class TBDRCraftingCounter {
    static void Increment(PlayerBase player, string type) {
        ...
    }
}
```

`type` is a free-form string - it's whatever key you want server owners to reference in a level
condition's `craftingCounts` map (see
[LevelConditions/Example_Level_Condition_1.md](./Configs/Example_Level_Condition_1.md)). For vanilla
recipes we use the recipe name (`GetName()`); for standalone actions we use the resulting item's class
name, since that's what server owners already recognize from spawning/loot configs.

Deliberately **not** hooked: `ActionDeCraftDrysackBag`, `ActionDeCraftRopeBelt`,
`ActionDeCraftWitchHoodCoif` (these disassemble an item back into raw materials - that's not
"crafting"), and `ActionCraft`/`ActionWorldCraft` (legacy/UI-only classes that don't themselves spawn
anything - `ActionWorldCraft` already routes through `RecipeBase` above).

## Adding your own custom crafting action

1. Find the completion method on your action class. For an `ActionContinuousBase`-derived action this
   is almost always `OnFinishProgressServer(ActionData action_data)` - open your mod's action class and
   confirm where the result item is actually spawned/granted (not `OnStartServer`, not `OnFinish`, which
   can also fire on cancel/interrupt).
2. In your **own server-side addon** (one that depends on `TBDailyRewardServer`), add a `modded class`
   over your action class, call `super.OnFinishProgressServer(action_data)` first, then call
   `TBDRCraftingCounter.Increment(...)` with the player and whatever type string you want tracked:

   ```c
   modded class ActionMyCustomCraft {
       override void OnFinishProgressServer(ActionData action_data) {
           super.OnFinishProgressServer(action_data);
           TBDRCraftingCounter.Increment(action_data.m_Player, "MyCraftedItemClassName");
       }
   }
   ```

   If your action's player reference isn't on `action_data.m_Player` (some custom actions carry it
   elsewhere), use whatever accessor your action already exposes - just make sure you end up with the
   `PlayerBase` who performed the craft.
3. If your custom crafting is instead a two-item `RecipeBase` subclass, you don't need a new hook at
   all - it's already covered by the `RecipeBase.SpawnItems` override above, as long as your recipe
   doesn't override `SpawnItems` itself (recipes commonly override `Do()` or `CanDo()`, not
   `SpawnItems()`).
4. Tell your server owners what type string(s) you're using, so they can reference them in a level
   condition's `craftingCounts` map.
5. Test in a dev server/Workbench, not by reading the script - there is no local compiler for this mod.
   Craft the item, open the reward menu or admin panel, and confirm the player's crafting count for
   that type increased.
