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