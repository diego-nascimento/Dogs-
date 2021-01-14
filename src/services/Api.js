import axios from 'axios';

const API_URL = 'https://dogsapi.origamid.dev/json';

export async function Token_POST(data) {
  return await axios.post(
    `${API_URL}/jwt-auth/v1/token`,
    {
      username: data.username,
      password: data.password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function User_GET(token) {
  return await axios.get(`${API_URL}/api/user`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
}

export async function Token_Validate(token) {
  return await axios.post(
    `${API_URL}/jwt-auth/v1/token/validate`,
    {},
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
}
