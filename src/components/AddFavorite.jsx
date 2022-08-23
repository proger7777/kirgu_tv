export function addFavorites(cat, catalogId) {
    
  const favor = localStorage.favorites ? JSON.parse( localStorage.getItem('favorites')) : []

  //remove favorites
  if( favor.find((item) =>item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id) ) {

      let remove = favor.findIndex(item => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)
      favor.splice(remove, 1)
      localStorage.setItem('favorites', JSON.stringify(favor))        

  }

  //add favorites
  else if( !favor.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)) {

      favor.push(cat)
      localStorage.setItem('favorites', JSON.stringify(favor))
     
  }
}


export function addComparison(cat, catalogId) {
    
  const comparison = localStorage.comparison ? JSON.parse( localStorage.getItem('comparison')) : []

  //remove comparison
  if( comparison.find((item) =>item[0].xml_id == cat.id || item[0].id == cat.id || item[0].id == cat.xml_id) ) {
      console.log('remove comparison')
      let remove = comparison.findIndex(item => item[0].xml_id == cat.id || item[0].id == cat.id || item[0].id == cat.xml_id)
      comparison.splice(remove, 1)
      localStorage.setItem('comparison', JSON.stringify(comparison))        

  }

  //add comparison
  else if( !comparison.find((item) => item[0].xml_id == cat.id || item[0].id == cat.id || item[0].id == cat.xml_id)) {
      console.log('add comparison')
      comparison.push([cat, catalogId])
      localStorage.setItem('comparison', JSON.stringify(comparison))
     
  }
}