# TB Car Dealer

![TB Car Dealer](./Logo.jpeg)

## Description

A car dealer script to buy cars and premium cars

## Shop Link

https://www.themodbase.com/mods/TBCarDealer

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

https://www.youtube.com/watch?v=Yq5ngJGqJAg

## Features

- Creates a showroom for every player, where they can test cars
- Works with DayZLife car ownership
- 4 different action objects to open the dealer menu
- Players can:
    - Buy cars
    - Sell cars 
      - Items in the car's inventory will drop to the ground
      - Items in car slots will be sold with the car
    - Buy additional items for the car
- If a spawn location for a vehicle is blocked, the car will be spawned at the next free location
- Premium Features:
  - You can set cars to "Premium", so only players with premium status can buy them
  - You can set items to "Premium"
  - 4 different premium coins:
    - One-time coin for Car Trader: player is able to buy one premium car
    - 30 days premium in Daily Reward
    - 7 days premium in Daily Reward
    - 1 day premium in Daily Reward
- Admins can:
    - Reload configs and user data in-game; this allows for configuration changes without a server restart
    - Add multiple independent dealer points
    - Add car variations to car positions (e.g., different colors or equipment)
    - Mark cars as premium so only premium users can buy them
    - Add additional items to the car that increase its price
    - Log all transactions
    - Disable buying, selling, and the showroom for specific locations
- Config Editor available <a href="https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/f3bee68f38a446348fad68638310ae920ee24416/TBCarDealer/ConfigEditor/TBCarDealerConfigEditor.rar" download>Download</a>

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
