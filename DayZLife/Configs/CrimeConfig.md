# CrimeConfig.json:

```json lines
{
  "version": "1", // Never touch this value. It is needed internally
  "maxMoneyPerTick": 30, // maximum money per tick
  "minMoneyPerTick": 3, // minimum money per tick
  "maxMoneyPerRob": 100000, // maximum money that a player can get
  "robTools": [
    "Deagle" // Object that player must hold in hands
  ],
  "raidIsCopControlled": 0, // Enable check, if configured cop count must be online 0 = off 1 = on
  "raidTimeControlled": 0, // Enable check for time controlled raids 0 = off 1 = on
  "minCountCopsForRaid": 5, // Set the minimum count of cops when option "raidIsCopControlled" is enabled
  "raidStartTimeHour": 16, // First hour (UTC) when raid can started
  "raidEndTimeHour": 22, // Last hour (UTC) when raid can started
  "raidStartTimeMinute": 0, // First minuted when raid can started 
  "raidEndTimeMinute": 59, // Last minuted when raid can started
  "raidDurationTickInSeconds": 60, // How long one tick take 
  "maxRaidDurationInSeconds": 6000,// Maximum of raid duration time
  "copAlarmFactorForCopMessage": 0.949999988079071, // Cop alarm factor. Min value 0 max value 1. This value describ when cops get  notification, So higer the value, so lower the chance that cops get a notification where is the shop robbery and who make the robbery 
  "raidCoolDownTimeInSeconds": 1800, // How long nobody can start a new robbery in seconds
  "maximumRaidDistanceToShop": 20, // Maximum distance to the shop, raid will stop if player is to far away at check time
  "canStartRaidIfBankRaidRuns": 0, // Takes care if a bank robbery runs, 0 = off 1 = on
  "canUnrestrainSelf": 1, // If this is set to 0, player can not unrestrain himself
  "shopPosition": [  //Where are the positions to rob. Default position is at the fuel station in Electro. You can add as many points as you want. But there can only happen one shop robbery at the same time.
    {
      "position": [
        6873.430176,
        8.302020,
        3093.559082
      ],
      "orientation": [
        135.0,
        0.0,
        0.0
      ]
    }
  ]
}
```