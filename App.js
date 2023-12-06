var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$react = require("react");
var $9WItx$reactdom = require("react-dom");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}




var $31c3d47edefc6033$exports = {};
$31c3d47edefc6033$exports = new URL("restaurant-logo.c5bd1812.png", "file:" + __filename).toString();


const $76d3f03a03a6aeec$var$Header = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "header",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "img-logo",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    className: "logo",
                    src: (0, (/*@__PURE__*/$parcel$interopDefault($31c3d47edefc6033$exports))),
                    alt: "image"
                })
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "nav-items",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                            children: "Home"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                            children: "About us"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                            children: "Contact us"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                            children: "Cart"
                        })
                    ]
                })
            })
        ]
    });
};
var $76d3f03a03a6aeec$export$2e2bcd8739ae039 = $76d3f03a03a6aeec$var$Header;




const $49b61417b640529d$export$19d7d9fc08b5d62e = "https://corsproxy.io/?https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";


const $5392ec750da01c1b$var$RestaurantCard = ({ resData: resData })=>{
    const { name: name, avgRating: avgRating, cuisines: cuisines, costForTwo: costForTwo, cloudinaryImageId: cloudinaryImageId } = resData.info;
    // console.log(resData );
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "res-card",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                className: "res-image",
                src: (0, $49b61417b640529d$export$19d7d9fc08b5d62e) + cloudinaryImageId,
                alt: ""
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                children: name
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h5", {
                children: [
                    "Rating:",
                    avgRating
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h5", {
                children: cuisines?.join(", ")
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h5", {
                children: [
                    "Cost:",
                    costForTwo
                ]
            })
        ]
    });
};
var $5392ec750da01c1b$export$2e2bcd8739ae039 = $5392ec750da01c1b$var$RestaurantCard;


