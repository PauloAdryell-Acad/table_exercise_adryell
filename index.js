function somaAulas(){
	let horas = document.getElementsByClassName('hr')
	var horas_text = []
	for (var i of horas) {
		horas_text.push(i.textContent)
	}
	let soma = 0
	for (x of horas_text){
		soma += parseInt(x)
	}
	return soma
}
var hr = somaAulas()
function addOnTable(){
	let table = document.getElementById('tab')
	let new_row = document.createElement('tr')
	let new_data = document.createElement('td')
	let new_data2 = document.createElement('td')
	let new_data3 = document.createElement('td')
	let new_data4 = document.createElement('td')
	let new_data5 = document.createElement('td')
	new_data2.innerText = "Sebastião: 360"
	new_data3.innerText = "Fulano: 350"
	table.appendChild(new_row)
	new_data.innerText = "Total de Aulas: " + hr
	new_data.setAttribute('colspan',2)
	new_row.appendChild(new_data)
	new_row.appendChild(new_data2)
	new_row.appendChild(new_data3)
}

addOnTable()
