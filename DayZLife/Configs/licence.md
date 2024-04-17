# licence.json

[**`back`**](../Readme.md)

```json lines
{
    "version": "6", // Never touch this value. It is needed internally
    "licenceCollection": {
        "collection": [
            {
                "id": "1156127759", // must be unique, if you add manually an position, you can set an empty value like "", the mod will automatically assign a value. Never change this value.
                "price": 150, // Price for the licence
                "name": "Copper Licence", // Name of the licence, must be unique
                "position": [  // The Position where player can use that licence and the Workbench for spawn
                    2876.725830078125,
                    215.3489990234375,
                    12604.7685546875
                ],
                "orientation": [ //Orientation of the workbench
                    0.0,
                    0.0,
                    0.0
                ],
                "dependencyLicence": "", // Can have a dependency licence, see example below, her you have to add the name of the dependency licence
                "craftedItem": {  // The item that the player will get
                    "type": "DZL_Copper",
                    "quantity": 1,
                    "health": 100,
                    "spawnOnGround": 1, // Item spawn on ground if is crafted. If this value is 0, the item spawn into inventory
                    "positionIfSpawnOnGround": "7996.68359375 117.33184051513672 12621.9228515625" // Position of item, when it spawn on ground.
                },
                "craftItems": { // The resources that player need for crafting
                    "collection": [
                        {
                            "type": "DZL_Ore_Coal", // Type Name
                            "quantity": 2, // How many Items are needed
                            "health": 50, // Min health that the item must have
                           "healthReduce": 25 // not used for cratitem
                        },
                        {
                            "type": "DZL_Ore_Copper",
                            "quantity": 1,
                            "health": 10
                        }
                    ]
                },
                "toolItems": { // The tools that player need for crafting
                    "collection": [
                        {
                            "type": "Pliers", // Type name 
                            "quantity": 1, // How many tools of the type the player must have 
                            "health": 10, // Not used for tools
                            "healthReduce": 25 // How many health will reduced after usage
                        }
                    ]
                },
                "durationForCrafting": 5, // How long crafting take time
                "showNotOnMapInAlmanac": 0 // Position will hide on map in almanac 1 = on 0= off
            },
            ... you can define more licences
        ]
    },
    "positionOfLicencePoints": [ // Whrere player can buy the licence
        {
            "position": [ // Position of licence dealer
                6566.05615234375,
                6.0,
                2456.487060546875
            ],
            "orientation": [ // orientation of licence dealer
                138.0,
                0.0,
                0.0
            ]
        }
    ]
}
```