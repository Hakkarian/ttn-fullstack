const db = require('../db');

exports.getAllUsers = async (req, res, next) => {
    db.query('select * from USERS')
        .then(data => res.status(200).json(data))
        .catch(err => next(err));
}

exports.getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const foundUser = await db.query(`SELECT * FROM users WHERE id = ${id}`);

        if (!foundUser) {
            throw ErrorHandler(404);
        }
    return res.status(200).json(foundUser);
    } catch (error) {
        next(error)
    }
}
exports.createUser = async (req, res, next) => {
    try {
        const { username, email } = req.body;

        // if (!["user", "admin"].includes(role)) {
        //     throw ErrorHandler(404, 'Role not found');
        // }
        // if (!username || !email) {
        //     throw ErrorHandler(404, 'Username or email not found')
        // }
        const newUser = await db.query('INSERT INTO users (username, email) VALUES ($1, $2)', [username, email])
        res.status(201).json(newUser);
    } catch (error) {
        next(error)
    }
}
// exports.updateUser = async (req, res, next) => {
//     const { id } = req.params;
//     try {
//         const { username, email } = req.body;
//         const updUser = await db.findByPk(id);
//         if(!updUser){
//             throw ErrorHandler(404)
//         }
//         updUser.username = username;
//         updUser.email = email;
//         res.status(200).json(updUser);
//     } catch (error) {
//         next(error)
//     }
// }
// exports.deleteUser = async (req, res, next) => {
//     const { id } = req.params;
//     try {
//         const user = await db.findByPk(id);

//         if (!user) {
//             throw ErrorHandler(404)
//         }

//         await db.destroy({ where: { id } });
//         res.status(200).json('User deleted.')
//     } catch (error) {
//         next(error)
//     }
// }
