import {body} from 'express-validator'

export const createProfileValidator = [
    body(['birthDate', 'phoneNumber', 'address']).notEmpty().withMessage('Birthdate, Phone Number dan Address Harus Diisi'),
    body('birthDate').isString().escape(),
    body('phoneNumber').isString().escape(),
    body('address').isString().escape()
]