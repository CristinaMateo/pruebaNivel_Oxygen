const queries ={
getAll:`SELECT *
FROM saved;`,
addOne:`INSERT INTO saved (nr1, l1, nr2, l2 )
VALUES ($1, $2, $3, $4);`,
deleteOne:`DELETE FROM saved
WHERE id = $1;`
}

module.exports = queries