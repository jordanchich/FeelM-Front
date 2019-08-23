export default function (Azure = {}, action) {
    console.log('Azure ======',Azure)
    if (action.type == 'azure') {
        console.log('action.azureData ======', action.azureData)
        return action.azureData;
        
    } else {
        return Azure;
    }
}
