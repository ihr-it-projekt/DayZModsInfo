# CatCategorieOrder

This file will updated with new categories with every reload of config and restart of server.

``` json lines
{
    "version": "1", // Never touch this value. It is needed internally
    "categorieOrder": { 
        "Chernogorsk": [ // DealerPoint Name
            "LKW", // Categories in Dealer Point. Just put them in order you want. Category 1
            "Cars", //  Category 2
            "Car" // Category 3
        ],
        "ChernogorskBoat": [
            "Cars", // Category 1
            "Boat" // Category 2
        ]
    }
}
```