# ItemPriceConfig.json

::: tip
These limits apply to sale offers. The same numeric limit is checked against the entered price in the selected currency.
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