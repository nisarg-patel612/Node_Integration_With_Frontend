const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express()

app.use(cors())
const PORT = 5000

// fetch data from fakestore api
app.get('/products', async(req,res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        res.json(response.data)
    } catch (error) {
        res.json({
            error: 'Failed to Fetch Products'
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})