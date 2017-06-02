# Youzan-Login

有赞 AppSDK 的登录态 API

### Usage

```js
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
```

### Apis

- `constructor (clientId: string, clientSecret: string)` 初始化有赞工具型应用提供的 `client_id` 和 `client_secret`

- `initToken ()` 获取初始化 token

- `login ()` 登录

- `logout ()` 登出
