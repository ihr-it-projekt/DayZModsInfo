# TB Car Dealer

<img src="./Logo.jpeg" alt="TB Car Dealer" width="512"/>

## Description

A car dealer script to buy cars and premium cars

## Shop Link

https://lbmaster.de/product.php?id=36

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

https://www.youtube.com/watch?v=Yq5ngJGqJAg

## Features

- Creates a showroom for every single player, where they can test the cars
- works with DayZLife Car ownership
- 4 different action objects to open the dealer menu
- Player can
    - buy cars
    - sell cars, 
      - items in car inventory will drop to the ground
      - items in car slots will be sold with the car
    - can buy additional items for the car
- If spawn location for Vehicle is blocked, the car will be spawned at the next free location
- Premium Features
  - You can set Cars to Premium Cars, so only Players with Premium Status can buy them
  - You can set Items to Premium Items
  - 4 different Premium Coins
    - One Time Coin for Car Trader, player is able to buy one premium car with it
    - 30 Days Premium in Daily Reward
    - 7 Days Premium in Daily Reward
    - 1 Day Premium in Daily Reward
- Admin
    - can reload configs and user data in game, that helps to support config changes without server restart
    - can add multiple independent dealer points
    - can add car variations to car position, for example different colors or equipment
    - can mark cars as premium cars so only premium users can buy them
    - can add additional items to the car that increase the price of the car
    - can log all transactions
    - can disable buy, sell and showroom for locations
- Config Editor available [TBCarDealerConfigEditor.rar](ConfigEditor/TBCarDealerConfigEditor.rar)

## How to install

See also here: https://lbmaster.de/install/?p=36&h=1

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- extract Config.zip
- Copy the files from `Config\Config` into `YourServerProfilesFolder\TBMods\Config\TBCarDealer` folder
- Configure your needs, for example pricing
- Start your Server :-)

## How to use the test drive
- add your test drive positions to the DealerPointConfig
- set the vehicle to `canUsedForTestDrive` and set the `maxDistanceToTestDriveSpawnPosition` and `maxTimeInSecondsForTestDrive` to your needs in CarConfig
- reload the configs
- Go to show room
- select a vehicle with enabled option
- get into vehicle and use "test drive" mouse action
- you can get back from test drive with another action when you are at test drive OR you just leave the vehicle OR time is over OR max distance is reached  


## Configurations

Config Editor [TBCarDealerConfigEditor.rar](ConfigEditor/TBCarDealerConfigEditor.rar)

- [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson) Admins can currently make a hot reload of configs and player data. Only they see the button in the menu.
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [CarConfigs.md](Configs/CarConfigs.md)
- [DealerPointConfig.md](Configs/DealerPointConfig.md)
- [DealerPointsConfig.md](Configs/DealerPointsConfig.md)
- [Logger.md](Configs/Logger.md)
- [PriceItems.md](Configs/PriceItems.md)
