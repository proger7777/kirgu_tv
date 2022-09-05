import axios from 'axios';
import { addCompare } from '../AddCompare';
import { getTitleFromLinkStock } from '../services/str';

class KirguSource {

    static siteUrl = 'https://kirgu.ru/api'
    static siteUrl2 = 'https://vkuss-zdorovya.ru/proxy.php?url=http://public.kirgu.ru:81/mobile/hs/exchangemobileapp'
    //static siteUrl2 = 'http://api.kirgu.ru/api/1c-proxy?url=http://public.kirgu.ru:81/mobile/hs/exchangemobileapp'

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
        const result = response.find(i => getTitleFromLinkStock(i.link) === title)
        return result
    }

    static async getSliders() {
        const response = await axios.get(this.siteUrl + '/slider/')
        return response.data
    }

    static async getFilters(id) {
        const response = await axios.get(`${this.siteUrl}/section_filter/?id=${id}`)

        console.log(66666, response)

        return response.data
    }

    static async getCatalog(id, pageNum, sort = 'popular', filter = {}) {

        const response = await axios.get(this.siteUrl + '/section_elements2', {
            params: {
                id: id,
                count: 8,
                PAGEN_1: pageNum,
                sort: sort === 'popular' ? 'desc' : sort,
                sort_type: sort === 'popular' ? 'popular' : null,
                filter: JSON.stringify(filter)
            }
        })

        const res = response.data

        return { items: res.items, totalCount: parseInt(res.elements_count) }
    }

    static async getProduct(id) {

        // let response = await axios.get(`${this.siteUrl}/element?id=${id}`)

        let response

        let saveArticul = localStorage.articul ? JSON.parse(localStorage.getItem('articul')) : []

        let saveCompare = localStorage.saveCompare ? JSON.parse(localStorage.getItem('saveCompare')) : []

        if (id.id !== undefined) {

            response = await axios.get(`${this.siteUrl}/element?id=${id.id}`)

            if (saveCompare.find((item) => item.id == response.data.id)) {
                let removeCompare = saveCompare.findIndex(item => item.id == response.data.id)
                saveCompare.splice(removeCompare, 1)
                localStorage.setItem('saveCompare', JSON.stringify(saveCompare))
            }
            else if (!saveCompare.find((item) => item.id == response.data.id)) {
                saveCompare.push(response.data)
                localStorage.setItem('saveCompare', JSON.stringify(saveCompare))
            }

        }
        else {
            response = await axios.get(`${this.siteUrl}/element?id=${id}`)

            if (!saveArticul.find((item) => item.id == response.data.id)) {
                saveArticul.push(response.data)
                localStorage.setItem('articul', JSON.stringify(saveArticul))
            }
        }

        return response.data
    }

    static async sendCode(phone) {
        const response = await axios.get(`${this.siteUrl2}/client_smscode/${phone}`)

        const res = response.data[0]

        if (res.Статус !== 'Успешно') {
            throw new SyntaxError(res.Статус)
        }

        return res.КодАвторизации.toString()
    }

    static async getBonusData(phone) {

        const response = await axios.get(`${this.siteUrl2}/telephonBonusNew/${phone}`, {
            //auth: { username: 'obmen', password: '12345' }
        })

        const response2 = await axios.get(`${this.siteUrl2}/historyBonus/${phone}`, {
            //auth: { username: 'obmen', password: '12345' }
        })

        let res = null

        if (response.data.массив && response.data.массив[0].КартаВладелец !== 'account not registered') {
            res = { current: response.data.массив[0], history: response2.data.массив }
        }

        return res
    }



}

export default KirguSource;
