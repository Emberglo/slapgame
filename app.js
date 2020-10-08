let globalHealth = 100;
let hitCount = 0;

draw();

function draw() {
	document.getElementById('healthBar').innerText = `${globalHealth}`;
	document.getElementById('timesHit').innerText = `${hitCount}`;
}

function changeName() {
	let name = document.getElementById('targetName').value;
	document.getElementById('displayName').innerText = `${name}`;

	event.preventDefault();
	let form = document.getElementById('form');
	form.reset();
	draw();
}

function slap() {
	globalHealth--;
	hitCount++;
	draw();
}

function punch() {
	globalHealth -= 5;
	hitCount++;
	draw();
}

function stab() {
	globalHealth -= 10;
	hitCount++;
	draw();
}
