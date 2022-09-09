"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var playBtn = document.querySelector('.bonus__main-wheel-btn'),
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
    clickAudio = document.querySelector('.click-audio');
window.onload = videoSource(video, 'img/video.mp4', 'video/mp4');

function videoSource(element, src, type) {
  if (window.innerWidth > 1024) {
    var source = document.createElement('source');
    source.src = src;
    source.type = type;
    video.appendChild(source);
  }
}

audioMain.volume = 0.3;
audioWheel.volume = 0.2;
clickAudio.volume = 0.2;
var triesCounter = 0;
footerRulesBtn.addEventListener('click', function () {
  clickAudio.play();
  overlay.classList.remove('opacity-overlay');
  rules.classList.remove('hide');
  main.classList.add('blur');
  chips.forEach(function (el) {
    el.classList.add('blur');
  });
  popupChips.forEach(function (el) {
    el.classList.add('hide');
  });
});
popupClose.addEventListener('click', function () {
  if (popupThree.classList.contains('if-open-reg')) {
    popupThree.classList.remove('hide');
    rules.classList.add('hide');
    clickAudio.play();
    return;
  }

  clickAudio.play();
  main.classList.remove('blur');
  overlay.classList.add('opacity-overlay');
  rules.classList.add('hide');
  overflow.style.overflow = 'unset';
  chips.forEach(function (el) {
    el.classList.remove('blur');
  });
});
playBtn.addEventListener('click', function () {
  if (triesCounter === 0) {
    runFirstRotation();
    audioMain.play();
  } else {
    runSecondRotation();
  }
});

function runFirstRotation() {
  wheel.classList.add('reel-rotation-first');
  playBtn.classList.remove('pulse-btn');
  playBtn.style.cursor = 'default';
  wrapper.style.pointerEvents = 'none';
  audioWheel.play();
  setTimeout(function () {
    doAfterFirstRotation();
  }, 6000);
  triesCounter++;
}

function doAfterFirstRotation() {
  wheel.style.transform = 'rotate(992deg)';
  wheel.classList.remove('reel-rotation-first');
  overlay.classList.add('win-tab');
  overlay.classList.add('win-mob');
  firstWoman.classList.remove('hide');
  displayPopup(popupFirst);
  wrapper.style.pointerEvents = 'auto';
  overflow.style.overflow = 'hidden';
  audioWheel.pause();
  audioPopup.play();
  setTimeout(function () {
    playBtn.classList.add('pulse-btn');
    playBtn.style.cursor = 'pointer';
    bonusText.style.display = "none";
  }, 1200);
}

function runSecondRotation() {
  wheel.classList.add('reel-rotation-second');
  playBtn.classList.remove('pulse-btn');
  playBtn.style.cursor = 'default';
  overflow.style.overflow = 'hidden';
  wrapper.style.pointerEvents = 'none';
  audioWheel.play();
  setTimeout(function () {
    doAfterSecondRotation();
  }, 6000);
  triesCounter++;
}

function doAfterSecondRotation() {
  overlay.classList.add('win-tab');
  overlay.classList.add('win-mob');
  secondWoman.classList.remove('hide');
  displayPopup(popupSecond);
  wrapper.style.pointerEvents = 'auto';
  audioWheel.pause();
  audioPopup.play();
}

function displayPopup(popup) {
  overlay.classList.remove('opacity-overlay');
  popup.classList.remove('hide');
  main.classList.add('blur');
  chips.forEach(function (el) {
    el.classList.add('blur');
  });
  popupChips.forEach(function (el) {
    el.classList.remove('hide');
  });
}

popupFirstBtn.addEventListener('click', function () {
  clickAudio.play();
  main.classList.remove('blur');
  firstWoman.classList.add('hide');
  chips.forEach(function (el) {
    el.classList.remove('blur');
  });
  overlay.classList.add('opacity-overlay');
  popupFirst.classList.add('hide');
  overflow.style.overflow = 'unset';
  overlay.classList.remove('win-tab');
  overlay.classList.remove('win-mob');
});
popupSecondBtn.addEventListener('click', function () {
  clickAudio.play();
  secondWoman.classList.add('hide');
  popupSecond.classList.add('hide');
  popupThree.classList.remove('hide');
  popupChips.forEach(function (el) {
    el.classList.add('hide');
  });
  overlay.classList.remove('win-tab');
  overlay.classList.remove('win-mob');
});
popupThreedBtn.addEventListener('click', function () {
  clickAudio.play();
  popupThree.classList.add('hide');
  popupFourth.classList.remove('hide');
  overlay.classList.remove('win-tab');
  overlay.classList.remove('win-mob');
});
var rulesInForm = document.querySelector('.bonus__reg-activate_link');
rulesInForm.addEventListener('click', function () {
  clickAudio.play();
  rules.classList.remove('hide');
  popupThree.classList.add('hide');
  popupThree.classList.add('if-open-reg');
}); //intro show last popUp

