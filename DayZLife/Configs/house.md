# house.json

If you create a new job in paycheck.json, a new definition will automatically be added here after first server restart or config reload.

```json lines
{
    "version": "7", // Never touch this value. It is needed internally
    "minCountOfCopsForRaid": 3,  // if a player wants to raid a house, A min count of cops has to be on duty
    "copHouseConfigs": [], // Deprecated, will removed in future
    "medicHouseConfigs": [], // Deprecated, will removed in future
    "armyHouseConfigs": [],  // Deprecated, will removed in future
    "jobHouseDefinitions": [ // Here you can define the houses for each job
        {
            "jobId": "Cop", // Must be the same as in paycheck.json
            "houseDefinitions": [ // Here you can define the houses for the job
                {
                    "houseType": "Land_Village_PoliceStation", // House type
                    "raidTools": [ // Tools that a player must have in hands to raid the house
                        "Crowbar"
                    ],
                    "raidTimeInSeconds": 30 // How long the raid takes in seconds
                },
                ... more types
            ]
        },
        { // next job
            "jobId": "Medic",
            "houseDefinitions": [
                {
                    "houseType": "Land_City_Hospital",
                    "raidTools": [
                        "Crowbar"
                    ],
                    "raidTimeInSeconds": 30
                },
                {
                    "houseType": "Land_Village_HealthCare",
                    "raidTools": [
                        "Crowbar"
                    ],
                    "raidTimeInSeconds": 30
                }
            ]
        },
        {
            "jobId": "Army",
            "houseDefinitions": [
                {
                    "houseType": "Land_Tisy_HQ",
                    "raidTools": [
                        "Crowbar"
                    ],
                    "raidTimeInSeconds": 30
                },
                {
                    "houseType": "Land_Mil_ATC_Small",
                    "raidTools": [
                        "Crowbar"
                    ],
                    "raidTimeInSeconds": 30
                },
                {
                    "houseType": "Land_Mil_ATC_Big",
                    "raidTools": [
                        "Crowbar"
                    ],
                    "raidTimeInSeconds": 30
                },
                {
                    "houseType": "Land_Mil_Airfield_HQ",
                    "raidTools": [
                        "Crowbar"
                    ],
                    "raidTimeInSeconds": 30
                }
            ]
        },
        {
            "jobId": "Mechanic",
            "houseDefinitions": []
        }
    ]
}

```