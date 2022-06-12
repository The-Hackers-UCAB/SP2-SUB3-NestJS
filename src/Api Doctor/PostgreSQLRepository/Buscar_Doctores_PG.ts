import { Injectable } from '@nestjs/common';
const pool = require('../DB/ConectarBD');
import { DoctorRepository } from '../Interfaces/DoctorRepository';

@Injectable()
export class BuscarDoctoresPG implements DoctorRepository{
  
  BuscarDoctor = async (params) => {

   try {

        const getRegistros = await pool.query(
            "SELECT d.*, e.nombre as Especialidad FROM doctor d, doctor_especialidad de, especialidad e WHERE e.id=de.fk_especialidad and de.fk_doctor=d.id"
        );

        return getRegistros.rows;
        
    } catch (err) {
        console.log(err.message);
    }
    
  }
  
  
}