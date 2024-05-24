[**`back`**](../Readme.md)

## DealerPointConfig Example

````json lines
{
  "uniqueName": "Chernogorsk", // The name of the dealer point, file name must be the same
  "version": "1", // never change this, internal version number
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
  "useExactSpawnPosition": 0,
  "useExactPosition": 0, // If you want to use the exact position, set this value to 1 otherwise the Dealer point object will be automatically placed on the ground 
  "cars": [], // never change this, internal usage
  "uniqueFileNames": [ // The unique names of the cars you want to offer here, muss match with the file names from `\TBMods\Config\TBCarDealer\CarConfigs` folder 
    "Hatchback",
    "Hatchback_2"
  ]
}
````