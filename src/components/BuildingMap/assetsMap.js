import Tech_0 from "../../images/textureBuildingMap/tech_0.png";
import Tech_1 from "../../images/textureBuildingMap/tech_1.png";
import Tech_2 from "../../images/textureBuildingMap/tech_2.png";
import Tech_3 from "../../images/textureBuildingMap/tech_3.png";

import Discount_1 from "../../images/textureBuildingMap/discount.png";

import Kids_1 from "../../images/textureBuildingMap/kids.png";

// import Garden_0 from "../../images/textureBuildingMap/garden_0.png"
// import Garden_1 from "../../images/textureBuildingMap/garden_1.png"

// import Mebel_0 from "../../images/textureBuildingMap/mebel_0.png"
// import Mebel_1 from "../../images/textureBuildingMap/mebel_1.png"
// import Mebel_2 from "../../images/textureBuildingMap/mebel_2.png"
// import Mebel_3 from "../../images/textureBuildingMap/mebel_3.png"
// import Mebel_4 from "../../images/textureBuildingMap/mebel_4.png"
// import Mebel_5 from "../../images/textureBuildingMap/mebel_5.png"



export const getBuilding = (name, floor) => {

    switch (name) {
        case "tech":
            return Tech(floor)
        case "mebel":
            return Tech(floor)
        case "kids":
            return Kids(floor)
        case "discount":
            return Discount(floor)
    }

}



export const Tech = (flour) => {
  switch (flour) {
    case 0:
      return Tech_0;

    case 1:
      return Tech_1;

    case 2:
      return Tech_2;

    case 3:
      return Tech_3;
  }
};

// export const Garden = (flour=1) => {
//     switch (flour) {
//         case 0:
//             return Garden_0

//         case 1:
//             return Garden_1
//     }
// }

// export const Mebel = (flour = 1) => {
//     switch (flour) {
//         case 0:
//             return Mebel_0

//         case 1:
//             return Mebel_1

//         case 2:
//             return Mebel_2

//         case 3:
//             return Mebel_3

//         case 4:
//             return Mebel_3

//         case 5:
//             return Mebel_3

// }

export const Discount = () => {
  return Discount_1;
};

export const Kids = () => {
  return Kids_1;
};
