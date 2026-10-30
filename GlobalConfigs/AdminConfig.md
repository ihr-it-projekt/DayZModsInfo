# AdminConfig.json

File is located in `YourDayZServerProfileFolder\TBMods\Config\Global`

````json lines
{
  "version": "17", // never change this, internal version number
  "admins": {
    "Add here Steam ID Or DayZ ID": {
      "dailyRewardAdmin": 0, // 0 = off 1 = on | is admin in daily reward mod
      "realEstateAdmin": 0, //  0 = off 1 = on | is admin in real estate mod
      "carDealerAdmin": 0, //  0 = off 1 = on | is admin in car dealer
      "basicNeedsAdmin": 0, // 0 = off 1 = on | is admin in basic needs
      "reputationAdmin": 0, // 0 = off 1 = on | can view and set shared player reputation
      "deathInsurance": 0, // 0 = off 1 = on | is admin in death insurance
      "secondHandMarket": 0, // 0 = off 1 = on | is admin in second hand market
      "revivePlayer": 0, // 0 = off 1 = on | is admin in revive player
      "jewelsOfSurvival": 0, // 0 = off 1 = on | is admin in jewels of survival
      "warParty": 0, // 0 = off 1 = on | is admin in war party
      "carry": 0, // 0 = off 1 = on | is admin for carry mod 
      "dynamicDealer": 0, // 0 = off 1 = on | is admin in dynamic trader
      "survivorLuck": 0, // 0 = off 1 = on | is admin for survivor luck mod 
      "staticLightsAdmin": 0, // 0 = off 1 = on | is admin in static lights
      "vehicleLockSystem": 0, // 0 = off 1 = on | is admin in car lock system
      "notes": "This field can be used for any note" // Free text field, to for example a admin name
    },
    "7656119813296317725": {
      "dailyRewardAdmin": 1,
      "realEstateAdmin": 1,
      "carDealerAdmin": 1,
      "basicNeedsAdmin": 1,
      "reputationAdmin": 1,
      "deathInsurance": 1,
      "secondHandMarket": 1,
      "revivePlayer": 1,
      "jewelsOfSurvival": 1,
      "warParty": 1,
      "carry": 1,
      "dynamicDealer": 1,
      "survivorLuck": 1,
      "staticLightsAdmin": 1,
      "vehicleLockSystem": 1,
      "notes": "This field can be used for any note"
    }
  }
}
````
## Reputation management permission

`reputationAdmin` grants access to TBLib's shared player reputation menu. It defaults to `0` when upgrading and is independent of `basicNeedsAdmin` and `carDealerAdmin`. Grant it only to administrators who should be able to view and replace player reputation totals.

With BasicNeeds installed, authorized administrators open the menu by aiming at a portable or static washing machine or dryer and selecting **[Admin] Manage player reputation**. See [ReputationConfig.json](../BasicNeeds/Configs/ReputationConfig.md#manage-player-reputation) for usage.

The reputation menu action is also available on `TBLIBBaseMachine` and derived machines through TBLib, without requiring BasicNeeds. It uses the same `reputationAdmin` permission and player menu.

### Enable reputation management

1. Find the administrator's Steam ID or DayZ ID in `admins`, or add an entry for it.
2. Set `"reputationAdmin": 1` in that entry. Keep `version` unchanged; TBLib migrates the file automatically.
3. Restart the server to load the permission change. For BasicNeeds servers, the existing **[Admin] Reload Config** action can also reload AdminConfig; using that action requires `basicNeedsAdmin`.

Open **[Admin] Manage player reputation** at a TBLib base machine or a BasicNeeds washing machine/dryer. Search by name or UID and use the gold **Save** button in the player's row. The top-right controls are **Refresh**, **Mute** and **Close**, displayed as icons.

The server confirms **Player reputation saved successfully.** only after the new total is written. Invalid input, missing permission, missing player records and failed writes produce an error. See [save confirmation and errors](/GlobalConfigs/ReputationSystem/Index.html#save-confirmation-and-errors) for troubleshooting.
