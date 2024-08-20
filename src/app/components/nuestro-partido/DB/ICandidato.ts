
export interface ICandidato {
    id: number,
    nombre: string,
    apellido: string,
    cargo: string,
    descripcion: string,
    foto: string,
    propuestas: Array<string>
}