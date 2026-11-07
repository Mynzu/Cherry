const conexion = require("../conexion");

module.exports = {

    insertarPersona(primerNombre, segundoNombre, primerApellido, segundoApellido, region, centro, password) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO usuarios_master (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, region, centro, password) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            conexion.query(sql, [primerNombre, segundoNombre, primerApellido, segundoApellido, region, centro, password], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.insertId);
            });
        });
    },

    buscarpersona(criterio) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, area, estado FROM personal WHERE cedula = ? OR id = ?`;
            conexion.query(sql, [criterio, criterio], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados[0]); // Devuelve el registro encontrado
            });
        });
    },

    actualizarPersona(id, primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, area, estado) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE personal SET primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, cedula = ?, area = ?, estado = ? WHERE id = ?`;
            conexion.query(sql, [primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, area, estado, id], (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

    registrarTransferencia(primerNombre, segundoNombre, primerApellido, segundoApellido, origen, destino) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO transferencias (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, origen, destino) VALUES (?, ?, ?, ?, ?, ?)`;
            conexion.query(sql, [primerNombre, segundoNombre, primerApellido, segundoApellido, origen, destino], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.insertId);
            });
        });
    },

    obtenerBitacora() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT fecha, usuario, accion FROM bitacora ORDER BY id DESC LIMIT 50`;
            conexion.query(sql, (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    },

    registrarBitacora(usuario, accion) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO bitacora (usuario, accion) VALUES (?, ?)`;
            conexion.query(sql, [usuario, accion], (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
};