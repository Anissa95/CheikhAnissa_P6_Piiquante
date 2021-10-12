// Importation de password-validator
const passwordValidator = require('password-validator');
//Création du schema 
const passwordSchema = new passwordValidator();
// le schema que doit respecter le mot de passe 
passwordSchema
    .is().min(4) // Minimum length 4
    .is().max(20) // Maximum length 20
    .has().uppercase() // Must have uppercase letters
    .has().lowercase() // Must have lowercase letters
    .has().digits(1) // Must have at least 1 digits
    .has().not().spaces() // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

//Vérification de la qualité du MDP par rapport au schema
module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)) {
        next();
    } else {
        return res.status(400).json({ error: `Le mot de passe n'est pas assez fort !!! ${passwordSchema.validate('req.body.password', { list: true })} ` })
    }

}