# MedicReviveConfig.json and PremiumMedicReviveConfig.json
::: tip
This config is relvant for DayZ Life Medic System and if a Player Revive another Player without DayZ Life.

MedicReviveConfig = This config is for non premium players.
PremiumMedicReviveConfig = This config is for premium players.

:::

````json lines
{
    "enable": 1, // 0 = No medic revive, 1 = Medic revive is enabled (Only relevant if you use DayZ Life Medic System)
    "minTimeBefore": 5, // Min time in seconds before the player can be revived by a medic (Only relevant if you use DayZ Life Medic System)
    "minTimeBeforeWhenNoOtherPlayerIsOnline": 5, // Min time in seconds before the player can be revived by a medic when no other player is online (Only relevant if you use DayZ Life Medic System)
    "currencyType": "default", // Currency type for the price of the revive by a medic (see currencyConfig in TBMods/Config/Globals) (Only relevant if you use DayZ Life Medic System)
    "price": 100, // Price for revive by a medic | -1 = free for revive | 100 = 100 $ for revive (Only relevant if you use DayZ Life Medic System)
    "damageConfig": { // This part is relevant for both versions.
        "maxWounds": 50, // Max wounds the player get when revived
        "minWounds": 1, // Min wounds the player get when revived
        "health": 0.5, // Health the player get when revived (0.0 - 1.0) 1.0 = 100%
        "blood": 0.5, // Blood level the player get when revived (0.0 - 1.0) 1.0 = 100%
        "shock": 0.0 // Shock level the player get when revived (0.0 - 1.0) 0 means 100% shock, 1.0 means no shock
    },
    "minMedicCountForHospitalTimer": 1 // Min medic count for hospital timer (Only relevant if you use DayZ Life Medic System)
}
````