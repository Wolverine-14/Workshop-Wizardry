const structureTrade = VillagerUtils.createStructureMapTrade([TradeItem.of("minecraft:emerald", 14, 14), 'minecraft:compass'], ['minecraft:ancient_city', 'minecraft:pillager_outpost', 'minecraft:igloo', 'betterdeserttemples:desert_temple', 'betterjungletemples:jungle_temple']);

MoreJSEvents.villagerTrades((event) => {
    /**
     * - `trade`: The trade to add. Read the wiki for more information.
     *
     * `addTrade` returns the trade to set optional data.
     */
    event.addTrade("minecraft:cartographer", 5, structureTrade);
});