export interface DoctorRepository{
    BuscarDoctor: (params) => Promise<void>;
}