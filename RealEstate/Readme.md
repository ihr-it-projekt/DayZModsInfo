# TB Real Estate

![TB Real Estate](./Logo.png)

## Features
Full list of features can be found at [Shop](https://www.themodbase.com/mods/TBRealEstate)

## Shop Link
https://www.themodbase.com/mods/TBRealEstate

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube
[![Version 2](./logoYT.png)](https://www.youtube.com/watch?v=cMSZLmEtpdo)


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
