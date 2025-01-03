# PVP Arena DUST 2

## Required Mod Packs

- BuilderItems (https://steamcommunity.com/sharedfiles/filedetails/?id=1565871491)
- DayZ Editor Loader (https://steamcommunity.com/sharedfiles/filedetails/?id=2276010135&searchtext=DayZ+Editor)
- Dabs Framework (https://steamcommunity.com/sharedfiles/filedetails/?id=2545327648&searchtext=Dabs+Framework)

## Screenshots

<img src="images/Dust_1.jpg" alt="Ruined City" width="512"/>
<img src="images/Dust_2.jpg" alt="Ruined City" width="512"/>
<img src="images/Dust_3.jpg" alt="Ruined City" width="512"/>
<img src="images/Dust_4.jpg" alt="Ruined City" width="512"/>
<img src="images/Dust_5.jpg" alt="Ruined City" width="512"/>
<img src="images/Dust_6.jpg" alt="Ruined City" width="512"/>
<img src="images/Dust_7.jpg" alt="Ruined City" width="512"/>

## How to use
- Copy the `Dust2.dze` from `Config\EditorFiles` into your `YourServer\MPMissions\MAP\EditorFiles\` folder.
- Copy the `Dust2.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder.
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `Dust2` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "Dust2",
  ],
```
- Reload the config in game over admin menu or restart the server.