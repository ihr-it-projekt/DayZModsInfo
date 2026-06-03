# InsurancePointConfig.json

::: tip
Gear config is located in the `GearSets` subdirectory under your global config folder: `YourDayZServerProfileFolder\TBMods\Config\Global\GearSets\` you can find all information at [NPCGearConfig](/GlobalConfigs/NPCGearConfig.md)
:::

## Example Config

```json lines
{
    "version": "3", // never change this, internal version number
    "isInitialized": 0, // never change this, internal usage
    "insurancePoint": [
        {
            "position": [ // position of the insurance trader
                6508.6298828125,
                0.0,
                2398.389892578125
            ],
            "orientation": [ // orientation of the insurance trader
                0.0,
                0.0,
                0.0
            ],
            "useExactPosition": 0, // if 1, the position will be used exactly. If 0, the object will automatically placed on the ground
            "machineType": "TBDIMachine", // type of the insurance trader, by default only "TBDIMachine" exists but if you create your own machine, you can name it here. Your created object must have as parent class TBDIMachine
            "enableNpcTrader": 1, // if 1 an NPC instead of a machine will spawn at the insurance trader, if 0 no NPC will spawn
            "npcType": "SurvivorF_Judy", // the type of the NPC (only if enableNpcTrader is 1)
            "npcGearSetName": "NPC2" // the gear set to be used by the NPC (only if enableNpcTrader is 1). If the config does not exist, a new one with default gear will automatically be created.
        },
        { // second insurance trader
            "position": [
                6008.6298828125,
                0.0,
                2388.389892578125
            ],
            "orientation": [
                0.0,
                0.0,
                0.0
            ],
            "useExactPosition": 0,
            "machineType": "TBDIMachine",
            "enableNpcTrader": 0,
            "npcType": "", 
            "npcGearSetName": ""
        }
  ]
}
```