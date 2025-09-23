# PVP Arena PVPArenaROOFTOP

## Files

<a href="./ArenaBuildingConfig/PVP Arena ROOFTOP.json" download>Arena buildings Config</a>

<a href="./ArenaMatchConfig/PVP Arena ROOFTOP.json" download>Arena Match Config</a>

## Required Mod Packs

- BuilderItems (https://steamcommunity.com/sharedfiles/filedetails/?id=1565871491)
- DayZ Editor Loader (https://steamcommunity.com/sharedfiles/filedetails/?id=2276010135&searchtext=DayZ+Editor)
- Dabs Framework (https://steamcommunity.com/sharedfiles/filedetails/?id=2545327648&searchtext=Dabs+Framework)

## Screenshots

<img src="./images/PVPArenaROOFTOP_1.jpg" alt="ROOFTOP" width="512"/>
<img src="./images/PVPArenaROOFTOP_2.jpg" alt="ROOFTOP" width="512"/>

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