export function addCompare(cat) {

    let compareItem = localStorage.compare ? JSON.parse(localStorage.getItem('compare')) : []

    //remove compare
    if (compareItem.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {
        let remove = compareItem.findIndex(item => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)
        compareItem.splice(remove, 1)
        localStorage.setItem('compare', JSON.stringify(compareItem))
    }

    // add compare
    else if (!compareItem.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

        compareItem.push(cat)
        localStorage.setItem('compare', JSON.stringify(compareItem))

    }

}
