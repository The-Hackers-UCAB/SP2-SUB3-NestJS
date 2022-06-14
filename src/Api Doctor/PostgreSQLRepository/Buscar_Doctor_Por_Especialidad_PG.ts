import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../Interfaces/DoctorRepository';
const pool = require('../DB/ConectarPG');

@Injectable()
export class Buscar_Doctor_por_Especialidad_PG implements DoctorRepository{
  
    buscarDoctor = async (params) => {

        try {
     
             const getRegistros = await pool.query(
                 "select d.*, e.nombre as Especialidad "+
                 "from especialidad e, doctor_especialidad de, doctor d "+
                 "where e.nombre=$1 and e.id=de.fk_especialidad and de.fk_doctor=d.id",[params]);
     
             return getRegistros.rows;
             
         } catch (err) {
             console.log(err.message);
         }
         
    }

    /*getIdDoctores = async (params) => {

        try {
    
            var idDoctores: Array<number> = [];
    
            const getRegistros = await pool.query(
                "SELECT d.id "+
                "FROM doctor d, doctor_especialidad de, especialidad e "+
                "WHERE e.id=de.fk_especialidad and de.fk_doctor=d.id and e.nombre=$1",[params]
            );
    
            for(var i = 0; i<getRegistros.rows.length; i++)
              idDoctores.push(getRegistros.rows[i].id);
            
            return idDoctores;
          
        } catch (err) {
          console.log(err.message);
        }
      }*/
    

}
