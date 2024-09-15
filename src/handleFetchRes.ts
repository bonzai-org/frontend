import AuthContext from "./AuthContext";
import { useContext } from "react";

export async function handleAuthSuccess(response: Response, setErrorMsg: (message: string | null) => void,
 redir: () => void) {
    const { setAuthData } = useContext(AuthContext);
    {
        setErrorMsg(null);
        const data = await response.json();
        setAuthData(data.username, data.profilePhoto);
        redir();
      }
}