import express from 'express';
import { users } from './users';

const app = express();

app.get('/', (req:Request, res:Response) => {
    console.log(users);
    res.end();
});

app.listen(5500, () => {
    console.log('Server has started');
    console.log('S3');
});
