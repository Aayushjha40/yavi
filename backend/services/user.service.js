const UserModel = require('../models/user.model');

module.exports.createUser = async ({ name, lastname, email, password }) => {
    // Validate required fields
    if (name || !email || !password) {
        throw new Error('All fields are required');
    }

    try {
        const user = await UserModel.create({
            name,
            email,
            password,
        });

        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};
