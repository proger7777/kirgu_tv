import KirguSource from "../API/KirguSource"

export const getFilters = async(catId) => {

    const filterData = await KirguSource.getFilters(catId)
    const priceData = filterData[0]
    const propsData = filterData.slice(1)

    let result = { price: priceData, props: [] }

    propsData.forEach(i => {

        let res = { id: i.id, name: i.name, props: [] }
        
        Object.keys(i.values).forEach(key =>  {
            res.props.push({
                id: i.values[key].id,
                name: i.values[key].name,
            })
        })

        result.props.push(res)
    })

    return result
}

