LootJS.modifiers((event) => {
  event.addLootTableModifier('betterdeserttemples:chests/pharaoh_hidden').randomChance(0.25).addLoot('endrem:old_eye');
  //event.addLootTableModifier('betterdeserttemples:chests/library').randomChance(0.).addLoot(LootEntry.of('hexcasting:scroll').addNBT('{op_id:"hexal:wisp/consume"}'));
  //event.addLootTableModifier('betterdeserttemples:chests/pharaoh_hidden').randomChance(0.5).addLoot('hexcasting:scroll');
});