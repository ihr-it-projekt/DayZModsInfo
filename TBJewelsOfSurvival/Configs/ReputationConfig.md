# ReputationConfig.json

`ReputationConfig.json` integrates TBJewelsOfSurvival with the [TBLib Reputation System](/GlobalConfigs/ReputationSystem/Index.html). It allows server administrators to configure reputation point rewards for mining, smelting, grinding, and forging rings, as well as minimum reputation requirements to perform actions and equip rings.

## Overview & Key Features

- **Pointers per Item (`pointsPerCreatedItem`)**: Awards reputation points to the player upon successful completion of an action:
  - Mining: Points awarded when the main ore is successfully extracted.
  - Smelting: Points awarded to the player who activated the smelter for each ingot produced.
  - Grinding: Points awarded upon successful grinding of gemstone ore into cut gems.
  - Anvil Crafting: Points awarded when forging a ring is completed and the ring is generated.
- **Minimum Reputation to Mine (`minReputationToMine`)**: Threshold required to start and finish mining ore at a static ore deposit. If not met, the action is blocked.
- **Minimum Reputation to Craft / Smelt / Grind (`minReputationToCraft`)**: Threshold required to smelt ingots in the smelter, grind gemstones in the grinder, or forge rings at the anvil.
- **Minimum Reputation to Equip Rings (`minReputationToEquipRing`)**: Threshold required to wear each of the 21 rings.
  - Server-Authoritative: The engine blocks equipping rings if the player's reputation is too low.
  - Automatic Strip Safeguard: If an unpermitted ring is loaded or a player loses reputation, the ring is automatically detached and placed in their inventory (or dropped on the ground).
- **In-Game Jewel Book (`TBJOFBook`) Display**:
  - The player's current reputation points are permanently displayed on the index page (`playerReputationBox`) and inside the ring effect list (`CurrentReputation`).
  - Required minimum reputation values (`MinReputationEquip` and `MinReputationCraft`) are dynamically highlighted in **green** (requirement met) or **red** (requirement not met).
  - Hovering over reputation stats displays detailed multilingual tooltips.
- **Live Reload**: Reloadable live in-game via the Admin **Reload Config** button in the Jewel Book without restarting the server.

---

## Example Configuration

