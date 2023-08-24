# TB Real Estate

Use house as home. Buy, sell, extend and lock your house. Share your house and house inventory with your friends.
Protect your house with an alarm system and respawn in your house.

Thats all and more with TB Real Estate.

## Features

- Player can buy any configured houses type
- Player can sell any owned house
- Player can give keys to other players
- Player can lock/unlock house
- Player can set the name of the house
- Player cam extend the house with 
  - Storage with different levels (feature can be removed from the config)
  - Alarm system with currently 3 levels (feature can be removed from the config)
    - Level 1, player get a message that one house is broken in
    - Level 2, player get a message that one house is broken with the custom name of the house
    - Level 3, player get a message that one house is broken with the custom name of the house and the name of the player who broke in
  - Respawn point (feature can be removed from the config)
    - can be enabled and disabled by the player
- Admin can configure 
  - any house type
  - house price
  - house storage level´s
  - raid tools
  - storage price
  - inventory items per level
  - max house inventory level
  - raid time
  - can turn on and off mini Map in house menu
  - how many houses a player can own
  - if player can respawn in houses
  - currencies that are used
  - black and white listed areas
- Logs for (File or/and Discord)
  - Raid system
  - House inventory
  - buy and sell houses
  - buy house extensions
- Logs can be turned on/off in config

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Dependencies
This is a standalone mod, no dependencies required.

## How to install

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- You have to configure in your "serverDZ.cfg" the property "storeHouseStateDisabled" to "0". If you don´t do that, the buildings can not be looked.
````
storeHouseStateDisabled = 0;
````
- Start your server. All configurations will now create in your Server profile folder.
- Tear down the server
- Configure your needs
- Start your Server :-) 

## Configurations

### AdminConfig.json

Admins can currently delete house ownership in game

````
{
    "version": "1", // Never touch this value. It is needed internally
    "adminList": [
        "Add here Player Steam Or DayZ ID 1",
        "Add here Player Steam Or DayZ ID 2"
    ]
}
````


### example house config
````
{
    "version": "3", // Never touch this value. It is needed internally
    "showMap": 1, // Show the map in the house menu
    "howManyHousesCanPlayerBuy": 1, // How many houses can a player buy
    "playerCanRespawnInHouse": 1, // Player can by respawn extension
    "useBlackListedAreas": 0, // 1 = on 0 = off, if on, the player can not buy a house in the black listed area. Please do not use black and white list together
    "useWhiteListedAreas": 0, // 1 = on 0 = off, if on, the player can buy a house only in the white listed area. Please do not use black and white list together
    "inactiveDaysBeforePlayerDataWillDeleted": 300, // if a player is inactive for x days, all data in that mod will be deleted
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
    "houseConfigs": [
        {
            "houseType": "Land_Garage_Row_Small",  // The type of the building 
            "sellPrice": 50,  // Price when player sell this building
            "buyPrice": 100, // Price when player buy this building
            "storageBuyFactor": 0.5, // The increase of price, when a player buy a storage. E.g. first cost 100 the second will cost 150 by a factor of 0.5
            "raidTools": [  // What kind of weapons the raider must have, he needs only one of the.
                "Crowbar"
            ],
            "inventoryItemsPerLevel": 10, // How much items can stored per level
            "maxHouseInventoryLevel": 20, // the max level of house inventory. Attention: If you can store to much items. The store file can be corrupted by DayZ. 
            "raidTimeInSeconds": 600,  // How long the raid time per door is
            "maxKeys": -1 // How many keys can given for this house type to other plasers. Every house counts for his own. -1 = unlimited keys 10 = only 10 Players can get access to this house
        }
    ]
}
        
````

