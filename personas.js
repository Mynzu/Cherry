const conexion = require("../conexion");

module.exports = {

    // Consultar datos del ciudadano + vacunas aplicadas desde dosis_aplicadas y vacunas
    consultarExpedientePaciente(primerNombre, segundoNombre, primerApellido, segundoApellido, cedula) {
        return new Promise((resolve, reject) => {
            const sqlPersona = `
                SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero, parroquia_id
                FROM personas
                WHERE primer_nombre = ?
                  AND IFNULL(segundo_nombre, '') = ?
                  AND primer_apellido = ?
                  AND IFNULL(segundo_apellido, '') = ?
                  AND cedula = ?
            `;

            conexion.query(
                sqlPersona,
                [primerNombre, segundoNombre || '', primerApellido, segundoApellido || '', cedula],
                (err, resultados) => {
                    if (err) return reject(err);
                    const persona = resultados[0];
                    if (!persona) return resolve(null);

                    const sqlVacunas = `
                        SELECT d.id, v.nombre AS vacuna, v.dosis_requeridas, d.dosis, d.fecha, d.lote, c.nombre AS centro_salud, d.observaciones
                        FROM dosis_aplicadas d
                        INNER JOIN vacunas v ON d.vacuna_id = v.id
                        LEFT JOIN centros_salud c ON d.centro_salud_id = c.id
                        WHERE d.persona_id = ?
                        ORDER BY d.fecha ASC
                    `;

                    conexion.query(sqlVacunas, [persona.id], (errVacunas, vacunas) => {
                        if (errVacunas) return reject(errVacunas);
                        persona.vacunas = vacunas;
                        resolve(persona);
                    });
                }
            );
        });
    },

    insertar(primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, fechaNacimiento, genero, parroquiaId = null) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO personas (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero, parroquia_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [primerNombre, segundoNombre || '', primerApellido, segundoApellido || '', cedula, fechaNacimiento, genero, parroquiaId || null],
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
                `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero, parroquia_id FROM personas`,
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
                `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero, parroquia_id FROM personas WHERE cedula = ?`,
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
                `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, fecha_nacimiento, genero, parroquia_id FROM personas WHERE id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    },

    actualizar(id, primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, fechaNacimiento, genero, parroquiaId = null) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `UPDATE personas SET primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, cedula = ?, fecha_nacimiento = ?, genero = ?, parroquia_id = ? WHERE id = ?`,
                [primerNombre, segundoNombre || '', primerApellido, segundoApellido || '', cedula, fechaNacimiento, genero, parroquiaId || null, id],
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