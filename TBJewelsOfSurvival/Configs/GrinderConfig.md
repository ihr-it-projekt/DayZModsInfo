[**`back`**](../Readme.md#configuration)
## GrinderConfig.json
```json lines
{
  // never change this, internal version number
  "version": "3",
  // how much energy is consumed from battery per tick
  "energyQuantityConsumptionPerTick": 10,
  // how long is one tick in seconds
  "tickLengthInSeconds": 10,
  // 1 = on 2 = off, if static grinder needs battery
  "staticGrinderNeedsBattery": 1,
  // 0 = off 1 = on, can be taken into the hand and into the inventory
  "configMode": 0
}
```