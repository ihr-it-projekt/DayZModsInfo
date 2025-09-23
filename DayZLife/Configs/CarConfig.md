# CarConfig.json

````json lines
{
    "carCollisionDamage": 0, //Car can take damage via collision 0 = off 1 = on
    "disallowCarCollisionWhenNoMedicIsOnline": 0, // If this is enabled you will not get any car damage, if no medic is online
    "canGetCarsFromEveryGarage": 1, // Parked car can be taken from every garage  //0 = off 1 = on
    "carRaidTimeInSeconds": 60, //  How long a raider need to raid the car
    "chanceToRaid": 2, // if value is 1 every raid is successful, so higher the value, so lower the chance to be successful 
    "carInsurancePrice": 2000, // Price for car insurance
    "carRaidTools": [ // Raid tools for car
        "Lockpick"
    ],
    "canStoreCarsWithGoods": 0,  //If car will stored into garage, the car can have items in inventory 0 = off 1 = on
    "garages": [ // Here can player store her cars in
        {
            "position": [ // Position of the garage NPC
                6360.0,
                9.520000457763672,
                2653.0
            ],
            "orientation": [ // Orientation of NPC
                124.0,
                0.0,
                0.0
            ],
            "spawnPositionOfVehicles": [ // Position where the cars has to stay to store cars in. Cars will also spawn there
                6365.0,
                9.100000381469727,
                2648.0
            ],
            "spawnOrientationOfVehicles": [ // Orientation of cars
                180.0,
                0.0,
                0.0
            ]
        }
    ],
    "carTypesToStore": [ // Types.md of cars that can be stored
        "OffroadHatchback",
        "OffroadHatchback_Blue",
        "OffroadHatchback_White",
        "Hatchback_02",
        "Hatchback_02_Blue",
        "Hatchback_02_Black",
        "Sedan_02",
        "Sedan_02_Red",
        "Sedan_02_Grey",
        "CivilianSedan",
        "CivilianSedan_Wine",
        "CivilianSedan_Black",
        "Truck_01_Covered",
        "Truck_01_Covered_Blue",
        "Truck_01_Covered_Orange"
    ],
    "version": "6"  // Never touch this value. It is needed internally
}
````