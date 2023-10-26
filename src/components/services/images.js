import noPhoto from '../../images/no_photo.png';

export const setImagePath = (image, withHost = true) => {

    let imagePath = noPhoto

    if(image) {
        imagePath = withHost ? 'https://kirgu.ru' : ''
        imagePath += image
    }

    return imagePath
}

export const getAllImages = (item) => {

    let images = []
  
    if (item?.images) {
  
      images = images.concat(item.images)
  
    }
  
    if (item?.offers) {
  
      item.offers.map(offer => {
        
        images = images.concat(offer.images)
      
      })
  
    }
  
    images = images.filter(image => image != null)
  
    images = images.map(image => image?.length && "https://kirgu.ru" + image)
  
    images.length == 0 && images.push('/assets/no_image.jpg')
  
    return images
  
  }
