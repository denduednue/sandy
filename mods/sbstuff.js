elements.cooked_rice = {
	viscosity: 1000,
	tempMin: 20,
	stateMin: "rice",
	tempHigh: 500,
	stateHigh: ["ash", "charcoal"],
	density: 699,
	color: "#c2b6b6",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
	reactions: {
		"water": { elem1: null, elem2: "dirty_water" }
	}
};

elements.rice = {
	breakInto: "flour",
	viscosity: 10000,
	isFood: true,
	density: 696,
	tempHigh: 232,
	stateHigh: "cooked_rice",
	color: "#c8c8c8",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
};

elements.moth = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#57381a",
	behavior: behaviors.FLY,
	category: "life",
	state: "solid",
};

elements.cotton_candy = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	density: 1000,
	color: "#b6c7e3",
	behavior: behaviors.POWDER,
	category: "food",
	state: "liquid",
	reactions: {
		"water": { elem1: "sugar", elem2: null },
	}
};

elements.mc_donalds = {
	tempHigh: 6969,
	stateHigh: "void",
	density: 69,
	color: "#ff0000",
	behavior: behaviors.STURDYPOWDER,
	category: "joke",
	state: "solid",
};

elements.maple_syrup = {
	viscosity: 10000,
	isFood: true,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#9c6000",
	behavior: behaviors.LIQUID,
	category: "liquids",
	state: "liquid",
};

elements.boiled_egg = {
	isFood: true,
	density: 700,
	breakInto: "yolk",
	tempHigh: 500,
	stateHigh: "ash",
	color: "#fff9d1",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.dark_oak = {
	breakInto: "dark_oak_wood",
	tempHigh: 500,
	stateHigh: "ash",
	color: "#302216",
	behavior: behaviors.WALL,
	category: "solids",
	state: "solid",
	burn: 5,
	burnTime: 300,
};

elements.dark_oak_wood = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#573e28",
	behavior: behaviors.SUPPORT,
	category: "land",
	state: "solid",
	burn: 5,
	burnTime: 300,
};

elements.avocado = {
	isFood: true,
	tempHigh: 500,
	breakInto: "guacamole",
	stateHigh: "ash",
	color: "#254a22",
	behavior: behaviors.SUPPORTPOWDER,
	category: "food",
	state: "liquid",
};

elements.guacamole = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#a2e09d",
	behavior: behaviors.POWDER,
	category: "food",
	state: "liquid",
};

elements.watermelon = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	breakInto: "watermelon_flesh",
	color: "#40993f",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.melon = { //this one is kind of boring ngl it looks like a sponge but its food
	isFood: true,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#c4bf1f",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.watermelon_flesh = {
	hidden: true,
	isFood: true,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#ff5d47",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.nachos = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#bd7b26",
	behavior: behaviors.SUPPORTPOWDER,
	category: "food",
	state: "solid",
};

elements.cherry = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#ff0f0f",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.green_berries = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#5ce344",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.meth = {
	hardness: 1,
	tempHigh: 500,
	stateHigh: "melted_meth",
	color: "#0affef",
	behavior: behaviors.POWDER,
	category: "joke",
	state: "liquid"
};

elements.garlic = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#ffebbd",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
	reactions: {
		"bread": { elem1: null, elem2: "garlic_bread" },
	}
};

elements.garlic_bread = {
	isFood: true,
	breakInto: "crumb",
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#db9b56", "#288a0c", "#db9b56", "#db9b56", "#db9b56", "#db9b56"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.kiwi = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#210a00"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.lemon = {
	breakInto: "lemonade",
	tempHigh: 500,
	stateHigh: "steam",
	color: "#c9c22a",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
	reactions: {
        "juice": {elem1: "lemonade", elem2: null},
    }
};

elements.lemonade = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#fff41c",
	behavior: behaviors.LIQUID,
	category: "liquids",
	state: "liquid",
};

elements.poop = {
	hardness: 1,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#331600",
	behavior: behaviors.STURDYPOWDER,
	category: "joke",
	state: "solid",
	reactions: {
		"piss": { elem1: null, elem2: "bless" },
	}
};

