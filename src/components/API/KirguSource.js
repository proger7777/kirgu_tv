import axios from 'axios';
import { getTitleFromLinkStock } from '../../utils/str';

class KirguSource {
    
    static siteUrl = 'https://kirgu.ru/api'
    static siteUrl2 = 'http://obmen:12345@public.kirgu.ru:81/mobile/hs/exchangemobileapp'

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

    static async sendCode(phone) {
        const response = axios.get('http://public.kirgu.ru:81/mobile/hs/exchangemobileapp/client_smscode/79017717095', {
            auth: { username: 'obmen', password: '12345' }
        })     
        
        if(response.data['Статус'] !== 'Успешно') {
            throw new SyntaxError(response.data['Статус'])
        }
    }

    static async getBonusData(phone) {
        
        const response = await axios.get(this.siteUrl2 + '/MyCurrentBonus/' + phone)     
        return response.data
    }
    
    
    
}

export default KirguSource;
