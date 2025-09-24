## FAQ

## My defibrillator is de spawned after re log/server restart?
In your `mpmission` folder there is a `cfgIgnoreList.xml` where you have to remove the "Defibrillator" entry

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