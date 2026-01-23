# Premium

## Items

### Premium Coins

These coins give players premium status for all my mods that support premium status. 

- TBLibOneTimeCoin | One-time coin for Car Trader; more will be added.
- TBLibPremiumCoinGold | 30 days premium in Daily Reward.
- TBLibPremiumCoinSilver | 7 days premium in Daily Reward.
- TBLibPremiumCoinBronze | 1 day premium in Daily Reward.

It is possible that you may not find all properties or configurations in your mod. They will always be automatically created when you start the server if they are needed.

### How to give player premium status?
#### Coins
There are different premium coins implemented. You can find them in the types description of the mod. Give one of the coins to the player. They must use the coin in-game with the F action.

#### API
If you don't want to use premium coins, you can also use the "API". 

1. Enable the API in `YourServerProfilesFolder\TBMods\Config\Global\PremiumConfig.json` and restart your server or reload the configs.
2. Open `YourServerProfilesFolder\TBMods\Data\Global\AddPremium`.
3. Add a file for the player you want to give premium status to. The file must follow this pattern:
   `{SteamID}_{DurationInDays}_{ModName}.premium` (e.g., `7656119813296317725_30_DailyReward.premium`).
    
    Possible values for ModName are: 
   - DailyReward
   - DeathInsurance
   - CarDealer
   - DynamicTrader 
   - SecondHand

    Possible values for DurationInDays are: 
   - Any number between 1 and 999.

The premium status will be given to the player after the "API" has checked the folder. The file will be deleted after use. Invalid files will remain. If you see files that are not processed, please check the server script log for entries starting with `[TB Premium API]`.
Every successfully processed file will be logged in CSV or Discord. See `Logger.json` for more information.