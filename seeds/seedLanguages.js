
const { Language } = require('../models');

const languageData = [
    {
        JavaScript: true,
        Python: false,
        Java: false,
        Swift: false,
        userId: 1
    }
]

const seedLanguages = () => {
 return Language.bulkCreate(languageData);

}


module.exports = seedLanguages;