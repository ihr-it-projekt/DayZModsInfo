# GlobalStallConfig.json

```json lines
{
  // Never touch this value. It is needed internally
  "version": "2",
  // Never touch this value. It is needed internally
  "isInitialized": 1,
  // Price per slot for player, if an item has 5 slots, player needs to pay 50 in case of this value 
  "pricePerSlot": 10,
  // If the price per slot is in percentage, set this value to 1 otherwise to 0. If you are using this. It will take a fee in percentage of the item price NOT the slot price
  "pricePerSlotIsInPercentage": 0,
  // Price per slot for premium player, if an item has 5 slots, player needs to pay 50 in case of this value
  "pricePerSlotPremiumPlayer": 10,
  // If the price for premium per slot is in percentage, set this value to 1 otherwise to 0. If you are using this. It will take a fee in percentage of the item price NOT the slot price
  "pricePerSlotPremiumPlayerIsInPercentage": 0,
  // Free slots for player that must not pay
  "freeSlotsForPlayer": 50,
  // How many slots a player can have at all global stalls together
  "maxSlotsForPlayer": 300,
  // Free slots for premium player that must not pay
  "freeSlotsForPremiumPlayer": 100,
  // How many slots a premium player can have at all global stalls together
  "maxSlotsForPremiumPlayer": 600,
  // How long a order stays active after it was created
  "maxOrderLifetimeInMinutes": 10080,
  // How long a order stays active after it was created for premium players
  "maxOrderLifetimeInMinutesPremiumPlayers": 10080,
  // How long a offer stays active after it was created
  "maxOfferLifetimeInMinutes": 10080,
  // How long a offer stays active after it was created for premium players
  "maxOfferLifetimeInMinutesPremiumPlayers": 10080,
  // How much tax a player has to pay for selling an item at the global stall, min = 0 max = 100 if an item was sold for 100, the player has to pay 10 if the value is 10
  "sellTaxInPercentageOrder": 0,
  // How much tax a player has to pay when he has created an order and a player has it sold to him, min = 0 max = 100 if an item was sold for 100, the player has to pay 10 if the value is 10
  "sellTaxInPercentageOffer": 0,
}
```