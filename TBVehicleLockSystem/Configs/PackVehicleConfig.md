# PackVehicleConfig

```json lines
{
    "version": "2", // Internal version number - do not modify!
    "canPackVehicle": 1, // 0 = off, 1 = on. If 1, player can pack the car
    "vehicleCargoMustBeEmpty": 1, // 0 = off, 1 = on. If 1, vehicle cargo must be empty to pack the car
	"handNeedsToBeEmpty": 1, // 0 = off, 1 = on. If 1, hand needs to be empty to pack the car
    "packTimeInSeconds": 60, // The time in seconds it takes to pack the car
    "unpackTimeInSeconds": 60, // The time in seconds it takes to unpack the car
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