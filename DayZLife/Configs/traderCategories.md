# traderCategories.json

[**`back`**](../Readme.md)

Link Online Editor: [traderCategories.json](https://tools.dayz-life.net/category-editor/add-items)

You can use our Online Editor for creating this configuration, you only have to add Attachments manually. If you use the online Editor, the JSON file will be compressed formatted. But after first start of the mod, the file will be well formatted

````json lines
{
    "version": "2", // Never touch this value. It is needed internally
    "categories": [
        {
            "name": "Attachments", // Name of the category, must be unique
          "items": [
            {
              "id": "337748106", // must be unique, if you add manually an item, you can set an empty value like "", the mod will automatically assign a value. Never change this value.
              "type": "M4A1", // The type of the object, see in types.xml
              "displayName": "", // This value will used only internally. Leave it blank 
              "sellPrice": 10, // Price for a full stack. If the seller has only the half stack, he will get the half price.
              "buyPrice": 200, // Price for full stack. Player get always a full stack from trader.
              "attachments": [ // Here you can add attachments
                "M4_CQBBttstck",
                "M4_RISHndgrd",
                "ReflexOptic"
              ],
              "usePlayerAsSpawnPoint": 1, // Item will spawn at player  1 = On 0 = Off
              "isCar": 0, // if item is a car, it will fill with all liquids  1 = On 0 = Off
              "isStorageItem": 0, // if item is a storage item, the price will be calculated dynamically on storage level  1 = On 0 = Off
              "maxStorage": 0, // Maximum storage of the item
              "maxBuyPrice": 0, // Maximum buy price of the item, so fewer items in store, so higher the price
              "maxSellPrice": 0, // Maximum sell price of the item, so fewer items in store, so higher the price
              "reducePerTick": 0, // How many items will reduce per tick, if the value is negative, the item will increase
              "tickLengthInMinutes": 0 // How long one tick take in minutes
            },
            {
              "id": "1097690621",
              "type": "Shovel",
              "displayName": "",
              "sellPrice": 10,
              "buyPrice": 200,
              "attachments": [],
              "usePlayerAsSpawnPoint": 1,
              "isCar": 0,
              "isStorageItem": 0,
              "maxStorage": 0,
              "maxBuyPrice": 0,
              "maxSellPrice": 0,
              "reducePerTick": 0,
              "tickLengthInMinutes": 0
            },
            ... you can define more items
          ]
        }
    ]
}
````