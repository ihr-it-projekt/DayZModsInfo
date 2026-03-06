# I want to use custom Vending Machine

::: tip
This is only for people with modding experience. If you have no modding experience, I recommend using the existing vending machines.
:::


If you want to use your own vending machine, you need to create a new class that inherits from `TBDTTraderActionObject`.

## How to use:

- create a new class that inherits from `TBDTTraderActionObject`
- create your own vending machine pbo or add it to the client pbo of DynamicTrader


### Class example
````c
class MyCustomVendingMachine extends TBDTTraderActionObject {}
````

- add the new class to the `DealerPoint.json` file at type 
````json
{
    "uniqueName": "Weapon Trader", 
    ...
    "type": "MyCustomVendingMachine", <-- Change here
    ...
}
````
- start your server and check if it works.