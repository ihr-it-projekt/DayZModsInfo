[**`back`**](./Readme.md)

# FAQ

## How to install

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- extract TBDailyReward.zip
- Copy the files from `TBDailyReward\Config` into `YourServerProfilesFolder\TBMods\Config\TBTBDailyReward` folder
- Start your server. Some more configurations will be generated.
- Tear down the server
- Configure your needs
- Start your Server :-)


## How i can give player premium status?

There are 3 Items implemented. Just give him one of the items and he will get premium status for Daily Reward.

- TBDRPremiumCoinGold | 30 Days Premium in Daily Reward
- TBDRPremiumCoinSilver | 7 Days Premium in Daily Reward
- TBDRPremiumCoinBronze | 1 Day Premium in Daily Reward

## Why are some of my players having negative values in the player data?

First of all, this is not a bug. This is expected behavior. We write only in data file, if:

1. a player dies
2. a player gets a reward
3. or you are using the reset function (only for Admins) in the menu

How this values can be negative?

1. For example, player has a very old character and has not died a while. He has on his character 10000 meters walked. Now he takes a reward for 3000 meters point. In the data file of the player will now be written -3000 meters.
   The player will see now in reward menu, 7000m plus. If the character dies now, the meters from character will be added to the reward data file. -3000 + 10000 = 7000 meters. The data file is now positive again.
2. Reset of all players over the admin reset button on the menu. All values from character will be now transferred as negative values to the data file. So the players all see 0 points in menu, but in data files are stored the negative values. If the player dies now, the values will be added to the data file and the data file is now positive again.

