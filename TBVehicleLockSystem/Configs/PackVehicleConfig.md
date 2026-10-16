# PackVehicleConfig

```json lines
{
    "version": "3", // Internal version number - do not modify!
    "canPackVehicle": 1, // 0 = off, 1 = on. If 1, player can pack the car
    "vehicleCargoMustBeEmpty": 1, // 0 = off, 1 = on. If 1, vehicle cargo must be empty to pack the car
	"handNeedsToBeEmpty": 1, // 0 = off, 1 = on. If 1, hand needs to be empty to pack the car
    "packTimeInSeconds": 60, // The time in seconds it takes to pack the car
    "unpackTimeInSeconds": 60, // The time in seconds it takes to unpack the car
    "canUnpackByThrowing": 1, // 0 = off, 1 = on. If 1, a packed car can be thrown like a grenade and gets unpacked where it lands
    "throwUnpackTimeInSeconds": 60, // The time in seconds the thrower has to wait (progress bar, standing still) after the packed car landed until it gets unpacked. Cancelled if anyone moves or picks up the package in the meantime
    "unpackBlacklistAreas": [
        {
            "name": "Example Blacklist Area", // Example Blacklist Area Name, you can name it as you want
            "position": [ // Coordinates of the blacklist area
                0.0, // X coordinate
                0.0, // Y coordinate
                0.0  // Z coordinate
            ],
            "radius": 10 // The radius in meters around the position where the car can't be unpacked
        }
    ]
}
```