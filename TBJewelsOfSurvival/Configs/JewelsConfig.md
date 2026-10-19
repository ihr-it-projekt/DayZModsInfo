# JewelsConfig.json

`JewelsConfig.json` allows server administrators to configure all skill values for every ring (`ringOfPerseveranceLevel1..3`, `ringOfLifeLevel1..3`, `ringOfAttackLevel1..3`, `ringOfDefenseLevel1..3`, `ringOfDragonBloodLevel1..3`, `ringOfOwlLevel1..3`, `ringOfEagleEyeLevel1..3`).

- **Every ring can be given any skill**: All 25 skills are available on every ring. Setting a percentage value to `0` (or a boolean to `0` / `false`) disables that skill on the ring.
- **Harmonized Percentage Values**:
  - Percentage values are entered directly as whole percentages (e.g. `10` = `+10%`, `-10` = `-10%`, `100` = `+100%`).
  - Values are automatically converted internally (`value / 100.0`) and displayed in the in-game Jewel Book (`TBJOFBook`).
  - Values above `100` (e.g. `200`, `300`, `500`) are supported when you want effects stronger than `+100%`.
- **Live Reload**: Changes to `JewelsConfig.json` can be reloaded in-game via the Admin **Reload Config** button in the Jewel Book without restarting the server.

## Example Configuration

```json lines
{
    "version": "1", // never change this, internal version number
    "ringOfPerseveranceLevel1": {
        "staminaDepletionEffectInPercent": 10.0, // > 0 reduces stamina depletion (bonus, green), < 0 increases stamina depletion (penalty, red)
        "staminaRecoveryEffectInPercent": 10.0, // > 0 increases stamina recovery (bonus, green), < 0 decreases stamina recovery (penalty, red)
        "hungerEffectInPercent": 20.0, // > 0 increases hunger consumption (penalty, red), < 0 reduces hunger consumption (bonus, green)
        "thirstEffectInPercent": 20.0, // > 0 increases thirst consumption (penalty, red), < 0 reduces thirst consumption (bonus, green)
        "healthRegenEffectInPercent": 0.0, // > 0 increases health regeneration speed (bonus, green), < 0 decreases health regeneration (penalty, red)
        "bloodRegenEffectInPercent": 0.0, // > 0 increases blood regeneration speed (bonus, green), < 0 decreases blood regeneration (penalty, red)
        "charcoalEffectInPercent": 0.0, // > 0 increases charcoal effectiveness/speed (bonus, green), < 0 decreases it (penalty, red)
        "disinfectionEffectInPercent": 0.0, // > 0 increases disinfection effectiveness/speed (bonus, green), < 0 decreases it (penalty, red)
        "epinephrineEffectInPercent": 0.0, // > 0 increases epinephrine duration (bonus, green), < 0 decreases duration (penalty, red)
        "heatComfortEffectInPercent": 0.0, // > 0 increases heat comfort tick effect (bonus, green), < 0 decreases it (penalty, red)
        "morphineEffectInPercent": 0.0, // > 0 increases morphine duration (bonus, green), < 0 decreases duration (penalty, red)
        "painKillerEffectInPercent": 0.0, // > 0 increases painkiller duration (bonus, green), < 0 decreases duration (penalty, red)
        "shockEffectInPercent": 0.0, // < 0 speeds up shock recovery / reduces shock duration (bonus, green, e.g. -40 = -40% shock duration), > 0 slows shock recovery (penalty, red)
        "shockDamageEffectInPercent": 0.0, // > 0 increases shock damage tick effect, < 0 reduces shock damage tick effect
        "bleedingChanceReduceInPercent": 0.0, // 0 - 100: percentage chance to prevent a bleeding cut when hit (e.g. 25 = 25% chance to prevent bleeding)
        "toxicityEffectInPercent": 0.0, // > 0 increases toxicity modifier tick rate, < 0 reduces toxicity modifier tick rate
        "damageReduceInPercent": 0.0, // > 0 reduces incoming damage / armor bonus (green, e.g. 8 = +8% armor), < 0 increases incoming damage (penalty, red, e.g. -8 = -8% armor)
        "damageIncreaseInPercent": 0.0, // > 0 increases outgoing attack damage (bonus, green, e.g. 8 = +8% attack), < 0 reduces outgoing damage (penalty, red, e.g. -8 = -8% attack)
        "flashBangEffectLengthInPercent": 0.0, // > 0 flashbang cooldown duration in percent when removing Night Vision ring (penalty, red, e.g. 100 = 100%, 150 = 150%, 200 = 200%)
        "flashBangEffectIntensityInPercent": 0.0, // 0 - 100: flashbang screen intensity in percent when removing Night Vision ring (penalty, red, e.g. 25, 50, 75)
        "nightVisionEffect": 0, // 1 (true) = enables standard Night Vision (goggles overlay) while wearing the ring, 0 (false) = disabled
        "nightVisionEffectMaskRemoved": 0, // 1 (true) = enables Full Night Vision without goggles mask overlay (requires nightVisionEffect = 1), 0 (false) = disabled
        "nightVisionEffectScope": 0, // 1 (true) = enables Night Vision inside weapon scopes/optics, 0 (false) = disabled
        "eagleEffectInPercent": 0.0, // 0 - 100: reduces weapon scope sway by this percentage (bonus, green, e.g. 10 = +10% stability / -10% sway)
        "eagleEffectStopSound": 0 // 1 (true) = mutes all game/voice/radio sounds while zoomed into a weapon scope, 0 (false) = disabled
    }
}
```

