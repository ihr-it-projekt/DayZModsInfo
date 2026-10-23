# ItemsCategory.json

This category config helps you to filter the items on the Bulletin Board and Global Market Stall.

```json lines
{
    "version": "2", // Config version (automatically upgraded from 1)
    "isInitialized": 1, // Internally managed
    "categories": [
        {
            "name": "Clothes",
            "icon": "shirt", // Icon shown next to the category name in the UI
            "items": [
                "AirborneMask",
                "Armband_APA"
            ]
        },
        {
            "name": "Lootdispatch",
            "icon": "truck",
            "items": [
                "CivSedanDoors_BackLeft"
            ]
        },
        {
            "name": "Weapons",
            "icon": "crosshair",
            "items": [
                "M4A1",
                "AKM"
            ]
        }
    ]
}
```

## Options

- **`version`**: Config version. Existing version `"1"` configs are automatically migrated to `"2"` with default icons assigned.
- **`categories`**: Array of category objects:
  - **`name`**: Display name of the category in the UI.
  - **`icon`**: The icon to display next to the category name. If left blank `""`, the icon will be guessed automatically based on keywords in the category name (e.g. `cloth`, `weapon`, `food`, etc.), or fall back to `layers`.
  - **`items`**: Array of item classnames belonging to this category.

## Available Icons

You can use any of the built-in icons (the `ic_` prefix is optional):

| Icon name | Description / Keyword |
|---|---|
| `apple` | Food, drinks, edible supplies |
| `archive` | Storage, archives |
| `banknote` | Money, currency |
| `bomb` | Explosives, grenades |
| `box` | Ammo, munitions, small containers |
| `car` | Vehicles, transport |
| `clipboard_list` | Lists, tasks |
| `crosshair` | Weapons, guns, rifles |
| `crown` | VIP, premium |
| `droplet` | Liquids, chemicals |
| `globe` | Global items |
| `hammer` | Building, base materials |
| `hand_coins` | Trading, barter |
| `heart_pulse` | Medical, health |
| `layers` | All categories / fallback |
| `lock` | Security, locks |
| `map` | Navigation, maps |
| `package` | Containers, backpacks, storage |
| `package_open` | Unpacked items |
| `package_search` | Search, loot discovery |
| `paperclip` | Attachments, accessories |
| `shield_check` | Protection, armor |
| `shirt` | Clothes, wear, apparel |
| `shopping_cart` | Shopping, trade |
| `store` | Market stall, shops |
| `truck` | Loot dispatch, cargo, supply |
| `wallet` | Wallets, cash |
| `wrench` | Tools, repair |

> [!NOTE]
> Custom image texture paths are also supported, e.g. `MyMod/GUI/custom_icon.edds`.
