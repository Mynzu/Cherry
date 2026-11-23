const conexion = require("../conexion");

module.exports = {

    // Validar el perfil master (solo pide usuario y contraseña)
    validarMaster(usuario, contrasena) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT id, usuario, rol FROM usuarios WHERE usuario = ? AND contrasena = ? AND rol = 'master'`,
                [usuario, contrasena],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    },

    // Validar el perfil de subregión (pide usuario, contraseña y código regional)
    validarSubRegion(usuario, contrasena, codigoRegion) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT u.id, u.usuario, u.rol, u.subregion_id, s.codigo_region, s.nombre AS nombre_region
                 FROM usuarios u
                 INNER JOIN subregiones s ON u.subregion_id = s.id
                 WHERE u.usuario = ? AND u.contrasena = ? AND s.codigo_region = ? AND u.rol = 'subregion'`,
                [usuario, contrasena, codigoRegion],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    },

    // Validar el perfil del centro (pide usuario, contraseña e ID del centro)
    validarCentroMedico(usuario, contrasena, idCentro) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `SELECT u.id, u.usuario, u.rol, u.centro_salud_id, c.id_centro, c.nombre AS nombre_centro
                 FROM usuarios u
                 INNER JOIN centros_salud c ON u.centro_salud_id = c.id
                 WHERE u.usuario = ? AND u.contrasena = ? AND c.id_centro = ? AND u.rol = 'centro'`,
                [usuario, contrasena, idCentro],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    }

};