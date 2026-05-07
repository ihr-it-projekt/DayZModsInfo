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
    "version": "3", // Never touch this value. It is needed internally
    "isInitialized": 1, // Never touch this value. It is needed internally
    "WinningCombinations": [
        {
            "ImageSymbol": "zombie", // The symbol that will be displayed on the scratch card
            "Chance": 90, // The win chance for this symbol
            "RewardVariations": [ // The reward variations for this symbol, one of them will be chosen randomly
                {
                    "Rewards": [], // deprecated, will removed in future
                    "RewardOptions": [
                        {
                            "Type": "Pear", // type of the item
                            "QuantityInPercent": 30.0 // quantity of the item in % 0 - 100
                        },
                        {
                            "Type": "Plum",
                            "QuantityInPercent": 100.0
                        }
                    ]
                },
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "Tomato",
                            "QuantityInPercent": 30.0
                        },
                        {
                            "Type": "Potato",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "appel",
            "Chance": 30,
            "RewardVariations": [
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "Apple",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "SodaCan_Pipsi",
                            "QuantityInPercent": 100.0
                        }
                    ]
                },
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "Apple",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "Marmalade",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "eat",
            "Chance": 20,
            "RewardVariations": [
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "BakedBeansCan",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "TacticalBaconCan",
                            "QuantityInPercent": 100.0
                        }
                    ]
                },
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "SpaghettiCan",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "SardinesCan",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "bottle",
            "Chance": 15,
            "RewardVariations": [
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "WaterBottle",
                            "QuantityInPercent": 100.0
                        }
                    ]
                },
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "Canteen",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "ducktape",
            "Chance": 10,
            "RewardVariations": [
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "DuctTape",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "EpoxyPutty",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "medical",
            "Chance": 8,
            "RewardVariations": [
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "BandageDressing",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "BloodTestKit",
                            "QuantityInPercent": 100.0
                        }
                    ]
                },
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "SalineBagIV",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "Epinephrine",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "plum",
            "Chance": 4,
            "RewardVariations": [
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "PipeWrench",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "Pliers",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "tires",
            "Chance": 2,
            "RewardVariations": [
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "CarTire",
                            "QuantityInPercent": 100.0
                        },
                        {
                            "Type": "CarRadiator",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        },
        {
            "ImageSymbol": "nvg",
            "Chance": 1,
            "RewardVariations": [
                {
                    "Rewards": [],
                    "RewardOptions": [
                        {
                            "Type": "NVGHeadstrap",
                            "QuantityInPercent": 100.0
                        }
                    ]
                }
            ]
        }
    ]
}
````
