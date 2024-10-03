const APIBASE = 'http://localhost:3000/api/';
import { CreateBonsaiPayload, LogInPayload, SignUpPayload } from "../interfaces/requests";


export async function handleFetch(method: string, endpoint: string, body?: any) {
  if (body) {
    return fetchWithBody(method, endpoint, body);
  } else {
    return fetchWithoutBody(method, endpoint);
  }
}

async function fetchWithBody(method: string,
  endpoint: string,
  body: CreateBonsaiPayload | LogInPayload | SignUpPayload) {
  try {
    const response = await fetch(APIBASE + endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    return response;
  } catch (error) {
    throw error;
  }
}

async function fetchWithoutBody(method: string, endpoint: string) {
  try {
    const response = await fetch(APIBASE + endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });
    return response;
  } catch (error) {
    throw error;
  }
}