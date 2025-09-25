# SpawnPoints.json

```json lines
{
  "version": "2", // Never touch this value. It is needed internally
  "blockTimeForJobChange": 3600 //For this time period player can not open the spawn menu without dying 
  "spawnPoints": [  // Positions where Civilian can spawn
    {
      "id": "221727198",  // must be unique, if you add manually an position, you can set an empty value like "", the mod will automatically assign a value. Never change this value.
      "name": "Train Station Chernogorsk",  // The name of the Location 
      "point": [ // Coordinates of Spawn Point 
        6547.23291015625,
        14.080639839172364,
        2617.0400390625
      ],
      "orientation": [ // The Orientation of Spawn Point
        -7.892492771148682,
        0.0,
        0.0
      ],
      "items": [  // Items that the player get at spawn point
        "Jeans_Blue",
        "Shirt_BlueCheck",
        "AthleticShoes_Blue"
      ]
    }
    // You can add here more points
  ]
}
```