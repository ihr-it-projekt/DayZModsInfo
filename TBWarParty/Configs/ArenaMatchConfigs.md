# ArenaMatchConfigs

````json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 1, // never change this. Internal usage
    "arenaObjectsConfigFile": "Colosseum", // Name of the arena, will use to display the name in game.
    "playersCount": [ // how many players can join a match, this value will use to set the min and max players for a match
        10,
        15
    ],
    "roundsCount": [ // how many rounds will be played in a match
        1,
        2
    ],
    "deathPenaltyTimeInSeconds": [ // currently not used but will be used in the future
        1,
        2,
        3,
        5,
        10
    ],
    "maxTimePerRoundInMinutes": [ // how long a round maximum will take in minutes
        5,
        10
    ],
    "maxKillsPerRound": [ // how many kills are needed to win a round. This value counts for team kills or in against all mode for player kills.
        3,
        5
    ],
    "startingFee": [ // currently not used but will be used in the future
        1000,
        2000,
        3000,
        5000,
        10000
    ],
    "teamWinRatio": [ // currently not used but will be used in the future
        {
            "place": 1,
            "ratio": 0.5
        },
        {
            "place": 2,
            "ratio": 0.30000001192092898
        }
    ],
    "enableChangeSides": 1, // currently not used but will be used in the future
    "enableOneLifeMode": 1, // currently not used but will be used in the future
    "enableShowTeamMarker": 1, // currently not used but will be used in the future
    "enableStaminaMode": 1, // currently not used but will be used in the future
    "enableShowSpectatorMode": 1, // currently not used but will be used in the future
    "gearSetNames": [ // name the gear sets, must be the same name as your gear set file name. See here for more information: GearSets.md
        "Example1",
        "Example2"
    ],
    "gearSets": [], // internal usage, do not change
    "externalPlayersCanEnterArena": 0, // currently not used but will be used in the future
    "adminCanEnterArena": 1, // currently not used but will be used in the future
    "enableMultipleGearSets": 1, // Match creator can choose multiple gear sets for a match if value is 1. If value is 0, only one gear set can be chosen.
    "showArenaBoarderPoints": 1, // currently not used but will be used in the future
    "teamSpawnZones": { // here must all team spawn zones insert, If you want to have more then 2 teams, you must add more team spawn zones.
      // Start first team
        "1": [
            {
                "position": [
                    3871.87109375,
                    396.7033386230469,
                    11775.6171875
                ],
                "orientation": [
                    32.31016159057617,
                    0.0,
                    -0.0
                ],
                "radius": 10.0 // how big the spawn zone is, value must be positive
            },
            {
                "position": [
                    3971.87109375,
                    396.7033386230469,
                    11778.6171875
                ],
                "orientation": [
                    32.31016159057617,
                    0.0,
                    -0.0
                ],
                "radius": 1.0
            }
        ],
      // Start next team
        "2": [
            {
                "position": [
                    3987.601318359375,
                    396.28509521484377,
                    11882.591796875
                ],
                "orientation": [
                    -130.3587646484375,
                    0.0,
                    -0.0
                ],
                "radius": 10.0
            }
        ]
    },
    "teamsCount": [], // internal usage, do not change
    "playerHealth": 100, // how much health a player has
    "playerShield": 100, // how much shield a player has, shield are automatically regenerate after a period of time
    "startCountdown": 60, //
    "startNextRoundCountdown": 20, // how long the countdown will be to start the next round
    "endMatchCountdown": 10 // how long the countdown will be to end the match, must be at least 5 seconds
}
````