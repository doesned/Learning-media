import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const StateContext = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    userToken: null,
    surveys: [],
    setUserToken: () => {},
});

const tmpSurveys = [
    {
        id: 1,
        image_url: "https://cdn.gramedia.com/uploads/items/9786230029196_Kumpulan_Cerita_Ragam_Indonesia_COVER.jpg",
        title: "Buku cerita rakyat anak anak",
        slug: "thecodeholic-youtube-channel",
        status: true,
        description:
            "Kumpulan Cerita Ragam Indonesia: Anak-Anak Teluk Bone & 12 Cerita Mengenalkan Keragaman Indonesia merupakan buku yang berisi kumpulan-kumpulan cerita unik keragaman indonesia.",
        created_at: "2022-01-07 13:23:41",
        updated_at: "2022-01-18 16:34:19",
        expire_date: "2022-01-23",
        questions: [
            {
                id: 15,
                type: "text",
                question: "From which country are you?",
                description: null,
            },
            {
                id: 16,
                type: "checkbox",
                question:
                    "Which language videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "8ee03188-9e7e-44e5-9176-7574c0beec6f",
                            text: "JavaScript",
                        },
                        {
                            uuid: "fe9497f2-8f05-4c82-9586-26e36736fa9e",
                            text: "PHP",
                        },
                        {
                            uuid: "db0f194c-d32d-4e19-929e-08f7b4e2bcc0",
                            text: "HTML + CSS",
                        },
                        {
                            uuid: "93273c4c-ac8f-432e-b847-e467df64ab9c",
                            text: "All of the above",
                        },
                        {
                            uuid: "d54818a7-ad7e-4b69-9287-16a8dc50a6cb",
                            text: "Everything Zura thinks will be good",
                        },
                    ],
                },
            },
            {
                id: 17,
                type: "select",
                question:
                    "Which PHP framework videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "fb907cfe-b7a1-4b24-86fb-03f9c44aa710",
                            text: "Laravel",
                        },
                        {
                            uuid: "e2629262-93ca-4a7a-8129-19c765664a04",
                            text: "Yii2",
                        },
                        {
                            uuid: "9a11a425-d9fe-4fe9-86af-bb814e3d9271",
                            text: "Codeigniter",
                        },
                        {
                            uuid: "484268b1-d3aa-47f8-a185-356ed48e50fe",
                            text: "Symfony",
                        },
                    ],
                },
            },
            {
                id: 18,
                type: "radio",
                question: "Which Laravel Framework do you love most?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "c02e50e6-5ebf-4344-9822-baa16502dbdb",
                            text: "Laravel 5",
                        },
                        {
                            uuid: "90a15aae-ef4c-4d04-aa05-8e840d4a2ded",
                            text: "Laravel 6",
                        },
                        {
                            uuid: "93c64532-c1eb-4bfd-bd00-ab51cafdee78",
                            text: "Laravel 7",
                        },
                        {
                            uuid: "51f6a704-7a86-47a4-9b2d-72bb026a3371",
                            text: "Laravel 8",
                        },
                    ],
                },
            },
            {
                id: 19,
                type: "checkbox",
                question:
                    "What type of projects do you want to see on my channel built with Laravel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "c5519ab0-3282-4758-a34b-506052bf1342",
                            text: "REST API",
                        },
                        {
                            uuid: "dfbbc0af-8fff-44ae-be36-e85270041729",
                            text: "E-commerce",
                        },
                        {
                            uuid: "6940c122-505f-4d9d-a103-472f923fad94",
                            text: "Real Estate",
                        },
                        {
                            uuid: "2b3c12a4-8f3c-4276-ae59-4e9d55e849be",
                            text: "All of the above",
                        },
                    ],
                },
            },
            {
                id: 22,
                type: "textarea",
                question: "What do you think about TheCodeholic channel?",
                description:
                    "Write your honest opinion. Everything is anonymous.",
                data: [],
            },
            {
                id: 23,
                type: "text",
                question: "Which channel is your favorite one?",
                description: null,
                data: [],
            },
        ],
    },
    {
        id: 2,
        image_url: "data:image/jpeg;base64,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",
        title: "Menara Segitiga",
        slug: "react",
        status: true,
        description:
            "Mainan Kayu Edukasi Anak-Alat Peraga Edukasi Untuk Anak Tk Paud - Alat Peraga Edukatif Anak.",
        created_at: "2022-01-07 08:50:40",
        updated_at: "2022-01-07 13:37:37",
        expire_date: "2022-02-01",
        questions: [],
    },
    {
        id: 3,
        image_url: "https://i.etsystatic.com/11199270/r/il/579ea8/4907779275/il_fullxfull.4907779275_8l8q.jpg",
        title: "Smartpopbooks",
        slug: "laravel-9",
        status: true,
        description:
            "Anak dengan kesulitan belajar  atau bisa disebut learning disability adalah kondisi yang dapat memengaruhi berbagai aspek pembelajaran, termasuk membaca, menulis, berhitung, atau pemahaman konsep-konsep tertentu, biasanya ditandai dengan adanya hambatan atau kesulitan dalam memahami, mengingat, menganalisis, atau menerapkan informasi secara efektif. Media pembelajaran yang cocok untuk anak dengan kesulitan belajar antara lain yaitu Smart Pop Up Book",
        created_at: "2022-01-07 13:28:56",
        updated_at: "2022-01-07 13:28:56",
        expire_date: "2022-01-20",
        questions: [],
    },
];

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "Tom Cook",
        email: "tom@example.com",
        imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    });

    const [userToken, setUserToken] = useState("1234");
    const [surveys, setSurveys] = useState(tmpSurveys);
    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
                surveys,

            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
