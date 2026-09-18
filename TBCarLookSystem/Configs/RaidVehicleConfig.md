# RaidVehicleConfig

````json lines
{
    "version": "1", // Internal version number - do not modify!
    "vehiclesCanBeRaided": 1, // If 1, players can raid vehicles. If 0, players can't raid vehicles
    "needToolForRaid": 1, // If 1, players need a tool to raid vehicles. If 0, players can raid vehicles without a tool
    "carRaidTimeInSeconds": 600, // The time in seconds it takes to raid a vehicle without a tool
    "chanceToRaid": 20, // Chance in percent to raid a vehicle without a tool
    "carRaidTools": [
        {
            "toolType": "Screwdriver", // Type of tool
            "quote": 30, // Quote of tool in percent, 100 = 100% chance to raid the car
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
            "quote": 100, // Quote of tool in percent, 100 = 100% chance to raid the car
            "damage": 100, // Damage in percent to Tool will get after usage
            "minHealth": 1, // Minimum health in percent of tool
            "timeInSeconds": 15, // Time in seconds to use tool
            "vehicleTypes": [] //Vehicle types this tool can be used on, if it is empty, it can be used on all vehicles
        }
    ]
}
````