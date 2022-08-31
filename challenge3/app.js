// Challenge 3 Solution

// Variables
const circle = document.querySelector('.circle');
const multiplier = (document.querySelector('input'));

const changeRadius = () => {
	const radius = 2*Number(multiplier.value);
	circle.style.height = `${radius}px`;
	circle.style.width = `${radius}px`;
};

// Event
multiplier.addEventListener('input', changeRadius);
