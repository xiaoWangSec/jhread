// ==UserScript==
// @name        无伤速通蛟湖阅读
// @namespace   https://github.com/xiaoWangSec/jhread
// @match       http://tsgxs.jxufe.cn/*
// @match       http://jhread.zhixinst.com/*
// @grant       none
// @version     1.0
// @author      XiaO_WanG
// @grant       unsafeWindow
// @license     MPL
// ==/UserScript==

(function () {

    const answer = {
        "fb54df87-a580-44ab-b786-50779f57e2c6": "1269d6d9-c2de-4a4a-ad37-71dd71ba080b",
        "28a6e8e4-ac53-4ead-b55e-8935d23dfb43": "3a5daef9-ac0f-4eb4-ae51-178869fdfc17",
        "e93a5075-28f7-46eb-b86e-67ce449a7430": "0d81ef4c-63a1-41de-a902-8985c2c212dc",
        "05cddca2-b48c-4de2-a1b2-1feb784bf99f": "d3c78a28-3789-4fa6-bc62-bfa54b373748",
        "e85f7ddb-4425-4319-a042-c83c6916b4a2": "aa5abc37-d607-47c6-8dfd-d579ce7eb7a5",
        "e5237a8d-d89e-425e-8363-14c486da365d": "e68c4b17-e3fe-4ee5-b425-422c3513bdcc",
        "8094fcaf-5e26-4e3c-b7e9-c99b505cb0a1": "7f123d98-09d2-4c53-8420-fa0a0aa65032",
        "f61b2608-5601-4924-9b3f-1539b05d2a04": "c53e114a-9bb9-4336-a573-8ca115bb7465",
        "7b696877-8885-4806-91a3-9c91ca21b454": "eca96066-01ac-4caf-9521-bb54f3eb9767",
        "39d56067-fd88-4d44-8e81-1adbf037879d": "e90486b6-af02-4880-adc5-5a4be552fa35",
        "fe477baf-fd9d-41c1-a1b3-895be31b8dff": "91fc13b8-fb0d-4cdf-9ab1-9284057b2aad",
        "21f1209f-a204-40db-9b3a-0600aca31568": "55603906-c9b4-4fb6-bd55-312ed0fecc53",
        "42365560-d3ef-4031-91ce-15da9e9f6301": "cec5f5ff-d120-41c2-acdc-54353d0177e6",
        "23f1c27f-0a2f-4c91-a83d-34aea824aa10": "f6e619df-9b45-4510-9533-7345b73b7f07",
        "7a3337f9-27e1-41c1-a92d-9af659271973": "7fa056b3-7773-4275-95d8-5b339af584b0",
        "96f5b27c-d605-46e3-a05a-9bb04e25b2e0": "cb545de1-307e-42ca-89db-0e149aaf525f",
        "85aec897-6d05-42ba-930d-856583b144e6": "775b6a5d-cea7-4ba4-bfe0-c6e13aa995fe",
        "8d4a2dfb-0df1-4fdb-9eb0-0cf0da7eb001": "5d79e6e1-fec0-45e4-89b4-fb0c2b13c3a5",
        "292db739-f381-47bb-8121-b4e08e0dfb3c": "ece619c2-4d01-41e8-a9df-dba253fd440f",
        "9a965072-d6e1-45d0-80c7-9088abd283fa": "9321221d-80b7-4ba5-bc7d-f55ffa79b0c9",
        "c43daa05-baa5-4cef-89a5-e245ae497e9e": "1e929f43-165b-4826-987e-4c4f5b099599",
        "e2d88c9c-e78a-47b5-9a4c-ab79a5b23642": "6f252ffc-67ce-48b5-be7b-e66a960bb6c9",
        "dfccf2ef-240b-49b1-8f6e-051425498e13": "6c5800db-4ac5-49b5-95aa-b600b1b175f6",
        "dc2d6120-333d-40d8-a4d6-4e0e2d20bdc5": "b507d45b-7332-4369-a6b6-15957c9bd644",
        "bdb63d36-6dde-4631-85de-cb59c02bb65e": "d4c5f790-1549-472f-ad98-280c3b3494fc",
        "667fff04-2244-4eaa-9e63-887bf2332d90": "8b677b39-fb0e-4316-aca2-21cc0568a051",
        "8cb9dd5f-79dc-4528-8b24-77d5482ac34e": "4b885a9b-0089-4396-9373-722075a40d6b",
        "bea2b930-9a7e-4c8b-a0d0-6d4612e97a5a": "487b3378-2cc9-407c-aaa3-bc6da9f26ee8",
        "34f85bf2-0fe5-424a-a403-8b8dabb0ec37": "71e46a32-82c6-49df-89ee-ee42d300607e",
        "8659a973-72ce-4d0b-af6d-0d05e1476407": "a84712f1-f92c-43bc-bdb0-4db5f94f8a15",
        "545af535-ad50-4c48-a9ae-ace153d40e42": "3d2b7bf4-b95a-479c-89ef-a69af579edb0",
        "d424a3fa-b36e-4848-9de7-6bd501862d28": "eb65a4db-35d3-4aeb-8891-bafb1451e3c6",
        "8ebd9563-6ab2-4720-bf17-49d1762d7eec": "23220e56-8c48-4a74-83a9-054ab27171b1",
        "2fae49cf-e8de-4fdb-9ca0-49493c7b2d37": "e0ca4728-f1e0-4e45-a0f3-68c2bc37c37e",
        "c822884b-77b4-4daf-8b0a-5e475920da46": "dfbb6d8e-87b5-477c-af4f-a0e28a4a84b9",
        "e33fbda4-08a7-48a1-be91-0cc1a245013c": "b688ce7e-c193-4e75-b8d7-84f472598e8f",
        "7729736f-aa8b-4c1e-8df8-e2c073f36773": "2668a57b-e0c3-4aa7-9b75-e53542040d72",
        "397d4998-7695-4812-9ef8-7ac255e93bd7": "5e414686-3308-4831-a09b-c8d548a56738",
        "3534a9da-127d-4375-a0cc-c791dc784478": "5cd5e3b0-4a8a-4954-8fc5-8e2b6e23a1c9",
        "df05804e-4c5f-4353-b672-89c6745cfa5e": "c54da5df-213d-4fa7-8089-74acf5d67cce",
        "1607c490-ee93-4648-8394-a3b63f58542c": "7ee02d6f-a7e1-44ce-8d3d-a237dafe238c",
        "1a4e997c-d025-438e-a76f-04398f7f8eb3": "2ba03195-3ad4-4237-9c75-55182b100041",
        "c75caef4-b653-478c-926c-2f5b270a2f19": "0fd7af97-ab81-4180-9623-59e7b6a724a5",
        "fe6aec3a-7c20-429b-b189-bf2a34f3268d": "0a3d3cca-1417-4ca8-8c2d-2c432e53c8ad",
        "1983dc1c-0964-4a14-b020-21ad46de8dec": "b48ef13c-523a-4ec5-8ca2-8624b5afbfda",
        "6f6a7b05-8ce4-424c-8439-d8fa7ab3fef9": "5732b020-f09d-4d93-89c1-97a7b0c3fd3f",
        "4bf59641-9efe-433e-8327-603539a25c71": "ba93a5b8-e4b0-4ed0-8351-29dcb19bd19e",
        "6cddbc02-12b6-49aa-b0c3-8eb63f5543f8": "1cf3beef-2a7f-4a90-91d8-e6130a4ccfea",
        "fc923092-f9a3-4b1a-b0a2-390ecb50d6d4": "e969d5c1-b083-40bd-a5aa-5664ce63ebad",
        "baca296d-6c9c-4ed3-997a-9116e6ff48ed": "cdfc99cf-e2e1-422c-a323-aa8b02fca94f",
        "44b5635b-a080-440f-a864-e639fbd39dc4": "c795d058-86fd-4427-9ef5-c223f3387916",
        "35898013-1247-4b0d-acf1-d7081bf910b7": "477286e6-88e6-40dd-b42f-1697523aff93",
        "38607a06-d517-45ac-96fc-bf2c9370c7ea": "26932eaf-3926-4528-9475-82db1177969f",
        "9f0094f1-1402-49df-9115-81ff4ac08703": "209f5d1d-a3d6-4bc7-b568-68f4887c0b7d",
        "5d05c132-d468-4833-9585-f8633cc39dab": "0cd67226-6d2b-4375-89ef-e0f5b94c4cb3",
        "a5b44c1a-34b7-483c-9f2d-389d26f54b8c": "409b1e14-6244-4dbf-8f47-5a242893d6c6",
        "bc6e1e2d-8ba6-4e9a-afeb-525cd0ab7bba": "ed783bc5-7434-4ba4-873c-1cd32f0e96af",
        "e08373d0-2b3d-41b0-8250-f50a2b57e22d": "c2eed57b-ff0e-474d-be88-752509f11531",
        "a948c17f-75ce-4f51-b0b3-bd707f5c63b6": "2b69405e-003b-4f8a-9120-863e7870b170",
        "a536da0b-6b0d-46d3-9b36-d75eb52838b9": "6b187378-63d9-422c-8543-a66d7a0d6761",
        "cba8fd79-9f33-49f6-b38a-00963a8614b0": "609f7143-6ee0-4dcc-9927-9435847366bd",
        "d4603818-96d2-489d-b3ca-4ef117646a3f": "dd9cd7d3-df64-46f3-9478-0ba970ce9421",
        "f612dd08-8a73-4280-bb61-8484c00f514e": "f9ace83e-fe6a-47ef-8d8e-4e779d30a9ac",
        "2c59baff-f80f-4ccd-a395-59b8a90ffa2d": "e0491919-0553-4a02-823a-82d36e97a457",
        "e2ef9851-ce96-4f71-88e9-6c6988660d00": "eb06ab48-f8de-4b96-9c73-ea27521dbb44",
        "9b5aceed-0564-4923-bc84-a7056f678f9f": "6b171a00-7afa-4610-9ae1-ae03d1dd1acf",
        "32727f21-007f-4bac-b8ef-3959eeff8a18": "54d0cc4e-67de-478f-acfe-672245228e8b",
        "f2514423-0f44-487a-9b4d-bd2e6f86101a": "60fa6971-1ad1-488b-b629-9cf462470b23",
        "a0c1f239-f2dd-4c4d-85e7-c33555fea040": "ce764732-2383-4980-9b6c-cefeefcd753e",
        "3d990123-3365-4c58-a2e9-4a20632e2d4c": "9359c603-b4d7-4208-8184-35d995f412a1",
        "8d9fba3a-fa27-4ba4-8bbf-f4f91005115b": "909763ca-9da6-48e4-934f-74f5f09bdebb",
        "ef15581d-295f-4afa-94fb-a04ecb783fb0": "38ec7f29-2b84-4b3f-9b38-71051acf6bf7",
        "e82b1f81-c619-4679-9dca-7772be8d45ca": "23928d6c-1354-402a-985e-fd954a76fd7d",
        "8bea49a7-8621-4194-b80b-bfc060f14a12": "e297c4f2-8afa-4be7-9ca8-c09a2f5104a7",
        "0714a6b2-8c6a-41c3-9abb-fbf3363705e6": "8abe5029-00a2-4f57-8af2-fe21e5e69d50",
        "c52ff5ca-0e04-4d01-b43c-a5811b513dae": "a23d49cd-ec45-46aa-87d3-fa976e128044",
        "f674ea27-248e-46d7-8bec-7d6fdbdd26ec": "cca6055f-8a32-4aa9-8037-13f07cb05884",
        "1eab2297-5d32-4281-82d7-8c2bf64b90f6": "db8f70c5-7ef9-4d19-8854-7bdaf75cee77",
        "a8332388-48f4-42b0-b496-fc8b1155f2d5": "4ebd99b8-382f-45a9-8fcc-df9f8bcb4b95",
        "b68d2efb-3956-4d42-9e91-327c5cf1517d": "956c21a3-bade-4258-8f62-999b90af0586",
        "b13d86ae-d850-4985-b40e-36b99298ef2b": "d3ac5624-76a4-4c1e-8c75-1fd3e583d569",
        "e1a30399-107f-47ce-b56b-277e6f02f48b": "a8766a15-4195-4a7a-b889-977cbf614dd7",
        "51ad5bf1-5417-4fc3-9b69-fd37d2d23bfc": "5dce85f1-d30a-4664-8530-70fc97db031c",
        "e35306df-1cc0-413c-a8f3-42da6405bc29": "2967925c-bbc3-4f7c-a271-d0657c240e8f",
        "9cda2e45-0c66-46e9-ae7d-0eff6e710c95": "51e74e1e-1ba9-4477-a9bf-d52eb6ddb8d7",
        "423885c4-21d6-4421-89af-1ebbdc070fdb": "f1c43874-d5b3-492c-947d-91b9c13acfe7",
        "aa964e76-5778-4803-9835-fce194d9aec7": "481ab8ca-b48d-4bfe-b0e3-800b7bcde94d",
        "7008fe21-d896-4e93-b33f-37e76cb16e4b": "685c4038-407d-4d88-9bab-057f5743ba2c",
        "276d6b93-a638-4c37-8185-9942e393bdea": "0e7abe04-d64a-4ba7-9775-32bbf5fc3b34",
        "d20237b3-38f5-4181-b263-98fb9c4de24b": "de33c67c-3950-476e-a238-27c9f63bd84c",
        "10fc0e95-db9f-438e-b805-c5303ea588bf": "947b0257-afda-4c08-a7eb-96bfa44c87cf",
        "b2010a53-0987-4956-9982-2cfdc8765aad": "e2e30610-4725-4613-a1ea-87b59cd3c3c3",
        "85d8512c-22da-4b97-b8e2-cf773aa46a23": "d431ebc0-ac6f-4fa3-992b-afa1e1d4bc24",
        "5d3c7415-eab3-4021-81ef-c6181fdd229f": "c9b00159-f246-4963-8ad3-517c149dad09",
        "2f9bc309-6e22-4f3a-9c55-2592a541da5d": "a8869d72-e343-4976-9f8c-8d341802d533",
        "ceb4d008-839a-4306-9468-5b87e773ce58": "a4a891f0-e874-4324-b92b-f495beb61b5f",
        "fd354285-5f73-47bf-8b70-eef87258ee9d": "836045f8-ecff-4b2e-907e-0e1020ab7da8",
        "c7245d27-32ca-467f-bad7-ee6b29354e00": "fcb7b991-e279-4c00-8b99-49cf56f4d32d",
        "8e29b9fd-249e-4f7d-8e17-fe2abb5a499a": "ec07e20b-a480-4a8b-8663-70fa9c354808",
        "f9a6a3a8-98c5-4670-8ae2-7ec8a2c968ab": "74e503f9-cbd9-4741-8031-2ade220cfa63",
        "89339388-1d98-45a6-a0dc-dfb83b58467d": "e4c118cd-ba71-4213-81c5-bfe2e968dd4b",
        "cfd47c41-67b2-425a-80a3-da9e3e97d9a5": "ab969156-575f-44dd-b4c3-7bfc3ab5b7fb",
        "ff3c4928-de72-404c-b8b2-6ddda8a70938": "b41ad49e-2f7d-4a29-abd1-8c2f13fe66a7",
        "aaf9d0fe-edd8-426e-afa7-37f3db029347": "9d5ec58c-2fb0-4ffe-8aa3-ba80c0a402c2",
        "bfb36f86-64a2-4024-9f66-aa4ee8171d99": "7bd65140-b8f8-4125-8287-5037f051634c",
        "aafbe95d-b143-4a2b-a6cd-c84b74352143": "99af1c8b-f3ef-4c2d-ad63-a06fb8465b38",
        "f9ce2689-1915-4e3b-8800-66fab9d64525": "2d534262-da1d-4c15-9cdf-a79137171dd6",
        "3c4b8e02-656a-4a7b-a95f-4af55c34bf9f": "b564c84b-e6a7-418c-9b14-f63c97c5c4e7",
        "a31c8733-d617-4851-b288-dc3d90850614": "489f2f0b-9192-4ad0-a635-c3b7fc5ddcf6",
        "798469e9-7f7e-4910-9104-428522f3da0e": "2be155cd-b180-4fb2-9239-9ac708076015",
        "ebe7b4b9-d31f-4294-b3d7-acbdb1915ea0": "a60fbbe2-6931-42cb-9081-fd06c7a55837",
        "ae679ab3-86cd-4460-a8c8-5ff8314467a0": "840a6dc7-b62c-407e-b201-20c8acbc5821",
        "309c80f5-aec1-4fa6-91a1-52d5d32a83ed": "74ba8f2f-249f-4558-95d8-1980ec37064d",
        "d82cfa4f-b02c-49f7-a340-2e8365e69215": "f7513bf1-33da-4d7b-8ee0-26fa6ae4dc26",
        "4e0fca8b-366b-4613-90f9-4f16a2c99023": "5a24bc05-9e90-4544-b8a4-30f6215bd52f",
        "228cacfb-ea4c-492c-b10e-d33765ec917e": "b41c1110-0e52-4856-a386-4bc6df309e15",
        "67a1f61c-f011-4a2c-a612-b8d804fb28ff": "184bcc89-8a2a-4a39-aaa1-b429458272b4",
        "4316a7a1-84ae-497a-b75d-fd8f0b40a64b": "7db32667-596e-4d64-ba72-41a4ae995128",
        "c4954de1-f788-4bd0-a98f-a10b4f07abcd": "4c95194a-7884-4407-8915-36b3e3f7c20b",
        "32fbe42e-7de4-407f-aeec-5f273e598885": "140c4583-e173-4ff9-85a1-b48c10d6c5e5",
        "8d4c6781-c281-4f45-af5c-c0ef11acb77c": "02336aea-bf3d-4cdd-913e-01700c41e758",
        "f544109a-6bb9-45fe-9905-8f535c985f89": "bc700b79-12d1-43ce-a707-145402dac6dd",
        "e2144635-e97b-45d2-bafa-e291979cc775": "4f487956-ee80-4e11-a0c5-f10f9ab7056c",
        "825f9fa4-d15f-484a-b1e7-a89911625308": "e01194b8-9636-489b-950c-7a46a0320010",
        "3424ba57-ebd6-4975-990b-735f2218985f": "ae19a569-3f47-472a-832e-7c1d2aac1a03",
        "250e98fd-5c23-4919-80c3-fcd92eb0dae0": "abe5e3ba-675e-45d0-8115-ee02660de47e",
        "3847866c-9040-4a44-b0dd-cc741a3b97c5": "5e03bf40-41d1-4c70-8fdd-9cf194aab9c8",
        "731a385c-1c6e-48c5-b87a-938deee62d6c": "d539da4e-8e62-4478-af0c-9da4fb89bcd9",
        "37d10349-7d32-4ff0-9840-30fa7ce2f0d8": "8b2e6850-1651-489d-98e5-df52c3827082",
        "6cc6b085-aeed-423b-8467-8b10abe6bd0b": "d414c2f3-cecc-4951-a0cb-b556372d8099",
        "6f2adccc-5a7b-4b1c-9077-f2bf463477e4": "9e81b53a-777f-4f5b-8e15-edd592a17c09",
        "bfdb2cd1-b2f2-4777-9f3e-9ec613e010c2": "7e056e08-b379-4a1b-a676-ad31ea8421f2",
        "5350ef6c-debe-42ba-b012-2dfca2cca908": "5c9d6fe3-d6e0-428a-a0e7-8ea0678d3ae4",
        "a30ba8e3-cba0-4ae1-a1ef-3e10437886dc": "a0bf0a20-0314-4256-9b95-09860fed8716",
        "94c4a39f-116b-4ef1-a53a-d4590e47e6ee": "245b2fca-acf3-4ffc-8d2e-8553ab0ab58a",
        "5d5f0d82-d001-4889-a12b-dccbd03ec195": "d9ad13db-e99d-4df5-addd-386a216b5258",
        "d2b0c33a-a9e3-4519-ac99-2022ddfd0cf6": "ddc3560c-872d-4378-a235-7a2cacd39ce3",
        "56b71b78-725a-437a-9454-d848e192a651": "25df79e0-9f8f-4e2e-9adb-36db1a2223ac",
        "3c55e13f-3349-4d75-b115-0f151412da69": "111a4f8e-9859-4a96-90dd-fd3f84705f90",
        "05c78ab0-9fec-47ef-a572-eaa607953090": "a7ed3217-85fb-4761-b510-1592edce872c",
        "c3274d31-823b-4e35-b413-59806ef5a60a": "494c6be4-bd96-4668-ab38-7179e554fccd",
        "4405658b-bca2-4eb0-a760-83f2fe53042c": "168ed49f-99bf-4f17-9962-3d566a336869",
        "4e7d0aa0-c92a-414f-8407-6b071d549628": "6c121889-8db3-4894-9e60-3a1119f3f057",
        "6d0bab72-08d0-4116-8371-801c09b490a5": "d763b555-b7d2-40f3-bf1a-d6dd58668d00",
        "9d8e1cb6-806a-48c9-9e2b-02e217c33760": "0f969d16-055e-43fc-b51f-6a8145d100dc",
        "2d76c1f6-e220-49a1-87b6-d86ec6b035b8": "09e855a0-b869-4ae4-999e-9fee0600adb1",
        "62059b63-ee45-4f73-8e26-d5a5c01355bd": "ba64dd1f-6858-44ec-845a-da9b63e6cda4",
        "f2fef53a-8b6d-46b7-a2bc-0a07e88ab4e0": "b183c26b-e48d-4fea-af64-83d10e7c7dbc",
        "ebdb7904-effa-4b8d-b303-6f09df8ca6ff": "8893d8dc-9c81-43d4-b3a8-5443f42f0731",
        "c47d5600-546b-4593-a32a-1ab48626a3d3": "38d6ecf9-7a91-4873-b3f9-b1a4814d2637",
        "5d28541f-a52d-4858-acae-b9771b3b9a3f": "09dcb339-883d-496e-8f40-cd8de4777793",
        "37df3374-db12-40ca-a379-0a8291523709": "2cc9aadb-aa98-4dff-9209-8ac4b11566ee",
        "6fc7446d-ca84-46ac-b5ad-0ba6ba4fec07": "39b0f388-2a67-4631-8aad-0a0f42f47ca0",
        "ca0e7f89-e82d-4372-b1f0-1090532e8caa": "fc3073c8-5d90-4aa7-ad28-bf55007fc2b2",
        "2ddc7dde-1a96-4f72-b290-db905cbb99b0": "8782265d-4c78-4418-af11-4e2e3541c050",
        "c8ae822e-d497-4ba2-b205-177b71d5c114": "9880fb9e-b767-44c2-84bd-3fde71a8acdf",
        "9881a5af-d69a-4d4f-a3ff-9ec6c955bfdd": "403ead34-c3c3-4df2-bc46-0a860f2c6328",
        "65689851-f546-48ce-a987-6c6b6c3bead3": "61d37d1b-163e-4451-8788-5d10db0bef39",
        "ab7ccf22-3a55-421f-b726-54bd54c49b85": "772706eb-afd2-4eb7-895c-29407a4227bd",
        "c2cd0f15-e850-4f01-a332-cd0136dc4a5e": "a4de505b-752a-44f1-b7d2-f9cc48ead958",
        "b708c8b5-0872-4aa8-a561-6bfa0c91db8d": "bc38e89f-510e-4ceb-b895-4c25cbfad62e",
        "b6f017e5-43f8-40bd-a6fe-1fad4c4c7131": "b64c8199-47dc-4e63-89ff-4d93be689b36",
        "ea2d2f00-1b81-40cc-b107-3fb0461dfad5": "9781af5a-03bf-4517-b376-8eb3a9dc908b",
        "f15101b7-b1ee-480b-846a-4794f11454d2": "a66220b3-a480-4cca-a95f-8648b63e9216",
        "c46941fe-bcbf-45c0-8ea1-f1d025713e6d": "36607407-9dae-43f7-90fa-b2e58461bd25",
        "c9e1e189-6e96-43ab-b872-c0ea8b47569c": "4f63ea5f-829f-4965-8589-145d19fb4cdd",
        "decaca4c-f998-4c45-b2b4-1658bd013e0d": "3c78796e-7bf7-4849-ac14-127d824b41fe",
        "abbd579f-b77d-412d-b1f6-4db1b957a97e": "76467453-17b6-4802-9825-078d9444ef7b",
        "431b3825-5ae8-4a41-905d-d5754744261f": "759e53ee-f4ee-4ecf-a872-35fe05f18211",
        "b0f35d9f-a269-47b9-be26-1c9bb605fc1d": "dfdb9dca-74c5-4bf6-b081-a635c6852084",
        "69672c02-7bb4-4cdd-b8a0-85d8a5b25bfd": "64713d5c-6fc0-4e92-a2ba-c20502d2058c",
        "45afae66-d79f-4af9-9dab-7454a1df9e7d": "6337e545-db27-44e1-90b4-f4319d11cfce",
        "a6eb6f8c-6240-4148-a5ab-0da836cd848f": "76f5ae00-e728-4ad7-95e0-fce769b7f366",
        "4ac15023-9064-467b-a3c2-b2e00925fab6": "53ba20bb-4086-480f-b703-13490dbce006",
        "025f65be-b14c-4036-aa9a-78303b86f7fe": "a8354016-0495-4dbd-9189-a2823c1e7e78",
        "3cca2557-7f3c-4e22-9c9a-e8b32a2292ef": "de76a4b6-ee3b-4cde-a788-cbe3c81083c7",
        "dfd0159f-7852-46a8-a93b-f689084f7581": "96fac20a-e705-4ca5-a16b-3014f26d79fd",
        "4add4cfe-f7b4-40d4-8bc9-d45fde0812eb": "3352c8a0-1462-4797-a40d-3a1e72bf846c",
        "0d9a7096-98bc-4c62-9a4a-ac018809dd84": "e113583c-b612-4a95-af16-0b28ee416d47",
        "cfd4fea7-b7ab-42b3-a195-795fde43ab80": "7dbbf43a-86e2-41ff-8510-8930a6f37839",
        "22a4ae38-e831-4946-a776-8c278c8a0356": "161f8ec6-7f23-4a6e-b3a9-722a31d345ce",
        "4992a595-6aae-4ff9-b30f-44a7a06d6283": "c8fe88cf-d955-49e8-9774-fe1da731ff59",
        "420880f7-7078-4d60-8b80-d3bf381c5e90": "b126af62-fdbc-4f69-b1cc-b6024456ca2a",
        "611103ac-d289-4e44-ab4c-4ece7213db6c": "a57979d5-5373-4003-b3c6-5a82cbc88684",
        "1811a9f8-ed22-414d-8ae4-b25c355148e1": "e45ac713-7ef6-40c1-849a-b74c229e708c",
        "3b06dcda-a429-40af-80a8-72769cbdf610": "ced66e87-122f-4294-8a7e-fff28a1879df",
        "f96273ad-d008-48c8-ace8-60f71aea73ea": "c3622e95-ef57-4d06-8a45-a5f684de6c59",
        "a3bb8f07-7224-41a4-a6db-ba7f67085ce4": "0ff34d8a-d355-498b-8e08-f69488401b6a",
        "0fac8f34-c38b-4a77-8bb6-be3d3ac96673": "9af4d5af-2c3e-42c8-86b1-e49123792447",
        "75fd9b59-b338-4dfc-b740-ab0500f4cd17": "0010087e-c16f-49b5-8f5e-7f51ec697cd3",
        "6475de60-3151-4f35-b81b-9a428a9ddf12": "72ae250b-667c-45ed-95e0-f40f0761490e",
        "c6deaa4c-435d-43cd-a0ef-f9966da6529d": "7311837d-12f7-4737-9352-9657402c52cd",
        "18c8163c-eb68-4495-bf75-1941311afea3": "0b977d86-1525-4fc0-8ae2-4231d147a2e4",
        "1a6e6981-2762-42b1-b88a-ea9a9a61bbd5": "8a086486-b1fe-41d0-aedc-5142fc2579f1",
        "7e947761-fc06-4d54-82e3-563780be9aef": "3fb94c52-65ea-4a5a-9912-47f22fbf2647",
        "2ca54da9-7f8f-4968-aed4-107c4d66329a": "e6cab564-c255-4200-acd7-a149fafe0f87",
        "13d2fd01-160e-440a-88f2-99635d4de34c": "fa32ca73-1709-4295-baf7-b649aae7073f",
        "5d9d7384-4425-49ca-9fc6-ecd572023a48": "746e17ef-1b09-4bdf-b498-f83822abefa9",
        "22b6d6ee-2678-430c-9f7b-d7eb24287b9f": "d2737e61-426c-4f56-83bf-eff2a21477c1",
        "d23bb612-0048-4947-8969-db5766a7ed64": "85148569-0e16-4936-a883-bdc02429e0a4",
        "78b54b98-aea5-4745-9813-27dad9b0cf67": "229cda50-c618-462d-aa9f-aa8d1925f30f",
        "f5d4c03a-ace1-4b8e-9e2b-926e8beaf3d0": "dcd462d0-46fa-45bd-bfe5-ee0564347f23",
        "f8098487-b1a8-46be-9364-9fb1fe99a7e3": "b73f8c79-7983-4e94-a3bb-573159c63523",
        "542d3621-9a79-453a-894d-34334b424275": "7b0fdeda-1010-4040-8d99-20cb7212beda",
        "9bbe6a81-df17-4548-8284-8d0c227fbe2b": "c16bcae9-df22-4192-bef9-569d12366984",
        "a4beb4bc-23db-436c-8321-34b5c1c486c2": "0a07d0cd-ab28-4ab9-8b4f-20c0258d4119",
        "da1e8dc2-1d0c-4fc3-9795-9ee9829bbae1": "cb83ec87-1205-48e0-b005-df334b312b69",
        "6f129d46-6762-44aa-9f3c-dc3032e11d7e": "59ed8a6c-6bd7-4629-944f-34c3f14b86f7",
        "6e9fd23e-bc3d-49b3-8a7a-1731895be2e9": "6ca1d38d-7374-4421-8572-c708150ca2d4",
        "cdda162c-541a-42e7-8805-07893eacfbc0": "c3cf6452-0561-4374-b5f4-34b3da7ce1fb",
        "c8699858-703c-4703-9e9b-dae52f1ed8e4": "86ceffcf-0832-4757-9b39-e18a79a0eadc"
    }
    const host = "http://tsgxs.jxufe.cn";
    const $w = unsafeWindow, $l = $w.location.href, $d = $w.document;

    if ($l.toLowerCase().includes("http://jhread.zhixinst.com/")) {
        $("div.blackboard-pc").html("<b><h4>XiaO_WanG带你速通蛟湖阅读<br>普通阅读: 去图书馆借10本书<br>经典阅读: 请使用这个脚本<a href='https://greasyfork.org/zh-CN/scripts/454905-%E5%88%9B%E6%83%B3%E4%B9%8B%E6%98%9F%E5%88%B7%E9%98%85%E8%AF%BB%E9%87%8F%E5%88%B7%E9%98%85%E8%AF%BB%E6%97%B6%E9%97%B4-%E6%B1%9F%E8%B4%A2%E4%B8%93%E7%89%88'>创想之星刷阅读量刷阅读时间 - 江财专版</a><br>入馆教育: <a href='http://tsgxs.jxufe.cn/'>打开学习界面</a><br>信息素养: 进入学习页面, 找20个视频, 直接把进度条拖到距离结束2s左右位置, 然后等待结束即可</h4></b>");
    }
    if ($l.toLowerCase().includes("http://tsgxs.jxufe.cn/web/user")) { // 自动进入没学习的专题
        if (confirm("要开始吗?")) {
            let pageObj = $("[href^='/Web/Chapter/Index/']");
            pageObj.each(function (i, dom) {
                this.click();
            })
        }
    } else if ($l.toLowerCase().includes("/web/chapter/index")) { // 自动学习
        let pageObj = $("[href^='/Web/Chapter/Content/']");
        if ($(".grayscale").length === pageObj.length) {
          let res = $l.replace("http://tsgxs.jxufe.cn/Web/Chapter/Index/", "").split("?")[0];
          if(res.length === 36){
             location.href = host + "/Web/Exam?cid=" + res;
           }else if(res === "http://tsgxs.jxufe.cn/web/Chapter/Index"){
             location.href = host + "/Web/Exam?cid=" + $l.replace("http://tsgxs.jxufe.cn/web/Chapter/Index?id=", "");
           }
        } else {
            pageObj.each(function (i) {
                $.ajax({
                    type: "GET",
                    url: this.href
                })
            })
            location.reload();
        }
    } else if ($l.toLowerCase().includes("/web/exam")) { // 自动考试
        // clearInterval(timer);
        // $("#minute").text("0");
        // $("#second").text("1");
        // timer = null;
        $(document).ready(function () {
            timer = setInterval(() => {
                let que = $("#stid").attr("value");
                let ans = answer[que];
                $("[value=" + ans + "]").click()
                $("#btnSubmit").click()
                $("#qd").click()
            }, 1000);
        });
    }
    function sleep(interval) {
        return new Promise((success, fail) => {
            setTimeout(success, interval);
        });
    }
})();



