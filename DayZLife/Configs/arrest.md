# arrest.json

[**`back`**](../Readme.md)

````json lines
{
    "version": "3", // Never touch this value. It is needed internally
    "shouldDeleteAllItemsOnPrissoner": 1, // If a player get arrest, all items on player will deleted, 0 = off 1 = on
    "shouldDeleteAllItemsOnExPrissoner": 1, // If a player becomes by reducing his arrest time to 0, all Items  on Ex Prisoner will 
deleted
    "teleportArrestedIntoJail": 0, // teleport arrested players automatically into prisson;  0 = off 1 = on
    "teleportPosition": "0 0 0", // target position for teleported players
    "prisonerItems": [ // This Items will a Prisoner become, when he get arrest.
        "Pickaxe",
        "PrisonerCap",
        "PrisonUniformPants",
        "PrisonUniformJacket",
        "AthleticShoes_Black",
        "SodaCan_Cola",
        "SodaCan_Cola",
        "TunaCan",
        "TunaCan"
    ],
    "exPrisonerItems": [ // This Items will a Ex Prisoner become, when his arrest is over.
        "CanvasPants_Blue",
        "TShirt_RedBlackStripes",
        "AthleticShoes_Brown",
        "SodaCan_Kvass",
        "SodaCan_Kvass",
        "TunaCan",
        "TunaCan"
    ],
    "arrestAreas": [ // A player must be in this area to reduce his arrest time. Use for example a police jail, default is Prison Island
        [
            2746.17333984375,
            26.421398162841798,
            1301.691162109375
        ]
    ],
    "exPrisonerAreas": [ //In this area the ex prisoner will spawn 
        [
            3662.57421875,
            6.720571994781494,
            2396.926513671875
        ]
    ],
    "arrestAreaRadius": 110 // the radius in that the prisoner must be, to reduce his arrest time
}
````