let d = document.getElementById('display');

function appendNum(e){
   let n = e.innerHTML;
   d.value += n; 
}

function optr(e){
	let n1 = parseInt(d.value);
	let op1;
	let op = e.innerHTML;
	switch(op){
		case "+":
				op1 = op;	
				break;
		case "-":
				op1 = op;
				break;
		case "=":
				if(op1 == "+"){
					d.value = n1 + parseInt(d.value);
				} else if(op1 == "-"){
					d.value = n1 - parseInt(d.value);
				}
				break;
		default:
				console.log('no operator defined');
				break
	}
	d.value = "";
}