
# DealerPointConfig Example

````json lines
{
  "uniqueName": "Chernogorsk", // The name of the dealer point, file name must be the same
  "version": "3", // never change this, internal version number
  "playerCanSellCars": 0, // If you want to allow the player to sell cars, set this value to 1 otherwise to 0
  "playerCanEnterShowRoom": 1, // If you want to allow the player to enter the showroom, set this value to 1 otherwise to 0
  "playerCanBuyCars": 1, // If you want to allow the player to buy cars, set this value to 1 otherwise to 0
  "position": [ // The position of the dealer point
    6542.534180,
    6.215929,
    2477.865723
  ],
  "orientation": [ // The orientation of the dealer point
    314.0,
    0.0,
    0.0
  ],
  "spawnPosition": [
    6537.031738,
    5.995119,
    2482.719971
  ],
  "spawnOrientation": [
    166.0,
    0.0,
    0.0
  ],
  "type": "TBCDMachine", // The type of the dealer point. See: ../Types.md
  "useExactSpawnPosition": 1, // If you want to use the exact spawn position for vehicle, set this value to 1 otherwise a free position around the spawn position will be searched and used.
  "useExactPosition": 0, // If you want to use the exact position, set this value to 1 otherwise the Dealer point object will be automatically placed on the ground
  "testDriveStartPosition": [ // The position of the test drive start point, you can add multiple positions. Every test driver gets his own position. If you have 2 Position only 2 Players can make a test drive at same time
    //first position
    {
      "position": [
        14010.419921875,
        23.600000381469728,
        2918.179931640625
      ],
      "orientation": [
        -92.52999877929688,
        -0.0,
        -0.0
      ]
    },//Second position
    {
      "position": [
        13946.849609375,
        28.149999618530275,
        2903.340087890625
      ],
      "orientation": [
        48.18000030517578,
        -0.0,
        -0.0
      ]
    }
  ],
  "cars": [], // never change this, internal usage
  "uniqueFileNames": [ // The unique names of the cars you want to offer here, muss match with the file names from `\TBMods\Config\TBCarDealer\CarConfigs` folder 
    "Hatchback",
    "Hatchback_2"
  ]
}
````