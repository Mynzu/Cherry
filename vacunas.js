const conexion = require("../conexion");

module.exports = {

    insertar(personaId, vacuna, dosis, fecha, lote, centro, observaciones) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO vacunas (persona_id, vacuna, dosis, fecha, lote, centro, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [personaId, vacuna, dosis, fecha, lote, centro, observaciones],
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
                `SELECT id, persona_id, vacuna, dosis, fecha, lote, centro, observaciones FROM vacunas`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                }
            );
        });
    },

    obtenerPorPersonaId(personaId) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, vacuna, dosis, fecha, lote, centro, observaciones FROM vacunas WHERE persona_id = ?`,
                [personaId],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados); 
                }
            );
        });
    },

    obtenerPorId(id) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, persona_id, vacuna, dosis, fecha, lote, centro, observaciones FROM vacunas WHERE id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    },

    actualizar(id, vacuna, dosis, fecha, lote, centro, observaciones) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `UPDATE vacunas SET vacuna = ?, dosis = ?, fecha = ?, lote = ?, centro = ?, observaciones = ? WHERE id = ?`,
                [vacuna, dosis, fecha, lote, centro, observaciones, id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });
    },

    suspender(id) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `UPDATE vacunas SET estado = 'suspendido' WHERE id = ?`,
                [id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });
    }

};