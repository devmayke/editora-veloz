import mysql from 'mysql2'

const db = mysql.createConnection({
    host: "192.168.0.193",
    user: "adm",
    password: "1Password2best",
    database: "Asset Bundles",
    port: 3306,
});

db.connect((err) => {
    if (err) {
        throw err;
    }
});

// db.on("connection", function (connection) {
//     console.log("Connected to MySql db");
// });

// db.on("enqueue", function () {
//     console.log("Waiting for available connection slot");
// });

// db.getConnection(function (err, connection) {
//     if (err) {
//         console.log("ERRO AO INICIAR CONEXÃO");
//         err.route = "start connection";
//         err.date = new Date().toLocaleString();
//         fs.appendFile("../db.log", JSON.stringify(err) + ",\n\n", function (err_) {
//             if (err_) console.log("Erro ao salvar log!");
//         });
//     }
// });

export {db}
