# CurrencyConfig.json
````json lines
{
    "version": "2", // never change this, internal version number
    "isInitialized": 1, // never change this, internal version number
    "currencyValues": {}, // deprecated, will be removed in the future
    "useMoneyFromLBMasterATM": 1, // deprecated, will be removed in the future
    "currencies": [
        {
            "uniqueName": "default", // unique name of the currency; one currency must be marked as 'default'. Otherwise, it can lead to problems.
            "displayName": "Ruble", // display name of the currency
            "currencyValues": { // currency values for your currencies
                "Money_Ruble50": 50, // "ItemName": ITEM VALUE // Attention: the Typename is case-sensitive
                "Money_Ruble1": 1,
                "Money_Ruble2": 2,
                "Money_Ruble5": 5,
                "Money_Ruble10": 10,
                "Money_Ruble200": 200,
                "Money_Ruble5000": 5000,
                "Money_Ruble100": 100,
                "Money_Ruble500": 500,
                "Money_Ruble2000": 2000,
                "Money_Ruble1000": 1000
            },
            "useLBMasterATM": 1
        },
		{
            "uniqueName": "Euro",
            "displayName": "Euro",
            "currencyValues": {
                "Money_Euro50": 50,
                "Money_Euro1": 1,
                "Money_Euro2": 2,
                "Money_Euro5": 5,
                "Money_Euro10": 10,
                "Money_Euro200": 200,
                "Money_Euro100": 100,
                "Money_Euro500": 500
            },
            "useLBMasterATM": 0
        }
    ]
}
````

#### Money types Extension

- ExpansionBanknoteUSD
- ExpansionBanknoteEuro
- ExpansionBanknoteHryvnia