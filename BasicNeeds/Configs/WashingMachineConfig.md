# WashingMachineConfig.json

````json lines
{
    "version": "1", // Never touch this value. It is needed internally
    "energyQuantityConsumptionPerMinuted": 10.0, // How much energy will be consumed per minute per clothing
    "waterQuantityConsumptionPerMinuted": 100.0, // How much water will be consumed per minute per clothing
    "detergentQuantityConsumptionPerMinuted": 1.0, // How much detergent will be consumed per minute per clothing
    "cleanEffectivenessPerMinuted": 34.0, // How much dirt will be decreased per minute per clothing
    "itemsThatGetDamageWhenInWashedClothing": [ // Items can be get damaged when they are in inventory of clothing
        {
            "type": "IsElectricAppliance", // All Items that are electric becomes damage
            "damagePerMinute": 10 // How much damage will be done per minute
        },
        {
            "type": "Paper", // Item type
            "damagePerMinute": 10 // How much damage will be done per minute
        }
    ]
}
````