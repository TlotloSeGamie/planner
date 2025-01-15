const express = require ('express');
const cors = require('cors');
const app = express();
const usersRoutes = require('./routes/authroutes');



app.use(cors());
app.use(express.json());

app.use('/api', usersRoutes),

app.listen(6000, () => {
    console.log('Server is running on port http://localhost:6000');
    
})