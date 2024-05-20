const express = require('express');
const bodyParser = require('body-parser');
const roomTypes = require('./routes/roomTypes');

const app = express();
app.use(bodyParser.json());

app.use('/room-types', roomTypes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
