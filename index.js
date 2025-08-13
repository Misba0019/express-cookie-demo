const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

require('dotenv').config(); // Load environment variables from .env

// Middleware for parsing cookies, using secret from environment or default
app.use(cookieParser(process.env.COOKIE_SECRET || 'defaultsecret'));

// Reads the "name" cookie and greets the user
app.get('/greet', (req, res) => {
    const { name = 'User' } = req.cookies; // Default to "User" if cookie not found
    console.log(req.cookies); // Log all unsigned cookies
    res.send(`Hey ${name}! :)`);
});

// Sets two regular cookies: "name" and "fish"
app.get('/setname', (req, res) => {
    res.cookie('name', 'John Doe');
    res.cookie('fish', 'Tiger Oscar');
    res.send('Cookies have been set.');
});

// Sets a signed cookie "fruit"
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'strawberry', { signed: true });
    res.send('Signed cookie has been sent.');
});

// Displays signed cookies and logs both signed & unsigned cookies
app.get('/verifycookie', (req, res) => {
    console.log('Signed Cookies:', req.signedCookies);
    console.log('Unsigned Cookies:', req.cookies);

    // Respond with both in JSON format
    res.json({
        signedCookies: req.signedCookies,
        cookies: req.cookies
    });
});

// Clears all cookies set in this demo
app.get('/clearcookies', (req, res) => {
    res.clearCookie('name');
    res.clearCookie('fish');
    res.clearCookie('fruit');
    res.send('All cookies cleared!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});
