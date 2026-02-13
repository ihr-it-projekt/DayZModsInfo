# RealEstateReviveConfig.json and PremiumRealEstateReviveConfig.json

::: tip
This config is only relevant if you use Real Estate Mod https://www.themodbase.com/mods/TBRealEstate.
:::

````json lines
{
    "enable": 1, // 0 = No real estate revive, 1 = Real estate revive is enabled 
    "minTimeBefore": 2, // Min time in seconds before the player can be revived by a real estate agent 
    "minTimeBeforeWhenNoOtherPlayerIsOnline": 2, // Min time in seconds before the player can be revived by a real estate agent when no other player is online 
    "currencyType": "default", // Currency type for the price of the revive by a real estate agent (see currencyConfig in TBMods/Config/Globals) 
    "price": 1, // Price for revive by a real estate agent | -1 = free for revive | 100 = 100 $ for revive 
    "damageConfig": { // This part is relevant for both versions.
        "maxWounds": 0, // Max wounds the player get when revived
        "minWounds": 0, // Min wounds the player get when revived
        "health": 1.0, // Health the player get when revived (0.0 - 1.0) 1.0 = 100%
        "blood": 0.800000011920929, // Blood level the player get when revived (0.0 - 1.0) 1.0 = 100%
        "shock": 1.0 // Shock level the player get when revived (0.0 - 1.0) 0 means 100% shock, 1.0 means no shock
    },
    "saveItemInHand": 1, // 0 = Item in hand will NOT be saved, 1 = Item in hand will be saved
    "putItemInHand": 0, // 0 = Item in hand will NOT be put back to hand, 1 = Item in hand will be put back to hands, this option requires "saveItemInHand" to be 1
    "canSelectRespawnLocation": 0 // 0 = No respawn location selection, 1 = Respawn location selection is enabled
}
````