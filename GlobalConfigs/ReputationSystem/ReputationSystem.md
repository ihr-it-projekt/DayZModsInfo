# Reputation System TB Mods

## How to add Points to player reputation from other mods

Reputation can only be added from Serverside, if you call this functions from the Client, it will throw an error!

Here are the server-side functions to add points to a player's reputation:

```c++
class TBLibPlayerReputationStore {

    static TBLibPlayerReputationStore Get() {}

    /**
     * @brief Gets the points of a player.
     * @param playerUID The UID of the player.
     * @return The points of the player.
     */
    int GetPoints(string playerUID) {}

    /**
     * @brief Gets the points of a player.
     * @param identity The identity of the player.
     * @return The points of the player.
     */
    int GetPoints(PlayerIdentity identity) {}

    int GetPoints(PlayerBase player) {}

    /**
     * @brief Adds points to a player's reputation and sync to player if he is online.
     * @param playerUID The UID of the player.
     * @param amount The amount of points to add. This value can be negative to remove points.
     * @return The new total points of the player.
     */
    int AddPoints(string playerUID, int amount) {}

    /**
     * @brief Adds points to a player's reputation and sync to player if he is online.
     * @param identity The identity of the player.
     * @param amount The amount of points to add. This value can be negative to remove points.
     * @return The new total points of the player.
     */
    int AddPoints(PlayerIdentity identity, int amount) {}

    /**
     * @brief Adds points to a player's reputation and sync to player if he is online.
     * @param player The player.
     * @param amount The amount of points to add. This value can be negative to remove points.
     * @return The new total points of the player.
     */
    int AddPoints(PlayerBase player, int amount) {}
}
```

As you can see, you can use different parameters to add points to a player's reputation. This is very useful for modding, as you can add points to a player's reputation from different events.

## Examples

```c++
class YourClass {

    // You method can be anywhere in your code, here are some examples how you could use it
    void DoSomethingPlayerBase(PlayerBase player) {
        // ifdef TBDynamicTraderServer will ensure that the code will only compile if the server part of the mod is loaded.
        #ifdef TBDynamicTraderServer
        // Get the singleton instance of the reputation store and add points to the player.
        TBLibPlayerReputationStore.Get().AddPoints(player, 10);
        #endif
    }

    void DoSomethingPlayerIdentity(PlayerIdentity identity) {
        #ifdef TBDynamicTraderServer
        TBLibPlayerReputationStore.Get().AddPoints(identity, 10);
        #endif
    }

    void DoSomethingPlayerUID(string playerUID) {
        #ifdef TBDynamicTraderServer
        TBLibPlayerReputationStore.Get().AddPoints(playerUID, 10);
        #endif
    }

    // If you need to get the points of a player, you can use the following functions:

    int DoSomethingWithGetPlayerPointsByPlayerBase(PlayerBase player) {
        #ifdef TBDynamicTraderServer
        return TBLibPlayerReputationStore.Get().GetPoints(player);
        #endif
        return 0;
    }

    int DoSomethingWithGetPlayerPointsByPlayerIdentity(PlayerIdentity identity) {
        #ifdef TBDynamicTraderServer
        return TBLibPlayerReputationStore.Get().GetPoints(identity);
        #endif
        return 0;
    }

    int DoSomethingWithGetPlayerPointsByPlayerUID(string playerUID) {
        #ifdef TBDynamicTraderServer
        return TBLibPlayerReputationStore.Get().GetPoints(playerUID);
        #endif
        return 0;
    }

}
```