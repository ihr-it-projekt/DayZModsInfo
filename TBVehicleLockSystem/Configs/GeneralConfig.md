# GeneralConfig

````json lines
{
    "alarmTimeInSeconds": 600, // The time in seconds the alarm will sound after raid or short circuit
    "stopAlarmTimeInSeconds": 600, // The time the raider needs to turn off the alarm
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