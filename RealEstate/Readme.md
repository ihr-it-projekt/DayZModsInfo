# TB Real Estate

<img src="./Logo.png" alt="TB Real Estate" width="400"/>

Use house as home. Buy, sell, extend and lock your house. Share your house and house inventory with your friends.
Protect your house with an alarm system and respawn in your house.

Thats all and more with TB Real Estate.

## Shop Link
https://www.themodbase.com/mods/TBRealEstate

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

[![Version 1](./logoYT.png)](https://youtu.be/cMSZLmEtpdo)

## Features

Use house as home. Buy, sell, extend and lock your house. Share your house and house inventory with your friends. Protect your house with an alarm system and respawn in your house.

That´s all and more with TB Real Estate.

- Player can buy any configured houses type
- Player can sell any owned house
- Player can give keys to other players
- Player can lock/unlock house
- Player can set the name of the house
- Player can transfer ownership to other players
- Every player that has access to a house can buy extensions
- Player can extend the house with
  - Storage with different levels (feature can be removed from the config)
  - Alarm system with currently 3 levels (feature can be removed from the config)
    - Level 1, player get a message that one house is broken in
    - Level 2, player get a message that one house is broken with the custom name of the house
    - Level 3, player get a message that one house is broken with the custom name of the house and the name of the player who broke in
    - Level 4, player can use a discord channel for alarm
  - Respawn point (feature can be removed from the config)
  - can be enabled and disabled by the player
  - Lock system to lock all doors at same time
  - prevent the de-spawning of objects in range of 20 m of house position
- Admin can delete house ownership in game
- Admin can reload configs and data in game without restart
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
  - Blacklist Zone and Whitelist Zone where players can (not) buy houses
  - automatically deletion of ownership if players does not rejoin server
  - max house keys that can player give to other players
  - cooldown time for respawn point usage
  - all not sold houses can be locked
- Admin Actions
  - Admin can delete house ownership in game
  - Admin can reload configs and data in game without restart
  - Can lock/unlock house
  - can open House menu any time
- Advanced Group Supported to use house as group house
- Spawn select from LBMaster supported that player can select spawn in house, if they have the house extension
- Groups ATM Supported to use Money from bank account
- Logs (Discord/Files) for
  - Raid system
  - House inventory
  - buy and sell houses
  - buy house extensions
  - when ownership was transferred
- Logs can be turned on/off in config

## Dependencies
This is a standalone mod, no dependencies required.

## How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and the TBLib PBO and bring it into your own client pack. Publish this Pack on steam.
- You have to configure in your "serverDZ.cfg" the property "storeHouseStateDisabled" to "0". If you don´t do that, the buildings can not be looked.
````
storeHouseStateDisabled = 0;
````
- Start your server. All configurations will now create in your Server profile folder.
- Tear down the server
- Configure your needs
- Start your Server :-)

## Configurations

All Configurations you will find in `YourServerProfilesFolder\TBMods\Config\TBRealEstate`

- [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson) Admins can currently delete house ownership in game and can make a hot reload of configs and player data.
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [house.md](Configs/house.md)
- [HouseDefinition.md](Configs/HouseDefinition.md)
- [houseExtension.md](Configs/houseExtension.md)
- [logger.md](Configs/logger.md)
- [SpawnPoint.md](Configs/SpawnPoint.md)

## Addons
### Expansion AI
If you want that expansion AI can not open doors of houses, you have also to put the `TBRealEstateExpansionAddonClient.pbo` in your client pack on steam.
You can find the pbo in `TBRealEstateExpansionAddonClient.pbo.TBRealEstate.zip` in downloaded client server pack. 


## Modding Interfaces (Server Side Only)

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
