const conexion = require("../conexion");

module.exports = {

    // Catálogo de vacunas disponibles
    obtenerCatalogoVacunas() {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, nombre, dosis_requeridas FROM vacunas ORDER BY id ASC`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                }
            );
        });
    },

    // Registrar una dosis aplicada en dosis_aplicadas
    insertar(personaId, vacunaId, dosis, fecha, lote, centroSaludId = null, observaciones = "", usuarioRegistra = null) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO dosis_aplicadas (persona_id, vacuna_id, dosis, fecha, lote, centro_salud_id, usuario_registra, observaciones)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    personaId,
                    vacunaId,
                    dosis,
                    fecha,
                    lote || null,
                    centroSaludId || null,
                    usuarioRegistra || null,
                    observaciones || ""
                ],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                }
            );
        });
    },

    // Obtener todas las dosis aplicadas con datos de persona, vacuna y centro
    obtener() {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT
                    d.id,
                    d.persona_id,
                    p.cedula,
                    p.primer_nombre,
                    p.primer_apellido,
                    d.vacuna_id,
                    v.nombre AS vacuna,
                    d.dosis,
                    d.fecha,
                    d.lote,
                    d.centro_salud_id,
                    c.nombre AS centro,
                    d.observaciones
                FROM dosis_aplicadas d
                INNER JOIN personas p ON d.persona_id = p.id
                INNER JOIN vacunas v ON d.vacuna_id = v.id
                LEFT JOIN centros_salud c ON d.centro_salud_id = c.id
                ORDER BY d.id DESC
            `;
            conexion.query(sql, (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    },

    // Obtener dosis aplicadas por persona_id
    obtenerPorPersonaId(personaId) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT
                    d.id,
                    d.persona_id,
                    d.vacuna_id,
                    v.nombre AS vacuna,
                    v.dosis_requeridas,
                    d.dosis,
                    d.fecha,
                    d.lote,
                    d.centro_salud_id,
                    c.nombre AS centro,
                    d.observaciones
                FROM dosis_aplicadas d
                INNER JOIN vacunas v ON d.vacuna_id = v.id
                LEFT JOIN centros_salud c ON d.centro_salud_id = c.id
                WHERE d.persona_id = ?
                ORDER BY d.fecha ASC
            `;
            conexion.query(sql, [personaId], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    },

    // Obtener una dosis aplicada por su id
    obtenerPorId(id) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, persona_id, vacuna_id, dosis, fecha, lote, centro_salud_id, usuario_registra, observaciones
                 FROM dosis_aplicadas
                 WHERE id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    },

    // Actualizar una dosis aplicada
    actualizar(id, vacunaId, dosis, fecha, lote, centroSaludId = null, observaciones = "") {
        return new Promise((resolve, reject) => {
            conexion.query(
                `UPDATE dosis_aplicadas
                 SET vacuna_id = ?, dosis = ?, fecha = ?, lote = ?, centro_salud_id = ?, observaciones = ?
                 WHERE id = ?`,
                [vacunaId, dosis, fecha, lote || null, centroSaludId || null, observaciones || "", id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });
    },
    
    // Suspender una vacuna (cambiar su estado a 'suspendido')
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