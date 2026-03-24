# BlacklistConfig.json
This file is used to configure the blacklist.

::: warning

If you are using`insureOnlyItemsThatAreAtTheMomentInCargoAndInventory = 1` the blacklist will not work because all items will be stored in cargo of main items.

:::

````json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 1, // never change this, internal usage
    "blacklistedItems": [
        "Item_Type_1", // add here the type name of the item you want to blacklist
        "Item_Type_2" // add here the type name of the item you want to blacklist
    ]
}
````