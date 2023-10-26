export const setPriceData = (item) => {
    const price_1 = parseInt(item.price_1)
    const price_2 = parseInt(item.price_2)
    const price_3 = parseInt(item.price_3)

    let data = {}

    if(price_2 > 0) {
        if(price_3 > 0 && price_3 > price_1) {
            data.oldPrice = price_3
            data.price = price_2
        } else {
            data.oldPrice = price_1
            data.price = price_2
        }
    } else {
        if(price_3 > 0 && price_3 > price_1) {
            data.oldPrice = price_3
            data.price = price_1
        } else {
            data.oldPrice = price_2
            data.price = price_1
        }
    }

    if(data.oldPrice > 0) {
        if(data.price > data.oldPrice) {
            const price = data.price
            data.price = data.oldPrice
            data.oldPrice = price
        } else if(data.price === data.oldPrice) {
            data.oldPrice = null
        }
    }

    if(data.oldPrice > 0) {
        data.skidka = (data.oldPrice - data.price) / data.oldPrice * 100
    } else {
        data.skidka = null
    }

    item.price = parseInt(data.price)
    item.old_price = parseInt(data.oldPrice)
    item.skidka = parseInt(data.skidka)

    return item
}

export const getPrice = (item) => {

    let price_1, price_2, price_3
  
    if (item?.offers) {
  
      price_1 = item.offers[0].price_1
      price_2 = item.offers[0].price_2
      price_3 = item.offers[0].price_3
  
    } else {
  
      price_1 = item.price_1
      price_2 = item.price_2
      price_3 = item.price_3
  
    }
  
    let data = {}
  
    if (price_2) {
  
      if (price_3 && price_3 > price_1) {
  
        data.oldPrice = price_3
        data.price = price_2
  
      } else {
  
        data.oldPrice = price_1
        data.price = price_2
  
      }
  
    } else {
  
      if (price_3 && price_3 > price_1) {
  
        data.oldPrice = price_3
        data.price = price_1
  
      } else {
  
        data.oldPrice = price_2
        data.price = price_1
  
      }
  
    }
  
    if (data.oldPrice) {
  
      if (data.price > data.oldPrice) {
  
        const price = data.price
  
        data.price = data.oldPrice
        data.oldPrice = price
  
      } else if (data.price === data.oldPrice) {
  
        data.oldPrice = null
  
      }
  
    }
  
    if (data.oldPrice) {
  
      data.skidka = ((data.oldPrice - data.price) / data.oldPrice) * 100
  
    } else {
  
      data.skidka = null
  
    }
  
    let bonus = 0
  
    if (item?.properties?.hasOwnProperty('Сумма бонусов для товара без характеристики')) {
      
      bonus += Number(item?.properties['Сумма бонусов для товара без характеристики'][0])
  
    }
  
    if (item?.properties?.hasOwnProperty('Сумма бонусов для товара с характеристикой')) {
      
      bonus += Number(item?.properties['Сумма бонусов для товара с характеристикой'])
  
    }
  
    data.bonus = bonus
    data.price = parseInt(data.price)
    data.oldPrice = data.oldPrice && parseInt(data.oldPrice)
    data.skidka = data.skidka && parseInt(data.skidka)
  
    return data
  
  }