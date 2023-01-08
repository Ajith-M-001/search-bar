// getting all required elements
const searchWrapper = document.querySelector(".search-input"),
    inputBox = searchWrapper.querySelector("input"),
    suggBox = searchWrapper.querySelector(".autocom-box");

// if usre press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //return array value and user to lowerCase and return only those words/sentences which are starts with user entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<li>` + data + `</li>`
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            // adding onclick attribute to all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active");
    }
}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>` + userValue + `</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}