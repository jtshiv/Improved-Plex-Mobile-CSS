// ==UserScript==
// @name         Plex Mobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jtshiv
// @match        https://app.plex.tv/desktop/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=plex.tv
// @resource     plex_css https://raw.githubusercontent.com/jtshiv/Improved-Plex-Mobile-CSS/master/plex_mobile.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const plex_css = GM_getResourceText("plex_css");
    GM_addStyle(plex_css);
})();