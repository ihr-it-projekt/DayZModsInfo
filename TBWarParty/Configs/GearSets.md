# Gear Sets for TBWarArena

This files are located in GearSets folder. Filename must be the same as the name in the ArenaMatchConfigs file.

````json lines
{
    "name": "Example1", // The name of the gear set will be used to display the name in game.
    "items": [
        {
          "type": "Deagle", // Type of item
          "quantityInPercent": 100.0, // How many percentages of quantity for this item will be spawned.
          "attachments": [], // Attachments for this item, se below for a full example
          "quickBarEntityShortcut": 0, // The quick bar entity shortcut for this item, -1 means no quick bar entity shortcut
          "isInHand": 1 // 1 = in hand, 0 = not in hand, Will only work if the Item is direct, listed in the items array, if it is in an attachment, this value will be ignored
        },
        {
            "type": "PoliceCap",
            "quantityInPercent": 100.0, 
            "attachments": [], 
            "quickBarEntityShortcut": -1,
            "isInHand": 0
        },
        {
            "type": "PoliceJacketOrel",
            "quantityInPercent": 100.0,
            "attachments": [
                {
                    "type": "Deagle",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "quickBarEntityShortcut": 0,
                    "isInHand": 0
                },
                {
                    "type": "Mag_Deagle_9rnd",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "quickBarEntityShortcut": -1,
                    "isInHand": 0
                },
                {
                    "type": "Mag_Deagle_9rnd",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "quickBarEntityShortcut": -1,
                    "isInHand": 0
                },
                {
                    "type": "Mag_Deagle_9rnd",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "quickBarEntityShortcut": -1,
                    "isInHand": 0
                }
            ],
            "quickBarEntityShortcut": -1
        },
        {
            "type": "PolicePantsOrel",
            "quantityInPercent": 100.0,
            "attachments": [],
            "quickBarEntityShortcut": -1,
            "isInHand": 0
        },
        {
            "type": "PoliceVest",
            "quantityInPercent": 100.0,
            "attachments": [],
            "quickBarEntityShortcut": -1,
            "isInHand": 0
        },
        {
            "type": "JungleBoots_Black",
            "quantityInPercent": 100.0,
            "attachments": [],
            "quickBarEntityShortcut": -1,
            "isInHand": 0
        }
    ],
    "version": "1"
}
````