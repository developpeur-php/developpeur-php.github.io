function textEffect(element_id, text) {
	element = document.getElementById(element_id);
	if (element.innerHTML !== '') {
		element.innerHTML = text;
	} else {
		element.innerHTML = '';
	}
	setTimeout(() => { textEffect(element_id, text) }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
	textEffect('title', 'Bonjour le monde');
});