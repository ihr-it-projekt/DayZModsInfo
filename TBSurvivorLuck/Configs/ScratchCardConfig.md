# ScratchCardConfig.json

::: tip
This config is used to configure the scratch card.
:::

## Symbols

| Symbol | Description |
| --- | --- |
| zombie | Zombie symbol |
| appel | Apple symbol |
| eat | Eat symbol |
| bottle | Bottle symbol |
| ducktape | Ducktape symbol |
| medical | Medical symbol |
| plum | Plum symbol |
| tires | Tires symbol |
| nvg | NVG symbol |

## Config

````json lines
{
    "version": "1", // Never touch this value. It is needed internally
    "isInitialized": 1, // Never touch this value. It is needed internally
    "WinningCombinations": [
        {
            "ImageSymbol": "zombie", // The symbol that will be displayed on the scratch card
            "Chance": 45, // The win chance for this symbol
            "RewardVariations": [ // The reward variations for this symbol, one of them will be chosen randomly
                {
                    "Rewards": [ // The rewards for this symbol variation, all of them will be given to the player
                        "Pear",
                        "Plum"
                    ]
                },
                {
                    "Rewards": [
                        "Tomato",
                        "Potato"
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "appel",
            "Chance": 30,
            "RewardVariations": [
                {
                    "Rewards": [
                        "Apple",
                        "SodaCan_Pipsi"
                    ]
                },
                {
                    "Rewards": [
                        "Apple",
                        "Marmalade"
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "eat",
            "Chance": 20,
            "RewardVariations": [
                {
                    "Rewards": [
                        "BakedBeansCan",
                        "TacticalBaconCan"
                    ]
                },
                {
                    "Rewards": [
                        "SpaghettiCan",
                        "SardinesCan"
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "bottle",
            "Chance": 15,
            "RewardVariations": [
                {
                    "Rewards": [
                        "WaterBottle"
                    ]
                },
                {
                    "Rewards": [
                        "Canteen"
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "ducktape",
            "Chance": 10,
            "RewardVariations": [
                {
                    "Rewards": [
                        "DuctTape",
                        "EpoxyPutty"
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "medical",
            "Chance": 8,
            "RewardVariations": [
                {
                    "Rewards": [
                        "BandageDressing",
                        "BloodTestKit"
                    ]
                },
                {
                    "Rewards": [
                        "SalineBagIV",
                        "Epinephrine"
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "plum",
            "Chance": 4,
            "RewardVariations": [
                {
                    "Rewards": [
                        "PipeWrench",
                        "Pliers"
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "tires",
            "Chance": 2,
            "RewardVariations": [
                {
                    "Rewards": [
                        "CarTire",
                        "CarRadiator"
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "nvg",
            "Chance": 1,
            "RewardVariations": [
                {
                    "Rewards": [
                        "NVGHeadstrap"
                    ]
                }
            ]
        }
    ]
}
````
