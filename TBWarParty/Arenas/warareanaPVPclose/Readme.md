# PVP Arena Close

## Files

[Arena Editot DZE file](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/warareanaPVPclose/Config/EditorFiles/warareanaPVPclose.dze){target="_blank" download}

[Arena Match Config](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/warareanaPVPclose/Config/ArenaMatchConfigs/warareanaPVPclose.json){target="_blank" download}

## Required Mod Packs

- BuilderItems (https://steamcommunity.com/sharedfiles/filedetails/?id=1565871491)
- DayZ Editor Loader (https://steamcommunity.com/sharedfiles/filedetails/?id=2276010135&searchtext=DayZ+Editor)
- Dabs Framework (https://steamcommunity.com/sharedfiles/filedetails/?id=2545327648&searchtext=Dabs+Framework)

## Screenshots

![PVP close](./images/warareanaPVPclose_1.jpg)
![PVP close](./images/warareanaPVPclose_2.jpg)
![PVP close](./images/warareanaPVPclose_3.jpg)

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