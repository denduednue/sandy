


elements.mustard_gas = {
    color: "#ddcb1c",
    behavior: behaviors.GAS,
    temp: 110,
    category: "Mods",
    viscosity: 27,
    tempHigh: 1000,
    stateHigh: ["air, water"],
    tempLow: 100,
    stateLow: "mustard", 
    state: "gas",
    density: 200,
	reactions: {
        "head": { // React with (water reacts with dirt to make mud)
            elem1: null, // First element transforms into; in this case, water deletes itself
            elem2: "bomb", // Second element transforms into; in this case, funny powder turns to funny powder bag
        	},
	},
};

elements.mustard = {
    color: "#ddcb1c",
    behavior: behaviors.LIQUID,
    temp: 26,
    category: "Mods",
    viscosity: 500,
    tempHigh: 100,
	stateHigh: "mustard_gas",
    tempLow: 15,
    stateLow: "mustard_ice", 
    state: "liquid",
    density: 1000,
};	



elements.mustard_ice = {
    color: "#FFBF00",
    behavior: behaviors.SOLID,
    temp: 0,
    category: "Mods",
    tempHigh: 1,
	stateHigh: "mustard",
    tempLow: -20,
	stateLow: "mustard_ice",
    state: "solid",
    density: 20,
};

elements.funny_powder = {
	color: "#ffffff",
	behavior: behaviors.POWDER,
	category: "Mods",
	state: "powder",
	temp: 69,
	fireColor: "blue",
	burnTime: 10,
	tempHigh: 500,
	stateHigh: "supernova",
    breakInto: ["sand","gravel"],
	reactions: {
        "coffee": { // React with (water reacts with dirt to make mud)
            elem1: null, // First element transforms into; in this case, water deletes itself
            elem2: "funny_coffee", // Second element transforms into; in this case, funny powder turns to funny powder bag
        	},
        "chicken": { // React with (funny powder bag reacts with head to make firewrok)
            elem1: null, // First element transforms into; in this case, funny powder bag turns into fire
            elem2: "firework", // Second element transforms into; in this case, funny powder bag turns to firework 
			},
	},
};



elements.plastic_bag = {
	color: "#ADD8E6",
	behavior: behaviors.POWDER,
	category: "Mods",
	state: "solid",
	temp: 20,
	tempHigh: 100,
	stateHigh: "molten_plastic",
	reactions: {
        "funny_powder": { // React with (water reacts with dirt to make mud)
            elem1: null, // First element transforms into; in this case, water deletes itself
            elem2: "funny_powder_bag", // Second element transforms into; in this case, funny powder turns to funny powder bag
        	},
	},
};

elements.funny_powder_bag = {
	color: "#E4F2F7",
	behavior: behaviors.POWDER,
	category: "Mods",
	state: "solid",
	temp: 20,
	tempHigh: 250,
	stateHigh: "bomb",
	reactions: {
        "head": { // React with (funny powder bag reacts with head to make firewrok)
            elem1: null, // First element transforms into; in this case, funny powder bag turns into fire
            elem2: "firework", // Second element transforms into; in this case, funny powder bag turns to firework 
			},
	},
};

elements.lol_no = {
	hardness: 1,
    color: "#ff0000",
	category: "Mods",
    tick: function(pixel) {
        var t = pixelTicks/2+pixel.x+pixel.y;
        var r = Math.floor(127*Math.sin(t/1.5));
        pixel.color = "rgba("+r*3+","+r*0+","+r*0+","+r/127+")";
    },
}
	

elements.funny_coffee = {
    color: "#C4A484",
    behavior: behaviors.LIQUID,
    temp: 75,
    category: "Mods",
    viscosity: 27,
    tempHigh: 200,
    stateHigh: ["steam", "fragrance"],
    tempLow: 4,
    stateLow: "funny_powder", 
    state: "liquid",
    density: 308
};

elements.funny_chicken = {
    color: "#C4A484",
    behavior: behaviors.POWDER,
    temp: 75,
    category: "Mods",
    viscosity: 27,
    tempHigh: 200,
    tempLow: 4,
    density: 308,

};


        // Element Properties
        // name - display name of the element [optional]
        // color - color of the element's pixel
        // behavior - behavior of the element
        // ignore - elements to ignore in behavior [must be an array]
        // category - category in which the element will show up in
        // density - density of the element [only used for movable elements] (kg/m^3)
        // state - solid, liquid, or gas [only used for movable elements]
        // reactions - instructions for when elements attempt to move onto each other (object)
        // conduct - conductivity of the element (0-1)
        // behaviorOn - behavior to override when powered
        // colorOn - color to change to when powered
        // temp - default temperature of the element (Celsius)
        // tempHigh - highest temperature before state change (Celsius)
        // tempLow - lowest temperature before state change (Celsius)
        // stateHigh - element transformed into when tempHigh is reached
        // stateLow - element transformed into when tempLow is reached
        // viscosity - how slow a liquid will move (higher = slower) (cps)
        // burn - chance of burning per tick (0-100) (%)
        // burnTime - time to burn (ticks)
        // burnInto - element to turn into after burning
        // fireColor - color of the flame given off when burning
        // burning - whether the element is burning on creation
        // charge - charge of the element on creation
        // hardness - chance of resisting damage (0-1)
		// breakInto - wat element to break into wen the "smash" tool is used
