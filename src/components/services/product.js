import KirguSource from "../API/KirguSource"
import RatingSource from "../API/RatingSource"
import { setPriceData } from "./prices";

function setFullImages(item) {
    let images, smallImages;

    images = item.images
    smallImages = item.small_images.split(',')
    
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

function setOfferData(item, offerId) {

    const offer = item.offers.find(i => i.id === offerId)

    item.price_1 = offer.price_1
    item.price_2 = offer.price_2
    item.price_3 = offer.price_3
    item.properties = offer.properties
    item.images = offer.images
    item.small_images = offer.small_images

    return item
}

function setData(item) {
    item = setPriceData(item)
    item = setFullImages(item)
    item = setBonusData(item)
    
    return item
}

async function setModuleData(item) {
    let moduleIds = []
    item.module_elements.forEach(i => moduleIds.push(i))
    moduleIds = moduleIds.splice(1)

    item.modules = []
    let modulesPrice = 0

    for (const id of moduleIds) {
        let res = await KirguSource.getProduct(id)
        
        if(res.offers) {
            res = setOfferData(res, res.offers[0].id) 
        }
        
        res = setData(res)
        modulesPrice += res.price
        item.modules.push({ id: id, name: res.name, price: res.price })
    }

    item.modulesPrice = modulesPrice

    return item
}

export const setProductUrl = (catalogId, productId, fromAllCats) => {

    let catUrl = ''

    if(catalogId) catUrl += `/catalog/${catalogId}`

    catUrl += `/product/${productId}`

    if(fromAllCats) catUrl += '?from_all_cats=true'

    return catUrl
}


export const getProduct = async(id) => {

    let res = await KirguSource.getProduct(id)
    
    if(res.offers) {
        res = setOfferData(res, res.offers[0].id) 
    }

    if(res.module_elements) {
        res = await setModuleData(res)
    }

    res = setData(res)
    res = await setRatingData(res)

    return res
}

export const changeOffer = (item, offerId) => {
    item = setOfferData(item, offerId) 
    item = setData(item)
    return item
}