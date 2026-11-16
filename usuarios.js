const conexion = require("../conexion");

module.exports = {

    insertar(primerNombre, segundoNombre, primerApellido, segundoApellido, region, centro, password) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO usuarios (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, region, centro, password) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            conexion.query(sql, [primerNombre, segundoNombre, primerApellido, segundoApellido, region, centro, password], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.insertId);
            });
        });
    },

    obtener() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, region, centro FROM usuarios`;
            conexion.query(sql, (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    },

    obtenerPorIdBusqueda(criterio) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT id, primer_nombre AS primerNombre, segundo_nombre AS segundoNombre, primer_apellido AS primerApellido, segundo_apellido AS segundoApellido, cedula, area, estado FROM usuarios WHERE id = ? OR cedula = ?`;
            conexion.query(sql, [criterio, criterio], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados[0]); // Retorna el primer resultado coincidente
            });
        });
    },

    actualizar(id, primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, area, estado) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE usuarios SET primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, cedula = ?, area = ?, estado = ? WHERE id = ?`;
            conexion.query(sql, [primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, area, estado, id], (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

    transferir(primerNombre, segundoNombre, primerApellido, segundoApellido, origen, destino) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE usuarios SET area = ? WHERE primer_nombre = ? AND segundo_nombre = ? AND primer_apellido = ? AND segundo_apellido = ? AND area = ?`;
            conexion.query(sql, [destino, primerNombre, segundoNombre, primerApellido, segundoApellido, origen], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.affectedRows);
            });
        });
    },

    registrarBitacora(usuario, accion) {
        return new Promise((resolve, reject) => {
            const fecha = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const sql = `INSERT INTO bitacora (fecha, usuario, accion) VALUES (?, ?, ?)`;
            conexion.query(sql, [fecha, usuario, accion], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.insertId);
            });
        });
    },
   obtenerEvaluadorPorColegiado(nroColegiado) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, colegiado, especialidad FROM usuarios_evaluadores WHERE colegiado = ?`;
            conexion.query(sql, [nroColegiado], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados[0]); 
            });
        });
    },

    insertarEvaluador(primerNombre, segundoNombre, primerApellido, segundoApellido, colegiado, especialidad, region) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO usuarios_evaluadores (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, colegiado, especialidad, region) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            conexion.query(sql, [primerNombre, segundoNombre, primerApellido, segundoApellido, colegiado, especialidad, region], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.insertId);
            });
        });
    },

    obtenerTodosEvaluadores() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, colegiado, especialidad FROM usuarios_evaluadores`;
            conexion.query(sql, (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    },

    actualizarEvaluador(id, primerNombre, segundoNombre, primerApellido, segundoApellido, colegiado, especialidad) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE usuarios_evaluadores SET primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, colegiado = ?, especialidad = ? WHERE id = ?`;
            conexion.query(sql, [primerNombre, segundoNombre, primerApellido, segundoApellido, colegiado, especialidad, id], (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },



};