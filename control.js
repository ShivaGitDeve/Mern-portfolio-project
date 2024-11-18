const mailController = (req, res) => {
    try {
            return res.status(200).send({success: true, message:'Your email has been sent successfully'});
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Send Email API Error' })
    }
}

module.exports = { mailController }