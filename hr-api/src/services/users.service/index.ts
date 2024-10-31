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
            return { imageUrl: image.filename, userProfilesId: createdUserProfile.id }
        })
    
        await tx.userProfileImage.createMany({
            data: imagesToCreate
        })
    })
}