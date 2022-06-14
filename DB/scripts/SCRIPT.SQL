INSERT INTO DOCTOR (id, sexo, nombre, apellido, foto)
VALUES (
        121,
        'F',
        'Usuario',
        'Prueba',
        'firebasestorage.googleapis.com/v0/b/myonlinedoctor-b2ee5.appspot.com/o/doctor120.jpg?alt=media'
    );
INSERT INTO ESPECIALIDAD (id, nombre)
VALUES (88, 'Radiologia');
INSERT INTO DOCTOR_ESPECIALIDAD (fk_especialidad, fk_doctor)
VALUES (88, 121);