elements.marshmallow = {
	isFood: true,
	tempHigh: 50,
	stateHigh: "cooked_marshmallow",
	color: "#ffe4e3",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.cooked_marshmallow = {
	hidden: true,
	isFood: true,
	tempHigh: 150,
	stateHigh: "burnt_marshmallow",
	color: "#d49e9d",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.burnt_marshmallow = {
	hidden: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#1c1212",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.spaghetti = {
	isFood: true,
	tempHigh: 90,
	stateHigh: "cooked_ramen",
	color: "#fae34d",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.cooked_spaghetti = {
	hidden: true,
	density: 800,
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#ada24e",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.cereal = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#ba3425", "#baa31e", "#26ba1e", "#1e9dba", "#6f1eba"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.sushi = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#020802", "#fff0eb", "#ff6524", "#35ab26"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.diamond_ore = {
	tempHigh: 1000,
	stateHigh: "ash",
	breakInto: "diamond",
	color: ["#525252", "#525252", "#525252", "#525252", "#525252", "#2ba3ff"],
	behavior: behaviors.WALL,
	category: "joke",
	state: "solid",
};

elements.coca_cola = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#381e13",
	behavior: behaviors.LIQUID,
	category: "liquids",
	state: "liquid",
};

elements.piss = {
	tempHigh: 500,
	stateHigh: "steam",
	color: "#ffff00",
	behavior: behaviors.LIQUID,
	category: "joke",
	state: "liquid",
};

elements.soup = {
	isFood: true,
	temp: 100,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#945e00",
	behavior: [
		"XX|CR:steam%0.1|XX",
		"M2|XX|M2",
		"M2|M1|M2"
	],
	category: "liquids",
	state: "liquid",
};

elements.pastry = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#ba6727",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.melted_meth = {
	tempHigh: 100000,
	stateHigh: "beans",
	color: "#00a2ff",
	behavior: behaviors.LIQUID,
	category: "joke",
	state: "solid",
};

elements.expired_milk = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#b8c2b4",
	behavior: behaviors.LIQUID,
	category: "liquids",
	state: "solid",
	reactions: {
		"dirty_water": { elem1: "milk", elem2: "expired_milk" },
		"milk": { elem1: "expired_milk", elem2: "milk" },
		"water": { elem1: "milk", elem2: "dirty_water" },
	}
};

elements.kfc = {
	tempHigh: 69420,
	stateHigh: "void",
	color: "#d16e11",
	behavior: behaviors.STURDYPOWDER,
	category: "joke",
	state: "solid",
};

elements.wendys = {
	tempHigh: 69420,
	stateHigh: "void",
	color: "#db1e0d",
	behavior: behaviors.STURDYPOWDER,
	category: "joke",
	state: "solid",
};

elements.burger_king = {
	tempHigh: 69420,
	stateHigh: "void",
	color: "#db660d",
	behavior: behaviors.STURDYPOWDER,
	category: "joke",
	state: "solid",
};

elements.pizza_hut = {
	tempHigh: 69420,
	stateHigh: "void",
	color: "#ed3b24",
	behavior: behaviors.STURDYPOWDER,
	category: "joke",
	state: "solid",
};

elements.dominos = {
	tempHigh: 69420,
	stateHigh: "void",
	color: ["#ed4934", "#3494ed"],
	behavior: behaviors.STURDYPOWDER,
	category: "joke",
	state: "solid",
};


elements.vape = {
	tempHigh: 500999,
	stateHigh: "beans",
	color: "#999999",
	behavior:  [
        "XX|CR:smoke|XX",
        "CR:smoke|XX|CR:smoke",
        "XX|CR:smoke|XX",
    ],
	category: "joke",
	state: "solid",
};

elements.tendon = {
	temp: 20000,
	color: ["#1eff00", "#1eff00", "#1eff00", "#acffa1", "#1eff00", "#1eff00", "#1eff00"],
	behavior: behaviors.DGAS,
	category: "energy",
	state: "gas",
};

elements.plasma.tempHigh = 18000
elements.plasma.stateHigh = "tendon"

