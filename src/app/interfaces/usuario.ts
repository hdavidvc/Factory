export interface Usuario {
    respuesta: Respuesta[];
}

export interface Respuesta {
    id:           number;
    usuario:      string;
    contrasena:   string;
    id_persona:   number;
    tipo_usuario: string;
}