---

## Default Ring Values Overview

| Ring | Level 1 | Level 2 | Level 3 |
| :--- | :--- | :--- | :--- |
| **Ring of Perseverance** (`ringOfPerseveranceLevel1..3`) | `staminaDepletionEffectInPercent`: `10`<br>`staminaRecoveryEffectInPercent`: `10`<br>`hungerEffectInPercent`: `20`<br>`thirstEffectInPercent`: `20` | `staminaDepletionEffectInPercent`: `20`<br>`staminaRecoveryEffectInPercent`: `20`<br>`hungerEffectInPercent`: `40`<br>`thirstEffectInPercent`: `40` | `staminaDepletionEffectInPercent`: `30`<br>`staminaRecoveryEffectInPercent`: `30`<br>`hungerEffectInPercent`: `80`<br>`thirstEffectInPercent`: `80` |
| **Ring of Life** (`ringOfLifeLevel1..3`) | `healthRegenEffectInPercent`: `100`<br>`hungerEffectInPercent`: `100` | `healthRegenEffectInPercent`: `200`<br>`bloodRegenEffectInPercent`: `200`<br>`hungerEffectInPercent`: `300`<br>`thirstEffectInPercent`: `300` | `healthRegenEffectInPercent`: `300`<br>`bloodRegenEffectInPercent`: `300`<br>`shockEffectInPercent`: `-40`<br>`hungerEffectInPercent`: `500`<br>`thirstEffectInPercent`: `500` |
| **Ring of Attack** (`ringOfAttackLevel1..3`) | `damageIncreaseInPercent`: `8`<br>`damageReduceInPercent`: `-8` | `damageIncreaseInPercent`: `16`<br>`damageReduceInPercent`: `-16` | `damageIncreaseInPercent`: `24`<br>`damageReduceInPercent`: `-24` |
| **Ring of Defense** (`ringOfDefenseLevel1..3`) | `damageReduceInPercent`: `8`<br>`damageIncreaseInPercent`: `-8` | `damageReduceInPercent`: `16`<br>`damageIncreaseInPercent`: `-16` | `damageReduceInPercent`: `24`<br>`damageIncreaseInPercent`: `-24` |
| **Ring of DragonBlood** (`ringOfDragonBloodLevel1..3`) | `charcoalEffectInPercent`: `10`<br>`disinfectionEffectInPercent`: `10`<br>`epinephrineEffectInPercent`: `10`<br>`morphineEffectInPercent`: `10`<br>`painKillerEffectInPercent`: `10`<br>`staminaDepletionEffectInPercent`: `-10`<br>`staminaRecoveryEffectInPercent`: `-10` | `charcoalEffectInPercent`: `20`<br>`disinfectionEffectInPercent`: `20`<br>`epinephrineEffectInPercent`: `20`<br>`morphineEffectInPercent`: `20`<br>`painKillerEffectInPercent`: `20`<br>`staminaDepletionEffectInPercent`: `-20`<br>`staminaRecoveryEffectInPercent`: `-20` | `charcoalEffectInPercent`: `30`<br>`disinfectionEffectInPercent`: `30`<br>`epinephrineEffectInPercent`: `30`<br>`morphineEffectInPercent`: `30`<br>`painKillerEffectInPercent`: `30`<br>`staminaDepletionEffectInPercent`: `-30`<br>`staminaRecoveryEffectInPercent`: `-30` |
| **Ring of Owl** (`ringOfOwlLevel1..3`) | `flashBangEffectLengthInPercent`: `100`<br>`flashBangEffectIntensityInPercent`: `25`<br>`nightVisionEffect`: `1` | `flashBangEffectLengthInPercent`: `150`<br>`flashBangEffectIntensityInPercent`: `50`<br>`nightVisionEffect`: `1`<br>`nightVisionEffectMaskRemoved`: `1` | `flashBangEffectLengthInPercent`: `200`<br>`flashBangEffectIntensityInPercent`: `75`<br>`nightVisionEffect`: `1`<br>`nightVisionEffectMaskRemoved`: `1`<br>`nightVisionEffectScope`: `1` |
| **Ring of Eagle Eye** (`ringOfEagleEyeLevel1..3`) | `eagleEffectInPercent`: `10`<br>`eagleEffectStopSound`: `1` | `eagleEffectInPercent`: `20`<br>`eagleEffectStopSound`: `1` | `eagleEffectInPercent`: `30`<br>`eagleEffectStopSound`: `1` |
