function CalcularD(){
	var a = document.getElementById('a').value;
	var equal = document.getElementById('equal').value;
	var equal2 = document.getElementById('equal2').value;
	var result = document.getElementById('result');
	var result2 = document.getElementById('result2');
	var v_result = (a * equal);
	var v_result2 = (equal * equal2)

	result.innerHTML = v_result;
	result2.innerHTML = v_result2.toLocaleString({style:'currency',currency:'USD'});
}