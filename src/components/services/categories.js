import localforage from "localforage";
import KirguSource from "../API/KirguSource";
import { setPriceData } from "./prices";

async function setCategories() {
    let categories = await KirguSource.getCategories()
    categories = join4Cats(categories)
    localforage.setItem('categories', categories)
    setHomeCategories(categories)
}

function setHomeCategories(categories){

    let result = []

    categories.forEach(i => {
        if(i.parent_id === null && ['Мебель', 'Техника', 'Товары для дома'].includes(i.name)) {
            if(i.name === 'Мебель') i.svg = 'mebel'
            if(i.name === 'Техника') i.svg = 'electronika'
            if(i.name === 'Товары для дома') i.svg = 'dlya_doma'
            result.push(i) 
        }
    })

    localforage.setItem('homeCategories', result)
}

function setPrice(res) {
    res.forEach(i => {
            
        if(i.offers) {
            i.price_1 = i.offers[0].price_1
            i.price_2 = i.offers[0].price_2
            i.price_3 = i.offers[0].price_3
        }

        i = setPriceData(i)

    })

    return res
}


function setImages(res) {
    res.forEach(i => {
        i.image = ''

        let images = []

        if(i.images.length) {
            i.images.forEach(img => { if(img) images.push(img) })
        }
       
        if(!images.length && i.offers.length && i.offers[0].images.length) images = i.offers[0].images

        const filteredImages = images.filter(function(el) { return el })
        i.image = filteredImages[0]
    })

    return res
}

// Метод для создания родительской категорий над 4-мя категориями ('Электроника', 'Крупная бытовая техника', 'Малая бытовая техника', 'Климатическое оборудование')
function join4Cats(cats) {
    const newMainCat = { name: 'Техника', id: '777-555-333-111', parent_id: null }
    const cats4 = ['Электроника', 'Крупная бытовая техника', 'Малая бытовая техника', 'Климатическое оборудование']

    cats.forEach(i => {
        if(i.parent_id === null && cats4.includes(i.name)) {
            i.parent_id = newMainCat['id'] 
            if(i.name === 'Электроника') { 
                newMainCat.image = i.image 
            }
        }
    })

    cats.unshift(newMainCat)
    return cats
}


export const getCategories = async() => {
    let result = [];

    try {
        result = await localforage.getItem('categories');
    } catch (err) {
        console.log(err);
    }

    return result
}

export const setCatUrl = (allCats, id) => {

    let res = '/catalog/' + id

    allCats.forEach(i => {
        if(i.parent_id === id) {
            res = '/category/' + id
            return false
        }
    })

    return res
}

export const getCategoryById = async(id) => {
    const categories = await getCategories()
    let result = categories.find(i => i.id === id)
    return result   
}

export const getCategoriesById = async(id) => {
    
    let result = []
    const categories = await getCategories()

    categories.forEach(i => {
        if(i.parent_id === id) result.push(i)
    })

    return result   
}

export const getHomeCategories = async() => {
    let res = [];

    try {
        res = await localforage.getItem('homeCategories');
    } catch (err) {
        console.log(err);
    }

    return res
}

export const loadCategories = async() => {
    const categories = await getCategories()

    if(!categories) {
        await setCategories()
    }
}

export const getBothСategories = async() => {
    let res = { }
    res.home = await getHomeCategories()
    res.all = await getCategories()
    return res
}

export const getCatalog = async(id, pageNum, filter = {}) => {
    let res = await KirguSource.getCatalog(id, pageNum, filter)
    res = setPrice(res)
    res = setImages(res)
    return res
}
