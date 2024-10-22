[**`back`**](../Readme.md)


## Config.json

```json lines
{
    "version": "4", // never change this, internal version number
    "isInitialized": 0, // never change this, internal usage
    "maximumHeirsForOneInheritance": 10, // maximum heirs for one inheritance that can player add
    "insuranceCaseWillDeletedAfterSeconds": 86400, 
    "timeInSecondsWhenItemsWillBeTransferAfterDeathOfPlayer": 10,
    "storeAllItemsInCargoOfMainItems": 0, // if 1, all items will be stored in cargo of main items, so not all items will be stored separately. Recommend to use if you have modded inventory size
    "insurances": [
        {
            "id": "g8ciyetvox", // this value must be unique to other insurance ids.
            "price": 1000, // price of the insurance
            "durationInSeconds": 86400, // duration of the insurance in seconds
            "stayActiveAfterDeath": 0 ,// if 1, the insurance will stay active after death of player
            "insureOnlyItemsThatAreAtTheMomentInCargoAndInventory": 1 // if 1, only items that are in cargo and inventory at the moment when player make the insurance will be insured
        },
        {
            "id": "4b2dgimf1x",
            "price": 2000,
            "durationInSeconds": 604800,
            "stayActiveAfterDeath": 0,
            "insureOnlyItemsThatAreAtTheMomentInCargoAndInventory": 0
        }
    ]
}
```