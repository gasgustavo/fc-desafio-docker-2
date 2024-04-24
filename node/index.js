const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const con = mysql.createConnection(config)
//create table people(id int not null auto_increment, name varchar(255), primary key(id));
const sql = `INSERT INTO people(name) values('Gustavo')`
con.query(sql)

app.get('/', (req,res) => {

    const slqFind = 'SELECT name FROM people;'
    
    con.query(slqFind, function (err, result, fields) {
          if (err) throw err;
          htmlString = '<ul>' + result.map(item => `<li>${item.name}</li>`).join('') + '</ul>';
          res.send('<h1>Full Cycle</h1>' + htmlString) 
    });

    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
