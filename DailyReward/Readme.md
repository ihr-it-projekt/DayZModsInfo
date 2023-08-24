# TB Daily Reward

## Description
This Mod allows you in DayZ to get a reward for every day you play on the server. 

## Features
- monetise your sever with premium rewards
- also non premium rewards possible
- You can configure your reward levels
- You can configure your reward items
- reward levels can have multiple rewards collections (the player will get one of the collections as one reward)
- rewards collections can have multiple items
- You can set period of days for the reward
- Reward Conditions:
-- Player Kills
-- Infected Kills
-- Walked Distance
-- Time Played
- Over 1400 Items pre configured, you can just use it
- Toggle Animation when player starts to get reward
- Win animation when player gets reward
- Logging in files or Discord Webhook
- Admins can make a hot reload of configs an player data

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Dependencies
- Community Framework (CF)

## How to install

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- extract TBDailyReward.zip
- Copy the extracted Folder `TBDailyReward` into your server profile folder.
- Start your server. Some more configurations will be generated.
- Tear down the server
- Configure your needs
- Start your Server :-)

## Configurations

### Logger.json
````
{
    "version": "1",  // Never touch this value. It is needed internally
    "logReward": 1, // 0 = no logging, 1 = logging in files
    "logRewardDiscord": 1, // 0 = no logging, 1 = logging in discord
    "discordRewardWebhookURL": "your dicord webhook url", // if you want to log in discord, you need to set this value
}
````

### TBKeyBindsConfig.json
```
{
    "version": "1", // Never touch this value. It is needed internally
    "keyBinds": [
        {
            "name": "UAInputOpenTBDailyReward",  // Never touch this value. It is needed internally
            "defaultKey": 25, // The Deafult key will be P, if you want change, pls find the key code in file YourServerProfileFolder\TBDailyReward\TBKeyCodeMatch.json 
            "useServerKeyBind": 0 // 0 = use player configured key, 1 = use server key (if you enable it, at every server join of the player, the key will changed for him). 
        }
    ]
}
```

### PremiumUser.json
````
{
    "version": "1", // Never touch this value. It is needed internally
    "premiumUsers": [
        { // Begin first user
            "endDate": { // Premium end date
                "year": 2023,
                "month": 6,
                "day": 7
            },
            "playerId": "Add here Steam Or DayZ ID 2"
        },
        { // Begin next user, you can add so many you want. 
            "endDate": {
                "year": 2023,
                "month": 6,
                "day": 5
            },
            "playerId": "Add here Steam Or DayZ ID 2"
        }
    ]
}

````

### AdminConfig.json

Admins can currently make a hot reload of configs and player data. Only they see the button in the menu.

````
{
    "version": "1", // Never touch this value. It is needed internally
    "adminList": [
        "Add here Player Steam Or DayZ ID 1",
        "Add here Player Steam Or DayZ ID 2"
    ],
    "isLoaded": 0 // Never touch this value. It is needed internally
}
````
### Items/Example_Item_1.json

Here you can configure your items. 

````
{
	"uniqueName": "Example_Item_1", // This name must match with the file name except the .json. For example if you file name is Example_Item_1.json, this value must be Example_Item_1
	"health": 100.0, // The health of the item in percent 100 means 100%
	"type": "AK74_Complete", // the type name from types.xml
	"quantity": 1.0, // The quantity of the item in percent 1.0 means 100%, 0.5 means 50%
	"attachmentUniqueNames": [ // Here you can add and name your own previuse created items as attachments. They must be in the same folder as this item
	    "AK74_WoodBttstck",
		"AK74_Hndgrd",
		"PSO11Optic",
		"Mag_AK74_30Rnd"
	],
	"isCar": 0 // if this item is a car, set this value to 1 if not to 0
}
````

### RewardLevels/Level_1_Example_Reward_1.json
````
{
	"uniqueName": "Level_1_Example_Reward_1", // This name must match with the file name except the .json. For example if your file name is Level_1_Example_Reward_1.json, this value must be Level_1_Example_Reward_1
	"level": 1, // The level of the reward
	"uniqueItemNames": [  // Here you can add and name your own previuse created reward items. for configuration see Items/Example_Item_1.json
		"Example_Item_1",
		"GiftBox_Medium_2",
		"Engraved1911_Complete",
		"CombatBoots_Black"
	]
}
````

### LevelConditions/Example_Level_Condition_1.json

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
    "canReTakenAfterPeriodOfDaysRealTime": 1 // The real time in days that player must wait to get the reward again or -1 to disable this condition
}
````

### RewardLevels.json

This is a collection of your reward levels and level conditions

````
{
    "defaultLevelConditionUniqueNames": [ // Here you can add and name your own previuse created level conditions. for configuration see LevelConditions/Example_Level_Condition_1.json
        "Example_Level_Condition_1", // This name must match with the name of the file except the .json. For example if you file name is Default_Level_Condition_1.json, this value must be Default_Level_Condition_1 
        "Default_Level_Condition_2",
        "Default_Level_Condition_3",
        "Default_Level_Condition_4"
    ],
    "premiumLevelConditionUniqueNames": [ // Here you can add and name your own previuse created level conditions. for configuration see LevelConditions/Level_1_Example_Reward_1.json
        "Premium_Level_Condition_1", // This name must match with the name of the file except the .json. For example if you file name is Premium_Level_Condition_1.json, this value must be Premium_Level_Condition_1
        "Premium_Level_Condition_2",
        "Premium_Level_Condition_3",
        "Premium_Level_Condition_4"
    ],
    "uniqueNameRewardLevels": [ // Here you can add and name your own previuse created reward levels. for configuration see RewardLevels/Level_1_Example_Reward_1.json
        "Level_1_Example_Reward_1", // This name must match with the name of the file except the .json. For example if you file name is Level_1_Example_Reward_1.json, this value must be Level_1_Example_Reward_1
        "Level_1_Reward_2",
        "Level_2_Reward_1",
        "Level_2_Reward_2",
        "Level_3_Reward_1",
        "Level_3_Reward_2",
        "Level_4_Reward_1",
        "Level_4_Reward_2"
    ],
    "uniqueNamePremiumRewardLevels": [ // Here you can add and name your own previuse created reward levels. for configuration see RewardLevels/Level_1_Example_Reward_1.json
        "Level_1_Premium_Reward_1", // This name must match with the name of the file except the .json. For example if you file name is Level_1_Premium_Reward_1.json, this value must be Level_1_Premium_Reward_1
        "Level_2_Premium_Reward_1",
        "Level_3_Premium_Reward_1",
        "Level_3_Premium_Reward_2",
        "Level_4_Premium_Reward_1",
        "Level_4_Premium_Reward_2"
    ]
}

````

