ig.module('game.items.items')

.requires(
    'plusplus.helpers.utils',
    
    'game.items.ground-item'
)

.defines(function () { "use strict";
    var _ut = ig.utils;
    
    ig.items = {
        Axe: {
            spriteSize: {x: 24, y: 24},
            spriteOffset: {x: 4, y: 6},
            spritePath: 'img/item-axe.png',
            iconSize: {x: 24, y: 24},
            iconOffset: {x: 4, y: 6},
            iconPath: 'img/item-axe.png',
            
            name: "Axe",
            stackable: false,
            stacks: 1,
            value: 15
        }
    };
    
    ig.items.g2i = function(groundItem) {
        return ig.items.getItemFromName(groundItem.displayName);
    };
    
    ig.items.i2g = function(inventoryItem) {
        return ig.items.n2g(inventoryItem.displayName);
    };
    
    ig.items.n2i = function(name) {
        return new ig.InventoryItem(n2s_i);
    };
    
    ig.items.n2g = function(name) {
        return new ig.GroundItem(n2s_g);
    };
    
    ig.items.n2s_i = function(name) {
        var data = ig.items.getDataFromName(name);
        
        var settings = {
            size: data.iconSize,
            offset: data.iconOffset,
            animSheetPath: data.iconPath,
            displayName: data.name,
            stackable: data.stackable,
            stacks: data.stacks,
            value: data.value,
        };
        
        return settings;
    };
    
    ig.items.n2s_g = function(name) {
        var data = ig.items.getDataFromName(name);
        
        var settings = {
            size: data.spriteSize,
            offset: data.spriteOffset,
            animSheetPath: data.spritePath,
            displayName: data.name,
            stackable: data.stackable,
            stacks: data.stacks,
            value: data.value,
        };
        
        return settings;
    };
    
    ig.items.getDataFromName = function(name) {
        return _ut.indexOfProperty(ig.items, "displayName", name);
    };
});