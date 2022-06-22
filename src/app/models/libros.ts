export class Libros {

        public Id_libro: number
        public Id_usuario: number
        public titulo: string
        public tipoLibro: string
        public autor: string
        public precio: string
        public photo: string

    
        constructor(Id_libro: number, Id_usuario:number, titulo:string, tipoLibro:string, autor:string, precio:string, photo:string){
    
            this.Id_libro = Id_libro;
            this.Id_usuario = Id_usuario;
            this.titulo = titulo;
            this.tipoLibro = tipoLibro;
            this.autor = autor;
            this.precio = precio;
            this.photo = photo;

        }
}


