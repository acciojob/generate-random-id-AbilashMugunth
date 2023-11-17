let alphaNumerics = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result =''

function makeid(l) {

	for(let i=0;i<l;i++){
		let randomIndex = Math.floor(Math.random()*alphaNumerics.length)
		result+=alphaNumerics.charAt(randomIndex);
	}

	return result;

}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
