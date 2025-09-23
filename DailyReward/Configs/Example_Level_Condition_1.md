# LevelConditions/Example_Level_Condition_1.json

You have to create for every level one level condition, You can name it as you want. If you want to use the condition you have to add the name in the RewardLevels.json (see below)

````json lines
{
    "uniqueName": "Example_Level_Condition_1", // This name must match with the file name except the .json. For example if you file name is Example_Level_Condition_1.json, this value must be Example_Level_Condition_1
    "isLoaded": 0,  // Never touch this value. It is needed internally
    "level": 1, // The level of the condition
    "onlineTimeRequiredInMinutes": 10, // The time the player must be online to get the reward or -1 to disable this condition
    "playerKillsRequiredCount": -1, // The player kills (exclude head shot kills) the player must have to get the reward or -1 to disable this condition
    "headshotKillsRequiredCount": 1, // The headshot kills the player must have to get the reward or -1 to disable this condition
    "distanceTravelledRequiredInMeters": 300, // The distance the player must have to get the reward or -1 to disable this condition
    "canReTakenAfterPeriodOfDaysRealTime": 1, // The real time in days that player must wait to get the reward again or -1 to disable this condition
    "canTakenOnlyOnce": 0, // 0 = off, 1 = on If all players can take the reward only one time. The check is done by the unique name of the condition, so if you change the name, the player can take the reward again
    "animalsKillsRequiredCount": -1, // The animal kills the player must have to get the reward or -1 to disable this condition. If this condition is enabled, the "animalKills" option will be ignored
    "animalKills": { // The animal kills the player must have to get the reward leave it empty to disable this condition
        "Animal_GallusGallusDomesticus": 1 // "Animal Type Name": count of required kills, 
    },
    "infectedKillsRequiredCount": -1, // The infected kills the player must have to get the reward or -1 to disable this condition. Attention: if you enable this condition "zombieKills" option will be ignored
    "zombieKills": { // The zombie kills the player must have to get the reward leave it empty to disable this condition. For Vanilla types see below
        "TYPNAME": 1, // "Zombie Type Name": count of required kills,
        "ZmbM_FarmerFat_Blue": 2,
        "ZmbM_FarmerFat_Brown": 2,
        "ZmbM_FarmerFat_Green": 2
    },
    "aiKillsRequiredCount": -1, // The ai kills the player must have to get the reward or -1 to disable this condition
    "aiHeadShotKillsRequiredCount": -1, // The ai headshot kills the player must have to get the reward or -1 to disable this condition
    "version": "7", // Never touch this value. It is needed internally
    "displayName": "Level 1" // The display name on the level button
}
````



## Vanilla Animal Types

If an animal is not listed here, you can just kill one and then take a look into mod data folder. In player data is then created an entry  with the type of the animal.

````

Animal_GallusGallusDomesticus
Animal_GallusGallusDomesticusF_Brown
Animal_GallusGallusDomesticusF_Spotted
Animal_GallusGallusDomesticusF_White

Animal_UrsusArctos

Animal_BosTaurusF_Brown
Animal_BosTaurusF_Spotted
Animal_BosTaurusF_White
Animal_BosTaurus_Brown
Animal_BosTaurus_Spotted
Animal_BosTaurus_White

Animal_CervusElaphus
Animal_CervusElaphusF

Animal_CapraHircusF
Animal_CapraHircus_Black
Animal_CapraHircus_Brown
Animal_CapraHircus_White

Animal_SusDomesticus

Animal_CapreolusCapreolus
Animal_CapreolusCapreolusF

Animal_OvisAries
Animal_OvisAriesF

Animal_SusScrofa

Animal_CanisLupus_Grey
Animal_CanisLupus_White

````

## Vanilla Zombie Types

````

