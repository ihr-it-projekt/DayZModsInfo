# DealerPoints.json

[**`back`**](../Readme.md)

````json lines
{
  // Never touch this value. It is needed internally
  "version": "1",
  // Never touch this value. It is needed internally
  "isInitialized": 1,
  // Dealer Points where gloabl stalls are placed
  "dealerPoints": [
    {
      // The id of the global stall, if you want to share the storage with other global stalls, use the same id
      "id": "MyDealerPoint1",
      // The position of the global stall
      "position": [
        6550.74658203125,
        6.000027179718018,
        2478.693359375
      ],
      // The orientation of the global stall
      "orientation": [
        131.6627655029297,
        0.0,
        -0.0
      ],
      // 0 = off, 1 = on, if 1 the global stall will be placed exactly at the position
      "useExactPosition": 0,
      // The type of the global stall (see Types.md)
      "type": "TBSHMGlobalStall_03",
      // This name is just to give the stall a name that you can identify it
      "uniqueName": "Chernogorsk 1"
    },
    {
      "id": "MyDealerPoint1",
      "position": [
        6553.74658203125,
        6.000027179718018,
        2478.693359375
      ],
      "orientation": [
        131.6627655029297,
        0.0,
        -0.0
      ],
      "useExactPosition": 0,
      "type": "TBSHMGlobalStall_03",
      "uniqueName": "Chernogorsk 2"
    }
  ]
}
````