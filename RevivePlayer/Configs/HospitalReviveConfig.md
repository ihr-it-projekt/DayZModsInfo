# HospitalReviveConfig.json and HospitalReviveConfigPremium.json

::: tip
HospitalReviveConfig = This config is for non premium players.

HospitalReviveConfigPremium = This config is for premium players.

:::

````json lines
{
    "enable": 1, // 0 = No hospital revive, 1 = Hospital revive is enabled
    "minTimeBefore": 180, // Min time in seconds before the player can be revived in the hospital
    "minTimeBeforeWhenNoOtherPlayerIsOnline": 60, // Min time in seconds before the player can be revived in the hospital when no other player is online
    "currencyType": "default", // Currency type for the price of the revive in hospital (see currencyConfig in TBMods/Config/Globals)
    "price": -1, // Price for revive in hospital | -1 = free for revive | 100 = 100 $ for revive
    "damageConfig": {
        "maxWounds": 0, // Max wounds the player get when revived
        "minWounds": 0, // Min wounds the player get when revived
        "health": 1.0, // Health the player get when revived (0.0 - 1.0) 1.0 = 100%
        "blood": 1.0, // Blood level the player get when revived (0.0 - 1.0) 1.0 = 100%
        "shock": 1.0 // Shock level the player get when revived (0.0 - 1.0) 0 means 100% shock, 1.0 means no shock
    },
    "saveItemInHand": 1, // 0 = Item in hand will NOT be saved, 1 = Item in hand will be saved
    "putItemInHand": 1, // 0 = Item in hand will NOT be put back to hand, 1 = Item in hand will be put back to hands, this option requires "saveItemInHand" to be 1
    "canSelectRespawnLocation": 0, // 0 = No respawn location selection, 1 = Respawn location selection is enabled
    "spawnPoints": [
        {
            "id": "adqoi83a67", // ID of the spawn point, must be unique
            "orientation": [ // Orientation of the spawn point
                226.99998474121095,
                0.0,
                0.0
            ],
            "point": [ // Position of the spawn point
                10283.5185546875,
                12.801782608032227,
                2293.035400390625
            ],
            "name": "Hospital 1" // Display Name of the spawn point
        },
        {
            "id": "573sbye32f", // ID of the spawn point, must be unique
            "orientation": [ // Orientation of the spawn point
                0.0,
                0.0,
                0.0
            ],
            "point": [ // Position of the spawn point
                6478.24462890625,
                9.735041618347168,
                2713.15771484375
            ],
            "name": "Hospital 2" // Display Name of the spawn point
        }
    ]
}
````