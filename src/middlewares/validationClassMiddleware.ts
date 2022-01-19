import { Request, Response, NextFunction } from 'express';
import  Joi  from 'joi';

export default function validationClassMiddleware(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        video: Joi.string().required(),
        data_init: Joi.date().required(),
        data_end: Joi.date().required(),
    });

    const options = {
        abortEarly: false,
        allowUnknown: true, 
        stripUnknown: true 
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {

        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}