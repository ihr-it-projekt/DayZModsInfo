# TB Dynamic Trader

![Dynamic Trader](./images/Logo.jpg)

Dynamic Trader System for DayZ. Buy and sell items at different trader points with dynamic pricing based on stock and demand.

## Shop Link
https://www.themodbase.com/mods/TBDynamicTrader

## Features
You can find all features here: https://www.themodbase.com/mods/TBDynamicTrader

## How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and add it to your own server-side pack
- Take the Client PBO and the TBLib PBO and add them to your own client pack. Publish this pack on Steam.
- Start your server. All configurations will now be created in your server profile folder.
- Shut down the server
- Configure your needs
- Start your server :-)

## Configuration
- [AdminConfig.json](../GlobalConfigs/AdminConfig.md) Admins can currently reload config at dead bodies.
- [CurrencyConfig.json](../GlobalConfigs/CurrencyConfig.md)
- [DealerPoints.json](./Configs/DealerPoints.md)
- [DealerPoint.json](./Configs/DealerPoint.md)
- [TraderItemConfigs.json](./Configs/TraderItemConfigs.md)
- [TraderItemCategoryOrder.json](./Configs/TraderItemCategorieOrder.md)
- [Types.md](./Types.md)

## Types
See also [here](Types.md)

## Config Converters
See [here](./Converter/Converter.md)


## FAQ

### I have another trader already; is it easy to migrate to this trader?

Yes, it is easy to migrate to this trader. In the client pack, you can find migration tools to migrate your trader settings to the new one. The following are supported:
- Trader by Dr. Jones
- TraderPlusPlus
- Expansion Trader

### I want to use an NPC instead of a trader object
Yes, you can use an NPC instead of a trader object. 

1. Use a kit to place a static object.
2. Open the position menu and set the required values.
3. Open the trader menu and use the tab for position configuration.
4. Enable the "use NPC" option and configure the NPC.
5. Save the configuration.

Alternatively, you can configure it directly in the `DealerPoint.json` file. See [DealerPoint.json](./Configs/DealerPoint.md)


