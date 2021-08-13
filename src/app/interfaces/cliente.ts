export interface Cliente {
    clientes: ClienteElement[];
}

export interface ClienteElement {
    _id:               string;
    lugar_trabajo:     string;
    direccion_trabajo: string;
    telefono_trabajo:  number;
    cargo:             string;
    sueldo:            number;
    otros_cargos:      number;
    correo:            string;
    id_persona:        IDPersona;
    __v:               number;
}

export interface IDPersona {
    _id:          string;
    apellido:     string;
    cedula:       number;
    estado_civil: string;
    nombre:       string;
    telefono:     number;
    __v:          number;
}
