# PVP Arena Ruined City

## Files

[Arena Editot DZE file](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/PVP%20Ruined%20city/Config/EditorFiles/PVP%20Ruined%20city.dze){target="_blank" download}

[Arena Match Config](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/PVP%20Ruined%20city/Config/ArenaMatchConfigs/PVP%20Ruined%20city.json){target="_blank" download}


## Required Mod Packs

- BuilderItems (https://steamcommunity.com/sharedfiles/filedetails/?id=1565871491)
- DayZ Editor Loader (https://steamcommunity.com/sharedfiles/filedetails/?id=2276010135&searchtext=DayZ+Editor)
- Dabs Framework (https://steamcommunity.com/sharedfiles/filedetails/?id=2545327648&searchtext=Dabs+Framework)

## Screenshots

![Ruined City](./images/PVPRuinedcity_1.jpg)
![Ruined City](./images/PVPRuinedcity_2.jpg)

## How to use
- Copy the `PVP Ruined city.dze` from `Config\EditorFiles` into your `YourServer\MPMissions\MAP\EditorFiles\` folder.
- Copy the `PVP Ruined city.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder.
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `PVP Ruined city` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "PVP Ruined city",
  ],
```
- Reload the config in game over admin menu or restart the server.