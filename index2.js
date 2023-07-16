const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());

app.get('./search/:key', async (req, resp) => {
  console.log(req.params.key);
  let data = await Product.find(
    {
      "$or":[
        {"name":{$regex:req.params.key}},
        {"brand":{$regex:req.params.key}},
        {"category":{$regex:req.params.key}}
      ]
    
    }
  );
  resp.send(data);
  //resp.send("search done");
});


app.listen(5000;)