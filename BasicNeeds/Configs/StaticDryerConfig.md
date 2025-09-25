## StaticDryerConfig.json

````json lines
{
  "version": "1", // Never touch this value. It is needed internally
  "isInitialized": 1, // Never touch this value. It is needed internally
  "dryerPlaces": [
    {
      "position": [ // Position of the dryer place
        5710.72265625,
        62.315670013427737,
        2443.718505859375
      ],
      "orientation": [ // Orientation of the dryer place
        -91.50969696044922,
        0.0,
        0.0
      ],
      "needsEnergy": 0, // 1 = needs energy, 0 = no energy needed
      "useExactPosition": 1, // 1 = use exact position, 0 = use position with some tolerance
      "moneyPerMinuted": 10 // Money per minute for using the dryer place
    }
  ]
}
````