export interface IDisplayProfileProps{
    birthDate: string, 
    phoneNumber: string, 
    address: string,
    imagesProfile: any[]
}

export interface IFormProfile{
    mutateCreateProfile: (fd: FormData) => void;
}