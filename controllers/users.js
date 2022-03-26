const path = require('path');
const { getJsonFromFile } = require('../helpers/files');

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

const getAllUsers = async (req, res) => {
  try {
    const users = await getJsonFromFile(usersFilePath);

    res.send(users);
  } catch (err) {
    console.log('Error occurred', err);
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
};

const getUserById = async (req, res) => {
  try {
    const users = await getJsonFromFile(usersFilePath);
    const chosenUser = users.find((user) => user._id === req.params.id);

    if (!chosenUser) {
      res.status(404).send({ message: 'User ID not found' });
    } else {
      res.send(chosenUser);
    }
  } catch (err) {
    console.log('Error occurred', err);
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
};

module.exports = { getAllUsers, getUserById };
