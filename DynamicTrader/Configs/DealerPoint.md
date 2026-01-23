

### DealerPoint

Located in `YourServerProfile\TBMods\Config\TBDynamicTrader\DealerPoints`. These files configure specific dealers.

Example `Weapon Trader.json`:

```json
{
    {
    "uniqueName": "Weapon Trader", // Name of the trader
    "version": "0", // Never touch this value. It is needed internally
    "sellTax": 0.10, // Tax for selling items
    "position": [ // Location of the trader object
        6542.7314453125,
        6.188297748565674,
        2478.249267578125
    ],
    "orientation": [ // Orientation of the trader object
        -48.88920974731445,
        0.00231537944637239,
        0.0008682372281327844
    ],
    "useExactPosition": 1, // Use exact position, if 0 it will be placed automatically on ground
    "useUTCTime": 0, // Use UTC time for opening hours, if 0 it will use local time
    "type": "TBDTTraderMachine", // Type of the trader object (see types.md)
    "useTraderChar": 1, // Use trader character, if 0 it will not use trader character
    "traderCharType": "SurvivorF_Judy", // Type of the trader character
    "traderCharAttachments": { // Attachments for the trader character. Must exists as a configured item in the TraderItemConfigs folder
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
    "openTimes": [ // Opening hours
        {
            "openHour": 11,
            "openMinute": 20,
            "closeHour": 11,
            "closeMinute": 35
        },
        ...
    ],
    "safeZoneEnabled": 0, // Safe zone settings, 0 = disabled, 1 = enabled
    "safeZoneRadius": 100.0, // Safe zone radius
    "uniqueFileNames": [ // List of items (unique names) available at this trader
        "AK101",
        "AK74",
        ...
    ]
}
```

