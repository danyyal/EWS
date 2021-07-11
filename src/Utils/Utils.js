
export const CheckUserIsSeller = currentUser => {
    if (!currentUser || !Array.isArray(currentUser.userRoles))
        return false;
    const { userRoles } = currentUser;
    if (userRoles.includes('seller'))
        return true;
    return false;
}


export const CheckUserIsAdmin = currentUser => {
    if (!currentUser || !Array.isArray(currentUser.userRoles))
        return false;
    const { userRoles } = currentUser;
    if (userRoles.includes('admin'))
        return true;
    return false;
}