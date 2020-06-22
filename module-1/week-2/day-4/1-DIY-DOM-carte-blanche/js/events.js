const _KEYS = {
    z: "top",
    q: "left",
    d: "right",
    s: "bottom",
};

console.log()

export function listenKeyboard() {
    const player = document.getElementById("player");
    window.onkeyup = (evt) => {
        if (!Object.keys(_KEYS).includes(evt.key)) return;
        const dir = _KEYS[evt.key]; // direction
        console.log(dir)
        const bounding =  document.querySelector(".cell.is-active").getBoundingClientRect();
        const memory =  player.getBoundingClientRect()[dir];
        console.log(memory, bounding)
        // player.style[_KEYS[evt.key]] = (memory + 1) + "px"
    }
}

export function listenNextLevel(callback) {
    document.getElementById("next-level").onclick = callback
}