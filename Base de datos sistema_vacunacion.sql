-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2026 a las 15:57:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema_vacunacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centros_salud`
--

CREATE TABLE `centros_salud` (
  `id` int(11) NOT NULL,
  `codigo_centro` varchar(20) NOT NULL,
  `nombre_centro` varchar(100) NOT NULL,
  `tipo_centro` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `municipio` varchar(50) NOT NULL,
  `correo_contacto` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `master` tinyint(1) DEFAULT 0,
  `subregion` tinyint(1) DEFAULT 0,
  `centro_vacunacion` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `centros_salud`
--

INSERT INTO `centros_salud` (`id`, `codigo_centro`, `nombre_centro`, `tipo_centro`, `estado`, `municipio`, `correo_contacto`, `contrasena`, `fecha_creacion`, `master`, `subregion`, `centro_vacunacion`) VALUES
(1, 'MIN-CENTRAL', 'Ministerio del Poder Popular para la Salud (Sede Central)', 'Ministerio', 'Distrito Capital', 'Libertador', 'min.salud@mpps.gob.ve', '$2y$10$e9hHj...mockhash...', '2026-10-18 02:32:25', 1, 0, 0),
(2, 'ARAGUA-001', 'Hospital Central de Maracay', 'Hospital', 'Aragua', 'Girardot', 'hcm.aragua@mpps.gob.ve', '$2y$10$mockhash1...', '2026-10-18 02:32:25', 0, 0, 1),
(3, 'ARAGUA-002', 'CDI La Aduana', 'CDI', 'Aragua', 'Girardot', 'cdi.laduana@mpps.gob.ve', '$2y$10$mockhash2...', '2026-10-18 02:32:25', 0, 0, 1),
(4, 'ARAGUA-003', 'Hospital Dr. José María Benítez', 'Hospital', 'Aragua', 'José Félix Ribas', 'h.benitez@mpps.gob.ve', '$2y$10$mockhash3...', '2026-10-18 02:32:25', 0, 0, 1),
(5, 'ARAGUA-004', 'CDI San José', 'CDI', 'Aragua', 'Girardot', 'cdi.sanjose@mpps.gob.ve', '$2y$10$mockhash4...', '2026-10-18 02:32:25', 0, 0, 1),
(6, 'ARAGUA-005', 'Hospital Dr. José Rangel', 'Hospital', 'Aragua', 'Sucre', 'h.rangel@mpps.gob.ve', '$2y$10$mockhash5...', '2026-10-18 02:32:25', 0, 0, 1),
(7, 'GUARICO-001', 'Hospital Dr. Israel Ranuárez Balza', 'Hospital', 'Guárico', 'Juan Germán Roscio', 'h.ranuarez@mpps.gob.ve', '$2y$10$mockhash6...', '2026-10-18 02:32:25', 0, 0, 1),
(8, 'GUARICO-002', 'Hospital Dr. Rafael Zamora Arévalo', 'Hospital', 'Guárico', 'Infante', 'h.zamora@mpps.gob.ve', '$2y$10$mockhash7...', '2026-10-18 02:32:25', 0, 0, 1),
(9, 'GUARICO-003', 'CDI Las Mercedes del Llano', 'CDI', 'Guárico', 'Las Mercedes', 'cdi.lasmercedes@mpps.gob.ve', '$2y$10$mockhash8...', '2026-10-18 02:32:25', 0, 0, 1),
(10, 'GUARICO-004', 'CDI El Sombrero', 'CDI', 'Guárico', 'Julián Mellado', 'cdi.elsombrero@mpps.gob.ve', '$2y$10$mockhash9...', '2026-10-18 02:32:25', 0, 0, 1),
(11, 'GUARICO-005', 'Hospital Dr. Francisco Urdaneta Delgado', 'Hospital', 'Guárico', 'Infante', 'h.urdaneta@mpps.gob.ve', '$2y$10$mockhash10...', '2026-10-18 02:32:25', 0, 0, 1),
(12, 'MERIDA-001', 'Instituto Autónomo Hospital Universitario de los Andes (IAHULA)', 'Hospital', 'Mérida', 'Libertador', 'iahula.merida@mpps.gob.ve', '$2y$10$mockhash11...', '2026-10-18 02:32:25', 0, 0, 1),
(13, 'MERIDA-002', 'Hospital II Sor Juana Inés de la Cruz', 'Hospital', 'Mérida', 'Libertador', 'h.sorjuana@mpps.gob.ve', '$2y$10$mockhash12...', '2026-10-18 02:32:25', 0, 0, 1),
(14, 'MERIDA-003', 'CDI Los Curos', 'CDI', 'Mérida', 'Libertador', 'cdi.loscuros@mpps.gob.ve', '$2y$10$mockhash13...', '2026-10-18 02:32:25', 0, 0, 1),
(15, 'MERIDA-004', 'Hospital San José de El Vigía', 'Hospital', 'Mérida', 'Alberto Adriani', 'h.elvigia@mpps.gob.ve', '$2y$10$mockhash14...', '2026-10-18 02:32:25', 0, 0, 1),
(16, 'MERIDA-005', 'CDI Don Perucho', 'CDI', 'Mérida', 'Campo Elías', 'cdi.donperucho@mpps.gob.ve', '$2y$10$mockhash15...', '2026-10-18 02:32:25', 0, 0, 1),
(17, 'CARABOBO-001', 'Ciudad Hospitalaria Dr. Enrique Tejera (CHET)', 'Hospital', 'Carabobo', 'Valencia', 'chet.carabobo@mpps.gob.ve', '$2y$10$mockhash16...', '2026-10-18 02:32:25', 0, 0, 1),
(18, 'CARABOBO-002', 'Hospital Dr. Adolfo Prince Lara', 'Hospital', 'Carabobo', 'Puerto Cabello', 'h.princelara@mpps.gob.ve', '$2y$10$mockhash17...', '2026-10-18 02:32:25', 0, 0, 1),
(19, 'CARABOBO-003', 'CDI La Isabelica', 'CDI', 'Carabobo', 'Valencia', 'cdi.laisabelica@mpps.gob.ve', '$2y$10$mockhash18...', '2026-10-18 02:32:25', 0, 0, 1),
(20, 'CARABOBO-004', 'Hospital Maternidad del Sur', 'Hospital', 'Carabobo', 'Valencia', 'maternidad.sur@mpps.gob.ve', '$2y$10$mockhash19...', '2026-10-18 02:32:25', 0, 0, 1),
(21, 'CARABOBO-005', 'CDI El Socorro', 'CDI', 'Carabobo', 'Valencia', 'cdi.elsocorro@mpps.gob.ve', '$2y$10$mockhash20...', '2026-10-18 02:32:25', 0, 0, 1),
(22, 'MIRANDA-001', 'Hospital Dr. Victorino Santaella Ruiz', 'Hospital', 'Miranda', 'Guaicaipuro', 'h.santaella@mpps.gob.ve', '$2y$10$mockhash21...', '2026-10-18 02:32:25', 0, 0, 1),
(23, 'MIRANDA-002', 'Hospital General de Guatire Dr. Eugenio P. D Bellard', 'Hospital', 'Miranda', 'Zamora', 'h.guatire@mpps.gob.ve', '$2y$10$mockhash22...', '2026-10-18 02:32:25', 0, 0, 1),
(24, 'MIRANDA-003', 'CDI Petare', 'CDI', 'Miranda', 'Sucre', 'cdi.petare@mpps.gob.ve', '$2y$10$mockhash23...', '2026-10-18 02:32:25', 0, 0, 1),
(25, 'MIRANDA-004', 'CDI El Llanito', 'CDI', 'Miranda', 'Sucre', 'cdi.ellanito@mpps.gob.ve', '$2y$10$mockhash24...', '2026-10-18 02:32:25', 0, 0, 1),
(26, 'MIRANDA-005', 'Hospital Dr. Osío de Cúa', 'Hospital', 'Miranda', 'Urdaneta', 'h.osio@mpps.gob.ve', '$2y$10$mockhash25...', '2026-10-18 02:32:25', 0, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dosis_aplicadas`
--

