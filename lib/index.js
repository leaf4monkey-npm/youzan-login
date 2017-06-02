/**
 * Created on 2017/6/1.
 * @fileoverview 请填写简要的文件说明.
 * @author joc (Chen Wen)
 */
const request = require('request');

class Youzan {
    constructor (clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    request (url, method, formData) {
        if (arguments.length === 2) {
            [method, formData] = ['post', method];
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
                resolve(body);
            })
        );
    }

    initToken () {
        let url = 'https://uic.youzan.com/sso/open/initToken';
        return this.request(url);
    }

    login (openUserId, nickname, gender, telephone, avatar, deviceId, extra) {
        let url = 'https://uic.youzan.com/sso/open/login';
        return this.request(url, {
            open_user_id: openUserId,
            nick_name: nickname,
            gender,
            telephone,
            avatar,
            device_id: deviceId,
            extra
        });
    }

    logout (openUserId) {
        let url = 'https://uic.youzan.com/sso/open/logout';
        return this.request(url, {openUserId});
    }
}

module.exports = Youzan;
