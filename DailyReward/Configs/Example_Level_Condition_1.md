
# LevelConditions/Example_Level_Condition_1.json

You have to create for every level one level condition, You can name it as you want. If you want to use the condition you have to add the name in the RewardLevels.json (see below)

````
{
    "uniqueName": "Example_Level_Condition_1", // This name must match with the file name except the .json. For example if you file name is Example_Level_Condition_1.json, this value must be Example_Level_Condition_1
    "isLoaded": 0,  // Never touch this value. It is needed internally
    "level": 1, // The level of the condition
    "onlineTimeRequiredInMinutes": 10, // The time the player must be online to get the reward or -1 to disable this condition
    "playerKillsRequiredCount": -1, // The player kills the player must have to get the reward or -1 to disable this condition
    "infectedKillsRequiredCount": -1, // The infected kills the player must have to get the reward or -1 to disable this condition
    "distanceTravelledRequiredInMeters": 300, // The distance the player must have to get the reward or -1 to disable this condition
    "canReTakenAfterPeriodOfDaysRealTime": 1, // The real time in days that player must wait to get the reward again or -1 to disable this condition
    "animalKills": { // The animal kills the player must have to get the reward leave it empty to disable this condition
        "Animal_GallusGallusDomesticus": 1 // "Animal Type Name": count of required kills, 
    },
    "version": "1" // Never touch this value. It is needed internally
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