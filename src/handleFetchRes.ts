export async function handleAuthSuccess(response: Response, setErrorMsg: (message: string | null) => void,
 setAuthData: (username: string, profilePhoto: string) => void, redir: () => void) {
    {
        setErrorMsg(null);
        const data = await response.json();
        setAuthData(data.username, data.profilePhoto);
        redir();
      }
}