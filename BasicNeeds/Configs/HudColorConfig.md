# HudColorConfig

`HudColorConfig.json` controls the Basic Needs HUD icons and colors. Each color has a `name` and four channels from 0 to 255: `a` (alpha: 0 is transparent, 255 is opaque), `r` (red), `g` (green), and `b` (blue). Keep the entry names unchanged.

## Icon selection

Server owners can select the icon set with `useLegacyIcons`:

| Value | Icons |
| --- | --- |
| `false` (default) | Current HUD icons: wind, shirt, droplet and toilet. |
| `true` | Original `putrid_0`–`putrid_3`, `clothing_0`–`clothing_3`, `pee_0`–`pee_3` and `poop_0`–`poop_3` textures from the mod's data folder. |

The original icons appear as a plain horizontal row of 50-pixel icons in body, clothing, pee and poop order, without tile backgrounds, rings or pips. They change with all four status levels and still use the configured icon colors. Setting `useLegacyIcons` back to `false` restores the current HUD tiles.

Existing configs upgrade automatically to version `3`, adding `useLegacyIcons` with a default of `false` while preserving existing settings. Restart the server after changing the option; it applies to all players.

## Background

`backgroundColor` sets the background of all four HUD tiles independently of the icons. Its default is a nearly opaque dark blue-gray: alpha 245, red 11, green 15, blue 23. Choose a background that contrasts with your icon colors.

Existing configs automatically receive and save this background setting when loaded if it is missing. Their existing icon colors are preserved. The level palette below is applied to newly generated configs; update existing entries manually to use it.

## Level colors

`peeColors`, `pooColors`, `dirtColors`, and `putridColors` set the icon colors for each need. Active pips use the current level color; rings use 55% of its RGB brightness. Inactive pips use the first level color at 25% of its configured alpha.

| State | Pee / poo entry | Clothing / body entry | Default RGB | Alpha |
| --- | --- | --- | --- | --- |
| Up to 25 | `pee1` / `poo1` | `dirtClothing0` / `putridPlayer0` | 201, 210, 227 (gray) | 255 |
| Above 25, up to 50 | `pee2` / `poo2` | `dirtClothing1` / `putridPlayer1` | 243, 179, 51 (amber) | 255 |
| Above 50, up to 75 | `pee3` / `poo3` | `dirtClothing2` / `putridPlayer2` | 235, 122, 40 (orange) | 255 |
| Above 75 | `pee4` / `poo4` | `dirtClothing3` / `putridPlayer3` | 229, 72, 77 (red) | 255 |

You can use an [RGB color picker](https://rgbcolorpicker.com/) to choose custom values.

## Default config

Leave `version` and `isInitialized` unchanged; they are used internally.

```json
{
    "version":  "3",
    "isInitialized":  1,
    "useLegacyIcons":  false,
    "backgroundColor":  {
                            "name":  "background",
                            "a":  245,
                            "r":  11,
                            "g":  15,
                            "b":  23
                        },
    "peeColors":  [
                      {
                          "name":  "pee1",
                          "a":  255,
                          "r":  201,
                          "g":  210,
                          "b":  227
                      },
                      {
                          "name":  "pee2",
                          "a":  255,
                          "r":  243,
                          "g":  179,
                          "b":  51
                      },
                      {
                          "name":  "pee3",
                          "a":  255,
                          "r":  235,
                          "g":  122,
                          "b":  40
                      },
                      {
                          "name":  "pee4",
                          "a":  255,
                          "r":  229,
                          "g":  72,
                          "b":  77
                      }
                  ],
    "pooColors":  [
                      {
                          "name":  "poo1",
                          "a":  255,
                          "r":  201,
                          "g":  210,
                          "b":  227
                      },
                      {
                          "name":  "poo2",
                          "a":  255,
                          "r":  243,
                          "g":  179,
                          "b":  51
                      },
                      {
                          "name":  "poo3",
                          "a":  255,
                          "r":  235,
                          "g":  122,
                          "b":  40
                      },
                      {
                          "name":  "poo4",
                          "a":  255,
                          "r":  229,
                          "g":  72,
                          "b":  77
                      }
                  ],
    "dirtColors":  [
                       {
                           "name":  "dirtClothing0",
                           "a":  255,
                           "r":  201,
                           "g":  210,
                           "b":  227
                       },
                       {
                           "name":  "dirtClothing1",
                           "a":  255,
                           "r":  243,
                           "g":  179,
                           "b":  51
                       },
                       {
                           "name":  "dirtClothing2",
                           "a":  255,
                           "r":  235,
                           "g":  122,
                           "b":  40
                       },
                       {
                           "name":  "dirtClothing3",
                           "a":  255,
                           "r":  229,
                           "g":  72,
                           "b":  77
                       }
                   ],
    "putridColors":  [
                         {
                             "name":  "putridPlayer0",
                             "a":  255,
                             "r":  201,
                             "g":  210,
                             "b":  227
                         },
                         {
                             "name":  "putridPlayer1",
                             "a":  255,
                             "r":  243,
                             "g":  179,
                             "b":  51
                         },
                         {
                             "name":  "putridPlayer2",
                             "a":  255,
                             "r":  235,
                             "g":  122,
                             "b":  40
                         },
                         {
                             "name":  "putridPlayer3",
                             "a":  255,
                             "r":  229,
                             "g":  72,
                             "b":  77
                         }
                     ]
}
```

## HUD visibility

The needs HUD remains available in the inventory. Outside the inventory, it follows the HUD disable/hide settings and hides while menus are open or the player is unconscious. It is also hidden when there is no living local player. Closing a menu does not override a hidden HUD.
