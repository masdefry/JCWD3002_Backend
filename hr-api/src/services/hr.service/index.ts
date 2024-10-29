import { prisma } from "../../connection";
import { hashPassword } from "../../utils/hash.password";
import { IAuth } from './../auth.service/types';
import { Role } from '@prisma/client';

export const createUserService = async({ firstName, lastName, email, role, salary, shiftsId }: Pick<IAuth, 'firstName' | 'lastName' | 'email' | 'role' | 'salary' | 'shiftsId'>) => {
    const prismaRole = role as unknown as Role;
    
    return await prisma.user.create({
        data: { firstName, lastName, email, password: await hashPassword('abc123'), role: prismaRole, salary, shiftsId }
    })
}