export class DoctorDTO{

    private id: number;
    private sexo: String;
    private nombre: String;
    private apellido: String;
    private foto: String;
    private especialidades: Array<String> = [];
    
    constructor(id: number, sexo: String,nombre: String, apellido: String, foto: String, especialidades: Array<String> = []){
        this.id = id;
        this.sexo = sexo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;
        this.especialidades = especialidades;
    }
}