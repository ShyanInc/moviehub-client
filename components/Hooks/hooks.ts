import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ISessionUser } from '@/types/types';
import { usePathname } from 'next/navigation';

interface ISecurityResult {
  user: ISessionUser | null;
  loading: boolean;
  loginStatus: boolean;
}

const useLoginSecurity = (): ISecurityResult => {
  const [user, setUser] = useState<ISessionUser | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isLogged, setIslogged] = useState(false);
  async function Session() {
    const session = await getSession();
    if (!session) signIn();
    else {
      setUser(session.user);
      setIslogged(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    Session();
  }, []);
  return { user: user, loading: isLoading, loginStatus: isLogged };
};

const useUnloginSecurity = (): any => {
  const [session, setSession] = useState<any>();
  const router = useRouter();
  const SIGN_IN_PATH = 'auth/signin';
  const SIGN_UP_PATH = 'auth/signup';

  const pathname = usePathname().slice(1);

  async function Session() {
    const data = await getSession();
    return data;
  }

  useEffect(() => {
    Session()
      .then((data) => { setSession(data); });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (session && (pathname === SIGN_IN_PATH || pathname === SIGN_UP_PATH)) {
      return router.push('/profile');
    }
  }, [session]); // eslint-disable-line react-hooks/exhaustive-deps

  return session!! && { session: session };
};

const useCurrentPath = (): string => {
  const pathname = usePathname();
  return pathname.slice(1);
}

export { useLoginSecurity, useUnloginSecurity, useCurrentPath };