
# MainConfig.json


````json lines
{
  "version": "4", // never change this, internal version number
  "isInitialized": 1, // never change this, internal usage
  "isActive": 1, // If you want to activate every player can create a match for  WarArena Mod, set this value to 1 otherwise to 0. This value can also be changed in the admin menu in game.
  "playerSpawnInMainLobby": 0,// If you want to spawn the player in the main lobby instead somewhere of the map when a new player joins your server, set this value to 1 otherwise to 0. Hint: The player is never able to leave the lobbies, except he plays a match. 
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
  "playerCanOpenArenaMenuFromEverywhere": 1, // If you want to allow the player to open the arena menu from everywhere, set this value to 1 otherwise to 0 and players can only open the menu from lobby enter points.
  "permanentLobbies": [ // The names of the permanent lobbies, muss match with the file names from `\TBMods\Data\TBWarArena\PermanentLobbies` folder, they will automatically add and removed when you create or remove in game. 
    "Cherno_6ww8dpmex2"
  ],
  "enableHitAnimation": 1 // 1 = on , 0 = off Player becomes an hit animation when he got an hit. 
  "disableNpcSpawnInLobbyBuilding": 1 // 1 = on , 0 = off Npc's will not spawn in the lobby building.
}
````
