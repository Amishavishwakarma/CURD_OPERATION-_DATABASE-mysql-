var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1",
  database:"logsign"
});
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var password='neha@123H'
  var sql = `select * from data where password='${password}'`
  con.query(sql,(err,result)=>{
    if(result!=0){
      console.log(`your password successfully`)
    }
    else{
      console.log(`sorry your password login fisrt`)
    }
    
  })
});


