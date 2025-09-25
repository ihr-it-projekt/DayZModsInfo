# ItemWhiteList.json

These Items can not be traded or ordered.

If you name one entry with `*` like `Survivor*`, all items with the name `Survivor` in will be blacklisted.

```json lines
{
    "version": "1", // Never touch this value. It is needed internally
    "isInitialized": 1, // Never touch this value. It is needed internally
    "blackListItems": [ // Whitelisted Items
      "FullItemName",
      "ExampleStartsWith*",
      "Bandage"
    ]
}
```