
import { defineDb, defineTable, column } from 'astro:db';

 export const Alumno = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    dni: column.text(),
    nombre: column.text(),
    apellido: column.text(),
    curso: column.text(),
  }
})

 const Asistencia = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    dni: column.text(),
    fecha: column.date(),
  }
})


export default defineDb({
  tables: { Alumno, Asistencia },
})