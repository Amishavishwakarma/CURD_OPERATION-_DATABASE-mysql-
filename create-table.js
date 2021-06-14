var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1",
  database:"mydb"
});
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("create table mytable (name varchar(255),address varchar(255))",(err,result)=>{
    if(err) throw err;
    console.log("table column created")
})
});


