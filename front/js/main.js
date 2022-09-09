const playBtn = document.querySelector('.bonus__main-wheel-btn'),
    main = document.querySelector('.bonus__main'),
    chips = document.querySelectorAll('.bonus__chip'),
    popupChips = document.querySelectorAll('.bonus__overlay-chip'),
    firstWoman = document.querySelector('.bonus__overlay-firstWoman'),
    secondWoman = document.querySelector('.bonus__overlay-secondWoman'),
    wheel = document.querySelector('.bonus__main-wheel-reel'),
    overlay = document.querySelector('.bonus__overlay'),
    popupFirst = document.querySelector('.bonus__firstWin'),
    popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
    popupSecondBtn = document.querySelector('.bonus__secondWin-btn'),
    popupThreedBtn = document.querySelector('.bonus__reg-sign'),
    popupSecond = document.querySelector('.bonus__secondWin'),
    popupThree = document.querySelector('.bonus__reg'),
    popupFourth = document.querySelector('.bonus__reg-step2'),
    popupFive = document.querySelector('.bonus__reg-step3'),
    rules = document.querySelector('.bonus__rules'),
    footerRulesBtn = document.querySelector('.bonus__footer-rules'),
    overflow = document.querySelector('body'),
    popupClose = document.querySelector('.bonus__rules-close'),
    video = document.querySelector('.bonus__main-video-bg'),
    wrapper = document.querySelector('.bonus'),
    bonusText = document.querySelector('.bonus__main-bubble'),
    audioMain = document.querySelector('.main-audio'),
    audioWheel = document.querySelector('.wheel-audio'),
    audioPopup = document.querySelector('.popup-audio'),
    clickAudio = document.querySelector('.click-audio')

window.onload = videoSource(video, 'img/video.mp4', 'video/mp4');
function videoSource(element, src, type) {
    if (window.innerWidth > 1024) {
        let source = document.createElement('source')
        source.src = src
        source.type = type
        video.appendChild(source)
    }
}

audioMain.volume = 0.3;
audioWheel.volume = 0.2;
clickAudio.volume = 0.2;

let triesCounter = 0

footerRulesBtn.addEventListener('click', () => {
    clickAudio.play()
    overlay.classList.remove('opacity-overlay')
    rules.classList.remove('hide')
    main.classList.add('blur')
    chips.forEach(function (el) {
        el.classList.add('blur')
    })
    popupChips.forEach(function (el) {
        el.classList.add('hide')
    })
})

popupClose.addEventListener('click', () => {
    if(popupThree.classList.contains('if-open-reg')){
        popupThree.classList.remove('hide');
        rules.classList.add('hide');
        clickAudio.play()
        return
    }
    clickAudio.play()
    main.classList.remove('blur')
    overlay.classList.add('opacity-overlay')
    rules.classList.add('hide')
    overflow.style.overflow = 'unset'
    chips.forEach(function (el) {
        el.classList.remove('blur')
    })

})

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
        audioMain.play()
    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    audioWheel.play()
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(992deg)'
    wheel.classList.remove('reel-rotation-first')
    overlay.classList.add('win-tab')
    overlay.classList.add('win-mob')
    firstWoman.classList.remove('hide')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    audioWheel.pause()
    audioPopup.play()
    setTimeout(() => {
        playBtn.classList.add('pulse-btn')
        playBtn.style.cursor = 'pointer'
        bonusText.style.display = "none"
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    audioWheel.play()
    setTimeout(() => {
        doAfterSecondRotation()
    }, 6000)
    triesCounter++
}

function doAfterSecondRotation() {
    overlay.classList.add('win-tab')
    overlay.classList.add('win-mob')
    secondWoman.classList.remove('hide')
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
    audioWheel.pause()
    audioPopup.play()
}

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
    main.classList.add('blur')
    chips.forEach(function (el) {
        el.classList.add('blur')
    })
    popupChips.forEach(function (el) {
        el.classList.remove('hide')
    })
}

popupFirstBtn.addEventListener('click', () => {
    clickAudio.play()
    main.classList.remove('blur')
    firstWoman.classList.add('hide')
    chips.forEach(function (el) {
        el.classList.remove('blur')
    })
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
    overlay.classList.remove('win-tab')
    overlay.classList.remove('win-mob')
})

popupSecondBtn.addEventListener('click', () => {
    clickAudio.play();
    secondWoman.classList.add('hide')
    popupSecond.classList.add('hide')
    popupThree.classList.remove('hide')
    popupChips.forEach(function (el) {
        el.classList.add('hide')
    })
    overlay.classList.remove('win-tab')
    overlay.classList.remove('win-mob')
})

popupThreedBtn.addEventListener('click', () =>{
    clickAudio.play();
    popupThree.classList.add('hide')
    popupFourth.classList.remove('hide')
    overlay.classList.remove('win-tab')
    overlay.classList.remove('win-mob')
})

const rulesInForm = document.querySelector('.bonus__reg-activate_link')
rulesInForm.addEventListener('click', () => {
    clickAudio.play();
    rules.classList.remove('hide');
    popupThree.classList.add('hide');
    popupThree.classList.add('if-open-reg');


})

