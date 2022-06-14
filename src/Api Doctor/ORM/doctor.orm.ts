import { DoctorDTO } from "../dto/doctor.dto";
import { ORM } from "../Interfaces/Iorm";

export class DoctorORM implements ORM{

    private doctores: Array<DoctorDTO> = [];

    mapper(data, idDoctores) {

        if(idDoctores != null){
            this.mapperAllDoctores(data,idDoctores);
        }else{
            this.mapperDoctorEspecialidad(data);
        }

    }

    public mapperAllDoctores(data, idDoctores){
        
        var id: number;
        var sexo: String;
        var nombre: String;
        var apellido: String;
        var foto: String;
            
        for(var i = 0; i < idDoctores.length; i++){
            var especialidades: Array<String> = [];
            for(var j = 0; j < data.length; j++){
                if(idDoctores[i] == data[j].id){
                    id = data[j].id;
                    sexo = data[j].sexo;
                    nombre = data[j].nombre;
                    apellido = data[j].apellido;
                    foto = data[j].foto;
                    especialidades.push(data[j].especialidad);
                }
            }
            this.doctores.push(new DoctorDTO(id,sexo,nombre,apellido,foto,especialidades));
        }
    }

    public mapperDoctorEspecialidad(data){
        
        var id = data[0].id;
        var sexo = data[0].sexo;
        var nombre = data[0].nombre;
        var apellido = data[0].apellido;
        var foto = data[0].foto;
        var especialidades: Array<String> = [];

        for(var i = 0; i<data.length; i++){
            especialidades.push(data[i].especialidad);
        }

        this.doctores.push(new DoctorDTO(id,sexo,nombre,apellido,foto,especialidades));

    }

    public getDoctores(){
        return this.doctores;
    }
}