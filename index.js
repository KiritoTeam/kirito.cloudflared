client = require("./index");
const Cloudflared = require('kirito.cloudflared.subservice');
// Script by CroneGamesPlays Developer, NeoKurai Studios $ Adss Group Corporation © 2020 - 2024 × Todos os direitos reservados.

//const axios = require('axios');
//const fetch = require("node-fetch");

class Server {
    
  constructor() {
    // Você pode inicializar instâncias aqui, se necessário
  }

  //Métodos da class do KiritoAPI

async start(p) {
    try {
const portpri = p
if (!portpri) {
      throw new Error("Você deve informar qual e porta que seu servidor web usar");
    }      
async function startTunnel(port) {
  try {      
    const bin = await Cloudflared.install_cloudflared();
    if (!bin) {
      console.error("❌ Não foi possível instalar o binário do cloudflared.");
      return;
    }

    const tunnel = new Cloudflared(`http://localhost:${port}`);

    tunnel.on("ready", (info) => {
      console.log(`✅ Cloudflare Tunnel pronto: ${info.url}`);
    });

    tunnel.on("subservice", (info) => {
      console.log(`🔹 Subserviço disponível: [${info.type}] ${info.url}`);
    });

    tunnel.on("timeout", () => {
      console.error("❌ Timeout ao iniciar o túnel Cloudflare: Tunnel could not be started within o tempo limite.");
    });

    tunnel.on("error", (err) => {
      console.error("❌ Erro ao iniciar túnel Cloudflare:", err);
    });

    await tunnel.start(120000); // 2 minutos
  } catch (err) {
    console.error("❌ Erro ao iniciar túnel:", err.message);
  }
}

// Exemplo de uso
startTunnel(portpri);
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
  
}



module.exports = Server;

require("./update");


process.on("uncaughtException", (err) => {
  console.log("Exceção não capturada: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});
