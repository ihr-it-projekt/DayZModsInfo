# BotConfig.json

Bots need the **TBWarParty AI Extension** together with **DayZ Expansion AI**. Without the extension the bot menu is hidden and no bots spawn, even if `isActive` is `1`.

The file is created on the first server start in `YourServerProfilesFolder\TBMods\Config\TBWarParty\BotConfig.json`. It can be reloaded in game with the admin config reload.

````json lines
{
  "version": "1", // never change this, internal version number
  "isInitialized": 1, // never change this, internal usage
  "isActive": 1, // 1 = match creators can add bots, 0 = bots are disabled
  "onlyAdminsCanAddBots": 0, // 1 = only WarParty admins can add bots to a match
  "maxBotsPerTeam": 8, // max bots in one team (bots also use the normal team slots, so the max team size of the match is also a limit)
  "maxBotsPerMatch": 16, // max bots in one match
  "disabledArenas": [ // arenas without bots, must match the names from `arenaFileNames` in MainConfig.json (default: empty, example below)
    "Colosseum"
  ],
  "botClassNames": [ // bot models, empty = random Expansion AI survivors (default: empty, example below). Must be Expansion AI classes (eAI_Survivor...)
    "eAI_SurvivorM_Mirek",
    "eAI_SurvivorF_Eva"
  ],
  "defaultDifficultyIndex": 1, // index of the difficulty that is preselected in the bot menu (0 = first entry)
  "difficulties": [ // difficulty presets the match creator can choose from
    {
      "name": "Easy", // name shown in the bot menu
      "accuracyMin": 0.15, // min accuracy of the bot (0.0 - 1.0)
      "accuracyMax": 0.4, // max accuracy of the bot (0.0 - 1.0)
      "threatDistanceLimit": 150.0, // max distance in meters at which the bot engages enemies
      "movementSpeedLimit": 2, // 1 = walk, 2 = jog, 3 = sprint
      "huntDistance": 0.0 // max distance in meters at which the bot actively runs to the closest enemy. -1 = whole arena, 0 = never hunts (only patrols and fights what it sees or hears)
    },
    {
      "name": "Normal",
      "accuracyMin": 0.35,
      "accuracyMax": 0.7,
      "threatDistanceLimit": 300.0,
      "movementSpeedLimit": 3,
      "huntDistance": 100.0
    },
    {
      "name": "Hard",
      "accuracyMin": 0.6,
      "accuracyMax": 0.95,
      "threatDistanceLimit": 600.0,
      "movementSpeedLimit": 3,
      "huntDistance": -1.0
    }
  ]
}
````

## Arenas for bots

Bots find their way with the navmesh of DayZ. The DayZ Editor Loader and the ArenaBuildingConfigs add the arena buildings to the navmesh, but DayZ only builds it near the ground.

- **Arena on the ground (recommended):** bots use stairs, ramps and all floors of the arena.
- **Arena high in the air:** there is no navmesh. Bots walk straight to their target and around obstacles, but they cannot find the way to another floor and can get stuck in buildings.

Use the [Arena Mover](../Tools/ArenaMover/Readme.md) to move an arena to the ground.

## Bot menu

When bots are allowed in the selected arena, the create match menu shows a **Bots** button. There you can set per team:

- **Bots**: number of bots in this team.
- **Gear set**: a gear set of the arena, or *Random (team gear sets)* to use one of the gear sets selected for the team.
- **Difficulty**: one of the `difficulties` presets.
- **Bots only**: players cannot join this team. At least one team must allow players.
- **Fill free slots with bots at match start**: all free team slots are filled with bots when the start countdown ends. With this option the countdown starts as soon as one player is in the lobby.

## Rules

- Bots count as players: they use team slots and count for the min players per team.
- Bots never attack their own team. In "all against all" every other player and bot is an enemy.
- Bots use the same shield and health system as players and respawn after the death penalty time of the match. In one life mode they do not respawn.
- In one life team matches the round ends when only one team has survivors.
- Bot kills and points count for the team, the kill feed, the overlays and the match statistics.
- Bots get no prize money and are not counted when the prize is split. If a bots-only team wins, nobody gets money.
- Bots are never saved to the global leaderboards.
- Bots prefer spawn points that no player has used in the last 15 seconds.
- In arenas without navmesh (high in the air) bots do not spawn at or patrol to spawn points inside buildings (roof above the spawn point) or more than 2.5 m above the usual spawn height of the arena (balconies, upper floors, roofs), as long as the team has other spawn points. They cannot find the way out through doors and stairs there. In arenas on the ground bots use all spawn points.
- A bot that gets stuck 3 times at the same spot is ported to a free spawn point.
- Bots that do not move for 15 seconds while they are not close to an enemy walk to a random spawn point for 10 seconds before they hunt again.
- Weapons a player or bot drops when going down are removed after 2 seconds, so bots do not run for loot. Gear another player picked up is kept.
- Players and bots do not freeze in cold arenas.
- Bots are removed when the match ends, when the last player leaves the lobby or when an admin deletes the match.
