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
  "version": "2" // Never touch this value. It is needed internally
}
````