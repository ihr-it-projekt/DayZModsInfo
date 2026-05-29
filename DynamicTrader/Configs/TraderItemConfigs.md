### TraderItemConfigs

Located in `YourServerProfile\TBMods\Config\TBDynamicTrader\TraderItemConfigs/`. Individual configuration files for each tradeable item.

Example `AK74.json`:

```json
{
    "uniqueName": "AK74", // Unique identifier for the item (referenced in DealerPoints)
    "type": "AK74", // The classname of the item item in game
    "currency": "default", // The currency the item is sold in see CurrencyConfig.json 
    "category": "Assault Rifles", // The category the item belongs to
    "quantity": 1.0, // Quantity of item (e.g., 1) If this value is -1 the item get always full quantity but when a player sell the item, quantity has no impact to sell price
    "isPremium": 0, // Only player with premium state can buy this item
    "isStorageItem": 0, // If 1, the item is a storage item
    "ignoreHealth": 0, // If 1, the item health when player sell it will be ignored
    "buyPrice": 1600, // Buy price of item
    "maxBuyPrice": 1600, // Max buy price of item, only relevant when it is a storage item
    "emptyStorageOnServerRestart": 0, // If 1, the storage will be emptied on server restart
    "fillStorageOnServerRestart": 0, // If 1, the storage will be filled on server restart
    "ignoreBuyStorageLimit": 0, // If 1, the buy storage limit will be ignored when player buys an item
    "ignoreSellStorageLimit": 0, // If 1, the sell storage limit will be ignored when player sells an item
    "sellPrice": 750, // Sell price of item
    "maxSellPrice": 750, // Max sell price of item, only relevant when it is a storage item
    "maxStorage": 100, // Max storage of item, only relevant when it is a storage item
    "reducePerTick": -1, // Amount to reduce stock by per tick (dynamic economy). If you add a negative value it will be added to the stock
    "tickLengthInMinutes": 10, // Length of a tick in minutes
    "premiumPriceReduce": 0, // Reduce the buy price for premium players
    "maxCountThatPlayerCanBuyAsAttachment": 1, // If this trader type is added as an attachment to another item, this defines the max count that player can buy
    "maxCountThatPlayerCanBuyAsOptionalAttachment": 1, // If this trader type is added as an optional attachment to another item, this defines the max count that player can buy
    "enablePoints": 1, // Enable points for this item. If 0, reputation system is not relevant for this item
    "minPointsNeededForSell": 10, // Minimum points needed to sell the item, is by default the lowest int value in DayZ
    "minPointsNeededForBuy": 1, // Minimum points needed to buy the item, is by default the lowest int value in DayZ
    "maxPointsNeededForSell": 1000, // Maximum points needed to sell the item, is by default the highest int value in DayZ
    "maxPointsNeededForBuy": 1000, // Maximum points needed to buy the item, is by default the highest int value in DayZ
    "givePlayerPointsForSell": -10, // Points to give the player for selling the item.
    "givePlayerPointsForBuy": 10, // Points to give the player for buying the item.
    "storageItem": {}, // Never touch this value. It is needed internally
    "attachmentUniqueNames": [ // List of attachments included. The player has not to pay for this attachments
        "AK_PlasticHndgrd",
        "AK_WoodBttstck",
        "GhillieAtt_Tan",
        "Mag_AK74_30Rnd",
        "AK_Bayonet",
        "KashtanOptic"
    ],
    "optionalAttachmentUniqueNames": [ // List of optional attachments. The player has to pay for this attachments
        "AK_PlasticHndgrd"
    ],
    "variations": [ // if you want to add for examle a Tshirt, you can define here the variations of the Tshirt. This value must be the Type name of DayZ
        "ExampleTyp1"
    ],
    "version": "2" // Never touch this value. It is needed internally
}
```

