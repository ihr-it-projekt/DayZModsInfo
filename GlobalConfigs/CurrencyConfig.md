# CurrencyConfig.json
````json lines
{
  "version": "1", // never change this, internal version number
    "currencyValues": { // Currency values for the your currencies
        "MoneyRuble1": 1, // "ItemName": ITEM VALUE // Attention the Typename is key sensitive
        "MoneyRuble5": 5,
        "MoneyRuble10": 10,
        "MoneyRuble25": 25,
        "MoneyRuble50": 50,
        "MoneyRuble100": 100
    },
    "useMoneyFromLBMasterATM": 1 // If you ae using advanced banking system from LBMaster, you can use to take the money from the ATM. 0 = disabled, 1 = enabled
} 
````

#### Money types Extension

- ExpansionBanknoteUSD
- ExpansionBanknoteEuro
- ExpansionBanknoteHryvnia