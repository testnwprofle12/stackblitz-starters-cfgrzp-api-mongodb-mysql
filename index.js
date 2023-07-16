// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);

/************************************------------------ */
/*const mongoose = require('mongoose');

const main = async () => {
  await mongoose.connect('mongodb://localhost:27017/e-comm');

  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });

  const ProductsModel = mongoose.model('products', ProductSchema);
  let data = new ProductsModel({
    name: 'm8',
    price: 1000,
    brand: 'maxx',
    category: 'Mobile',
  });
  let result = await data.save();
  console.log(result);
};

main();*/

/**-------------------------------------------------*/

/*const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost:27017/e-comm');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const main = async () => {
  const Product = mongoose.model('products', ProductSchema);
  let data = new Product({
    name: 'm8',
    price: 1000,
    brand: 'maxx',
    category: 'Mobile',
  });
  let result = await data.save();
  console.log(result);
};

main();*/

const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost:27017/e-comm');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model('products', ProductSchema);
  let data = new Product({
    name: 'm8',
    price: 1000,
    brand: 'maxx',
    category: 'Mobile',
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = () => {
  const Product = mongoose.model('products', ProductSchema);
  let data = await Product.updateOne(
    { name: 'max 7' },
    {
      $set: { price: 700, name: 'max 8' },
    }
  );
  console.log(data);
};
//saveInDB();
//updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model('products', ProductSchema);
  let data = await Product.deleteOne({ name: 'max 8' });
  console.log(data);
};

//deleteInDB();

const findInDB = async () => {
  const Product = mongoose.model('products', ProductSchema);
  let data = await Product.find({ name: 'max 131' });
  console.log(data);
};
findInDB();
