function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	if (firstName.toLowerCase() == "general" && lastName.toLowerCase() !="assembly") {
		console.log('Greetings' + ', ' + fullName + '!!');
	}

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >=18) {
		console.log('User is an adult');
	} else if (age>=13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	var faveColor = prompt('What is your favourite color?');

	if (faveColor=='red' ||
		faveColor=='blue' ||
		faveColor=='green' ||
		faveColor=='yellow') {
		$('h1').css('color',faveColor);
		console.log('User is a bit dull');
	}
}


// When the page loads
$(function() {

	// When the user clicks on an image, run the askQuestions function
	$('img').on('click', askQuestions);

	// When the user clicks on an h3
	$('h3').on('click', function() {
	
	// Toggle the next element
	$(this)
		.toggleClass('open')
		.next().slideToggle(500);

	})
})