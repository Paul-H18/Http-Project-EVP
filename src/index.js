/**
 * Laborprojekt EVP
 * Timo, Linas, Paul
 */

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const password = '11100101110101110010111001001101001110011111001011110010 ';
const passwordClear = 'ruediger';


// Import routes
const indexRoutes = require('./routes/index');
//const userRoutes = require('./routes/users');
//const productRoutes = require('./routes/products');

// Use routes
app.use('/', indexRoutes);
// app.use('/users', userRoutes);
// app.use('/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





