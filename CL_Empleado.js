export default class Empleado {
    constructor(c, s, te) {
        this.cedula = c;
        this.sueldo_actual = s;
        this.tipo_empleado = te;
    }
setCedula(c) {
    this.cedula = c;
}
setSueldo_actual(s)  {
    this.sueldo_actual = s;
}
setTipo_empleado(te) {
    this.tipo_empleado = te;
}
getCedula() {
    return this.cedula;
}
getSueldo_actual()  {
    return this.sueldo_actual;
}
getTipo_empleado() {
    return this.tipo_empleado;
}
calcularAumento() {
    if (this.getTipo_empleado() == "1") {
        this.sueldo_actual*20/100;
    }
    if (this.getTipo_empleado() == "2") {
        this.sueldo_actual*10/100;
    }
   }
   sueldoActual () {
    return this.calcularAumento() + this.getSueldo_actual(); 
   }
}