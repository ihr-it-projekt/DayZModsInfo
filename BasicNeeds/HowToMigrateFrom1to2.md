[**`back`**](./Readme.md)

### How to migrate from Version 1.x.x to 2.x.x

**Please read before everything, before you start.**

1. Backup everything ``YourServerProfilesFolder\TBDailyReward`` files from Mod
1. Backup the old pbos from server and client and remove them from your server and client package
1. Download the new version and copy over, do not forget also the TBLib update.
1. Start the server
1. Wait server is up
1. Stop the server
1. Copy everything from `YourServerProfilesFolder\TBBasicNeeds\Config` into `YourServerProfilesFolder\TBMods\Config\TBBasicNeeds`
1. Copy everything from `YourServerProfilesFolder\TBBasicNeeds\Data` into `YourServerProfilesFolder\TBMods\Data\TBBasicNeeds`
1. Update done. Start your Server
1. If everything is fine, you can delete the old folder ``YourServerProfilesFolder\TBBasicNeeds``