const $70aebeaa2d68662d$export$f256c214c2ac6c6b = [
    {
        info: {
            id: "224920",
            name: "Chandralok Kachouri",
            cloudinaryImageId: "qbo11lh7l43xpkd7wqts",
            locality: "Kp Kakkar Road",
            areaName: "Rambagh",
            costForTwo: "\u20B9150 for two",
            cuisines: [
                "Snacks",
                "South Indian",
                "Chinese",
                "Fast Food",
                "Pizzas"
            ],
            avgRating: 4,
            veg: true,
            feeDetails: {
                restaurantId: "224920",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 1900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 1900
            },
            parentId: "57887",
            avgRatingString: "4.0",
            totalRatingsString: "5K+"
        }
    },
    {
        info: {
            id: "147619",
            name: "Jai Shree Shankar Punjabi Dhaba",
            cloudinaryImageId: "slfbprrckr7jk1zm58rd",
            locality: "Mahatma Gandhi Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9250 for two",
            cuisines: [
                "Indian",
                "North Indian",
                "Chinese",
                "South Indian",
                "Snacks",
                "Punjabi",
                "Beverages"
            ],
            avgRating: 3.6,
            veg: true,
            feeDetails: {
                restaurantId: "147619",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "108723",
            avgRatingString: "3.6",
            totalRatingsString: "10K+"
        }
    },
    {
        info: {
            id: "127614",
            name: "Statesman House",
            cloudinaryImageId: "98588793791dd32f2daa7e3595fcb69c",
            locality: "Hewett Road",
            areaName: "Rambagh",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "North Indian",
                "Chinese"
            ],
            avgRating: 3.8,
            feeDetails: {
                restaurantId: "127614",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 1900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 1900
            },
            parentId: "195577",
            avgRatingString: "3.8",
            totalRatingsString: "5K+"
        }
    },
    {
        info: {
            id: "380152",
            name: "The Quick Curry",
            cloudinaryImageId: "aq5uredkyfrmct6a99cv",
            locality: "Vivekanand Marg",
            areaName: "Leader Road",
            costForTwo: "\u20B9250 for two",
            cuisines: [
                "Thalis",
                "North Indian"
            ],
            avgRating: 3.8,
            veg: true,
            feeDetails: {
                restaurantId: "380152",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 1900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 1900
            },
            parentId: "212902",
            avgRatingString: "3.8",
            totalRatingsString: "1K+"
        }
    },
    {
        info: {
            id: "666981",
            name: "Fire House Pizza",
            cloudinaryImageId: "906c0affa7d8ff78a3e4db88b4433cde",
            locality: "Neta nagar",
            areaName: "Civil Lines",
            costForTwo: "\u20B9600 for two",
            cuisines: [
                "Pizzas"
            ],
            avgRating: 3.6,
            veg: true,
            feeDetails: {
                restaurantId: "666981",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 1900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 1900
            },
            parentId: "79622",
            avgRatingString: "3.6",
            totalRatingsString: "10+"
        }
    },
    {
        info: {
            id: "481918",
            name: "Al-Baik Zone",
            cloudinaryImageId: "mra2lrsmgduhwswzzee0",
            locality: "Nakhas Kona",
            areaName: "Leader Road",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Fast Food",
                "Arabian",
                "Biryani"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "481918",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 1900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 1900
            },
            parentId: "8049",
            avgRatingString: "4.0",
            totalRatingsString: "100+"
        }
    },
    {
        info: {
            id: "80312",
            name: "Raju Kitchen Restaurant",
            cloudinaryImageId: "u8m5sxxbwuwfjolzdf69",
            locality: "Tandon Road",
            areaName: "Civil Lines",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Indian",
                "Chinese",
                "Mughlai",
                "North Indian",
                "Snacks",
                "Lucknowi",
                "Biryani"
            ],
            avgRating: 3.7,
            feeDetails: {
                restaurantId: "80312",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "165971",
            avgRatingString: "3.7",
            totalRatingsString: "10K+"
        }
    },
    {
        info: {
            id: "404669",
            name: "Momos castle",
            cloudinaryImageId: "lubiprpdt4cgnunga3rr",
            locality: "Sardar Patel Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9150 for two",
            cuisines: [
                "Chinese"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "404669",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "250870",
            avgRatingString: "4.3",
            totalRatingsString: "100+"
        }
    },
    {
        info: {
            id: "147244",
            name: "Delight The Pastry Shop",
            cloudinaryImageId: "dlx59kcbntvnlf8igifw",
            locality: "Jahid Complex",
            areaName: "Kareli",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Bakery",
                "Chinese",
                "Biryani",
                "Snacks"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "147244",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "70572",
            avgRatingString: "4.1",
            totalRatingsString: "1K+"
        }
    },
    {
        info: {
            id: "80427",
            name: "Jai Shree Shankar Bhojanalaya",
            cloudinaryImageId: "qhdec9rh38ewnb80tkim",
            locality: "Mahatma Gandhi Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9250 for two",
            cuisines: [
                "North Indian",
                "Thalis",
                "South Indian",
                "Chinese",
                "Snacks",
                "Indian"
            ],
            avgRating: 3.7,
            veg: true,
            feeDetails: {
                restaurantId: "80427",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 1900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 1900
            },
            parentId: "108722",
            avgRatingString: "3.7",
            totalRatingsString: "10K+"
        }
    },
    {
        info: {
            id: "80703",
            name: "Aryan Family's Delight",
            cloudinaryImageId: "kb34u4pywk49ksbyn4g5",
            locality: "Sardar Patel Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9400 for two",
            cuisines: [
                "North Indian",
                "South Indian",
                "Fast Food",
                "Snacks",
                "Burgers",
                "Chinese"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "80703",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "6001",
            avgRatingString: "4.2",
            totalRatingsString: "10K+"
        }
    },
    {
        info: {
            id: "87514",
            name: "Haldiram Bhujiawala",
            cloudinaryImageId: "nkd7purcqzconoypeto9",
            locality: "Tashkent Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "Sweets",
                "North Indian",
                "South Indian",
                "Chinese",
                "Desserts",
                "Indian",
                "Fast Food"
            ],
            avgRating: 3.7,
            veg: true,
            feeDetails: {
                restaurantId: "87514",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "92848",
            avgRatingString: "3.7",
            totalRatingsString: "10K+"
        }
    },
    {
        info: {
            id: "128962",
            name: "Pizza Club 99",
            cloudinaryImageId: "yxkkxyhgvcb0mkmneoj6",
            locality: "Gulteria",
            areaName: "Dhoomanganj",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "Pizzas",
                "Fast Food",
                "Beverages"
            ],
            avgRating: 3.7,
            feeDetails: {
                restaurantId: "128962",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 4400
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4400
            },
            parentId: "13512",
            avgRatingString: "3.7",
            totalRatingsString: "5K+"
        }
    },
    {
        info: {
            id: "80216",
            name: "Hot Stuff",
            cloudinaryImageId: "beeaadg3lqjics4fzuvw",
            locality: "Lal Bhadhur Shastri Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "North Indian",
                "Beverages",
                "Desserts",
                "Pizzas"
            ],
            avgRating: 3.8,
            feeDetails: {
                restaurantId: "80216",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "97558",
            avgRatingString: "3.8",
            totalRatingsString: "1K+"
        }
    },
    {
        info: {
            id: "150376",
            name: "Shri Ram Shakahari Bhojnalaya",
            cloudinaryImageId: "suz4we5x7dgznrquxvu9",
            locality: "Katju Road",
            areaName: "Leader Road",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "North Indian"
            ],
            avgRating: 4.1,
            veg: true,
            feeDetails: {
                restaurantId: "150376",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 1900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 1900
            },
            parentId: "186817",
            avgRatingString: "4.1",
            totalRatingsString: "10K+"
        }
    },
    {
        info: {
            id: "314904",
            name: "Capsicum",
            cloudinaryImageId: "60d52c0fb85ea4f566864b2709538d6f",
            locality: "Mahewa Purab Patti",
            areaName: "Naini",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Chinese",
                "Pizzas",
                "Pastas",
                "Snacks",
                "Beverages"
            ],
            avgRating: 3.5,
            feeDetails: {
                restaurantId: "314904",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "55813",
            avgRatingString: "3.5",
            totalRatingsString: "100+"
        }
    },
    {
        info: {
            id: "380494",
            name: "Chinese Hunger",
            cloudinaryImageId: "h5zwpqi3jquzonhjq8bn",
            locality: "Mahewa Naini",
            areaName: "Naini",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Chinese"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "380494",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "61783",
            avgRatingString: "4.3",
            totalRatingsString: "20+"
        }
    },
    {
        info: {
            id: "591407",
            name: "Sardar G Malai Chaap Junction",
            cloudinaryImageId: "sk6saam8uteg0kuoxkas",
            locality: "Tashkand Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "Indian",
                "Tandoor",
                "Arabian",
                "Punjabi"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "591407",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "14511",
            avgRatingString: "4.0",
            totalRatingsString: "50+"
        }
    },
    {
        info: {
            id: "80226",
            name: "Pizza Hut",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            locality: "Sardar Patel Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9350 for two",
            cuisines: [
                "Pizzas"
            ],
            avgRating: 3.8,
            feeDetails: {
                restaurantId: "80226",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "721",
            avgRatingString: "3.8",
            totalRatingsString: "10K+"
        }
    },
    {
        info: {
            id: "238136",
            name: "La Pino'z Pizza",
            cloudinaryImageId: "a3poc70wqkajnw3zxpsl",
            locality: "Tashkand Marg",
            areaName: "Civil Lines",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            avgRating: 3.7,
            feeDetails: {
                restaurantId: "238136",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "4961",
            avgRatingString: "3.7",
            totalRatingsString: "5K+"
        }
    },
    {
        info: {
            id: "332194",
            name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
            cloudinaryImageId: "mlhwn3yictyis4cey2ai",
            locality: "Lajpat Rai Road",
            areaName: "Meergunj",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            avgRating: 4.4,
            veg: true,
            feeDetails: {
                restaurantId: "332194",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 1900
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 1900
            },
            parentId: "582",
            avgRatingString: "4.4",
            totalRatingsString: "1K+"
        }
    },
    {
        info: {
            id: "442057",
            name: "Shravan Specials by Lunchbox",
            cloudinaryImageId: "crakciwcxxy6jfoqxzkj",
            locality: "Civil Lines",
            areaName: "Stanley Road",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Biryani",
                "North Indian",
                "Desserts",
                "Beverages"
            ],
            avgRating: 3.3,
            feeDetails: {
                restaurantId: "442057",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "21938",
            avgRatingString: "3.3",
            totalRatingsString: "6"
        }
    },
    {
        info: {
            id: "442056",
            name: "The Biryani Life",
            cloudinaryImageId: "uu7a0fqio5jygufj8lul",
            locality: "Stanley Road",
            areaName: "Civil Lines",
            costForTwo: "\u20B9250 for two",
            cuisines: [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages"
            ],
            avgRating: 3.7,
            feeDetails: {
                restaurantId: "442056",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "8496",
            avgRatingString: "3.7",
            totalRatingsString: "100+"
        }
    },
    {
        info: {
            id: "723874",
            name: "Hudson Chopsticks",
            cloudinaryImageId: "1952cde9bea82274227516f5caa99123",
            locality: "PD Tandon Road",
            areaName: "Civil Lines",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "Chinese",
                "Thai",
                "Asian",
                "Snacks",
                "Tibetan",
                "Nepalese",
                "Pan-Asian",
                "Seafood",
                "Beverages"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "723874",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2500
            },
            parentId: "7129",
            avgRatingString: "4.2",
            totalRatingsString: "50+"
        }
    }
];



// import axios from "axios";
const $889bfb1e3e9bfc80$var$apiURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.533117461252107&lng=73.82439438253641&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
const $889bfb1e3e9bfc80$var$corsProxyUrl = "https://cors.bridged.cc/";
const $889bfb1e3e9bfc80$var$Body = ()=>{
    const [listedRestaurants, setListedRestaurants] = (0, $9WItx$react.useState)((0, $70aebeaa2d68662d$export$f256c214c2ac6c6b));
    (0, $9WItx$react.useEffect)(()=>{
        fetchData();
        console.log("useEffect has been called");
    }, []);
    const fetchData = async ()=>{
        try {
            const data = await fetch($889bfb1e3e9bfc80$var$apiURL);
            const json = await data.json();
            console.log(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "body",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "search",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        className: "filter-btn",
                        onClick: ()=>{
                            listFiltered = (0, $70aebeaa2d68662d$export$f256c214c2ac6c6b).filter((res)=>res.info.avgRating > 4);
                            setListedRestaurants(listFiltered);
                            console.log("Filtered Sir !!", listFiltered);
                        },
                        children: "Top rated restaurants"
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                        className: "go-back",
                        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                            onClick: ()=>{
                                normalList = (0, $70aebeaa2d68662d$export$f256c214c2ac6c6b).filter((res)=>res.info);
                                setListedRestaurants(normalList);
                            },
                            children: "All restaurants"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    className: "res-container",
                    children: listedRestaurants.map((res)=>/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $5392ec750da01c1b$export$2e2bcd8739ae039), {
                            resData: res
                        }, res.info.id))
                })
            })
        ]
    });
};
var $889bfb1e3e9bfc80$export$2e2bcd8739ae039 = $889bfb1e3e9bfc80$var$Body;


const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "app",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $76d3f03a03a6aeec$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $889bfb1e3e9bfc80$export$2e2bcd8739ae039), {})
        ]
    });
};
const $da11a1101b2a894a$var$root = (0, ($parcel$interopDefault($9WItx$reactdom))).createRoot(document.getElementById("root"));
$da11a1101b2a894a$var$root.render(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$App, {}));


//# sourceMappingURL=App.js.map
