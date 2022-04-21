import axios from 'axios';

class DigineticaSource {
  
    static siteUrl = 'https://sort.diginetica.net/search'
    
    static digineticaApiKey = 'Q6D2T78B9Q'

    static async search(query, offset = 0) {
        const response = await axios.get(this.siteUrl, {
            params: {
                st: query,
                apiKey: this.digineticaApiKey,
                strategy: 'vectors_extended,zero_queries',
                fullData: true,
                useCategoryPrediction: false,
                withCorrection: true,
                size: 8,
                offset: offset,
                showUnavailable: true,
                sort: 'DEFAULT'
            }
        })
        
        
        let result = response.data.products
        result = { products: result, brands: this.getProductProps(result) }
        return result
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