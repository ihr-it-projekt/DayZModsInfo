# TB Revive Player

A mod to revive dead players in DayZ.

<img src="./logo.png" alt="Revive Player" width="400"/>

## Shop Link
https://lbmaster.de/product.php?id=22

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

[![Version 1](logoYT.png)](https://youtu.be/Dh3ECiVC6S4)

## Features

- You can revive dead players by using the defibrillator
- defibrillator can be destroyed after usage
- Hospital (feature can be disabled)
  - Players can be revived in Hospitals (teleport)
  - Players have to pay for the revive (configurable)
  - support for LBMasters Advanced Banking, so player can pay via bank account, can be disabled via config
- Real Estate Respawn (feature can be disabled)
  - Players can be revived in their real estate (teleport)
  - Players have to pay for the revive (configurable)
- Players don’t lose their inventory after revive
- revived players can get after reviving (configurable)
      - random cuts
      - blood level
      - shock
      - health
- Admins can
  - revive players via F action
  - can reload config at dead body of player

## How to install

See also here: https://lbmaster.de/install/?p=22&h=1

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- Start your server. All configurations will now create in your Server profile folder.
- Tear down the server
- Remove the class name of the item "Defibrillator" from the `cfgIgnoreList.xml` in your mpmission folder
- Configure your needs
- Start your Server :-)

- [FAQ.md](FAQ.md)
- [HowToMigrateFrom1to2.md](HowToMigrateFrom1to2.md)


## Configuration
- [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson) Admins can currently reload config at dead body.
- [TBKeyBindsConfig.json](../GlobalConfigs/Readme.md#tbkeybindsconfigjson)
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [reviveConfig.md](Configs/reviveConfig.md)

