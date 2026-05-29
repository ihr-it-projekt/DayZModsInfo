

### DealerPoint

Located in `YourServerProfile\TBMods\Config\TBDynamicTrader\DealerPoints`. These files configure specific dealers.

Example `Weapon Trader.json`:

```json
{
    "uniqueName": "Weapon Trader Cherno", // unique name of the trader, will only use internal or in admin menus
    "version": "5", // Never touch this value. It is needed internally
    "displayName": "Weapon Trader", // Display name of the trader, will be visible to players
    "sellTax": 0.10, // Tax for selling items. Range from 1 - 0  | 1 = 100% | 0 = 0%
    "acceptOnlyCash": 0, // Accept only cash from now on; if 1, it will not accept items as payment
    "playSound": 1, // Enable/disable sound effects
    "gender": "m", // Gender of the trader: "m" = male, "f" = female
    "minSoundTime": 60, // Minimum time in seconds between sound effects
    "maxSoundTime": 600, // Maximum time in seconds between sound effects
    "enabledSounds": [ // index number of sounds
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29
    ],
    "positions": [
        { // Position 1
            "position": [ // Location of the trader object
                6909.38818359375,
                2.85197377204895,
                1391.57470703125
            ],
            "orientation": [ // Orientation of the trader object
                235.23611450195313,
                0.0015493175014853478,
                0.0008105853921733797
            ],
            "useExactPosition": 0, // Use exact position; if 0, it will be placed automatically on the ground
            "name": "Cherno", // Name of the trader position, this name will appear in the notification
            "enableNotification": 1 // Enable notification if trader change the position
        }
    ],
    "useExactPosition": 1, // deprecated will removed in future versions
    "useUTCTime": 0, // Use UTC time for opening hours; if 0, it will use server time
    "type": "TBDTTraderMachine", // Type of the trader object (see types.md)
    "useTraderChar": 1, // Use a trader NPC character; if 0, it will not spawn an NPC
    "traderCharType": "SurvivorF_Judy", // Class name of the trader NPC character
    "traderCharAttachments": { // Attachments for the trader character. Items must be configured in the TraderItemConfigs folder
        "Gloves": "WoolGlovesFingerless_White",
        "Feet": "JungleBoots_Black",
        "Shoulder": "M4A1",
        "Hips": "MilitaryBelt",
        "Headgear": "BallisticHelmet_BDU",
        "Legs": "USMCPants_Woodland",
        "Melee": "NailedBaseballBat",
        "Eyewear": "ThickFramesGlasses",
        "Mask": "Bandana_Camopattern",
        "Armband": "Armband_Crook",
        "Body": "TacticalShirt_Tan"
    },
    "openTimes": [ // Opening hours configuration
        {
            "openHour": 11,
            "openMinute": 20,
            "closeHour": 11,
            "closeMinute": 35
        }
    ],
    "safeZoneEnabled": 0, // Safe zone toggle: 0 = disabled, 1 = enabled
    "safeZoneRadius": 100.0, // Safe zone radius in meters
    "safeZoneTimeout": 10, // How long it takes, befor a player count as not in safe zone, when he leave safe zone
    "safeZoneRemoveAnimals": 1, // removes all animals in safe zone
    "safeZoneRemoveInfected": 1, // removes all infacted in safe zone
    "safeZoneRemoveEAI": 1, // removes all ai in safe zone
    "uniqueFileNames": [ // List of item unique names available at this trader
        "AK101",
        "AK74"
    ]
}
```