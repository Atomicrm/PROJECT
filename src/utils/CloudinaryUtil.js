const cloundinary = require("cloudinary").v2;


const uploadFileToCloudinary = async (file) => {

    //conif
        cloundinary.config({
        cloud_name:"dqlgqh0ak",
        api_key:"247675975361915",
        api_secret:"TviN0K3VgDXzJTIf9ECO3TpeQH0"
    })

    const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
    return cloundinaryResponse;



};
module.exports = {
    uploadFileToCloudinary
}