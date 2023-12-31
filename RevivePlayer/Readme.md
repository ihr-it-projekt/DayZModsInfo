# TB Revive Player

A mod to revive dead players.

<img src="./logo.png" alt="Revive Player" width="400"/>

## Shop Link
https://lbmaster.de/product.php?id=22

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

[![Version 1](logoYT.png)](https://youtu.be/Dh3ECiVC6S4)

## FAQ


## Class names of the item "Defibrillator"
````
Remove the class name of the item "Defibrillator" from the cfgIgnoreList.xml in your mpmission folder
````

### I have another spawn selection mod, can I use it with this mod?

Yes, you can. But you have to in MissionServer.c of your spawn selection mod the following line:

````
    override PlayerBase OnClientNewEvent(PlayerIdentity identity, vector pos, ParamsReadContext ctx){
        PlayerBase player = super.OnClientNewEvent(identity, pos, ctx);

    	#ifdef TBRevivePlayerClient
    	// Check if the player is in an emergency
		TBREmergency emergency = TBREmergencies.Get().GetEmergency(identity.GetId());
		if (emergency) {
            // If the player is in an emergency, spawn him in the hospital or on the position of the emergency dont us the spawn selection mod
			return player;
		}
		#endif
		
		... here comes the content of your Spawn Selection Mod
		
		return player;
    }
````


## How to install

- Take the Server PBO and bring it into your own server side pack
- Take the Client PBO and bring it into your own client pack. Publish this Pack on steam.
- Start your server. All configurations will now create in your Server profile folder.
- Tear down the server
- Configure your needs
- Start your Server :-)

## How to upgrade from 1.x.x to 2.x.x

**Please read before everything, before you start.**

The currency configuration part will be removed after the upgrade. The currency configuration will then in TBMods configuration folder.

1. Backup everything in ``YourServerProfilesFolder\TBRevivePlayer`` folder
1. Backup the old pbos from server and client and remove them from your server and client package
1. Download the new version and copy over, do not forget also the TBLib update.
1. Start the server
1. Wait server is up
1. Stop the server
1. Adapt the currency config in ``YourServerProfilesFolder\TBMods\Configs\Global\CurrencyConfig.json`` to your needs. You can copy over the part from backup configuration.
1. Configure the [tbKeyBindsConfig.json](../GlobalConfigs/Readme.md#tbkeybindsconfigjson) for your needs
1. Update done. Start your Server
1. If everything is fine, you can delete the old config folder ``YourServerProfilesFolder\TBRevivePlayer``

## FAQ

### The defibrillator is de spawned after re log/server restart
In your `mpmission` folder there is a `cfgIgnoreList.xml` where you have to remove the "Defibrillator" entry

## Configuration

````
{
    "version": "1",// Never touch this value. It is needed internally
    "revive": { // If a player will be revived from another player
        "maxWounds": 5, // Max wounds the player get when revived
        "minWounds": 1, // Min wounds the player get when revived
        "health": 0.5, // Health the player get when revived (0.0 - 1.0) 1.0 = 100%
        "blood": 0.5, // Blood the player get when revived (0.0 - 1.0) 1.0 = 100%
        "shock": 0.0 // Shock the player get when revived (0.0 - 1.0) 0 means 100% shock, 1.0 means no shock
    },
    "deleteDeadBodyTimeWhenHealedByPlayer": 5.0, // Time in seconds when the dead body will be deleted when healed by another player
    "minTimeBeforeHospital": 180, // Min time in seconds before the player can be revived in the hospital
    "minTimeBeforeKillButton": 5, // Min time in seconds before player can use the kill/suiccied button
    "enableHospital": 1, // 0 = No hospital revive, 1 = Hospital revive is enabled
    "destroyDefibrillatorAfterUsage": 0, // 0 = Defibrillator will not be destroyed after usage, 1 = Defibrillator will be destroyed after usage
    "priceForReviveInHospital": 100, // Price for revive in hospital -1 = no price for revive 100 = 100 $ for revive
    "reviveHospital": { // If a player will be revived in the hospital
        "maxWounds": 0, // Max wounds the player get when revived
        "minWounds": 0, // Min wounds the player get when revived
        "health": 1.0, // Health the player get when revived (0.0 - 1.0) 1.0 = 100%
        "blood": 1.0, // Blood the player get when revived (0.0 - 1.0) 1.0 = 100%
        "shock": 1.0 // Shock the player get when revived (0.0 - 1.0) 0 means 100% shock, 1.0 means no shock
    },
    "hospitalSpawnPoints": [ // Positions of hospital spawn points, player will spawn on one of them randomly
        {
            "id": "758198676", // ID of the spawn point, must be unique
            "orientation": [ // Orientation of the spawn point
                46.99998474121094,
                0.0,
                0.0
            ],
            "point": [ // Position of the spawn point
                10283.5185546875,
                12.801782608032227,
                2293.035400390625
            ]
        },
        {
            "id": "1124738668",
            "orientation": [
                -162.0,
                0.0,
                0.0
            ],
            "point": [
                6478.24462890625,
                9.735041618347168,
                2713.15771484375
            ]
        },
        {
            "id": "1062071794",
            "orientation": [
                -27.0,
                0.0,
                0.0
            ],
            "point": [
                3767.240234375,
                312.504150390625,
                9011.1181640625
            ]
        }
    ]
}

````

### TBKeyBindsConfig.json

see [TBKeyBindsConfig.json](../GlobalConfigs/Readme.md#tbkeybindsconfigjson)
