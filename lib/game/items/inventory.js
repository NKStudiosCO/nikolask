ig.module('game.items.inventory')

.requires(
    'plusplus.core.config',
    'plusplus.helpers.utils',
    
    'game.items.inventory-item'
)

.defines(function(){ "use strict";
         
    var _c = ig.CONFIG;
    var _u = ig.utils;

    ig.Inventory = ig.global.Inventory = ig.Class.extend({

        numSlots: 6,
        
        items: [],
        
        init: function(settings) {
            settings = settings || {};
            
            this.numSlots = settings.numSlots || 6;
            
            for(var i = 0, il = this.numSlots; i < il; i++)
            {
                this.items[i] = null;
            }
            
            ig.merge(this, settings);
        },
    
        // Adds an item to the inventory.
        // Returns whether it was added.
        addItem: function(item) {
            var i, il,
                firstEmpty = -1;
                
            if(item.stackable)
            {
                for(i = 0, il = this.numSlots; i < il; i++)
                {
                    currSlot = items[i];
                    
                    if(/*check if the items are the same type*/true)
                    {
                        currSlot.stacks += item.stacks;
                        return true;
                    }
                }
            }
                
            for(i = 0, il = this.numSlots; i < il; i++)
            {
                if(this.items[i] === null)
                {
                    firstEmpty = i;
                    break;
                }
            }
            
            if(firstEmpty !== -1)
            {
                this.items[i] = item;
                return true;
            }
            
            return false;
        },
    
        removeSlot: function(index) {
            if(items[index] !== null) {
                items[index] = null;
                return true;
            }
            return false;
        },
    
        numItems: function() {
            return this.items.length;
        }
        
        
    });
});