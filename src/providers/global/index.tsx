import { ReactNode, createContext, useState, useMemo } from 'react';

interface IProps {
    children: ReactNode;
}

interface IUser {
    name: string;
}

interface IContextData {
    user: IUser | null;
}

export const GlobalContext = createContext({} as IContextData);

export function GlobalProvider(props: IProps) {

    const { children } = props;

    const [user, setUser] = useState<IUser | null>({
        name: 'Danilo',
    });

    const value = useMemo(
        () => ({ user, setUser }),
        [user, setUser]
    );

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}