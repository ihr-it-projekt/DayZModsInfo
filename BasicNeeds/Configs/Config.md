[**`back`**](../Readme.md)

## Config.json

````json lines
{
    "version": "4", // Never touch this value. It is needed internally
    "animationCommandUID": 1056, // see https://github.com/BohemiaInteractive/DayZ-Script-Diff/blob/main/scripts/3_game/dayzplayer.c#L1007 !!!!DO NOT CHANGE IF YOU NOT KNOW WHAT YOU DO!!! This change the animation for poo and pee
    "stanceMask": 2, // see https://github.com/BohemiaInteractive/DayZ-Script-Diff/blob/main/scripts/3_game/dayzplayer.c#L634 !!!!DO NOT CHANGE IF YOU NOT KNOW WHAT YOU DO !!! This change the stance for poo and pee
    "cleanItemsWhenPoo": [ // This clean items are needed when you make poo
        {
            "type": "Paper", // Item type
            "dirtFactorForBodyInPercent": 5.0 // How much dirt will be add to body
        },
        {
            "type": "BandageDressing", // Item type
            "dirtFactorForBodyInPercent": 1.0  // How much dirt will be add to body
        },
        {
            "type": "Rag", // Item type
            "dirtFactorForBodyInPercent": 2.5  // How much dirt will be add to body
        }
    ],
    "cleanItemsForBodyWash": [ //this items can be used if you want to clean your body
        {
            "type": "NoItemInHands", // this is a static value. You can use is to make it possible to wash the body without any item in hands
            "dirtDecreaseFactorForBodyInPercentForWell": 50.0, // How much dirt will be decreased for body when you are on a well
            "dirtDecreaseFactorForBodyInPercentForFreshWater": 25.0, // How much dirt will be decreased for body when you are in a fresh water source
            "dirtDecreaseFactorForBodyInPercentForSeeWater": 12.5, // How much dirt will be decreased for body when you are in a see water source
            "dirtDecreaseFactorForBodyInPercentForDirtWater": 6.0 // How much dirt will be decreased for body when you are in a dirty water source
        },
        {
            "type": "TB_Soap", // Item type
            "dirtDecreaseFactorForBodyInPercentForWell": 100.0, // How much dirt will be decreased for body when you are on a well
            "dirtDecreaseFactorForBodyInPercentForFreshWater": 50.0, // How much dirt will be decreased for body when you are in a fresh water source
            "dirtDecreaseFactorForBodyInPercentForSeeWater": 25.0, // How much dirt will be decreased for body when you are in a see water source
            "dirtDecreaseFactorForBodyInPercentForDirtWater": 15.0 // How much dirt will be decreased for body when you are in a dirty water source
        }
    ],
    "cleanItemsForClothingWash": [ //this items can be used if you want to clean your clothing, the items must be in the clothing itself to get the effect. 
        {
            "type": "NoCleanItemInClothing", // this is a static value. You can use is to make it possible to wash the clothing without any item in clothing
            "dirtDecreaseFactorForBodyInPercentForWell": 50.0, // How much dirt will be decreased for clothing when you wash they are on a well
            "dirtDecreaseFactorForBodyInPercentForFreshWater": 25.0, // How much dirt will be decreased for clothing when you wash they are in a fresh water source
            "dirtDecreaseFactorForBodyInPercentForSeeWater": 12.5, // How much dirt will be decreased for clothing when you wash they are in a see water source
            "dirtDecreaseFactorForBodyInPercentForDirtWater": 6.0 // How much dirt will be decreased for clothing when you wash they are in a dirty water source
        },
        {
            "type": "TB_Soap", // Item type
            "dirtDecreaseFactorForBodyInPercentForWell": 100.0, // How much dirt will be decreased for clothing when you wash they are on a well
            "dirtDecreaseFactorForBodyInPercentForFreshWater": 50.0, // How much dirt will be decreased for clothing when you wash they are in a fresh water source
            "dirtDecreaseFactorForBodyInPercentForSeeWater": 25.0, // How much dirt will be decreased for clothing when you wash they are in a see water source
            "dirtDecreaseFactorForBodyInPercentForDirtWater": 12.5 // How much dirt will be decreased for clothing when you wash they are in a dirty water source
        }
    ],
    "pooIncreaseFactorPerTick": 1.0, // How much poo will be increased per tick
    "pooHealthReduceStatePerTickInPercent": 0.01, // How much health will be reduced per tick for poo. 1.0 means 100% health loos
    "pooBloodReduceStatePerTickInPercent": 0.01, // How much blood will be reduced per tick for poo. 1.0 means 100% blood loos
    "peeIncreaseFactorPerTick": 1.0, // How much pee will be increased per tick 
    "peeHealthReduceStatePerTickInPercent": 0.01, // How much health will be reduced per tick for pee. 1.0 means 100% health loos
    "peeBloodReduceStatePerTickInPercent": 0.01, // How much blood will be reduced per tick for pee. 1.0 means 100% blood loos
    "tickLengthInMinutes": 5 // How long is a tick in minutes
}
````