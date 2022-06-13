import { Controller, Get, Res, HttpStatus, Param} from '@nestjs/common';
import { DoctorDTO } from 'src/Api Doctor/dto/doctor.dto';
import { DoctorORM } from 'src/Api Doctor/ORM/doctor.orm';
import { BuscarDoctoresPG } from 'src/Api Doctor/PostgreSQLRepository/Buscar_Doctores_PG';
import { Buscar_Doctor_por_Especialidad_PG } from 'src/Api Doctor/PostgreSQLRepository/Buscar_Doctor_Por_Especialidad_PG';

@Controller('doctor')
export class DoctorController{

    @Get('/especialidad/')
    async getDoctors(@Res() res){ 
        var auxiliar = new BuscarDoctoresPG();
        const doctores = await auxiliar.buscarDoctor(null);
        const idDoctores = await auxiliar.getIdDoctores();
        var doctorORM = new DoctorORM();
        doctorORM.mapper(doctores,idDoctores);
        console.log(doctorORM.getDoctores().length)
        return res.status(HttpStatus.OK).json(doctorORM.getDoctores());
    }

    @Get('/especialidad/:valor')
    async getDoctor_por_especialidad(@Res() res, @Param('valor') valor){
        var auxiliar = new Buscar_Doctor_por_Especialidad_PG();
        const doctores = await auxiliar.buscarDoctor(valor);
        return res.status(HttpStatus.OK).json(doctores)
    }
}