elements.pea = {
	isFood: true,
	breakInto: "mashed_pea",
	tempHigh: 500,
	stateHigh: "ash",
	color: "#3cbf2a",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.mashed_pea = {
	hidden: true,
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#97f578",
	behavior: behaviors.POWDER,
	category: "food",
	state: "liquid",
};

elements.burnt_beans = {
	tempHigh: 500,
	stateHigh: "ash",
	isFood: true,
	viscosity: 10000,
	density: 721,
	hardness: 1,
	color: "#1a0d04",
	category: "food",
	behavior: behaviors.LIQUID,
	state: "liquid",
};

elements.chicken = {
	tempHigh: 60,
	stateHigh: "chicken_nugget",
	color: "#cfbab0",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.chicken_nugget = {
	hidden: true,
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#e0723f",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.cocaine = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#fafafa",
	behavior: behaviors.POWDER,
	category: "joke",
	state: "liquid",
};

elements.zombie = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#114700",
	behavior: [
	    "M1%2|M1%2 AND SW%1|M1%2",
	    "M1%2 AND CH:zombie|XX|M1%2 AND CH:zombie",
		"M1|M1 AND SW%1|M1"
	],
	category: "special",
	state: "liquid",
	ignore: ["fire","smoke","antimatter","strange_matter","filler","lattice","wall","ewall","plasma","void","border"]
};

elements.toothpaste = {
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#e8e8e8", "#ff0000", "#00b7ff"],
	behavior: behaviors.STURDYPOWDER,
	category: "liquids",
	state: "liquid",
};

elements.radioactive_grape = {
	hidden: true,
	tempHigh: 1000,
	stateHigh: "ash",
	color: ["#7d00d1", "#8047d6"],
	behavior: behaviors.RADPOWDER,
	category: "food",
	state: "liquid",
};

elements.radioactive_meat = {
	hidden: true,
	tempHigh: 1000,
	stateHigh: "ash",
    color: ["#4b5742", "#91564a"],
    behavior: behaviors.RADPOWDER,
    category: "food",
    state: "liquid",
};

elements.radioactive_chocolate = {
	hidden: true,
    tempHigh: 1000,
    stateHigh: "ash",
    color: ["#404d29", "#4d3429"],
    behavior: behaviors.RADPOWDER,
    category: "food",
    state: "liquid",
};

elements.radioactive_egg = {
	hidden: true,
	tempHigh: 1000,
    stateHigh: "ash",
    color: "#93cc87",
    behavior: behaviors.RADPOWDER,
    category: "food",
    state: "liquid",
};

elements.radioactive_milk = {
	hidden: true,
	tempHigh: 1000,
    stateHigh: "ash",
    color: "#9bb895",
    behavior: behaviors.RADLIQUID,
    category: "liquids",
    state: "liquid",
};

elements.radioactive_potato = {
	hidden: true,
	tempHigh: 1000,
    stateHigh: "ash",
    color: "#6e8544",
    behavior: behaviors.RADPOWDER,
    category: "food",
    state: "liquid",
};

elements.radioactive_water = {
	hidden: true,
	tempHigh: 1000,
    stateHigh: "steam",
    color: "#baf0aa",
    behavior: behaviors.RADLIQUID,
    category: "liquids",
    state: "liquid",
};

elements.radioactive_bread = {
	hidden: true,
	tempHigh: 1000,
    stateHigh: "ash",
    color: "#aec74c",
    behavior: behaviors.RADPOWDER,
    category: "food",
    state: "liquid",
};

elements.radioactive_toast = {
	hidden: true,
    tempHigh: 1000,
    stateHigh: "ash",
    color: "#565e38",
    behavior: behaviors.RADPOWDER,
    category: "food",
    state: "liquid",
};

elements.radioactive_beans = {
	hidden: true,
	tempHigh: 1000,
	stateHigh: "ash",
	color: ["#34541f", "#994926"],
	behavior: behaviors.RADPOWDER,
	category: "food",
	state: "liquid",
};

elements.shampoo = {
	viscosity: 1000,
	density: 500,
	hardness: 1,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#ccd3e0",
	behavior: behaviors.FOAM,
	category: "liquids",
	state: "liquid",
};

elements.salami = {
	density: 1000,
	hardness: 1,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#de3c1d",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.moon = {
	density: 3344,
	hardness: 1,
	tempHigh: 10000,
	stateHigh: "beans",
	color: "#bababa",
	behavior: behaviors.WALL,
	category: "special",
	state: "solid",
};

elements.dragon_fruit = {
	breakInto: "mashed_dragon_fruit",
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#ff006f", "#ff006f", "#ff006f", "#036300", "#ff006f", "#ff006f", "#ff006f", "#ff006f"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.mashed_dragon_fruit = {
	hidden: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#e3e3e3", "#e3e3e3", "#0f0f0f", "#e3e3e3", "#e3e3e3", "#e3e3e3"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.chantilly = {
	hardness: 1,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#cccccc",
	behavior: behaviors.FOAM,
	category: "liquids",
	state: "liquid",
};

elements.fart = {
	temp: Infinity,
	color: "#2e4722",
	behavior: behaviors.DGAS,
	category: "joke",
	state: "gas",
};

elements.chips = {
	density: 600,
	hidden: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#ff9a1f",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.fries = {
	density: 600,
	hidden: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#d6ab0f",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.mayo = {
	color: "#fcffbd",
    behavior: behaviors.LIQUID,
    reactions: {
        "glue": { elem2:null, chance:0.01 },
        "oil": { elem2:null, chance:0.01 },
        "sap": { elem2:null, chance:0.01 },
    },
    viscosity: 3491,
    tempHigh: 100.6,
    stateHigh: ["steam","carbon_dioxide","methane"],
    category:"liquids",
    state: "liquid",
    density: 910,
    stain: 0.01,
    isFood: true
};

elements.barbecue_sauce = {
	viscosity: 3000,
	density: 1800,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#420400",
	behavior: behaviors.LIQUID,
	category: "liquids",
	state: "liquid",
};

elements.fried_water = {
	hidden: true,
	temp: 50,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#a3591c",
	behavior: behaviors.POWDER,
	category: "joke",
	state: "liquid",
};

elements.solid_water = {
	hidden: true,
	viscosity: 10000,
	tempHigh: 100,
	stateHigh: "fried_water",
	color: "#dfe9f5",
	behavior: behaviors.LIQUID,
	category: "joke",
	state: "liquid",
};

elements.vanilla = {
	hardness: 1,
	tempHigh: 300,
	stateHigh: "steam",
	color: "#e3e3e3",
	behavior: behaviors.FOAM,
	category: "food",
	state: "liquid",
	reactions: {
		"cream": { elem1: null, elem2: "vanilla_cream" },
		"ice_cream": { elem1: null, elem2: "vanilla_ice_cream" },
		"yolk": { elem1: null, elem2: "vanilla_pudding" },
	}
};

elements.vanilla_cream = {
	hardness: 1,
	hidden: true,
	tempHigh: 300,
	stateHigh: "steam",
	color: "#d6d6d6",
	behavior: behaviors.FOAM,
	category: "food",
	state: "liquid",
};

elements.vanilla_ice_cream = {
	hardness: 1,
	hidden: true,
	tempHigh: 200,
	stateHigh: "steam",
	color: "#f7f7f7",
	behavior: behaviors.FOAM,
	category: "food",
	state: "liquid",
	reactions: {
		"chocolate": { elem1: null, elem2: "chocolate_vanilla_ice_cream", tempMin: 0 },
		"melted_chocolate": { elem1: null, elem2: "chocolate_vanilla_ice_cream", tempMin: 0 },
	}
};

elements.chocolate_vanilla_ice_cream = {
	hardness: 1,
	hidden: true,
	tempHigh: 200,
	stateHigh: "steam",
	color: ["#dbdbdb", "#915936"],
	behavior: behaviors.FOAM,
	category: "food",
	state: "liquid",
};

elements.vanilla_pudding = {
	hardness: 1,
	hidden: true,
	tempHigh: 300,
	stateHigh: "steam",
	color: "#d4c4ba",
	behavior: behaviors.FOAM,
	category: "food",
	state: "liquid",
};

elements.cinnamon = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#3d1409",
	behavior: behaviors.POWDER,
	category: "powders",
	state: "liquid",
};

