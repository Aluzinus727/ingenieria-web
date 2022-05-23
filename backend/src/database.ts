import mysql2 from 'mysql2/promise'

export const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_educrown'
})

// pool.getConnection((_err, connection) => {
//     if (connection) 
//         connection.release()
//     else 
//         console.log("Else")
//     return
// })