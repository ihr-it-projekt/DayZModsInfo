# Logger

````json lines
{
    "version": "2", // never change this, internal version number
    "isInitialized": 1, // never change this. Internal usage
    "logKillFeedToDiscord": 1, // if 1, the kill feed will be logged to discord
    "discordKillFeedWebhookURL": "", // URL of the discord webhook
    "discordKillFeedHeader": "Kill Feed", // Header of the discord message
    "discordKillerTitle": "Killer", // Title of the killer column
    "discordVictimTitle": "Victim", // Title of the victim column
    "discordWeaponTitle": "Weapon", // Title of the weapon column
    "postMatchCreatedInDiscord": 1, // if 1, the match created will be logged to discord
    "discordMatchCreatedWebhookURL": "", // URL of the discord webhook
    "discordMatchCreatedHeader": "Match created in Arena %1", // Header of the discord message, %1 will be replaced with the arena name
    "postMatchStartInDiscord": 1, // if 1, the match start will be logged to discord
    "discordMatchStartWebhookURL": "", // URL of the discord webhook
    "discordMatchStartHeader": "Match started in Arena %1", // Header of the discord message, %1 will be replaced with the arena name
    "postMatchWinInDiscord": 1, // if 1, the match win will be logged to discord
    "discordMatchWinWebhookURL": "", // URL of the discord webhook
    "discordMatchWinHeader": "Match ended in Arena %1", // Header of the discord message %1, will be replaced with the arena name
    "discordMatchTitleTeamWinAgainstAll": "Team %1 won against all", // Title of the match win message %1 will be replaced with the team number
    "discordMatchBodyTeamFirstLine": "Place | Team | Points | Kills | Deaths", // Body of the match win message for team matches
    "discordMatchTitlePlayerWinAgainstAll": "%1 won against all", // Title of the match win message %1 will be replaced with the player name
    "discordMatchBodyPlayerFirstLine": "Place | Player name | Points | Kills | Deaths", // Body of the match win message for against all matches
    // Arena Details for log messages
    "logTeamsCount": "Teams Count", 
    "logPlayersPerTeam": "Players Per Team",
    "logRoundsCount": "Rounds Count",
    "logDeathPenaltyTime": "Death Penalty Time",
    "logMaxTimePerRound": "Max Time Per Round",
    "logMaxKillsPerRound": "Max Kills Per Round",
    "logEnableChangeSides": "Enable Change Sides",
    "logEnableOneLifeMode": "Enable One Life Mode",
    "logEnableShowTeamMarker": "Enable Show Team Marker",
    "logEnableStamina": "Enable Stamina",
    "logEnableMultipleGearSets": "Enable Multiple Gear Sets",
    "logEnableSpectatorMode": "Enable Spectator Mode",
    "logEnableRandomTeamSelect": "Enable Random Team Select",
    "logStartingFee": "Starting Fee",
    "logIsPermanent": "Is Permanent",
    "logTeamWinRatio": "Team Win Ratio",
    "logEnableFriendlyFire": "Enable Friendly Fire",
    "logForceFirstPerson": "Force First Person",
    "logLootWillDeletedWhenPlayerDie": "Loot Will Deleted When Player Die",
    "logDisableSpectatorIfMatchIsStarted": "Disable Spectator If Match Is Started",
    "logDisableJoinIfMatchIsStarted": "Disable Join If Match Is Started",
    "logWinCondition": "Win Condition",
    "logWinByKills": "Win by Kills",
    "logWinByPoints": "Win by Points"
}
````