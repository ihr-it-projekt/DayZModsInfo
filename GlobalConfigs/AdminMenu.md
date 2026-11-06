# TBLib Administration Menu

The TBLib Administration Menu provides a unified, graphical management interface for server administrators. It uses the same user interface design as the TBCarDealer menu, with category tabs on the left, a searchable records list, and a clean parameter form on the right.

## Access & Permissions

The administration action is available on any `TBLIBBaseMachine` (and derived mod objects such as BasicNeeds washing machines or dryers).

- **`configAdmin`**: Grants full access to all four administration sections (**Reputation**, **Admin Permissions**, **Premium Users**, and **Currency Config**).
- **`reputationAdmin`**: Grants access only to the **Reputation** section.

Permissions are configured in [`AdminConfig.json`](AdminConfig.md) under your server profile folder (`TBMods\Config\Global\AdminConfig.json`).

### Opening the Menu
Aim at a `TBLIBBaseMachine` in-game and select the interaction action **[Admin] TBLib Administration**.

---

## Navigation & Record Selection

The left column contains four main section tabs:
1. **Reputation**
2. **Admin config**
3. **Premium users**
4. **Currency config**

### Selecting a Player or Record
- **Online & Offline Players**: The user directory automatically combines active online players, known offline players, and existing config records. Known Steam IDs (17 digits) and DayZ IDs (44 characters) for the same player are linked together.
- **Search**: Enter a player name or ID in the search box to filter the list in real-time.
- **Single-Click Selection**: Clicking an entry immediately selects and loads that record into the editor on the right.
- **Active Record Highlight**: The currently selected record is highlighted in bright cyan text and list selection.
- **Open / Create by ID**: Enter any valid 17-digit Steam ID or 44-character DayZ ID in the input field below the list and click **Open / create** to manage a player who has not joined the server yet.

---

## Administration Sections

### 1. Reputation
- **Reputation Points**: View and edit the shared player reputation points for the selected player.
- Accepts any integer value.

### 2. Admin Config
- **Permissions**: Provides checkboxes for all 16 mod administration permissions:
  - `configAdmin` (Full TBLib Admin Menu access)
  - `reputationAdmin` (Reputation management)
  - `dailyRewardAdmin`
  - `realEstateAdmin`
  - `carDealerAdmin`
  - `basicNeedsAdmin`
  - `deathInsurance`
  - `secondHandMarket`
  - `revivePlayer`
  - `jewelsOfSurvival`
  - `warParty`
  - `carry`
  - `dynamicDealer`
  - `survivorLuck`
  - `staticLightsAdmin`
  - `vehicleLockSystem`
- **Notes**: Free-text field to store admin notes or player names.
- **Self-Revocation Protection**: An administrator cannot accidentally remove their own `configAdmin` right while editing their own profile.

### 3. Premium Users
- **Expiration Dates**: Displays the current expiration date for each supported premium mod:
  - Daily Reward
  - Death Insurance
  - Car Dealer
  - Dynamic Trader
  - Second Hand Market
  - Revive
- **Extend Expiration (+30 Days)**: One-click extension by 30 days from the current expiration date (or starting from today if expired).
- **Custom Duration (+ X Days)**: Enter a duration between 1 and 3650 days and click **+ Days**.
- **Revoke**: Revoke premium status for an individual mod or click **Revoke all premium roles** to clear all roles at once.
- **Offline & New Players**: Full support for editing players even if they do not yet have an existing premium profile file on disk.

### 4. Currency Config
- **Currencies List**: Browse all configured currencies (e.g. `default`, `Ruble`, `Euro`).
- **Create New Currency**: Enter a unique name in the lower field and click **Open / create**.
- **Settings**:
  - `Unique name`: Unique internal identifier (the `default` currency is protected and cannot be renamed).
  - `Display name`: In-game name displayed to players.
  - `LBMaster ATM`: Enable/disable integration with LBMaster ATM.
  - `DC Banking`: Enable/disable integration with DC Banking.
- **Currency Items & Values**:
  - Each item class has a case-sensitive classname input and an integer value.
  - Add new rows using **Add currency item / value**.
  - Remove existing rows using the compact red **X** button.

---

## Saving & Safety Features

- **Save Configuration**: Click the gold **Save configuration** button at the bottom right to apply changes.
- **Discard Changes**: Click **Discard changes** to reset fields to the state when the record was opened.
- **Unsaved Changes Warning**: If you attempt to switch tabs or select another player while there are unsaved edits, the menu alerts you to save or discard first.
- **Conflict Detection**: If another administrator or external API modifies the same record simultaneously, a conflict error prevents overwriting; you are prompted to discard and reload.
- **Automatic Backups**: When configurations are saved, the server creates a `.admin.bak` backup file before replacing the target file on disk.
