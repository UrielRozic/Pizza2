import express from 'express'
import pizzaController from './src/controllers/pizzaController.js'

const server = express();
const puerto = 2548;

server.use(express.json());
server.use('/pizza',pizzaController);



server.listen(puerto, () => {
    console.log(`This is a server on the port ${puerto}`);
})

/*const funcion = () => {
    print("hola");
}*/
