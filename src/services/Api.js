const API_URL = 'https://dogsapi.origamid.dev/json';

export function Token_POST(username, password) {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    method: 'post',
    data: {
      username: username,
      password: password,
    }, //username, password
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function User_GET(data) {
  return {
    method: 'get',
    url: `${API_URL}/api/user`,
    headers: {
      Authorization: 'Bearer ' + data, //token
    },
    data: {},
  };
}

export async function Token_Validate(data) {
  return {
    method: 'post',
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    headers: {
      Authorization: 'Bearer ' + data, //token
    },
    data, //{}
  };
}

export async function User_Post(data) {
  return {
    method: 'post',
    url: `${API_URL}/api/user`,
    headers: {
      'Content-Type': 'application/json',
    },
    data, //{username, email, password}
  };
}
