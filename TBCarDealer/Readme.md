# TB Car Dealer

![TB Car Dealer](./Logo.jpeg)

## Features
Full list of features can be found at [Shop](https://www.themodbase.com/mods/TBCarDealer)

## Shop Link

https://www.themodbase.com/mods/TBCarDealer

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

https://www.youtube.com/watch?v=Yq5ngJGqJAg


## Config Editor available 
<a href="https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/f3bee68f38a446348fad68638310ae920ee24416/TBCarDealer/ConfigEditor/TBCarDealerConfigEditor.rar" download>Download</a>

## How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and add it to your own server-side pack
- Take the Client PBO and the TBLib PBO and add them to your own client pack. Publish this pack on Steam.
- Start your server; the server will detect all vehicles and items that can be used for vehicle slots and create configurations with default values. 
- Configure to your needs (e.g., pricing). You can also use our Config Editor. <a href="https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/f3bee68f38a446348fad68638310ae920ee24416/TBCarDealer/ConfigEditor/TBCarDealerConfigEditor.rar" download>Download</a>
- Configure yourself as an admin in the [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson)

## How to use the test drive
- Add your test drive positions to the `DealerPointConfig`
- Set the vehicle to `canUsedForTestDrive` and set `maxDistanceToTestDriveSpawnPosition` and `maxTimeInSecondsForTestDrive` to your needs in `CarConfig`
- Reload the configs
- Go to the showroom
- Select a vehicle with the option enabled
- Get into the vehicle and use the "test drive" mouse action
- You can end the test drive with another action, or by leaving the vehicle, or when the time is over, or if the max distance is reached.


## Configurations

Config Editor <a href="https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/f3bee68f38a446348fad68638310ae920ee24416/TBCarDealer/ConfigEditor/TBCarDealerConfigEditor.rar" download>Download</a>

- [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson) Admins can currently perform a hot-reload of configs and player data. Only they can see this button in the menu.
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [CarConfigs.md](Configs/CarConfigs.md)
- [DealerPointConfig.md](Configs/DealerPointConfig.md)
- [DealerPointsConfig.md](Configs/DealerPointsConfig.md)
- [Logger.md](Configs/Logger.md)
- [PriceItems.md](Configs/PriceItems.md)
