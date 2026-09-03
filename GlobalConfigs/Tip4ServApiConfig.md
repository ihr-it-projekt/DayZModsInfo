# Tip4ServApiConfig.json

**Requires min TBLib Version 5.32.0**

File is located in `YourDayZServerProfileFolder\TBMods\Config\Global`

If you want to automat giving premium days for your players you can use Tip4ServAPI. 
You need to create an account on [Tip4Serv](https://tip4serv.com/) and add your server. 
Then you will get an API token. You need to add this token to the config file.

::: warning
Do not avoid agains Bohemia Interactive monetized DayZ server rules by using premium functions of my mod. By using this API you agree to the terms of service of Bohemia Interactive.
:::

I recommend to enable logging for premium api in [Logger](Logger.md) 

````json lines
{
    "enableAPI": 1, // 0 = off | 1 = on, your server requests Tip4Serv every X minutes to check if someone gave you a tip.
    "apiToken": "AddYourBearerTokenHere", // Add your API token from Tip4Serv here. You can get it from your Tip4Serv account
    "checkAPITimeInMinutes": 1 // Check for new tips every 1 minute
}
````

Please check also [Tip4Serv documentation](https://docs.tip4serv.com/games/dayz/tbmods) for more information 