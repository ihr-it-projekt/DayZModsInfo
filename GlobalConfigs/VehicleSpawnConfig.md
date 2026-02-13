# VehicleSpawnConfig.json

File is located in `YourDayZServerProfileFolder\TBMods\Config\Global`

## Only for Car Dealer, Second Hand Market and Daily Reward

````json lines
{
  "version": "1", // never change this, internal version number
  "isInitialized": 1, // never change this, internal version number
  "vehicleSizes": {
    "Truck_01_Covered": [ // Vehicle Type
      3.0, // width
      3.5, // height
      7.0 // length
    ],
    "default": [ // Default values for all vehicles that are not in the list
      4.0, // width
      2.0, // height
      4.0 // length
    ]
  }
}
````