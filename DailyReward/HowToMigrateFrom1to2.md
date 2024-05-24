[**`back`**](./Readme.md)

### How to migrate from Version 1.x.x to 2.x.x

**Please read before everything, before you start.**

1. Backup everything ``YourServerProfilesFolder\TBDailyReward`` files from Mod
1. Do not move the original files and folders form ``YourServerProfilesFolder\TBDailyReward`` some files will be migrated to new locations
1. Backup the old pbos from server and client and remove them from your server and client package
1. Download the new version and copy over, do not forget also the TBLib update.
1. Start the server
1. Wait server is up
1. `PremiumUser.json` and `AdminConfig.json` will now migrate to new versions. You will find them now in `YourServerProfilesFolder\TBMods\Data\Global` and `YourServerProfilesFolder\TBMods\Config\Global`
1. Stop the server
1. Copy everything except `PremiumUser.json`, `TBKeyBindsConfig.json` and `AdminConfig.json` from `YourServerProfilesFolder\TBDailyReward\Config` into `YourServerProfilesFolder\TBMods\Config\TBDailyReward`
1. Copy everything from `YourServerProfilesFolder\TBDailyReward\Data` into `YourServerProfilesFolder\TBMods\Data\TBDailyReward`
1. Configure the [tbKeyBindsConfig.json](../GlobalConfigs/Readme.md#tbkeybindsconfigjson) for your needs
1. Update done. Start your Server