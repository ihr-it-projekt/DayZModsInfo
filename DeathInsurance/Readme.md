# TB Death Insurance

![TB Death Insurance](./DeathInsurance.jpeg)

## Description
This mod allows players to have insurance for their gear. If they die, they can get their gear back. 

## Shop Link
https://www.themodbase.com/mods/TBDeathInsurance

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

https://youtu.be/xdvwHjvwJYw

## Features

- Players can buy insurance for their gear, including gear in their hands
- You can configure:
  - Multiple insurance durations and prices
  - Max heirs per insurance
  - Position of insurance trader
  - Time when insurance will be active after death
  - Non-picked-up insurance cases (gear) will be deleted after a configured time
  - That insurance stays active after death 
- Players can name heirs
- New object: Insurance trader (type TBDIMachine)
- Gear can be picked up at the insurance trader after death
- Works with TB Revive Player and TB Carry
- Supports Advanced Banking System from LBMaster
- Players can have only one insurance at a time
- If a player wants to change their insurance, they have to purchase a new one
- Admins can:
  - Reload config at the insurance trader 
- Logs when:
  - Player buys insurance
  - Player dies
  - Insurance becomes active and items are saved
  - Player takes items from the insurance trader
  - Player deletes the insurance case or the last item is taken
  - Log to CSV file
  - Log to Discord

### How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and add it to your own server-side pack
- Take the Client PBO and the TBLib PBO and add them to your own client pack. Publish this pack on Steam.
- Start your server. Configurations will be generated.
- Shut down the server
- Configure your needs
- Start your server :-)

### How to give player premium status?
See [**`Global FAQ`**](../GlobalConfigs/Readme.md)

## Configuration

All configurations can be found in `YourServerProfilesFolder\TBMods\Config\TBDeathInsurance`

- [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson)
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [Config.md](Configs/Config.md)
- [InsurancePointConfig.md](Configs/InsurancePointConfig.md)
- [Logger.md](Configs/Logger.md)

## Types
  
- [types](./Types/types.md)

### Hint: If you are using a mod that increases your inventory, not all gear may be saved.
