/*
En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
personal administrativo. Se conoce de cada empleado su cédula, sueldo actual y el tipo de 
empleado (1-Obrero, 2-Administrativo). Al procesar todos los empleados, la empresa desea 
saber: a) el nuevo sueldo de cada empleado, por la empresa: b) el monto total que deberá 
pagar sólo por concepto de incremento de sueldo a todo el personal y c) el porcentaje de 
personal obrero. 
La empresa entrega la siguiente información como referencia del reporte de salida requerido: 
La cédula 555 tiene nuevo sueldo de $220 
La cédula 888 tiene nuevo sueldo de $600 
La cédula 777 tiene nuevo sueldo de $440 
La cédula 666 tiene nuevo sueldo de $720 
La cédula 444 tiene nuevo sueldo de $960 
Total a pagar sólo por aumento de sueldo: $440 
Porcentaje de personal obrero: 60% 
Aclarando que la cédula 555 es de un administrativo con sueldo actual de 200, el 888 es 
obrero con sueldo actual de 500, el 777 administrativo con 400, el 666 es obrero con sueldo 
actual de 600, y el 444 es obrero con 800 
*/
import CL_Empresa from "./CL_Empresa.js";
import cl_Empleado from "./CL_Empleado.js";

let empleado1 = new cl_Empleado(555, 200, 2);
let empleado2 = new cl_Empleado(888, 500, 1);
let empleado3 = new cl_Empleado(777, 400, 2);
let empleado4 = new cl_Empleado(666, 600, 1);
let empleado5 = new cl_Empleado(444, 800, 1);

let empresa = new CL_Empresa();

empresa.procesarEmpleado(empleado1);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);
empresa.procesarEmpleado(empleado5);

let salida= document.getElementById("salida");

salida.innerHTML = ` Resultados:
<br> La cedula ${empleado1.getCedula()} tiene nuevo sueldo de ${empleado1.sueldoActual()}
<br> La cedula ${empleado2.getCedula()} tiene nuevo sueldo de ${empleado2.sueldoActual()}
<br> La cedula ${empleado3.getCedula()} tiene nuevo sueldo de ${empleado3.sueldoActual()}
<br> La cedula ${empleado4.getCedula()} tiene nuevo sueldo de ${empleado4.sueldoActual()}
<br> La cedula ${empleado5.getCedula()} tiene nuevo sueldo de ${empleado5.sueldoActual()}
<br> Total a pagar solo por aumento de sueldo: ${empresa.devolverAcum_AumentoSueldo()}
<br> Porcentaje de personal obrero: ${empresa.porcentajePersonalObrero()}%`;