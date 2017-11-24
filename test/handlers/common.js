'use strict';

module.exports = {
  /**
   * Used to get the cookies from a hapi server response
   * @param response
   * @returns {{}}
   */
    getCookies: (response) => {
        const cookies = {};
        response.headers['set-cookie'] && response.headers['set-cookie'].forEach((cookie) => {
            const parts = (cookie.split(';')[0]).match(/(.*?)=(.*)$/);
            cookies[parts[1].trim()] = (parts[2] || '').trim();
        });
        return cookies;
    }
};
