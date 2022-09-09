"use strict";function _createForOfIteratorHelper(e,t){var o,n,r,s,a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return n=!(o=!0),{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){n=!0,r=e},f:function(){try{o||null==a.return||a.return()}finally{if(n)throw r}}};if(Array.isArray(e)||(a=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return a&&(e=a),s=0,{s:t=function(){},n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var o;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(o="Object"===(o=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:o)||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var playBtn=document.querySelector(".bonus__main-wheel-btn"),main=document.querySelector(".bonus__main"),chips=document.querySelectorAll(".bonus__chip"),popupChips=document.querySelectorAll(".bonus__overlay-chip"),firstWoman=document.querySelector(".bonus__overlay-firstWoman"),secondWoman=document.querySelector(".bonus__overlay-secondWoman"),wheel=document.querySelector(".bonus__main-wheel-reel"),overlay=document.querySelector(".bonus__overlay"),popupFirst=document.querySelector(".bonus__firstWin"),popupFirstBtn=document.querySelector(".bonus__firstWin-btn"),popupSecondBtn=document.querySelector(".bonus__secondWin-btn"),popupThreedBtn=document.querySelector(".bonus__reg-sign"),popupSecond=document.querySelector(".bonus__secondWin"),popupThree=document.querySelector(".bonus__reg"),popupFourth=document.querySelector(".bonus__reg-step2"),popupFive=document.querySelector(".bonus__reg-step3"),rules=document.querySelector(".bonus__rules"),footerRulesBtn=document.querySelector(".bonus__footer-rules"),overflow=document.querySelector("body"),popupClose=document.querySelector(".bonus__rules-close"),video=document.querySelector(".bonus__main-video-bg"),wrapper=document.querySelector(".bonus"),bonusText=document.querySelector(".bonus__main-bubble"),audioMain=document.querySelector(".main-audio"),audioWheel=document.querySelector(".wheel-audio"),audioPopup=document.querySelector(".popup-audio"),clickAudio=document.querySelector(".click-audio");function videoSource(e,t,o){var n;1024<window.innerWidth&&((n=document.createElement("source")).src=t,n.type=o,video.appendChild(n))}window.onload=videoSource(video,"img/video.mp4","video/mp4"),audioMain.volume=.3,audioWheel.volume=.2,clickAudio.volume=.2;var triesCounter=0;function runFirstRotation(){wheel.classList.add("reel-rotation-first"),playBtn.classList.remove("pulse-btn"),playBtn.style.cursor="default",wrapper.style.pointerEvents="none",audioWheel.play(),setTimeout(function(){doAfterFirstRotation()},6e3),triesCounter++}function doAfterFirstRotation(){wheel.style.transform="rotate(992deg)",wheel.classList.remove("reel-rotation-first"),overlay.classList.add("win-tab"),overlay.classList.add("win-mob"),firstWoman.classList.remove("hide"),displayPopup(popupFirst),wrapper.style.pointerEvents="auto",overflow.style.overflow="hidden",audioWheel.pause(),audioPopup.play(),setTimeout(function(){playBtn.classList.add("pulse-btn"),playBtn.style.cursor="pointer",bonusText.style.display="none"},1200)}function runSecondRotation(){wheel.classList.add("reel-rotation-second"),playBtn.classList.remove("pulse-btn"),playBtn.style.cursor="default",overflow.style.overflow="hidden",wrapper.style.pointerEvents="none",audioWheel.play(),setTimeout(function(){doAfterSecondRotation()},6e3),triesCounter++}function doAfterSecondRotation(){overlay.classList.add("win-tab"),overlay.classList.add("win-mob"),secondWoman.classList.remove("hide"),displayPopup(popupSecond),wrapper.style.pointerEvents="auto",audioWheel.pause(),audioPopup.play()}function displayPopup(e){overlay.classList.remove("opacity-overlay"),e.classList.remove("hide"),main.classList.add("blur"),chips.forEach(function(e){e.classList.add("blur")}),popupChips.forEach(function(e){e.classList.remove("hide")})}footerRulesBtn.addEventListener("click",function(){clickAudio.play(),overlay.classList.remove("opacity-overlay"),rules.classList.remove("hide"),main.classList.add("blur"),chips.forEach(function(e){e.classList.add("blur")}),popupChips.forEach(function(e){e.classList.add("hide")})}),popupClose.addEventListener("click",function(){popupThree.classList.contains("if-open-reg")?(popupThree.classList.remove("hide"),rules.classList.add("hide"),clickAudio.play()):(clickAudio.play(),main.classList.remove("blur"),overlay.classList.add("opacity-overlay"),rules.classList.add("hide"),overflow.style.overflow="unset",chips.forEach(function(e){e.classList.remove("blur")}))}),playBtn.addEventListener("click",function(){0===triesCounter?(runFirstRotation(),audioMain.play()):runSecondRotation()}),popupFirstBtn.addEventListener("click",function(){clickAudio.play(),main.classList.remove("blur"),firstWoman.classList.add("hide"),chips.forEach(function(e){e.classList.remove("blur")}),overlay.classList.add("opacity-overlay"),popupFirst.classList.add("hide"),overflow.style.overflow="unset",overlay.classList.remove("win-tab"),overlay.classList.remove("win-mob")}),popupSecondBtn.addEventListener("click",function(){clickAudio.play(),secondWoman.classList.add("hide"),popupSecond.classList.add("hide"),popupThree.classList.remove("hide"),popupChips.forEach(function(e){e.classList.add("hide")}),overlay.classList.remove("win-tab"),overlay.classList.remove("win-mob")}),popupThreedBtn.addEventListener("click",function(){clickAudio.play(),popupThree.classList.add("hide"),popupFourth.classList.remove("hide"),overlay.classList.remove("win-tab"),overlay.classList.remove("win-mob")});var rulesInForm=document.querySelector(".bonus__reg-activate_link"),lastPopup=(rulesInForm.addEventListener("click",function(){clickAudio.play(),rules.classList.remove("hide"),popupThree.classList.add("hide"),popupThree.classList.add("if-open-reg")}),document.querySelector(".show-last-popup")),fetBonusBtn=(lastPopup.addEventListener("click",function(){clickAudio.play(),popupFive.classList.remove("hide"),popupChips.forEach(function(e){e.classList.add("hide")}),popupFourth.classList.add("hide")}),document.querySelector(".bonus__reg-step3_link")),telWrap=(fetBonusBtn.addEventListener("click",function(){clickAudio.play()}),document.querySelector(".bonus__reg-tel")),telInput=document.querySelector(".input-tel"),passInput=document.querySelector(".input-pass"),passWrap=document.querySelector(".bonus__reg-pass"),showPassBtn=document.querySelector(".bonus__reg-pass_show");function showCount(){13<=telInput.value.length?(telWrap.classList.add("_done"),telWrap.classList.remove("_error")):(telWrap.classList.remove("_done"),telWrap.classList.add("_error"))}function showCountPass(){4<=passInput.value.length?(passInput.classList.add("_done"),passInput.classList.remove("_error"),passWrap.classList.remove("_error"),showPassBtn.classList.remove("_hide")):(passInput.classList.remove("_done"),passInput.classList.add("_error"),showPassBtn.classList.add("_hide"),passWrap.classList.add("_error"))}telInput.onfocus=function(){telWrap.classList.add("_focus")},telInput.onblur=function(){telWrap.classList.remove("_focus")},telInput.onkeyup=telInput.oninput=showCount,telInput.onpropertychange=function(){"value"===event.propertyName&&showCount()},passInput.onkeyup=passInput.oninput=showCountPass,passInput.onpropertychange=function(){"value"===event.propertyName&&showCountPass()},showPassBtn.addEventListener("click",function(){"password"===passInput.type?(passInput.type="text",showPassBtn.classList.add("_active")):(passInput.type="password",showPassBtn.classList.remove("_active"))}),document.addEventListener("DOMContentLoaded",function(){function e(e){var t=(o=e.target).dataset.phoneClear,o=o.dataset.phonePattern,n=0,r=(o=o||"+7(___) ___-__-__").replace(/\D/g,""),s=e.target.value.replace(/\D/g,"");"false"!==t&&"blur"===e.type&&s.length<o.match(/([\_\d])/g).length?e.target.value="":(r.length>=s.length&&(s=r),e.target.value=o.replace(/./g,function(e){return/[_\d]/.test(e)&&n<s.length?s.charAt(n++):n>=s.length?"":e}))}var t,o=_createForOfIteratorHelper(document.querySelectorAll("[data-phone-pattern]"));try{for(o.s();!(t=o.n()).done;)for(var n=t.value,r=0,s=["input","blur","focus"];r<s.length;r++){var a=s[r];n.addEventListener(a,e)}}catch(e){o.e(e)}finally{o.f()}});var form=document.querySelector(".bonus__reg-step2_form"),inputs=form.querySelectorAll(".bonus__reg-step2_number"),KEYBOARDS={backspace:8,arrowLeft:37,arrowRight:39};function handleInput(e){var e=e.target,t=e.nextElementSibling;t&&e.value&&(t.focus(),t.value&&t.select())}function handlePaste(e){e.preventDefault();var o=e.clipboardData.getData("text");inputs.forEach(function(e,t){e.value=o[t]||""})}function handleBackspace(e){e=e.target;e.value?e.value="":e.previousElementSibling.focus()}function handleArrowLeft(e){e=e.target.previousElementSibling;e&&e.focus()}function handleArrowRight(e){e=e.target.nextElementSibling;e&&e.focus()}form.addEventListener("input",handleInput),inputs[0].addEventListener("paste",handlePaste),inputs.forEach(function(e){e.addEventListener("focus",function(e){setTimeout(function(){e.target.select()},0)}),e.addEventListener("keydown",function(e){switch(e.keyCode){case KEYBOARDS.backspace:handleBackspace(e);break;case KEYBOARDS.arrowLeft:handleArrowLeft(e);break;case KEYBOARDS.arrowRight:handleArrowRight(e)}})}),function(){var n=new URL(window.location.href),r=["l","utm_source","utm_medium","utm_campaign","utm_term","utm_content","param1","param2"];r.forEach(function(e){n.searchParams.has(e)&&localStorage.setItem(e,n.searchParams.get(e))}),["affid","cpaid"].forEach(function(e){n.searchParams.has(e)&&localStorage.setItem(e,n.searchParams.get(e))}),window.addEventListener("click",function(e){var t,o=e.target.closest("a");o&&(e.preventDefault(),t=new URL(o.href),e=localStorage.getItem("affid"),o=localStorage.getItem("cpaid"),e&&o&&(t.pathname="/"+e+"/"+o),r.forEach(function(e){n.searchParams.has(e)&&t.searchParams.set(e,localStorage.getItem(e))}),document.location.href=t)})}();