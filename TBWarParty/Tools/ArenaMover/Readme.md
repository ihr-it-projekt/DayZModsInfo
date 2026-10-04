# Arena Mover

Moves an arena to another position. Buildings and spawn points are moved by the same offset, so they stay together.

**Tool:** https://doc.themodbase.com/ArenaMover/index.html

Everything happens in your browser, no file is uploaded anywhere.

## Supported files

- DayZ Editor `.dze` files, binary and JSON (from `YourServer\MPMissions\YourMapName\EditorFiles\`)
- `ArenaBuildingConfigs` files (`YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenaBuildingConfigs\`)
- `ArenaMatchConfigs` files, the spawn points are moved (`YourServerProfilesFolder\TBMods\Config\TBWarParty\ArenaMatchConfigs\`)

## How to use

- Stop your server and make a backup of the files.
- Open the tool and drop the arena buildings file (`.dze` or ArenaBuildingConfig) **and** the ArenaMatchConfig of the arena into the upload area.
- **From**: click on "Arena center". This uses the middle of all buildings and the height of the lowest spawn point, which is the arena floor.
  You can also stand on the arena floor in game and paste your position (X, Y, Z), e.g. from VPP Admin Tools.
- **To**: stand at the target position in game and paste your position (X, Y, Z).
- **Extra height**: lifts the arena above the target position (default 1 m), so uneven ground does not poke through the arena floor.
- Check the new building area and spawn heights, then click on "Move & download".
- Replace your files with the downloaded files (they keep their names) and start your server.

Instead of two points you can also enter an offset (X, Y, Z) that is added to every position.

## Notes

- Hidden (deleted) map objects in `.dze` files are not moved, they belong to the map.
- The tool does not check the new position for map objects or terrain. Choose a free, flat area that is big enough (the tool shows the arena size) and look at the arena in game after moving it.
- Your browser may ask to allow downloading multiple files.

How to continue... ? See here: [ArenaBuildingConfig.md](../../Configs/ArenaBuildingConfig.md) and [ArenaMatchConfigs.md](../../Configs/ArenaMatchConfigs.md)
