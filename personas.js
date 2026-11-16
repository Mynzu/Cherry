const conexion = require("../conexion");

module.exports = {

    // Consultar el expediente clínico de vacunación del ciudadano por sus datos personales y cédula
    consultarExpedientePaciente(primerNombre, segundoNombre, primerApellido, segundoApellido, cedula) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, estado_vacunas 
                FROM pacientes 
                WHERE primer_nombre = ? 
                  AND segundo_nombre = ? 
                  AND primer_apellido = ? 
                  AND segundo_apellido = ? 
                  AND cedula = ?
            `;
            
            conexion.query(
                sql, 
                [primerNombre, segundoNombre, primerApellido, segundoApellido, cedula], 
                (err, resultados) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resultados[0]); 
                    }
                }
            );
        });
    },

    insertar(primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, fechaNacimiento, genero) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO personas (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, fechaNacimiento, genero],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                }
            );
        });
    },

    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero FROM personas`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                }
            );
        });
    },

    obtenerPorCedula(cedula) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero FROM personas WHERE cedula = ?`,
                [cedula],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    },

    obtenerPorId(id) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero FROM personas WHERE id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    },

    actualizar(id, primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, fechaNacimiento, genero) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `UPDATE personas SET primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, cedula = ?, fecha_nacimiento = ?, genero = ? WHERE id = ?`,
                [primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, fechaNacimiento, genero, id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });
    },

    eliminar(id) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `DELETE FROM personas WHERE id = ?`,
                [id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });
    }

};