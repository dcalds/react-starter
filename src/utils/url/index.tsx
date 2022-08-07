interface IParam {
    param: string
}

export function getParamFromUrl({ param }: IParam) {
    return param;
}