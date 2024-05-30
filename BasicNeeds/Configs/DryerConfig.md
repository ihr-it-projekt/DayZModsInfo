[**`back`**](../Readme.md)

# DryerConfig.json

````json lines
{
  "version": "1", // Never touch this value. It is needed internally
  "isInitialized": 1, // Never touch this value. It is needed internally
  "energyQuantityConsumptionPerMinuted": 10.0, // How much energy will be consumed per minute
  "dryingEffectivenessPerMinuted": 10.0, // max value is 100 min 0. How much drying effectiveness will be increased per minute
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

[**`back`**](../Readme.md)