const defaultState = {
  Махачкала: {
    Синий_корпус: [
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

    Детский_отдел: [
      {
        name: "kids",
        floor: 1,
        id: "777-555-333-111",
      },
    ].reverse(),

    Дисконт_Офисная_мебель: [
      {
        name: "discount",
        floor: 1,
        id: "777-555-333-111",
      },
    ].reverse(),

    Мебельный_корпус: [
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

  Буйнакск: {
    Детский_отдел: [
      {
        name: "kids",
        floor: 1,
        id: "777-555-333-111",
      },
    ].reverse(),

    Дисконт_Офисная_мебель: [
      {
        name: "discount",
        floor: 1,
        id: "777-555-333-111",
      },
    ].reverse(),
  },

  // city: [
  //   "Буйнакск",
  //   "Каспийск",
  //   "Кизляр",
  //   "Махачкала",
  //   // "Махачкала",
  //   // "Махачкала",
  //   "Хасавюрт",
  //   // "Хасавюрт",
  //   "Дербент",
  // ],
};

const BUILDING = "BUILDING";

export const buildingMapReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
