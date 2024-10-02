[back](Index.md)

# Gear Sets for TBWarArena

This files are located in GearSets folder. Filename must be the same as the name in the ArenaMatchConfigs file.

````json lines
{
    "name": "Example1", // Name of the gear set, will be used to display the name in game.
    "items": [
        {
            "type": "PoliceCap", // Type of item
            "quantityInPercent": 100.0, // How many percent of quantity for this item will be spawned
            "attachments": [], // Attachments for this item, se below for full example
            "quickBarEntityShortcut": -1 // Quickbar slot for this item -1 = not in quickbar start with 0
        },
        {
            "type": "PoliceJacketOrel",
            "quantityInPercent": 100.0,
            "attachments": [
                {
                    "type": "Deagle",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "quickBarEntityShortcut": 0
                },
                {
                    "type": "Mag_Deagle_9rnd",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "quickBarEntityShortcut": -1
                },
                {
                    "type": "Mag_Deagle_9rnd",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "quickBarEntityShortcut": -1
                },
                {
                    "type": "Mag_Deagle_9rnd",
                    "quantityInPercent": 100.0,
                    "attachments": [],
                    "quickBarEntityShortcut": -1
                }
            ],
            "quickBarEntityShortcut": -1
        },
        {
            "type": "PolicePantsOrel",
            "quantityInPercent": 100.0,
            "attachments": [],
            "quickBarEntityShortcut": -1
        },
        {
            "type": "PoliceVest",
            "quantityInPercent": 100.0,
            "attachments": [],
            "quickBarEntityShortcut": -1
        },
        {
            "type": "JungleBoots_Black",
            "quantityInPercent": 100.0,
            "attachments": [],
            "quickBarEntityShortcut": -1
        }
    ],
    "version": "1"
}
````

[back](Index.md)