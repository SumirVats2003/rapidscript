// Challenge 1 Solution

// Variables
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const submit = document.querySelector('#submit');
const error = document.querySelector('#error');
const btn = document.querySelector('.btn');
const errorClose = document.querySelector('#ercr');
const submitClose = document.querySelector('#sbcr');

// Functions
const submitForm = () => {
	if(fname.value == '' || lname.value == '') {
		submit.classList.add('hidden');
		error.classList.remove('hidden');
	}
	else {
		error.classList.add('hidden');
		submit.classList.remove('hidden');
	}
};

const closeSb = () => {
	submit.classList.add('hidden');
};

const closeEr = () => {
	error.classList.add('hidden');
};

// Events
btn.addEventListener('click', submitForm);
errorClose.addEventListener('click', closeEr);
submitClose.addEventListener('click', closeSb);
