[back](Index.md)

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
    "discordMatchBodyPlayerFirstLine": "Place | Player name | Points | Kills | Deaths" // Body of the match win message for against all matches
}
````

[back](Index.md)