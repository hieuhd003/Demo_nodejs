let users = [
    {
        id: 1,name: 'John Doe', email: 'hieuuhd1503@gmail.com'
    }
];

exports.getUsers = (req, res) => {
    res.json(users);
}

exports.createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
}

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = users.find(u => u.id === parseInt(id));
    
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    res.json(user);
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(userIndex, 1);
    res.status(204).send();
}