### Example house extension config
````
{
    "version": "4", // Never touch this value. It is needed internally
    "extensions": [
        {
            "id": "4", // Never touch this value. It is needed internally
            "type": "#Alarm_system", // The Label in House menu, you can change but then you loose translatiom on other languages
            "description": "#Alarm_system_desc_1", // The description of the extension. You can change but then you loose translatiom on other languages
            "price": 1, // The price of the extension
            "isHouseAlarm": 1, // Never touch this value. It is needed internally
            "isHouseInventory": 0, // Never touch this value. It is needed internally
            "isSpawnPoint": 0, // Never touch this value. It is needed internally
            "message": "#Alarm_system_message_1", // Never touch this value. It is needed internally
            "level": 1 // Never touch this value. It is needed internally
        },
        {
            "id": "5", // Never touch this value. It is needed internally
            "type": "#Alarm_system", // The Label in House menu, you can change but then you loose translatiom on other languages
            "description": "#Alarm_system_desc_2", // The description of the extension. You can change but then you loose translatiom on other languages
            "price": 2, // The price of the extension
            "isHouseAlarm": 1, // Never touch this value. It is needed internally
            "isHouseInventory": 0, // Never touch this value. It is needed internally
            "isSpawnPoint": 0, // Never touch this value. It is needed internally
            "message": "#Alarm_system_message_2", // Never touch this value. It is needed internally
            "level": 2 // Never touch this value. It is needed internally
        },
        {
            "id": "6", // Never touch this value. It is needed internally
            "type": "#Alarm_system", // The Label in House menu, you can change but then you loose translatiom on other languages
            "description": "#Alarm_system_desc_3", // The description of the extension. You can change but then you loose translatiom on other languages
            "price": 4, // The price of the extension
            "isHouseAlarm": 1,  // Never touch this value. It is needed internally
            "isHouseInventory": 0, // Never touch this value. It is needed internally
            "isSpawnPoint": 0, // Never touch this value. It is needed internally
            "message": "#Alarm_system_message_3", // Never touch this value. It is needed internally
            "level": 3 // Never touch this value. It is needed internally
        },
        {
            "id": "1196607072", // Never touch this value. It is needed internally
            "type": "#Respawn_Point", // The Label in House menu, you can change but then you loose translatiom on other languages
            "description": "#Respawn_Point_desc", // The description of the extension. You can change but then you loose translatiom on other languages
            "price": 4, // The price of the extension
            "isHouseAlarm": 0, // Never touch this value. It is needed internally
            "isHouseInventory": 0, // Never touch this value. It is needed internally
            "isSpawnPoint": 1, // Never touch this value. It is needed internally
            "message": "", // Never touch this value. It is needed internally
            "level": 0 // Never touch this value. It is needed internally
        },
        {
            "id": "70", // Never touch this value. It is needed internally
            "type": "#inventory_extension", // The Label in House menu, you can change but then you loose translatiom on other languages
            "description": "#desc_house_inventory", // The description of the extension. You can change but then you loose translatiom on other languages
            "price": 5, // The base price of the extension. This value will combined with "storageBuyFactor" from house config
            "isHouseAlarm": 0, // Never touch this value. It is needed internally
            "isHouseInventory": 1, // Never touch this value. It is needed internally
            "isSpawnPoint": 0, // Never touch this value. It is needed internally
            "message": "", // not used yet
            "level": 0 // Never touch this value. It is needed internally
        },
        {
            "id": "290330542", // Never touch this value. It is needed internally
            "type": "#Alarm_system", // The Label in House menu, you can change but then you loose translatiom on other languages
            "description": "#Alarm_system_desc_4", // The description of the extension. You can change but then you loose translatiom on other languages
            "price": 5, // The price of the extension
            "isHouseAlarm": 1, // Never touch this value. It is needed internally
            "isHouseInventory": 0,  // Never touch this value. It is needed internally
            "isSpawnPoint": 0, // Never touch this value. It is needed internally
            "isLockSystem": 0, // Never touch this value. It is needed internally
            "isKeySpawnPoint": 0, // Never touch this value. It is needed internally
            "message": "#Alarm_system_message_4", // Never touch this value. It is needed internally
            "level": 4 // Never touch this value. It is needed internally
        },
        {
            "id": "868950967", // Never touch this value. It is needed internally
            "type": "#LockSystem", // The Label in House menu, you can change but then you loose translatiom on other languages
            "description": "#LockSystemDescription", // The description of the extension. You can change but then you loose translatiom on other languages
            "price": 5, // The price of the extension
            "isHouseAlarm": 0, // Never touch this value. It is needed internally
            "isHouseInventory": 0, // Never touch this value. It is needed internally
            "isSpawnPoint": 0,  // Never touch this value. It is needed internally
            "isLockSystem": 1, // Never touch this value. It is needed internally
            "isKeySpawnPoint": 0, // Never touch this value. It is needed internally
            "message": "", // Never touch this value. It is needed internally
            "level": 0 // Never touch this value. It is needed internally
        },
        {
            "id": "872327335", // Never touch this value. It is needed internally
            "type": "#Key_Respawn_Point", // The Label in House menu, you can change but then you loose translatiom on other languages
            "description": "#Key_Respawn_Point_desc", // The description of the extension. You can change but then you loose translatiom on other languages
            "price": 10, // The price of the extension
            "isHouseAlarm": 0, // Never touch this value. It is needed internally
            "isHouseInventory": 0, // Never touch this value. It is needed internally
            "isSpawnPoint": 0, // Never touch this value. It is needed internally
            "isLockSystem": 0, // Never touch this value. It is needed internally
            "isKeySpawnPoint": 1, // Never touch this value. It is needed internally
            "message": "", // Never touch this value. It is needed internally
            "level": 0 // Never touch this value. It is needed internally
        }
    ]
}
````

