export default function ( filterData = [], action) {
    // console.log('==== Action Filter', action)
    var copyfilterData
    
   if (action.clear === true) {
       copyfilterData = []
   } else {
       copyfilterData = [...filterData]
   }
    
    if (action.type == 'mood') {

        copyfilterData.push(action.mood)

        // console.log('========= mood',copyfilterData)

        return copyfilterData;
    }

    else if (action.type == 'with') {
        copyfilterData.push(action.with)

        // console.log('========= Avec',copyfilterData)

        return copyfilterData;

    }
    
    else if (action.type == 'type') {
        copyfilterData.push(action.format)

        // console.log('========= Type',copyfilterData)

        return copyfilterData;

    } 

    else {
        return filterData;
    }

    
}