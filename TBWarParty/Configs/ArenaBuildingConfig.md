# ArenaBuildingConfig

These files are located in folder `TBMods\Config\TBWarParty\ArenaMatchConfigs` 

## Converter

We have created different converters to use for example the DayZ Editor (https://steamcommunity.com/sharedfiles/filedetails/?id=2250764298&searchtext=dayz+editor) 

You can find them into `Tools` folder here on GitHub.

Example 

````json lines
{
  "name": "Coliseumfinish", // Name of the arena, will not used in game.
  "m_SceneObjects": [ // here must all objects insert
    // Start first object
    {
      "param1": "Land_Prison_Wall_Large", // Type name of object
      "param2": [ // Position of Object
        3824.4296875,
        411.592529296875,
        11810.5126953125
      ],
      "param3": [ // Orientation of Object
        68.07669067382812,
        0,
        0
      ]
    },
    // Start next object
    {
      "param1": "Land_Prison_Wall_Large",
      "param2": [
        3824.4296875,
        405.5925598144531,
        11810.5126953125
      ],
      "param3": [
        68.07669067382812,
        0,
        0
      ]
    },
  ]
}

````