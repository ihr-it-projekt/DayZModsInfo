[**`back`**](../Readme.md)

## Example House definition

You will find the autogenerated files after first start in `YourServerProfilesFolder\TBMods\Config\TBRealEstate\HouseDefinitions` folder

``` json lines
{
    "version": "1", // Never touch this value. It is needed internally
    "houseType": "Land_Garage_Row_Small",  // The type of the building 
    "sellPrice": 50,  // Price when player sell this building
    "buyPrice": 100, // Price when player buy this building
    "storageBuyFactor": 0.5, // -1 to disable, Others: The increase of price, when a player buy a storage. E.g. first cost 100 the second will cost 150 by a factor of 0.5
    "raidTools": [  // What kind of weapons the raider must have, he needs only one of the.
        "Crowbar"
    ],
    "inventoryItemsPerLevel": 10, // How many slots has on level. Every item takes the same count of slots, as in the inventory.
    "maxHouseInventoryLevel": 20, // the max level of house inventory.
    "raidTimeInSeconds": 600,  // How long the raid time per door is
    "raidCoolDownInSeconds": 0,  // After this period of time, can the doors looked after the last door was raided
    "maxKeys": -1 // How many keys can given for this house type to other plasers. Every house counts for his own. -1 = unlimited keys 10 = only 10 Players can get access to this house
}
```