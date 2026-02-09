# PVP Arena Village

## Files


[Arena Editot DZE file](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/Village/Config/EditorFiles/Village.dze){target="_blank" download}

[Arena Match Config](https://raw.githubusercontent.com/ihr-it-projekt/DayZModsInfo/main/TBWarParty/Arenas/Village/Config/ArenaMatchConfigs/Village.json){target="_blank" download}

## Required Mod Packs

- DayZ Editor Loader (https://steamcommunity.com/sharedfiles/filedetails/?id=2276010135&searchtext=DayZ+Editor)
- Dabs Framework (https://steamcommunity.com/sharedfiles/filedetails/?id=2545327648&searchtext=Dabs+Framework)

## Screenshots

![Village](./images/Village_1.jpg)
![Village](./images/Village_2.jpg)
![Village](./images/Village_3.jpg)
![Village](./images/Village_4.jpg)

## How to use
- Copy the `Village.dze` from `Config\EditorFiles` into your `YourServer\MPMissions\MAP\EditorFiles\` folder.
- (Will created soon) Copy the `Village.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder. 
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `Village` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "Village",
  ],
```
- Reload the config in game over admin menu or restart the server.