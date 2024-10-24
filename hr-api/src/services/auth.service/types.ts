export interface IAuth{
    id: string, 
    firstName: string,
    lastName: string, 
    email: string, 
    password: string, 
    leaveBalance: number, 
    role: Role,  
    salary: number
}

enum Role{
    HR, 
    MANAGER, 
    STAFF
}