/**
 * Created on 2017/6/2.
 * @fileoverview 请填写简要的文件说明.
 * @author joc (Chen Wen)
 */
const Youzan = require('../lib');

let youzan = new Youzan('client_id', 'client_secret');

let promise = youzan.initToken()
    .then(res => {
        //{
        //    "code": 0,
        //    "msg": "success",
        //    "data": {
        //        "access_token": "6460257b9aaf38c494d55a2c432bd4c9",
        //        "cookie_key": null,
        //        "cookie_value": null
        //    }
        //}
        return res;
    })
    .catch(e => {
        console.log(e);
        throw e;
    });
