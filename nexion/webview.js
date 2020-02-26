"use strict";
const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.sidebar--left .unread-title .badge').length;
    const allMessages = document.querySelectorAll('.sidebar--left .unread-title').length - directMessages;
    const teamDirectMessages = document.querySelectorAll('.team-wrapper .team-container .badge').length;
    const teamMessages = document.querySelectorAll('.team-wrapper .unread-title').length - teamDirectMessages;
    Franz.setBadge(directMessages + teamDirectMessages, allMessages + teamMessages);
  };
  Franz.injectCSS(path.join(__dirname, 'style.css'));
  Franz.loop(getMessages);
};