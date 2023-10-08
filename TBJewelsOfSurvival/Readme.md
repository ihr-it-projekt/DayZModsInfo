<img src="./images/jewels_of_survival.jpeg" alt="TB Jewels of Survival" width="400"/>

# TB Jewels of Survival

## Short Description

This mod allows you to harvest, craft and use jewels with different Skills.

## Shop Link
https://lbmaster.de/product.php?id=27

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

[![Version 1](./images/logoYT.png)](https://youtu.be/7JhJnIazOaA)
[![Presentation](./images/logoYTP.png)](https://youtu.be/gKKrYm1T3z0)

## Features

## 21 new Materials
- Ore (Gold, Silver, Copper, Iron, Gemstone Red, Gemstone Green, Gemstone Blue)
- crafted Ore (Gold, Silver, Copper, Iron, Gemstone Red, Gemstone Green, Gemstone Blue)
- Gemstone (Red, Green, Blue)
- Ingot (Gold, Silver, Copper, Iron)

### Smelter (static and non static)
- used to smelt ore to ingots
- Sound animation when processing
- Consumes Gas and Metal Ores

### Grinder (static and non static)
- used to grind gemstone ore to gemstone
- sound and running animation when processing
- consume batteries and gemstone ore
- can be used by only one player at same time

### Anvil (static and non static)
- used to craft jewels
- sound when used
- consume ingots, gemstones and jewels

### Manipulates Effects (Alphabetic order)

#### Blood Regen Effect
Blood regeneration will be reduced or increased

#### Charcoal Effect
Charcoal Effective time will be reduced or increased

#### Damage Reduce Effect
Damage will be reduced or increased when player will be attacked. 
**<p><u style="color:red">Has no effect one shoot kills :-( DayZ kill the player before the effect will be applied. This is unfortunately not otherwise possible in DayZ!</u></p>**

#### Damage Increase Effect
Damage will be reduced or increased when player will attack

#### Disinfection Effect
Disinfection Effective time will be reduced or increased

#### Epinephrine Effect
Epinephrine Effective time will be reduced or increased

#### Hunger Effect
Hunger of player will be reduced or increased

#### Hunger Effect
Hunger of player will be reduced or increased

#### Epinephrine Effect
Epinephrine Effective time will be reduced or increased

#### Epinephrine Effect
Epinephrine Effective time will be reduced or increased

#### Stamina Depletion Effect
Stamina usage will be reduced or increased

#### Stamina Recovery Effect
Stamina recovery will be reduced or increased

#### Thirst Effect
Thirst of player will be reduced or increased

... more are planned

### [Configuration](#anvilconfigjson)
- a lot of configurations possibilities
- config will automatically create on first server start

### Jewels
#### Rings
##### Ring of Attack Level 1 (Type: TBJOFRingOfAttackLevel1)
![Ring of Attack Level 1](./images/ROFAL1.JPG "Ring of Attack Level1")
##### Ring of Attack Level 2 (Type: TBJOFRingOfAttackLevel2)
![Ring of Attack Level 2](./images/ROFAL2.JPG "Ring of Attack Level2")
##### Ring of Attack Level 3 (Type: TBJOFRingOfAttackLevel3)
![Ring of Attack Level 3](./images/ROFAL3.JPG "Ring of Attack Level3")
##### Ring of Defense Level 1 (Type: TBJOFRingOfDefenseLevel1)
![Ring of Defense Level 1](./images/ROFDL1.JPG "Ring of Defense Level1")
##### Ring of Defense Level 2 (Type: TBJOFRingOfDefenseLevel2)
![Ring of Defense Level 2](./images/ROFDL2.JPG "Ring of Defense Level2")
##### Ring of Defense Level 3 (Type: TBJOFRingOfDefenseLevel3)
![Ring of Defense Level 3](./images/ROFDL3.JPG "Ring of Defense Level3")
##### Ring of DragonBlood Level 1 (Type: TBJOFRingOfDragonBloodLevel1)
![Ring of DragonBlood Level 1](./images/ROFDBL1.JPG "Ring of DragonBlood Level1")
##### Ring of DragonBlood Level 2 (Type: TBJOFRingOfDragonBloodLevel2)
![Ring of DragonBlood Level 2](./images/ROFDBL2.JPG "Ring of DragonBlood Level2")
##### Ring of DragonBlood Level 3 (Type: TBJOFRingOfDragonBloodLevel3)
![Ring of DragonBlood Level 3](./images/ROFDBL3.JPG "Ring of DragonBlood Level3")
##### Ring of Life Level 1 (Type: TBJOFRingOfLifeLevel1)
![Ring of Life Level 1](./images/ROFLL1.JPG "Ring of Life Level1")
##### Ring of Life Level 2 (Type: TBJOFRingOfLifeLevel2)
![Ring of Life Level 2](./images/ROFLL2.JPG "Ring of Life Level2")
##### Ring of Life Level 3 (Type: TBJOFRingOfLifeLevel3)
![Ring of Life Level 3](./images/ROFLL3.JPG "Ring of Life Level3")
##### Ring of Perseverance Level 1 (Type: TBJOFRingOfPerseveranceLevel1)
![Ring of Perseverance Level 1](./images/ROFPL1.JPG "Ring of Perseverance Level1")
##### Ring of Perseverance Level 2 (Type: TBJOFRingOfPerseveranceLevel2)
![Ring of Perseverance Level 2](./images/ROFPL2.JPG "Ring of Perseverance Level2")
##### Ring of Perseverance Level 3 (Type: TBJOFRingOfPerseveranceLevel3)
![Ring of Perseverance Level 3](./images/ROFPL3.JPG "Ring of Perseverance Level3")

... more are planned

## Configuration
Here are shown only examples. The generated configs can have more items. But they will all described here.
### AnvilConfig.json
```
{
    "ringOfPerseveranceLevel1Recipe": { // recipe name, never change this.
        "targetType": "TBJOFRingOfPerseveranceLevel1", // What kind of item will be created
        "timeToCraftInSeconds": 5, // how long the carfting will take in seconds
        "copperIngredient": { // how many copper ingots are needed
            "quantity": 10
        },
        "ironIngredient": { // how many iron ingots are needed
            "quantity": 7
        },
        "silverIngredient": { // how many silver ingots are needed
            "quantity": 3
        },
        "goldIngredient": { // how many gold ingots are needed
            "quantity": 2
        },
        "gemStoneGreenIngredient": { // how many green gemstones are needed
            "quantity": 1
        },
        "gemStoneBlueIngredient": {
            "quantity": 0 // how many blue gemstones are needed
        },
        "gemStoneRedIngredient": {
            "quantity": 0 // how many red gemstones are needed
        },
        "firstRingIngredient": {}, // what kind of ring is needed as indigrent, see below for full example
        "secondRingIngredient": {} // what kind of ring is needed as indigrent, see below for full example
    },
    "ringOfPerseveranceLevel2Recipe": { // recipe name, never change this.
        "targetType": "TBJOFRingOfPerseveranceLevel2", // What kind of item will be created
        "timeToCraftInSeconds": 10, // how long the carfting will take in seconds
        "copperIngredient": {}, // how many copper ingots are needed, see one level above for full example
        "ironIngredient": {}, // how many iron ingots are needed, see one level above for full example
        "silverIngredient": {}, // how many silver ingots are needed, see one level above for full example
        "goldIngredient": {}, // how many gold ingots are needed, see one level above for full example
        "gemStoneGreenIngredient": {}, // how many green gemstones are needed, see one level above for full example
        "gemStoneBlueIngredient": { // how many blue gemstones are needed
            "quantity": 1
        },
        "gemStoneRedIngredient": {}, // how many red gemstones are needed, see one level above for full example
        "firstRingIngredient": {
            "type": "TBJOFRingOfPerseveranceLevel1" // what kind of ring is needed as indigrent
        },
        "secondRingIngredient": {
            "type": "TBJOFRingOfPerseveranceLevel1" // what kind of ring is needed as indigrent
        }
    },
    ...
    "version": "1" // never change this, internal version number
}
```
### GrinderConfig.json
```
{
    "version": "1", // never change this, internal version number
    "energyQuantityConsumptionPerTick": 10, // how much energy is consumed from battery per tick
    "tickLengthInSeconds": 10 // how long is one tick in seconds
}
```
### GrinderRecipeConfiguration.json
```
{
    "version": "1", // never change this, internal version number
    "timeInSecondsToGrindGreenDiamond": 10, // how long it takes to grind green diamond
    "timeInSecondsToGrindBlueDiamond": 15, // how long it takes to grind blue diamond
    "timeInSecondsToGrindRedDiamond": 20 // how long it takes to grind red diamond
}
```
### MineConfig.json
```
{
    "mineTimeCopperInSeconds": 30, // how long it takes to mine copper ore
    "mineTimeIronInSeconds": 40, // how long it takes to mine iron ore
    "mineTimeSilverInSeconds": 50, // how long it takes to mine silver ore
    "mineTimeGoldInSeconds": 60, // how long it takes to mine gold ore
    "mineTimeGreenDiamondInSeconds": 70, // how long it takes to mine green diamond
    "mineTimeBlueDiamondInSeconds": 80, // how long it takes to mine blue diamond
    "mineTimeRedDiamondInSeconds": 90, // how long it takes to mine red diamond
    "version": "1" // never change this, internal version number
}
```
### OreChanceConfig.json
```
{
    "version": "1", // never change this, internal version number
    "chanceToGetCopperOreWhenMined": 85, // chance to get copper ore when mined
    "chanceToGetIronOreWhenMined": 70, // chance to get iron ore when mined
    "chanceToGetSilverOreWhenMined": 55, // chance to get silver ore when mined
    "chanceToGetGoldOreWhenMined": 50, // chance to get gold ore when mined
    "chanceToGetGreenDiamondOreWhenMined": 25, // chance to get green diamond ore when mined
    "chanceToGetBlueDiamondOreWhenMined": 15, // chance to get blue diamond ore when mined
    "chanceToGetRedDiamondOreWhenMined": 10 // chance to get red diamond ore when mined
}
```
### OreSpawnAreasConfig.json
```
{
    "version": "2", // never change this, internal version number
    "copperOreSpawnAreas": { // name of the ore area, never change this
        "minOreCountInArea": 1, // how many ores are minimum in this area
        "maxOreCountInArea": 5, // how many ores are maximum in this area
        "checkTimeIfEnoughItemsInAreaInSeconds": 10, // how long it takes in seconds to check if enough ores are in this area
        "oreSpawnPositions": [ // Positons, you can add somany positions you want. The min and max ore count in area will devided to all possitions. It will assigned randomly.
            {
                "position": [ // position of the ore
                    6218.919921875, 
                    0.0, // you dont need to set the high, it will be calculated to ground
                    2349.865234375
                ],
                "radius": 10.0 // the radius of the position where the ore will spawn
            },
            {
                "position": [ // position of the ore
                    4218.919921875,
                    0.0, // you dont need to set the high, it will be calculated to ground
                    1349.865234375
                ],
                "radius": 10.0 // the radius of the position where the ore will spawn
            }
        ],
        "useExactPosition": 0 // 0 = use random position in the radius. The Ore will allways spawn on Ground. If you want to spawm the Ore underground use: 1 = use exact position, ore will spawn on one exact position, radius option is then obsolate.
    },
    ...
}
```
### RingEnableConfig.json
```
{
    "enableTBJOFRingOfPerseveranceLevel1": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfPerseveranceLevel2": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfPerseveranceLevel3": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfLifeLevel1": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfLifeLevel2": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfLifeLevel3": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfAttackLevel1": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfAttackLevel2": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfAttackLevel3": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfDefenseLevel1": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfDefenseLevel2": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfDefenseLevel3": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfDragonBloodLevel1": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfDragonBloodLevel2": 1, // 1 = enabled, 0 = disabled the ring
    "enableTBJOFRingOfDragonBloodLevel3": 1, // 1 = enabled, 0 = disabled the ring
    "version": "1" // never change this, internal version number
}
```
### SmelterConfig.json
```
{
    "version": "1", // never change this, internal version number
    "tickLengthInSeconds": 3, // how long is one tick in seconds
    "takeGasPerTick": 0.5, // how much gas is consumed per tick
    "tickCountToProduceCopper": 2, // how many ticks are needed to produce one copper ingot
    "tickCountToProduceIron": 5, // how many ticks are needed to produce one iron ingot
    "tickCountToProduceSilver": 10, // how many ticks are needed to produce one silver ingot
    "tickCountToProduceGold": 15 // how many ticks are needed to produce one gold ingot
}
```
### TBKeyBindsConfig.json
```
{
    "version": "1",
    "keyBinds": [ 
        {
            "name": "UAInputOpenTBJOFBook",
            "defaultKey": 24, // default key is O, if you want to have another key, you can change it here. You can find the numbers in TBKeyCodeMatch.json
            "useServerKeyBind": 0 // if you enable this. All players will forced to use your keybind and will have "o" as default key
        }
    ]
}
```
