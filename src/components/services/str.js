
export const truncate = (str, maxlength) => {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

export const getTitleFromLinkStock = (link) => {
    return link.split('/').slice(-2)[0]
}


