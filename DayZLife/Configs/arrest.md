# arrest.json

````json lines
{
    "version": "3", // Never touch this value. It is needed internally
    "shouldDeleteAllItemsOnPrisoner": 1, // If a player gets arrested, all items on the player will be deleted; 0 = off, 1 = on
    "shouldDeleteAllItemsOnExPrisoner": 1, // If a player is released by reducing their arrest time to 0, all items on the ex-prisoner will be deleted
    "teleportArrestedIntoJail": 0, // Teleport arrested players automatically into prison; 0 = off, 1 = on
    "teleportPosition": "0 0 0", // Target position for teleported players
    "prisonerItems": [ // These items a prisoner will receive when they get arrested.
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
    "exPrisonerItems": [ // These items an ex-prisoner will receive when their arrest is over.
        "CanvasPants_Blue",
        "TShirt_RedBlackStripes",
        "AthleticShoes_Brown",
        "SodaCan_Kvass",
        "SodaCan_Kvass",
        "TunaCan",
        "TunaCan"
    ],
    "arrestAreas": [ // A player must be in this area to reduce their arrest time. Use, for example, a police jail; default is Prison Island
        [
            2746.17333984375,
            26.421398162841798,
            1301.691162109375
        ]
    ],
    "exPrisonerAreas": [ // In this area, the ex-prisoner will spawn 
        [
            3662.57421875,
            6.720571994781494,
            2396.926513671875
        ]
    ],
    "arrestAreaRadius": 110 // The radius in which the prisoner must be to reduce their arrest time
}
````