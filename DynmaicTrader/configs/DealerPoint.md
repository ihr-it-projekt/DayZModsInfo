

### DealerPoint

Located in `YourServerProfile\TBMods\Config\TBDynamicTrader\DealerPoints`. These files configure specific dealers.

Example `Weapon Trader.json`:

```json
{
    {
    "uniqueName": "Weapon Trader", // Name of the trader
    "version": "0", // Never touch this value. It is needed internally
    "sellTax": 0.10, // Tax for selling items
    "position": [ // Location of the trader object
        6542.7314453125,
        6.188297748565674,
        2478.249267578125
    ],
    "orientation": [ // Orientation of the trader object
        -48.88920974731445,
        0.00231537944637239,
        0.0008682372281327844
    ],
    "useExactPosition": 1, // Use exact position, if 0 it will be placed automatically on ground
    "useUTCTime": 0, // Use UTC time for opening hours, if 0 it will use local time
    "type": "TBDTTraderMachine", // Type of the trader object (see types.md)
    "openTimes": [ // Opening hours
        {
            "openHour": 11,
            "openMinute": 20,
            "closeHour": 11,
            "closeMinute": 35
        },
        ...
    ],
    "safeZoneEnabled": 0, // Safe zone settings, 0 = disabled, 1 = enabled
    "safeZoneRadius": 100.0, // Safe zone radius
    "uniqueFileNames": [ // List of items (unique names) available at this trader
        "AK101",
        "AK74",
        ...
    ]
}
```

