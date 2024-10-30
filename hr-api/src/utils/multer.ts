import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        console.log(file)
    },
    filename: function (req, file, cb){
        console.log(file)
    }
})

export const uploadMulter = multer({storage: storage})