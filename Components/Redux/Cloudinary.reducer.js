export default function (cloudinary = {}, action) {
    console.log('cloudinary ======', cloudinary)
    if (action.type == 'cloud') {
        console.log('action.cloudinaryData ======', action.cloudinaryData)

        return action.cloudinaryData;
    } else {
        return cloudinary;
    }
}
