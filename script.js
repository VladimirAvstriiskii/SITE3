const boxes = document.querySelectorAll(`.item_hide`);
const item = document.querySelector(`.item`);

boxes.forEach((box) => {
    box.addEventListener(`dragover`, dragover);
    box.addEventListener(`dragenter`, dragenter);
    box.addEventListener(`dragleave`, dragleave);
    box.addEventListener(`drop`, dragdrop);
});

function dragstart(e) {
    setTimeout(() => {
        e.target.classList.add(`hide`), 0
    })
};

function dragend(e) {
    this.classList.remove(`hide`);
    this.classList.remove(`shadow`);
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    this.classList.add(`shadow`);
}

function dragleave(e) {
    this.classList.remove(`shadow`);
}

function dragdrop(e) {
    this.append(item);
}




item.addEventListener(`dragend`, dragend);
item.addEventListener(`dragstart`, dragstart);