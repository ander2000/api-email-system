import {jwtSing} from "../lib/jwt.js";

class IndexService{

  constructor(){}

  async index (req, res){
    res.json({ message: "welcome to my api of email system" });
  }

  async ping (req, res){
    const start = Date.now(); // Obtén el tiempo inicial

    // Procesar la respuesta
    res.status(200).json({
      message: 'ping',          // Respuesta típica
      latency: `${Date.now() - start}ms`, // Tiempo de latencia en milisegundos
    });
  }

  async generateToken (req, res) {
    const {payload} = req.body;
   
    if (!payload) {
      return res.status(400).json({ message: "invalid data" });
    }

    try {
      let result = await jwtSing(payload);
      res.status(200).json(result);
      
    } catch (error) {
      res.status(500).json("Error Server");
    }

  };
}

export default IndexService;