```json lines
{
    "version": "2", // Internal version number, never change this
    "pointsPerCreatedItem": {
        // Mining ores: points awarded per successful harvest
        "TBJOFOreCopper": 1,
        "TBJOFOreIron": 1,
        "TBJOFOreSilver": 2,
        "TBJOFOreGold": 2,
        "TBJOFGemStoneOreGreen": 2,
        "TBJOFGemStoneOreBlue": 3,
        "TBJOFGemStoneOreRed": 4,

        // Smelter: points awarded per ingot produced
        "TBJOFIngotCopper": 1,
        "TBJOFIngotIron": 2,
        "TBJOFIngotSilver": 3,
        "TBJOFIngotGold": 4,

        // Grinder: points awarded per cut gemstone produced
        "TBJOFGemStoneGreen": 2,
        "TBJOFGemStoneBlue": 4,
        "TBJOFGemStoneRed": 6,

        // Anvil: points awarded per crafted ring
        "TBJOFRingOfPerseveranceLevel1": 5,
        "TBJOFRingOfPerseveranceLevel2": 15,
        "TBJOFRingOfPerseveranceLevel3": 30,
        "TBJOFRingOfLifeLevel1": 5,
        "TBJOFRingOfLifeLevel2": 15,
        "TBJOFRingOfLifeLevel3": 30,
        "TBJOFRingOfAttackLevel1": 5,
        "TBJOFRingOfAttackLevel2": 15,
        "TBJOFRingOfAttackLevel3": 30,
        "TBJOFRingOfDefenseLevel1": 5,
        "TBJOFRingOfDefenseLevel2": 15,
        "TBJOFRingOfDefenseLevel3": 30,
        "TBJOFRingOfDragonBloodLevel1": 5,
        "TBJOFRingOfDragonBloodLevel2": 15,
        "TBJOFRingOfDragonBloodLevel3": 30,
        "TBJOFRingOfOwlLevel1": 5,
        "TBJOFRingOfOwlLevel2": 15,
        "TBJOFRingOfOwlLevel3": 30,
        "TBJOFRingOfEagleEyeLevel1": 5,
        "TBJOFRingOfEagleEyeLevel2": 15,
        "TBJOFRingOfEagleEyeLevel3": 30
    },
    "minReputationToCraft": {
        // Minimum reputation to produce ingots, gemstones, or rings (0 = no requirement)
        "TBJOFIngotCopper": 0,
        "TBJOFIngotIron": 0,
        "TBJOFIngotSilver": 0,
        "TBJOFIngotGold": 0,
        "TBJOFGemStoneGreen": 0,
        "TBJOFGemStoneBlue": 0,
        "TBJOFGemStoneRed": 0,
        "TBJOFRingOfPerseveranceLevel1": 0,
        "TBJOFRingOfPerseveranceLevel2": 0,
        "TBJOFRingOfPerseveranceLevel3": 0,
        "TBJOFRingOfLifeLevel1": 0,
        "TBJOFRingOfLifeLevel2": 0,
        "TBJOFRingOfLifeLevel3": 0,
        "TBJOFRingOfAttackLevel1": 0,
        "TBJOFRingOfAttackLevel2": 0,
        "TBJOFRingOfAttackLevel3": 0,
        "TBJOFRingOfDefenseLevel1": 0,
        "TBJOFRingOfDefenseLevel2": 0,
        "TBJOFRingOfDefenseLevel3": 0,
        "TBJOFRingOfDragonBloodLevel1": 0,
        "TBJOFRingOfDragonBloodLevel2": 0,
        "TBJOFRingOfDragonBloodLevel3": 0,
        "TBJOFRingOfOwlLevel1": 0,
        "TBJOFRingOfOwlLevel2": 0,
        "TBJOFRingOfOwlLevel3": 0,
        "TBJOFRingOfEagleEyeLevel1": 0,
        "TBJOFRingOfEagleEyeLevel2": 0,
        "TBJOFRingOfEagleEyeLevel3": 0
    },
    "minReputationToMine": {
        // Minimum reputation to mine from ore deposits (0 = no requirement)
        "TBJOFOreCopper": 0,
        "TBJOFOreIron": 0,
        "TBJOFOreSilver": 0,
        "TBJOFOreGold": 0,
        "TBJOFGemStoneOreGreen": 0,
        "TBJOFGemStoneOreBlue": 0,
        "TBJOFGemStoneOreRed": 0
    },
    "minReputationToEquipRing": {
        // Minimum reputation required to wear each ring (0 = no requirement)
        "TBJOFRingOfPerseveranceLevel1": 0,
        "TBJOFRingOfPerseveranceLevel2": 0,
        "TBJOFRingOfPerseveranceLevel3": 0,
        "TBJOFRingOfLifeLevel1": 0,
        "TBJOFRingOfLifeLevel2": 0,
        "TBJOFRingOfLifeLevel3": 0,
        "TBJOFRingOfAttackLevel1": 0,
        "TBJOFRingOfAttackLevel2": 0,
        "TBJOFRingOfAttackLevel3": 0,
        "TBJOFRingOfDefenseLevel1": 0,
        "TBJOFRingOfDefenseLevel2": 0,
        "TBJOFRingOfDefenseLevel3": 0,
        "TBJOFRingOfDragonBloodLevel1": 0,
        "TBJOFRingOfDragonBloodLevel2": 0,
        "TBJOFRingOfDragonBloodLevel3": 0,
        "TBJOFRingOfOwlLevel1": 0,
        "TBJOFRingOfOwlLevel2": 0,
        "TBJOFRingOfOwlLevel3": 0,
        "TBJOFRingOfEagleEyeLevel1": 0,
        "TBJOFRingOfEagleEyeLevel2": 0,
        "TBJOFRingOfEagleEyeLevel3": 0
    }
}
```
