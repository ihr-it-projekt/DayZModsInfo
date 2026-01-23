# TB War Party

![TB War Party](./Images/TBWP_Cover.jpg)

## Description

Players can participate in various fights in an arena, either in teams or against each other, with numerous configuration possibilities. 

## Shop Link

https://www.themodbase.com/mods/TBWarParty

## Support

If you need any support, please open a ticket here: https://discord.gg/kGjN6gJy3m

## Youtube

https://youtu.be/KUnfQ191dW4

## Tools

### Arena Building Converter

- `.c` file to WarParty format converter: [Readme.md](Tools/Converter/CConverter/Readme.md)
- `.json` file to WarParty format converter: [Readme.md](Tools/Converter/JSONConverter/Readme.md)

## Features

- Match Modes:
  - Team Fights
  - All against All (Free-for-All)
- Match Creation:
  - Admins can create permanent lobbies for matches. These lobbies persist through server restarts and reset the match when no player is in the lobby or the match ends. 
  - Players can create their own matches (if permitted by the admin).
  - Options:
    - Select arena 
    - Match mode
    - Number of rounds
    - Round length
    - Min/max players
    - Number of teams
    - Max kills per round
    - Pre-configured gear sets for the match
    - Team markers (so players can see teammates)
    - Toggle stamina
    - Toggle friendly fire
    - Toggle spectator mode
    - Option to prevent players from using spectator mode while a match is running
    - Toggle first-person mode
    - Toggle one-life mode
    - Team auto-balancing option
    - Option to prevent players from joining a match after it has started
    - Entry fee
    - Option to delete gear immediately upon death (prevents looting dead players)
- Friendly fire does not count towards points
- Available Configuration Options for Matches:
  - Arena buildings
  - Number of rounds per match
  - Max round time
  - Max kills per round
  - Win rates for matches with an entry fee
  - Gear sets:
    - Create your own custom gear sets
    - Choose multiple gear sets for a match
    - Restrict a match to a single gear set
    - Configure quick-bar positions for gear set items
  - Gear sets can be assigned to teams in the Game Creation menu
  - Spawn positions for players/teams
  - Max number of teams that can join a match
  - Player health
  - Player shield:
    - Shields regenerate after a period of time if the player avoids taking damage
  - Countdowns:
    - Match start
    - Round start
    - Match end
  - Death penalty times: players must wait a configured duration before respawning
  - Toggle stamina option for the arena 
  - Toggle friendly fire for the arena 
  - Option to make new players spawn exclusively in the Main Lobby Building (prevents wandering the map and fleeing the lobby)
- Players can enter the main lobby via the Lobby Entry Point or by pressing a hotkey from anywhere (hotkey can be disabled).
- You can build your own arena using the DayZ Editor.
- Arena building(s) load with the mod.
- Mod client package includes pre-created arenas.
- Kill Feed
- Global Server Statistics (Leaderboard for Kills, Deaths, Points, Matches Won, Matches Played, Rounds Played). These statistics are updated after every match.
- Notification after a match ends showing the amount of money won.
- Scoring System:
  - Player hit points
  - Team hit points
  - Player kills
  - Team kills
  - Personal deaths
- Statistics are displayed at the end of each match.
- Overlays:
  - Shield and health bars 
  - Players and their kill counts 
  - Round info: Time remaining, max kills, round number, and team kills.
- Normalizes various states when a player joins a lobby or match (resets sick states, cuts, hunger, thirst, fever, etc.).
- Admin Actions:
  - Reload config in-game.
  - Disable match creation for non-admin players.
  - Delete matches at any time.
  - Teleport to the arena from the lobby menu.
  - Add/remove spawn positions for teams via F action.
- Arenas are cleared of dropped gear after each round. 
- Kills from deployable objects (mines/traps) count for the player who placed them.
- Road kills by cars count for the driver.
- Discord Webhook Logging: Kill feed, match creation, match start, and match winners.

## Supported Mods
- PVEZ (Reloaded)
- LBMaster Advanced Groups (Team tags and safe zone markers are hidden during matches)
- TerjeMedicine (Players do not get sick in the arena)
- MuchPVE

## Planned Features

- Mechanic to prevent non-combat players from entering the arena from outside
- Option for players to disable new match notifications
- Consumables like health packs and shield sticks
- Restrict gear sets and arenas based on player points


## How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and add it to your own server-side pack.
- Take the Client PBO and the TBLib PBO and add them to your own client pack. Publish this pack on Steam.
- Start the server for the first time and wait for it to fully boot.
- Shut down the server.
- Config files are created in `YourServerProfilesFolder\TBMods\Config\TBWarParty`.
- Configure your needs.
- Start your server again :-)
