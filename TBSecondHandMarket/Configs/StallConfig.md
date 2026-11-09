
# StallConfigs.json

Set `currencyType` on each entry in `stalls` to the currency's `uniqueName` from the shared TBLib configuration. The trader charges the `price` and applies the `premiumPriceReduce` discount in that currency. To sell the same kit in multiple currencies, add one entry per currency with a different `id` and the same kit `type`. Existing entries use `default` when the field is missing, and the server automatically migrates config version 5 to version 6. [CurrencyConfig.json](../../GlobalConfigs/CurrencyConfig.md)

If the configured `currencyType` is missing or not defined in `CurrencyConfig.json`, the stall dealer disables the buy button and displays **Price unavailable** (`#TBSHM_StallPriceUnavailable`). The server also validates the currency on purchase and rejects any mismatched or unconfigured currencies. Stall purchases log the kit, price, and currency to CSV and Discord.

Lifetime extensions use `default`.

```json lines
{
  "version": "6", // Never touch this value. It is needed internally
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
      "currencyType": "default", // Currency uniqueName from CurrencyConfig.json
      "premiumPriceReduce": 500, // Price reduce for premium users
      "priceForTimeExtension": 100, // Price for time extension, if value is lower than 0, the time extension feature is disabled
      "durationInMinutesForTimeExtension": 60, // Duration in minutes for time extension, if value is lower than 0, the time extension feature is disabled
      "disableVehicleTrading": 1, // 0 = off, 1 = on, if 1 the stall will not allow vehicle trading for non premium players
      "premiumDisableVehicleTrading": 0, // 0 = off, 1 = on, if 1 the stall will not allow vehicle trading for premium players
      "maxOrderCount": 20, // How many purchase orders can be created at this stall, -1 = unlimited (shown at the stall dealer and as "used/max" in the stall menu, ∞ for unlimited)
      "premiumExtraMaxOrderCount": 10 // How many extra purchase orders premium users can create at this stall, -1 = unlimited for premium users
    },
    {
      "id": "0c5nvonrpm",
      "type": "TBSHMStand_02_Kit",
      "slotCount": 100,
      "premiumExtraSlotCount": 50,
      "lifetimeInMinutes": 360,
      "premiumExtraLifetimeInMinutes": 120,
      "price": 2000,
      "currencyType": "default",
      "premiumPriceReduce": 500,
      "priceForTimeExtension": -1,
      "durationInMinutesForTimeExtension": -1,
      "disableVehicleTrading": 1,
      "premiumDisableVehicleTrading": 0,
      "maxOrderCount": -1,
      "premiumExtraMaxOrderCount": 0
    },
    {
      "id": "mydcejy2pk",
      "type": "TBSHMStand_03_Kit",
      "slotCount": 100,
      "premiumExtraSlotCount": 50,
      "lifetimeInMinutes": 360,
      "premiumExtraLifetimeInMinutes": 120,
      "price": 2000,
      "currencyType": "default",
      "premiumPriceReduce": 500,
      "priceForTimeExtension": -1,
      "durationInMinutesForTimeExtension": -1,
      "disableVehicleTrading": 1,
      "premiumDisableVehicleTrading": 0,
      "maxOrderCount": -1,
      "premiumExtraMaxOrderCount": 0
    }
  ]
}
```