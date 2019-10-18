export const join = (req, res) => res.render("JOIN", { pageTitle: "Join"});
export const login = (req, res) => res.render("LOGIN", { pageTitle: "Login"});
export const logout = (req, res) => res.render("LOGOUT", { pageTitle: "Logout"});
export const users = (req, res) => res.render("USERS", { pageTitle: "Users"});
export const userDetail = (req, res) => res.render("USER_DETAIL", { pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("EDIT_PROFILE", { pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("CHANGE_PASSWORD", { pageTitle: "Change Password"});
