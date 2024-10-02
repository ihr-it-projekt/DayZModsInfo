# You find here all Global configurations for TB Mods

## Items

### Premium Coins

This coins give player premium status for all my mods that support premium status. 

- TBLibOneTimeCoin | One Time Coin for Car Trader, more will be added
- TBLibPremiumCoinGold | 30 Days Premium in Daily Reward
- TBLibPremiumCoinSilver | 7 Days Premium in Daily Reward
- TBLibPremiumCoinBronze | 1 Day Premium in Daily Reward

It can be that you will not find all properties or configurations in your mod. They will always automatically created when you start the server and they are needed.

You will find this configs in `YourServerProfilesFolder\TBMods\Config\Global`

## AdminConfig.json
````json lines
{
  "version": "9", // never change this, internal version number
  "admins": {
    "Add here Steam Or DayZ ID": {
      "dailyRewardAdmin": 0, // 0 = off 1 = on | is admin in daily reward mod
      "realEstateAdmin": 0, //  0 = off 1 = on | is admin in real estate mod
      "carDealerAdmin": 0, //  0 = off 1 = on | is admin in car dealer
      "basicNeedsAdmin": 0, // 0 = off 1 = on | is admin in basic needs
      "deathInsurance": 0, // 0 = off 1 = on | is admin in death insurance
      "secondHandMarket": 0, // 0 = off 1 = on | is admin in second hand market
      "revivePlayer": 0, // 0 = off 1 = on | is admin in revive player
      "jewelsOfSurvival": 0, // 0 = off 1 = on | is admin in jewels of survival
      "warParty": 0, // 0 = off 1 = on | is admin in war party
      "playerId": "Add here Steam Or DayZ ID" // Steam or DayZ ID
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

## CurrencyConfig.json
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

### Money types Extension

- ExpansionBanknoteUSD
- ExpansionBanknoteEuro
- ExpansionBanknoteHryvnia
  
## Logger.json
```json lines
{
    "version": "1", // never change this, internal version number
    "logUsePremiumCoinCSV": 1, // 1 = enables csv logging in path YourServerProfilesFolder\TBMods\Logs\Global\playerSteamId, 0 = disabled
    "logUsePremiumCoinDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordUsePremiumCoinWebhookURL": "" // Add here your discord webhook url
}
```

## TBKeyBindsConfig.json
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
