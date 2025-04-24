# You find here all Global configurations for TB Mods

## Items

### Premium Coins

This coins give player premium status for all my mods that support premium status. 

- TBLibOneTimeCoin | One Time Coin for Car Trader, more will be added
- TBLibPremiumCoinGold | 30 Days Premium in Daily Reward
- TBLibPremiumCoinSilver | 7 Days Premium in Daily Reward
- TBLibPremiumCoinBronze | 1 Day Premium in Daily Reward

It can be that you will not find all properties or configurations in your mod. They will always automatically create when you start the server and they are needed.

## FAQ
### How to give player premium status?
#### Coins
There are different premium coins implemented. You can find them in types description of the mod. Give one of the coins to the player. He has to use the coin in game with the F Action.

#### API
If you don´t want to use Premium coins, you can also use the "API". 

1. enable API in `YourServerProfilesFolder\TBMods\Config\Global\PremiumConfig.json` and restart your server or reload the configs
2. open `YourServerProfilesFolder\TBMods\Data\Global\AddPremium`
3. add a file for the player you want to give premium status. The file must have the following pattern.
   `{SteamID}_{DurationInDays}_{ModName}.premium` so for example `7656119813296317725_30_DailyReward.premium`
    
    Possible values for ModName are: 
   - DailyReward
   - SecondHand
   - CarDealer
   - DeathInsurance
    Possible values for DurationInDays are: any number between 1 and 999

The Premium status will be given to the player, after the "API" has checked the folder. The file will after usage deleted. Invalid files will stay. If you see files that will not processed, please check the server script log for entries starting with `[TB Premium API]`.
Every successful processed file will be logged in csv or discord. See Logger.json for more information.

## Global Configs

You will find this configs in `YourServerProfilesFolder\TBMods\Config\Global`

### AdminConfig.json
````json lines
{
  "version": "9", // never change this, internal version number
  "admins": {
    "Add here Steam ID Or DayZ ID": {
      "dailyRewardAdmin": 0, // 0 = off 1 = on | is admin in daily reward mod
      "realEstateAdmin": 0, //  0 = off 1 = on | is admin in real estate mod
      "carDealerAdmin": 0, //  0 = off 1 = on | is admin in car dealer
      "basicNeedsAdmin": 0, // 0 = off 1 = on | is admin in basic needs
      "deathInsurance": 0, // 0 = off 1 = on | is admin in death insurance
      "secondHandMarket": 0, // 0 = off 1 = on | is admin in second hand market
      "revivePlayer": 0, // 0 = off 1 = on | is admin in revive player
      "jewelsOfSurvival": 0, // 0 = off 1 = on | is admin in jewels of survival
      "warParty": 0, // 0 = off 1 = on | is admin in war party
      "playerId": "Add here Steam ID Or DayZ ID" // Steam or DayZ ID
    },
    "7656119813296317725": {
      "dailyRewardAdmin": 1,
      "realEstateAdmin": 1,
      "carDealerAdmin": 1,
      "basicNeedsAdmin": 1,
      "deathInsurance": 1,
      "secondHandMarket": 1,
      "revivePlayer": 1,
      "jewelsOfSurvival": 1,
      "warParty": 1,
      "playerId": "765611328196317725"
    }
  }
}
````

### CurrencyConfig.json
````json lines
{
  "version": "1", // never change this, internal version number
    "currencyValues": { // Currency values for the your currencies
        "MoneyRuble1": 1, // "ItemName": ITEM VALUE // Attention the Typename is key sensitive
        "MoneyRuble5": 5,
        "MoneyRuble10": 10,
        "MoneyRuble25": 25,
        "MoneyRuble50": 50,
        "MoneyRuble100": 100
    },
    "useMoneyFromLBMasterATM": 1 // If you ae using advanced banking system from LBMaster, you can use to take the money from the ATM. 0 = disabled, 1 = enabled
} 
````

#### Money types Extension

- ExpansionBanknoteUSD
- ExpansionBanknoteEuro
- ExpansionBanknoteHryvnia
  
### Logger.json
```json lines
{
    "version": "2", // never change this, internal version number
    "logUsePremiumCoinCSV": 1, // 1 = enables csv logging in path YourServerProfilesFolder\TBMods\Logs\Global\playerSteamId, 0 = disabled Logs the premium coins usage on csv
    "logUsePremiumCoinDiscord": 1, // 1 = enables discord logging, 0 = disabled Logs the premium coins usage on discord
    "discordUsePremiumCoinWebhookURL": "", // Add here your discord webhook url
    "logUsePremiumAPICSV": 1, // 1 = enables csv logging in path YourServerProfilesFolder\TBMods\Logs\Global\playerSteamId, 0 = disabled Logs the premium coins usage on csv
    "logPremiumAPIDiscord": 1, // 1 = enables discord logging, 0 = disabled Logs the premium API usage on discord
    "discordLogPremiumAPIWebhookURL": "" // Add here your discord webhook url Logs the premium API usage on discord
}
```

### PremiumConfig.json
````json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 1, // never change this, internal usage
    "enableAPI": 0, // 0 = off 1 = on | if you want to use the API for premium coins, set this value to 1 otherwise to 0
    "checkAPITimeInMinutes": 1 // if you want to check the API every x minutes, min value is 1
}
````

### TBKeyBindsConfig.json
````json lines
{
  "version": "1", // never change this, internal version number
  "keyBinds": [
    {
      "name": "UAInputOpenTBDailyReward",
      "defaultKey": 25, // default key is P, if you want to have another key, you can change it here. You can find the numbers in TBKeyCodeMatch.json
      "useServerKeyBind": 0 // if you enable this. All players will be forced to use your keybind and will have configured defaultKey
    },
    {
      "name": "UAInputOpenTBSHMBulletinBoard",
      "defaultKey": 47,
      "useServerKeyBind": 0
    },
    {
      "name": "UAInputOpenTBRevive",
      "defaultKey": 23,
      "useServerKeyBind": 0
    },
    {
      "name": "UAInputOpenTBWarParty",
      "defaultKey": 48,
      "useServerKeyBind": 0
    },
    {
      "name": "UAInputOpenTBJOFBook",
      "defaultKey": 24,
      "useServerKeyBind": 0
    }
  ]
}
````

### VehicleSpawnConfig.json
### Only for Car Dealer, Second Hand Market and Daily Reward
````json lines
{
  "version": "1", // never change this, internal version number
  "isInitialized": 1, // never change this, internal version number
  "vehicleSizes": {
    "Truck_01_Covered": [ // Vehicle Type
      3.0, // width
      3.5, // height
      7.0 // length
    ],
    "default": [ // Default values for all vehicles that are not in the list
      4.0, // width
      2.0, // height
      4.0 // length
    ]
  }
}
````
