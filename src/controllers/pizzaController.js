import express from "express";

const router = express.Router();

router.get('/getall',(req, res) => {
    console.log(req.body);
    console.log(`this is a get operation`);

    const valorRetorno = {nombre: "Julian"};
    valorRetorno.apellido = "Schifer";

    const auth = true;

    const autnError = "No tenes acceso";
    res.status(auth ? 200 : 401).json(auth ? valorRetorno : authError);
})

export default router;