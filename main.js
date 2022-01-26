let pratos = document.querySelectorAll(".dish");

let selected = [
    { name: "", cost: 0 },
    { name: "", cost: 0 },
    { name: "", cost: 0 },
];

function check() {
    let button = document.querySelector("button.select");
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].name === "") {
            button.classList.remove("selected");
            return false;
        }
    }

    button.classList.add("selected");
    console.log(selected);
    return true;
}

function selectItem(element, id, name, cost) {
    let dish = element.parentElement.children;
    console.log(id, name, cost);

    if (element.classList.contains("selected") && selected[id].name === name) {
        selected[id].name = "";
        selected[id].cost = 0;
        element.classList.remove("selected");
        check();
        return;
    }

    for (let i = 0; i < dish.length; i++) {
        dish[i].classList.remove("selected");
    }

    element.classList.add("selected");
    selected[id].name = name;
    selected[id].cost = cost;
    check();
    return;
}

function sendOrder() {
    if (check()) {
        alert("Seu pedido foi enviado");
    }
}
