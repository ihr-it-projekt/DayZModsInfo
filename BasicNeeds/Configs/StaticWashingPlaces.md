## StaticWashingPlaces.json

````json lines
{
    "version": "2", // Never touch this value. It is needed internally
    "isInitialized": 1, // Never touch this value. It is needed internally
    "washingPlaces": [
        {
            "position": [ // Position of the washing place
                5710.37109375, // X
                62.355655670166019, // Y
                2446.04736328125 // Z
            ],
            "orientation": [ // Orientation of the washing place
                -178.8500213623047, 
                0.0,
                -0.0
            ],
            "needsDetergent": 1, // 1 = needs detergent, 0 = no detergent needed
            "needsWater": 1, // 1 = needs water, 0 = no water needed
            "needsEnergy": 1, // 1 = needs energy, 0 = no energy needed
            "useExactPosition": 1, // 1 = use exact position, 0 = use position with some tolerance
            "moneyPerMinuted": 10 // Money per minute for using the washing place
        },
        {
            "position": [ 
                5707.7783203125,
                62.35565948486328,
                2445.828369140625
            ],
            "orientation": [
                -178.8500213623047,
                0.0,
                -0.0
            ],
            "needsDetergent": 1,
            "needsWater": 1,
            "needsEnergy": 1,
            "useExactPosition": 1,
            "moneyPerMinuted": 10
        }
    ]
}

````