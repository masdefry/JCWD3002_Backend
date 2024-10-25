export interface IAuth{
    id?: string, 
    firstName: string,
    lastName: string, 
    email: string, 
    password: string, 
    leaveBalance?: number, 
    role: Role | string,  
    salary: number, 
    shiftsId: number, 
    createdAt?: Date, 
    updatedAt?: Date, 
    deletedAt?: Date | null
}

enum Role{
    HR, 
    MANAGER, 
    STAFF
}