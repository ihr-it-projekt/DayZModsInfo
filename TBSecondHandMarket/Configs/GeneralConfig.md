# GeneralConfig.json

```json lines
{
  // Never touch this value. It is needed internally
  "version": "4",
  // Never touch this value. It is needed internally
  "isInitialized": 1,
  // 0 = off, 1 = premium feature enabled/disabled
  "enablePremiumFeature": 1,
  // max distance to the vehicle to the market stall
  "maxSearchDistanceToVehicle": 10.0,
  // Worst health level players can select when creating an order. Allowed values: "Pristine", "Worn", "Damage", "BadlyDamaged".
  // Example: "Worn" = orders can only ask for Pristine or Worn items. Default: "BadlyDamaged"
  "minOrderHealthValue": "BadlyDamaged",
  // Worst health level an item may have to be offered for sale on a market stall or Global Stall. Allowed values: "Pristine", "Worn", "Damage", "BadlyDamaged".
  // Example: "Damage" = Pristine, Worn and Damaged items can be offered, Badly Damaged items can not. Ruined items can never be offered. Default: "BadlyDamaged"
  "minOfferHealthValue": "BadlyDamaged"
}
```
