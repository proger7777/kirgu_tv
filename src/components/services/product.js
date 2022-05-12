import KirguSource from "../API/KirguSource"
import RatingSource from "../API/RatingSource"
import { setPriceData } from "./prices";

function setOfferPrice(item) {

    if(item.offers) {
        item.price_1 = item.offers[0].price_1
        item.price_2 = item.offers[0].price_2
        item.price_3 = item.offers[0].price_3
    }

    return item
}

function setOfferProperties(item) {
    
    if(item.offers) {
        item.properties = item.offers[0].properties
    }
    
    return item
}

function setFullImages(item) {
    let images, smallImages;

    if(item.offers) {
        images = item.offers[0].images
        smallImages = item.offers[0].small_images.split(',')
    } else {
        images = item.images
        smallImages = item.small_images.split(',')
    }

    item.images = []

    images.forEach((i, inx) => { 
        const smallImagePath = smallImages[inx] ? smallImages[inx] : null
        const imagePath = i ? i : smallImagePath 
        item.images.push([smallImagePath, imagePath])
    })

    return item
}


function setBonusData(item) {
    item.bonus = 0

    if(item.properties && item.properties['Сумма бонусов для товара без характеристики']) {
        item.bonus= parseInt(item.properties['Сумма бонусов для товара без характеристики'])
    }

    if(item.properties && item.properties['Сумма бонусов для товара с характеристикой']) {
        item.bonus = parseInt(item.properties['Сумма бонусов для товара с характеристикой'])
    }

    return item
}

async function setRatingData(item) {
    item.reviewsData = await RatingSource.get(item.id)
    return item
}

function setRejectUnnecessaryProps(item) {
    if(item.properties) {
        item.properties['Картинки'] = null
        item.properties['Характеристики'] = null
        item.properties['Сумма бонусов для товара с характеристикой'] = null
        item.properties['Сумма бонусов для товара без характеристики'] = null
        item.properties['Возм исп начисление бонусы без характеристики'] = null
        item.properties['Возм исп списывать бонусы без характеристики'] = null
        item.properties['Возм исп начисление бонусы с характеристикой'] = null
        item.properties['Возм исп списывать бонусы с характеристикой'] = null
    }

    return item
}

export const getProduct = async(id) => {

    let res = await KirguSource.getProduct(id)
    res = setOfferPrice(res) 
    res = setOfferProperties(res)
    res = setPriceData(res)
    res = setFullImages(res)
    res = setBonusData(res)
    res = setRejectUnnecessaryProps(res)
    res = await setRatingData(res)

    return res
}