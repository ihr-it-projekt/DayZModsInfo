# GeneralConfig.json


```json lines
{
    "version": "2", // Never touch this value. It is needed internally
    "defibrillatorHealthLoss": 20.0, // Health loss when using a defibrillator (0 - 100) 100 = 100% health loss
    "defibrillatorCanBeRepaired": 1, // if 1, defibrillator can be repaired, if 0, defibrillator can not be repaired
    "minTimeBeforeKillButton": 5, // Min time in seconds before player can use the killbutton
    "minTimeBeforePremiumKillButton": 5, // Min time in seconds before premium player can use the killbutton
    "minTimeBeforeKillWhenNoOtherPlayerIsOnline": 5, // Min time in seconds before player can use the killbutton when no other player is online
    "minTimeBeforePremiumKillWhenNoOtherPlayerIsOnline": 5 // Min time in seconds before premium player can use the killbutton when no other player is online
}
```