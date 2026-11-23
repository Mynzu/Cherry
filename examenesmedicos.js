const conexion = require("../conexion");

module.exports = {
    // Registrar examen de salud de una persona en examenes_salud
    guardarEvaluacion(personaId, tipoExamen, estatus, especialista, observaciones = "", usuarioRegistra = null) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO examenes_salud (persona_id, tipo_examen, estatus, especialista, observaciones, usuario_registra) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [personaId, tipoExamen, estatus, especialista, observaciones, usuarioRegistra || null],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                }
            );
        });
    },

    // Obtener el historial de exámenes de salud de una persona específica
    obtenerPorPersonaId(personaId) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, persona_id, tipo_examen, estatus, especialista, observaciones, usuario_registra 
                 FROM examenes_salud 
                 WHERE persona_id = ? 
                 ORDER BY id DESC`,
                [personaId],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                }
            );
        });
    }
};