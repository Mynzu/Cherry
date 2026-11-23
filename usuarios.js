const conexion = require("../conexion");

module.exports = {

    // Insertar un usuario en la tabla real 'usuarios'
    insertar(usuario, contrasena, rol, subregionId = null, centroSaludId = null) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO usuarios (usuario, contrasena, rol, subregion_id, centro_salud_id)
                VALUES (?, ?, ?, ?, ?)
            `;
            conexion.query(
                sql,
                [usuario, contrasena, rol, subregionId || null, centroSaludId || null],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                }
            );
        });
    },

    // Obtener todos los usuarios con su subregión y centro de salud
    obtener() {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT
                    u.id,
                    u.usuario,
                    u.rol,
                    u.subregion_id,
                    s.codigo_region,
                    s.nombre AS nombre_subregion,
                    u.centro_salud_id,
                    c.id_centro,
                    c.nombre AS nombre_centro
                FROM usuarios u
                LEFT JOIN subregiones s ON u.subregion_id = s.id
                LEFT JOIN centros_salud c ON u.centro_salud_id = c.id
                ORDER BY u.id ASC
            `;
            conexion.query(sql, (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    },

    // Buscar usuario por ID o por nombre de usuario
    obtenerPorIdBusqueda(criterio) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT id, usuario, rol, subregion_id, centro_salud_id
                FROM usuarios
                WHERE id = ? OR usuario = ?
            `;
            conexion.query(sql, [criterio, criterio], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados[0]);
            });
        });
    },

    // Actualizar datos de un usuario existente
    actualizar(id, usuario, rol, subregionId = null, centroSaludId = null) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE usuarios
                SET usuario = ?, rol = ?, subregion_id = ?, centro_salud_id = ?
                WHERE id = ?
            `;
            conexion.query(
                sql,
                [usuario, rol, subregionId || null, centroSaludId || null, id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });
    },

    // Transferir usuario a otra subregión, centro o rol
    transferir(id, nuevoRol, nuevaSubregionId = null, nuevoCentroSaludId = null) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE usuarios
                SET rol = ?, subregion_id = ?, centro_salud_id = ?
                WHERE id = ?
            `;
            conexion.query(
                sql,
                [nuevoRol, nuevaSubregionId || null, nuevoCentroSaludId || null, id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.affectedRows);
                }
            );
        });
    },

    // Eliminar usuario por ID
    eliminar(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`DELETE FROM usuarios WHERE id = ?`, [id], (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

    // Registrar movimiento en la tabla 'bitacora' real
    registrarBitacora(usuarioId, usuarioNombre, accion) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO bitacora (usuario_id, usuario_nombre, accion)
                VALUES (?, ?, ?)
            `;
            conexion.query(sql, [usuarioId || null, usuarioNombre, accion], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.insertId);
            });
        });
    }

};