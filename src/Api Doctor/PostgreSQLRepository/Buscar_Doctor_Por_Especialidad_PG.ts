import { Injectable } from '@nestjs/common';
import { BD_PG } from '../DB/BD_PG';
import { DoctorRepository } from '../Interfaces/DoctorRepository';

@Injectable()
export class Buscar_Doctor_por_Especialidad_PG extends BD_PG implements DoctorRepository{
  
    buscarDoctor = async (params) => {

        try {
     
             const getRegistros = await this.pool.query(
                 "select d.*, e.nombre as Especialidad "+
                 "from especialidad e, doctor_especialidad de, doctor d "+
                 "where e.nombre=$1 and e.id=de.fk_especialidad and de.fk_doctor=d.id",[params]);
     
             return getRegistros.rows;
             
         } catch (err) {
             console.log(err.message);
         }
         
    }    

}
