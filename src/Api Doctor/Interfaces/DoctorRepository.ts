export interface DoctorRepository{
    buscarDoctor: (params) => Promise<void>;
    //getIdDoctores: (params) => Promise<number[]>;
}