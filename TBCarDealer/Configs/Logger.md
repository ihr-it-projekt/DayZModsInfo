[**`back`**](../Readme.md)

## Logger.json

See also logging for premium coin usage [Logger.json](../GlobalConfigs/Readme.md#loggerjson)

Here you can configure logging

````json lines
{
    "version": "1", // never change this, internal version number
    "logBuyCSV": 0, // If you want to log all buy transactions to a csv file, set this value to 1 otherwise to 0
    "logBuyDiscord": 0, // If you want to log all buy transactions to discord, set this value to 1 otherwise to 0
    "discordBuyWebhookURL": "", // The webhook url of the discord channel where the buy transactions should be logged
    "logSellCSV": 0, // If you want to log all sell transactions to a csv file, set this value to 1 otherwise to 0
    "logSellDiscord": 0, // If you want to log all sell transactions to discord, set this value to 1 otherwise to 0
    "discordSellWebhookURL": "" // The webhook url of the discord channel where the sell transactions should be logged
}
````
