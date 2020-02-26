'use strict';
const path = require('path');

module.exports = Franz => {
  const countTasks = () => {
    const firstBadge = document.querySelector('span.badge.badge-pill.badge-default');
    const { textContent } = firstBadge;

    Franz.setBadge(textContent);
  }

  Franz.loop(countTasks);
};
