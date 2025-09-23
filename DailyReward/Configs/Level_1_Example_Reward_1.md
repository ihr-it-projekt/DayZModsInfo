# RewardLevels/Level_1_Example_Reward_1.json
````
{
	"uniqueName": "Level_1_Example_Reward_1", // This name must match with the file name except the .json. For example if your file name is Level_1_Example_Reward_1.json, this value must be Level_1_Example_Reward_1
	"isLoaded": 0, // Never touch this value. It is needed internally
	"version": "1", // Never touch this value. It is needed internally
	"level": 1, // The level of the reward
	"canTakenTimes": -1, // How many times all players can take this reward, -1 means unlimited times, 10 means 10 times for all players, if you want to reset the taken times, just delete in ServerProfile\TBDailyReward\Data\Level_1_Example_Reward_1.json and reload all configs
	"items" [] // Dont use it, internal used. 
	"uniqueItemNames": [  // Here you can add and name your own previuse created reward items. for configuration see Items/Example_Item_1.json
		"Example_Item_1",
		"GiftBox_Medium_2",
		"Engraved1911_Complete",
		"CombatBoots_Black"
	]
}
````