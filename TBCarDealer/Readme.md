# TB Car Dealer

<img src="./Logo.jpeg" alt="TB Car Dealer" width="512"/>

## Description
A car dealer script to buy cars and premium cars

## Shop Link
https://lbmaster.de/product.php?id=36

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube
will be coming soon :-)

## Features
- Creates a showroom for player, where they can test the cars
- works with DayZLife Car ownership, other mod supports are planed.
- Player can 
  - buy cars
  - sell cars
  - buy premium cars
  - can buy additional items for the car
  - can become premium user by using three different premium coins
- Admin
  - can reload configs and user data in game, that helps to support config changes without server restart
  - can add multiple independent dealer points
  - can add car variations to car position, for example different colors or equipment
  - can mark cars as premium cars so only premium users can buy them
  - can add additional items to the car that increase the price of the car
  - can log all transactions
  - can disable buy, sell and showroom for locations
  

## FAQ

### How to install

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- extract Config.zip
- Copy the files from `Config\Config` into `YourServerProfilesFolder\TBMods\Config\TBCarDealer` folder
- Configure your needs, for example pricing
- Start your Server :-)

### How i can give player premium status?

Hint: There are general coin for all my mods that support premium status. See [Global Readme](../GlobalConfigs/Readme.md#premium-coins)

There are 3 Items implemented. Just give him one of the items and he will get premium status for Car Dealer.

- TBCarDealerPremiumCoinGold | 30 Days Premium in Daily Reward
- TBCarDealerPremiumCoinSilver | 7 Days Premium in Daily Reward
- TBCarDealerPremiumCoinBronze | 1 Day Premium in Daily Reward


## Configurations

### Config Edition

Will come soon

### AdminConfig.json

Admins can currently make a hot reload of configs and player data. Only they see the button in the menu.

see [AdminConfig.json](../GlobalConfigs/Readme.md#adminconfigjson)

### CarConfigs Example
````
{
    "uniqueName": "Hatchback", // The name of the car config, file name must be the same
    "category": "Cars", // The category of the car
    "items": [], // never change this, internal usage
    "uniqueCarNames": [ // Here you can add variations of a car, like differend colors or equipment. The unique names of the cars, muss match with the files from `\TBMods\Config\TBCarDealer\PriceItems` folder
        "Hatchback_02_Black_Complete",
        "Hatchback_02_Blue_Complete"
    ]
}
````

### Example Currency configuration

see [CurrencyConfig.json](../GlobalConfigs/Readme.md#currencyconfigjson)


### DealerPointConfig Example

````
{
  "uniqueName": "Chernogorsk", // The name of the dealer point, file name must be the same
  "version": "1", // never change this, internal version number
  "playerCanSellCars": 0, // If you want to allow the player to sell cars, set this value to 1 otherwise to 0
  "playerCanEnterShowRoom": 1, // If you want to allow the player to enter the showroom, set this value to 1 otherwise to 0
  "playerCanBuyCars": 1, // If you want to allow the player to buy cars, set this value to 1 otherwise to 0
  "position": [ // The position of the dealer point
    6542.534180,
    6.215929,
    2477.865723
  ],
  "orientation": [ // The orientation of the dealer point
    314.0,
    0.0,
    0.0
  ],
  "spawnPosition": [
    6537.031738,
    5.995119,
    2482.719971
  ],
  "spawnOrientation": [
    166.0,
    0.0,
    0.0
  ],
  "useExactSpawnPosition": 0,
  "useExactPosition": 0, // If you want to use the exact position, set this value to 1 otherwise the Dealer point object will be automatically placed on the ground 
  "cars": [], // never change this, internal usage
  "uniqueFileNames": [ // The unique names of the cars you want to offer here, muss match with the file names from `\TBMods\Config\TBCarDealer\CarConfigs` folder 
    "Hatchback",
    "Hatchback_2"
  ]
}
````

### DealerPointsConfig.json

````
{
    "version": "1", // never change this, internal version number
    "isInitialized": 1, // never change this, internal usage
    "dealerPointsNames": [ // The names of the dealer points who are enabled, muss match with the file names from `\TBMods\Config\TBCarDealer\DealerPoints` folder
        "Chernogorsk"
    ]
}
````

### PriceItems/Example_Item_1.json

Here you can configure your price items.

````
{
	"uniqueName": "Example_Item_1", // This name must match with the file name except the .json. For example if you file name is Example_Item_1.json, this value must be Example_Item_1
	"type": "AK74_Complete", // the type name from types.xml
	"quantity": 1.0, // The quantity of the item in percent 1.0 means 100%, 0.5 means 50%
	"sellPrice": 97, // The price the player get when he sells the item (Currently not implemented)
	"buyPrice": 98, // The price the player must pay to buy the item
	"isPremium": false, // If this item is a premium item, set this value to true. Only player with premium status can buy this item
	"attachmentUniqueNames": [ // Here you can add and name your own previuse created items as attachments. They must be in the same folder as this item
	    "Hatchback_02_Wheel",
		"Hatchback_02_Wheel",
		"Hatchback_02_Wheel",
		"Hatchback_02_Wheel",
		"Hatchback_02_Wheel",
		"CarRadiator",
		"CarBattery",
		"SparkPlug",
		"HeadlightH7",
		"HeadlightH7",
		"Hatchback_02_Door_1_1_Black",
		"Hatchback_02_Door_1_2_Black",
		"Hatchback_02_Door_2_1_Black",
		"Hatchback_02_Door_2_2_Black",
		"Hatchback_02_Hood_Black",
		"Hatchback_02_Trunk_Black"
	],
	"optionalAttachmentUniqueNames": [ // Here you can add and name your own previuse created items as optional attachments. These items will take more money from the player and will not displayed in showroom
	    "CarBattery",
	    "SparkPlug"
	],
}
````

### Logger.json

See also logging for premium coin usage [Logger.json](../GlobalConfigs/Readme.md#loggerjson)

Here you can configure logging

````
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