var lastPopup = document.querySelector('.show-last-popup');
lastPopup.addEventListener('click', function () {
  clickAudio.play();
  popupFive.classList.remove('hide');
  popupChips.forEach(function (el) {
    el.classList.add('hide');
  });
  popupFourth.classList.add('hide');
});
var fetBonusBtn = document.querySelector('.bonus__reg-step3_link');
fetBonusBtn.addEventListener('click', function () {
  clickAudio.play();
}); //form js

var telWrap = document.querySelector('.bonus__reg-tel');
var telInput = document.querySelector('.input-tel');
var passInput = document.querySelector('.input-pass');
var passWrap = document.querySelector('.bonus__reg-pass');
var showPassBtn = document.querySelector('.bonus__reg-pass_show'); //focus on tel

telInput.onfocus = function () {
  telWrap.classList.add('_focus');
};

telInput.onblur = function () {
  telWrap.classList.remove('_focus');
}; //done input tell


function showCount() {
  var lengthInput = telInput.value.length;

  if (lengthInput >= 13) {
    telWrap.classList.add('_done');
    telWrap.classList.remove('_error');
  } else {
    telWrap.classList.remove('_done');
    telWrap.classList.add('_error');
  }
}

telInput.onkeyup = telInput.oninput = showCount;

telInput.onpropertychange = function () {
  if (event.propertyName === "value") showCount();
}; //done input pass


function showCountPass() {
  var lengthInput = passInput.value.length;

  if (lengthInput >= 4) {
    passInput.classList.add('_done');
    passInput.classList.remove('_error');
    passWrap.classList.remove('_error');
    showPassBtn.classList.remove('_hide');
  } else {
    passInput.classList.remove('_done');
    passInput.classList.add('_error');
    showPassBtn.classList.add('_hide');
    passWrap.classList.add('_error');
  }
}

passInput.onkeyup = passInput.oninput = showCountPass;

passInput.onpropertychange = function () {
  if (event.propertyName === "value") showCountPass();
}; //show pass


showPassBtn.addEventListener('click', function () {
  if (passInput.type === 'password') {
    passInput.type = 'text';
    showPassBtn.classList.add('_active');
  } else {
    passInput.type = 'password';
    showPassBtn.classList.remove('_active');
  }
}); //mask on tel

document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function eventCalllback(e) {
    var el = e.target,
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
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
  };

  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');

  var _iterator = _createForOfIteratorHelper(phone_inputs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;

      for (var _i = 0, _arr = ['input', 'blur', 'focus']; _i < _arr.length; _i++) {
        var ev = _arr[_i];
        elem.addEventListener(ev, eventCalllback);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}); //verification inputs

var form = document.querySelector('.bonus__reg-step2_form');
var inputs = form.querySelectorAll('.bonus__reg-step2_number');
var KEYBOARDS = {
  backspace: 8,
  arrowLeft: 37,
  arrowRight: 39
};

function handleInput(e) {
  var input = e.target;
  var nextInput = input.nextElementSibling;

  if (nextInput && input.value) {
    nextInput.focus();

    if (nextInput.value) {
      nextInput.select();
    }
  }
}

function handlePaste(e) {
  e.preventDefault();
  var paste = e.clipboardData.getData('text');
  inputs.forEach(function (input, i) {
    input.value = paste[i] || '';
  });
}

function handleBackspace(e) {
  var input = e.target;

  if (input.value) {
    input.value = '';
    return;
  }

  input.previousElementSibling.focus();
}

function handleArrowLeft(e) {
  var previousInput = e.target.previousElementSibling;
  if (!previousInput) return;
  previousInput.focus();
}

function handleArrowRight(e) {
  var nextInput = e.target.nextElementSibling;
  if (!nextInput) return;
  nextInput.focus();
}