elements.porridge = {
	temp: 30,
	viscosity: 3000,
	density: 500,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#b8a254",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
};

elements.beet = {
	tempHigh: 400,
	stateHigh: "ash",
	color: "#5d0678",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.chocolate_egg = {
	hidden: true,
	tempHigh: 300,
	stateHigh: "steam",
	color: "#805e2e",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.chocolate_grape = {
	hidden: true,
	viscosity: 10000,
	tempHigh: 300,
	stateHigh: "steam",
	color: ["#9e3475", "#6e4d36"],
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
};

elements.sprinkles = {
	tempHigh: 200,
	stateHigh: "ash",
	cooldown: 0.2,
	color: ["#ff5e5e", "#ffea5e", "#73ff5e", "#5efcff", "#995eff", "#ff5ed1"],
	behavior: behaviors.STURDYPOWDER,
	category: "powders",
	state: "liquid",
	maxSize: 1,
};

elements.incinerator = {
	color: "#bf4b7d",
	behavior: [
	"XX|HT:10000|XX",
	"HT:10000|XX|HT:10000",
	"XX|HT:10000|XX",
	],
	category: "machines",
	state: "solid",
	insulate: true,
	reactions: {
		"fart": { elem1: null, elem2: "ohio" },
	}
};

elements.cocoa = {
	breakInto: "cocoa_seeds",
	tempHigh: 300,
	stateHigh: "ash",
	color: "#912f1d",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.cocoa_seeds = {
	breakInto: "chocolate",
	hidden: true,
	tempHigh: 80,
	stateHigh: "melted_chocolate",
	color: "#cfc7ab",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.pineapple = {
	tempHigh: 200,
	stateHigh: "steam",
	color: "#ccbe3b",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.broccoli = {
	viscosity: 100000,
	tempHigh: 300,
	stateHigh: "ash",
	color: "#073804",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
};

elements.pepperoni = {
	tempHigh: 300,
	stateHigh: "ash",
	color: "#8f2e11",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.apple = {
	viscosity: 10000,
	breakInto: "juice",
	tempHigh: 200,
	stateHigh: "steam",
	color: "#bd2d1a",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
};

elements.blueberry = {
	density: 626,
	viscosity: 10000,
	breakInto: "juice",
	breakIntoColor: "#0e2773",
	tempHigh: 200,
	stateHigh: "steam",
	color: "#192f73",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
};

elements.cucumber = {
	tempHigh: 200,
	stateHigh: "steam",
	color: "#235214",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.olive = {
	viscosity: 10000,
	tempHigh: 200,
	stateHigh: "steam",
	color: "#0d0806",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
};

elements.mushroom = {
	tempHigh: 200,
	stateHigh: "steam",
	color: "#96847d",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.onion = {
	tempHigh: 300,
	stateHigh: "steam",
	color: "#460063",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.bacon = {
	tempHigh: 90,
	stateHigh: "cooked_bacon",
	color: ["#a1392d", "#edb4ad"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.cooked_bacon = {
	hidden: true,
	tempHigh: 300,
	stateHigh: "ash",
	color: ["#70211d", "#783b38"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.strawberry = {
	viscosity: 10000,
	density: 754,
	tempHigh: 200,
	stateHigh: "steam",
	color: "#db564d",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
};

elements.beer = {
    tempHigh: 300,
    stateHigh: "steam",
    color: "#b39329",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
};

elements.cardboard = {
	tempHigh: 500,
    stateHigh: "ash",
    color: "#7d4725",
    behavior: behaviors.SUPPORT,
    category: "land",
    state: "solid",
	burn: 5,
	burnTime: 200,
};

elements.carrot = {
	tempHigh: 500,
    stateHigh: "ash",
    color: "#f06c0e",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "liquid",
};

elements.wine = {
	tempHigh: 400,
    stateHigh: "steam",
    color: "#2e0206",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
};

elements.plasma_bomb = {
	tempHigh: 1000,
    stateHigh: "ash",
    color: "#452f4a",
    behavior: [
	"XX|EX:20>plasma|XX",
	"XX|XX|XX",
	"M2|M1 AND EX:20>plasma|M2"
	],
    category: "weapons",
    state: "liquid",
},

elements.dark_energy = {
	hardness: 1,
	tempHigh: 1000000,
    stateHigh: "void",
    color: "#1b161c",
	behavior: [
	    "M1%10|M1%10 AND SW%5|M1%10",
	    "M1%10 AND CH:dark_energy|XX|M1%10 AND CH:dark_energy",
		"M1|M1 AND SW%5|M1"
	 ],
    category: "special",
    state: "gas",
};

elements.ohio = {
	hidden: true,
	hardness: 1,
	hidden: true,
    color: "#40174d",
    behavior: [
        "XX|XX|XX",
        "XX|EX:800>plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,molten_iron,molten_uranium,molten_lead,oxygen,molten_sodium,sulfur_gas,neon,chlorine,molten_calcium,molten_nickel,molten_copper,molten_zinc,gallium_gas AND CH:void|XX",
        "XX|XX|XX",
    ],
    temp: 99999999700,
	category: "joke",
    state: "gas",
	desc: "use at own risk",
};

elements.papaya = {
	tempHigh: 300,
	stateHigh: "steam",
	color: "#e38934",
	behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "liquid",
};

elements.caviar = {
	viscosity: 10000,
	tempHigh: 500,
    stateHigh: "steam",
    color: "#1f1b18",
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
};

elements.peeper = {
	hidden: true,
	density: 1000,
	burn: 0.00001,
	burnTime: 9999,
	ignoreAir: true,
	burning: true,
	hardness: 1,
	tempHigh: 5000000000000000000,
	stateHigh: "ash",
	color: "#9c1208",
	behavior: behaviors.STURDYPOWDER,
    category: "joke",
    state: "solid",
};

elements.robux = {
	hidden: true,
	viscosity: 10000,
    tempHigh: 500,
    stateHigh: "fire",
    color: ["#4a8741", "#4bb53c"],
    behavior: behaviors.LIQUID,
    category: "joke",
    state: "liquid",
};

elements.ruby = {
	tempHigh: 2000,
	stateHigh: "magma",
	color: ["#d6091a", "#e83544"],
	behavior: behaviors.WALL,
	category: "solids",
	state: "solid",
};

elements.mosquito = {
	tempHigh: 2000,
	stateHigh: "ash",
	color: "#2b2421",
	behavior: behaviors.FLY,
	category: "life",
	state: "liquid",
};

elements.bug_spray = {
    tempHigh: 2000,
    stateHigh: "steam",
    color: "#c9d1cb",
    behavior: behaviors.DGAS,
    category: "gases",
    state: "gas",
	reactions: {
		"mosquito": { elem1: null, elem2: null },
		"ant": { elem1: null, elem2: null },
		"fly": { elem1: null, elem2: null },
		"stink_bug": { elem1: null, elem2: null },
	}
};

elements.heavy_water = {
	tempLow: 0,
	stateLow: "ice",
	tempHigh: 150,
	stateHigh: "steam",
	color: "#447ecf",
	behavior: behaviors.LIQUID_OLD,
	category: "liquids",
    state: "liquid",
};

elements.blood_orange = {
	hidden: true,
	tempHigh: 300,
	stateHigh: ["ash", "steam"],
    color: ["#f06c0e", "#bd1000"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "liquid",
};

elements.orange = {
    tempHigh: 300,
    stateHigh: "steam",
    color: "#f06c0e",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "liquid",
	reactions: {
		"blood": { elem1: null, elem2: "blood_orange", chance: 0.01 },
	}
};

elements.cranberry = {
	viscosity: 10000,
	hidden: true,
    tempHigh: 300,
    stateHigh: "steam",
    color: "#ad2a1d",
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
};

elements.yoyleberries = {
	desc: "who the fuck requested yoylecake?",
	viscosity: 10000,
    hidden: true,
    tempHigh: 300,
    stateHigh: "steam",
    color: "#630094",
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
	reactions: {
		"batter": { elem1: null, elem2: "yoylecake" },
	}
};

elements.yoylecake = {
	hidden: true,
	tempHigh: 500,
	stateHigh: "steam",
	color: ["#9404db", "#28b82b"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.banana = {
	tempHigh: 300,
	stateHigh: "ash",
    color: "#f06c0e",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "liquid",
};

elements.cool_ray = {
color: ["#0cdaed","#baf9ff"],
    tick: function(pixel) {
        var x = pixel.x;
        for (var y = pixel.y; y < height; y++) {
            if (outOfBounds(x, y)) {
                break;
            }
            if (isEmpty(x, y)) {
                if (Math.random() > 0.05) { continue }
                createPixel("flash", x, y);
                pixelMap[x][y].color = "#0cdaed";
                pixelMap[x][y].temp = 0;
            }
            else {
                if (elements[pixelMap[x][y].element].isGas) { continue }
                if (elements[pixelMap[x][y].element].id === elements.heat_ray.id) { break }
                pixelMap[x][y].temp += -10;
                pixelTempCheck(pixelMap[x][y]);
                break;
            }
        }
        deletePixel(pixel.x, pixel.y);
    },
    temp: 0,
    category: "energy",
    state: "gas",
    excludeRandom: true,
    noMix: true
};

elements.flood_disaster = {
	color: "#5397c2",
    behavior: [
        "XX|XX|XX",
        "XX|EX:10>flood_disaster,water,water,water,water,water,water,water,water,water,water,water,water%25 AND DL%10|XX",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
    hidden: true,
    excludeRandom: true,
    maxSize: 1,
    cooldown: defaultCooldown
};

elements.uranium_ice_cream = {
	viscosity: 10000,
	tempHigh: 150,
	stateHigh: "steam",
	color: ["#cee6cc", "#1bab11", "#305e2d", "#5a7059"],
	behavior: [
		"XX|CR:radiation%2|XX",
        "M2|XX|M2",
        "M2|M1|M2",
	],
    category: "food",
    state: "liquid",
};

elements.silver_coin = {
	tempHigh: 1000,
	stateHigh: "molten_silver",
	color: ["#ababab", "#dedede"],
	behavior: behaviors.POWDER,
	category: "powders",
	state: "solid",
};

elements.max_graphics_in_roblox = {
	color: "#238fe8",
    behavior: [
        "XX|XX|XX",
        "XX|EX:800000000000>plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,plasma,molten_iron,molten_uranium,molten_lead,oxygen,molten_sodium,sulfur_gas,neon,chlorine,molten_calcium,molten_nickel,molten_copper,molten_zinc,gallium_gas AND CH:void|XX",
        "XX|XX|XX",
    ],
    temp: 99999999700,
    category: "joke",
    state: "gas",
    density: 1000,
    hardness: 1,
    hidden: true,
    excludeRandom: true,
    maxSize: 1,
    noMix: true,
	desc: "ok now ACTUALLY use it at your own risk IM NOT KIDDING! THIS CAN FUCKING CRASH YOUR GAME"
};

elements.incinerate.category = "tools",
elements.cook.category = "tools",
elements.room_temp.category = "tools",

elements.beans.tempHigh = 349,
elements.beans.stateHigh = "burnt_beans"

if (!elements.radiation.reactions) elements.egg.reactions = {};
elements.radiation.reactions.meat = { elem1: null, elem2: "radioactive_meat" },
elements.radiation.reactions.grape = { elem1: null, elem2: "radioactive_grape" },
elements.radiation.reactions.egg = { elem1: null, elem2: "radioactive_egg" },
elements.radiation.reactions.potato = { elem1: null, elem2: "radioactive_potato" },
elements.radiation.reactions.water = { elem1: null, elem2: "radioactive_water" },
elements.radiation.reactions.chocolate = { elem1: null, elem2: "radioactive_chocolate" },
elements.radiation.reactions.milk = { elem1: null, elem2: "radioactive_milk" },
elements.radiation.reactions.bread = { elem1: null, elem2: "radioactive_bread" },
elements.radiation.reactions.toast = { elem1: null, elem2: "radioactive_toast" },
elements.radiation.reactions.beans = { elem1: null, elem2: "radioactive_beans" }

if (!elements.egg.reactions) elements.egg.reactions = {};
elements.egg.reactions.water = {elem1: "boiled_egg", tempMin: 100},
elements.egg.reactions.steam = {elem1: "boiled_egg", tempMin: 100},
elements.egg.reactions.melted_chocolate = {elem1: "chocolate_egg"},
elements.egg.reactions.chocolate = {elem1: "chocolate_egg", chance: 0.1}

if (!elements.potato.reactions) elements.potato.reactions = {};
elements.potato.reactions.water = {elem1: "fries", tempMin: 100, chance:50},
elements.potato.reactions.steam = {elem1: "fries", tempMin: 100, chance:50},
elements.potato.reactions.water = {elem1: "chips", tempMin: 100, chance:50},
elements.potato.reactions.steam = {elem1: "fries", tempMin: 100, chance:50}

if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.cocaine = { elem1: "solid_water", elem2: null }

if (!elements.paper.reactions) elements.paper.reactions = {};
elements.paper.reactions.bless = { elem1: "robux", elem2: null, chance: 0.001 }

if (!elements.uranium.reactions) elements.uranium.reactions = {};
elements.uranium.reactions.ice_cream = {elem1: "uranium_ice_cream", elem2: null},
elements.uranium.reactions.cream = {elem1: "uranium_ice_cream", elem2: null}

if (!elements.dough.reactions) elements.dough.reactions = {};
elements.dough.reactions.yolk = {elem1: null, elem2: "spaghetti", tempMin: 25}

elements.silver.breakInto = "silver_coin"
