-- SELECT fk_especialidad, count(*) as c  FROM DOCTOR_ESPECIALIDAD GROUP BY fk_especialidad order by c;
-- SELECT e.id, e.nombre, count(*)-1 FROM ESPECIALIDAD e FULL JOIN DOCTOR_ESPECIALIDAD de ON e.id = de.fk_especialidad group by e.id, e.nombre order by e.id ;

-- SELECT * FROM ESPECIALIDAD e FULL JOIN DOCTOR_ESPECIALIDAD de ON e.id = de.fk_especialidad order by e.id ;
SELECT nombre || ' ' || apellido from DOCTOR;