# TB Death Insurance

<img src="./DeathInsurance.jpeg" alt="TB Death Insurance" width="512"/>

## Description
This mods allows player to have an insurance for their gear. If they die, they can get their gear back. 

## Shop Link
https://lbmaster.de/product.php?id=34

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

https://youtu.be/xdvwHjvxJYw

## Features

- Player can buy an insurance for their gear
- You can configure 
  - multiple insurance durations and prices
  - max heirs per insurance
  - position of insurance trader
  - time when insurance will be active after death
  - non pieced insurance cases (Gear) will be deleted after configured time
- Player can name heirs
- new Object: Insurance trader (type TBDIMachine)
- Gear can be picked up at insurance trader after death
- works with TB Revive Player and TB Carry
- supports Advanced Banking System from LBMaster
- player can have only one insurance at the same time
- if player wants to change the insurance, he has to make a new one

## Configuration

All Configurations you will find in `YourServerProfilesFolder\TBMods\Config\TBDeathInsurance`



### Config.json

``` json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 0, // never change this, internal usage
    "maximumHeirsForOneInheritance": 10, // maximum heirs for one inheritance that can player add
    "insuranceCaseWillDeletedAfterSeconds": 86400, 
    "timeInSecondsWhenItemsWillBeTransferAfterDeathOfPlayer": 10,
    "insurances": [
        {
            "id": "g8ciyetvox", // this value must be unique to other insurance ids.
            "price": 1000, // price of the insurance
            "durationInSeconds": 86400, // duration of the insurance in seconds
            "stayActiveAfterDeath": 0 // if 1, the insurance will stay active after death of player
        },
        {
            "id": "4b2dgimf1x",
            "price": 2000,
            "durationInSeconds": 604800,
            "stayActiveAfterDeath": 0
        }
    ]
}
```

### Example Currency configuration

see [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)


### InsurancePointConfig.json

``` json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 0, // never change this, internal usage
    "insurancePoint": {
        {
            "position": [ // position of the insurance trader
                6508.6298828125,
                0.0,
                2398.389892578125
            ],
            "orientation": [ // orientation of the insurance trader
                0.0,
                0.0,
                0.0
            ],
            "useExactPosition": 0 // if 1, the position will be used exactly. If 0, the object will automatically placed on the ground
        },
        { // second insurance trader
            "position": [
                6008.6298828125,
                0.0,
                2388.389892578125
            ],
            "orientation": [
                0.0,
                0.0,
                0.0
            ],
            "useExactPosition": 0
        }
    }
}
```

### Logger.json

````json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 1, // never change this, internal usage
  // If player buys an insurance
    "logBuyInsurance": 1, // 1 = enables csv logging, 0 = disabled
    "logBuyInsuranceDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordBuyInsuranceWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits",
  // If player dies
    "logPlayerDied": 1, // 1 = enables csv logging, 0 = disabled
    "logPlayerDiedDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordPlayerDiedWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits",
    // If insurance becomes active and items will be saved
    "logInsuranceUsed": 1, // 1 = enables csv logging, 0 = disabled
    "logInsuranceUsedDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordInsuranceUsedWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits",
    // If player takes the items from insurance trader
    "logInsuranceItemTaken": 1, // 1 = enables csv logging, 0 = disabled
    "logInsuranceItemTakenDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordInsuranceItemTakenWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits",
    // If player deletes the insurance case or last item was taken
    "logInsuranceDelete": 1, // 1 = enables csv logging, 0 = disabled
    "logInsuranceDeleteDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordInsuranceDeleteWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits"
}
````
