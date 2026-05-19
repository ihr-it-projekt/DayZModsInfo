# Logger.json

File is located in `YourDayZServerProfileFolder\TBMods\Config\Global`

```json lines
{
    "version": "3", // never change this, internal version number
    "logUsePremiumCoinCSV": 1, // 1 = enables csv logging in path YourServerProfilesFolder\TBMods\Logs\Global\playerSteamId, 0 = disabled Logs the premium coins usage on csv
    "logUsePremiumCoinDiscord": 1, // 1 = enables discord logging, 0 = disabled Logs the premium coins usage on discord
    "discordUsePremiumCoinWebhookURL": "", // Add here your discord webhook url
    "logUsePremiumAPICSV": 1, // 1 = enables csv logging in path YourServerProfilesFolder\TBMods\Logs\Global\playerSteamId, 0 = disabled Logs the premium coins usage on csv
    "logPremiumAPIDiscord": 1, // 1 = enables discord logging, 0 = disabled Logs the premium API usage on discord
    "discordLogPremiumAPIWebhookURL": "", // Add here your discord webhook url Logs the premium API usage on discord
    "enableGlobalLogFileRotation": 1, // 1 = enables global log file rotation for all TB mods. This will rotate the CSV files based on the date. 0 = disabled 
}
```