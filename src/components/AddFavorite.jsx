export function addFavorites(cat, catalogId) {

  const favor = localStorage.favorites ? JSON.parse(localStorage.getItem('favorites')) : []

  //remove favorites
  if (favor.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

    let remove = favor.findIndex(item => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)
    favor.splice(remove, 1)
    localStorage.setItem('favorites', JSON.stringify(favor))

  }

  //add favorites
  else if (!favor.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

    cat.category = catalogId
    favor.push(cat)
    localStorage.setItem('favorites', JSON.stringify(favor))

  }
}

export function addCart(cat, catalogId) {

  const allCart = localStorage.cart ? JSON.parse(localStorage.getItem('cart')) : []

  //remove cart
  if (allCart.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

    let remove = allCart.findIndex(item => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)
    allCart.splice(remove, 1)
    localStorage.setItem('cart', JSON.stringify(allCart))

  }

  //add cart
  else if (!allCart.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

    cat.category = catalogId
    allCart.push(cat)
    localStorage.setItem('cart', JSON.stringify(allCart))

  }
}

export function addComparison(cat, catalogId) {

  const comparison = localStorage.comparison ? JSON.parse(localStorage.getItem('comparison')) : []

  //remove comparison
  if (comparison.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

    let remove = comparison.findIndex(item => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)
    comparison.splice(remove, 1)
    localStorage.setItem('comparison', JSON.stringify(comparison))
  }

  //add comparison
  else if (!comparison.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

    cat.category = catalogId
    comparison.push(cat)
    localStorage.setItem('comparison', JSON.stringify(comparison))
  }


}