form.addEventListener('input', handleInput);
inputs[0].addEventListener('paste', handlePaste);
inputs.forEach(function (input) {
  input.addEventListener('focus', function (e) {
    setTimeout(function () {
      e.target.select();
    }, 0);
  });
  input.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case KEYBOARDS.backspace:
        handleBackspace(e);
        break;

      case KEYBOARDS.arrowLeft:
        handleArrowLeft(e);
        break;

      case KEYBOARDS.arrowRight:
        handleArrowRight(e);
        break;

      default:
    }
  });
});

(function () {
  var url = new URL(window.location.href);
  var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2'];
  var linkParams = ['affid', 'cpaid'];
  params.forEach(function (param) {
    if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
  });
  linkParams.forEach(function (linkParam) {
    if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
  });
  window.addEventListener('click', function (e) {
    var parent = e.target.closest('a');

    if (parent) {
      e.preventDefault();
      var link = new URL(parent.href);
      var affid = localStorage.getItem('affid');
      var cpaid = localStorage.getItem('cpaid');
      if (affid && cpaid) link.pathname = '/' + affid + '/' + cpaid;
      params.forEach(function (param) {
        if (url.searchParams.has(param)) link.searchParams.set(param, localStorage.getItem(param));
      });
      document.location.href = link;
    }
  });
})();
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsicGxheUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJjaGlwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cENoaXBzIiwiZmlyc3RXb21hbiIsInNlY29uZFdvbWFuIiwid2hlZWwiLCJvdmVybGF5IiwicG9wdXBGaXJzdCIsInBvcHVwRmlyc3RCdG4iLCJwb3B1cFNlY29uZEJ0biIsInBvcHVwVGhyZWVkQnRuIiwicG9wdXBTZWNvbmQiLCJwb3B1cFRocmVlIiwicG9wdXBGb3VydGgiLCJwb3B1cEZpdmUiLCJydWxlcyIsImZvb3RlclJ1bGVzQnRuIiwib3ZlcmZsb3ciLCJwb3B1cENsb3NlIiwidmlkZW8iLCJ3cmFwcGVyIiwiYm9udXNUZXh0IiwiYXVkaW9NYWluIiwiYXVkaW9XaGVlbCIsImF1ZGlvUG9wdXAiLCJjbGlja0F1ZGlvIiwid2luZG93Iiwib25sb2FkIiwidmlkZW9Tb3VyY2UiLCJlbGVtZW50Iiwic3JjIiwidHlwZSIsImlubmVyV2lkdGgiLCJzb3VyY2UiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ2b2x1bWUiLCJ0cmllc0NvdW50ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImZvckVhY2giLCJlbCIsImNvbnRhaW5zIiwic3R5bGUiLCJydW5GaXJzdFJvdGF0aW9uIiwicnVuU2Vjb25kUm90YXRpb24iLCJjdXJzb3IiLCJwb2ludGVyRXZlbnRzIiwic2V0VGltZW91dCIsImRvQWZ0ZXJGaXJzdFJvdGF0aW9uIiwidHJhbnNmb3JtIiwiZGlzcGxheVBvcHVwIiwicGF1c2UiLCJkaXNwbGF5IiwiZG9BZnRlclNlY29uZFJvdGF0aW9uIiwicG9wdXAiLCJydWxlc0luRm9ybSIsImxhc3RQb3B1cCIsImZldEJvbnVzQnRuIiwidGVsV3JhcCIsInRlbElucHV0IiwicGFzc0lucHV0IiwicGFzc1dyYXAiLCJzaG93UGFzc0J0biIsIm9uZm9jdXMiLCJvbmJsdXIiLCJzaG93Q291bnQiLCJsZW5ndGhJbnB1dCIsInZhbHVlIiwibGVuZ3RoIiwib25rZXl1cCIsIm9uaW5wdXQiLCJvbnByb3BlcnR5Y2hhbmdlIiwiZXZlbnQiLCJwcm9wZXJ0eU5hbWUiLCJzaG93Q291bnRQYXNzIiwiZXZlbnRDYWxsbGJhY2siLCJlIiwidGFyZ2V0IiwiY2xlYXJWYWwiLCJkYXRhc2V0IiwicGhvbmVDbGVhciIsInBhdHRlcm4iLCJwaG9uZVBhdHRlcm4iLCJtYXRyaXhfZGVmIiwibWF0cml4IiwiaSIsImRlZiIsInJlcGxhY2UiLCJ2YWwiLCJtYXRjaCIsImEiLCJ0ZXN0IiwiY2hhckF0IiwicGhvbmVfaW5wdXRzIiwiZWxlbSIsImV2IiwiZm9ybSIsImlucHV0cyIsIktFWUJPQVJEUyIsImJhY2tzcGFjZSIsImFycm93TGVmdCIsImFycm93UmlnaHQiLCJoYW5kbGVJbnB1dCIsImlucHV0IiwibmV4dElucHV0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZm9jdXMiLCJzZWxlY3QiLCJoYW5kbGVQYXN0ZSIsInByZXZlbnREZWZhdWx0IiwicGFzdGUiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImhhbmRsZUJhY2tzcGFjZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJoYW5kbGVBcnJvd0xlZnQiLCJwcmV2aW91c0lucHV0IiwiaGFuZGxlQXJyb3dSaWdodCIsImtleUNvZGUiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXJhbXMiLCJsaW5rUGFyYW1zIiwicGFyYW0iLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0IiwibGlua1BhcmFtIiwicGFyZW50IiwiY2xvc2VzdCIsImxpbmsiLCJhZmZpZCIsImdldEl0ZW0iLCJjcGFpZCIsInBhdGhuYW1lIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0Ms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SUFBSUUsS0FBYixFQUFvQkgsSUFBSSxDQUFDSSxRQUFMLEdBQWdCLE1BQU1ILEtBQU4sR0FBYyxHQUFkLEdBQW9CRSxLQUFwQztNQUVwQmQsTUFBTSxDQUFDcEYsT0FBUCxDQUFlLFVBQUNzRixLQUFELEVBQVc7UUFDdEIsSUFBSU4sR0FBRyxDQUFDTyxZQUFKLENBQWlCQyxHQUFqQixDQUFxQkYsS0FBckIsQ0FBSixFQUFpQ1MsSUFBSSxDQUFDUixZQUFMLENBQWtCYSxHQUFsQixDQUFzQmQsS0FBdEIsRUFBNkJHLFlBQVksQ0FBQ1EsT0FBYixDQUFxQlgsS0FBckIsQ0FBN0I7TUFDcEMsQ0FGRDtNQUdBcEksUUFBUSxDQUFDZ0ksUUFBVCxDQUFrQkMsSUFBbEIsR0FBeUJZLElBQXpCO0lBQ0g7RUFDSixDQWpCRDtBQWtCSCxDQTdDRDtBQ2pZQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fbWFpbi13aGVlbC1idG4nKSxcbiAgICBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19tYWluJyksXG4gICAgY2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9udXNfX2NoaXAnKSxcbiAgICBwb3B1cENoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvbnVzX19vdmVybGF5LWNoaXAnKSxcbiAgICBmaXJzdFdvbWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19vdmVybGF5LWZpcnN0V29tYW4nKSxcbiAgICBzZWNvbmRXb21hbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fb3ZlcmxheS1zZWNvbmRXb21hbicpLFxuICAgIHdoZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19tYWluLXdoZWVsLXJlZWwnKSxcbiAgICBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19vdmVybGF5JyksXG4gICAgcG9wdXBGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fZmlyc3RXaW4nKSxcbiAgICBwb3B1cEZpcnN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19maXJzdFdpbi1idG4nKSxcbiAgICBwb3B1cFNlY29uZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fc2Vjb25kV2luLWJ0bicpLFxuICAgIHBvcHVwVGhyZWVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19yZWctc2lnbicpLFxuICAgIHBvcHVwU2Vjb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19zZWNvbmRXaW4nKSxcbiAgICBwb3B1cFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19yZWcnKSxcbiAgICBwb3B1cEZvdXJ0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fcmVnLXN0ZXAyJyksXG4gICAgcG9wdXBGaXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19yZWctc3RlcDMnKSxcbiAgICBydWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fcnVsZXMnKSxcbiAgICBmb290ZXJSdWxlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fZm9vdGVyLXJ1bGVzJyksXG4gICAgb3ZlcmZsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG4gICAgcG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fcnVsZXMtY2xvc2UnKSxcbiAgICB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fbWFpbi12aWRlby1iZycpLFxuICAgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXMnKSxcbiAgICBib251c1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX21haW4tYnViYmxlJyksXG4gICAgYXVkaW9NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXVkaW8nKSxcbiAgICBhdWRpb1doZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndoZWVsLWF1ZGlvJyksXG4gICAgYXVkaW9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1hdWRpbycpLFxuICAgIGNsaWNrQXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpY2stYXVkaW8nKVxuXG53aW5kb3cub25sb2FkID0gdmlkZW9Tb3VyY2UodmlkZW8sICdpbWcvdmlkZW8ubXA0JywgJ3ZpZGVvL21wNCcpO1xuZnVuY3Rpb24gdmlkZW9Tb3VyY2UoZWxlbWVudCwgc3JjLCB0eXBlKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNCkge1xuICAgICAgICBsZXQgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJylcbiAgICAgICAgc291cmNlLnNyYyA9IHNyY1xuICAgICAgICBzb3VyY2UudHlwZSA9IHR5cGVcbiAgICAgICAgdmlkZW8uYXBwZW5kQ2hpbGQoc291cmNlKVxuICAgIH1cbn1cblxuYXVkaW9NYWluLnZvbHVtZSA9IDAuMztcbmF1ZGlvV2hlZWwudm9sdW1lID0gMC4yO1xuY2xpY2tBdWRpby52b2x1bWUgPSAwLjI7XG5cbmxldCB0cmllc0NvdW50ZXIgPSAwXG5cbmZvb3RlclJ1bGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsaWNrQXVkaW8ucGxheSgpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LW92ZXJsYXknKVxuICAgIHJ1bGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYmx1cicpXG4gICAgY2hpcHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYmx1cicpXG4gICAgfSlcbiAgICBwb3B1cENoaXBzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIH0pXG59KVxuXG5wb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHBvcHVwVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpZi1vcGVuLXJlZycpKXtcbiAgICAgICAgcG9wdXBUaHJlZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHJ1bGVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgY2xpY2tBdWRpby5wbGF5KClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNsaWNrQXVkaW8ucGxheSgpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktb3ZlcmxheScpXG4gICAgcnVsZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgb3ZlcmZsb3cuc3R5bGUub3ZlcmZsb3cgPSAndW5zZXQnXG4gICAgY2hpcHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpXG4gICAgfSlcblxufSlcblxucGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodHJpZXNDb3VudGVyID09PSAwKSB7XG4gICAgICAgIHJ1bkZpcnN0Um90YXRpb24oKVxuICAgICAgICBhdWRpb01haW4ucGxheSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcnVuU2Vjb25kUm90YXRpb24oKVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIHJ1bkZpcnN0Um90YXRpb24oKSB7XG4gICAgd2hlZWwuY2xhc3NMaXN0LmFkZCgncmVlbC1yb3RhdGlvbi1maXJzdCcpXG4gICAgcGxheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZS1idG4nKVxuICAgIHBsYXlCdG4uc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgd3JhcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgYXVkaW9XaGVlbC5wbGF5KClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9BZnRlckZpcnN0Um90YXRpb24oKVxuICAgIH0sIDYwMDApXG4gICAgdHJpZXNDb3VudGVyKytcbn1cblxuZnVuY3Rpb24gZG9BZnRlckZpcnN0Um90YXRpb24oKSB7XG4gICAgd2hlZWwuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5OTJkZWcpJ1xuICAgIHdoZWVsLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZWwtcm90YXRpb24tZmlyc3QnKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnd2luLXRhYicpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd3aW4tbW9iJylcbiAgICBmaXJzdFdvbWFuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIGRpc3BsYXlQb3B1cChwb3B1cEZpcnN0KVxuICAgIHdyYXBwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJ1xuICAgIG92ZXJmbG93LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICBhdWRpb1doZWVsLnBhdXNlKClcbiAgICBhdWRpb1BvcHVwLnBsYXkoKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwbGF5QnRuLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpXG4gICAgICAgIHBsYXlCdG4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICAgIGJvbnVzVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9LCAxMjAwKVxufVxuXG5mdW5jdGlvbiBydW5TZWNvbmRSb3RhdGlvbigpIHtcbiAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKCdyZWVsLXJvdGF0aW9uLXNlY29uZCcpXG4gICAgcGxheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZS1idG4nKVxuICAgIHBsYXlCdG4uc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgb3ZlcmZsb3cuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIHdyYXBwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xuICAgIGF1ZGlvV2hlZWwucGxheSgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvQWZ0ZXJTZWNvbmRSb3RhdGlvbigpXG4gICAgfSwgNjAwMClcbiAgICB0cmllc0NvdW50ZXIrK1xufVxuXG5mdW5jdGlvbiBkb0FmdGVyU2Vjb25kUm90YXRpb24oKSB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd3aW4tdGFiJylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3dpbi1tb2InKVxuICAgIHNlY29uZFdvbWFuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIGRpc3BsYXlQb3B1cChwb3B1cFNlY29uZClcbiAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbiAgICBhdWRpb1doZWVsLnBhdXNlKClcbiAgICBhdWRpb1BvcHVwLnBsYXkoKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UG9wdXAocG9wdXApIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdibHVyJylcbiAgICBjaGlwcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdibHVyJylcbiAgICB9KVxuICAgIHBvcHVwQ2hpcHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgfSlcbn1cblxucG9wdXBGaXJzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGlja0F1ZGlvLnBsYXkoKVxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpXG4gICAgZmlyc3RXb21hbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBjaGlwcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJylcbiAgICB9KVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS1vdmVybGF5JylcbiAgICBwb3B1cEZpcnN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIG92ZXJmbG93LnN0eWxlLm92ZXJmbG93ID0gJ3Vuc2V0J1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnd2luLXRhYicpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd3aW4tbW9iJylcbn0pXG5cbnBvcHVwU2Vjb25kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsaWNrQXVkaW8ucGxheSgpO1xuICAgIHNlY29uZFdvbWFuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIHBvcHVwU2Vjb25kLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIHBvcHVwVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgcG9wdXBDaGlwcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB9KVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnd2luLXRhYicpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd3aW4tbW9iJylcbn0pXG5cbnBvcHVwVGhyZWVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgY2xpY2tBdWRpby5wbGF5KCk7XG4gICAgcG9wdXBUaHJlZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBwb3B1cEZvdXJ0aC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3dpbi10YWInKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnd2luLW1vYicpXG59KVxuXG5jb25zdCBydWxlc0luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fcmVnLWFjdGl2YXRlX2xpbmsnKVxucnVsZXNJbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xpY2tBdWRpby5wbGF5KCk7XG4gICAgcnVsZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHBvcHVwVGhyZWUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIHBvcHVwVGhyZWUuY2xhc3NMaXN0LmFkZCgnaWYtb3Blbi1yZWcnKTtcblxuXG59KVxuXG4vL2ludHJvIHNob3cgbGFzdCBwb3BVcFxuY29uc3QgbGFzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctbGFzdC1wb3B1cCcpO1xubGFzdFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsaWNrQXVkaW8ucGxheSgpO1xuICAgIHBvcHVwRml2ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICBwb3B1cENoaXBzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIH0pXG4gICAgcG9wdXBGb3VydGguY2xhc3NMaXN0LmFkZCgnaGlkZScpXG59KVxuXG5jb25zdCBmZXRCb251c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fcmVnLXN0ZXAzX2xpbmsnKTtcbmZldEJvbnVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsaWNrQXVkaW8ucGxheSgpO1xufSlcblxuLy9mb3JtIGpzXG5jb25zdCB0ZWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19yZWctdGVsJyk7XG5jb25zdCB0ZWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC10ZWwnKTtcbmNvbnN0IHBhc3NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1wYXNzJyk7XG5jb25zdCBwYXNzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fcmVnLXBhc3MnKTtcbmNvbnN0IHNob3dQYXNzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19yZWctcGFzc19zaG93Jyk7XG5cbi8vZm9jdXMgb24gdGVsXG50ZWxJbnB1dC5vbmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgIHRlbFdyYXAuY2xhc3NMaXN0LmFkZCgnX2ZvY3VzJylcbn07XG50ZWxJbnB1dC5vbmJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGVsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9jdXMnKVxufTtcblxuLy9kb25lIGlucHV0IHRlbGxcbmZ1bmN0aW9uIHNob3dDb3VudCgpIHtcbiAgICBsZXQgbGVuZ3RoSW5wdXQgPSB0ZWxJbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgaWYobGVuZ3RoSW5wdXQgPj0gMTMpe1xuICAgICAgICB0ZWxXcmFwLmNsYXNzTGlzdC5hZGQoJ19kb25lJylcbiAgICAgICAgdGVsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyb3InKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKVxuICAgICAgICB0ZWxXcmFwLmNsYXNzTGlzdC5hZGQoJ19lcnJvcicpXG4gICAgfVxufVxudGVsSW5wdXQub25rZXl1cCA9IHRlbElucHV0Lm9uaW5wdXQgPSBzaG93Q291bnQ7XG50ZWxJbnB1dC5vbnByb3BlcnR5Y2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gXCJ2YWx1ZVwiKSBzaG93Q291bnQoKTtcbn1cblxuLy9kb25lIGlucHV0IHBhc3NcbmZ1bmN0aW9uIHNob3dDb3VudFBhc3MoKSB7XG4gICAgbGV0IGxlbmd0aElucHV0ID0gcGFzc0lucHV0LnZhbHVlLmxlbmd0aDtcbiAgICBpZihsZW5ndGhJbnB1dCA+PSA0KXtcbiAgICAgICAgcGFzc0lucHV0LmNsYXNzTGlzdC5hZGQoJ19kb25lJylcbiAgICAgICAgcGFzc0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ19lcnJvcicpXG4gICAgICAgIHBhc3NXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19lcnJvcicpXG4gICAgICAgIHNob3dQYXNzQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19oaWRlJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnX2RvbmUnKVxuICAgICAgICBwYXNzSW5wdXQuY2xhc3NMaXN0LmFkZCgnX2Vycm9yJylcbiAgICAgICAgc2hvd1Bhc3NCdG4uY2xhc3NMaXN0LmFkZCgnX2hpZGUnKVxuICAgICAgICBwYXNzV3JhcC5jbGFzc0xpc3QuYWRkKCdfZXJyb3InKVxuICAgIH1cbn1cblxucGFzc0lucHV0Lm9ua2V5dXAgPSBwYXNzSW5wdXQub25pbnB1dCA9IHNob3dDb3VudFBhc3M7XG5wYXNzSW5wdXQub25wcm9wZXJ0eWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgPT09IFwidmFsdWVcIikgc2hvd0NvdW50UGFzcygpO1xufVxuXG5cbi8vc2hvdyBwYXNzXG5zaG93UGFzc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGFzc0lucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgcGFzc0lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHNob3dQYXNzQnRuLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgIHNob3dQYXNzQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxuICAgIH1cbn0pO1xuXG5cbi8vbWFzayBvbiB0ZWxcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZXZlbnRDYWxsbGJhY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldCxcbiAgICAgICAgICAgIGNsZWFyVmFsID0gZWwuZGF0YXNldC5waG9uZUNsZWFyLFxuICAgICAgICAgICAgcGF0dGVybiA9IGVsLmRhdGFzZXQucGhvbmVQYXR0ZXJuLFxuICAgICAgICAgICAgbWF0cml4X2RlZiA9IFwiKzcoX19fKSBfX18tX18tX19cIixcbiAgICAgICAgICAgIG1hdHJpeCA9IHBhdHRlcm4gPyBwYXR0ZXJuIDogbWF0cml4X2RlZixcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgZGVmID0gbWF0cml4LnJlcGxhY2UoL1xcRC9nLCBcIlwiKSxcbiAgICAgICAgICAgIHZhbCA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcblxuICAgICAgICBpZiAoY2xlYXJWYWwgIT09ICdmYWxzZScgJiYgZS50eXBlID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoIDwgbWF0cml4Lm1hdGNoKC8oW1xcX1xcZF0pL2cpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubGVuZ3RoID49IHZhbC5sZW5ndGgpIHZhbCA9IGRlZjtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSBtYXRyaXgucmVwbGFjZSgvLi9nLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIC9bX1xcZF0vLnRlc3QoYSkgJiYgaSA8IHZhbC5sZW5ndGggPyB2YWwuY2hhckF0KGkrKykgOiBpID49IHZhbC5sZW5ndGggPyBcIlwiIDogYVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcGhvbmVfaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGhvbmUtcGF0dGVybl0nKTtcbiAgICBmb3IgKGxldCBlbGVtIG9mIHBob25lX2lucHV0cykge1xuICAgICAgICBmb3IgKGxldCBldiBvZiBbJ2lucHV0JywgJ2JsdXInLCAnZm9jdXMnXSkge1xuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2LCBldmVudENhbGxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLy92ZXJpZmljYXRpb24gaW5wdXRzXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19yZWctc3RlcDJfZm9ybScpXG5jb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib251c19fcmVnLXN0ZXAyX251bWJlcicpXG5jb25zdCBLRVlCT0FSRFMgPSB7XG4gICAgYmFja3NwYWNlOiA4LFxuICAgIGFycm93TGVmdDogMzcsXG4gICAgYXJyb3dSaWdodDogMzksXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0KGUpIHtcbiAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0XG4gICAgY29uc3QgbmV4dElucHV0ID0gaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgaWYgKG5leHRJbnB1dCAmJiBpbnB1dC52YWx1ZSkge1xuICAgICAgICBuZXh0SW5wdXQuZm9jdXMoKVxuICAgICAgICBpZiAobmV4dElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQuc2VsZWN0KClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBhc3RlID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQnKVxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCwgaSkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHBhc3RlW2ldIHx8ICcnXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQmFja3NwYWNlKGUpIHtcbiAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0XG4gICAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5wdXQucHJldmlvdXNFbGVtZW50U2libGluZy5mb2N1cygpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFycm93TGVmdChlKSB7XG4gICAgY29uc3QgcHJldmlvdXNJbnB1dCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICBpZiAoIXByZXZpb3VzSW5wdXQpIHJldHVyblxuICAgIHByZXZpb3VzSW5wdXQuZm9jdXMoKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBcnJvd1JpZ2h0KGUpIHtcbiAgICBjb25zdCBuZXh0SW5wdXQgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICBpZiAoIW5leHRJbnB1dCkgcmV0dXJuXG4gICAgbmV4dElucHV0LmZvY3VzKClcbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGhhbmRsZUlucHV0KVxuaW5wdXRzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgaGFuZGxlUGFzdGUpXG5cbmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGUgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNlbGVjdCgpXG4gICAgICAgIH0sIDApXG5cbiAgICB9KVxuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtFWUJPQVJEUy5iYWNrc3BhY2U6XG4gICAgICAgICAgICAgICAgaGFuZGxlQmFja3NwYWNlKGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgS0VZQk9BUkRTLmFycm93TGVmdDpcbiAgICAgICAgICAgICAgICBoYW5kbGVBcnJvd0xlZnQoZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBLRVlCT0FSRFMuYXJyb3dSaWdodDpcbiAgICAgICAgICAgICAgICBoYW5kbGVBcnJvd1JpZ2h0KGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cblxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnbCcsXG4gICAgICAgICd1dG1fc291cmNlJyxcbiAgICAgICAgJ3V0bV9tZWRpdW0nLFxuICAgICAgICAndXRtX2NhbXBhaWduJyxcbiAgICAgICAgJ3V0bV90ZXJtJyxcbiAgICAgICAgJ3V0bV9jb250ZW50JyxcbiAgICAgICAgJ3BhcmFtMScsXG4gICAgICAgICdwYXJhbTInXG4gICAgXVxuXG4gICAgY29uc3QgbGlua1BhcmFtcyA9IFtcbiAgICAgICAgJ2FmZmlkJyxcbiAgICAgICAgJ2NwYWlkJ1xuICAgIF1cblxuICAgIHBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQocGFyYW0pKVxuICAgIH0pXG5cbiAgICBsaW5rUGFyYW1zLmZvckVhY2goKGxpbmtQYXJhbSkgPT4ge1xuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMobGlua1BhcmFtKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlua1BhcmFtLCB1cmwuc2VhcmNoUGFyYW1zLmdldChsaW5rUGFyYW0pKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdhJylcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgIGxldCBsaW5rID0gbmV3IFVSTChwYXJlbnQuaHJlZilcblxuICAgICAgICAgICAgY29uc3QgYWZmaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWZmaWQnKVxuICAgICAgICAgICAgY29uc3QgY3BhaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3BhaWQnKVxuXG4gICAgICAgICAgICBpZiAoYWZmaWQgJiYgY3BhaWQpIGxpbmsucGF0aG5hbWUgPSAnLycgKyBhZmZpZCArICcvJyArIGNwYWlkXG5cbiAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIGxpbmsuc2VhcmNoUGFyYW1zLnNldChwYXJhbSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFyYW0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsaW5rXG4gICAgICAgIH1cbiAgICB9KVxufSkoKSIsIiJdfQ==
