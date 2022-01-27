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
    return true;
}

function selectItem(element, id, name, cost) {
    let dish = element.parentElement.children;

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

function addOrder() {
    let list = document.querySelectorAll(".order");
    for (let i = 0; i < selected.length; i++) {
        let order = list[i].children;
        order[0].innerText = selected[i].name;
        order[1].innerText = selected[i].cost.toFixed(2).replace(".", ",");
    }

    let total = document.querySelector(".order__cost.total");
    let ans = selected[0].cost + selected[1].cost + selected[2].cost;
    total.innerText = "R$" + ans.toFixed(2).replace(".", ",");
}

function sendOrder() {
    if (check()) {
        addOrder();
        let popup = document.querySelector(".result");
        popup.classList.add("active");
    }
}

function cancel() {
    document.querySelector(".result").classList.remove("active");
}

function ok() {
    let ans = selected[0].cost + selected[1].cost + selected[2].cost;
    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${selected[0].name}
    - Bebida: ${selected[1].name}
    - Sobremesa: ${selected[2].name}
    Total: R$ ${ans.toFixed(2).replace(".", ",")}`;

    msg = encodeURIComponent(msg);

    let tel = "558481517034";
    window.location.replace(`https://wa.me/${tel}?text=${msg}`);
}
