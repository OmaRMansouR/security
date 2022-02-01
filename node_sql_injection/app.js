const fs = require('fs')
var sqlite3 = require('sqlite3').verbose();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Backend is up and running!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/initialize-database', (req, res) => {

  try
  {
    fs.unlinkSync('./flags.db')
  }
  catch(err)
  {
    console.log(err)
  }
  let db = new sqlite3.Database('flags.db');
  db.run('CREATE TABLE images(user_id Integer, image_path TEXT)', (err) => {
    if (err) {res.json("restart server")}
    db.run('CREATE TABLE users(user_id Integer, password TEXT)', (err) => {
      if (err) {res.json("restart server")}
      db.run("INSERT INTO users(user_id, password) VALUES(1234567890, 'notPassword')", (err) => {
        if (err) {res.json("restart server")}
        db.run("INSERT INTO images(user_id, image_path) VALUES(1234567890, '/your/normal/image')",
        (err) => {
          if (err) {res.json("restart server")}
          db.close()
          res.json({"message":"Database created successfully!"})
  })})})})
  
})

app.get('/select-image', (req, res) => {
  const user_id = req.query.user_id
  let db = new sqlite3.Database('flags.db');
  // db.all("SELECT image_path FROM images WHERE user_id=" + user_id,
  db.all("SELECT * FROM images",
        function(err, rows)
          {
            if (err) {res.json({"image": "Invalid User ID"})}
            rows.forEach(function(row)
            {
              console.log(row)
            })
            res.json(rows)
          }
        )
});
