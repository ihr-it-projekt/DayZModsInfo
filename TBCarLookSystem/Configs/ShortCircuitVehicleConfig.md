# ShortCircuitVehicleConfig

````json lines
{
    "version": "1", // Internal version number - do not modify!
    "vehiclesCanBeShortCircuited": 1, // If 1, players can short circuit vehicles. If 0, players can't short circuit vehicles
    "needToolForShortCircuit": 0, // If 1, players need a tool to short circuit vehicles. If 0, players can short circuit vehicles without a tool
    "shortCircuitTimeInSeconds": 300, // The time in seconds it takes to short circuit a vehicle without a tool
    "repairShortCircuitTimeInSeconds": 30, // The time in seconds it takes to repair a short circuit
    "chanceToShortCircuit": 20, // Chance in percent to short circuit a vehicle without a tool
    "shortCircuitTools": [
        {
            "toolType": "Screwdriver", // Type of tool
            "quote": 30, // Quote of tool in percent, 100 = 100% chance to short circuit the car
            "damage": 100, // Damage in percent to Tool will get after usage
            "minHealth": 1, // Minimum health in percent of tool
            "timeInSeconds": 30, // Time in seconds to use tool
            "vehicleTypes": [
                "CivilianSedan",
                "Hatchback"
            ] //Vehicle types this tool can be used on, if it is empty, it can be used on all vehicles
        },
        {
            "toolType": "Lockpick", // Type of tool
            "quote": 50, // Quote of tool in percent, 100 = 100% chance to short circuit the car
            "damage": 100, // Damage in percent to Tool will get after usage
            "minHealth": 1, // Minimum health in percent of tool
            "timeInSeconds": 15, // Time in seconds to use tool
            "vehicleTypes": [] //Vehicle types this tool can be used on, if it is empty, it can be used on all vehicles
        }
    ]
}
````