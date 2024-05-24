[**`back`**](../Readme.md#configuration-1)
## OreSpawnAreasConfig.json
```json lines
{
    "version": "2", // never change this, internal version number
    "copperOreSpawnAreas": { // name of the ore area, never change this
        "minOreCountInArea": 1, // how many ores are minimum in this area
        "maxOreCountInArea": 5, // how many ores are maximum in this area
        "checkTimeIfEnoughItemsInAreaInSeconds": 10, // how long it takes in seconds to check if enough ores are in this area
        "oreSpawnPositions": [ // Positons, you can add somany positions you want. The min and max ore count in area will devided to all possitions. It will assigned randomly.
            {
                "position": [ // position of the ore
                    6218.919921875, 
                    0.0, // you dont need to set the high, it will be calculated to ground if you NOT use "useExactPosition" option otherwise you have to set it.
                    2349.865234375
                ],
                "radius": 10.0 // the radius of the position where the ore will spawn
            },
            {
                "position": [ // position of the ore
                    4218.919921875,
                    0.0, // you dont need to set the high, it will be calculated to ground if you NOT use "useExactPosition" option otherwise you have to set it.
                    1349.865234375
                ],
                "radius": 10.0 // the radius of the position where the ore will spawn
            }
        ],
        "useExactPosition": 0 // 0 = use random position in the radius. The Ore will allways spawn on Ground. If you want to spawm the Ore underground use: 1 = use exact position, ore will spawn on one exact position, radius option is then obsolate.
    },
}
```