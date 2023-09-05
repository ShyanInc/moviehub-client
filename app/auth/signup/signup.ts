'use server';

const API_BASE_URL = process.env.API_BASE_URL;

export const signUp = async (
  username: string,
  email: string,
  password: string
) => {
  const res = await fetch(API_BASE_URL + 'auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    throw new Error(data.message);
  }
};
