[back](Index.md)

# MainConfig.json


````json lines
{
  "version": "1", // never change this, internal version number
  "isInitialized": 1, // never change this, internal usage
  "isActive": 1, // If you want to activate every player can create a match for  WarArena Mod, set this value to 1 otherwise to 0. This value can also be changed in the admin menu in game.
  "arenaFileNames": [ // The names of the arenas, muss match with the file names from `\TBMods\Config\TBWarArena\ArenasMatchConfig` folder
    "Colosseum"
  ],
  "lobbyEnterPointsNames": [ // The names of the lobby enter points, muss match with the file names from `\TBMods\Config\TBWarArena\LobbyEnterPoints` folder
    "Chernogorsk"
  ],
  "arenas": [], // internal usage, do not change
  "mainLobbyPosition": [ // The position of the main lobby, the match lobbies will spawn over that position
    0.0,
    10.0,
    0.0
  ],
  "playerCanOpenArenaMenuFromEverywhere": 1 // If you want to allow the player to open the arena menu from everywhere, set this value to 1 otherwise to 0 and players can only open the menu from lobby enter points.
}
````

[back](Index.md)