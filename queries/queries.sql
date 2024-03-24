--Crear tabla de elementos guardados
CREATE TABLE saved (
id serial NOT NULL PRIMARY KEY,
nr1 float NOT NULL,
nr2 float NOT NULL,
l1 varchar (10)NOT NULL,
l2 varchar (10) NOT NULL
);


--GET todos
SELECT * 
FROM saved;


--POST nueva conversión
INSERT INTO saved (nr1, l1, nr2, l2 )
VALUES ($1, $2, $3, $4);


--DELETE una conversión
DELETE FROM saved
WHERE id = $1;
