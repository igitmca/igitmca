import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from '@/lib/firebaseauth';
import { User } from 'firebase/auth';

type AuthUserContextValue={
    authUser: User | null | undefined,
    loading:boolean
}
const AuthUserContext = createContext<AuthUserContextValue>({
  authUser: null,
  loading: true
});

export function AuthUserProvider({ children }:{children:React.ReactNode}) {
  const auth = useFirebaseAuth();
 return(
    <AuthUserContext.Provider value={auth}>
        {children}
    </AuthUserContext.Provider>
 )
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(AuthUserContext);
