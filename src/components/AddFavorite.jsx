export function addFavorites(cat) {
    
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
