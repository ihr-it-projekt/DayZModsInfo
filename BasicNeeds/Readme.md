# TB Basic Needs

![TB Basic Needs](./LogoSmall.png)

## Features
Full list of features can be found at [Shop](https://www.themodbase.com/mods/TBBasicNeeds)

### Needs and toilet actions

- **Pee** empties only the bladder, **Poop** only the bowel, and **Pee & Poop** empties both. Each required need must be above 50% for its action to be available.
- Separate timed actions are available at supported outhouses, portable toilets, standalone prison toilets, and toilet fixtures inside buildings, including the main prison. Players are positioned and oriented at the fixture.
- Male characters use a custom standing pee animation with a visible urine stream, outdoors and at toilets. Male pee actions require empty hands. Outdoor pee leaves its ground mark in front of male characters.
- Nearby supported toilets take priority over outdoor actions. Toilet actions play relieving sounds and use the toilet-specific dirt values in [BodyZoneConfigs.json](Configs/BodyZoneConfigs.md).
- Toilet use now happens directly in the world. The former toilet screen, temporary invisibility, and damage protection have been removed.
- The needs HUD remains available in the inventory and follows HUD visibility, menu, unconsciousness, and death states.
- The new toilet action labels currently use English text in all supported languages.

## Shop Link
https://www.themodbase.com/mods/TBBasicNeeds

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

- [Basic Needs](https://youtu.be/3CVjtuJO8gE)
- [Washing Machine](https://www.youtube.com/watch?v=Z5NNgfVLpaQ)


## Configurations

- [AdminConfig.json](../GlobalConfigs/AdminConfig.md) Permissions for config reloads and player reputation management.
- [BodyZoneConfigs.json](Configs/BodyZoneConfigs.md)
- [BodyZones.json](Configs/BodyZones.md)
- [Config.json](Configs/Config.md)
- [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)
- [DiseaseConfig.json](Configs/DiseaseConfig.md)
- [DryerConfig.json](Configs/DryerConfig.md)
- [HudColorConfig.json](Configs/HudColorConfig.md) Choose current or original HUD icons and configure HUD colors.
- [ReputationConfig.json](Configs/ReputationConfig.md) Reputation rewards per gameplay action and admin menu setup.
- [StatcicDryerConfig.json](Configs/StaticDryerConfig.md)
- [StaticWashingPlaces.json](Configs/StaticWashingPlaces.md)
- [WashingMachineConfig.json](Configs/WashingMachineConfig.md)
## Reputation

Players can earn TBLib reputation by completing needs and washing actions and switching laundry machines on/off. Successful money deposits and withdrawals can also award configurable points. Rewards default to disabled. Server administrators can configure each reward in [ReputationConfig.json](Configs/ReputationConfig.md).

Administrators with `reputationAdmin` can open **[Admin] Manage player reputation** at washing machines and dryers to view and edit online and stored offline player totals. See the [setup instructions](Configs/ReputationConfig.md#manage-player-reputation).
