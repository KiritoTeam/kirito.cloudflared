client = require("./index");
const Urlbase = "https://api.kiritoapi.shop"

// Script by CroneGamesPlays Developer, NeoKurai Studios $ Adss Group Corporation © 2020 - 2024 × Todos os direitos reservados.

const axios = require('axios');
//const fetch = require("node-fetch");

class KiritoApi {
    
  constructor() {
    // Você pode inicializar instâncias aqui, se necessário
  }

  //Métodos da class do KiritoDB

async ping( ping ) {
    try {
      
      
      const api = await axios.get(`${Urlbase}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };


 
  async mineinfo( ve, i ) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O ip");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/mine/server/${i}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
  
  
  
  
  
  
  async minebanner( ve, i ) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O ip");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/mine/server/banner/${i}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
  
  
  
  
  
  
  async dcinfo( ve, i ) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O ip");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/discord/user/${i}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
  
  
     
  
  
async chat( ve, ii, p ) {
    try {
      const v = ve || "v1"
      const i = ii || "gpt"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O qual ia será utilizada");
      };
      if (!p) {
          throw new Error("Você Deve Informar O prompt");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/chat/${i}?prompt=${p}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
  
 
  
  
}



module.exports = KiritoApi;
