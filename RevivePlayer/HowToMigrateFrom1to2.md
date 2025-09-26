# How to upgrade from 1.x.x to 2.x.x

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