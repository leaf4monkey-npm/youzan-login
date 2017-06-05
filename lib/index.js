/**
 * Created on 2017/6/1.
 * @fileoverview 请填写简要的文件说明.
 * @author joc (Chen Wen)
 */
'use strict';

const request = require('request');

class Youzan {
    constructor (clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    request (url, method, formData) {
        if (arguments.length === 2) {
            formData = method;
            method = 'post';
        }
        method = method || 'post';
        formData = formData || {};
        formData.client_id = this.clientId;
        formData.client_secret = this.clientSecret;
        return new Promise((resolve, reject) =>
            request(url, {method, formData}, function (err, response, body) {
                if (err) {
                    return reject(err);
                }
                let data = JSON.parse(body);
                if (!data.code) {
                    resolve(data.data || data);
                } else {
                    reject(data);
                }
            })
        );
    }

    initToken () {
        let url = 'https://uic.youzan.com/sso/open/initToken';
        return this.request(url);
    }

    login (openUserId, nickname, gender, telephone, avatar, deviceId, extra) {
        let url = 'https://uic.youzan.com/sso/open/login';
        let data = {
            open_user_id: openUserId,
            nick_name: nickname,
            gender,
            telephone,
            avatar,
            device_id: deviceId,
            extra
        };
        let _data = {};
        for (let i in data) {
            if (data.hasOwnProperty(i) && typeof data[i] !== 'undefined') {
                _data[i] = data[i];
            }
        }
        return this.request(url, _data);
    }

    logout (openUserId) {
        let url = 'https://uic.youzan.com/sso/open/logout';
        return this.request(url, {open_user_id: openUserId});
    }
}

module.exports = Youzan;
