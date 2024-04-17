# traderPositions.json

[**`back`**](../Readme.md)

```json lines
{
  "version": "3", // Never touch this value. It is needed internally
  "positions": [
    // First Trader Position
    {
      "position": [
        4660.0,
        339.2829895019531,
        10325.0
      ],
      "orientation": [
        0.0,
        0.0,
        0.0
      ],
      "categoryNames": [ // Trader Categories, you have to configure it in traderCategories.json, Here you have only to add the category names
        "Attachments"
      ],
      "spawnPositionOfVehicles": [ // The Position where things should spawn that the player can not take to inventory 
        4634.0,
        338.04998779296877,
        10319.9814453125
      ],
      "spawnOrientationOfVehicles": [
        0.0,
        0.0,
        0.0
      ],
      "forJob": "" // Here you can configure what kind of job the player must have to open the trader. Possible values: "" = All Players; "Cop" = only for cops; "Medic" = only for medic; "Civil" = only for civil
    },
    // END First Trader Position
    // Second Position Start
    {
      "position": [
        14298.921875,
        3.6977109909057619,
        13301.2373046875
      ],
      "orientation": [
        0.0,
        0.0,
        0.0
      ],
      "categoryNames": [ // Trader Categories, you have to configure it in traderCategories.json, Here you have only to add the category names
        "Attachments"
      ],
      "spawnPositionOfVehicles": [ // The Position where things should spawn that the player can not take to inventory 
        4634.0,
        338.04998779296877,
        10319.9814453125
      ],
      "spawnOrientationOfVehicles": [
        0.0,
        0.0,
        0.0
      ],
      "forJob": "" // Here you can configure what kind of job the player must have to open the trader. Possible values: "" = All Players; 
    },
  ]
}
```
