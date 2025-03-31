//to,from,subject,text
const mailer = require('nodemailer');

///function

const sendingMail = async(to,subject,text) => {

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth:{
            user:"atomicrm02@gmail.com",
            pass:"mexq jpme rynm iegl"
        }
    })

    const mailOptions = {
        from: 'atomicrm02@gmail.com',
        to: to,
        subject: subject,
        // text: text
        html:text
    }

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;

}

module.exports ={
    sendingMail
}
//   sendingMail("atomic123@yopmail.com","Test Mail","this is test mail helllo 1233")