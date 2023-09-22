const jwt = require ('jsonwebtoken');
const generateJwt =  (uid= '') =>{
    return new Promise ((resolve, reject)=>{
        const payload = {uid};

        jwt.sign(payload,process.env.KEY_JWT, {
            expiresIn : '5h'
        }, (err, token)=>{
            if (err){
                console.log(err);
                reject ('Error al generar jwt')
            } else {
                resolve (token)
            }
        })
    })
}
module.exports = generateJwt;