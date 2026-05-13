//----Añadir funciones en un objeto----


const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar : function() {
        console.log("pausando cancion...");
    },
    borrar : function(id) {
    console.log(`Borrando cancion numero ${id}`);
    },
    crearPlaylist : function(nombre) {
        console.log(`La playlist con el nombre: ${nombre} fue creada correctamente`);
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(10);
reproductor.pausar();


// reproductor.borrar = function(id) {
//     console.log(`Borrando cancion numero ${id}`);
// }

reproductor.borrar(10);
reproductor.crearPlaylist("Rock Nacional");
reproductor.crearPlaylist("Reggaeton");
reproductor.reproducirPlaylist("Rock Nacional");




