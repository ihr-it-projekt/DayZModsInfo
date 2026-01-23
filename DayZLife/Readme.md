# DayZ Life Version 2 (RP Framework)

![DayZ Life V2](./DayZLife2Logo.png)

## Steam
Server: https://steamcommunity.com/sharedfiles/filedetails/?id=3196294051 

Client: https://steamcommunity.com/sharedfiles/filedetails/?id=3196291732

## Index

- [**`SettingUpAServer`**](./SettingUpAServer.md)
- [**`Configs`**](./Configs/Readme.md)
- [**`Types`**](./Types.md)
- [**`Keybindings`**](./Keybindings.md)

## Workshop Links:

- [**`DayZ Life`**](https://steamcommunity.com/sharedfiles/filedetails/?id=3196291732)
- [**`DayZ Life - Server`**](https://steamcommunity.com/sharedfiles/filedetails/?id=3196294051)

## Extensions

- [**`TB Revive Mod`**](https://www.themodbase.com/mods/TBRevivePlayer) 
- [**`TB Real Estate Mod`**](https://www.themodbase.com/mods/TBRealEstate) Buy and extend houses.

## Feature List

### General Features

    - Supported languages: All
    - Spawn Menu with job choice
    - Job change is possible at any time without dying (LCTRL + 3)
    - Own money system (but you can still use other currencies)
    - Tax system: a tax is due for each sale at the trader.
    - Money can be stolen from others and deceased players

### Messenger System (LCTRL + 4)

    - Players have a contact book
    - Can exchange contact data via F action
    - Can reply to messages
    - Medics can see where an emergency comes from
    - Send anonymous messages
    - Cops can send messages to all players
    - Must have a personal radio with an active battery to use the message system (configurable)

### Vehicles

    - Key system
    - Last driver can sell vehicles
    - Every vehicle has one owner
    - Every player who has access to vehicles can see the owner of the vehicles
    - Configurable no vehicle collision damage
    - Can be parked in a virtual garage
    - Can be raided
    - Insurance for vehicle damage can be taken at the garage
    - Can be tuned (replace vehicles/parts) via a tuning menu for restricted jobs

### Banking System

    - Pay in / pay out
    - Transfer money via bank
    - Transfer money directly to players
    - Time and player count controlled raids
    - Bank can be raided
    - Bank robbery steals the configured percentage from tax income, so players don't lose any money during a bank robbery.
    - If a player dies, the money will stay with the dead character. Money in the bank will not be touched.

### Trader System

    - Several trader locations
    - Trader can be configured so that they can only be used by specific job groups or by all
    - Dynamic prices for items related to trader storage

### Shop Robbery 
    - Players can rob the shop
    - Cops get a starting notification
    - Cops can get a message where (Map in message menu) the shop is being raided and who the raider is

### Legal and illegal harvest of resources.

      - Coal
      - Iron
      - Copper
      - Cocaine
      - Stones
      - Apple
      - You can define your own harvestable resources
      - (Some) resources can be further processed into goods.

### License System

      - Players require a license to harvest certain resources (can be changed)
      - Players require a license for the further processing of resources (can be changed)

### Job System

    - You can define your own jobs
    - Players can choose a job at spawn, if they have the right to do so
    - Players can change their job at any time
    - Jobs can be configured with different ranks
    - Jobs can be configured with different salaries
    - Jobs can be configured with different spawn equipment
    - Jobs can be configured with different spawn positions
    - Jobs can be configured with different loadouts
    - Jobs can be configured with their own buildings where no other job has access, unless raided with a tool

### Implemented Almanac to figure out what you need/what you can do and how. Short key to open is LCTRL + 1 or LCTRL + RCTRL

    - Display online players per role in Almanac
    - Admins can (via panels in Almanac):
    - In-game delete/reset player data related to our mod
    - Give players the role of different jobs
    - Players that can manage cops can also access all doors and house inventories
    - Give money to players or the bank
    - See details of players in-game
    - Many logs to make admin life easy

### Arrest System

    - Prisoners must stay in range of a specific point (can be manually set in the config) to reduce their arrest time
    - Players can get a paycheck, role-related and configurable

### Cops

    - Can see owner of cars
    - Can arrest players
    - Can open every car
    - Can give players tickets
    - Can see open tickets
    - Can pay back money from a bank robbery; every policeman online at the time gets a percentage

### Medics

    - Have a panel in the Almanac where they can see player emergencies

#### If TB Revive Mod (https://www.themodbase.com/mods/TBRevivePlayer) is installed

    - Before a player dies, they get a menu to decide between being healed by a medic, healed by a hospital, or dying.
    - Medics can heal other players
    - Get money when they heal a player
    - Get a message when there is a new emergency

### Army

    - Can arrest players

### Faction System (LCTRL + 6)

    - Players can create a faction; currently there are the following access rights managed by faction:
        - Access to faction garage
        - Access to faction bank account (pay in and amount is visible)
        - Can take money from faction bank account
