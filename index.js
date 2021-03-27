const express = require("express");
const cors = require('cors');
const app = express();

const port = 5000;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",  "*");
    app.use(cors());
    next();
})

app.get('/', (req, res)=>{
    res.json([
        {
            calculo:[
                {
                    card:{
                        cardHeader:{
                            title: "Números Reais - Aula 1"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/calculo/aula1.jpg",
                            imgAlt: "Cálculo",
                            date: "03/03/21",
                            aHref: "https://youtu.be/LeJxGDWuJJw"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Funções Reais e Gráficos - Aula 2"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/calculo/aula2.jpg",
                            imgAlt: "Cálculo",
                            date: "08/03/21",
                            aHref: "https://youtu.be/RjTm-uoelSE"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Funções elementares do Cálculo - Aula 3"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/calculo/aula3.jpg",
                            imgAlt: "Cálculo",
                            date: "10/03/21",
                            aHref: "https://youtu.be/zy5URJhkDww"
                        }
                    }
                }
                ,
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Limites e Continuidade - Aula 4"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/calculo/aula4.jpg",
                            imgAlt: "Cálculo",
                            date: "15/03/21",
                            aHref: "https://youtu.be/31E4pTPHosw"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Limites e Continuidade (Continuação) - Aula 5"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/calculo/aula5.jpg",
                            imgAlt: "Cálculo",
                            date: "17/03/21",
                            aHref: "https://youtu.be/pbwu_hqd-DI"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Limites Infinito e Limites no Infinito - Aula 6"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/not-thumbl.png",
                            imgAlt: "Cálculo",
                            date: "22/03/21",
                            aHref: "link"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Limites no Infinito e Limites Trigonométricos - Aula 7"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/not-thumbl.png",
                            imgAlt: "Cálculo",
                            date: "24/03/21",
                            aHref: "link"
                        }
                    }
                }
            ]
        },
        {
            fisica:[
                {
                    card:{
                        cardHeader:{
                            title: "Leis de Newton - Aula 1"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/fisica/aula1.jpg",
                            imgAlt: "Física",
                            date: "22/03/21",
                            aHref: "https://youtu.be/42Li6ZkcYMY"
                        }
                    }
                },
                //-----------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Forças de atrito - Aula 2"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/fisica/aula2.jpg",
                            imgAlt: "Física",
                            date: "24/03/21",
                            aHref: "https://youtu.be/yqEH1Np6gBQ"
                        }
                    }
                }
                //-----------------------------------------------------
            ]
        },
        {
            vetorial:[
                {
                    card:{
                        cardHeader:{
                            title: "Vetores - <br> Aula 1"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/vetorial/aula1.jpg",
                            imgAlt: "Vetorial",
                            date: "09/03/21",
                            aHref: "https://youtu.be/1HY_Y1Ujyyg"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Dependência linear de vetores - <br> Aula 2"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/vetorial/aula2.jpg",
                            imgAlt: "Vetorial",
                            date: "11/03/21",
                            aHref: "https://youtu.be/ZBttbOHR90w"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Base para o espaço e coordenadas de vetores numa base - Aula 3"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/vetorial/aula3.jpg",
                            imgAlt: "Vetorial",
                            date: "16/03/21",
                            aHref: "https://youtu.be/ts9yIp8WOOQ"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Exercícios de base e resolução de sistemas - Aula 4"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/vetorial/aula4.jpg",
                            imgAlt: "Vetorial",
                            date: "18/03/21",
                            aHref: "https://youtu.be/IrPx-rIiiBQ"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Produto de vetores - Aula 5"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/vetorial/aula5.jpg",
                            imgAlt: "Vetorial",
                            date: "23/03/21",
                            aHref: "https://youtu.be/Xj0jhA0H3ow"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Aula de exercícios - Aula 6"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/vetorial/aula6.jpg",
                            imgAlt: "Vetorial",
                            date: "25/03/21",
                            aHref: "https://youtu.be/M7APg1l986s"
                        }
                    }
                }
            ]
        },
        {
            introProg:[
                {
                    card:{
                        cardHeader:{
                            title: "O Computador - Aula 1"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/introProg/aula1.jpg",
                            imgAlt: "Introdução a Programação",
                            date: "11/03/21",
                            aHref: "https://youtu.be/LFu_zqqtvbE"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Algoritmos - Aula 2"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/introProg/aula2.jpg",
                            imgAlt: "Introdução a Programação",
                            date: "16/03/21",
                            aHref: "https://youtu.be/4wI_sOpKauk"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Começando a programar: usando a memória e E/S - Aula 3"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/introProg/aula3.jpg",
                            imgAlt: "Introdução a Programação",
                            date: "23/03/21",
                            aHref: "https://youtu.be/LambNMJJck4"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Estruturas de controle: desvio condicional - Aula 4"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/introProg/aula4.jpg",
                            imgAlt: "Introdução a Programação",
                            date: "25/03/21",
                            aHref: "https://youtu.be/DcWGyOFANyM"
                        }
                    }
                }
            ]
        },
        {
            introComp:[
                {
                    card:{
                        cardHeader:{
                            title: "Arquitetura Básica de um Computador (Parte 1) - Aula 1"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/introComp/aula1.jpg",
                            imgAlt: "Introdução ao Computador",
                            date: "11/03/21",
                            aHref: "https://youtu.be/HEkGTFp8_G8"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Arquitetura Básica de um Computador (Parte 2) - Aula 2"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/introComp/aula2.jpg",
                            imgAlt: "Introdução ao Computador",
                            date: "16/03/21",
                            aHref: "https://youtu.be/wee2mCtT45g"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Arquitetura Básica de um Computador (Parte 3) - Aula 3"
                        },
                        cardBody: {
                            imgSrc: "/public/images/thumbl/introComp/aula3.jpg",
                            imgAlt: "Introdução ao Computador",
                            date: "23/03/21",
                            aHref: "https://youtu.be/lZJ1X_1QWzI"
                        }
                    }
                }
            ]
        }
    ])
})


app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});