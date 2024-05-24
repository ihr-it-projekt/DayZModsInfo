[**`back`**](../Readme.md)

## How to upgrade from 1.x.x to 2.x.x

**Please read before everything, before you start.**

1. backup everything in ``YourServerProfilesFolder\TBRealEstate`` folder
1. download the new version and copy over, do not forget also the TBLib update.
1. start the server
1. wait server is up
1. stop the server
1. adapt the currency config in ``YourServerProfilesFolder\TBMods\Configs\Global\CurrencyConfig.json`` to your needs. You can copy over the content from backup configuration to new generated file.
1. Delete everything in ``YourServerProfilesFolder\TBMods\Data\TBRealEstate`` folder
1. Copy every file form from old ``YourServerProfilesFolder\TBRealEstate\Data`` to new ``YourServerProfilesFolder\TBMods\Data\TBRealEstate`` folder.
1. Delete everything in ``YourServerProfilesFolder\TBMods\Config\TBRealEstate`` folder
1. Copy every file form from old ``YourServerProfilesFolder\TBRealEstate\Config`` to new ``YourServerProfilesFolder\TBMods\Config\TBRealEstate`` folder.
1. Copy the [convert.exe](./convert/dist/convert.exe) to ``YourServerProfilesFolder\TBMods\Data\TBRealEstate\Player`` folder
1. execute the ``convert.exe`` in ``YourServerProfilesFolder\TBMods\Data\TBRealEstate\Player`` folder
1. you can delete the ``convert.exe`` script now
1. Start the server