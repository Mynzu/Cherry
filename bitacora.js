const conexion = require("../conexion");

module.exports = {
    // Registrar una nueva acción en la bitácora
    insertar(fecha, usuario, accion) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO bitacora (fecha, usuario, accion) VALUES (?, ?, ?)`,
                [fecha, usuario, accion],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                }
            );
        });
    },

    // Obtener todos los registros de la bitácora para mostrarlos en la vista
    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, fecha, usuario, accion FROM bitacora ORDER BY id DESC`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                }
            );
        });
    }
};