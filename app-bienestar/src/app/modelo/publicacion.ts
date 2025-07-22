export interface Publicacion {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string; // ISO string
  imagen?: string; // base64 o ruta local
}