# You find here all Global configurations for TB Mods

## Items

### Premium Coins

This coins give player premium status for all my mods that support premium status. 

- TBLibPremiumCoinGold | 30 Days Premium in Daily Reward
- TBLibPremiumCoinSilver | 7 Days Premium in Daily Reward
- TBLibPremiumCoinBronze | 1 Day Premium in Daily Reward

It can be that you will not find all properties or configurations in your mod. They will always automatically created when you start the server and they are needed.

You will find this configs in `YourServerProfilesFolder\TBMods\Config\Global`

## AdminConfig.json
````
{
  "version": "1", // never change this, internal version number
  "admins": {
    "Add here Steam Or DayZ ID": {
      "dailyRewardAdmin": 0, // is admin in daily reward mod
      "realEstateAdmin": 0, // is admin in real estate mod
      "playerId": "Add here Steam Or DayZ ID" // Steam or DayZ ID
    },
    "7656119813296317725": {
      "dailyRewardAdmin": 1,
      "realEstateAdmin": 1,
      "playerId": "765611328196317725"
    }
  }
}
````

## CurrencyConfig.json
````
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

## Logger.json
```
{
    "version": "1", // never change this, internal version number
    "logUsePremiumCoinCSV": 1, // 1 = enables csv logging in path YourServerProfilesFolder\TBMods\Logs\Global\playerSteamId, 0 = disabled
    "logUsePremiumCoinDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordUsePremiumCoinWebhookURL": "" // Add here your discord webhook url
}
```

### Money types Extension

- ExpansionBanknoteUSD
- ExpansionBanknoteEuro
- ExpansionBanknoteHryvnia

## TBKeyBindsConfig.json
````
{
  "version": "1", // never change this, internal version number
  "keyBinds": [
    {
      "name": "UAInputOpenTBDailyReward",
      "defaultKey": 25, // default key is P, if you want to have another key, you can change it here. You can find the numbers in TBKeyCodeMatch.json
      "useServerKeyBind": 0 // if you enable this. All players will forced to use your keybind and will have "o" as default key
    },
    {
      "name": "UAInputOpenTBJOFBook",
      "defaultKey": 24,
      "useServerKeyBind": 0
    },
    {
      "name": "UAInputOpenTBRevive",
      "defaultKey": 23,
      "useServerKeyBind": 0
    }
  ]
}
````
