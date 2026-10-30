# ReputationConfig.json

The server creates this file at startup in `YourDayZServerProfileFolder\TBMods\Config\TBBasicNeeds`.

BasicNeeds awards points through TBLib's shared reputation system, using the same player total as TBCarDealer. Install the updated BasicNeeds and TBLib together.

## Default configuration

```json
{
  "version": "1",
  "actionRewards": {
    "TBBNActionPee": 0,
    "TBBNActionPoo": 0,
    "TBBNActionPeeAndPoo": 0,
    "TBBNActionUseToilet": 0,
    "TBBNWashBodyWater": 0,
    "TBBNWashBodyWell": 0,
    "TBBNWashClothingWater": 0,
    "TBBNWashClothingWell": 0,
    "TBBNWashClothingSink": 0,
    "TBActionTurnOnWashingMachine": 0,
    "TBActionTurnOffWashingMachine": 0,
    "TBActionTurnOnDryer": 0,
    "TBActionTurnOffDryer": 0,
    "TBActionPayInMoney": 0,
    "TBActionPayIn10TimesMoney": 0,
    "TBActionPayOutMoney": 0
  }
}
```

Leave `version` unchanged. Each `actionRewards` entry is the number of points awarded for that action. The default is **0** (disabled). Set an entry to **0** to disable its reward. Negative values are ignored.

| Action | When points are awarded |
| --- | --- |
| `TBBNActionPee` | Completing the pee action |
| `TBBNActionPoo` | Completing the poo action |
| `TBBNActionPeeAndPoo` | Completing the combined action; awarded once |
| `TBBNActionUseToilet` | Finishing toilet use when the player needs to pee or poo; awarded once |
| `TBBNWashBodyWater` | Completing a body wash in water |
| `TBBNWashBodyWell` | Completing a body wash at a well |
| `TBBNWashClothingWater` | Completing a clothing wash in water |
| `TBBNWashClothingWell` | Completing a clothing wash at a well |
| `TBBNWashClothingSink` | Completing a clothing wash at a sink |
| `TBActionTurnOnWashingMachine` | Successfully switching on a washing machine |
| `TBActionTurnOffWashingMachine` | Successfully switching off a washing machine |
| `TBActionTurnOnDryer` | Successfully switching on a dryer |
| `TBActionTurnOffDryer` | Successfully switching off a dryer |
| `TBActionPayInMoney` | Successfully paying for one minute at a static washing machine or dryer |
| `TBActionPayIn10TimesMoney` | Successfully paying for ten minutes; awarded once |
| `TBActionPayOutMoney` | Withdrawing a positive balance from a switched-off static washing machine or dryer |

Cancelled continuous actions and failed machine switches award no points. Failed deposits, free deposits, empty withdrawals and admin operations award no points. Each successful payment action awards its configured reward once; the 10-minute deposit does not multiply its reward by 10. Machine rewards apply to both portable and static machines.

Repeated washing, switching machines on/off, and deposits/withdrawals can earn points repeatedly. Adjust or disable these rewards to suit your server economy.

## Apply changes

Save the file, then use the existing BasicNeeds **[Admin] Reload Config** action or restart the server. Reloading requires `basicNeedsAdmin` in [AdminConfig.json](../../GlobalConfigs/AdminConfig.md).

## Manage player reputation

Set `reputationAdmin` to `1` for authorized administrators in the global [AdminConfig.json](../../GlobalConfigs/AdminConfig.md). This permission is separate from `basicNeedsAdmin` and defaults to disabled when upgrading.

Aim at any portable or static washing machine or dryer and select **[Admin] Manage player reputation**. Search by player name or UID, edit the integer total in that player's row, and click the gold **Save** button. This replaces the player's total. Click **Refresh** to reload the list.

Rows show the player name, UID and current points, including stored offline players. Changes are saved immediately and synchronized to online players. The server checks the permission for both viewing and saving reputation.

After saving, the server confirms **Player reputation saved successfully.** Invalid numbers, missing permissions, missing player records and failed writes show an error instead. If writing fails, the server restores the previous in-memory total and does not synchronize the requested value to the player. See [save confirmation and errors](/GlobalConfigs/ReputationSystem/Index.html#save-confirmation-and-errors) for messages and troubleshooting.

See also the [shared reputation system](/GlobalConfigs/ReputationSystem/Index.html).

The reputation menu action is also available on `TBLIBBaseMachine` and derived machines through TBLib, without requiring BasicNeeds. It uses the same `reputationAdmin` permission and player menu.