//intro show last popUp
const lastPopup = document.querySelector('.show-last-popup');
lastPopup.addEventListener('click', () => {
    clickAudio.play();
    popupFive.classList.remove('hide')
    popupChips.forEach(function (el) {
        el.classList.add('hide')
    })
    popupFourth.classList.add('hide')
})

const fetBonusBtn = document.querySelector('.bonus__reg-step3_link');
fetBonusBtn.addEventListener('click', () => {
    clickAudio.play();
})

//form js
const telWrap = document.querySelector('.bonus__reg-tel');
const telInput = document.querySelector('.input-tel');
const passInput = document.querySelector('.input-pass');
const passWrap = document.querySelector('.bonus__reg-pass');
const showPassBtn = document.querySelector('.bonus__reg-pass_show');

//focus on tel
telInput.onfocus = function () {
    telWrap.classList.add('_focus')
};
telInput.onblur = function () {
    telWrap.classList.remove('_focus')
};

//done input tell
function showCount() {
    let lengthInput = telInput.value.length;
    if(lengthInput >= 13){
        telWrap.classList.add('_done')
        telWrap.classList.remove('_error')
    } else {
        telWrap.classList.remove('_done')
        telWrap.classList.add('_error')
    }
}
telInput.onkeyup = telInput.oninput = showCount;
telInput.onpropertychange = function() {
    if (event.propertyName === "value") showCount();
}

//done input pass
function showCountPass() {
    let lengthInput = passInput.value.length;
    if(lengthInput >= 4){
        passInput.classList.add('_done')
        passInput.classList.remove('_error')
        passWrap.classList.remove('_error')
        showPassBtn.classList.remove('_hide')
    } else {
        passInput.classList.remove('_done')
        passInput.classList.add('_error')
        showPassBtn.classList.add('_hide')
        passWrap.classList.add('_error')
    }
}

passInput.onkeyup = passInput.oninput = showCountPass;
passInput.onpropertychange = function() {
    if (event.propertyName === "value") showCountPass();
}


//show pass
showPassBtn.addEventListener('click', () => {
    if (passInput.type === 'password') {
        passInput.type = 'text';
        showPassBtn.classList.add('_active');
    } else {
        passInput.type = 'password';
        showPassBtn.classList.remove('_active')
    }
});


//mask on tel
document.addEventListener("DOMContentLoaded", function () {
    let eventCalllback = function (e) {
        let el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");

        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }

    let phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});

//verification inputs
const form = document.querySelector('.bonus__reg-step2_form')
const inputs = form.querySelectorAll('.bonus__reg-step2_number')
const KEYBOARDS = {
    backspace: 8,
    arrowLeft: 37,
    arrowRight: 39,
}

function handleInput(e) {
    const input = e.target
    const nextInput = input.nextElementSibling
    if (nextInput && input.value) {
        nextInput.focus()
        if (nextInput.value) {
            nextInput.select()
        }
    }
}

function handlePaste(e) {
    e.preventDefault()
    const paste = e.clipboardData.getData('text')
    inputs.forEach((input, i) => {
        input.value = paste[i] || ''
    })
}

function handleBackspace(e) {
    const input = e.target
    if (input.value) {
        input.value = ''
        return
    }

    input.previousElementSibling.focus()
}

function handleArrowLeft(e) {
    const previousInput = e.target.previousElementSibling
    if (!previousInput) return
    previousInput.focus()
}

function handleArrowRight(e) {
    const nextInput = e.target.nextElementSibling
    if (!nextInput) return
    nextInput.focus()
}

form.addEventListener('input', handleInput)
inputs[0].addEventListener('paste', handlePaste)

inputs.forEach(input => {
    input.addEventListener('focus', e => {
        setTimeout(() => {
            e.target.select()
        }, 0)

    })

    input.addEventListener('keydown', e => {
        switch(e.keyCode) {
            case KEYBOARDS.backspace:
                handleBackspace(e)
                break
            case KEYBOARDS.arrowLeft:
                handleArrowLeft(e)
                break
            case KEYBOARDS.arrowRight:
                handleArrowRight(e)
                break
            default:
        }
    })
});



(function () {
    let url = new URL(window.location.href)

    const params = [
        'l',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'param1',
        'param2'
    ]

    const linkParams = [
        'affid',
        'cpaid'
    ]

    params.forEach((param) => {
        if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param))
    })

    linkParams.forEach((linkParam) => {
        if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam))
    })

    window.addEventListener('click', function (e) {
        const parent = e.target.closest('a')
        if (parent) {
            e.preventDefault()

            let link = new URL(parent.href)

            const affid = localStorage.getItem('affid')
            const cpaid = localStorage.getItem('cpaid')

            if (affid && cpaid) link.pathname = '/' + affid + '/' + cpaid

            params.forEach((param) => {
                if (url.searchParams.has(param)) link.searchParams.set(param, localStorage.getItem(param))
            })
            document.location.href = link
        }
    })
})()