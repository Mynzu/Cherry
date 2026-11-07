const conexion = require("../conexion");

module.exports = {

    obtenerCiudadanoPorCedula(cedula) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula FROM ciudadanos WHERE cedula = ?`;
            conexion.query(sql, [cedula], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados[0]);
            });
        });
    },

    obtenerVacunasPorCiudadanoId(ciudadanoId) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT vacuna, dosis, fecha, lote, centro, observaciones FROM historial_vacunacion WHERE ciudadano_id = ? ORDER BY fecha DESC`;
            conexion.query(sql, [ciudadanoId], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados); 
            });
        });
    }

};