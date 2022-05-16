import axios from 'axios';

class RatingSource {
  
    static siteUrl = "http://api.mneniya.pro/v2.1/clients/9b28b175-52a6-43b3-b262-a0c14149d22e"

    static async get(id) {
        const response = await axios.get(this.siteUrl + `/reviews/Product/Aggregated/${id}`)
        const res = response.data

        let data = { rating: 0, reviewsCount: 0, reviews: res.Reviews }

        if(res.Stats) {
            data.reviewsCount = res.Stats.ReviewsTotalCount
            data.rating = 0

            if(res.Stats.RatesTotalSum > 0 && res.Stats.ReviewsTotalCount > 0) {
                data.rating = (parseFloat(res.Stats.RatesTotalSum) / parseFloat(res.Stats.ReviewsTotalCount)).toFixed(2)
            }
        }

        return data
    }

    static async getCollectRating(ids) {
        ids = ids.join('%7C')

        const response = await axios.get(this.siteUrl + `/ratings/Product/${ids}`)
        const res = response.data

        return res
    }

    
}

export default RatingSource;