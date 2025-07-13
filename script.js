const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    const value = inputBox.value.trim();
    if (value === '') {
        inputBox.classList.add('input-error');
        inputBox.focus();
        setTimeout(() => inputBox.classList.remove('input-error'), 500);
        return;
    }
    let li = document.createElement('li');
    li.innerHTML = value;
    li.classList.add('fade-in');
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.className = 'close';
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    inputBox.value = '';
    saveData();
}

inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        const li = e.target.parentElement;
        li.classList.add('fade-out');
        setTimeout(() => {
            li.remove();
            saveData();
        }, 300);
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


