let s1Text = document.querySelector('.s1_container > .s1_text');
s1Text.textContent = "Этот текст присваивается с помощью JS";
setInterval(() => s1Text.hidden = !s1Text.hidden, 2000);

//смена цвета звезды по клику
let elems1 = document.querySelector('.s2_c2 .s2_btn_container');
for (let btn of elems1.children) {
    btn.onclick = function () {
        let star = document.querySelector('.s2_c2 .s2_icon');
        if (this.classList.contains('btn_active')) {
            btn.classList.remove('btn_active')
            star.classList.remove('fa-star')
            star.classList.add('fa-star-o')
            star.style.color = '#e3e3e3'
        } else {
            document.querySelector('.s2_c2 .s2_btn_container .btn_active') ? document.querySelector('.s2_c2 .s2_btn_container .btn_active').classList.remove('btn_active') : "";
            this.classList.add('btn_active');
            star.classList.remove('fa-star-o')
            star.classList.add('fa-star')
            star.style.color = btn.dataset.color
        }
    }
}

//смена цвета колокольчика по наведению
let currentBtn;
document.querySelector('.s2_c1').addEventListener('mouseover', function (e) {
    if (e.target.closest('.s2_btn')) {
        currentBtn = e.target;
        let icon = document.querySelector('.s2_c1 .s2_icon');
        icon.classList.remove('fa-bell-o')
        icon.classList.add('fa-bell')
        icon.style.color = e.target.dataset.color
    }
})
document.querySelector('.s2_c1').addEventListener('mouseout', function (e) {
    if (e.target.closest('.s2_btn')) {
        currentBtn = e.target;
        let icon = document.querySelector('.s2_c1 .s2_icon');
        icon.classList.remove('fa-bell')
        icon.classList.add('fa-bell-o')
        icon.style.color = '#e3e3e3'
    }
})

document.addEventListener('keydown', function (e) {
    let btn;
    switch (e.code) {
        case "KeyA":
            btn = document.querySelector('.s2_c3 .s2_btn_container .btn_red')
            if (btn.classList.contains('btn_active')) {
                unPressAction(btn);
            } else {
                pressAction(btn)
            }
            break;
        case "KeyS":
            btn = document.querySelector('.s2_c3 .s2_btn_container .btn_yellow')
            if (btn.classList.contains('btn_active')) {
                unPressAction(btn);
            } else {
                pressAction(btn)
            }
            break;
        case "KeyD":
            btn = document.querySelector('.s2_c3 .s2_btn_container .btn_blue')
            if (btn.classList.contains('btn_active')) {
                unPressAction(btn);
            } else {
                pressAction(btn)
            }
            break;
        case "KeyF":
            btn = document.querySelector('.s2_c3 .s2_btn_container .btn_green')
            if (btn.classList.contains('btn_active')) {
                unPressAction(btn);
            } else {
                pressAction(btn)
            }
            break;
    }
})

function unPressAction(btn) {
    let envelopeIcon = document.querySelector('.s2_c3 .s2_icon')
    envelopeIcon.classList.remove('fa-envelope')
    envelopeIcon.classList.add('fa-envelope-o')
    envelopeIcon.style.color = '#e3e3e3';
    btn.classList.remove('btn_active')
    btn.style.lineHeight = '31px';
}

function pressAction(btn) {
    document.querySelectorAll('.s2_c3 .s2_btn_container .s2_btn').forEach(b => {
        if (btn !== b) {
            b.classList.remove('btn_active');
            b.style.lineHeight = '31px';
        }
    })
    let envelopeIcon = document.querySelector('.s2_c3 .s2_icon')
    envelopeIcon.classList.remove('fa-envelope-o')
    envelopeIcon.classList.add('fa-envelope')
    envelopeIcon.style.color = btn.dataset.color;
    btn.classList.add('btn_active')
    btn.style.lineHeight = '25px';
}

let disabled = false
document.querySelector('.s3_button').onclick = function () {
    if (disabled) return;
    disabled = true;
    let complete = document.querySelector('.pb_container>.complete')
    let progress = 0;
    complete.style.borderRadius = '5px 0 0 5px'
    let interval = setInterval(() => {
        complete.style.width = progress + '%'
        if (progress >= 100) {
            complete.style.width = 100 + '%'
            complete.style.borderRadius = '5px 5px 5px 5px'
            clearInterval(interval)
            disabled = false;
        }
        progress += getRandomInteger(1, 6);
    }, 150)
    // disabled = false;
}

function getRandomInteger(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}