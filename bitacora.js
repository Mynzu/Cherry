const conexion = require("../conexion");

module.exports = {
    // Registrar una nueva acción en la bitácora
    insertar(usuarioId, usuarioNombre, accion, fecha = null) {
        return new Promise((resolve, reject) => {
            if (fecha) {
                conexion.query(
                    `INSERT INTO bitacora (usuario_id, usuario_nombre, accion, fecha) VALUES (?, ?, ?, ?)`,
                    [usuarioId || null, usuarioNombre, accion, fecha],
                    (err, resultados) => {
                        if (err) reject(err);
                        else resolve(resultados.insertId);
                    }
                );
            } else {
                conexion.query(
                    `INSERT INTO bitacora (usuario_id, usuario_nombre, accion) VALUES (?, ?, ?)`,
                    [usuarioId || null, usuarioNombre, accion],
                    (err, resultados) => {
                        if (err) reject(err);
                        else resolve(resultados.insertId);
                    }
                );
            }
        });
    },

    // Obtener todos los registros de la bitácora para mostrarlos en la vista
    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, usuario_id, usuario_nombre, accion, fecha FROM bitacora ORDER BY id DESC`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                }
            );
        });
    }
};