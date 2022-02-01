const fs = require('fs')
var sqlite3 = require('sqlite3').verbose();

const express = require('express')
const app = express()
const port = 3000

class simple_authentication
{
  authenticated_users = []

  reset_authentication()
  {
    this.authenticated_users = []
    console.log("auth reset")
  }

  is_authenticated(id)
  {
    let uid = parseInt(id)
    if (this.authenticated_users.includes(uid))
    {
      return true
    }
    return false
  }

  authenticate(id)
  {
    let uid = parseInt(id)
    this.authenticated_users.push(uid)
  }
}

auth = new simple_authentication()
setInterval(auth.reset_authentication, 120000)

app.get('/', (req, res) => {
  res.send("Backend is up and running!")
})

app.listen(port, '0.0.0.0', () => {
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
  try
  {
    id_check = parseInt(user_id)
  }
  catch
  {
    res.json({"msg": "invalid phone number"})
  }
  if(!auth.is_authenticated(id_check))
  {
    res.json({"msg": "Not authorized"})
  }
  else
  {
    let db = new sqlite3.Database('flags.db');
    db.all("SELECT image_path FROM images WHERE user_id=" + user_id,
          function(err, rows)
            {
              if (err) {res.json({"image": "Invalid User ID"})}
              try
              {
                res.json({"image": rows[0].image_path})
              }
              catch
              {
                res.json({"image": "Invalid User ID"})
              }
            }
          )
  }
});

app.get('/login', (req, res) =>
{
  const user_id = req.query.user_id
  const pw = req.query.password
  let db = new sqlite3.Database('flags.db');
  db.all("SELECT * FROM users WHERE user_id=" + user_id + " AND password='" + pw + "'",
  function(err, rows)
    {
      if (rows.length > 0)
        {
          auth.authenticate(user_id)
          resp = {}
          resp[user_id] = "authenticated"
          res.json(resp)
        }
      else
        res.json({"msg" : "Incorrect username/password"})
    }
  )
})
