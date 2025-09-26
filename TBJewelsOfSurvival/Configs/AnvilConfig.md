# AnvilConfig.json

```json lines
{
    "damageOnCraftingItem": 10.0, // how much damage will be done on the crafting item
    "configMode": 0, // 0 = off 1 = on, can be taken into the hand and into the inventory
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
        "timeToCraftInSeconds": 10, // how long the crafting will take in seconds
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
    "version": "5" // never change this, internal version number
}
```