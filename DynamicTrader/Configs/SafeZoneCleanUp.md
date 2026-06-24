### SafeZoneCleanUp.json

This configuration allows you to define items that will **NOT** be removed from safe zones at server restart.

```json lines
{
    "version": "1", // Never touch this value. It is needed internally
    "safeZoneCleanUpWhitelist": [
        "Barrel_Blue", // Type Name of items
        "Barrel_Green"
    ]
}