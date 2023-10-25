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


const deleteFileInBackblaze = async (path) => {
    await s3.deleteObject({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path
    }).promise()
}

module.exports = {
    uploadFile,
    deleteFileInBackblaze
}