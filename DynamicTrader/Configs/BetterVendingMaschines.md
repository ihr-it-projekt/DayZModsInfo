### Better Vending Machines Mod

This Mod supports Better Vending Machines. 

#### How to use:

- subscribe to the mod [link](https://steamcommunity.com/sharedfiles/filedetails/?id=2764730905)
- you need to edit the DealerPoint in a text editor and change the type that you want to use.
- it can be that you need also to add 180 degrees to the orientation y value.
- reload the config in game with the admin menu or restart the server.

##### Example

###### Before

````json
{
    "uniqueName": "Weapon Trader", 
    ...
    "position": [ 
        6542.7314453125,
        6.188297748565674,
        2478.249267578125
    ],
    "orientation": [ 
        -48.0,
        0.00231537944637239,
        0.0008682372281327844
    ],
    ...
    "type": "TBDTTraderMachine", 
    ...
}

````
###### After

````json
{
    "uniqueName": "Weapon Trader", 
    ...
    "position": [ 
        6542.7314453125,
        6.188297748565674,
        2478.249267578125
    ],
    "orientation": [ 
        132.0, <-- Change here
        0.00231537944637239,
        0.0008682372281327844
    ],
    ...
    "type": "BVM_VendingMachine_firearms", <-- Change here
    ...
}

````


#### Types:

- VendingMachine_Base
- BVM_VendingMachine
- BVM_VendingMachine_melee
- BVM_VendingMachine_firearms
- BVM_VendingMachine_sidearms
- BVM_VendingMachine_weapons
- BVM_VendingMachine_vanilla_weapons
- BVM_VendingMachine_modded_weapons
- BVM_VendingMachine_ammunition
- BVM_VendingMachine_attachments
- BVM_VendingMachine_donator
- BVM_VendingMachine_vip
- BVM_VendingMachine_special
- BVM_VendingMachine_exchange
- BVM_VendingMachine_tools
- BVM_VendingMachine_spray
- BVM_VendingMachine_building
- BVM_VendingMachine_crafting
- BVM_VendingMachine_medical
- BVM_VendingMachine_consumables
- BVM_VendingMachine_beverages
- BVM_VendingMachine_cooking
- BVM_VendingMachine_miscellaneous
- BVM_VendingMachine_military_clothing
- BVM_VendingMachine_clothing
- BVM_VendingMachine_vanilla_clothing
- BVM_VendingMachine_modded_clothing
- BVM_VendingMachine_drugs
- BVM_VendingMachine_hunting
- BVM_VendingMachine_fishing
- BVM_VendingMachine_mining
- BVM_VendingMachine_farming
- BVM_VendingMachine_boats
- BVM_VendingMachine_helicopters
- BVM_VendingMachine_vehicles
- BVM_VendingMachine_vehicle_parts
- BVM_VendingMachine_garage
- BVM_VendingMachine_explosives
- BVM_VendingMachine_blackmarket
- BVM_VendingMachine_collectables
- BVM_VendingMachine_dogtags
- BVM_VendingMachine_crypto
- BVM_VendingMachine_bitcoin

