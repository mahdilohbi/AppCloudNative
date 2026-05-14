const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Smart E-commerce API',
            version: '1.0.0',
            description: 'API Documentation for the Smart E-commerce Platform',
            contact: {
                name: 'Developer'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'API Gateway'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    // Files to check for JSDoc annotations
    apis: ['./swaggerDocs/*.js']
};

module.exports = swaggerJsDoc(swaggerOptions);
