# paycheck.json

````json lines

{
    "version": "3", // Never touch this value. It is needed internally
    "cops": [], // Deprecated, will removed in future
    "medics": [], // Deprecated, will removed in future
    "civils": [], // Deprecated, will removed in future
    "armies": [], // Deprecated, will removed in future
    "jobNames": [ // Here you can define the job names, if you add a new one it will automatically create and update needed configurations on server restart or config reload
        "Cop",
        "Medic",
        "Army",
        "Mechanic"
    ],
    "jobPayChecks": [ // Here you can define the paychecks for each job
        {
            "jobId": "Cop", // Never change the job id for medic, cop, and army, for all other jobs you can use what you want
            "paychecks": [
                {
                    "jobName": "Cop",  // Must be the same as in jobId
                    "amount": 1000, // Amount of money that a player get
                    "onlineMinutesForPay": 30, // How long a player must be online to get the paycheck
                    "rank": "Rekrut", // Rank of the player
                    "isFallbackRank": 1 // you MUST have only one with value 1, all other ranks must have here the value 0. This rank MUST be the lowest rank
                },
                {
                    "jobName": "Cop",
                    "amount": 2000,
                    "onlineMinutesForPay": 30,
                    "rank": "Captian",
                    "isFallbackRank": 0
                },
                {
                    "jobName": "Cop",
                    "amount": 3000,
                    "onlineMinutesForPay": 30,
                    "rank": "Boss",
                    "isFallbackRank": 0
                }
            ]
        },
        {
            "jobId": "Medic",
            "paychecks": [
                {
                    "jobName": "Medic",
                    "amount": 1000,
                    "onlineMinutesForPay": 30,
                    "rank": "Rekrut",
                    "isFallbackRank": 1
                },
                {
                    "jobName": "Medic",
                    "amount": 2000,
                    "onlineMinutesForPay": 30,
                    "rank": "Captian",
                    "isFallbackRank": 0
                },
                {
                    "jobName": "Medic",
                    "amount": 3000,
                    "onlineMinutesForPay": 30,
                    "rank": "Boss",
                    "isFallbackRank": 0
                }
            ]
        },
        {
            "jobId": "Army",
            "paychecks": [
                {
                    "jobName": "Army",
                    "amount": 1000,
                    "onlineMinutesForPay": 30,
                    "rank": "Rekrut",
                    "isFallbackRank": 1
                },
                {
                    "jobName": "Army",
                    "amount": 2000,
                    "onlineMinutesForPay": 30,
                    "rank": "Captian",
                    "isFallbackRank": 0
                },
                {
                    "jobName": "Army",
                    "amount": 3000,
                    "onlineMinutesForPay": 30,
                    "rank": "Boss",
                    "isFallbackRank": 0
                }
            ]
        },
        {
            "jobId": "Mechanic",
            "paychecks": [
                {
                    "jobName": "Mechanic",
                    "amount": 1000,
                    "onlineMinutesForPay": 30,
                    "rank": "Rekrut",
                    "isFallbackRank": 1
                },
                {
                    "jobName": "Mechanic",
                    "amount": 2000,
                    "onlineMinutesForPay": 30,
                    "rank": "Captian",
                    "isFallbackRank": 0
                },
                {
                    "jobName": "Mechanic",
                    "amount": 3000,
                    "onlineMinutesForPay": 30,
                    "rank": "Boss",
                    "isFallbackRank": 0
                }
            ]
        }
    ]
}
````