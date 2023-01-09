const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('docs/docs.yaml');
const SocialRoute = require('./routes/index')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', SocialRoute)


app.listen(7500, function(){
    console.log('Server is up');
})