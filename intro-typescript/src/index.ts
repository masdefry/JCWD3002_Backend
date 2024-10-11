// VARIABLE
const studentName: string = 'Sharon'
let price: string | number | boolean = true 



// Array
// - Array dengan Item Value Sejenis
const arrFruits: string[] = ['Apple', 'Mango', 'Grape']

// - Array dengan Item Value yang Berbeda-Beda (Tupple Array)
let arrRandom: [string, number, boolean, string]
arrRandom = ['Abc', 123, true, 'Bebas']



// Object

// Type vs Interface 
// Type Lebih Sering digunakan untuk Mendefinisikan Function
// Interface Lebih Sering digunakan untuk Mendefinisikan Object/Class
//                              Type vs Interface
//  Object                  :    OK         OK
//  Merge                   :    x          OK
//  Intersection & Union    :    OK         x
//  Extend                  :    x          OK

type TobjStudent = {
    id: number,
    name: string, 
    address: string
}

interface IobjStudent{
    id: number, 
    name: string, 
    address: string
}

const objStudent: IobjStudent = {
    id: 1, 
    name: 'Sharon', 
    address: 'BSD',
}



// Merge 
// type TSong = {
//     songName: string 
// }

// type TSong = {
//     songName: string
// }


interface ISong{
    id: number
    songName: string 
}

interface ISong{
    id: number 
    artistName: string 
}

const playlist: ISong = {
    id: 1, 
    songName: '&', 
    artistName: 'Sheila on 7'
}



// Intersection & Union
type TOptionA = {
    id: number, 
    propA: string 
}

type TOptionB = {
    id: number, 
    propB: string 
}

// Intersection
const newObj: TOptionA & TOptionB = {
    id: 1, 
    propA: 'Bebas', 
    propB: 'Sabeb'
}

// Union
const NewOBJ: TOptionA | TOptionB = {
    id: 1, 
    propB: 'Str'
}






function Greeting(user: string){
    console.log(`Hello, ${user}`)
}

interface ICreateProduct{
    productName: string, 
    brandName: string, 
    price: number, 
    ram: number
}

function CreateProduct({productName, brandName, price, ram}: ICreateProduct){

}
CreateProduct({
    productName: 'Lenovo', 
    brandName: 'Lenovo', 
    price: 100000000, 
    ram: 8
})











// ADVANCE TYPE 
/*
    Partial     : Partial<T>
    Required    : Required<T>
    Readonly    : Readonly<T>
    Pick        : Pick<T, K>
    Omit        : Omit<T, K>
*/
// Use Case: Kita Ingin Membuat Interface Baru dari Interface yang Sudah Ada Sebelumnya. 
//           Tapi Kita Tidak diperbolehkan Merubah/Memodifikasi Interface yang Sebelumnya. 
//           Kenapa Tidak Kita Ubah Saja Interface Sebelumnya? Karena Bisa Jadi Interfacenya
//           dari Library atau Framework atau Mungkin dari Codebase Kita yang Sebelumnya. 
//           Dan Apabila Merubah Codebase nya, Dapat Mempengaruhi Code2 Lainnya. 

interface IStudentPwd{
    id: number, 
    email: string, 
    username: string, 
    fullname: string, 
    address: string, 
    phoneNumber: string, 
    isGraduated: boolean, 
    isMarried: boolean
}

function ValidateStudentData({id, email, username, fullname, address, phoneNumber, isGraduated, isMarried}: IStudentPwd){

}

// Partial
function ValidateStudentDataPartial({email, username, isGraduated}: Partial<IStudentPwd>){

}

ValidateStudentDataPartial({
    email: 'bebas', 
    username: 'bebas', 
    id: 123, 
})

// Required
function ValidateStudentDataRequired({id, email, username, fullname, address, phoneNumber, isGraduated, isMarried}: Required<IStudentPwd>){

}

// Pick
function ValidateStudentDataPick({fullname, email}: Pick<IStudentPwd, 'fullname' | 'email'>){

}

ValidateStudentDataPick({ 
    fullname: 'Defryan', 
    email: 'defryan@gmail.com'
})

// Omit: Pengecualian 
function ValidateStudentDataOmit({id, username, address, phoneNumber, isGraduated, isMarried}: Omit<IStudentPwd, 'fullname' | 'email'>){

}

// Readonly 
function ValidateStudentDataReadOnly(paramsss: Readonly<IStudentPwd>){
    // paramsss.email = 'Abc'
    console.log(paramsss.email)
}

ValidateStudentDataReadOnly({
    id: 123, 
    email: 'bebas', 
    username: '', 
    fullname: '', 
    address: '', 
    phoneNumber: '', 
    isGraduated: true, 
    isMarried: true
})
