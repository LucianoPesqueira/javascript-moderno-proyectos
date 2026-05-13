//----Arrow Functions en el Reproductor de Musica----

const reproductor12 = {
    cancion : '',
    reproducir : id =>  console.log(`Reproduciendo cancion con el id ${id}`),
    pausar : () => console.log("pausando cancion..."),
    borrar : id => console.log(`Borrando cancion numero ${id}`),
    crearPlaylist : nombre => console.log(`La playlist con el nombre: ${nombre} fue creada correctamente`),
    reproducirPlaylist : nombre => console.log(`Reproduciendo playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor12.nuevaCancion = 'Enter Sandman';
reproductor12.obtenerCancion;

reproductor12.reproducir(30);
reproductor12.reproducir(10);
reproductor12.pausar();

reproductor12.borrar(10);
reproductor12.crearPlaylist("Rock Nacional");
reproductor12.crearPlaylist("Reggaeton");
reproductor12.reproducirPlaylist("Rock Nacional");