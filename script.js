function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function countWords(s){ // counting words in a string
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	return s.split(' ').length;
}

function validatePassword(pass){
	//Does it contain lowercase letter
	var lowerCaseLetters = /[a-z]/g;
	var containsLower = pass.match(lowerCaseLetters);
	//Does it contain uppercase letter
	var upperCaseLetters = /[A-Z]/g;
	var containsUpper = pass.match(upperCaseLetters);
	//Does it contain number
	var numbers = /[0-9]/g;
	var containsNumber = pass.match(numbers);
	// Validate length
	var len = pass.length >= 8;
	//Does it contain punctuation
	var punctuation = /[.,:!?]/g;
	var containsPunctuation = pass.match(punctuation);
	
	return containsLower && containsUpper && containsNumber && len && containsPunctuation ;
}

function validateForm() {
	var count = 0;
	var name = document.querySelector("#name").value;
	var email = document.querySelector('#email').value;
	var sayisal = document.querySelector('#sayisal').value;
	var isnum = /^\d+$/.test(sayisal); //sayisal deðiþkeninin sayýlsal olup olmadýðýný tutan deðiþken.
	var basamakli = document.querySelector('#basamakli').value;
	var alfa = document.querySelector('#alfa').value;
	var max30 = document.querySelector('#max30').value;
	var uckelime = document.querySelector('#uckelime').value;
	var password = document.querySelector('#password').value;
	if (name == "") {
		//alert("Name must be filled out");
		document.querySelector("#empty1")
                .innerHTML =  "Name must be filled out" ;
	}else{
		document.querySelector("#empty1")
                .innerHTML =  "" ;
	}
	if (!validateEmail(email)) {     
		document.querySelector("#empty2")
                .innerHTML =  "Invalid e-mail" ;
	} else {
		document.querySelector("#empty2")
                .innerHTML =  "" ;
	}
	if( !isnum ){
		document.querySelector("#empty3")
                .innerHTML =  "This area must contain only digits" ;
	}else{
		document.querySelector("#empty3")
                .innerHTML =  "" ;
	}
	if( !( (/^\d+$/.test(basamakli)) && basamakli.length == 12 ) ) {
		document.querySelector("#empty4")
                .innerHTML =  "This area must contain only digits and its length must be 12" ;
	}else{
		document.querySelector("#empty4")
                .innerHTML =  "" ;
	}
	if( !isAlpha(alfa) ) {
		document.querySelector("#empty5")
                .innerHTML =  "This area must be alphabetical." ;
	}else{
		document.querySelector("#empty5")
                .innerHTML =  "" ;
	}
	if ( !isAlpha(max30) || max30.length > 30 ){
		document.querySelector("#empty6")
                .innerHTML =  "This area must be alphabetical and its length must be less than 30." ;
	}else{
		document.querySelector("#empty6")
                .innerHTML =  "" ;
	}
	if ( countWords(uckelime) != 3 ){
		document.querySelector("#empty7")
                .innerHTML =  "This area must contain 3 words" ;
	}else{
		document.querySelector("#empty7")
                .innerHTML =  "" ;
	}
	if ( !validatePassword(password) ){
		document.querySelector("#empty8")
                .innerHTML =  "Invalid password" ;
	}else{
		document.querySelector("#empty8")
                .innerHTML =  "" ;
	}
	return false
}