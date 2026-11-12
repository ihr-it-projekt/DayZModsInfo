# GeneralConfig

````json lines
{
    "version": "1", // Internal version number - do not modify!
    "alarmTimeInSeconds": 600, // The time in seconds the alarm will sound after raid or short circuit
    "stopAlarmTimeInSeconds": 600, // The time the raider needs to turn off the alarm
    "flipVehicleConfig": {
        "canFlipVehicle": 1, // 0 = off, 1 = on. Enables the player Flip vehicle action
        "flipTimeInSeconds": 10, // Progress bar duration in seconds; 0 = instant
        "minTiltAngle": 30, // Minimum tilt in degrees for players and admins; 90 = on its side, 180 = upside down
        "requiresKeyAccess": 1, // 1 = owned vehicles require key access; unowned vehicles can be flipped by anyone
        "maxSearchRadius": 15, // Search radius in metres for a free position if the current spot is blocked
        "canExitVehicleViaContextMenu": 1 // 0 = off, 1 = on. Adds Leave vehicle to the context menu
    },
    "extensions": [
        {
            "id": "ALARM_SYSTEM", // The id of the extension, DO NOT CHANGE THE NAME. Internal used
            "price": 5000, // The price of the extension, if the vehicle type is not set, this price will be used
            "currencyType": "default", // The currency type of the extension, if the vehicle type is not set, this currency type will be used
            "requiresDiscordWebhook": 0, // DO NOT CHANGE, INTERNAL USED
            "vehicleTypPrices": [
                {
                    "carType": "ExampleCarType", // The vehicle type
                    "price": 4000, // The price of the extension for this vehicle type
                    "currencyType": "default" // The currency type of the extension for this vehicle type
                },
                {
                    "carType": "CivilianSedan",
                    "price": 5000,
                    "currencyType": "default"
                }
            ],
			"disabledVehicleTypes": [ // Mentioned vehicle type are not able to buy this extension
				"Example*", // means all vehicles types thats starts with "Example"
                "ExampleCarType", // means this exact vehicle type
                "*CarType" // means all vehicles types thats ends with "CarType"
                "*Car*" // means all vehicles types thats contains "Car"
			]
        },
        {
            "id": "DISCORD_RAID_ALERT", // DO NOT CHANGE
            "price": 5000, // The price of the extension, if the vehicle type is not set, this price will be used
            "currencyType": "default", // The currency type of the extension, if the vehicle type is not set, this currency type will be used
            "requiresDiscordWebhook": 1, // DO NOT CHANGE, INTERNAL USED
            "vehicleTypPrices": [
                {
                    "carType": "ExampleCar", // The vehicle type
                    "price": 4000, // The price of the extension for this vehicle type
                    "currencyType": "default" // The currency type of the extension for this vehicle type
                }
            ],
			"disabledVehicleTypes": [ // Mentioned vehicle type are not able to buy this extension
				"Example*", // means all vehicles types thats starts with "Example"
                "ExampleCarType", // means this exact vehicle type
                "*CarType" // means all vehicles types thats ends with "CarType"
                "*Car*" // means all vehicles types thats contains "Car"
			]
        },
        {
            "id": "DISCORD_SHORT_CIRCUIT_ALERT", // DO NOT CHANGE
            "price": 5000, // The price of the extension, if the vehicle type is not set, this price will be used
            "currencyType": "default", // The currency type of the extension, if the vehicle type is not set, this currency type will be used
            "requiresDiscordWebhook": 1, // DO NOT CHANGE, INTERNAL USED
            "vehicleTypPrices": [
                {
                    "carType": "ExampleCar", // The vehicle type
                    "price": 4000, // The price of the extension for this vehicle type
                    "currencyType": "default" // The currency type of the extension for this vehicle type
                }
            ],
			"disabledVehicleTypes": [ // Mentioned vehicle type are not able to buy this extension
				"Example*", // means all vehicles types thats starts with "Example"
                "ExampleCarType", // means this exact vehicle type
                "*CarType" // means all vehicles types thats ends with "CarType"
                "*Car*" // means all vehicles types thats contains "Car"
			]
        },
        {
            "id": "PACK_VEHICLE", // DO NOT CHANGE
            "price": 5000, // The price of the extension, if the vehicle type is not set, this price will be used
            "currencyType": "default", // The currency type of the extension, if the vehicle type is not set, this currency type will be used
            "requiresDiscordWebhook": 0, // DO NOT CHANGE, INTERNAL USED
            "vehicleTypPrices": [
                {
                    "carType": "ExampleCar", // The vehicle type
                    "price": 4000, // The price of the extension for this vehicle type
                    "currencyType": "default" // The currency type of the extension for this vehicle type
                }
            ],
			"disabledVehicleTypes": [ // Mentioned vehicle type are not able to buy this extension
				"Example*", // means all vehicles types thats starts with "Example"
                "ExampleCarType", // means this exact vehicle type
                "*CarType" // means all vehicles types thats ends with "CarType"
                "*Car*" // means all vehicles types thats contains "Car"
			]
        }
    ]
}
````