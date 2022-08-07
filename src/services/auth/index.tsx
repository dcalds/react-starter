interface IToken {
    token: string
}

export function authUser({ token }: IToken) {
    return token;
}