# CarConfigs Example

````json lines
{
  "uniqueName": "Hatchback", // The name of the car config, file name must be the same
  "items": [], // never change this, internal usage
  "uniqueCarNames": [ // Here you can add variations of a car, like different colors or equipment. The unique names of the cars, muss match with the files from `\TBMods\Config\TBCarDealer\PriceItems` folder
    "Hatchback_02_Black_Complete",
    "Hatchback_02_Blue_Complete"
  ],
  "category": "Cars", // The category of the car
  "canUsedForTestDrive": 1, // 0 = off, 1 = on, Players can make a test drive with this car. You need also to set "testDriveStartPosition" in the DealerPointConfig
  "maxDistanceToTestDriveSpawnPosition": 100, // The max distance in meters that the player can be away from the spawn position of the test drive car
  "maxTimeInSecondsForTestDrive": 300, // The max time in seconds that the player can drive the test drive car
  "enablePoints": 0, // If 1, reputation points will be enabled for this car, otherwise disabled
  // lowest min value -2147483648, highest max value 2147483647, if you dont want to use min value for all player set max value to -2147483648, if you dont want to use max value for all player set min value to 2147483647, if you want to use value range set min and max value
  "minPointsNeededForBuy": 10, // Minimum reputation points needed to buy this car
  "maxPointsNeededForBuy": 2147483647, // Maximum reputation points needed to buy this car
  "minPointsNeededForSell": 100, // Minimum reputation points needed to sell this car
  "maxPointsNeededForSell": 200, // Maximum reputation points needed to sell this car
  "givePlayerPointsForBuy": 50, // Points the player get for buying this car
  "givePlayerPointsForSell": 25, // Points the player get for selling this car
  "version": "2" // Never touch this value. It is needed internally
}
````