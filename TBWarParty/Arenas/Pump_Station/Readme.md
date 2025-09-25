# Pump Station

## Files

<a href="./ArenaBuildingConfig/Pump_Station.json" download>Arena buildings Config</a>

<a href="./ArenaMatchConfig/Pump_Station.json" download>Arena Match Config</a>

## Required Mod Packs
- BadgerBuildings (https://steamcommunity.com/sharedfiles/filedetails/?id=1573788098)
- SPBuilding (https://steamcommunity.com/sharedfiles/filedetails/?id=2177232791)
- TerrainIslands (https://steamcommunity.com/sharedfiles/filedetails/?id=2393499239)

## Screenshots

<img src="./images/Pump_Station_1.jpg" alt="Cherno" width="512"/>
<img src="./images/Pump_Station_2.jpg" alt="Cherno" width="512"/>

## How to use
- Copy the `Pump_Station.json` from `Config\ArenaBuildingConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenaBuildingConfigs\` folder.
- Copy the `Pump_Station.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder.
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `Pump_Station` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "Pump_Station",
  ],
```
- Reload the config in game over admin menu or restart the server.