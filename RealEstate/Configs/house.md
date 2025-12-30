# house.json
````json lines
{
    "version": "12", // Never touch this value. It is needed internally
    "isInitialized": 1, // Never touch this value. It is needed internally
    "showMap": 1, // Show the map in the house menu
    "howManyHousesCanPlayerBuy": 1, // How many houses can a player buy
    "playerCanRespawnInHouse": 1, // Player can by respawn extension
    "useBlackListedAreas": 0, // 1 = on 0 = off, if on, the player can not buy a house in the black listed area. Please do not use black and white list together
    "useWhiteListedAreas": 0, // 1 = on 0 = off, if on, the player can buy a house only in the white listed area. Please do not use black and white list together
    "notSoldHousesAreLocked": 0, // 1 = on 0 = off, if on, all not sold houses that are NOT in blacklist and NOT in whitelist area are locked
    "notSoldHousesInBlackListedAreasAreLocked": 0, // 1 = on 0 = off, if on, all not sold houses that are in blacklist area are locked
    "notSoldHousesInWhiteListedAreasAreLocked": 0, // 1 = on 0 = off, if on, all not sold houses that are in whitelist area are locked
    "stopGlobalStopDisappearingCheck": 0, // 1 = on, 0 = off, This will diable the job that checks for items liftime and reset them. 
    "inactiveDaysBeforePlayerDataWillDeleted": 300, // if a player is inactive for x days, all data in that mod will be deleted
    "closeDoorsAtServerRestartAfterSeconds": 30, // when the server restarts, the looked doors will be closed after x seconds
    "housesCanOnlyBeRaidWhenOwnerIsOnline": 0, // 1 = on 0 = off, if on, a house can only be raided when the owner is online, if raid has already started and the owner goes offline, the raid will be continued as long "raidCoolDownInSeconds" from house definition is not over.  
    "blackListedAreas": [ // The blacklisted areas
        { // area 1
            "position": [
                4474.0,
                6.0,
                2462.0
            ],
            "radius": 50
        },
        { // area 2
            "position": [
                1000.0,
                6.0,
                2462.0
            ],
            "radius": 150
        }
        // you can add more areas
    ],
    "whiteListedAreas": [ // The whitelisted areas
        { // area 1
            "position": [
                3649.0,
                7.0,
                2475.0
            ],
            "radius": 100
        },
        { // area 2
            "position": [
                1649.0,
                7.0,
                2475.0
            ],
            "radius": 50
        }
        // you can add more areas
    ],
    "houseDefinitionNames": [ // Define here all house types that you want to use, after first start the house definition files will be created in `YourServerProfilesFolder\TBMods\Config\TBRealEstate\HouseDefinitions` folder
        "Land_Garage_Row_Small",
        "Land_Shed_W6",
        "Land_Garage_Office",
        "Land_Factory_Small",
        "Land_House_1B01_Pub",
        "Land_House_1W10",
        "Land_House_1W10_Brown",
        "Land_House_1W03",
        "Land_House_1W09_Yellow",
        "Land_House_1W04",
        "Land_House_2W01",
        "Land_House_1W08",
        "Land_House_1W08_Brown",
        "Land_House_2B02",
        "Land_House_2B01",
        "Land_House_1W07",
        "Land_House_1W11",
        "Land_House_1W05",
        "Land_House_1W05_Yellow",
        "Land_House_1W01",
        "Land_House_1W06",
        "Land_House_2W02",
        "Land_House_2W03",
        "Land_House_2W04",
        "Land_House_2W04_Yellow",
        "Land_House_2B03"
    ],
    "houseConfigs": [] // only for interla usage, keep it like it is
}
````