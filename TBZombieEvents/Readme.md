# TBZombieEvents

## Steam

https://steamcommunity.com/sharedfiles/filedetails/?id=2902412026

## Configuration

### `TBZombieEvents` Configuration

```
{
    "version": "1", // Version of the configuration
    "timeControlled": 0, // 0 = Random, 1 = Controlled
    "startTimeHour": 18, // Start time in hours
    "startTimeMinute": 0, // Start time in minutes
    "endTimeMinute": 0, // End time in minutes
    "endTimeHour": 22, // End time in hours
    "playerControlled": 0, // 0 = Random, 1 = use minCountPlayer
    "minCountPlayer": 1, // Minimum number of players
    "minMinutesBetweenEvents": 10, // Minimum minutes between events
    "maxMinutesBetweenEvents": 60, // Maximum minutes between events
    "locations": [
        {
            "name": "Airplane Accident", // Name of the location
            "position": [
                4739.15869140625, // X
                177.31765747070313, // Y
                13236.0341796875 // Z
            ],
            "radiusOfSpawn": 25.0, // Radius of the spawn
            "countOfMaxZombies": 20, // Maximum number of zombies
            "countOfMinZombies": 5, // Minimum number of zombies
            "countOfMaxItems": 15, // Maximum number of items
            "countOfMinItems": 5, // Minimum number of items
            "playerNeedsItemsToEnter": 0, // 0 = No, 1 = Yes
            "zombieReSpawn": 1, // 0 = No, 1 = Yes
            "zombieReSpawnTick": 0, // Time in minutes
            "durationInMinutes": 60, // Duration in minutes
            "randomItemHealths": 1, // 0 = No, 1 = Yes
            "randomItemHealthsMax": 100, // Maximum health
            "randomItemHealthsMin": 50, // Minimum health
            "zombieTypes": [ // Zombie types
                "ZmbM_CitizenASkinny_Blue",
                "ZmbM_CitizenASkinny_Brown",
                "ZmbM_CitizenASkinny_Grey",
                "ZmbM_MotobikerFat_Beige",
                "ZmbM_MotobikerFat_Black",
                "ZmbM_MotobikerFat_Blue",
                "ZmbM_JoggerSkinny_Red",
                "ZmbM_SkaterYoung_Blue",
                "ZmbM_SkaterYoung_Brown",
                "ZmbM_SkaterYoung_Green",
                "ZmbM_SkaterYoung_Grey",
                "ZmbM_ClerkFat_Brown",
                "ZmbM_ClerkFat_Khaki",
                "ZmbF_JournalistNormal_White",
                "ZmbF_Clerk_Normal_White",
                "ZmbF_CitizenANormal_Blue",
                "ZmbF_CitizenBSkinny",
                "ZmbF_HikerSkinny_Grey",
                "ZmbF_SurvivorNormal_Orange",
                "ZmbF_HikerSkinny_Green",
                "ZmbF_JoggerSkinny_Green",
                "ZmbF_SkaterYoung_Striped",
                "ZmbF_BlueCollarFat_Red",
                "ZmbF_MechanicNormal_Beige",
                "ZmbF_PatientOld",
                "ZmbF_ShortSkirt_beige",
                "ZmbF_VillagerOld_Red",
                "ZmbF_JoggerSkinny_Red",
                "ZmbF_MilkMaidOld_Beige",
                "ZmbF_VillagerOld_Green",
                "ZmbF_ShortSkirt_yellow",
                "ZmbF_NurseFat",
                "ZmbF_PoliceWomanNormal",
                "ZmbF_HikerSkinny_Blue",
                "ZmbF_ParamedicNormal_Green",
                "ZmbF_JournalistNormal_Red",
                "ZmbF_SurvivorNormal_White",
                "ZmbF_JoggerSkinny_Brown",
                "ZmbF_MechanicNormal_Grey",
                "ZmbF_BlueCollarFat_Green",
                "ZmbF_DoctorSkinny"
            ],
            "itemTypes": [
                {
                    "type": "VSS", // Type of the item
                    "attachments": [
                        {
                            "type": "Mag_vss_10rnd", // Attachment type
                            "attachments": [] // Attachments
                        },
                        {
                            "type": "PSO1Optic",
                            "attachments": []
                        }
                    ]
                },
                {
                    "type": "Famas",
                    "attachments": [
                        {
                            "type": "Mag_Famas_30rnd",
                            "attachments": []
                        }
                    ]
                }
            ],
            "eventObjects": [
                {
                    "name": "Land_Wreck_C130J", // Name of the object
                    "position": [
                        4737.9013671875, // X
                        181.91348266601563, // Y
                        13257.1552734375 // Z
                    ],
                    "orientation": [
                        174.00001525878907,
                        14.999996185302735, 
                        0.0
                    ]
                },
                {
                    "name": "bldr_wreck_hmmwv",
                    "position": [
                        4720.40771484375,
                        178.3976287841797,
                        13244.5390625
                    ],
                    "orientation": [
                        -146.0,
                        0.0,
                        0.0
                    ]
                },
                {
                    "name": "CraterLong",
                    "position": [
                        4742.5791015625,
                        176.941650390625,
                        13218.921875
                    ],
                    "orientation": [
                        -7.0,
                        0.0,
                        0.0
                    ]
                }
            ],
            "neededItemsToEnter": [
                {
                    "name": "MotoHelmet_Red", // Name of the item
                    "position": "Head", // Position of the item
                    "healthDecrease": 5.0 // Health decrease
                },
                {
                    "name": "MountainBag_Green",
                    "position": "Shoulder",
                    "healthDecrease": 5.0
                }
            ]
        }
    ]
}
```