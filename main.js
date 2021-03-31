window.onload = () => {
    const done = 50;
    let i = 0;
    if (i == 0) {
        i = 1;
        const bar = document.querySelector('.bar');
        let width = 5;
        let id = setInterval(frame, 20);

        function frame() {
            if (width >= done) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                bar.style.width = width + "%";
                bar.innerHTML = width + "%";
            }
        }
    }
}