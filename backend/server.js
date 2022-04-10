const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express();

// Express App Config
app.use(express.json());

const userRoutes = require('./api/user/user.routes');
const courseRoutes = require('./api/course/course.routes');
const cartRoutes = require('./api/cart/cart.routes');

// routes
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware');
app.all('*', setupAsyncLocalStorage);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

app.use('/api/user', userRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/cart', cartRoutes);


// const logger = require('./services/logger.service');

const port = process.env.PORT || 3030;

app.listen(port, () => {
    // logger.info('Server is running on port: ' + port);
    console.log(('Server is running on port: ' + port));
});