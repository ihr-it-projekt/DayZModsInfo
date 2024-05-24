[**`back`**](../Readme.md)


````json lines
{
    "version": "1",// Never touch this value. It is needed internally
    "revive": { // If a player will be revived from another player
        "maxWounds": 5, // Max wounds the player get when revived
        "minWounds": 1, // Min wounds the player get when revived
        "health": 0.5, // Health the player get when revived (0.0 - 1.0) 1.0 = 100%
        "blood": 0.5, // Blood the player get when revived (0.0 - 1.0) 1.0 = 100%
        "shock": 0.0 // Shock the player get when revived (0.0 - 1.0) 0 means 100% shock, 1.0 means no shock
    },
    "deleteDeadBodyTimeWhenHealedByPlayer": 5.0, // Time in seconds when the dead body will be deleted when healed by another player
    "minTimeBeforeHospital": 180, // Min time in seconds before the player can be revived in the hospital
    "minTimeBeforeKillButton": 5, // Min time in seconds before player can use the kill/suiccied button
    "enableHospital": 1, // 0 = No hospital revive, 1 = Hospital revive is enabled
    "destroyDefibrillatorAfterUsage": 0, // 0 = Defibrillator will not be destroyed after usage, 1 = Defibrillator will be destroyed after usage
    "priceForReviveInHospital": 100, // Price for revive in hospital -1 = no price for revive 100 = 100 $ for revive
    "reviveHospital": { // If a player will be revived in the hospital
        "maxWounds": 0, // Max wounds the player get when revived
        "minWounds": 0, // Min wounds the player get when revived
        "health": 1.0, // Health the player get when revived (0.0 - 1.0) 1.0 = 100%
        "blood": 1.0, // Blood the player get when revived (0.0 - 1.0) 1.0 = 100%
        "shock": 1.0 // Shock the player get when revived (0.0 - 1.0) 0 means 100% shock, 1.0 means no shock
    },
    "hospitalSpawnPoints": [ // Positions of hospital spawn points, player will spawn on one of them randomly
        {
            "id": "758198676", // ID of the spawn point, must be unique
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
            "id": "1124738668",
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
            "id": "1062071794",
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
    ]
}

````