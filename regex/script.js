function textSent(){
	let result = document.querySelector("#input-id").value; // все элементы, где хранялся данные с импута 
	
	let $elem = document.querySelector('#message');
  	let text = $elem.textContent; //все элементы, где хранятся данные

	const endresult = text.match(result);

	if(text.match(result)){
		console.log(endresult);


	}else{
		console.log('Ничего не найдено!')
	}

	
}


