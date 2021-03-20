class Operator {
	constructor(name, enabled, primaries) {
		this.name = name;
		this.enabled = enabled;
	}
}

const operators_attackers = [
	"Sledge",
	"Thatcher",
	"Ash",
	"Thermite",
	"Twitch",
	"Montagne",
	"Glaz",
	"Fuze",
	"IQ",
	"Blitz",
	"Buck",
	"Blackbeard",
	"Capitao",
	"Hibana",
	"Jackal",
	"Ying",
	"Zofia",
	"Dokkaebi",
	"Lion",
	"Finka",
	"Maverick",
	"Nomad",
	"Gridlock",
	"Nokk",
	"Amaru",
	"Kali",
	"Iana",
	"Ace",
	"Zero",
  "Flores",
];

const operators_defenders = [
	"Smoke",
	"Mute",
	"Castle",
	"Pulse",
	"Doc",
	"Rook",
	"Kapkan",
	"Tachanka",
	"Jäger",
	"Bandit",
	"Frost",
	"Valkyrie",
	"Caveira",
	"Echo",
	"Mira",
	"Lesion",
	"Ela",
	"Vigil",
	"Maestro",
	"Alibi",
	"Clash",
	"Kaid",
	"Mozzie",
	"Warden",
	"Goyo",
	"Wamai",
	"Oryx",
	"Melusi",
	"Aruni",
];

const attackers_map = new Map();
const defenders_map = new Map();

// transforming the list of attackers into an map
operators_attackers.forEach((attacker) => {
	attackers_map[attacker] = new Operator(attacker, true);

	// adding onClick function
	document.getElementById(attacker).onclick = () => {
		choose_atk(attackers_map[attacker]);
	};
});

operators_defenders.forEach((defender) => {
	defenders_map[defender] = new Operator(defender, true);

	// adding onClick function
	console.log(defender);
	document.getElementById(defender).onclick = () => {
		choose_def(defenders_map[defender]);
	};
});

function choose_atk(attacker) {
	attacker.enabled = !attacker.enabled;
	if (attacker.enabled) {
		operators_attackers.push(attacker.name);
		// reset grayscale
		document.getElementById(attacker.name).style.filter = "grayscale(0%)";
	} else {
		// grayscale style to indicate Operators that are not present in the array
		document.getElementById(attacker.name).style.filter = "grayscale(100%)";
		const index = operators_attackers.indexOf(attacker.name);
		operators_attackers.splice(index, 1);
	}
}

function choose_def(defender) {
	defender.enabled = !defender.enabled;
	if (defender.enabled) {
		operators_defenders.push(defender.name);
		// reset grayscale
		document.getElementById(defender.name).style.filter = "grayscale(0%)";
	} else {
		// grayscale style to indicate Operators that are not present in the array
		document.getElementById(defender.name).style.filter = "grayscale(100%)";
		const index = operators_defenders.indexOf(defender.name);
		operators_defenders.splice(index, 1);
	}
}

document.getElementById("defend").onclick = function () {
	const operator =
		operators_defenders[Math.floor(Math.random() * operators_defenders.length)];
	document.getElementById("op").innerHTML = operator;
	randomWeapon(operator);
};

document.getElementById("attack").onclick = function () {
	var operator =
		operators_attackers[Math.floor(Math.random() * operators_attackers.length)];
	document.getElementById("op").innerHTML = operator;
	randomWeapon(operator);
};

var laser = Array("No", "Yes");
var primaries;
var primary;
var gadget;
var gadgets;

