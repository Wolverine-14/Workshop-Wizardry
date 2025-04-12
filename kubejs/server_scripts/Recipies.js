ServerEvents.recipes(e => { 
    e.recipes.create.filling('netherrack', [Fluid.of('water', FluidAmounts.MB*12), 'magma_block'])
    e.recipes.create.filling('magma_block', [Fluid.of('lava', FluidAmounts.MB*6), 'blackstone'])
    e.custom
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
})