# CarCategorieOrder.json

The `CarCategorieOrder.json` file controls the display order of category chips and the category icons used in the Car Dealer user interface.

::: tip Automatic Synchronization
This file is updated automatically on every server restart and config reload (`Reload Config` in the Admin Menu). Any category assigned in your vehicle configurations (`CarConfigs/*.json`) is automatically registered in this file and assigned a default icon (`car`). Categories no longer used by any vehicle at a dealer point are automatically cleaned up.
:::

## Example Config

```json lines
{
    "version": "2", // Internal version number (do not change)
    "categorieOrder": { 
        "Chernogorsk": [ // Dealer point uniqueName (must match DealerPointConfig.json)
            "Cars", // First category chip shown in the menu
            "Trucks", // Second category chip
            "Motorcycles" // Third category chip
        ],
        "ChernogorskBoat": [
            "Boats"
        ]
    },
    "categoryIcons": { // Mapping of category name to icon keyword or texture path
        "Cars": "car",
        "Trucks": "truck",
        "Motorcycles": "motorbike",
        "Boats": "ship",
        "Helicopters": "plane",
        "Planes": "plane",
        "Busses": "bus",
        "Agricultural": "tractor",
        "Armored": "shield",
        "CustomVehicles": "MyServerMod/data/icons/custom_vehicle.paa"
    }
}
```

## Options

- **`version`**: Config version. Old version `"1"` files are automatically upgraded to `"2"` with default icons assigned.
- **`categorieOrder`**: Map where the key is the dealer point's `uniqueName` (from `DealerPointConfig.json`) and the value is an array of category names.
  - The order of strings in this array defines the order of the category chips in the dealer menu from left to right.
  - Simply re-order the category names in this list to change the display sequence.
- **`categoryIcons`**: Map where the key is the category name and the value is either a built-in icon keyword or a custom texture path.
  - Category matching is case-insensitive if an exact match is not found.

---

## Available Built-In Icons

The Car Dealer includes a set of pre-configured presets as well as full access to the built-in TBLib icon library.

### In-Game Preset Icons

These icons can be selected with a single click in the in-game Admin Menu:

| Preset Keyword | Description / Intended Use |
|---|---|
| `car` | Standard passenger car silhouette (default fallback) |
| `car-front` | Front perspective view of a car / SUV |
| `truck` | Heavy truck, semi, lorry, or transport vehicle |
| `motorbike` | Motorcycle, motorbike, quad, or bicycle |
| `plane` | Airplane, aviation, or helicopter |
| `ship` | Boat, ship, jet ski, or watercraft |
| `bus` | Bus, van, or large passenger transporter |
| `tractor` | Tractor, harvester, or agricultural machinery |

### Additional Built-In TBLib Icons

You can also use any keyword from TBLib's built-in icon collection by typing its keyword into `categoryIcons` or the custom path field in-game:

| Icon Keyword | Description |
|---|---|
| `shield` / `shield-check` | Armored, security, or military vehicles |
| `crosshair` / `target` | Combat, weaponized, or armed vehicles |
| `siren` | Police, ambulance, fire department, or emergency vehicles |
| `crown` / `award` | VIP, exotic, luxury, or high-tier vehicles |
| `tag` | Special offers, discount, or starter vehicles |
| `boxes` / `package` / `package-open` | Cargo, logistics, or transport |
| `warehouse` / `store` | Commercial or heavy fleet vehicles |
| `hammer` / `brush_cleaning` | Utility, construction, or maintenance vehicles |
| `backpack` | Expedition, camping, or survival vehicles |
| `key-round` | Rental vehicles or special fleet |
| `banknote` / `coins` / `hand-coins` | Commercial trade or economy |
| `clock` / `timer` | Temporary, timed, or event vehicles |
| `circle-check` | Verified or certified vehicles |

---

## How Admins Can Configure Category Icons

There are two ways to configure category icons:

