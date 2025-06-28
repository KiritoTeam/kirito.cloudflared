Para instalar a kiritoapi na sua aplicação basta utilizar 

```npm i kiritoapi```

No console.

# Rotas da KiritoApi

```js
const KiritoApi = require("kirito.api")
const api = new KiritoApi()

//Minecraft Info
api.mineinfo("mc.sparklypower.net")

//Minecraft Banner
api.minebanner("mc.sparklypower.net")

//Discord UserInfo
api.userinfo("820344895528632380")

//ChatGpt
api.chat("oii")
```

Agradecemos por utilizar nossa package.
