import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { BuscarEspecialidadPG } from 'src/Api Doctor/PostgreSQLRepository/Buscar_Especialidades_PG';

@Controller('especialidad')
export class EspecialidadController {

    @Get('/')
    async getEspecialidad(@Res() res){ 
        var auxiliar = new BuscarEspecialidadPG();
        const especialidades = await auxiliar.buscarEspecialidad();
        return res.status(HttpStatus.OK).json(especialidades)
    }
}
