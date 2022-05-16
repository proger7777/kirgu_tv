import axios from 'axios';

class DigineticaSource {

    // Документация: https://docs.google.com/document/d/1SwxX-mbmyg2jmDtT5B5hncx0xbQXtU8OpZMApVaQuDI
  
    static siteUrl = 'http://sort.diginetica.net/search'
    
    static digineticaApiKey = 'Q6D2T78B9Q'
    
    static async search(query, page = 1, filters = []) {

        const size = 8
        const offset = page * size 

        let params = {
            st: 'Телевизор',
            apiKey: this.digineticaApiKey,
            strategy: 'vectors_extended,zero_queries',
            fullData: true,
            useCategoryPrediction: false,
            withCorrection: true,
            size: size,
            withFacets: true,
            offset: offset,
            showUnavailable: true,
            sort: 'DEFAULT',
            // filter: 'Операционная система:android',
            // filter: 'price:6189;70000'
        }

        params = new URLSearchParams(params).toString();

        filters.forEach(i => params += '&filter=' + i)
        console.log('filters', filters)
        console.log(params)

        const parseUrl = this.siteUrl + '?' + params

        const response = await axios.get(parseUrl)
        
        let products = response.data.products
        
        let result = null 
        
        if(products.length) {

            products = this.imageHostReset(products)
            const filters = this.getfilterProps(response.data.facets)

            console.log('filters', response.data.totalHits)

            result = { 
                products: products, 
                totalCount: response.data.totalHits,
                filters: filters                
            }
        }

        return result
    }

    static getfilterProps(data) {
        let res = { price: {}, props: [] }

        data.forEach(pr => {
            if(pr.name === 'categories') pr.name = 'Категории'

            if(pr.name === 'price') {
                res.price.max = pr.values[0].value
                res.price.min = pr.values[1].value
            } else {
                let propItem = { id: pr.name, name: pr.name, props: [] }
                pr.values.forEach(i =>  propItem.props.push({ id: i.name, name: i.name }) )
                res.props.push(propItem)
            }
        })

        return res
    }

    static imageHostReset(data) {
    
        data.forEach(pr => {
            pr.image_url = pr.image_url.replace('https://kirgu.ru','');
        })

        return data
    }

    static getProductProps(data) {
        let res = []

        data.forEach(pr => {
            if(pr.attributes['бренд']) {
                res.push(pr.attributes.бренд[0])
            }
        })

        res = res.filter((v, i, a) => a.indexOf(v) === i)
        return res
    }

}

export default DigineticaSource;