import { prisma } from '../../connection'

export const createProfileService = async({imagesUploaded, birthDate, phoneNumber, address, usersId}: any) => {
    await prisma.$transaction(async(tx) => {
        const createdUserProfile = await tx.userProfile.create({
            data: {
                birthDate: new Date(birthDate), 
                phoneNumber, 
                address, 
                usersId
            }
        })
    
        const imagesToCreate = imagesUploaded.images.map((image: File) => {
            return { imageUrl: image.filename, directory: image.destination, userProfilesId: createdUserProfile.id }
        })
    
        await tx.userProfileImage.createMany({
            data: imagesToCreate
        })
    })
}

export const findProfileService = async({usersId}) => {
    return await prisma.userProfile.findFirst({
        where: {usersId},
        include: {
            userProfileImage: {
                select: {
                    imageUrl: true,
                    directory: true
                }
            }
        },
    })
}