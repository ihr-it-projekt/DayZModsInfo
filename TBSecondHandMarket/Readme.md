# TB Second Hand Market

![TB Second Hand Market](./TBSecondHandMarket.jpeg)

## Description

Players can easily sell items to other players.

## Shop Link

https://www.themodbase.com/mods/TBSecondHandMarket

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

https://youtu.be/YXXO2QezOUU

## Features

### Shared Features (Global or Player Stalls)
- Logging to Discord or CSV file:
  - Buy a stall
  - Place a stall
  - Remove a stall
  - Add an offer
  - Add an order
  - Remove an offer
  - Remove an order
  - Sell item
  - Buy item
  - Add money to (global) stall
  - Remove money from (global) stall
- Can trade any item or vehicle
- Blacklist for items that cannot be traded
- Players can:
  - Create offers for items
  - Create orders for items
  - Deposit and withdraw money from the global stall
  - Collect filled orders from the global stall
  - Buy items
  - Sell items
  - Manage their markers at the bulletin board and (global) stall
- Bulletin Board:
  - Central point to view all offers and orders
  - Players can create markers for offers/orders
- Admins can:
  - Reload configs at the global stall and stall dealer
  - Delete offers/orders at the bulletin board and global stall
  - Teleport from the bulletin board to a global stall
- All premium features are optional and can be disabled

### Global Stall
- 4 different global stall models
- Place multiple global stalls at different locations
- Global stalls can share their offers and orders with other global stalls
- Global stall offers and orders can be viewed at the bulletin board
- Orders and offers have a configurable lifetime
- Premium Features:
  - Premium users can have more slots at the global stall
  - Premium users pay less for slots
  - Premium user orders and offers can have an extended lifetime
- Configuration:
  - Global stall points
  - Shared global stall storage
  - Slot prices
  - Free slots for players
  - Max slots per player
  - Lifetime of orders and offers

### Individual Stalls

- 4 different stall models
- 4 different stall dealer models
- Premium Features:
    - Premium users pay less to buy a market stall
    - Premium users can have more market stalls placed at the same time
    - Premium users can have more slots in their market stalls
    - If premium status changes, existing stalls/stall kits will adapt to the new values
    - Premium users pay less for publishing on the bulletin board
- Configuration:
  - Max stalls per player 
  - Max stalls per server
  - Blacklist for items that cannot be traded
  - (Optional) Whitelisted areas for placing market stalls
  - Slot counts for stalls 
  - Lifetime of stalls 
  - Price of stalls
- Players:
  - Publish stalls at the bulletin board
- Admins:
  - Can access and manage all stalls
  - Can reload config and data at the market stall dealer
  - Can manage and delete stalls


## FAQ

### How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and add it to your own server-side pack.
- Take the Client PBO and the TBLib PBO and add them to your own client pack. Publish this pack on Steam.
- Start the server and shut it down again once all configs are generated.
- Configure your needs.
- Start your server :-)

### How to give player premium status?
See [**`Global FAQ`**](../GlobalConfigs/Readme.md#FAQ)

## Types
- [**`Types`**](Types.md)

## Configs

- [**`AdminConfig.json`**](../GlobalConfigs/Readme.md#adminconfigjson)
- [**`BulletinBoard.json`**](./Configs/BulletinBoard.md)
- [**`CurrencyConfig.json`**](../GlobalConfigs/Readme.md#currencyconfigjson)
- [**`DealerPoints.json`**](./Configs/DealerPoints.md)
- [**`GeneralConfig.json`**](./Configs/GeneralConfig.md)
- [**`ItemWhiteList.json`**](./Configs/ItemWhiteList.md)
- [**`ItemBlackList.json`**](./Configs/ItemBlackList.md)
- [**`GlobalStallConfig.json`**](./Configs/GlobalStallConfig.md)
- [**`Logger.json`**](./Configs/Logger.md)
- [**`StallConfig.json`**](./Configs/StallConfig.md)

### Images

![All Stalls](./img/AllStalls.jpg)
![Buy Menu](./img/BuyMenu.jpg)
![Buy Menu Detail](./img/BuyMenuDetail.jpg)
![Config Menu](./img/ConfigMenu.jpg)
![Create Order](./img/CreateOrder.jpg)
![Manage Money](./img/ManageMoney.jpg)
![Market Stall 01](./img/Stand_01.jpg)
![Market Stall 02](./img/Stand_02.jpg)
![Market Stall 03](./img/Stand_03.jpg)
![Market Stall 04](./img/Stand_04.jpg)
![Premium Coin Bronze](./img/PremiumCoinBronze.jpg)
![Premium Coin Gold](./img/PremiumCoinGold.jpg)
![Premium Coin Silver](./img/PremiumCoinSilver.jpg)
![Stall Config Menu](./img/StallConfigMenu.jpg)
![Stall Dealer](./img/StallDealer.jpg)
![Machine](./img/Machine.jpg)
