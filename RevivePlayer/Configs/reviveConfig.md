[**`back`**](../Readme.md)


````json lines
{
  "version": "7", // Never touch this value. It is needed internally
  "isInitialized": 1, // Never touch this value. It is needed internally
  "destroyDefibrillatorAfterUsage": 0, // 0 = Defibrillator will not be destroyed after usage, 1 = Defibrillator will be destroyed after usage
  "deleteDeadBodyTimeWhenHealedByPlayer": 5.0, // Time in seconds when the dead body will be deleted when healed by another player
  "minTimeBeforeKillButton": 180, // Min time in seconds before player can use the killbutton
  "revive": {
    "maxWounds": 5, // Max wounds the player get when revived
    "minWounds": 1, // Min wounds the player get when revived
    "health": 0.5, // Health the player get when revived (0.0 - 1.0) 1.0 = 100%
    "blood": 0.5, // Blood the player get when revived (0.0 - 1.0) 1.0 = 100%
    "shock": 0.0 // Shock the player get when revived (0.0 - 1.0) 0 means 100% shock, 1.0 means no shock
  },
  "enableRealEstateRespawn": 0, // 0 = No real estate respawn, 1 = Real estate respawn is enabled
  "priceForRealEstateRespawn": -1, // Price for real estate respawn -1 = no price for real estate respawn 100 = 100 $ for real estate respawn
  "minTimerBeforeRealEstateRespawn": 180, // Min time in seconds before the player can be revived in the real estate
  "reviveRealEstate": {
    "maxWounds": 0,
    "minWounds": 0,
    "health": 1.0,
    "blood": 1.0,
    "shock": 1.0
  },
  "enableHospital": 1, // 0 = No hospital revive, 1 = Hospital revive is enabled
  "minTimeBeforeHospital": 180, // Min time in seconds before the player can be revived in the hospital
  "minTimeBeforeHospitalWhenNoOtherPlayerIsOnline": 60, // Min time in seconds before the player can be revived in the hospital when no other player is online
  "priceForReviveInHospital": -1, // Price for revive in hospital -1 = no price for revive 100 = 100 $ for revive
  "reviveHospital": {
    "maxWounds": 0,
    "minWounds": 0,
    "health": 1.0,
    "blood": 1.0,
    "shock": 1.0
  },
  "hospitalSpawnPoints": [
    {
      "id": "0cdl6apubc", // ID of the spawn point, must be unique
      "orientation": [ // Orientation of the spawn point
        46.99998474121094,
        0.0,
        0.0
      ],
      "point": [ // Position of the spawn point
        10283.5185546875,
        12.801782608032227,
        2293.035400390625
      ]
    },
    {
      "id": "ig454b5fca",
      "orientation": [
        -162.0,
        0.0,
        0.0
      ],
      "point": [
        6478.24462890625,
        9.735041618347168,
        2713.15771484375
      ]
    },
    {
      "id": "jmp7ufrhxv",
      "orientation": [
        -27.0,
        0.0,
        0.0
      ],
      "point": [
        3767.240234375,
        312.504150390625,
        9011.1181640625
      ]
    }
  ],
  "priceMedicHeal": 1000, // Price for heal by medic -1 = no price for heal 100 = 100 $ for heal
  "minMedicCountForHospitalTimer": 1, // Min medic count for hospital timer
  "medicRevive": {
    "maxWounds": 2,
    "minWounds": 0,
    "health": 0.699999988079071,
    "blood": 0.699999988079071,
    "shock": 0.699999988079071
  }
}
````