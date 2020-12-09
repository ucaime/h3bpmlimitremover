// ==UserScript==
// @name         氚云试用移除
// @namespace    ucaime
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.h3yun.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(".mainwrappermask { filter:none !important; }.limitmodal-mask{display:none !important;}.mainwrapper.mainwrappermask::before{position:unset !important;}");
})();
