export default function (MatchUser = [], action) {
    
    if (action.type == 'Matching') {


        var MatchingUserCopy = [...MatchUser];


        for (let i = 0; i < action.userModel.userMatch.length; i++) {
            MatchingUserCopy.push({

                Users: action.userModel.userMatch[i]

            })
        }

        console.log('MatchUser ========', MatchingUserCopy)
        return MatchingUserCopy;
    } else {

        return MatchUser;

    }

}
