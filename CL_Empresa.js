export default class CL_Empresa {
    constructor() {
       this.acum_AumentoSueldo = 0;
       this.cont_Personal = 0;
        this.cont_PersonalObrero = 0;
    }
    procesarEmpleado(emp) {
       this.cont_Personal++;
       this.acum_AumentoSueldo += emp.sueldoActual();
        if (emp.getTipo_empleado() == "1") {
            this.cont_PersonalObrero++;
        }
    }
    porcentajePersonalObrero() {
        return this.cont_PersonalObrero * 100 / this.cont_Personal;}
    devolverAcum_AumentoSueldo() {
        return this.acum_AumentoSueldo;
    }
}
