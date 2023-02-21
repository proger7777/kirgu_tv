const defaultState = {
  map: {
    Махачкала: {
      Общая_Схема_КИРГУ: [
        {
          name: "kirgu",
          floor: 0,
          id: [],
        },
        {
          name: "kirgu",
          floor: 1,
          id: [],
        },
        {
          name: "kirgu",
          floor: 2,
          id: [],
        },
        {
          name: "kirgu",
          floor: 3,
          id: [],
        },
        {
          name: "kirgu",
          floor: 4,
          id: [],
        },
        {
          name: "kirgu",
          floor: 5,
          id: [],
        },
      ].reverse(),

      MTV: [
        {
          name: "tech",
          floor: 0,
          id: [
            "35367728-8121-483e-9318-65e700d9edd1",
            "eb14daf9-cb58-41f9-9a2d-4fb12a7d20e1",
            "e49d0da4-8da4-4670-a602-c8ece6a4f936",
            "01645be2-f4b4-4f31-9cc8-ecfda150b2c3",
            "48cc2d93-e8ce-4f42-b2b4-bc619cfa9784",
          ],
        },
        {
          name: "tech",
          floor: 1,
          id: [],
          // id: [ "b6a9659a-32b0-4bd8-b3d1-add9e17d5c9d", "423f396b-f7d0-41c5-ad3f-aa5bc7980337", "5b14ae51-59f1-4174-9194-06abf6416bfa" ],
        },
        {
          name: "tech",
          floor: 2,
          id: [
            "5b14ae51-59f1-4174-9194-06abf6416bfa",
            "d1638c7d-fc5e-4897-95fa-0e333bb7cc22",
            "946e5e91-5bf7-49b3-bcf3-712868f08dce",
            "baee31e7-ad07-45a8-9eb0-ddfd2c536b4c",
            "55fc7d40-48b1-4e7c-9e30-0e3c8800e352",
          ],
        },
        {
          name: "tech",
          floor: 3,
          id: [
            "b6a9659a-32b0-4bd8-b3d1-add9e17d5c9d",
            "423f396b-f7d0-41c5-ad3f-aa5bc7980337",
            "dac74be0-34b5-46e1-809f-3cf2eb2179ed",
            "933dff91-d9bb-452f-a71e-c3b716c4a96f",
          ],
        },
      ].reverse(),

      Детский_отдел: [
        {
          name: "kids",
          floor: 0,
          id: [
            "603cb62d-3de2-4b23-9139-efe6c6e80a5b",
            "9c8221fe-cbce-4309-956e-6cd84f0b8522",
            "cc585b65-adff-4b22-9dfb-bcada0a9712f",
            "353d812c-a036-4d67-9a08-7b7b3670897d",
          ],
        },
        {
          name: "kids",
          floor: 1,
          id: [
            "7e2f41ff-d54e-4254-a50c-061dbb68e6cc",
            "1909321c-fb96-4145-832a-b7f235e93bbf",
            "285b7347-7415-4b99-b786-78d68c21dea8",
            "c0c717f1-6288-4d37-8252-b32cdce681d9",
            "68dccf2a-eb96-4ebd-8108-3c710a7d6ab6",
            "e4b734e9-72db-4abb-a3e8-91f91d7a5d94",
            "a0f4ac19-6048-4c10-bae3-52ef642646eb",
            "3ae21c55-f9cc-4820-9189-dc7292c4158b",
            "715bd8d0-58c0-4e62-ac80-19eae22d768e",
          ],
        },
      ].reverse(),

      Мебельный_корпус: [
        {
          name: "mebel",
          floor: 0,
          id: [],
        },
        {
          name: "mebel",
          floor: 1,
          id: [
            "531e96d5-9c30-4b4c-823d-e91792a37f07",
            "67168837-3e29-4fab-8a13-51bb45eefe35",
            "97c06658-eab4-450c-8502-b4391fa2f359",
            "952d8721-2c5a-41f4-b6f5-6c5ae8918c0a",
            "7cc46fb9-f575-4e80-b434-c93b4bb81fac",
          ],
        },
        {
          name: "mebel",
          floor: 2,
          id: [
            "8b335087-354d-4f7b-9223-1956b2088a5b",
            "874ec115-a252-4b86-a881-d334a9cbcf25",
            "61e91c57-ceea-428b-bdcd-eda54d6b3c92",
            "fed4d9b1-89d9-46b4-92c5-05e2095561ae",
          ],
        },
        {
          name: "mebel",
          floor: 3,
          id: [
            "8b335087-354d-4f7b-9223-1956b2088a5b",
            "d8ba24a4-b3f1-42b8-a2bd-ee6c88237d0a",
            "797ce203-27a6-4182-81e7-4c0e90586bcc",
            "fed4d9b1-89d9-46b4-92c5-05e2095561ae",
          ],
        },
        {
          name: "mebel",
          floor: 4,
          id: [
            "b3133753-8df7-4d84-b72c-25140dd903c7",
            "2842fb99-2467-40b3-afdb-52130ec79b2c",
            "9d3c3502-4fba-436f-9997-7e4df3adecfe",
          ],
        },
        {
          name: "mebel",
          floor: 5,
          id: [
            "874ec115-a252-4b86-a881-d334a9cbcf25",
            "b3133753-8df7-4d84-b72c-25140dd903c7",
            "8b335087-354d-4f7b-9223-1956b2088a5b",
            "4ffdd768-806d-46c8-8a15-86beeba619ea",
            "9d3c3502-4fba-436f-9997-7e4df3adecfe",
            "2842fb99-2467-40b3-afdb-52130ec79b2c",
            "797ce203-27a6-4182-81e7-4c0e90586bcc",
            "fed4d9b1-89d9-46b4-92c5-05e2095561ae",
            "58889bd9-f77d-4d78-80bc-82c9746168d0",
            "d8ba24a4-b3f1-42b8-a2bd-ee6c88237d0a",
            "09873b41-2a27-48ab-b8b0-926a4822123c",
          ],
        },
      ].reverse(),

      Садовый_центр: [
        {
          name: "garden",
          floor: 0,
          id: ["ef66b2f0-d8aa-4b73-b6e1-9ae4e8c2cbf0"],
        },
        {
          name: "garden",
          floor: 1,
          id: [
            "c43c9185-0b40-4b8c-8d57-6bf41a79b2d4",
            ,
            "5f794cd1-33f8-448b-9bab-6da2e89a19aa",
            ,
            "77cb9871-127d-4ee3-933f-d0f08000e295",
            ,
            "0d5e8ec5-1a34-4ae1-a088-54be396e37e2",
            ,
            "3631408d-e740-4919-9c24-1b3654eb4447",
            ,
            "3cb746b9-6ed9-4364-8db9-e650e91adea8",
            ,
            "ea0a2c1a-5f5c-4d4f-add6-caa8941bfc82",
            ,
            "a59be78c-b332-4e20-888b-3eaa02d40bc6",
            ,
            "2af2d71c-41a1-4b45-a5a6-10f6b0e5af17",
          ],
        },
      ].reverse(),
    },

    Дербент: {
      Дербент: [
        {
          name: "derbent",
          floor: 0,
          id: [
            "7e59ab9a-9932-4535-b780-860c8a6d325e",
            "423f396b-f7d0-41c5-ad3f-aa5bc7980337",
            "5b14ae51-59f1-4174-9194-06abf6416bfa",
            "b6a9659a-32b0-4bd8-b3d1-add9e17d5c9d",
          ],
        },
        {
          name: "derbent",
          floor: 1,
          id: [
            "31b73b4b-f098-4f96-a967-233760a0e426",
            "952d8721-2c5a-41f4-b6f5-6c5ae8918c0a",
            "7cc46fb9-f575-4e80-b434-c93b4bb81fac",
            "67168837-3e29-4fab-8a13-51bb45eefe35",
            "531e96d5-9c30-4b4c-823d-e91792a37f07",
          ],
        },
        {
          name: "derbent",
          floor: 2,
          id: [
            "8b335087-354d-4f7b-9223-1956b2088a5b",
            "874ec115-a252-4b86-a881-d334a9cbcf25",
            "d8ba24a4-b3f1-42b8-a2bd-ee6c88237d0a",
            "fed4d9b1-89d9-46b4-92c5-05e2095561ae",
          ],
        },
        {
          name: "derbent",
          floor: 3,
          id: [
            "9d3c3502-4fba-436f-9997-7e4df3adecfe",
            "b3133753-8df7-4d84-b72c-25140dd903c7",
          ],
        },
      ].reverse(),
    },

    Каспийск: {
      Капийск_КИРГУ: [
        {
          name: "kaspiyskKirgu",
          floor: 1,
          id: [
            "7e59ab9a-9932-4535-b780-860c8a6d325e",
            "423f396b-f7d0-41c5-ad3f-aa5bc7980337",
            "5b14ae51-59f1-4174-9194-06abf6416bfa",
            "b6a9659a-32b0-4bd8-b3d1-add9e17d5c9d",
            "67168837-3e29-4fab-8a13-51bb45eefe35",
            "531e96d5-9c30-4b4c-823d-e91792a37f07",
            "952d8721-2c5a-41f4-b6f5-6c5ae8918c0a",
            "1fb85564-cbfb-4158-b110-e4be863c6c09",
            "360e746a-10d6-412a-a022-d2fd8b8c1e80",
          ],
        },
      ].reverse(),

      Каспийск_Домашний: [
        {
          name: "kaspiyskHome",
          floor: 1,
          id: [
            "67168837-3e29-4fab-8a13-51bb45eefe35",
            "531e96d5-9c30-4b4c-823d-e91792a37f07",
            "952d8721-2c5a-41f4-b6f5-6c5ae8918c0a",
          ],
        },
      ].reverse(),
    },

    Махачкала_2: {
      Махачкала_2: [
        {
          name: "makhachkalaDigital",
          floor: 1,
          id: [
            "67168837-3e29-4fab-8a13-51bb45eefe35",
            "531e96d5-9c30-4b4c-823d-e91792a37f07",
            "952d8721-2c5a-41f4-b6f5-6c5ae8918c0a",
          ],
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
