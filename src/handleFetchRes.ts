export async function handleAuthSuccess(response: Response, setErrorMsg: (message: string | null) => void,
  redir: () => void, setAuth: (username: string, profilePhoto: string) => void) {
  {
    setErrorMsg(null);
    const data = await response.json();
    setAuth(data.username, data.profilePhoto);
    redir();
  }
}