randomWeapon = function (operator) {
	if (operator == "Sledge") {
		primaries = Array("L85A2", "M590A1");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Frag Grenade", "Stun Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Thatcher") {
		var primaries = Array("AR33", "M590A1", "L85A2");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Ash") {
		var primaries = Array("G36C", "R4-C");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Thermite") {
		var primaries = Array("M1014", "556XI");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Stun Grenade", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Twitch") {
		var primaries = Array("F2", "417", "SG-CQB");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Stun Grenade", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Montagne") {
		var primaries = Array("P9", "LFP586");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Stun Grenade", "Smoke Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Glaz") {
		var primary = "OTs-03";
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Smoke Grenade", "Frag Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Fuze") {
		var primaries = Array("Ballistic Shield", "AK-12", "6P41");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Smoke Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Blitz") {
		var primary = "P12";
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Smoke Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "IQ") {
		var primaries = Array("AUG A2", "552 Commando", "G8A1");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Buck") {
		var primaries = Array("C8-SFW", "CAMRS");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Hard Breach Charge", "Stun Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Blackbeard") {
		var primaries = Array("Mk17CQB", "SR-25");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Stun Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Capitao") {
		var primaries = Array("PARA-308", "M249");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Hard Breach Charge", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Hibana") {
		var primaries = Array("Type-89", "SuperNova");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Stung Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Jackal") {
		var primaries = Array("C7E", "PDW9", "ITA12L");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Smoke Grenade", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Ying") {
		var primaries = Array("T-95 LSW", "SIX12");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Hard Breach Charge", "Smoke Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Zofia") {
		var primaries = Array("LMG-E", "M762");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Dokkaebi") {
		var primaries = Array("BOSG", "MK 14 EBR");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Smoke Grenade", "Frag Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Lion") {
		var primaries = Array("V308", "417", "SG-CQB");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Stun Grenade", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Finka") {
		var primaries = Array("SPEAR .308", "6P41", "SASG-12");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Hard Breach Charge", "Frag Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Maverick") {
		var primaries = Array("M4", "AR-15.50");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Frag Grenade", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Nomad") {
		var primaries = Array("AK-74M", "ARX200");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Stun");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Gridlock") {
		var primaries = Array("F90", "M249 SAW");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Smoke Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Nokk") {
		var primaries = Array("FMG-9", "SIX12 SD");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Hard Breach Charge", "Frag Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Amaru") {
		var primaries = Array("G8A1", "SuperNova");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Hard Breach Charge", "Stun Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Kali") {
		var primaries = Array("CSRX 300");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Iana") {
		var primaries = Array("ARX200", "G36C");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Frag Grenade", "Smoke Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Ace") {
		var primaries = Array("AK-12", "M1014", "MP7.");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Breach Charge", "Smoke Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	} else if (operator == "Zero") {
		var primaries = Array("SC3000K", "MP7.");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Hard Breach Charge", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}else if (operator == "Flores") {
		var primaries = Array("AR33", "SR-25");
		var primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Stun Grenade", "Claymore");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Smoke") {
		primaries = Array("FMG-9", "M590A1");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Barbed Wire", "Deployable Shield");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Mute") {
		primaries = Array("MP5K", "M590A1");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Bulletproof Camera");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Castle") {
		primaries = Array("UMP45.", "M1014");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Proximity Alarm", "Bulletproof Camera");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Pulse") {
		primaries = Array("UMP45.", "M1014");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Barbed Wire");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Doc") {
		primaries = Array("SG-CQB", "MP5", "P90");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Barbed Wire", "Bulletproof Camera");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Rook") {
		primaries = Array("SG-CQB", "MP5", "P90");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Impact Grenade", "Proximity Alarm");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Kapkan") {
		primaries = Array("9x19VSN", "SASG-12");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Impact Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Tachanka") {
		primaries = Array("9x19VSN", "DP-27");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Barbed Wire", "Proximity Alarm");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Jäger") {
		primaries = Array("M870", "416-C Carbine");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Barbed Wire", "Bulletproof Camera");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Bandit") {
		primaries = Array("M870", "MP7");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Barbed Wire");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Frost") {
		primaries = Array("Super 90", "9mm C1");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Deployable Shield", "Bulletproof Camera");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Valkyrie") {
		primaries = Array("MPX", "SPAS-12");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Impact Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Caveira") {
		primaries = Array("M12", "SPAS-15");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Impact Grenade", "Proximity Alarm");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Echo") {
		primaries = Array("MP5SD", "SuperNova");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Impact Grenade", "Deployable Shield");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Mira") {
		primaries = Array("Vector", "ITA12L");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Proximity Alarm", "Nitro Cell");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Lesion") {
		primaries = Array("SIX12 SD", "T-5 SMG");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Impact Grenade", "Bulletproof Camera");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Ela") {
		primaries = Array("Scorpion EVO 3 A1", "FO-12");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Barbed Wire", "Deployable Shield");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Vigil") {
		primaries = Array("K1A", "BOSG");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Impact Grenade", "Bulletproof Camera");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Maestro") {
		primaries = Array("ALDA 5.56", "ACS12");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Barbed Wire", "Impact Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Alibi") {
		primaries = Array("Mx4 Storm", "ACS12");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Impact Grenade", "Deployable Shield");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Clash") {
		primaries = Array("CCE Shield");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Impact Grenade", "Barbed Wire");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Kaid") {
		primaries = Array("AUG A3", "TCSG12");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Barbed Wire");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Mozzie") {
		primaries = Array("Commando 9", "P10 RONI");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Barbed Wire");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Warden") {
		primaries = Array("M590A1", "MPX");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Deployable Shield");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Goyo") {
		primaries = Array("Vector", "TCSG12");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Proximity Alarm");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Wamai") {
		primaries = Array("AUG A2.", "MP5K");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Impact Grenade", "Proximity Alarm");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Oryx") {
		primaries = Array("T-5 SMG", "SPAS-12");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Barbed Wire", "Proximity Alarm");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Melusi") {
		primaries = Array("MP5.", "Super 90", "MK 14 EBR.");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Nitro Cell", "Impact Grenade");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
	if (operator == "Aruni") {
		primaries = Array("P10 RONI", "Mk 14 EBR.");
		primary = primaries[Math.floor(Math.random() * primaries.length)];
		document.getElementById("prim").innerHTML = primary;
		randomPrimaryAttachments(operator, primary);
		gadgets = Array("Bulletproof Camera", "Barbed Wire");
		gadget = gadgets[Math.floor(Math.random() * gadgets.length)];
		document.getElementById("gadget").innerHTML = gadget;
	}
};

randomPrimaryAttachments = function (operator, weapon) {
	if (
		weapon == "OTs-03" ||
		weapon == "CSRX 300" ||
		weapon == "DP 27" ||
		weapon == "Ballistic Shield" ||
		weapon == "G52-Tactical Shield" ||
		weapon == "CCE Shield" ||
		weapon == "Le Roc Shield"
	) {
		var Laser = "None";
		var Grip = "None";
		document.getElementById("primLaser").innerHTML = "Laser: " + Laser;
		document.getElementById("primGrip").innerHTML = "Grip: " + Grip;
		if (
			weapon == "CCE Shield" ||
			weapon == "Le Roc Shield" ||
			weapon == "CSRX 300"
		) {
			var Scope = "None";
			var Barrel = "None";
		} else if (weapon == "Ballistic Shield") {
			primaries = Array("PMM", "GSH-18");
			primary = primaries[Math.floor(Math.random() * primaries.length)];
			document.getElementById("prim").innerHTML = primary;
			randomPrimaryAttachments(operator, primary);
		} else if (weapon == "OTs-03") {
			var scopes = Array("None", "Holo", "Red Dot", "Reflex");
			var barrels = Array("None", "Suppressor", "Muzzle Brake", "Flash Hider");
			var Scope = scopes[Math.floor(Math.random() * scopes.length)];
			var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
		} else if (weapon == "DP 27") {
			var scopes = Array("None");
			var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		}
		document.getElementById("primScope").innerHTML = "Scope: " + Scope;
		document.getElementById("primBarrel").innerHTML = "Barrel: " + Barrel;
		return;
	}
	var Laser = laser[Math.floor(Math.random() * laser.length)];
	document.getElementById("primLaser").innerHTML = "Laser: " + Laser;
	if (weapon == "L85A2") {
		var scopes = Array(
			"None",
			"Scope 1.5x",
			"Scope 2.5x",
			"Holo",
			"Red Dot",
			"Reflex"
		);
		var grips = Array("None", "Vertical Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "M590A1") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "AR33") {
		var scopes = Array(
			"None",
			"Scope 1.5x",
			"Scope 2.5x",
			"Holo",
			"Red Dot",
			"Reflex"
		);
		var grips = Array("None", "Angled Grip", "Vertical Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "G36C") {
		var scopes = Array("None", "Scope 1.5x", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertical Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "R4-C") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertical Grip");
		var barrels = Array(
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "M1014") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var Grip = "None";
		var Barrel = "None";
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
	} else if (weapon == "556XI") {
		var scopes = Array(
			"None",
			"Scope 2.0x",
			"Scope 2.5x",
			"Holo",
			"Red Dot",
			"Reflex"
		);
		var grips = Array("None", "Angled Grip", "Vertical Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "F2") {
		var scopes = Array("None", "Scope 1.5x", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertical Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "417") {
		var scopes = Array("None", "Scope 3.0x", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertical Grip");
		var barrels = Array("None", "Suppressor", "Muzzle Brake", "Flash Hider");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SG-CQB") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertical Grip");
		var Barrel = "None";
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
	} else if (weapon == "AK-12") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 2.0x",
			"Scope 2.5x"
		);
		var grips = Array("None", "Vertical Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "6P41") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 1.5x",
			"Scope 2.5x"
		);
		var grips = Array("None", "Vertical Grip");
		var barrels = Array("None", "Suppressor", "Flash Hider");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "AUG A2") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.5x");
		var grips = Array("None");
		var barrels = Array("None", "Suppressor", "Compensator", "Flash Hider");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "552 Commando") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertical Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "G8A1") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertical Grip", "Angled Grip");
		var barrels = Array("None", "Suppressor", "Compensator", "Flash Hider");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "C8-SFW") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "CAMRS") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 3.0x");
		var grips = Array("None");
		var barrels = Array("None", "Suppressor", "Muzzle Brake", "Flash Hider");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Mk17 CQB") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SR-25") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 3.0x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array("None", "Suppressor", "Muzzle Brake", "Flash Hider");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "PARA-308") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "M249") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 1.5",
			"Scope 2.0",
			"Scope 3.0x"
		);
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array("None", "Flash Hider", "Compensator");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Type-89") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 1.5x",
			"Scope 2.5"
		);
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SuperNova") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None", "Suppressor");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "C7E") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.0x");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "PDW9") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "ITA12L") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "T-95 LSW") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 1.5x",
			"Scope 2.0x",
			"Scope 2.5x"
		);
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SIX12") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "LMG-E") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 1.5x",
			"Scope 2.0x",
			"Scope 2.5x"
		);
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "M762") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.0x");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Mk 14 EBR") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 3.0x");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array("None", "Suppressor", "Muzzle Brake", "Flash Hider");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "BOSG") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "V308") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 2.0x",
			"Scope 2.5x"
		);
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Spear .308") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.0x");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SASG-12") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.0x");
		var grips = Array("None");
		var barrels = Array("None", "Suppressor");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "AR-15.50") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 3.0x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array("None", "Suppressor", "Muzzle Brake");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "M4") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "AK-74M") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 1.5x",
			"Scope 2.0x"
		);
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "ARX200") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 2.0x",
			"Scope 2.5x"
		);
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "F90") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 2.0x",
			"Scope 2.5x"
		);
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "M249 SAW") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 1.5x",
			"Scope 2.0x",
			"Sope 2.5x"
		);
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array("None", "Flash Hider", "Compensator");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "FMG-9") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array("None", "Suppressor", "Muzzle Brake", "Flash Hider");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SIX12 SD") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SC3000K") {
		var scopes = Array(
			"None",
			"Holo",
			"Red Dot",
			"Reflex",
			"Scope 1.5x",
			"Scope 2.5"
		);
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MP5K") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "UMP45") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "UMP45.") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MP5") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "P90") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Extened Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "9x19VSN") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Suppressor",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "DP-27") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "M870") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "416-C Carbine") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MP7") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MP7.") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MP7") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Super 90") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "9mm C1") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5");
		var grips = Array("None", "Angled Grip");
		var barrels = Array("None", "Extended Barrel", "Suppressor");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MPX") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SPAS-12") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SPAS-15") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "M12") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MP5SD") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Vector") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "T-5 SMG") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Scorpion EVO 3 A1") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Compensator",
			"Muzzle Brake",
			"Flash Hider",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "FO-12") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array("None", "Suppressor", "Extended Barrel");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "K1A") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "ALDA 5.56") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip");
		var barrels = Array(
			"None",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Suppressor",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "ACS12") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.0x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Mx4 Storm") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Suppressor",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "ACS12") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array("None");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "TCSG12") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.0x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array("None", "Suppressor");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "AUG A3") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 1.5x");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "Commando 9") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "P10 RONI") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Suppressor",
			"Extended Barrel"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MP5.") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Vertikal Grip", "Angled Grip");
		var barrels = Array(
			"None",
			"Muzzle Brake",
			"Flash Hider",
			"Compensator",
			"Suppressor"
		);
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "AUG A2.") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None");
		var barrels = Array("None", "Flash Hider", "Compensator", "Suppressor");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "SPEAR .308") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 2.5x");
		var grips = Array("None");
		var barrels = Array("None", "Flash Hider", "Compensator", "Suppressor");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MK 14 EBR") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex", "Scope 3.0x");
		var grips = Array("None", "Angled Grip", "Vertikal Grip");
		var barrels = Array("None", "Flash Hider", "Suppressor", "Muzzle Brake");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "MK 14 EBR.") {
		var scopes = Array("None", "Holo", "Red Dot", "Reflex");
		var grips = Array("None", "Angled Grip", "Vertikal Grip");
		var barrels = Array("None", "Flash Hider", "Suppressor", "Muzzle Brake");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "P9") {
		var scopes = Array("...");
		var grips = Array("...");
		var barrels = Array("None", "Suppressor", "Muzzle Brake");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "LFP586") {
		var scopes = Array("...");
		var grips = Array("...");
		var barrels = Array("...");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "P12") {
		var scopes = Array("...");
		var grips = Array("...");
		var barrels = Array("None", "Suppressor", "Muzzle Brake");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "PMM") {
		var scopes = Array("...");
		var grips = Array("...");
		var barrels = Array("None", "Suppressor", "Muzzle Brake");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	} else if (weapon == "GSH-18") {
		var scopes = Array("...");
		var grips = Array("...");
		var barrels = Array("None", "Suppressor", "Muzzle Brake");
		var Scope = scopes[Math.floor(Math.random() * scopes.length)];
		var Grip = grips[Math.floor(Math.random() * grips.length)];
		var Barrel = barrels[Math.floor(Math.random() * barrels.length)];
	}

	document.getElementById("primScope").innerHTML = "Scope: " + Scope;
	document.getElementById("primGrip").innerHTML = "Grip: " + Grip;
	document.getElementById("primBarrel").innerHTML = "Barrel: " + Barrel;
};
