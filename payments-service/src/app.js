const express = require('express');
const bodyParser = require('body-parser');
const payments = require('./routes/payments');

const app = express();
app.use(bodyParser.json());

app.use('/payments', payments);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