"ZmbF_BlueCollarFat_Blue",
"ZmbF_BlueCollarFat_Green",
"ZmbF_BlueCollarFat_Red",
"ZmbF_BlueCollarFat_White",
"ZmbF_CitizenANormal_Beige",
"ZmbF_CitizenANormal_Blue",
"ZmbF_CitizenANormal_Brown",
"ZmbF_CitizenBSkinny",
"ZmbF_Clerk_Normal_Blue",
"ZmbF_Clerk_Normal_Green",
"ZmbF_Clerk_Normal_Red",
"ZmbF_Clerk_Normal_White",
"ZmbF_DoctorSkinny",
"ZmbF_HikerSkinny_Blue",
"ZmbF_HikerSkinny_Green",
"ZmbF_HikerSkinny_Grey",
"ZmbF_HikerSkinny_Red",
"ZmbF_JoggerSkinny_Blue",
"ZmbF_JoggerSkinny_Brown",
"ZmbF_JoggerSkinny_Green",
"ZmbF_JoggerSkinny_Red",
"ZmbF_JournalistNormal_Blue",
"ZmbF_JournalistNormal_Green",
"ZmbF_JournalistNormal_Red",
"ZmbF_JournalistNormal_White",
"ZmbF_MechanicNormal_Beige",
"ZmbF_MechanicNormal_Green",
"ZmbF_MechanicNormal_Grey",
"ZmbF_MechanicNormal_Orange",
"ZmbF_MilkMaidOld_Beige",
"ZmbF_MilkMaidOld_Black",
"ZmbF_MilkMaidOld_Green",
"ZmbF_MilkMaidOld_Grey",
"ZmbF_NurseFat",
"ZmbF_NurseFat_Winter",
"ZmbF_ParamedicNormal_Blue",
"ZmbF_ParamedicNormal_Green",
"ZmbF_ParamedicNormal_Red",
"ZmbF_PatientOld",
"ZmbF_PatientOld_Winter",
"ZmbF_PoliceWomanNormal",
"ZmbF_ShortSkirt_beige",
"ZmbF_ShortSkirt_black",
"ZmbF_ShortSkirt_brown",
"ZmbF_ShortSkirt_checks",
"ZmbF_ShortSkirt_green",
"ZmbF_ShortSkirt_grey",
"ZmbF_ShortSkirt_red",
"ZmbF_ShortSkirt_stripes",
"ZmbF_ShortSkirt_white",
"ZmbF_ShortSkirt_yellow",
"ZmbF_SkaterYoung_Brown",
"ZmbF_SkaterYoung_Striped",
"ZmbF_SkaterYoung_Violet",
"ZmbF_SurvivorNormal_Blue",
"ZmbF_SurvivorNormal_Orange",
"ZmbF_SurvivorNormal_Red",
"ZmbF_SurvivorNormal_White",
"ZmbF_VillagerOld_Blue",
"ZmbF_VillagerOld_Green",
"ZmbF_VillagerOld_Red",
"ZmbF_VillagerOld_White",
"ZmbM_CitizenASkinny_Blue",
"ZmbM_CitizenASkinny_Brown",
"ZmbM_CitizenASkinny_Grey",
"ZmbM_CitizenASkinny_Red",
"ZmbM_CitizenBFat_Blue",
"ZmbM_CitizenBFat_Green",
"ZmbM_CitizenBFat_Red",
"ZmbM_ClerkFat_Brown",
"ZmbM_ClerkFat_Grey",
"ZmbM_ClerkFat_Khaki",
"ZmbM_ClerkFat_White",
"ZmbM_CommercialPilotOld_Blue",
"ZmbM_CommercialPilotOld_Brown",
"ZmbM_CommercialPilotOld_Grey",
"ZmbM_CommercialPilotOld_Olive",
"ZmbM_ConstrWorkerNormal_Beige",
"ZmbM_ConstrWorkerNormal_Black",
"ZmbM_ConstrWorkerNormal_Green",
"ZmbM_ConstrWorkerNormal_Grey",
"ZmbM_DoctorFat",
"ZmbM_DoctorFat_Winter",
"ZmbM_FarmerFat_Beige",
"ZmbM_FarmerFat_Blue",
"ZmbM_FarmerFat_Brown",
"ZmbM_FarmerFat_Green",
"ZmbM_FirefighterNormal",
"ZmbM_FishermanOld_Blue",
"ZmbM_FishermanOld_Green",
"ZmbM_FishermanOld_Grey",
"ZmbM_FishermanOld_Red",
"ZmbM_Gamedev_Black",
"ZmbM_Gamedev_Blue",
"ZmbM_Gamedev_Gray",
"ZmbM_HandymanNormal_Beige",
"ZmbM_HandymanNormal_Blue",
"ZmbM_HandymanNormal_Green",
"ZmbM_HandymanNormal_Grey",
"ZmbM_HandymanNormal_White",
"ZmbM_HeavyIndustryWorker",
"ZmbM_HermitSkinny_Beige",
"ZmbM_HermitSkinny_Black",
"ZmbM_HermitSkinny_Green",
"ZmbM_HermitSkinny_Red",
"ZmbM_HikerSkinny_Blue",
"ZmbM_HikerSkinny_Green",
"ZmbM_HikerSkinny_Yellow",
"ZmbM_HunterOld_Autumn",
"ZmbM_HunterOld_Spring",
"ZmbM_HunterOld_Summer",
"ZmbM_HunterOld_Winter",
"ZmbM_Jacket_beige",
"ZmbM_Jacket_black",
"ZmbM_Jacket_blue",
"ZmbM_Jacket_bluechecks",
"ZmbM_Jacket_brown",
"ZmbM_Jacket_greenchecks",
"ZmbM_Jacket_grey",
"ZmbM_Jacket_khaki",
"ZmbM_Jacket_magenta",
"ZmbM_Jacket_stripes",
"ZmbM_JoggerSkinny_Blue",
"ZmbM_JoggerSkinny_Green",
"ZmbM_JoggerSkinny_Red",
"ZmbM_JournalistSkinny",
"ZmbM_MechanicSkinny_Blue",
"ZmbM_MechanicSkinny_Green",
"ZmbM_MechanicSkinny_Grey",
"ZmbM_MechanicSkinny_Red",
"ZmbM_MotobikerFat_Beige",
"ZmbM_MotobikerFat_Black",
"ZmbM_MotobikerFat_Blue",
"ZmbM_NBC_Grey",
"ZmbM_NBC_White",
"ZmbM_NBC_Yellow",
"ZmbM_OffshoreWorker_Green",
"ZmbM_OffshoreWorker_Orange",
"ZmbM_OffshoreWorker_Red",
"ZmbM_OffshoreWorker_Yellow",
"ZmbM_ParamedicNormal_Black",
"ZmbM_ParamedicNormal_Blue",
"ZmbM_ParamedicNormal_Green",
"ZmbM_ParamedicNormal_Red",
"ZmbM_PatientSkinny",
"ZmbM_PatientSkinny_Winter",
"ZmbM_PatrolNormal_Autumn",
"ZmbM_PatrolNormal_Flat",
"ZmbM_PatrolNormal_PautRev",
"ZmbM_PatrolNormal_Summer",
"ZmbM_PatrolNormal_Winter",
"ZmbM_PolicemanFat",
"ZmbM_PolicemanSpecForce",
"ZmbM_PolicemanSpecForce_Heavy",
"ZmbM_PrisonerSkinny",
"ZmbM_Santa",
"ZmbM_SkaterYoung_Blue",
"ZmbM_SkaterYoung_Brown",
"ZmbM_SkaterYoung_Green",
"ZmbM_SkaterYoung_Grey",
"ZmbM_SoldierNormal",
"ZmbM_VillagerOld_Blue",
"ZmbM_VillagerOld_Green",
"ZmbM_VillagerOld_White",
"ZmbM_eastSoldier_Heavy_Navy",
"ZmbM_eastSoldier_normal_Navy",
"ZmbM_priestPopSkinny",
"ZmbM_usSoldier_Heavy_Woodland",
"ZmbM_usSoldier_Officer_Desert",
"ZmbM_usSoldier_normal_Desert",
"ZmbM_usSoldier_normal_Woodland",
"Zmbm_Mummy"

````