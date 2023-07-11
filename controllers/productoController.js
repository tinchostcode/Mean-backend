exports.crearProducto= (req,res) => {

   try {
     let producto;
     //creamos nuestro producto
     producto= new producto
   } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error');
   }
} 