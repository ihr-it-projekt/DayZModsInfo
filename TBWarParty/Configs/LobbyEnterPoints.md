# Lobby Entry Points

::: tip
Gear config is located in the `GearSets` subdirectory under your global config folder: `YourDayZServerProfileFolder\TBMods\Config\Global\GearSets\` you can find all information at [NPCGearConfig](/GlobalConfigs/NPCGearConfig.md)
:::

## Example Config

````json lines
{
    "uniqueName": "Chernogorsk", // Name of the entry point
    "version": "1", // never change this, internal version number
    "coordinate": { // Position of the entry point
        "position": [
            6534.5,
            6.190000057220459,
            2469.0
        ],
        "orientation": [
            -48.9991340637207,
            0.0,
            0.0
        ]
    },
    "type": "TBWPMachine", // Type of the entry point, at the moment only TBWPMachine is supported
    "useExactPosition": 0, // If you want to use the exact position, set this value to 1 otherwise the entry point object will be automatically placed on the ground
    "enableNpcTrader": 1, // If 1, an NPC will be spawned at the entry point, otherwise no NPC will be spawned
    "npcType": "SurvivorF_Judy", // The type of the NPC (only if enableNpcTrader is 1)
    "npcGearSetName": "NPC3" // The gear set to be used by the NPC (only if enableNpcTrader is 1)
}
````
