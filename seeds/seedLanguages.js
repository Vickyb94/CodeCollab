
const { Language } = require('../models');

const languageData = [
    {
        userId: 1,
        JavaScript: true,
        Python: false,
        Java: false,
        Swift: false
    }
]

const seedLanguages = () => {
    Language.bulkCreate(languageData);
}

module.exports = seedLanguages;