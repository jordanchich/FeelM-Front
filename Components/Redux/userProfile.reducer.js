export default function (userProfile = {}, action) {
    console.log("TCL: action", action)
    if (action.type == 'userProfile') {
        return action.profile;
    } else {
        return userProfile;
    }
}

