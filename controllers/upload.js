import path from 'path'
import { v1 as uuidv1 } from 'uuid'

export const uploadSinglePhoto=async (req, folderName)=>  {
    try {
        const file=req.files.file

        const fileName=`${uuidv1()}.${file.mimetype.split('/')[1]}`
        
    }   catch(err)  {
        console.log(err)
        throw Error()
    }
}