### Method 1: In-Game Admin Menu (Recommended)

Admins can configure icons live in-game without touching configuration files or restarting the server:

1. Add your Steam / Bohemia UID to `AdminConfig.json` (see [AdminConfig](/GlobalConfigs/Readme.md#adminconfigjson)).
2. Open any Car Dealer point in-game.
3. Switch to the **Admin** tab.
4. Click the **Manage Category Icons** button (`#ManageCategoryIcons`).
5. In the Category Icons modal:
   - **Left Panel**: View all detected categories. Use the search bar to filter, or type a name into **New Category** and click **Add Category** to register a new one.
   - **Select Category**: Click on any category row in the list to select it.
   - **Choose a Preset**: Click one of the 8 quick preset buttons (`car`, `car-front`, `truck`, `motorbike`, `plane`, `ship`, `bus`, `tractor`) to assign it immediately.
   - **Custom Path**: Enter any custom icon keyword (e.g. `shield`, `siren`) or a full custom texture path (e.g. `MyMod/data/icons/tank.paa`). The large preview above updates in real-time.
   - **Save**: Click **Save Icons** (`#SaveCategoryIcons`) at the bottom right. The changes are sent to the server and saved to `CarCategorieOrder.json` immediately.

### Method 2: Editing `CarCategorieOrder.json` on the Server

1. Open your server profile folder:
   `YourDayZServerProfileFolder\TBMods\Config\TBCarDealer\CarCategorieOrder.json`
   *(or `YourDayZServerProfileFolder\TBCarDealer\CarCategorieOrder.json`)*
2. Locate the `"categoryIcons"` object.
3. Add or update entries for your categories:
   ```json
   "categoryIcons": {
       "Sports Cars": "car-front",
       "Military Trucks": "truck",
       "Helicopters": "plane",
       "Armored": "shield",
       "Tanks": "MyCustomMod/data/icons/tank.paa"
   }
   ```
4. Save the file.
5. In-game, open the Car Dealer Admin Menu and click **Reload Config**, or restart the server.

---

## How to Add Custom Icons (Modded / Vanilla Textures)

You can use custom textures from your own server/client mod pack or standard DayZ vanilla textures.

### Path Resolution Rules

When the mod resolves an icon name, it follows these rules:

1. **Full Path (`/` or `\`)**:
   - If the value contains a forward slash or backslash, it is treated as an absolute virtual game path.
   - Examples:
     - `MyServerPack/gui/icons/tank_icon.paa`
     - `dz/gear/tools/data/wrench_ca.paa`
2. **File with Extension (`.paa` or `.edds`)**:
   - If the value contains `.paa` or `.edds` without any slash, it is resolved from TBLib's texture directory (`TBLibClient/layout/skin/tex/<name>`).
   - Example: `ic_car_ca.paa`
3. **Keyword**:
   - If a plain keyword is provided without slashes or extensions (e.g., `truck`), it is automatically expanded to `TBLibClient/layout/skin/tex/ic_<keyword>_ca.paa`.

### Texture Guidelines & Best Practices

- **File Format**: DayZ `.paa` (recommended DXT5/ARGB with alpha channel) or `.edds`.
- **Dimensions**: Square power-of-two texture, preferably `64x64`, `128x128`, or `256x256` pixels.
- **Coloring**: Create your icon as **pure white (`#FFFFFF`) with a transparent background** (using the DayZ `_ca.paa` color-alpha naming convention).
  > [!NOTE] Dynamic Tinting
  > The Car Dealer UI dynamically tints the category icon depending on the state of the category chip:
  > - **Active / Selected**: Tinted with the accent gold color.
  > - **Inactive**: Tinted with the muted theme text color.
  > 
  > If your custom icon is monochrome white with transparency, it will automatically blend seamlessly with the modern UI skin.
- **Packaging**: Pack the custom texture inside your client-side mod PBO that players download when connecting to the server.
