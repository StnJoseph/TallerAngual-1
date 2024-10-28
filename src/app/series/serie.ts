export class Serie {
    numero: number;
    nombre: string;
    plataforma: string;
    temporadas: number;
    info: string;
    link: string;
    imagen: string;
   
    public constructor(numero: number, nombre: string, plataforma: string, temporadas: number, info: string, link: string, imagen: string) {
        this.numero = numero;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.info = info;
        this.link = link;
        this.imagen = imagen;
    }
   }