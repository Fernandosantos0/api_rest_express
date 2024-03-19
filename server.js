import colors from 'colors';
import app from './app';

const port = process.env.PORT || 3001;
const host = 'localhost';
app.listen(port, host, () => {
    console.log('Express JS'.blue.italic.bold);
    console.log(`Server ON - http://${host}:${port}`.green.bold)
});
