const express = require('express');
const con = require('./config');
const app = express();

app.use(express.json());
app.get('/', (req, resp) => {
  con.query('select * from  users', (err, result) => {
    if (err) {
      resp.send('error in api');
    } else {
      resp.send(result);
    }
  });
  //resp.send('route done');
});

app.post('/', (req, resp) => {
  //const data = { name: 'bhaskar', password: '3030', user_type: 'visitor' };
  const data = req.body;
  con.query('INsert INTO users SET ?', data, (error, result, fields) => {
    if (error) throw error;
    resp.send(result);
  });
});

app.put('/', (req, resp) => {
  const data = ['tony', '0000', 'reader', 10];
  con.query(
    ' UPDATE users SET name = ?, password = ?,user_type = ? where id = ?',
    (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
    }
  );
  // resp.send('update api working');
});

app.put('/:id', (req, resp) => {
  const data = [
    req.body.name,
    req.body.password,
    req.body.user_type,
    req.params.id,
  ];
  con.query(
    ' UPDATE users SET name = ?, password = ?,user_type = ? where id = ?',
    (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
    }
  );
  // resp.send('update api working');
});

app.delete('/:id', (req, resp) => {
  con.query(
    'DELETE FROM users WHERE id =' + req.params.id,
    (error, results) => {
      if (error) throw error;
      resp.send(results);
    }
  );
  //resp.send(req.params.id)
});

app.listen(5000);
