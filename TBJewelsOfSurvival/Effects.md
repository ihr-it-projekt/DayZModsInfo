# Jewel Effects & Skills Reference (Alphabetical Order)

All jewel effects are fully configurable by server administrators in [`JewelsConfig.json`](Configs/JewelsConfig.md).

## Key System Features & Recent Changes
- **Configurable via `JewelsConfig.json`**: All ring skill values are generated and persisted in `JewelsConfig.json` on the server and can be live-reloaded in-game via the Admin **Reload Config** button in the Jewel Book (`TBJOFBook`).
- **Every Ring Supports Every Skill**: Any of the 25 skills below can be assigned to any of the 21 rings (`ringOfPerseveranceLevel1..3`, `ringOfLifeLevel1..3`, `ringOfAttackLevel1..3`, `ringOfDefenseLevel1..3`, `ringOfDragonBloodLevel1..3`, `ringOfOwlLevel1..3`, `ringOfEagleEyeLevel1..3`).
- **All 25 Skills Activated**: Previously inactive skills (`bleedingChanceReduceInPercent`, `heatComfortEffectInPercent`, `shockDamageEffectInPercent`, `toxicityEffectInPercent`) are now enabled in the Jewel Book UI, skill filter dropdown, and server-side calculations.
- **Harmonized Percentage Values (`0 - 100+` / `-100 - 100+`)**:
  - Administrators enter intuitive percentage values in `JewelsConfig.json` (e.g., `10` for `+10%`, `-10` for `-10%`, `100` for `+100%`, `300` for `+300%`).
  - Internally, all percentage values are automatically normalized (`value / 100.0`) and combined additively across worn active rings (slots `TBJOFRing1` and `TBJOFRing2`, provided the ring's quantity is `> 1`).
  - Setting a float property to `0` (or a boolean property to `0` / `false`) disables that effect on the ring and hides it in the Jewel Book UI.

---

## 1. Bleeding Chance Reduce Effect (`bleedingChanceReduceInPercent`)
- **What it does**: Reduces the probability that a player receives a bleeding source (cut) when hit (`BleedingSourcesManagerServer.ProcessHit`).
- **Values used**:
  - `0`: Disabled (normal bleeding chance).
  - `1` to `100`: Percentage chance to prevent bleeding on hit (e.g., `25` = `+25%` chance to ignore a bleeding cut, `100` = `100%` immunity to bleeding cuts from hits).
  - **Book UI**: Positive values (`> 0`) are displayed in **green** (`+ X %`).

## 2. Blood Regen Effect (`bloodRegenEffectInPercent`)
- **What it does**: Modifies the tick speed of the player's natural blood regeneration (`BloodRegenMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled (normal blood regeneration).
  - `> 0` (Bonus, **green**): Increases blood regeneration rate by the configured percentage (e.g., `50` = `+50%` faster, `200` = `+200%` / 3x total speed, `300` = `+300%` / 4x total speed).
  - `< 0` (Penalty, **red**): Reduces blood regeneration rate (e.g., `-25` = `-25%` slower).

## 3. Charcoal Effect (`charcoalEffectInPercent`)
- **What it does**: Modifies the tick effectiveness of Charcoal Tablets (`CharcoalMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled.
  - `> 0` (Bonus, **green**): Increases charcoal tick effect by `+ X %` (e.g., `10`, `20`, `30`).
  - `< 0` (Penalty, **red**): Decreases charcoal tick effect by `- X %`.

## 4. Damage Increase Effect / Attack Strength (`damageIncreaseInPercent`)
- **What it does**: Modifies the outgoing Health and Blood damage dealt by the player when attacking other players, zombies, animals, items, or vehicles (`TBJOFHitPlugin`).
- **Values used**:
  - `0`: Disabled.
  - `> 0` (Bonus, **green**): Increases outgoing attack damage by `+ X %` (e.g., `8`, `16`, `24` on Ring of Attack Levels 1–3).
  - `< 0` (Penalty, **red**): Decreases outgoing attack damage by `- X %` (e.g., `-8`, `-16`, `-24` on Ring of Defense Levels 1–3).

## 5. Damage Reduce Effect / Armor (`damageReduceInPercent`)
- **What it does**: Modifies the incoming Health and Blood damage received when the player is attacked (`TBJOFHitPlugin`), including survival protection if the armor bonus prevents a lethal hit.
- **Values used**:
  - `0`: Disabled.
  - `> 0` (Bonus, **green**): Reduces incoming damage taken by `+ X %` (e.g., `8`, `16`, `24` on Ring of Defense Levels 1–3).
  - `< 0` (Penalty, **red**): Increases incoming damage taken by `- X %` (e.g., `-8`, `-16`, `-24` on Ring of Attack Levels 1–3).

## 6. Deafness Effect / Eagle Eye Stop Sound (`eagleEffectStopSound`)
- **What it does**: When enabled, mutes all game, speech, VOIP, and radio sounds while the player is zoomed into a weapon optic/scope (`PlayerBase.TBJOFCheckEagleSound`), restoring audio volumes as soon as the player exits the scope. Used as a trade-off/negative effect on Eagle Eye rings, and works on any ring where enabled.
- **Values used**:
  - `0` (`false`): Disabled.
  - `1` (`true`): Enabled.

## 7. Disinfection Effect (`disinfectionEffectInPercent`)
- **What it does**: Modifies the tick rate of Disinfection (`DisinfectionMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled.
  - `> 0` (Bonus, **green**): Increases disinfection effect by `+ X %` (e.g., `10`, `20`, `30`).
  - `< 0` (Penalty, **red**): Decreases disinfection effect by `- X %`.

## 8. Epinephrine Effect (`epinephrineEffectInPercent`)
- **What it does**: Extends or shortens the active duration (`LIFETIME`) of an Epinephrine injector (`EpinephrineMdfr.DeactivateCondition`).
- **Values used**:
  - `0`: Disabled (normal duration).
  - `> 0` (Bonus, **green**): Increases active duration by `+ X %` (e.g., `10` = `1.1x` duration, `20` = `1.2x` duration, `30` = `1.3x` duration).
  - `< 0` (Penalty, **red**): Decreases active duration by `- X %`.

## 9. Flashbang Effect Intensity (`flashBangEffectIntensityInPercent`)
- **What it does**: Sets the brightness/intensity of the temporary white screen flashbang cooldown effect triggered when Night Vision from a ring is deactivated or the ring is removed (`PlayerBase.TBJOFDeactivateNightVision`).
- **Values used**:
  - `0`: Disabled.
  - `1` to `100` (Penalty, **red**): Flashbang intensity percentage (e.g., `25` = `25%`, `50` = `50%`, `75` = `75%` on Ring of Owl Levels 1–3).

## 10. Flashbang Effect Length (`flashBangEffectLengthInPercent`)
- **What it does**: Sets the duration of the temporary flashbang cooldown effect triggered when Night Vision from a ring is deactivated (`PlayerBase.TBJOFDeactivateNightVision`).
- **Values used**:
  - `0`: Disabled.
  - `> 0` (Penalty, **red**): Flashbang duration percentage (e.g., `100` = `100%` / `1.0` base length, `150` = `150%` / `1.5`, `200` = `200%` / `2.0` on Ring of Owl Levels 1–3).

## 11. Health Regen Effect (`healthRegenEffectInPercent`)
- **What it does**: Modifies the tick speed of the player's natural health regeneration (`HealthRegenMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled (normal health regeneration).
  - `> 0` (Bonus, **green**): Increases health regeneration speed by `+ X %` (e.g., `100` = `+100%` / 2x speed, `200` = `+200%` / 3x speed, `300` = `+300%` / 4x speed on Ring of Life Levels 1–3).
  - `< 0` (Penalty, **red**): Decreases health regeneration speed by `- X %`.

## 12. Heat Comfort Effect (`heatComfortEffectInPercent`)
- **What it does**: Modifies the tick speed of the player's heat comfort regulation (`HeatComfortMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled.
  - `> 0` (Bonus, **green**): Increases heat comfort tick effect by `+ X %`.
  - `< 0` (Penalty, **red**): Decreases heat comfort tick effect by `- X %`.

## 13. Hunger Effect (`hungerEffectInPercent`)
- **What it does**: Modifies the rate at which the player's energy/food depletes over time (`HungerMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled (normal hunger consumption).
  - `> 0` (Penalty, **red**): Increases hunger consumption rate by `+ X %` (e.g., `20`, `40`, `80` on Ring of Perseverance; `100`, `300`, `500` on Ring of Life).
  - `< 0` (Bonus, **green**): Reduces hunger consumption rate by `- X %` (e.g., `-20` = `20%` slower hunger drain).

## 14. Morphine Effect (`morphineEffectInPercent`)
- **What it does**: Extends or shortens the active duration (`LIFETIME`) of a Morphine auto-injector (`MorphineMdfr.DeactivateCondition`).
- **Values used**:
  - `0`: Disabled (normal duration).
  - `> 0` (Bonus, **green**): Increases morphine duration by `+ X %` (e.g., `10`, `20`, `30` on Ring of DragonBlood Levels 1–3).
  - `< 0` (Penalty, **red**): Decreases morphine duration by `- X %`.

## 15. Night Vision Effects (`nightVisionEffect`, `nightVisionEffectMaskRemoved`, `nightVisionEffectScope`)
- **What they do**: Grant Night Vision capabilities while wearing an active ring (`TBJOFNightVisionMdfr`, `DayZPlayerCameraOptics`):
  1. `nightVisionEffect`: Enables standard Night Vision (`NVTypes.NV_GOGGLES`, green goggles view with mask).
  2. `nightVisionEffectMaskRemoved`: Upgrades Night Vision to Full Night Vision without the black goggles mask overlay (`NVTypes.NV_OPTICS_ON`). Requires `nightVisionEffect = 1`.
  3. `nightVisionEffectScope`: Enables Night Vision when aiming through weapon optics/scopes (`DayZPlayerCameraOptics`). Works on any ring where enabled.
- **Values used**:
  - `0` (`false`): Disabled.
  - `1` (`true`): Enabled.

## 16. Optic Stabilizer / Eagle Eye Effect (`eagleEffectInPercent`)
- **What it does**: Reduces weapon aiming sway multiplier (`DayZPlayerImplementAiming.CalculateSwayMultiplier`) while wearing an active ring.
- **Values used**:
  - `0`: Disabled (normal weapon sway).
  - `1` to `100` (Bonus, **green**): Reduces weapon sway by `+ X %` (e.g., `10` = `10%` less sway, `20` = `20%` less sway, `30` = `30%` less sway on Ring of Eagle Eye Levels 1–3).

## 17. Painkiller Effect (`painKillerEffectInPercent`)
- **What it does**: Extends or shortens the active duration (`LIFETIME`) of Painkiller tablets (`PainKillersMdfr.DeactivateCondition`).
- **Values used**:
  - `0`: Disabled (normal duration).
  - `> 0` (Bonus, **green**): Increases painkiller duration by `+ X %` (e.g., `10`, `20`, `30` on Ring of DragonBlood Levels 1–3).
  - `< 0` (Penalty, **red**): Decreases painkiller duration by `- X %`.

## 18. Shock Damage Effect (`shockDamageEffectInPercent`)
- **What it does**: Modifies the tick rate of shock damage (`ShockDamageMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled.
  - `> 0` (Bonus, **green**): Increases tick rate by `+ X %`.
  - `< 0` (Penalty, **red**): Decreases tick rate by `- X %`.

## 19. Shock Effect Length (`shockEffectInPercent`)
- **What it does**: Modifies how quickly the player recovers from shock / unconsciousness (`ShockMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled (normal shock recovery).
  - `< 0` (Bonus, **green**): Reduces shock duration / speeds up shock recovery by `- X %` (e.g., `-40` on Ring of Life Level 3 = `-40%` shock duration / `40%` faster shock recovery).
  - `> 0` (Penalty, **red**): Increases shock duration / slows down shock recovery by `+ X %`.

## 20. Stamina Depletion Effect (`staminaDepletionEffectInPercent`)
- **What it does**: Modifies the player's stamina depletion multiplier when sprinting, jumping, or holding breath (`StaminaHandler.RecalculateDepletionMultiplier`).
- **Values used**:
  - `0`: Disabled (normal stamina consumption).
  - `> 0` (Bonus, **green**): Reduces stamina depletion by `+ X %` so stamina drains slower (e.g., `10`, `20`, `30` on Ring of Perseverance Levels 1–3 -> `0.9x`, `0.8x`, `0.7x` depletion multiplier).
  - `< 0` (Penalty, **red**): Increases stamina depletion by `- X %` so stamina drains faster (e.g., `-10`, `-20`, `-30` on Ring of DragonBlood Levels 1–3 -> `1.1x`, `1.2x`, `1.3x` depletion multiplier).

## 21. Stamina Recovery Effect (`staminaRecoveryEffectInPercent`)
- **What it does**: Modifies the player's stamina recovery multiplier (`StaminaHandler.RecalculateRecoveryMultiplier`).
- **Values used**:
  - `0`: Disabled (normal stamina recovery).
  - `> 0` (Bonus, **green**): Increases stamina recovery speed by `+ X %` (e.g., `10`, `20`, `30` on Ring of Perseverance Levels 1–3 -> `1.1x`, `1.2x`, `1.3x` recovery multiplier).
  - `< 0` (Penalty, **red**): Decreases stamina recovery speed by `- X %` (e.g., `-10`, `-20`, `-30` on Ring of DragonBlood Levels 1–3 -> `0.9x`, `0.8x`, `0.7x` recovery multiplier).

## 22. Thirst Effect (`thirstEffectInPercent`)
- **What it does**: Modifies the rate at which the player's water/hydration depletes over time (`ThirstMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled (normal thirst consumption).
  - `> 0` (Penalty, **red**): Increases thirst consumption rate by `+ X %` (e.g., `20`, `40`, `80` on Ring of Perseverance; `300`, `500` on Ring of Life Levels 2–3).
  - `< 0` (Bonus, **green**): Reduces thirst consumption rate by `- X %` (e.g., `-20` = `20%` slower thirst drain).

## 23. Toxicity Effect Length (`toxicityEffectInPercent`)
- **What it does**: Modifies the tick rate of the toxicity modifier (`ToxicityMdfr.OnTick`).
- **Values used**:
  - `0`: Disabled.
  - `> 0` (Bonus, **green**): Increases toxicity tick rate by `+ X %`.
  - `< 0` (Penalty, **red**): Decreases toxicity tick rate by `- X %`.
