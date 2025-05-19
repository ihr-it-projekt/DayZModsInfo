
# StallConfig.json

[**`back`**](../Readme.md)

```json lines
{
  "version": "2", // Never touch this value. It is needed internally
  "maxMarketStallPerUser": 2, // How many market stalls can a player have, -1 = unlimited
  "maxPremiumMarketStallPerUser": 3, // How many market stalls can a premium player have, -1 = unlimited
  "maxMarketStallPerServer": -1, // How many market stalls can be placed on the server, -1 = unlimited
  "timeInMinutesThatOwnerHasAfterLifetimeIsExpired": 60, // If the lifetime is over, the market stall will be deleted after this time, so the owner has enough time to take his items
  "playerCanOnlyPlaceMarketStallInWhitelistAreas": 0, // 0 = off, 1 = on: please do not combine with "playerCanOnlyPlaceMarketStallInNonBlacklistAreas" option
  "whitelistAreas": [ // Whitelisted Areas
    {
      "name": "Cherno 1", // Name of the Area
      "position": [ // Position of the Area
        6588.37744140625,
        6.5883049964904789,
        2436.6015625
      ],
      "radius": 20 // Radius of the Area
    },
    {
      "name": "Cherno 2",
      "position": [
        6579.7294921875,
        6.419719219207764,
        2444.47802734375
      ],
      "radius": 20
    }
  ],
  "playerCanOnlyPlaceMarketStallInNonBlacklistAreas": 1, // 0 = off, 1 = on: please do not combine with "playerCanOnlyPlaceMarketStallInWhitelistAreas" option
  "blacklistAreas": [
    {
      "name": "Cherno 1",
      "position": [
        6549.44970703125,
        5.930033206939697,
        2482.272216796875
      ],
      "radius": 30
    },
    {
      "name": "Cherno 1",
      "position": [
        6588.37744140625,
        6.5883049964904789,
        2436.6015625
      ],
      "radius": 20
    }
  ],
  "stalls": [
    {
      "id": "1q3lznkerc", // Unique ID, you can set it manually to any random string
      "type": "TBSHMStand_01_Kit", // Type of the Stall
      "slotCount": 100, // How many slots the stall has
      "premiumExtraSlotCount": 50, // How many extra slots the stall has for premium users
      "lifetimeInMinutes": 360, // How long the stall will be available, if he is placed. After this time, the stall will be closed and deleted after the timeInMinutesThatOwnerHasAfterLifetimeIsExpired
      "premiumExtraLifetimeInMinutes": 120,  // Extra lifetime for premium users
      "price": 2000, // Price for the stall
      "premiumPriceReduce": 500, // Price reduce for premium users
      "priceForTimeExtension": 100, // Price for time extension, if value is lower than 0, the time extension feature is disabled
      "durationInMinutesForTimeExtension": 60 // Duration in minutes for time extension, if value is lower than 0, the time extension feature is disabled
    },
    {
      "id": "0c5nvonrpm",
      "type": "TBSHMStand_02_Kit",
      "slotCount": 100,
      "premiumExtraSlotCount": 50,
      "lifetimeInMinutes": 360,
      "premiumExtraLifetimeInMinutes": 120,
      "price": 2000,
      "premiumPriceReduce": 500,
      "priceForTimeExtension": -1,
      "durationInMinutesForTimeExtension": -1
    },
    {
      "id": "mydcejy2pk",
      "type": "TBSHMStand_03_Kit",
      "slotCount": 100,
      "premiumExtraSlotCount": 50,
      "lifetimeInMinutes": 360,
      "premiumExtraLifetimeInMinutes": 120,
      "price": 2000,
      "premiumPriceReduce": 500,
      "priceForTimeExtension": -1,
      "durationInMinutesForTimeExtension": -1
    }
  ]
}
```