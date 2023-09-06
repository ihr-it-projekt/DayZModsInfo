# TB Basic Needs

## Description

## Features
- Player has to make poo and pee, if he did not and you have configured, player will loos blood and health
- Pee and Poo will make body and clothing dirty
- Player can clean his body and clothing
- Player can digg in and out poo and pee
- new Item added "TB_Soap"
- Soap increase the cleaning effect for body
- different cleaning effects on different water sources
- player can clean clothing and body on all water sources
- clothes will be wet after cleaning
- player needs to dress up, to clean himself
- player can only clean clothes when he has it in his hands
- if player or clothes are max dirty, zombies and animals will smell him earlier
- if player is dirty, flies will be around him


## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## How to install

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- extract TBBasicNeeds.zip
- Copy the extracted Folder `TBBasicNeeds` into your server profile folder.
- Start your server. Some more configurations will be generated.
- Tear down the server
- Configure your needs
- Start your Server :-)

## Items included

- TB_Soap for cleaning body and clothing
- TB_PooGround
- TB_PeeGround
- TBDetergent for cleaning clothing in washing machine
- TBWashingMachine this can be picked up by players and placed in the world
- TBStaticWashingMachine this can not be picked up by players

## Configurations

### Config.json

````
{
    "version": "2", // Never touch this value. It is needed internally
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

### BodyZoneConfig.json

````
{
    "version": "1", // Never touch this value. It is needed internally
    "regular": { // This part is for clothing or body when one "tick" is over from Config.json
        "DirtIncreaseForHeadClothing": 1.0, // How much dirt will be increased for head clothing
        "DirtIncreaseForHeadgearClothing": 1.0, // How much dirt will be increased for headgear clothing
        "DirtIncreaseForMaskClothing": 1.0, // How much dirt will be increased for mask clothing
        "DirtIncreaseForGlovesClothing": 1.0, // How much dirt will be increased for gloves clothing
        "DirtIncreaseForArmbandClothing": 1.0, // How much dirt will be increased for armband clothing
        "DirtIncreaseForVestClothing": 1.0, // How much dirt will be increased for vest clothing
        "DirtIncreaseForBackClothing": 1.0, // How much dirt will be increased for back clothing
        "DirtIncreaseForHipsClothing": 1.0, // How much dirt will be increased for hips clothing
        "DirtIncreaseForLegsClothing": 1.0, // How much dirt will be increased for legs clothing
        "DirtIncreaseForFeetClothing": 1.0, // How much dirt will be increased for feet clothing
        "DirtIncreaseForBodyClothing": 1.0, // How much dirt will be increased for body clothing
        "DirtIncreaseForBody": 1 // How much dirt will be increased for body
    },
    "whenPee": { // This part is for clothing or body when player pees
        "DirtIncreaseForHeadClothing": 1.0, // How much dirt will be increased for head clothing
        "DirtIncreaseForHeadgearClothing": 1.0, // How much dirt will be increased for headgear clothing
        "DirtIncreaseForMaskClothing": 1.0, // How much dirt will be increased for mask clothing
        "DirtIncreaseForGlovesClothing": 1.0, // How much dirt will be increased for gloves clothing
        "DirtIncreaseForArmbandClothing": 1.0, // How much dirt will be increased for armband clothing
        "DirtIncreaseForVestClothing": 1.0, // How much dirt will be increased for vest clothing
        "DirtIncreaseForBackClothing": 1.0, // How much dirt will be increased for back clothing
        "DirtIncreaseForHipsClothing": 1.0, // How much dirt will be increased for hips clothing
        "DirtIncreaseForLegsClothing": 1.0, // How much dirt will be increased for legs clothing
        "DirtIncreaseForFeetClothing": 1.0, // How much dirt will be increased for feet clothing
        "DirtIncreaseForBodyClothing": 1.0, // How much dirt will be increased for body clothing
        "DirtIncreaseForBody": 1.0 // How much dirt will be increased for body
    },
    "whenPoo": { // This part is for clothing or body when player poos
        "DirtIncreaseForHeadClothing": 1.0, // How much dirt will be increased for head clothing
        "DirtIncreaseForHeadgearClothing": 1.0, // How much dirt will be increased for headgear clothing
        "DirtIncreaseForMaskClothing": 1.0, // How much dirt will be increased for mask clothing
        "DirtIncreaseForGlovesClothing": 1.0, // How much dirt will be increased for gloves clothing
        "DirtIncreaseForArmbandClothing": 1.0, // How much dirt will be increased for armband clothing
        "DirtIncreaseForVestClothing": 1.0, // How much dirt will be increased for vest clothing
        "DirtIncreaseForBackClothing": 1.0, // How much dirt will be increased for back clothing
        "DirtIncreaseForHipsClothing": 1.0, // How much dirt will be increased for hips clothing 
        "DirtIncreaseForLegsClothing": 1.0, // How much dirt will be increased for legs clothing
        "DirtIncreaseForFeetClothing": 1.0, // How much dirt will be increased for feet clothing
        "DirtIncreaseForBodyClothing": 1.0 // How much dirt will be increased for body clothing
    }
}
````

### WashingMachineConfig.json

````
{
    "version": "1", // Never touch this value. It is needed internally
    "energyQuantityConsumptionPerMinuted": 10.0, // How much energy will be consumed per minute per clothing
    "waterQuantityConsumptionPerMinuted": 100.0, // How much water will be consumed per minute per clothing
    "detergentQuantityConsumptionPerMinuted": 1.0, // How much detergent will be consumed per minute per clothing
    "cleanEffectivenessPerMinuted": 34.0, // How much dirt will be decreased per minute per clothing
    "itemsThatGetDamageWhenInWashedClothing": [ // Items can be get damaged when they are in inventory of closthing
        {
            "type": "IsElectricAppliance", // All Items that are electric becomes damage
            "damagePerMinute": 10 // How much damage will be done per minute
        },
        {
            "type": "Paper", // Item type
            "damagePerMinute": 10 // How much damage will be done per minute
        }
    ]
}
````