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
            ]
        }
    ]
}
````