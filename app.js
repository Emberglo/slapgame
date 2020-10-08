let globalHealth = 100;
let hitCount = 0;



let bearItems = {
	item1: { name: "Salmon", modifier: 10, description: "Delicious!" },
	//eagle immobilizes human
	item2: { name: "Eagle", modifier: 30, description: "Eagle Attack!" },
	item3: { name: "Cocaine", modifier: 2, description: "He seems angry...er" }
}

let humanItems = {
	item1: { name: "Bear Spray", modifier: 10, description: "IT BURNS!" },
	//net immobilizes bear
	item2: { name: "Net", modifier: 50, description: "Your feet are tangled!" },
	item3: { name: "Gun", modifier: 40, description: "Are you feelin' lucky, punk?"}
}

// document.getElementById('targetName').value,

let players = {
	bear: {
		name: "The Bear",
		id: 1,
		health: 200,
		hits: 0,
		attacks: {
			slap: { name: "Bite", modifier: 10 },
			punch: { name: "Swipe", modifier: 20 },
			kick: { name: "Charge", modifier: 30 }
		},
		mobility: 50,
		img: "https://i.pinimg.com/236x/58/95/3c/58953c39fe717e226822383c389eeddd--bear-tattoo-ideas-bear-tattoos.jpg",
		items: bearItems
	},
	human: {
		name: "Bear Grylls",
		id: 2,
		health: 100,
		hits: 0,
		attacks: {
			slap: { name: "Punch", modifier: 10 },
			punch: { name: "Kick", modifier: 15 },
			kick: { name: "Stick", modifier: 20 }
		},
		mobility: 30,
		img: "https://cdn.vox-cdn.com/thumbor/EBxf68ES28nxIQxwSg5URfk1Z34=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63309747/YvW_0620190221_5679_1ki5van.0.jpg",
		items: humanItems
	}
}



function drawPlayers() {
	let template = "";
	let playersElem = document.getElementById('playerBoard');
	for (const key in players) {
		if (players.hasOwnProperty(key)) {
			const player = players[key];
			template += /* html */ `
				<div class="col-6">
					<h2>${player.name}</h2>
					<p>Health: <span>${player.health}</span></p>
					<p>Hits: <span>${player.hits}</span></p>
					<img src="${player.img}" alt="">
					<div>
						<button onclick="slap(${player.id})">${player.attacks.slap.name}</button>
						<button onclick="punch(${player.id})">${player.attacks.punch.name}</button>
						<button onclick="kick(${player.id})">${player.attacks.kick.name}</button>
					</div>
					<div>
						<button>${player.items.item1.name}</button>
						<button>${player.items.item2.name}</button>
						<button>${player.items.item3.name}</button>
					</div>
				</div>
			`
		}
	}
	playersElem.innerHTML = template;
}


// function changeName() {
// 	let name = document.getElementById('targetName').value;
// 	// document.getElementById('displayName').innerText = `${name}`;

// 	event.preventDefault();
// 	let form = document.getElementById('form');
// 	form.reset();
// 	draw();
// }



function slap(id) {
	if (id == 1) {
		players.human.health -= 10;
		players.bear.hits++;
	} else {
		players.bear.health -= 10;
		players.human.hits++;
	}
	drawPlayers();
}

function punch(id) {
	if (id == 1) {
		players.human.health -= 20;
		players.bear.hits++;
	} else {
		players.bear.health -= 15;
		players.human.hits++;
	}
	drawPlayers();
}

function kick(id) {
	if (id == 1) {
		players.human.health -= 30;
		players.bear.hits++;
	} else {
		players.bear.health -= 20;
		players.human.hits++;
	}
	drawPlayers();
}

drawPlayers();