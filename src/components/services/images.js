import noPhoto from '../../images/no_photo.png';

export const setImagePath = (image, withHost = true) => {

    let imagePath = noPhoto

    if(image) {
        imagePath = withHost ? 'https://kirgu.ru' : ''
        imagePath += image
    }

    return imagePath
}
