# NPC Gear Sets Config

NPC Gear Set configuration files are located in the `GearSets` subdirectory under your global config folder:
`YourDayZServerProfileFolder\TBMods\Config\Global\GearSets\`

These files define the predefined clothing, weapons, and accessories (gear sets) that are equipped on NPCs within TBMods.

---

## File Name & Matching
The filename (excluding the `.json` extension) represents the ID of the Gear Set. For example, `NPC1.json` defines the Gear Set with the name `"NPC1"`, which can then be referenced by other configurations (e.g., in Dealer/Trader configurations or NPC spawn systems).

---

## Configuration Structure

Below is an example configuration based on `NPC1.json`:

```json lines
{
    "name": "NPC1", // The display name or identifier of the gear set.
    "items": [
        {
            "type": "WorkingGloves_Brown", //The class name of the DayZ item (case-sensitive).
            "quantityInPercent": 100.0, //The quantity, health, or fill percentage of the item (e.g., `100.0` for pristine/fully filled).
            "attachments": [], // A list of nested items that attach to or spawn inside this item (using the same item structure).
            "slot": "Gloves" // The inventory slot where this item will be equipped on the NPC character.
        },
        {
            "type": "FAL",
            "quantityInPercent": 100.0,
            "attachments": [
                {
                    "type": "Mag_FAL_20Rnd",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "slot": ""
                },
                {
                    "type": "Fal_FoldingBttstck",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "slot": ""
                }
            ],
            "slot": "Melee"
        }
    ],
    "version": "2"
}
```

## Equipment Slots

When equipping items at the root level of the `items` array, you must assign them to the correct inventory slots:

* **Clothing & Armor**:
  * `Headgear` (Hats, helmets)
  * `Mask` (Masks, balaclavas)
  * `Body` (Jackets, shirts)
  * `Vest` (Tactical vests, plate carriers)
  * `Gloves` (Handwear)
  * `Legs` (Pants, trousers)
  * `Feet` (Boots, shoes)
  * `Back` (Backpacks)
* **Accessories**:
  * `Eyewear` (Glasses, goggles)
  * `Armband` (Armbands)
  * `Hips` (Belts)
* **Weapons / Hand**:
  * `Melee` (Melee weapons, rifles on shoulder/back)
  * `Shoulder` (Rifles on shoulder)
