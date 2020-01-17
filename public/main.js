function sleep(ms) {
    return new Promise((res) => {
        setTimeout(res, ms);
    });
}

window.onload = async () => {
    const root = document.querySelector('#root');
    let image;
    setTimeout(() => {
        image = new Image();
        image.src = 'hackerman.jpg';
    }, 0);

    for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        element.classList.add('appear');
        element.innerHTML = 'HACKED BY NIEWINNY SERWER';
        root.appendChild(element);
        await sleep(100);
    }

    for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        element.classList.add('appear');
        element.innerHTML = 'HACKED BY NIEWINNY SERWER';
        element.style.fontSize = '40px';
        root.replaceChild(element, root.childNodes[i]);
        await sleep(100);
    }

    for (let i = 9; i > 0; i--) {
        root.removeChild(root.childNodes[i]);
        await sleep(100);
    }

    let doggo;

    root.firstChild.innerHTML = '';
    doggo = 'potenzne serwery breadoggos';
    for (let i = 0; i < doggo.length; i++) {
        root.firstChild.innerHTML += doggo[i];
        await sleep(Math.random() * 200);
    }

    const element = document.createElement('div');
    element.style.fontSize = '40px';
    root.appendChild(element);
    doggo = 'witamy w komunizmie';
    for (let i = 0; i < doggo.length; i++) {
        root.lastChild.innerHTML += doggo[i];
        await sleep(Math.random() * 200);
    }

    const link = document.createElement('a');
    link.style.fontSize = '40px';
    doggo = 'https://discord.gg/BsFhmWD';
    link.href = doggo;
    root.appendChild(link);
    for (let i = 0; i < doggo.length; i++) {
        root.lastChild.innerHTML += doggo[i];
        await sleep(50);
    }

    document.body.background = image.src;
    for (let i = 0; i < root.childElementCount; i++) {
        root.childNodes[i].style.color = 'white';
    }
}