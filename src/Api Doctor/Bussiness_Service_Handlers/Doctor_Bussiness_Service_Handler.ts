import { IBussiness_Service_Handler } from "../Interfaces/IBussiness_Service_Handler";
import { DoctorORM } from "../ORM/doctor.orm";
import { BuscarDoctoresPG } from "../PostgreSQLRepository/Buscar_Doctores_PG";

export class Doctor_Bussiness_Service_Handler implements IBussiness_Service_Handler{

    async handler(params) {
        var request = new BuscarDoctoresPG();
        const dataDoctores = await request.buscarDoctor(null);
        const idDoctores = await request.getIdDoctores();
        var doctorORM = new DoctorORM();
        doctorORM.mapper(dataDoctores,idDoctores);
        return doctorORM.getDoctores();
    }
}