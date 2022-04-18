import axios from 'axios';
import { getTitleFromLinkStock } from '../../utils/str';

class KirguSource {
    
    static siteUrl = 'https://kirgu.ru/api'

    static async getCategories() {
        const response = await axios.get(this.siteUrl + '/sections/')
        return response.data
    }
    
    static async getStocks() {
        const response = await axios.get(this.siteUrl + '/actions/')
        return response.data
    }

    static async getStock(title) {
        const response = await this.getStocks()
        const result = response.find(i => getTitleFromLinkStock(i.link) === title )
        return result
    }

    static async getFilters(id) {
        const response = await axios.get(this.siteUrl + '/section_filter/?id=' + id)        
        return response.data
    }

    static async getCatalog(id, pageNum, filter = {}) {

        const response = await axios.get(this.siteUrl + '/section_elements/', {
            params: {
                id: id, 
                count: 8, 
                PAGEN_1: pageNum, 
                filter: JSON.stringify(filter)
            }
        })        

        return response.data
    }

    static async getProduct(id) {
        const response = await axios.get(this.siteUrl + '/element?id=' + id)     
        return response.data
    }
    
}

export default KirguSource;