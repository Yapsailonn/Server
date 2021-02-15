


const express = require('express');
var app = express();
var sql = require("mssql");
var result;
a = async () => {

    try {
        await sql.connect('mssql://sogei\\sogeiadmin:pa$$w0rd2018@10.207.234.104/InpsIntranet');
        result = await sql.query`select * from documenti`;

        console.dir(result);

    }
    catch (err) {
        console.log(err);
    }

};






app.get("/", async (req, res) => {
    await a();
    //console.dir(result);
    res.send(result.recordset);
})



const PORT = 3000;
var server = app.listen(PORT, function () {
    console.log(`Server is running   http://localhost:${PORT}`);
})
