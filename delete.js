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
  var sql = "DELETE FROM mytable WHERE address = 'Mountain 21'";
  con.query(sql,(err,result)=>{
      if(err) throw err;
      console.log("data has been deleted")
      console.log(result)
  })
});