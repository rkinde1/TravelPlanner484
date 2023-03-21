const getUser = (req,res) => {
    res.status(200).json({message: 'Get users'});
}

const createUser = (req,res) => {
    res.status(200).json({message: 'Create user'});
}

const updateUser = (req,res) => {
    res.status(200).json({message: `Update user info ${req.params.id}`});
}

const deleteUser = (req,res) => {
    res.status(200).json({message: `Delete user ${req.params.id}`});
}

module.exports = { 
    getUser, 
    createUser,
    updateUser,
    deleteUser,
}