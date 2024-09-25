[**`back`**](./Readme.md)

# FAQ

## How to install

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- extract TBDailyReward.zip
- Copy the files from `TBDailyReward` into `YourServerProfilesFolder\TBMods\Config\TBTBDailyReward` folder
- Start your server. Some more configurations will be generated.
- Tear down the server
- Configure your needs
- Start your Server :-)

## How i can reset a single player?
- write down the player id (Bohemia ID)
- kill the player in game
- player must logout
- wait for player data store to not loos data from other players, see changed timestamp of files. Player Data will stored, when DayZ saves the PlayerBase.
- delete the player data file in `YourServerProfilesFolder\TBMods\Data\TBDailyReward\Player\` folder. Filename is {BohemiaID}.bin
- reload the date with "Reload Player Data" in the menu


## How i can give player premium status?

There are 3 Items implemented. Just give him one of the items and he will get premium status for Daily Reward.

- TBDRPremiumCoinGold | 30 Days Premium in Daily Reward
- TBDRPremiumCoinSilver | 7 Days Premium in Daily Reward
- TBDRPremiumCoinBronze | 1 Day Premium in Daily Reward
