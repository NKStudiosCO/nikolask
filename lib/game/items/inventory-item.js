ig.module('game.items.inventory-item')

.requires(
    'impact.impact'
)

.defines(function() { "use strict";

    ig.InventoryItem = ig.Class.extend({

        // item data
        
        displayName: "default_string",
        
        stackable: false,
        stacks: 1,
        
        value: 0,

        init: function(settings) {
            ig.merge(this, settings);
        }
    });
});