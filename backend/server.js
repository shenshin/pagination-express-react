import express from 'express';
// sample array of products
import products from './products.js';

const app = express();

app.get('/api/products/', (req, res) => {
  // number of products per page
  const pageSize = 5;
  // number of current page from query string
  const pageNumber = Number(req.query.pageNumber) || 1;
  // number of first products to skip from the products list
  const skip = pageSize * (pageNumber - 1);
  // server response
  res.json({
    products: products.slice(skip, skip + pageSize),
    pageNumber,
    pageSize,
    pages: Math.ceil(products.length / pageSize),
  });
});

app.listen(5000, console.log('server running'));