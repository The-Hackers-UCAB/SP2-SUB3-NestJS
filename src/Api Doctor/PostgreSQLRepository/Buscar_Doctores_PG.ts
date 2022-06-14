import { Injectable } from '@nestjs/common';
import { BD_PG } from '../DB/BD_PG';
import { DoctorRepository } from '../Interfaces/DoctorRepository';

@Injectable()
export class BuscarDoctoresPG extends BD_PG implements DoctorRepository{
  
  buscarDoctor = async (params) => {

   try {

        const getRegistros = await this.pool.query(
            "SELECT d.*, e.nombre as Especialidad FROM doctor d, doctor_especialidad de, especialidad e WHERE e.id=de.fk_especialidad and de.fk_doctor=d.id"
        );

        return getRegistros.rows;

        
    } catch (err) {
        console.log(err.message);
    }
    
  }

  getIdDoctores = async () => {

    try {

        var idDoctores: Array<number> = [];

        const getRegistros = await this.pool.query(
            "SELECT id FROM doctor"
        );

        for(var i = 0; i<getRegistros.rows.length; i++)
          idDoctores.push(getRegistros.rows[i].id);
        
        return idDoctores;
      
    } catch (err) {
      console.log(err.message);
    }
  }

  getOneDoctor = async (id) => {

    try {
 
         const getRegistros = await this.pool.query(
             "select d.*, e.nombre as Especialidad "+
             "from especialidad e, doctor_especialidad de, doctor d "+
             "where d.id=$1 and e.id=de.fk_especialidad and de.fk_doctor=d.id",[id]);
 
         return getRegistros.rows;
         
     } catch (err) {
         console.log(err.message);
     }
     
}
  
}