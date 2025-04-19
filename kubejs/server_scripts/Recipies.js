ServerEvents.recipes(e => { 
    e.recipes.create.filling('netherrack', [Fluid.of('water', FluidAmounts.MB*12), 'magma_block'])
    e.recipes.create.filling('magma_block', [Fluid.of('lava', FluidAmounts.MB*6), 'blackstone'])
    e.recipes.create.mixing('diorite',['cobblestone','#c:quartz'])
    e.recipes.create.mixing('calcite',['andesite','diorite','granite']).heated()
    e.shaped('4x hexcasting:slate_bricks', 
      [// arg 1: output
        'AA ', 
        'AA ', // arg 2: the shape (array of strings)
        '   '  
      ], {
        A: 'hexcasting:slate_block'
      }
    )
    e.shaped('4x hexcasting:slate_tiles', 
      [// arg 1: output
        'AA ', 
        'AA ', // arg 2: the shape (array of strings)
        '   '  
      ], {
        A: 'hexcasting:slate_bricks'
      }
    )

    e.custom({
        type: 'liquidburner:liquidburning',
        fluid: 'create_modular_tools:molten_iron',
        burntime: 5000,
        superheattime: 3200
      })
      e.custom({
        type: 'liquidburner:liquidburning',
        fluid: 'create_modular_tools:molten_copper',
        burntime: 5000,
        superheattime: 3200
      })
      e.custom({
        type: 'liquidburner:liquidburning',
        fluid: 'create_modular_tools:molten_gold',
        burntime: 5000,
        superheattime: 3200
      })
      e.custom({
        type: 'liquidburner:liquidburning',
        fluid: 'create_modular_tools:molten_netherite',
        burntime: 5000,
        superheattime: 3200
      })
      e.custom({
        type: 'liquidburner:liquidburning',
        fluid: 'create_modular_tools:molten_zinc',
        burntime: 5000,
        superheattime: 3200
      })
      e.custom({
        type: 'liquidburner:liquidburning',
        fluid: 'create_modular_tools:molten_brass',
        burntime: 5000,
        superheattime: 3200
      })
      e.custom({
        type: 'liquidburner:liquidburning',
        fluid: 'create_modular_tools:molten_diamond',
        burntime: 5000,
        superheattime: 3200
      })

      e.custom({
        type: "runic_enchanting:rune_enchanting",
        book: {
          item: "minecraft:book"
        },
        target: {
          item: "runic_enchanting:equipment_rune_page"
        },
        primary: {
          item: "runic_enchanting:air_rune_page"
        },
        secondary: {
          item: "runic_enchanting:inventory_rune_page"
        },
        lapis_count: 3,
        exp_amount: 6,
        result: {
          item: "minecraft:enchanted_book"
        },
        enchantment: "create:capacity",
        level: 1,
        generate_additional_leveled_recipes: true
      })
      e.custom({
        type: "runic_enchanting:rune_enchanting",
        book: {
          item: "minecraft:book"
        },
        target: {
          item: "runic_enchanting:melee_rune_page"
        },
        primary: {
          item: "runic_enchanting:spirit_rune_page"
        },
        secondary: {
          item: "runic_enchanting:earth_rune_page"
        },
        lapis_count: 3,
        exp_amount: 6,
        result: {
          item: "minecraft:enchanted_book"
        },
        enchantment: "deeperdarker:catalysis",
        level: 1,
        generate_additional_leveled_recipes: true
      })
      e.custom({
        type: "runic_enchanting:rune_enchanting",
        book: {
          item: "minecraft:book"
        },
        target: {
          item: "runic_enchanting:armor_rune_page"
        },
        primary: {
          item: "runic_enchanting:time_rune_page"
        },
        secondary: {
          item: "runic_enchanting:cunning_rune_page"
        },
        lapis_count: 3,
        exp_amount: 6,
        result: {
          item: "minecraft:enchanted_book"
        },
        enchantment: "betterend:end_veil",
        level: 1,
        generate_additional_leveled_recipes: true
      })
      e.custom({
        type: "runic_enchanting:rune_enchanting",
        book: {
          item: "minecraft:book"
        },
        target: {
          item: "runic_enchanting:range_rune_page"
        },
        primary: {
          item: "runic_enchanting:preservation_rune_page"
        },
        secondary: {
          item: "runic_enchanting:luck_rune_page"
        },
        lapis_count: 3,
        exp_amount: 6,
        result: {
          item: "minecraft:enchanted_book"
        },
        enchantment: "create:potato_recovery",
        level: 1,
        generate_additional_leveled_recipes: true
      })
      e.custom({
        type: "runic_enchanting:rune_enchanting",
        book: {
          item: "minecraft:book"
        },
        target: {
          item: "runic_enchanting:melee_rune_page"
        },
        primary: {
          item: "runic_enchanting:damage_rune_page"
        },
        secondary: {
          item: "runic_enchanting:force_rune_page"
        },
        extra: {
          item: "runic_enchanting:destruction_rune_page"
        },
        lapis_count: 3,
        exp_amount: 6,
        result: {
          item: "minecraft:enchanted_book"
        },
        enchantment: "deeperdarker:sculk_smite",
        level: 1,
        generate_additional_leveled_recipes: true
      })
      e.custom({
        type: "runic_enchanting:rune_enchanting",
        book: {
          item: "minecraft:book"
        },
        target: {
          item: "runic_enchanting:inventory_rune_page"
        },
        primary: {
          item: "runic_enchanting:force_rune_page"
        },
        secondary: {
          item: "runic_enchanting:preservation_rune_page"
        },
        lapis_count: 3,
        exp_amount: 6,
        result: {
          item: "minecraft:enchanted_book"
        },
        enchantment: "soulbound:soulbound",
        level: 1,
        generate_additional_leveled_recipes: true
      })
})