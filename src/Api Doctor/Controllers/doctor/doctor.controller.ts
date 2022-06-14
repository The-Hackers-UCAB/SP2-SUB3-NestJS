import { Controller, Get, Res, HttpStatus, Param} from '@nestjs/common';
import { DoctorDTO } from 'src/Api Doctor/dto/doctor.dto';
import { DoctorORM } from 'src/Api Doctor/ORM/doctor.orm';
import { BuscarDoctoresPG } from 'src/Api Doctor/PostgreSQLRepository/Buscar_Doctores_PG';
import { Buscar_Doctor_por_Especialidad_PG } from 'src/Api Doctor/PostgreSQLRepository/Buscar_Doctor_Por_Especialidad_PG';

@Controller('doctor')
export class DoctorController{

    @Get('')
    async getDoctors(@Res() res){ 
        var auxiliar = new BuscarDoctoresPG();
        const doctores = await auxiliar.buscarDoctor(null);
        const idDoctores = await auxiliar.getIdDoctores();
        var doctorORM = new DoctorORM();
        doctorORM.mapper(doctores,idDoctores);
        return res.status(HttpStatus.OK).json(doctorORM.getDoctores());
    }

    @Get('/especialidad/:valor')
    async getDoctor_por_especialidad(@Res() res, @Param('valor') valor){
        var auxiliar1 = new Buscar_Doctor_por_Especialidad_PG();
        var auxiliar2 = new BuscarDoctoresPG();
        const doctores_por_especialidad = await auxiliar1.buscarDoctor(valor);
        var doctorORM = new DoctorORM();
        for(var i = 0; i < doctores_por_especialidad.length; i++){
            var doctores = await auxiliar2.getOneDoctor(doctores_por_especialidad[i].id);
            doctorORM.mapper(doctores,null);
        }
        console.log(doctorORM.getDoctores());
        return res.status(HttpStatus.OK).json(doctorORM.getDoctores())
    }
}
