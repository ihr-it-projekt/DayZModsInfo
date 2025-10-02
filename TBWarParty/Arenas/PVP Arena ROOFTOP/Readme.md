# PVP Arena PVPArenaROOFTOP

## Files

[Arena Editot DZE file](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/PVP%20Arena%20ROOFTOP/Config/EditorFiles/PVP%20Arena%20ROOFTOP.dze){target="_blank" download}

[Arena Match Config](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/PVP%20Arena%20ROOFTOP/Config/ArenaMatchConfigs/PVP%20Arena%20ROOFTOP.json){target="_blank" download}

## Required Mod Packs

- BuilderItems (https://steamcommunity.com/sharedfiles/filedetails/?id=1565871491)
- DayZ Editor Loader (https://steamcommunity.com/sharedfiles/filedetails/?id=2276010135&searchtext=DayZ+Editor)
- Dabs Framework (https://steamcommunity.com/sharedfiles/filedetails/?id=2545327648&searchtext=Dabs+Framework)

## Screenshots

![ROOFTOP](./images/PVPArenaROOFTOP_1.jpg)
![ROOFTOP](./images/PVPArenaROOFTOP_2.jpg)

## How to use
- Copy the `PVP Arena ROOFTOP.dze` from `Config\EditorFiles` into your `YourServer\MPMissions\MAP\EditorFiles\` folder.
- Copy the `PVP Arena ROOFTOP.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder.
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `PVP Arena ROOFTOP` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "PVP Arena ROOFTOP",
  ],
```
- Reload the config in game over admin menu or restart the server.