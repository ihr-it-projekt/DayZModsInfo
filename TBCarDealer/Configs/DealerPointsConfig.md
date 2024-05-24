[**`back`**](../Readme.md)

## DealerPointsConfig.json

````json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 1, // never change this, internal usage
    "firstPositionOfShowroom": [ // Normaly this position is out of the map, so the showroom does not desturb other players. Next showroom will spawn 50 meters over the first position
        1000, 600, 1000
    ],
    "dealerPointsNames": [ // The names of the dealer points who are enabled, muss match with the file names from `\TBMods\Config\TBCarDealer\DealerPoints` folder
        "Chernogorsk"
    ]
}
````