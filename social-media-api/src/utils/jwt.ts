import jwt from "jsonwebtoken"

export const createToken = (id: string) => {
    return jwt.sign({ data: {id} }, 'jcwd3002', { expiresIn: '1h' })
}

export const decodeToken = (token: string) => {
    return jwt.verify(token, 'jcwd3002')
}