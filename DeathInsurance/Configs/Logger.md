# Logger.json

```json lines
{
    "version": "1", // never change this, internal version number
    "isInitialized": 1, // never change this, internal usage
  // If player buys an insurance
    "logBuyInsurance": 1, // 1 = enables csv logging, 0 = disabled
    "logBuyInsuranceDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordBuyInsuranceWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits",
  // If player dies
    "logPlayerDied": 1, // 1 = enables csv logging, 0 = disabled
    "logPlayerDiedDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordPlayerDiedWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits",
    // If insurance becomes active and items will be saved
    "logInsuranceUsed": 1, // 1 = enables csv logging, 0 = disabled
    "logInsuranceUsedDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordInsuranceUsedWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits",
    // If player takes the items from insurance trader
    "logInsuranceItemTaken": 1, // 1 = enables csv logging, 0 = disabled
    "logInsuranceItemTakenDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordInsuranceItemTakenWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits",
    // If player deletes the insurance case or last item was taken
    "logInsuranceDelete": 1, // 1 = enables csv logging, 0 = disabled
    "logInsuranceDeleteDiscord": 1, // 1 = enables discord logging, 0 = disabled
    "discordInsuranceDeleteWebhookURL": "https://discord.com/api/webhooks/1108099699883389049/n6dxjQuMzkEgRZHrgGNZANLju5rUbyy5Ywdpo3Dpl9o5484A5lbLDmbQr5yx5kR3Uits"
}
```