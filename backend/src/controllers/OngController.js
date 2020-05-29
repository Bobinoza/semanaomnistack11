const crypto = require('crypto'); // É usado para criptografia.
const connection = require('../database/connection'); 

module.exports = {
    async index(request, response) { // EU posso ter 2 rotas com o mesmo nome, porém tem que ser diferente métodos.
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // O crypto vai gerar um número aleatório com 4 bits, eu vou converter esses bits para STRINGS hexadecimal. (Isso consta na documentação do NODE)
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

    return response.json({ id });
    }
};