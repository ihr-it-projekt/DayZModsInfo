# AdminConfig.json

File is located in `YourDayZServerProfileFolder\TBMods\Config\Global`

````json lines
{
  "version": "18", // never change this, internal version number
  "admins": {
    "Add here Steam ID Or DayZ ID": {
      "configAdmin": 0, // 0 = off 1 = on | full access to TBLib administration menu (reputation, permissions, premium, currency)
      "reputationAdmin": 0, // 0 = off 1 = on | can view and set shared player reputation
      "dailyRewardAdmin": 0, // 0 = off 1 = on | is admin in daily reward mod
      "realEstateAdmin": 0, //  0 = off 1 = on | is admin in real estate mod
      "carDealerAdmin": 0, //  0 = off 1 = on | is admin in car dealer
      "basicNeedsAdmin": 0, // 0 = off 1 = on | is admin in basic needs
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
      "notes": "This field can be used for any note" // Free text field, for example an admin name
    },
    "7656119813296317725": {
      "configAdmin": 1,
      "reputationAdmin": 1,
      "dailyRewardAdmin": 1,
      "realEstateAdmin": 1,
      "carDealerAdmin": 1,
      "basicNeedsAdmin": 1,
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

## TBLib Administration Menu Permissions

TBLib provides a unified in-game administration menu accessible on any `TBLIBBaseMachine` (and mod machines like BasicNeeds washing machines/dryers) via the interaction **[Admin] TBLib Administration**. See [TBLib Administration Menu](AdminMenu.md) for full details.

- **`configAdmin`**: Grants full access to all sections of the Admin Menu:
  - **Reputation**: View and modify shared player reputation points.
  - **Admin config**: Toggle all 16 admin permissions per player with live checkboxes.
  - **Premium users**: View, extend (+30 days, custom days) and revoke premium roles per mod or globally.
  - **Currency config**: Configure currencies, banking integrations (LBMaster ATM / DC Banking), and item values.
- **`reputationAdmin`**: Grants access only to the **Reputation** section.

### Enabling Admin Access

1. Find the administrator's Steam ID or DayZ ID in `admins`, or add an entry for it.
2. Set `"configAdmin": 1` (or `"reputationAdmin": 1` for reputation only).
3. Restart the server to load the permission change. For servers running BasicNeeds, the **[Admin] Reload Config** action can also reload AdminConfig.
4. Interact with any `TBLIBBaseMachine` in-game and choose **[Admin] TBLib Administration**.
