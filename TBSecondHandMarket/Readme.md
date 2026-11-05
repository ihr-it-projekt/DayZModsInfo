# TB Second Hand Market

![TB Second Hand Market](./TBSecondHandMarket.jpeg)

## Features
Full list of features can be found at [Shop](https://www.themodbase.com/mods/TBSecondHandMarket)

## Shop Link
https://www.themodbase.com/mods/TBSecondHandMarket

## Support
If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube
https://youtu.be/YXXO2QezOUU

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

### How to limit the condition (health level) of traded items?
Set it in [**`GeneralConfig.json`**](./Configs/GeneralConfig.md). Allowed values are `"Pristine"`, `"Worn"`, `"Damage"` and `"BadlyDamaged"`. The value is always the worst condition that is still allowed.
- `minOfferHealthValue`: worst condition an item may have to be offered for sale on a market stall or Global Stall. Default: `"BadlyDamaged"`. Items in a worse condition are not shown in the sell list, and the server rejects them. Ruined items can never be offered.
- `minOrderHealthValue`: worst condition players can choose when creating a buy order. Default: `"BadlyDamaged"`.

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
- [**`ItemPriceConfig.json`**](./Configs/ItemPriceConfig.md)
- [**`ItemsCategory.json`**](./Configs/ItemsCategory.md)
- [**`GlobalStallConfig.json`**](./Configs/GlobalStallConfig.md)
- [**`Logger.json`**](./Configs/Logger.md)
- [**`StallConfig.json`**](./Configs/StallConfig.md)

