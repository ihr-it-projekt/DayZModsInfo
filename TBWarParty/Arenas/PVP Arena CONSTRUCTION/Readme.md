# PVP Arena CONSTRUCTION

## Files

[Arena Editot DZE file](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/PVP%20Arena%20CONSTRUCTION/Config/EditorFiles/PVP%20Arena%20CONSTRUCTION.dze){target="_blank" download}

[Arena Match Config](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/PVP%20Arena%20CONSTRUCTION/Config/ArenaMatchConfigs/PVP%20Arena%20CONSTRUCTION.json){target="_blank" download}


## Required Mod Packs

- BuilderItems (https://steamcommunity.com/sharedfiles/filedetails/?id=1565871491)
- DayZ Editor Loader (https://steamcommunity.com/sharedfiles/filedetails/?id=2276010135&searchtext=DayZ+Editor)
- Dabs Framework (https://steamcommunity.com/sharedfiles/filedetails/?id=2545327648&searchtext=Dabs+Framework)

## How to use
- Copy the `PVP Arena CONSTRUCTION.dze` from `Config\EditorFiles` into your `YourServer\MPMissions\MAP\EditorFiles\` folder.
- Copy the `PVP Arena CONSTRUCTION.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder.
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `PVP Arena CONSTRUCTION` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "PVP Arena CONSTRUCTION",
  ],
```
- Reload the config in game over admin menu or restart the server.