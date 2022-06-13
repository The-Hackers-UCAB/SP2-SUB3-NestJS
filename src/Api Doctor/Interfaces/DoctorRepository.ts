export interface DoctorRepository{
    buscarDoctor: (params) => Promise<void>;
}