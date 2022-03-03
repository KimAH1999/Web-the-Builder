//seed section is like graphql when handleing data, but graphql is faster when recieveing and handling data
const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Java' },
    { name: 'OOP' },
    { name: 'SQL' },
    { name: 'ORM'},
    { name: 'MVS'},
    { name: 'CS'},
    { name: 'NoSQL'},
    { name: 'PWA'},
    { name: 'React'},
    { name: 'MERN'},
    { name: 'State'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'HTML',
      description:
        'A content and struction language. This section teaches you HTML in general',
      image: 'html-basis.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 200
    },
    {
      name: 'CSS',
      description:
        'A style section to understand the advance styling possiablities.',
      image: 'CSS.png',
      category: categories[1]._id,
      price: 2.99,
      quantity: 200
    },
    {
      name: 'Java & Javascript',
      description:
        'A style section to understand the advance styling possiablities.',
      image: 'Java.png',
      category: categories[2]._id,
      price: 3.99,
      quantity: 200
    },
    {
      name: 'OOP',
      description:
        'Code is organized using objects instead of functions and can be created from the same blueprint class/function.',
      image: 'OOP.png',
      category: categories[3]._id,
      price: 2.99,
      quantity: 200
    },
    {
      name: 'SQL',
      description:
        'A method and skill to learn to interact with the database information',
      image: 'SQL.png',
      category: categories[4]._id,
      price: 2.99,
      quantity: 200
    },
    {
    name: 'ORM',
    description:
      'Understanding how the database information and Code interact with the ORM.',
    image: 'ORM.png',
    category: categories[5]._id,
    price: 2.99,
    quantity: 200
    },
    {
    name: 'MVC',
    description:
      'Learning handlebars and how to pass objects in controllers folder.',
    image: 'MVC.png',
    category: categories[6]._id,
    price: 2.99,
    quantity: 200
    },
    {
    name: 'CS',
    description:
      'Shows CS fundamentals to understand how to program functions and how to make it faster and more efficient.',
    image: 'CS.png',
    category: categories[7]._id,
    price: 2.99,
    quantity: 200
    },
    {
    name: 'NoSQL',
    description:
      'When using MongoDB, instead of SQL, we understand how to create a collection and an array of objects/products',
    image: 'NoSQL.png',
    category: categories[8]._id,
    price: 2.99,
    quantity: 200
    },
    {
    name: 'PWA',
    description:
      'This section shows how PWA are flexiable, fast, secure, and can be operated offline from Network.',
    image: 'PWA.png',
    category: categories[9]._id,
    price: 2.99,
    quantity: 200
    },
    {
    name: 'React',
    description:
      'Understanding how the Data-Driven Events, Virtual DOM, and DOM interact with each other. This creates React, a most-powerful, in-demand front-end Javascript libraries.',
    image: 'React.png',
    category: categories[10]._id,
    price: 2.99,
    quantity: 200
    },
    {
    name: 'MERN',
    description:
      'MERN is a combination of using MongoDB, Express, React, and Node.js. Then using Heroku to top it off to make it a proper cloud platform to host.',
    image: 'MERN.png',
    category: categories[11]._id,
    price: 2.99,
    quantity: 200
    },
    {
    name: 'State',
    description:
      'This helps learn how to manage global state using Reacts Context API and understanding Redux.',
    image: 'State.png',
    category: categories[11]._id,
    price: 2.99,
    quantity: 200
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'Group6',
    email: 'ItFINALLYWORKED@example.com',
    password: '!@#$%Qwert',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    username: 'Mickey',
    email: 'ClubHouse@example.com',
    password: '!@#$%Qwert'
  });

  console.log('users seeded');

  process.exit();
});
