const defaultState = {
  map: {

    Махачкала: {
      Общая_Схема_КИРГУ: [
        {
          name: "kirgu",
          floor: 0,
        },
        {
          name: "kirgu",
          floor: 1,
        },
        {
          name: "kirgu",
          floor: 2,
        },
        {
          name: "kirgu",
          floor: 3,
        },
        {
          name: "kirgu",
          floor: 4,
        },
        {
          name: "kirgu",
          floor: 5,
        },
      ].reverse(),

      Синий_корпус: [
        {
          name: "tech",
          floor: 0,
        },
        {
          name: "tech",
          floor: 1,
        },
        {
          name: "tech",
          floor: 2,
        },
        {
          name: "tech",
          floor: 3,
        },
      ].reverse(),

      Детский_отдел: [
        {
          name: "kids",
          floor: 1,
        },
      ].reverse(),

      Дисконт_и_офисная_мебель: [
        {
          name: "discount",
          floor: 1,
        },
      ].reverse(),

      Мебельный_корпус: [
        {
          name: "mebel",
          floor: 0,
        },
        {
          name: "mebel",
          floor: 1,
        },
        {
          name: "mebel",
          floor: 2,
        },
        {
          name: "mebel",
          floor: 3,
        },
        {
          name: "mebel",
          floor: 4,
        },
        {
          name: "mebel",
          floor: 5,
        },
      ].reverse(),
    },

    Дербент: {
      Дербент: [
        {
          name: "derbent",
          floor: 0,
        },
        {
          name: "derbent",
          floor: 1,
        },
        {
          name: "derbent",
          floor: 2,
        },
        {
          name: "derbent",
          floor: 3,
        },
      ].reverse(),
    },

    Каспийск: {
      Капийск_КИРГУ: [
        {
          name: "kaspiyskKirgu",
          floor: 1,
        },
      ].reverse(),

      Каспийск_Домашний: [
        {
          name: "kaspiyskHome",
          floor: 1,
        },
      ].reverse(),
    },

    Махачкала_2: {
      Махачкала_2: [
        {
          name: "makhachkalaDigital",
          floor: 1,
        },
      ].reverse(),
    },

  },

};

const BUILDING = "BUILDING";

export const buildingMapReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
