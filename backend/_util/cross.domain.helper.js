// cross-domain and cookies
const corsOptions = {
    origin: true,
    // credentials: true,
    maxAge: (100 * 60 * 60 * 24), // 24 hours
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: [
        'Origin',
        'X-Request-With',
        'Content-Type',
        'Accept',
    ]
};

module.exports = corsOptions;
