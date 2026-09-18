# LoggerConfig

| Channel | Covers |
|---|---|
| **General** | Extension purchases |
| **Raid Actions** | Raids, short-circuits, repairs, alarms on/off |
| **Admin** | Admin owner deletion, admin key-access changes |
| **Key** | Player-driven ownership, key access, group access, pack/unpack, and claiming a vehicle |

```json lines
{
    "version": "1", // Internal version number - do not modify!
    "logBuyExtension": 1, // 0 = off, 1 = on
    "logBuyExtensionToDiscord": 1, // 0 = off, 1 = on
    "logShortCircuit": 1, // 0 = off, 1 = on
    "logShortCircuitToDiscord": 1, // 0 = off, 1 = on
    "logRepairShortCircuit": 1, // 0 = off, 1 = on
    "logRepairShortCircuitToDiscord": 1, // 0 = off, 1 = on
    "logRaid": 1, // 0 = off, 1 = on
    "logRaidToDiscord": 1, // 0 = off, 1 = on
    "logAlarmOn": 1, // 0 = off, 1 = on
    "logAlarmOnToDiscord": 1, // 0 = off, 1 = on
    "logAlarmOff": 1, // 0 = off, 1 = on
    "logAlarmOffToDiscord": 1, // 0 = off, 1 = on
    "logAdminDeleteOwner": 1, // 0 = off, 1 = on
    "logAdminDeleteOwnerToDiscord": 1, // 0 = off, 1 = on
    "logAdminSaveKeyAccess": 1, // 0 = off, 1 = on
    "logAdminSaveKeyAccessToDiscord": 1, // 0 = off, 1 = on
    "logUserSaveKeyAccess": 1, // 0 = off, 1 = on
    "logUserSaveKeyAccessToDiscord": 1, // 0 = off, 1 = on
    "logUserTransferOwner": 1, // 0 = off, 1 = on
    "logUserTransferOwnerToDiscord": 1, // 0 = off, 1 = on
    "logUserGroupAccess": 1, // 0 = off, 1 = on
    "logUserGroupAccessToDiscord": 1, // 0 = off, 1 = on
    "logVehiclePack": 1, // 0 = off, 1 = on
    "logVehiclePackToDiscord": 1, // 0 = off, 1 = on
    "logVehicleUnpack": 1, // 0 = off, 1 = on
    "logVehicleUnpackToDiscord": 1, // 0 = off, 1 = on
    "logOwnVehicle": 1, // 0 = off, 1 = on
    "logOwnVehicleToDiscord": 1, // 0 = off, 1 = on
    "discordGeneralWebhookURL": "https://discord.com/api/webhooks/...", // Discord Webhook URL for general logs
    "discordRaidActionsWebhookURL": "https://discord.com/api/webhooks/...", // Discord Webhook URL for raid actions logs
    "discordAdminWebhookURL": "https://discord.com/api/webhooks/...", // Discord Webhook URL for admin logs
    "discordKeyWebhookURL": "https://discord.com/api/webhooks/..." // Discord Webhook URL for key logs
}
```