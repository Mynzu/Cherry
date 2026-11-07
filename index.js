const conexion = require("../conexion");

module.exports = {

    //  Valide el perfil master (olo pide usuario y contraseña)
    validarMaster(usuario, contraseña) {
        return new Promise((resolve, reject) => {
            const sql = conexion.query(
                `SELECT id, usuario FROM usuarios_master WHERE usuario = ? AND contrasena = ?`,
                [usuario, contraseña],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]); // Retorna el usuario si coincide
                }
            );
        });
    },

    // Validar el perfil de sub region (pide usuario, contraseña y código regional)
    validarSubRegion(usuario, contraseña, codigoRegion) {
        return new Promise((resolve, reject) => {
            const sql = conexion.query(
                `SELECT id, usuario FROM usuarios_region WHERE usuario = ? AND contrasena = ? AND codigo_region = ?`,
                [usuario, contraseña, codigoRegion],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    },

    // Valide el perfil del centro (pide usuario, contraseña e ID del centro)
    validarCentroMedico(usuario, contraseña, idCentro) {
        return new Promise((resolve, reject) => {
            const sql = conexion.query(
                `SELECT id, usuario FROM usuarios_centro WHERE usuario = ? AND contrasena = ? AND id_centro = ?`,
                [usuario, contraseña, idCentro],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                }
            );
        });
    }

};
