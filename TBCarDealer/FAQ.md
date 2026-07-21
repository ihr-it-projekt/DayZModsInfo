### How i can give player premium status?

Hint: There are general coin for all my mods that support premium status.
See [Global Readme](../GlobalConfigs/Readme.md#premium-coins)

There are 3 Items implemented. Just give him one of the items and he will get premium status for Car Dealer.

- TBCarDealerPremiumCoinGold | 30 Days Premium in Daily Reward
- TBCarDealerPremiumCoinSilver | 7 Days Premium in Daily Reward
- TBCarDealerPremiumCoinBronze | 1 Day Premium in Daily Reward

### I want to use custom Vending Machines instead of the default ones?

1. create your own mod with your custom vending machine
2. add in config.cpp 

```cpp
class CfgVehicles {
    class TBCDMachine;
    class MyCustomVendingMachine : TBCDMachine {
        scope = 2;
        displayName = "#MyCustomVendingMachine";
        descriptionShort = "#MyCustomVendingMachine";
        ... add your needs
    };

}
```

3. create a c file `MyCustomVendingMachine.c` in `scripts\4_World\Entities\Machines\` for example, with the content:

```cpp
class MyCustomVendingMachine: TBCDMachine {}
```

4. build your pbo

You are now able to use the vending machine in config directly or in in game admin menu.