### Example Log configuration

````
{
    "version": "2",  // Never touch this value. It is needed internally
    "logRaid": 1, // 1 = on 0 = off, Log to csv when a player raid a house
    "logRaidToDiscord": 1, // 1 = on 0 = off, Log to discord when a player raid a house
    "discordRaidWebhookURL": "https://your.discord.webhook.url",
    "logStore": 1,  // 1 = on 0 = off, Log to csv when a player move items in and out store
    "logStoreToDiscord": 1, // 1 = on 0 = off, Log to discord when a player move items in and out store
    "discordStoreWebhookURL": ""https://your.discord.webhook.url",",
    "logHouseTrade": 1, // 1 = on 0 = off, Log to csv when a player buy or sell a house
    "logHouseTradeToDiscord": 1, // 1 = on 0 = off, Log to discord when a player buy or sell a house
    "discordHouseTradeWebhookURL": ""https://your.discord.webhook.url",",
    "logHouseExtensionTrade": 1,  // 1 = on 0 = off, Log to csv when a player buy or sell a house extension
    "logHouseExtensionTradeToDiscord": 1, //  1 = on 0 = off, Log to discord when a player buy or sell a house extension
    "discordHouseExtensionTradeWebhookURL": ""https://your.discord.webhook.url","
}
````

### Example Currency configuration

````
"currencyValues": {
    "MoneyRuble1": 1, // Item that is your currency and what the value is for item.
    "MoneyRuble5": 5, // Item that is your currency and what the value is for item.
    "MoneyRuble10": 10,
    "MoneyRuble25": 25,
    "MoneyRuble50": 50,
    "MoneyRuble100": 100
}
````

### Example Store Blacklist configuration

````
{
    "version": "1", // Never touch this value. It is needed internally
    "blackList": [ // List of item types that is not allowed to store in house
        "Battery9V",
        "ItemB"
    ]
}

````

### Example SpawnPoint.json

````
{ 
    "version": "1", // Never touch this value. It is needed internally
    "coolDownTimeInSecondsForRespawnPointUsage": 300 // The time in seconds that a player have to wait before he can use any spawn point in house again
}
````

## Interfaces

Mod Def: TBREALESTATE

### Get Player Spawn positions

````
array<vector> locations = TBREDatabaseLayer.Get().GetTBRESpawnLocations(playerIdentiy.GetId());
````

### Get Player House Locations

````
array<vector> locations = TBREDatabaseLayer.Get().GetTBREPlayerHouseLocations(playerIdentiy.GetId());
````

### Get Player House Keys

````
array<vector> locations = TBREDatabaseLayer.Get().GetTBREPlayerKeysLocations(playerIdentiy.GetId());
````