# TB Revive Player

![Revive Player](./logo.png)

A mod to revive dead players in DayZ.

## Shop Link
https://www.themodbase.com/mods/TBRevivePlayer

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

[![Version 1](./logoYT.png)](https://youtu.be/Dh3ECiVC6S4)

## Features

- You can revive dead players by using a defibrillator
- Defibrillators can be destroyed after use (configurable)
- Hospital (can be disabled)
  - Players can be revived in hospitals (teleport)
  - Players must pay for the revive (configurable)
  - Support for LBMaster's Advanced Banking, so players can pay via bank account (can be disabled via config)
- Real Estate Respawn (can be disabled)
  - Players can be revived in their Real Estate (teleport)
  - Players must pay for the revive (configurable)
- Players don't lose their inventory after being revived
- Revived players can receive the following (configurable):
      - Random cuts
      - Blood level
      - Shock
      - Health
- Admins can:
  - Revive players via F action
  - Reload config at the dead body of a player

## How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and add it to your own server-side pack
- Take the Client PBO and the TBLib PBO and add them to your own client pack. Publish this pack on Steam.
- Start your server. All configurations will now be created in your server profile folder.
- Shut down the server
- Remove the class name of the item "Defibrillator" from the `cfgIgnoreList.xml` in your mpmission folder
- Configure your needs
- Start your server :-)

- [FAQ.md](FAQ.md)


## Configuration
- [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson) Admins can currently reload config at dead bodies.
- [TBKeyBindsConfig.json](../GlobalConfigs/Readme.md#tbkeybindsconfigjson)
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [reviveConfig.md](Configs/reviveConfig.md)
- [logger.md](Configs/logger.md)