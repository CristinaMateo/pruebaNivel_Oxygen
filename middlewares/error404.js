// Última ruta por defecto. En caso de no encontrarse ninguna anterior, devolvemos un 404

const manage404 =  (req,res) => {
    res.status(404).json({
        msj:"404 not found", 
        img:"https://http.cat/images/404.jpg"});
}

module.exports = manage404