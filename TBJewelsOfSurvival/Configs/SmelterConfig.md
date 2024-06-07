[**`back`**](../Readme.md#configuration)
## SmelterConfig.json
```json lines
{
  // never change this, internal version number
  "version": "2",
  // how long is one tick in seconds
  "tickLengthInSeconds": 3,
  // how much gas is consumed per tick
  "takeGasPerTick": 0.5,
  // how many ticks are needed to produce one copper ingot
  "tickCountToProduceCopper": 2,
  // how many ticks are needed to produce one iron ingot
  "tickCountToProduceIron": 5,
  // how many ticks are needed to produce one silver ingot
  "tickCountToProduceSilver": 10,
  // how many ticks are needed to produce one gold ingot
  "tickCountToProduceGold": 15,
  // 0 = off 1 = on, if static smelter needs gas canister
  "staticSmelterNeedsGas": 1
}
```