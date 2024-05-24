[**`back`**](../Readme.md)

## InsurancePointConfig.json

```json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 0, // never change this, internal usage
    "insurancePoint": {
        {
            "position": [ // position of the insurance trader
                6508.6298828125,
                0.0,
                2398.389892578125
            ],
            "orientation": [ // orientation of the insurance trader
                0.0,
                0.0,
                0.0
            ],
            "useExactPosition": 0 // if 1, the position will be used exactly. If 0, the object will automatically placed on the ground
        },
        { // second insurance trader
            "position": [
                6008.6298828125,
                0.0,
                2388.389892578125
            ],
            "orientation": [
                0.0,
                0.0,
                0.0
            ],
            "useExactPosition": 0
        }
    }
}
```