CREATE TABLE `dosis_aplicadas` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `vacuna_id` int(11) NOT NULL,
  `centro_salud_id` int(11) NOT NULL,
  `numero_dosis` int(11) NOT NULL,
  `lote_vacuna` varchar(50) NOT NULL,
  `fecha_aplicacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `observaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `dosis_aplicadas`
--

INSERT INTO `dosis_aplicadas` (`id`, `paciente_id`, `vacuna_id`, `centro_salud_id`, `numero_dosis`, `lote_vacuna`, `fecha_aplicacion`, `observaciones`) VALUES
(1, 1, 17, 2, 1, 'LOT-COVID-2026-A1', '2026-10-18 02:37:51', 'Sin reacciones secundarias observadas.'),
(2, 1, 17, 2, 2, 'LOT-COVID-2026-B2', '2026-10-18 02:37:51', 'Segunda dosis completada.'),
(3, 2, 1, 3, 1, 'LOT-BCG-9981', '2026-10-18 02:37:51', 'Dosis de recién nacido/infantil aplicada en el brazo izquierdo.'),
(4, 3, 9, 7, 1, 'LOT-FA-5542', '2026-10-18 02:37:51', 'Vacuna de Fiebre Amarilla aplicada para viaje.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL,
  `ci` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` text DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `ci`, `nombre`, `apellido`, `fecha_nacimiento`, `genero`, `telefono`, `direccion`, `fecha_registro`) VALUES
(1, 'V-18234567', 'Carlos', 'Mendoza', '1988-04-12', 'Masculino', '0414-1234567', 'Urb. Las Delicias, Calle 3, Casa 12, Maracay, Aragua', '2026-10-18 02:34:55'),
(2, 'V-20123890', 'Maria', 'Fernandez', '1992-08-25', 'Femenino', '0424-2345678', 'Av. Bolivar, Edif. Centro, Apt 4B, Maracay, Aragua', '2026-10-18 02:34:55'),
(3, 'V-15678234', 'Jose', 'Rodriguez', '1982-11-03', 'Masculino', '0412-3456789', 'Barrio El Carmen, Sector 2, San Juan de los Morros, Guarico', '2026-10-18 02:34:55'),
(4, 'V-23456789', 'Ana', 'Gomez', '1995-02-14', 'Femenino', '0416-4567890', 'Urb. Ricosa, Av. Principal, Casa 45, Calabozo, Guarico', '2026-10-18 02:34:55'),
(5, 'V-25890123', 'Luis', 'Hernandez', '1997-06-30', 'Masculino', '0414-5678901', 'Sector Los Curos, Calle 5, Merida, Merida', '2026-10-18 02:34:55'),
(6, 'V-19345678', 'Patricia', 'Perez', '1990-09-18', 'Femenino', '0424-6789012', 'Av. Don Tulio, Res. El Parque, Merida, Merida', '2026-10-18 02:34:55'),
(7, 'V-21456123', 'Gabriel', 'Torres', '1993-12-05', 'Masculino', '0412-7890123', 'Urb. Prebo, Calle 130, Valencia, Carabobo', '2026-10-18 02:34:55'),
(8, 'V-26789012', 'Daniela', 'Rojas', '1998-03-22', 'Femenino', '0416-8901234', 'Sector La Isabelica, Bloque 12, Valencia, Carabobo', '2026-10-18 02:34:55'),
(9, 'V-17890234', 'Roberto', 'Castillo', '1986-07-10', 'Masculino', '0414-9012345', 'Av. Bermudez, Los Teques, Miranda', '2026-10-18 02:34:55'),
(10, 'V-22345890', 'Elena', 'Morales', '1994-10-28', 'Femenino', '0424-0123456', 'Urb. La Urbina, Calle 2, Caracas, Miranda', '2026-10-18 02:34:55'),
(11, 'V-28123456', 'Jesus', 'Silva', '2000-01-15', 'Masculino', '0412-1122334', 'Sector Turmero, Centro, Aragua', '2026-10-18 02:34:55'),
(12, 'V-24567890', 'Sofia', 'Vasquez', '1996-05-09', 'Femenino', '0416-2233445', 'Urb. Base Aragua, Maracay, Aragua', '2026-10-18 02:34:55'),
(13, 'V-16890123', 'Manuel', 'Alvarez', '1984-08-20', 'Masculino', '0414-3344556', 'Valle de la Pascua, Sector Centro, Guarico', '2026-10-18 02:34:55'),
(14, 'V-27345678', 'Camila', 'Contreras', '1999-11-12', 'Femenino', '0424-4455667', 'El Vigia, Barrio Buenos Aires, Merida', '2026-10-18 02:34:55'),
(15, 'V-14567890', 'Francisco', 'Gutierez', '1980-03-04', 'Masculino', '0412-5566778', 'Puerto Cabello, Urb. Rancho Grande, Carabobo', '2026-10-18 02:34:55'),
(16, 'V-29012345', 'Valeria', 'Navarro', '2001-07-19', 'Femenino', '0416-6677889', 'Guatire, Urb. Castillejo, Miranda', '2026-10-18 02:34:55'),
(17, 'V-13234567', 'Antonio', 'Romero', '1978-09-30', 'Masculino', '0414-7788990', 'Cagua, Sector Corinsa, Aragua', '2026-10-18 02:34:55'),
(18, 'V-30123456', 'Andrea', 'Delgado', '2002-12-01', 'Femenino', '0424-8899001', 'San Mateo, Calle Bolivar, Aragua', '2026-10-18 02:34:55'),
(19, 'V-12456789', 'Miguel', 'Suarez', '1976-04-16', 'Masculino', '0412-9900112', 'Zaraza, Sector El Carmen, Guarico', '2026-10-18 02:34:55'),
(20, 'V-21890123', 'Isabella', 'Blanco', '1993-01-27', 'Femenino', '0416-0011223', 'Ejido, Sector Manzano Bajo, Merida', '2026-10-18 02:34:55'),
(21, 'V-25123456', 'Alejandro', 'Gil', '1996-08-08', 'Masculino', '0414-1133557', 'Naguanagua, Urb. La Granja, Carabobo', '2026-10-18 02:34:55'),
(22, 'V-19890123', 'Gabriela', 'Rios', '1991-02-11', 'Femenino', '0424-2244668', 'Charallave, Sector La Estrella, Miranda', '2026-10-18 02:34:55'),
(23, 'V-27890123', 'Javier', 'Sanchez', '1999-06-03', 'Masculino', '0412-3355779', 'Maracay, Urb. La Soledad, Aragua', '2026-10-18 02:34:55'),
(24, 'V-22678901', 'Natalia', 'Pineda', '1994-09-21', 'Femenino', '0416-4466880', 'Altagracia de Orituco, Guarico', '2026-10-18 02:34:55'),
(25, 'V-18567890', 'Diego', 'Ascanio', '1989-12-14', 'Masculino', '0414-5577991', 'Tovar, Sector El Llano, Merida', '2026-10-18 02:34:55'),
(26, 'V-23890123', 'Mariana', 'Cordero', '1995-03-31', 'Femenino', '0424-6688002', 'Guacara, Urb. Ciudad Alianza, Carabobo', '2026-10-18 02:34:55'),
(27, 'V-20567890', 'Fernando', 'Medina', '1992-10-07', 'Masculino', '0412-7799013', 'San Antonio de los Altos, Miranda', '2026-10-18 02:34:55'),
(28, 'V-31234567', 'Lucia', 'Acosta', '2003-05-23', 'Femenino', '0416-8800124', 'La Victoria, Sector Las Mercedes, Aragua', '2026-10-18 02:34:55'),
(29, 'V-17234567', 'Ricardo', 'Padrón', '1985-01-09', 'Masculino', '0414-9911235', 'San Sebastian de los Reyes, Aragua', '2026-10-18 02:34:55'),
(30, 'V-24890123', 'Veronica', 'Mora', '1996-11-17', 'Femenino', '0424-0022346', 'Guarenas, Urb. Nueva Casarapa, Miranda', '2026-10-18 02:34:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacunas`
--

CREATE TABLE `vacunas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo_vacuna` varchar(100) NOT NULL,
  `enfermedad_previene` text NOT NULL,
  `dosis_requeridas` int(11) NOT NULL DEFAULT 1,
  `edad_minima_meses` int(11) DEFAULT 0,
  `via_administracion` varchar(50) DEFAULT NULL,
  `disponibilidad_pai` varchar(30) DEFAULT 'Público'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vacunas`
--

INSERT INTO `vacunas` (`id`, `nombre`, `tipo_vacuna`, `enfermedad_previene`, `dosis_requeridas`, `edad_minima_meses`, `via_administracion`, `disponibilidad_pai`) VALUES
(1, 'BCG', 'Bacteriana viva atenuada', 'Tuberculosis meningínea y miliar', 1, 0, 'Intradérmica', 'Público'),
(2, 'Hepatitis B (Sola)', 'Recombinante viral', 'Infección por virus de la Hepatitis B (dosis de recién nacido)', 1, 0, 'Intramuscular', 'Público'),
(3, 'Pentavalente (DPT-HB-Hib)', 'Combinada bacteriana/viral', 'Difteria, Tétanos, Tosferina, Hepatitis B, Haemophilus Influenzae Tipo B', 3, 2, 'Intramuscular', 'Público'),
(4, 'Antipolio Inactivada (IPV)', 'Viral inactivada', 'Poliomielitis (Dosis inyectable)', 2, 2, 'Intramuscular', 'Público'),
(5, 'Antipolio Oral (bVPO)', 'Viral viva atenuada', 'Poliomielitis (Dosis bivalente oral)', 3, 6, 'Oral', 'Público'),
(6, 'Anti-Neumocócica Conjugada (PCV13)', 'Bacteriana conjugada', 'Neumonía, Meningitis y Otitis por Streptococcus pneumoniae', 3, 2, 'Intramuscular', 'Ambos'),
(7, 'Anti-Rotavirus', 'Viral viva atenuada', 'Gastroenteritis severa por Rotavirus', 2, 2, 'Oral', 'Ambos'),
(8, 'SRP (Triple Viral)', 'Viral viva atenuada', 'Sarampión, Rubéola y Parotiditis (Papera)', 2, 12, 'Subcutánea', 'Público'),
(9, 'Fiebre Amarilla (Antiamarílica)', 'Viral viva atenuada', 'Fiebre Amarilla', 1, 12, 'Subcutánea', 'Público'),
(10, 'Anti-Influenza Estacional', 'Viral inactivada', 'Influenza estacional / Gripe', 1, 6, 'Intramuscular', 'Público'),
(11, 'Toxoide Diftérico-Tetánico (Td)', 'Toxoide bacteriano', 'Tétanos y Difteria (en escolares, adultos y embarazadas)', 5, 120, 'Intramuscular', 'Público'),
(12, 'DPT (Triple Bacteriana)', 'Bacteriana inactivada/toxoide', 'Difteria, Tétanos y Tosferina (refuerzo)', 2, 18, 'Intramuscular', 'Público'),
(13, 'VPH (Virus del Papiloma Humano)', 'Proteína recombinante viral', 'Cáncer de cuello uterino y verrugas genitales', 2, 108, 'Intramuscular', 'Ambos'),
(14, 'Anti-Hepatitis A', 'Viral inactivada', 'Hepatitis A', 2, 12, 'Intramuscular', 'Privado'),
(15, 'Anti-Varicela', 'Viral viva atenuada', 'Varicela (Lechina)', 2, 12, 'Subcutánea', 'Privado'),
(16, 'Anti-Meningocócica (ACWY)', 'Bacteriana conjugada', 'Meningitis por Neisseria meningitidis', 1, 9, 'Intramuscular', 'Privado'),
(17, 'COVID-19 (Sinopharm / Vero Cell)', 'Viral inactivada', 'COVID-19', 2, 36, 'Intramuscular', 'Público'),
(18, 'COVID-19 (Sputnik V / Light)', 'Vector viral', 'COVID-19', 2, 216, 'Intramuscular', 'Público');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centros_salud`
--
ALTER TABLE `centros_salud`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo_centro` (`codigo_centro`),
  ADD UNIQUE KEY `correo_contacto` (`correo_contacto`);

--
-- Indices de la tabla `dosis_aplicadas`
--
ALTER TABLE `dosis_aplicadas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_dosis_paciente` (`paciente_id`),
  ADD KEY `fk_dosis_vacuna` (`vacuna_id`),
  ADD KEY `fk_dosis_centro` (`centro_salud_id`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ci` (`ci`);

--
-- Indices de la tabla `vacunas`
--
ALTER TABLE `vacunas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `centros_salud`
--
ALTER TABLE `centros_salud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `dosis_aplicadas`
--
ALTER TABLE `dosis_aplicadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `vacunas`
--
ALTER TABLE `vacunas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dosis_aplicadas`
--
ALTER TABLE `dosis_aplicadas`
  ADD CONSTRAINT `fk_dosis_centro` FOREIGN KEY (`centro_salud_id`) REFERENCES `centros_salud` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_dosis_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_dosis_vacuna` FOREIGN KEY (`vacuna_id`) REFERENCES `vacunas` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
