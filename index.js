const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const port = 3000;
const wordpressAPI = 'http://host.docker.internal/wordpress/wp-json/wp/v2/users';

app.get('/', (req, res) => {
  res.send('This is the custom API to fetch the list of users.');
});

// endpoint of the custom api to accept user details using username then POST
app.post('/users', async (req, res) => {
  // console.log('test headers', req.headers);
  // console.log('test req body', req.body);

  const { username } = req.body;

  if (!username) { return res.status(400).json({ error: 'Username is required' }); }
  try {
    const response = await axios.get(wordpressAPI);
    const users = response.data;

    // I modified the user list into these 4 only for easy and readable format for everyone
    const userList = users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.slug,
      link: user.link,
    }));

    res.json(userList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users from WordPress' });
  }
});

// endpoint to return the list or fetch users using GET
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(wordpressAPI);
    const users = response.data;
    const userList = users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.slug,
      link: user.link,
    }));

    res.json(userList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users from WordPress' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
