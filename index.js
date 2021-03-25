const express = require("express");
const cors = require('cors');
const app = express();

const port = 5000;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",  "*");
    app.use(cors());
    next();
})

// FÍSICA -----------------------------------------

app.get('/', (req, res)=>{
    res.json([
        //FISICA ------------------------------------------------------------------------------------------
        {
            fisica: {
                card:{
                    cardHeader:{
                        title: "Leis de Newton - Aula 1"
                    },
                    cardBody:{
                        cardImage: "https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/f%C3%ADsica/aula1.jpg?raw=true",
                        imageAlt: "Física",
                        date: "22/03/21",
                        href: "https://youtu.be/42Li6ZkcYMY"
                    }
                },
                card:{
                    cardHeader:{
                        title: "Forças de atrito - Aula 2"
                    },
                    cardBody:{
                        cardImage: "https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/f%C3%ADsica/aula2.jpg?raw=true",
                        imageAlt: "Física",
                        date: "24/03/21",
                        href: "https://youtu.be/yqEH1Np6gBQ"
                    }
                }
            }
            // END FÍSICA ----------------------------------------------------------------------------------------------
        },
        //CALCULO -----------------------------------------------------------------------------------------------------------
        {
            calculo:{
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/c%C3%A1lculo/aula1.jpg?raw=true",
                        imageAlt: "Cálculo",
                        date: "22/03/21",
                        href: ""
                    }
                },
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/c%C3%A1lculo/aula2.jpg?raw=true",
                        imageAlt: "Cálculo",
                        date: "22/03/21",
                        href: ""
                    }
                }           
            }
            // END CÁLCULO ------------------------------------------------------------------------------------------------
        },
        // CÁLCULO VETORIAL -------------------------------------------------
        {
            vetorial: {
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "c",
                        imageAlt: "Cálculo Vetorial",
                        date: "22/03/21",
                        href: ""
                    }
                },
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "c",
                        imageAlt: "Cálculo Vetorial",
                        date: "24/03/21",
                        href: ""
                    }
                }   
            }
            // END CÁLCULO VETORIAL ---------------------------------------------------------------------------------------------

        },
        // INTRO COMPUTADOR ---------------------------------------------------------------------------------------------------
        {
            introComp:{
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "c",
                        imageAlt: "Introdução ao computador",
                        date: "22/03/21",
                        href: ""
                    }
                },
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "c",
                        imageAlt: "Introdução ao computador",
                        date: "24/03/21",
                        href: ""
                    }
                },
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "c",
                        imageAlt: "Introdução ao computador",
                        date: "24/03/21",
                        href: ""
                    }
                }
            }
        // END INTRO COMPUTADOR ------------------------------------------------
        },
        // INTRO PROGRAMAÇÃO -------------------------------------------------
        {
            introProg:{
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "c",
                        imageAlt: "Introdução ao programação",
                        date: "22/03/21",
                        href: ""
                    }
                },
                card:{
                    cardHeader:{
                        title: ""
                    },
                    cardBody:{
                        cardImage: "c",
                        imageAlt: "Introdução ao programação",
                        date: "24/03/21",
                        href: ""
                    }
                }
            }
            // END INTRO PROGRAMAÇÃO ------------------------------------------------
        }
    ])
})






app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});