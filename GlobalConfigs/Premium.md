# Premium

## Items

### Premium Coins

This coins give player premium status for all my mods that support premium status. 

- TBLibOneTimeCoin | One Time Coin for Car Trader, more will be added
- TBLibPremiumCoinGold | 30 Days Premium in Daily Reward
- TBLibPremiumCoinSilver | 7 Days Premium in Daily Reward
- TBLibPremiumCoinBronze | 1 Day Premium in Daily Reward

It can be that you will not find all properties or configurations in your mod. They will always automatically create when you start the server and they are needed.

### How to give player premium status?
#### Coins
There are different premium coins implemented. You can find them in types description of the mod. Give one of the coins to the player. He has to use the coin in game with the F Action.

#### API
If you don´t want to use Premium coins, you can also use the "API". 

1. enable API in `YourServerProfilesFolder\TBMods\Config\Global\PremiumConfig.json` and restart your server or reload the configs
2. open `YourServerProfilesFolder\TBMods\Data\Global\AddPremium`
3. add a file for the player you want to give premium status. The file must have the following pattern.
   `{SteamID}_{DurationInDays}_{ModName}.premium` so for example `7656119813296317725_30_DailyReward.premium`
    
    Possible values for ModName are: 
   - DailyReward
   - DeathInsurance
   - CarDealer
   - DynamicTrader 
   - SecondHand

   Possible values for DurationInDays are: 
   - any number between 1 and 999

The Premium status will be given to the player, after the "API" has checked the folder. The file will after usage deleted. Invalid files will stay. If you see files that will not processed, please check the server script log for entries starting with `[TB Premium API]`.
Every successful processed file will be logged in csv or discord. See Logger.json for more information.