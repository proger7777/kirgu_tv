const defaultState = {
  building: {
    tech: [
      {
        name: "tech",
        floor: 0,
        id: "777-555-333-111",
      },
      {
        name: "tech",
        floor: 1,
        id: "tech_id1",
      },
      {
        name: "tech",
        floor: 2,
        id: "tech_id2",
      },
      {
        name: "tech",
        floor: 3,
        id: "tech_id3x",
      },
    ].reverse(),

    kids: [
      {
        name: "kids",
        floor: 1,
        id: "777-555-333-111",
      }
    ].reverse(),
    
    discount: [
      {
        name: "discount",
        floor: 1,
        id: "777-555-333-111",
      }
    ].reverse(),

    mebel: [
      {
        name: "mebel",
        floor: 0,
        id: "mebel_777-555-333-111",
      },
      {
        name: "mebel",
        floor: 1,
        id: "mebel_id1",
      },
      {
        name: "mebel",
        floor: 2,
        id: "mebel_id2",
      },
      {
        name: "mebel",
        floor: 3,
        id: "imebel_d3x",
      },
      {
        name: "mebel",
        floor: 4,
        id: "imebel_d4x",
      },
      {
        name: "mebel",
        floor: 5,
        id: "imebel_d5x",
      },
    ].reverse(),
  },
};

const BUILDING = "BUILDING";

export const buildingMapReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const buildingMapAction = (payload) => ({ type: BUILDING, payload });
