# Items/Example_Item_1.json

Here you can configure your items.

````
{
	"uniqueName": "Example_Item_1", // This name must match with the file name except the .json. For example if you file name is Example_Item_1.json, this value must be Example_Item_1
	"health": 100.0, // The health of the item in percent 100 means 100%
	"type": "AK74_Complete", // the type name from types.xml
	"quantity": 1.0, // The quantity of the item in percent 1.0 means 100%, 0.5 means 50%
	"attachmentUniqueNames": [ // Here you can add and name your own previuse created items as attachments. They must be in the same folder as this item
	    "AK74_WoodBttstck",
		"AK74_Hndgrd",
		"PSO11Optic",
		"Mag_AK74_30Rnd"
	],
	"isCar": 0 // if this item is a car, set this value to 1 if not to 0
}
````