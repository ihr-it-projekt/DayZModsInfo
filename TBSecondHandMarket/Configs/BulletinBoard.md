# BulletinBoard.json

```json lines
{
  // Never touch this value. It is needed internally
  "version": "1",
  // Never touch this value. It is needed internally
  "isInitialized": 1,
  // 0 = off, 1 = on Player can enable navigation to the market stall at bulletin board
  "enableNavigation": 1,
  // -1 = unlimited, Max distance for navigation
  "maxNavigationDistance": -1,
  // 0 = off, 1 = on, Player can open a map to see the market stall positions at bulletin board
  "showMapForMarketStallPositions": 1,
  // -1 = free, Price for publish an offer on bulletin board
  "priceForPublishOnBulletinBoard": 100,
  // -1 = free, Price for premium users for publish an order on bulletin board 
  "premiumPriceForPublishOnBulletinBoard": 50
}
```

## Admin Moderation at the Bulletin Board

Administrators with the `secondHandMarket` permission can moderate all listings across personal and global stalls directly at the Bulletin Board in-game:

- **List All Items**: Toggling the "List all items" checkbox reveals all active, disabled, unlisted, and completed orders and offers.
- **Disable / Enable Listings**: Deactivate individual listings without deleting them. Disabled listings are hidden from regular players on both the Bulletin Board and individual market stalls until re-enabled by an admin.
- **Delete Listings & Completed Orders**: Admins can delete offers or completed orders. Deleting a completed order removes it from the stall, recalculates used storage slots, and cleans up any temporary saved files on the server.
- **Block Player & Moderate**: Block a stall owner from trading and simultaneously delete or disable their listing with one click.
- **Teleport**: Jump directly to the physical location of the market stall or global stall associated with a selected listing.
- **"Purchased" Status Badge**: Completed orders display a prominent green "Purchased" badge in the detail view so admins and players can immediately see when an order has been fulfilled.
