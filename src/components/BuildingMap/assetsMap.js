// Makhachkala
import Tech_0 from "../../images/textureBuildingMap/makhachkala/tech_0.png";
import Tech_1 from "../../images/textureBuildingMap/makhachkala/tech_1.png";
import Tech_2 from "../../images/textureBuildingMap/makhachkala/tech_2.png";
import Tech_3 from "../../images/textureBuildingMap/makhachkala/tech_3.png";

import Discount_1 from "../../images/textureBuildingMap/makhachkala/discount.png";

import Kids_1 from "../../images/textureBuildingMap/makhachkala/kids.png";

import Garden_0 from "../../images/textureBuildingMap/makhachkala/garden_0.png";
import Garden_1 from "../../images/textureBuildingMap/makhachkala/garden_1.png";

import Mebel_0 from "../../images/textureBuildingMap/makhachkala/mebel_0.png";
import Mebel_1 from "../../images/textureBuildingMap/makhachkala/mebel_1.png";
import Mebel_2 from "../../images/textureBuildingMap/makhachkala/mebel_2.png";
import Mebel_3 from "../../images/textureBuildingMap/makhachkala/mebel_3.png";
import Mebel_4 from "../../images/textureBuildingMap/makhachkala/mebel_4.png";
import Mebel_5 from "../../images/textureBuildingMap/makhachkala/mebel_5.png";

import Kirgu_0 from "../../images/textureBuildingMap/makhachkala/kirgu_0.png";
import Kirgu_1 from "../../images/textureBuildingMap/makhachkala/kirgu_1.png";
import Kirgu_2 from "../../images/textureBuildingMap/makhachkala/kirgu_2.png";
import Kirgu_3 from "../../images/textureBuildingMap/makhachkala/kirgu_3.png";
import Kirgu_4 from "../../images/textureBuildingMap/makhachkala/kirgu_4.png";
import Kirgu_5 from "../../images/textureBuildingMap/makhachkala/kirgu_5.png";

// Derbent
import Derbent_0 from "../../images/textureBuildingMap/derbent/derbent_0.png";
import Derbent_1 from "../../images/textureBuildingMap/derbent/derbent_1.png";
import Derbent_2 from "../../images/textureBuildingMap/derbent/derbent_2.png";
import Derbent_3 from "../../images/textureBuildingMap/derbent/derbent_3.png";

// Makhachkala Digital
import Makhachkala_Digital from "../../images/textureBuildingMap/makhachkala/makhachkala_digital.png";

// Kaspiysk
import Kaspiysk_Kirgu from "../../images/textureBuildingMap/kaspiysk/kaspiysk_kirgu.png";
import Kaspiysk_Home from "../../images/textureBuildingMap/kaspiysk/kaspiysk_home.png";



export const getBuilding = (city, name, floor) => {
  switch (city) {
    case "Махачкала":
      return getMakhachkala(name, floor);
    case "Махачкала_2":
      return getMakhachkalaDigital(name, floor);
    case "Дербент":
      return getDerbent(name, floor);
    case "Каспийск":
      return getKaspiysk(name, floor);
  }
};

// Makhachkala
const getMakhachkala = (name, floor) => {
  switch (name) {
    case "kirgu":
      return Kirgu(floor);
    case "tech":
      return Tech(floor);
    case "mebel":
      return Mebel(floor);
    case "kids":
      return Kids(floor);
    case "discount":
      return Discount(floor);
    case "garden":
      return Garden(floor);
  }
};

const Kirgu = (flour = 1) => {
  switch (flour) {
    case 0:
      return Kirgu_0;

    case 1:
      return Kirgu_1;

    case 2:
      return Kirgu_2;

    case 3:
      return Kirgu_3;

    case 4:
      return Kirgu_4;

    case 5:
      return Kirgu_5;
  }
};

const Tech = (flour) => {
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

const Garden = (flour = 1) => {
  switch (flour) {
    case 0:
      return Garden_0;

    case 1:
      return Garden_1;
  }
};

const Mebel = (flour = 1) => {
  switch (flour) {
    case 0:
      return Mebel_0;

    case 1:
      return Mebel_1;

    case 2:
      return Mebel_2;

    case 3:
      return Mebel_3;

    case 4:
      return Mebel_4;

    case 5:
      return Mebel_5;
  }
};

const Discount = () => {
  return Discount_1;
};

const Kids = () => {
  return Kids_1;
};

// Derbent
const getDerbent = (name, floor) => {
  switch (name) {
    case "derbent":
      return Derbent(floor);
  }
};

const Derbent = (flour) => {
  switch (flour) {
    case 0:
      return Derbent_0;

    case 1:
      return Derbent_1;

    case 2:
      return Derbent_2;

    case 3:
      return Derbent_3;
  }
};

// Makhachkala_Digital
const getMakhachkalaDigital = (name, floor) => {
  switch (name) {
    case "makhachkalaDigital":
      return Makhachkala_Digital;
  }
};

// Kaspiysk
const getKaspiysk = (name, floor) => {
  switch (name) {
    case "kaspiyskKirgu":
      return Kaspiysk_Kirgu;
    case "kaspiyskHome":
      return Kaspiysk_Home;
  }
};
