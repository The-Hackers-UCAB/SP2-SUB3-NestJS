import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../Interfaces/DoctorRepository';
const pool = require('../DB/ConectarBD');

@Injectable()
export class Buscar_Doctor_por_Especialidad_PG implements DoctorRepository{
  
    BuscarDoctor = async (params) => {

        try {
     
             const getRegistros = await pool.query(
                 "select d.*, e.* "+
                 "from especialidad e, doctor_especialidad de, doctor d "+
                 "where e.nombre=$1 and e.id=de.fk_especialidad and de.fk_doctor=d.id",[params]);
     
             return getRegistros.rows;
             
         } catch (err) {
             console.log(err.message);
         }
         
       }
}