import {Express, Request, Response} from 'express';
import api from './api/routes';

export default function (app:Express) {
    app.use('/api/v1/', api);
    app.use((req:Request, res:Response) => {
        res.status(404).json({error:'Not found'});
    })
};
