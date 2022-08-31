// Challenge 2 Solution

// Variables
const word = document.querySelector('#fname');
const index = document.querySelector('#lname');
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

// Functions
const shiftWord = (word, index) => {
	const arr = Array.from(word);
	const shiftedWord = arr.map(
		letter => {
			return String.fromCharCode(letter.charCodeAt(0) + index);
		}
	).join("");
	return shiftedWord;
}

const action = () => {
	const text = shiftWord(word.value, Number(index.value));
	result.innerText = text;
}

// Event
btn.addEventListener('click', action);
