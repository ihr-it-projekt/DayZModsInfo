# North West Airfield

## Files

<a href="./ArenaBuildingConfig/NWA.json" download>Arena buildings Config</a>

<a href="./ArenaMatchConfig/NWA.json" download>Arena Match Config</a>

## Required Mod Packs 
- BuilderItems (https://steamcommunity.com/sharedfiles/filedetails/?id=1565871491)
- SPBuilding (https://steamcommunity.com/sharedfiles/filedetails/?id=2177232791)

## Screenshots

<img src="./images/NWA.jpg" alt="Cherno" width="512"/>

## How to use
- Copy the `NWA.json` from `Config\ArenaBuildingConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenaBuildingConfigs\` folder.
- Copy the `NWA.json` folder from `Config\ArenasMatchConfigs` into your `YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenasMatchConfigs\` folder.
- Add in your `YourServerProfilesFolder\TBMods\Config\TBWarParty\MainConfig.json` at `arenaFileNames` the `NWA` line:
```json
  "arenaFileNames": [
        "OterArenas",
        "Cherno",
  ],
```
- Reload the config in game over admin menu or restart the server.