const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const registerResponseHandlers = require('./backend/_util/api/api.response.handlers');
const constants = require('./backend/_util/constants/constants');
const corsOptions = require('./backend/_util/cross.domain.helper');

const app = express();

// middleware setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors(corsOptions));

// register response handlers
registerResponseHandlers(express);

// load routes
const apiRouter = require('./backend/routes');
app.use('/api', apiRouter);

const distPath = path.join(__dirname, constants.FRONT_END_PATH);
if (fs.existsSync(distPath) === false) {
    console.error(`Angular dist files don't exist in ${distPath}. Please run ng build [--prod].`);
    process.exit(0);
}

// view engine setup
app.set('views', path.join(__dirname, 'backend', 'views'));
app.set('view engine', 'pug');

app.use(express.static(distPath));
app.get('/*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', { title: 'Error' });
});

module.exports = app;
