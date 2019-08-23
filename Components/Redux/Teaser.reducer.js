export default function (Teaser = {}, action) {
    // console.log('Teaser ======', Teaser)
    if (action.type == 'Teaser') {
        // console.log('action.TeaserData ======', action.teaser)
        return action.teaser;
        
    } else {
        return Teaser;
    }
}
