# Smoking Island

## Files

[Arena buildings Config](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/Smoking_Island/Config/ArenaBuildingConfigs/Smoking_Island.json){target="_blank" download}

[Arena Match Config](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/Smoking_Island/Config/ArenaMatchConfigs/Smoking_Island.json){target="_blank" download}

## Required Mod Packs
- BadgerBuildings (https://steamcommunity.com/sharedfiles/filedetails/?id=1573788098)
- SPBuilding (https://steamcommunity.com/sharedfiles/filedetails/?id=2177232791)
- TerrainIslands (https://steamcommunity.com/sharedfiles/filedetails/?id=2393499239)

## Screenshots

![Cherno](./images/Smoking_Island_1.jpg)
![Cherno](./images/Smoking_Island_2.jpg)

## How to use
- Copy the `Smoking_Island.json` from `Config\ArenaBuildingConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenaBuildingConfigs\` folder.
- Copy the `Smoking_Island.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder.
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `Smoking_Island` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "Smoking_Island",
  ],
```
- Reload the config in game over admin menu or restart the server.