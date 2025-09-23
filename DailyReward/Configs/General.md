# General.json

## Player Data Backup Calculation
The process makes ever 3 online minutes of a player one backup of the player data. So 48 hours of play time will result in 960 backups. Each backup file is round 1kb in size. 
- 1 hour of play time will result in 20 backups.
- 24 hours of play time will result in 480 backups.
- 48 hours of play time will result in 960 backups.
- ...

## Config

````json lines
{
    "version": "3",  // Never touch this value. It is needed internally
    "isInitialized": 1, // Never touch this value. It is needed internally
    "subtractNPCKillsFromPlayerKills": 1, // 0 = off, 1 = on If you are using NPC's, and you kill them, some mods count this as a player kill. If you're mod do that, and you don't want that, set this to 1 and the kill will subtract from the player kills
    "maxBackupsPerPlayer": 960, // How many backups a player can have. If a player has more backups, the oldest backup will be deleted. -1 deactivates this feature.
    "doNotCountKillsWhenPlayerIsInSameGroupFromLBMasterGroup": 1, // 0 = off, 1 = on If a player is in the same group (LBMasters Advanced Groups), the kills will not be counted, if a teammate was killed
  
}
````