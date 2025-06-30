Para instalar a kiritoapi na sua aplicação basta utilizar 

```npm i kiritoapi```

No console.

# Rotas da KiritoApi

```js
const KiritoApi = require("kiritoapi")
const api = new KiritoApi()

//Minecraft Info
api.mineinfo("mc.sparklypower.net")

//Minecraft Banner
api.minebanner("mc.sparklypower.net")

//Discord UserInfo
api.userinfo("820344895528632380")

//Discord SetBanner
api.setBannerBot("Client-Token", "Link do Banner")

//Discord Invite Info
api.inviteInfo("Link de um Servidor")

//ChatGpt
api.chat("oii")
```

Agradecemos por utilizar nossa package.


Base Feita Pelo: https://github.com/shindozk
