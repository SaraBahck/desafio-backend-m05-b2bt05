const AWS = require('aws-sdk')

const endpoint = new AWS.Endpoint(process.env.ENDPOINT_S3)

const s3 = new AWS.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.APP_KEY
    }
})

const uploadFile = async (path, buffer, mimetype) => {
    const file = await s3.upload({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path,
        Body: buffer,
        ContentType: mimetype
    }).promise()

    return {
        url: file.Location,
        path: file.Key
    }
}


const deleteFileInBackblaze = async (folderPath) => {
   
    const params = {
        Bucket: process.env.BACKBLAZE_BUCKET,
        Prefix: folderPath
    };

    const objects = await s3.listObjectsV2(params).promise();

    if (objects.Contents.length === 0) {
        console.log("A pasta está vazia, nada para excluir.");
        return;
    }

    const deleteParams = {
        Bucket: process.env.BACKBLAZE_BUCKET,
        Delete: { Objects: [] }
    };

    objects.Contents.forEach(obj => {
        deleteParams.Delete.Objects.push({ Key: obj.Key });
    });

    await s3.deleteObjects(deleteParams).promise();

    console.log(`Pasta ${folderPath} excluída com sucesso.`);
}

module.exports = {
    uploadFile,
    deleteFileInBackblaze
}