import { IAuth } from "./types";
import { prisma } from "../../connection";
import { comparePassword } from "../../utils/hash.password";

export const authLoginService = async({email, password}: Pick<IAuth, 'email' | 'password'>) => {
    const findUsers = await prisma.user.findMany({
        where: { email }
    })

    if(!findUsers.length) throw {msg: 'Email Belum Terdaftar', status: 400}

    const isComparePassword = await comparePassword(password, findUsers[0].password)

    if(!isComparePassword) throw {msg: 'Password Tidak Sesuai', status: 400}

    return findUsers
}