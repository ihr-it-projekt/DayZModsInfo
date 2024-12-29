# TB Death Insurance

<img src="./DeathInsurance.jpeg" alt="TB Death Insurance" width="512"/>

## Description
This mods allows player to have an insurance for their gear. If they die, they can get their gear back. 

## Shop Link
https://lbmaster.de/product.php?id=34

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

https://youtu.be/xdvwHjvxJYw

## Features

- Player can buy an insurance for their gear, also gear in hands
- You can configure 
  - multiple insurance durations and prices
  - max heirs per insurance
  - position of insurance trader
  - time when insurance will be active after death
  - non pieced insurance cases (Gear) will be deleted after configured time
  - that insurance stays active after death 
- Player can name heirs
- new Object: Insurance trader (type TBDIMachine)
- Gear can be picked up at insurance trader after death
- works with TB Revive Player and TB Carry
- supports Advanced Banking System from LBMaster
- player can have only one insurance at the same time
- if player wants to change the insurance, he has to make a new one
- Admin can 
  - reload config at insurance trader 
- Log when
  - player buys an insurance
  - player dies
  - insurance becomes active and items will be saved
  - player takes the items from insurance trader
  - player deletes the insurance case or last item was taken
  - Log to csv file
  - Log to discord

### How to install

See also here: https://lbmaster.de/install/?p=34&h=1

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and the TBLib PBO and bring it into your own client pack. Publish this Pack on steam.
- Start your server. Configurations will be generated.
- Tear down the server
- Configure your needs
- Start your Server :-)

## Configuration

All Configurations you will find in `YourServerProfilesFolder\TBMods\Config\TBDeathInsurance`

- [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson)
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [Config.md](Configs/Config.md)
- [InsurancePointConfig.md](Configs/InsurancePointConfig.md)
- [Logger.md](Configs/Logger.md)

### Hint, if you are using a mod that increases your inventory, then it can happen that not all gear can be saved.
