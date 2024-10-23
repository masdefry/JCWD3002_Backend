import { prisma } from "../../connection"
import { IPosts } from "./types"

export const createPostService = async({caption, imageUrl, usersId}: IPosts) => {
    await prisma.post.create({
        data: {
            caption, 
            imageUrl,
            usersId
        }
    })
}