import path from 'path'
import { v1 as uuidv1 } from 'uuid'

export const uploadSinglePhoto=async (req, folderName)=>  {
    try {
        const file=req.files.file

        const fileName=`${uuidv1()}.${file.mimetype.split('/')[1]}`
        const pathName=path.join(path.resolve(), `/${folderName}/${fileName}`)
        const result=await file.mv(pathName)
        return fileName
    }   catch(err)  {
        console.log(err)
        throw Error()
    }
}

export const uploadMultiplePhotos=async (req, folderName)=> {
    try {
        const all_files=req.files.all_files

        const photo_urls=[]
        const promises=[]
        let fileName, pathName, result

        await all_files.forEach((file)=>  {
            fileName=`${uuidv1()}.${file.mimetype.split('/')[1]}`
            pathName=path.join(path.resolve(), `/${folderName}/${fileName}`)
            promises.push(file.mv(pathName))
            photo_urls.push(fileName)
        })
        return photo_urls
    }   catch(err)  {
        console.log(err)
        throw Error()
    }
}