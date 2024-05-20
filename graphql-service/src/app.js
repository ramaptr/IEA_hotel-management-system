const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`GraphQL server is running on port ${PORT}`);
});
