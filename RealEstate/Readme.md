# TB Real Estate

![TB Real Estate](./Logo.png)

Use a house as a home. Buy, sell, extend, and lock your house. Share your house and its inventory with your friends.
Protect your house with an alarm system and respawn at home.

That's all and more with TB Real Estate.

## Shop Link
https://www.themodbase.com/mods/TBRealEstate

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

[![Version 1](./logoYT.png)](https://youtu.be/cMSZLmEtpdo)

## Features

- Players can buy any configured house type
- Players can sell any owned house
- Players can give keys to other players
- Players can lock/unlock the house
- Players can set a custom name for the house
- Players can transfer ownership to other players
- Every player with access to a house can purchase extensions
- Players can extend the house with:
  - Storage with different levels (can be disabled in the config)
  - Alarm system with 4 levels (can be disabled in the config):
    - Level 1: Player receives a message that a house is being broken into
    - Level 2: Player receives a message that a house is being broken into, including the custom name of the house
    - Level 3: Player receives a message that a house is being broken into, including the custom house name and the name of the intruder
    - Level 4: Player can use a Discord channel for alarms
  - Respawn point (can be disabled in the config)
    - Can be enabled or disabled by the player
  - Lock system to lock all doors at the same time
  - Prevention of object despawning within a 20m range of the house position
- Admins can delete house ownership in-game
- Admins can reload configs and data in-game without a restart
- Admins can configure:
  - Any house type
  - House prices
  - House storage levels
  - Raid tools
  - Storage prices
  - Inventory items per level
  - Max house inventory level
  - Raid time
  - Toggle the mini-map in the house menu
  - Maximum houses a player can own
  - Whether players can respawn in houses
  - Currencies used
  - Blacklist and Whitelist zones for house purchases
  - Automatic deletion of ownership if players do not rejoin the server
  - Max house keys a player can give to others
  - Cooldown time for respawn point usage
  - Locking of all unsold houses
- Admin Actions:
  - Delete house ownership in-game
  - Reload configs and data in-game without a restart
  - Lock/unlock houses
  - Open the house menu at any time
- Advanced Group support for collective house management
- Spawn select from LBMaster supported (players can select to spawn in their house if they have the extension)
- Groups ATM supported (use money from bank account)
- Logs (Discord/Files) for:
  - Raid system
  - House inventory
  - Buying and selling houses
  - Buying house extensions
  - Ownership transfers
- Logs can be toggled on/off in the config

## Dependencies
This is a standalone mod; no dependencies are required.

## How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and add it to your own server-side pack
- Take the Client PBO and the TBLib PBO and add them to your own client pack. Publish this pack on Steam.
- You must configure the property `storeHouseStateDisabled` to `0` in your `serverDZ.cfg`. If you don't do this, buildings cannot be locked.
````
storeHouseStateDisabled = 0;
````
- Start your server. All configurations will now be created in your server profile folder.
- Shut down the server
- Configure your needs
- Start your server :-)

## Configurations

All configurations can be found in `YourServerProfilesFolder\TBMods\Config\TBRealEstate`

- [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson) Admins can currently delete house ownership in-game and perform a hot-reload of configs and player data.
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [house.md](Configs/house.md)
- [HouseDefinition.md](Configs/HouseDefinition.md)
- [houseExtension.md](Configs/houseExtension.md)
- [logger.md](Configs/logger.md)
- [SpawnPoint.md](Configs/SpawnPoint.md)

## Addons
### Expansion AI
If you want to prevent Expansion AI from opening house doors, you must also include `TBRealEstateExpansionAddonClient.pbo` in your client pack on Steam.
You can find the PBO in `TBRealEstateExpansionAddonClient.pbo.TBRealEstate.zip` within the downloaded client/server pack. 


## Modding Interfaces (Server Side Only)

Mod Def: TBREALESTATE

### Get Player Spawn positions

````
array<vector> locations = TBREDatabaseLayer.Get().GetTBRESpawnLocations(playerIdentity.GetId());
````

### Get Player House Locations

````
array<vector> locations = TBREDatabaseLayer.Get().GetTBREPlayerHouseLocations(playerIdentity.GetId());
````

### Get Player House Keys

````
array<vector> locations = TBREDatabaseLayer.Get().GetTBREPlayerKeysLocations(playerIdentity.GetId());
````
