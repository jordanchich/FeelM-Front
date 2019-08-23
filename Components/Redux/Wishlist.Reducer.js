export default function ( wishlistData = [], action) {
    
    var copywishlistData = [...wishlistData]
    // console.log('Redux ==========',action)
    
    if (action.type == 'wishlistFilm') {

        copywishlistData.push(action.wishlistFilm)

        // console.log('=========>>>>>>>>>>>>> copywishlistData',copywishlistData)

        return copywishlistData;
    }

    else {
        return wishlistData;
    }
}