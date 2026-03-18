# ItemPriceConfig.json

::: tip
You can set the max price for each item in the second hand market here.
:::

````json lines
{
    "version": "1", // Never touch this value. It is needed internally
    "isInitialized": 1, // Never touch this value. It is needed internally
    "generalMaxPrice": -1, // Max price for each item in the second hand market | -1 = no max price
    "itemMaxPrices": [
		{
			"itemType": "BandageDressing", // DayZ Type of the item
			"maxPrice": 1000 // Max price for this item in the second hand market, non exiting types will use the general max price
		}
	]
}
````