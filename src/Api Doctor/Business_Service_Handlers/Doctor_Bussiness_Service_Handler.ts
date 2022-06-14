import { IBusiness_Service_Handler } from "../Interfaces/IBusiness_Service_Handler";
import { DoctorORM } from "../ORM/doctor.orm";
import { BuscarDoctoresPG } from "../PostgreSQLRepository/Buscar_Doctores_PG";

export class Doctor_Business_Service_Handler implements IBusiness_Service_Handler{

    async handler(params) {
        var request = new BuscarDoctoresPG();
        const dataDoctores = await request.buscarDoctor(null);
        const idDoctores = await request.getIdDoctores();
        var doctorORM = new DoctorORM();
        doctorORM.mapper(dataDoctores,idDoctores);
        return doctorORM.getDoctores();
    }
}