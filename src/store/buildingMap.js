const defaultState = {

    building: {
      tech:{
        0:"777-555-333-111",
        1:"id",
        2:"id",
        3:"id"
      }
    },
  
  }
  
  const BUILDING = "BUILDING"

  export const buildingMapReducer = (state = defaultState, action) => {
  
    switch (action.type) {
  
      
  
      default:
  
        return state
    }
  
  }
  
  export const buildingMapAction = (payload) => ({ type: BUILDING, payload })