# Config.json

```json lines
{
    "version": "8", // never change this, internal version number
    "isInitialized": 0, // never change this, internal usage
    "maximumHeirsForOneInheritance": 10, // maximum heirs for one inheritance that can player add
    "insuranceCaseWillDeletedAfterSeconds": 86400, 
    "useLocalTime": 0, // if 1, the time will be calculated and displayed in local time of your server, if 0, the time will be calculated and displayed in UTC
    "timeInSecondsWhenItemsWillBeTransferAfterDeathOfPlayer": 10,
    "storeAllItemsInCargoOfMainItems": 0, // if 1, all items will be stored in cargo of main items, so not all items will be stored separately. Recommend to use if you have modded inventory size
    "globalInsuranceBuyCooldownInSeconds": -1, // global cooldown in seconds for buying insurance, -1 to disable. Player has to wait last buy + this value to buy again
    "defaultInsuranceIDForNewPlayers": "start", // You can enable a default insurance for all re- or new spawns. Just add the id of the insurance here
    "maximumFreeInsuranceCountForPlayers": -1, // You can limit the max amount how often a player gets the default insurance. -1 means a player gets always the default insurance on fresh spawn. any other higher number then 0 means for example 2 means a player get the default insurance 2 times.
    "insurances": [
        {
            "id": "g8ciyetvox", // this value must be unique to other insurance ids.
            "price": 1000, // price of the insurance
            "durationInSeconds": 86400, // duration of the insurance in seconds
            "stayActiveAfterDeath": 0 ,// if 1, the insurance will stay active after death of player
            "insureOnlyItemsThatAreAtTheMomentInCargoAndInventory": 1, // if 1, only items that are in cargo and inventory at the moment when player make the insurance will be insured, all others will dropped to the ground. If you enable this option you need to set "storeAllItemsInCargoOfMainItems" to 0
            "canBuyAgainAfterSeconds": -1, // if -1, player can buy the insurance again, if not, player must wait after last buy, the seconds to buy the insurance again. If "globalInsuranceBuyCooldownInSeconds" is active this value will be ignored
            "isPremium": 0, // if 1, the insurance is a premium insurance
            "isBuyable": 1,  // 1 = players can buy this insurance, 0 = players can not buy the insurance
            "saveItemInHands": 1 // If 1, item in hand at time of death will saved. 0 = will not saved
        },
        {
            "id": "start",
            "price": 0,
            "durationInSeconds": 3600,
            "stayActiveAfterDeath": 0,
            "insureOnlyItemsThatAreAtTheMomentInCargoAndInventory": 0,
            "canBuyAgainAfterSeconds": 100000,
            "isPremium": 0,
            "isBuyable": 1
        },
        {
            "id": "4b2dgimf1x",
            "price": 2000,
            "durationInSeconds": 604800,
            "stayActiveAfterDeath": 0,
            "insureOnlyItemsThatAreAtTheMomentInCargoAndInventory": 0,
            "canBuyAgainAfterSeconds": 86400,
            "isPremium": 1,
            "isBuyable": 1
        }
    ]
}
```