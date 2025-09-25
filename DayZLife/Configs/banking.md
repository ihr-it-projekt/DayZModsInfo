# banking.json

````json lines
{
    "version": "6", // Never touch this value. It is needed internally
    "positionOfBankingPoints": [
      // Start Position One
        {
            "position": [ // Postion of Bank
                4660.0,
                339.2829895019531,
                10305.0
            ],
            "orientation": [ // Orientation of Bank
                0.0,
                0.0,
                0.0
            ]
            "raidIsEnabled": 1 // Can players raid this bank 1 = On 0 = Off
        },
        // End Position One, you can add below more areas
        {
            "position": [ // Postion of Bank
                4660.0,
                339.2829895019531,
                10305.0
            ],
            "orientation": [ // Orientation of Bank
                0.0,
                0.0,
                0.0
            ]
            "raidIsEnabled": 1 // Can players raid this bank 1 = On 0 = Off
        }
    ],
    "showSumOfStoredCashInBank": 1, // Show the Sum Cash in Bank,  1 = On 0 = Off
    "raidTimeBankInSeconds": 3600, // How long a raid takes time
    "itemsCanUsedToRaidBank": [ // What kind of weapons the raider must have, he needs only one of the.
        "Deagle_Gold"
    ],
    "percentOfMoneyWhenRaid": 15, // How much money the raider get. from bank in percent  
    "bonusPerCopWhenRobtMoneyWillPaidBackInPercent": 5, // When cops pay back the robbt money, they will get a bonus
    "sellTradingTax": 10, // Tax that player have to pay, when say selling goods at trader
    "raidCoolDownTimeInSeconds": 300, // This time start running after a raid. No actions are possible with Bank Char at the cool down phase
    "maximumRaidDistanceToBank": 7, // How far a raider can be in meter to raid. Player can walk in this range in hole raid phase
    "startCapital": 5000 // How much money a new joined player get, does not work, when useMoneyAsObject is active
    "useMoneyAsObject": 1, // You can use ruble ar other currencies
    "currencyValues": { // ObjectName: value
        "MoneyRuble100": 100,
        "MoneyRuble50": 50,
        "MoneyRuble25": 25,
        "MoneyRuble10": 10,
        "MoneyRuble5": 5,
        "MoneyRuble1": 1
    },
    "raidIsCopControlled": 1,  // Players can only the bank raid, when enough cops are online, see value below 1 = On 0 = Off
    "minCountCopsForRaid": 10, // Count of online cops
    "raidTimeControlled": 1, // Player can only raid the bank in specified time periods 
    "raidStartTimeHour": 14, // Start hour in UTC
    "raidEndTimeHour": 13, // End hour in UTC
    "raidStartTimeMinute": 0, // Start minute 
    "raidEndTimeMinute": 59, // End minute
    "canStartRaidIfShopRaidRuns": 0 // Can start a bank raid if a shop raid already runs.
}
````