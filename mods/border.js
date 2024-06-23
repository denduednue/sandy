elements.red = {
	noMix: true,
	hardness: 1,
    color: "#ff0000",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*3+","+r*0+","+r*0+","+r/127+")";
    },
}

elements.orange = {
    noMix: true,
	hardness: 1,
    color: "#FFA500",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*255+","+r*1+","+r*0+","+r/127+")";
    },
}

elements.yellow = {
    noMix: true,
	hardness: 1,
    color: "#FFFF00",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*255+","+r*255+","+r*0+","+r/127+")";
    },
}

elements.green = {
    noMix: true,
	hardness: 1,
    color: "#008000",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*0+","+r*4+","+r*0+","+r/127+")";
    },
}

elements.blue = {
	hardness: 1,
    color: "#0000FF",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*1+","+r*1+","+r*5+","+r/127+")";
    },
}

elements.purple = {
    noMix: true,
	hardness: 1,
    color: "#800080",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*255+","+r*0+","+r*255+","+r/127+")";
    },
}

elements.pink = {
    noMix: true,
	hardness: 1,
    color: "#FFC0CB",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*255+","+r*1.8+","+r*148+","+r/127+")";
    },
}

elements.white = {
    noMix: true,
	hardness: 1,
    color: "#ffffff",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*5+","+r*5+","+r*5+","+r/127+")";
    },
}

elements.gray = {
    noMix: true,
	hardness: 1,
    color: "#808080",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*1+","+r*1+","+r*1+","+r/127+")";
    },
}


elements.clear = {
	noMix: true,
	hardness: 1,
    color: "#000000",
	category: "Borders",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*0+","+r*0+","+r*0+","+r/127+")";
    },
}