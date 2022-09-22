let liveToastBtn = document.getElementById("liveToastBtn")
let listDOM = document.getElementById("list")
let taskDOM = document.getElementById("task")
let ul = document.getElementsByTagName("li");

for (let i = 0; i < ul.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close")
    closeButton.onclick = removeButton;
    ul[i].append(closeButton);
    ul[i].onclick = check;
}

liveToastBtn.addEventListener('click', elemanEkle)

function check() {
    this.classList.toggle("checked");
}

function removeButton() {
    this.parentElement.remove();
}

function elemanEkle() {

    if (taskDOM.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = task.value;
        taskDOM.value = "";
        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");
    }
}



