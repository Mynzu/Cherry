const conexion = require("../conexion");

module.exports = {
    // Registrar o actualizar los exámenes médicos de una persona
    guardarEvaluacion(personaId, tipoExamen, estatus, emisor, colegiado, observaciones) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO examenes_medicos (persona_id, tipo_examen, estatus, emisor, colegiado, observaciones) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [personaId, tipoExamen, estatus, emisor, colegiado, observaciones],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                }
            );
        });
    },

    // Obtener el historial de exámenes médicos de una persona específica
    obtenerPorPersonaId(personaId) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, tipo_examen, estatus, emisor, colegiado, observaciones FROM examenes_medicos WHERE persona_id = ?`,
                [personaId],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                }
            );
        });
    }
};