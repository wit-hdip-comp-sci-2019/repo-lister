const axios = require('axios');

async function loadRepos(githubId) {
  const response = await axios.get(`https://api.github.com/users/${githubId}/repos`);
  console.log(`Searching ${githubId}...`);
  console.log (response.data)
}

loadRepos('hapijs');
