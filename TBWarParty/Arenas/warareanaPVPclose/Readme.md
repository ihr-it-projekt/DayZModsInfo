# PVP Arena Close

## Files

<a href="./ArenaBuildingConfig/warareanaPVPclose.json" download>Arena buildings Config</a>

<a href="./ArenaMatchConfig/warareanaPVPclose.json" download>Arena Match Config</a>

## Required Mod Packs

- BuilderItems (https://steamcommunity.com/sharedfiles/filedetails/?id=1565871491)
- DayZ Editor Loader (https://steamcommunity.com/sharedfiles/filedetails/?id=2276010135&searchtext=DayZ+Editor)
- Dabs Framework (https://steamcommunity.com/sharedfiles/filedetails/?id=2545327648&searchtext=Dabs+Framework)

## Screenshots

<img src="./images/warareanaPVPclose_1.jpg" alt="PVP close" width="512"/>
<img src="./images/warareanaPVPclose_2.jpg" alt="PVP close" width="512"/>
<img src="./images/warareanaPVPclose_3.jpg" alt="PVP close" width="512"/>

## How to use
- Copy the `warareanaPVPclose.dze` from `Config\EditorFiles` into your `YourServer\MPMissions\MAP\EditorFiles\` folder.
- Copy the `warareanaPVPclose.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder.
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `warareanaPVPclose` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "warareanaPVPclose",
  ],
```
- Reload the config in game over admin menu or restart the server.