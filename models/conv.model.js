const queries = require('../queries/conversions_sql.queries');
const pool = require('../config/db_pgsql');


//GET all

const getAllSaved = async () => {
    let client, result;
    try{
        client = await pool.connect()
        const data = await client.query(queries.getAll)
        result = data.rows
    } catch(err){
        console.log(err);
        throw err;
    } finally{
        client.release();
    }
    return result
}

//POST one
const saveOne = async (convInfo) => {
    const { nr1, l1, nr2, l2  } = convInfo;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.addOne,[nr1, l1, nr2, l2])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


//DELETE one
const deleteOneSaved = async (convInfo) => {
    const {id} = convInfo;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteOne,[id])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const saved={
    getAllSaved,
    saveOne,
    deleteOneSaved
}

module.exports = saved