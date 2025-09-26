# PriceItems/Example_Item_1.json

Here you can configure your price items.

````json lines
{
	"uniqueName": "Example_Item_1", // This name must match with the file name except the .json. For example if you file name is Example_Item_1.json, this value must be Example_Item_1
	"type": "AK74_Complete", // the type name from types.xml
	"quantity": 100.0, // The quantity of the item in percent 100.0 means 100%, 50. means 50%
	"sellPrice": 97, // The price the player get when he sells the item (Currently not implemented)
	"buyPrice": 98, // The price the player must pay to buy the item
	"isPremium": false, // If this item is a premium item, set this value to true. Only player with premium status can buy this item
    "amountItem": 1, // The amount of the item that the player is able to buy if the items is as an optional attachment configured 
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
