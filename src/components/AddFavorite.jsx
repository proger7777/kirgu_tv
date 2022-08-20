export function addFavorites(cat) {

  const favor = localStorage.favorites ? JSON.parse(localStorage.getItem('favorites')) : []

  const articul = localStorage.favorites ? JSON.parse(localStorage.getItem('articul')) : []

  //remove favorites
  if (favor.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {
    let remove = favor.findIndex(item => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)
    favor.splice(remove, 1)
    localStorage.setItem('favorites', JSON.stringify(favor))

    let removeArticul = articul.findIndex(item => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)
    articul.splice(removeArticul, 1)
    localStorage.setItem('articul', JSON.stringify(articul))

  }

  //remove articul
  // if (articul.find((item) => item.xml_id == cat.id)) {

  //   let remove = articul.findIndex(item => item.xml_id == cat.id)
  //   articul.splice(remove, 1)
  //   localStorage.setItem('articul', JSON.stringify(articul))
  // }

  //add favorites
  else if (!favor.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

    favor.push(cat)
    localStorage.setItem('favorites', JSON.stringify(favor))

  }
}
