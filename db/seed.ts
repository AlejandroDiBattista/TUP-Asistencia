import { db, Alumno	} from 'astro:db';
// import { Alumno } from './config';

export default async function() {
  await db.insert(Alumno).values([
    { id: 1, nombre: 'John', apellido: 'Doe',   dni: '12345678', curso: 'C2.4' },
    { id: 2, nombre: 'Jane', apellido: 'Doe',   dni: '87654321', curso: 'C2.3' },
    { id: 3, nombre: 'Juan', apellido: 'Perez', dni: '12348765', curso: 'C2.4' },
  ])
}