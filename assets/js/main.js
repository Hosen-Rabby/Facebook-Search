

const searchWrapper = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");
const query = document.querySelector(".query");
const inputBox = searchWrapper.querySelector("input");
const suggestBox = searchWrapper.querySelector(".autocom_box");


inputBox.onkeyup = e =>{
	console.log(e.target.value);

	let userData = e.target.value;
	let emptyArray = []; 

	if (userData) {
		emptyArray = suggestions.filter((data) => {
			return data.toLowerCase().startsWith(userData.toLowerCase());
		});
		emptyArray = emptyArray.map((data) =>{
			return data = '<li>' + data + '</li>';
		});
		console.log(emptyArray);
		searchWrapper.classList.add("active") // show autocomplete
		showSuggestions(emptyArray);

		let allList = suggestBox.querySelectorAll("li");

		for (let i = 0; i < allList.length; i++) {
		// adding onclick
		allList[i].setAttribute("onclick", "select(this)");
		}
	}
	else{
			searchWrapper.classList.remove("active") // hide autocomplete

		}
	}


function select(element){
	let selectUserData = element.textContent;
	console.log(selectUserData);
	inputBox.value = selectUserData;
	searchWrapper.classList.remove("active") // hide autocomplete
}

function showSuggestions(list){
	let listData;
	if(!list.length){
		userValue = inputBox.value;
		listData = '<li>' + userValue + '</li>';
	}
	else{
		listData = list.join('');
	}
	suggestBox.innerHTML = listData;
}


// google search

searchBtn.onclick = function() {
	var inpValue = document.getElementById("input_value").value;
	let url = 'https://www.facebook.com/search/top/?q='+inpValue;
	window.open(url);
}

