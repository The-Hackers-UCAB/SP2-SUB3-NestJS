import { IBussiness_Service_Handler } from "../Interfaces/IBussiness_Service_Handler";
import { DoctorORM } from "../ORM/doctor.orm";
import { BuscarDoctoresPG } from "../PostgreSQLRepository/Buscar_Doctores_PG";
import { Buscar_Doctor_por_Especialidad_PG } from "../PostgreSQLRepository/Buscar_Doctor_Por_Especialidad_PG";

export class DoctorEspecialidad_Bussiness_Service_Handlers implements IBussiness_Service_Handler{

    async handler(params) {
        var requestDoctorEspecialidad = new Buscar_Doctor_por_Especialidad_PG();
        var requestDoctor = new BuscarDoctoresPG();
        var doctorORM = new DoctorORM();
        const dataDoctorEspecialidad = await requestDoctorEspecialidad.buscarDoctor(params);
        for(var i = 0; i < dataDoctorEspecialidad.length; i++){
            var doctores = await requestDoctor.getOneDoctor(dataDoctorEspecialidad[i].id);
            doctorORM.mapper(doctores,null);
        }
        return doctorORM.getDoctores();
    }
}