// ==UserScript==
// @name         MelvorIdle Wiki Darkmode
// @namespace    https://github.com/Nastyscript
// @version      0.1.0
// @description  try to take over the world!
// @author       Nastyscript
// @license      GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include      https://wiki.melvoridle.com/*
// @require      https://raw.githubusercontent.com/Nastyscript/Melvoridle-Wiki-Darkmode/master/GM_setStyle.js
// @resource     css https://raw.githubusercontent.com/Nastyscript/Melvoridle-Wiki-Darkmode/master/DarkReader-wiki-melvoridle-com.css
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
  let styleNode = GM_setStyle({
    data: GM_getResourceText("css")
  });

})();