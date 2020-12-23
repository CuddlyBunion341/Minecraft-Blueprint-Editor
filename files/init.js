var BlueprintEditor = {};

BlueprintEditor.CanvasObject = {
    "canvas":"",
    "ctx":"",
    "overlay_canvas":"",
    "overlay_ctx":"",
    "pwidth":1024,
    "pheight":1024,
    "cwidth":2048,
    "cheight":2048,
    "sqr_side":128,
    "line_width":4
}
BlueprintEditor.GridObject = {
    "width":16,
    "height":16,
    "current_y":0,
    cellcord: function(x,z) {
        return "c" + x + "x" + z;
    },
    layer: function(y) {
        return "l" + y;
    },
    splitcord: function(cellcord) {
        cellcord = cellcord.substring(1);
        cellcord = celllcord.split("x");
        let x = parseInt(cellcord[0]);
        let z = parseInt(cellcord[1]);
        return {"x":x, "z":z};
    },
    setblock: function(cellcord,layer,block) {
        if (block == 0) {
            try {
                delete this.Cells[layer][cellcord]
                if (Object.keys(this.Cells[layer]).length == 0) {
                    delete this.Cells[layer];
                }
            }
            catch {
            }
            return;
        }
        if (!this.Cells[layer]) {
            this.Cells[layer] = {};
        }
        this.Cells[layer][cellcord] = block;
    },
    getblock: function(cellcord,layer) {
        if (!(this.Cells[layer] && this.Cells[layer][cellcord])) {
            return 0;
        }
        return this.Cells[layer][cellcord];
    },
    "Cells": {
        "l0":{
            "c0x0":1,
            "c1x0":1,
            "c2x0":1,
            "c3x1":2,
            "c5x5":3
        },
        "l1":{
            "c0x1":9,
            "c7x0":10
        }
    }
}