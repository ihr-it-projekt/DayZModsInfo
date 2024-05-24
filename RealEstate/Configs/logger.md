[**`back`**](../Readme.md)

## logger.json

````json lines
{
    "version": "3",  // Never touch this value. It is needed internally
    "isInitialized": 1, // Never touch this value. It is needed internally
    "logSteamIdInRaidDiscordLog": 1, // 1 = on 0 = off, Log the SteamID in the discord raid log 
    "logRaid": 1, // 1 = on 0 = off, Log to csv when a player raid a house
    "logRaidToDiscord": 1, // 1 = on 0 = off, Log to discord when a player raid a house
    "discordRaidWebhookURL": "https://your.discord.webhook.url",
    "logStore": 1,  // 1 = on 0 = off, Log to csv when a player move items in and out store
    "logStoreToDiscord": 1, // 1 = on 0 = off, Log to discord when a player move items in and out store
    "discordStoreWebhookURL": "", // https://your.discord.webhook.url",",
    "logHouseTrade": 1, // 1 = on 0 = off, Log to csv when a player buy or sell a house
    "logHouseTradeToDiscord": 1, // 1 = on 0 = off, Log to discord when a player buy or sell a house
    "discordHouseTradeWebhookURL": "", // https://your.discord.webhook.url",",
    "logHouseExtensionTrade": 1,  // 1 = on 0 = off, Log to csv when a player buy or sell a house extension
    "logHouseExtensionTradeToDiscord": 1, //  1 = on 0 = off, Log to discord when a player buy or sell a house extension
    "discordHouseExtensionTradeWebhookURL": "" //https://your.discord.webhook.url","
}
````