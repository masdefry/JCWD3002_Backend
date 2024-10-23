import { prisma } from './../../connection/index';
import { IUser } from './types';

export const authRegisterService = async({username, email, password}: Pick<IUser, 'username' | 'email' | 'password'>) => {    
    const users = await prisma.user.findMany({
        where: {
            username, 
            email
        }
    })

    if(users.length > 0) throw {msg: 'Username or Email Already Exist', status: 400}
    
    await prisma.user.create({
        data: { username, email, password }
    })       
}

export const authLoginService = async({username}: Pick<IUser, 'username'>) => {
    return await prisma.user.findMany({
        where: {
            username
        }
    })
}