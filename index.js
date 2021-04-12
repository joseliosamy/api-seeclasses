const express = require("express");
const cors = require('cors');
const app = express();

const port = 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.get('/', (req, res) => {
    res.json([
        {
            "calculo": [
                {
                    "card": {
                        "id": 1,
                        "cardHeader": {
                            "title": "Números Reais - Aula 1"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/calculo/aula1.jpg",
                            "imgAlt": "Cálculo",
                            "date": "03/03/21",
                            "aHref": "https://youtu.be/LeJxGDWuJJw"
                        },
                        "theaterMode": {
                            "iframe": "LeJxGDWuJJw"
                        }
                    }
                },
                {
                    "card": {
                        "id": 2,
                        "cardHeader": {
                            "title": "Funções Reais e Gráficos - Aula 2"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/calculo/aula2.jpg",
                            "imgAlt": "Cálculo",
                            "date": "08/03/21",
                            "aHref": "https://youtu.be/RjTm-uoelSE"
                        },
                        "theaterMode": {
                            "iframe": "RjTm-uoelSE"
                        }
                    }
                },
                {
                    "card": {
                        "id": 3,
                        "cardHeader": {
                            "title": "Funções elementares do Cálculo - Aula 3"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/calculo/aula3.jpg",
                            "imgAlt": "Cálculo",
                            "date": "10/03/21",
                            "aHref": "https://youtu.be/zy5URJhkDww"
                        },
                        "theaterMode": {
                            "iframe": "zy5URJhkDww"
                        }
                    }
                },
                {
                    "card": {
                        "id": 4,
                        "cardHeader": {
                            "title": "Limites e Continuidade - Aula 4"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/calculo/aula4.jpg",
                            "imgAlt": "Cálculo",
                            "date": "15/03/21",
                            "aHref": "https://youtu.be/31E4pTPHosw"
                        },
                        "theaterMode": {
                            "iframe": "31E4pTPHosw"
                        }
                    }
                },
                {
                    "card": {
                        "id": 5,
                        "cardHeader": {
                            "title": "Limites e Continuidade (Continuação) - Aula 5"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/calculo/aula5.jpg",
                            "imgAlt": "Cálculo",
                            "date": "17/03/21",
                            "aHref": "https://youtu.be/pbwu_hqd-DI"
                        },
                        "theaterMode": {
                            "iframe": "pbwu_hqd-DI"
                        }
                    }
                }
            ]
        },
        {
            "fisica": [
                {
                    "card": {
                        "id": 1,
                        "cardHeader": {
                            "title": "Leis de Newton - Aula 1"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/fisica/aula1.jpg",
                            "imgAlt": "Física",
                            "date": "22/03/21",
                            "aHref": "https://youtu.be/42Li6ZkcYMY"
                        },
                        "theaterMode": {
                            "iframe": "42Li6ZkcYMY"
                        }
                    }
                },
                {
                    "card": {
                        "id": 2,
                        "cardHeader": {
                            "title": "Forças de atrito - Aula 2"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/fisica/aula2.jpg",
                            "imgAlt": "Física",
                            "date": "24/03/21",
                            "aHref": "https://youtu.be/yqEH1Np6gBQ"
                        },
                        "theaterMode": {
                            "iframe": "yqEH1Np6gBQ"
                        }
                    }
                },
                {
                    "card": {
                        "id": 3,
                        "cardHeader": {
                            "title": "Resolvendo exercícios - Aula 3"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/fisica/aula3.jpg",
                            "imgAlt": "Física",
                            "date": "05/04/21",
                            "aHref": "https://youtu.be/tMA9oppbMsQ"
                        },
                        "theaterMode": {
                            "iframe": "tMA9oppbMsQ"
                        }
                    }
                },
                {
                    "card": {
                        "id": 4,
                        "cardHeader": {
                            "title": "Energia cinética e trabalho - Aula 4"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/fisica/aula4.jpg",
                            "imgAlt": "Física",
                            "date": "12/04/21",
                            "aHref": "https://youtu.be/o5fpRGZ9rAw"
                        },
                        "theaterMode": {
                            "iframe": "o5fpRGZ9rAw"
                        }
                    }
                }
            ]
        },
        {
            "vetorial": [
                {
                    "card": {
                        "id": 1,
                        "cardHeader": {
                            "title": "Vetores - <br> Aula 1"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/vetorial/aula1.jpg",
                            "imgAlt": "Vetorial",
                            "date": "09/03/21",
                            "aHref": "https://youtu.be/1HY_Y1Ujyyg"
                        },
                        "theaterMode": {
                            "iframe": "1HY_Y1Ujyyg"
                        }
                    }
                },
                {
                    "card": {
                        "id": 2,
                        "cardHeader": {
                            "title": "Dependência linear de vetores - <br> Aula 2"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/vetorial/aula2.jpg",
                            "imgAlt": "Vetorial",
                            "date": "11/03/21",
                            "aHref": "https://youtu.be/ZBttbOHR90w"
                        },
                        "theaterMode": {
                            "iframe": "ZBttbOHR90w"
                        }
                    }
                },
                {
                    "card": {
                        "id": 3,
                        "cardHeader": {
                            "title": "Base para o espaço e coordenadas de vetores numa base - Aula 3"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/vetorial/aula3.jpg",
                            "imgAlt": "Vetorial",
                            "date": "16/03/21",
                            "aHref": "https://youtu.be/ts9yIp8WOOQ"
                        },
                        "theaterMode": {
                            "iframe": "ts9yIp8WOOQ"
                        }
                    }
                },
                {
                    "card": {
                        "id": 4,
                        "cardHeader": {
                            "title": "Exercícios de base e resolução de sistemas - Aula 4"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/vetorial/aula4.jpg",
                            "imgAlt": "Vetorial",
                            "date": "18/03/21",
                            "aHref": "https://youtu.be/IrPx-rIiiBQ"
                        },
                        "theaterMode": {
                            "iframe": "IrPx-rIiiBQ"
                        }
                    }
                },
                {
                    "card": {
                        "id": 5,
                        "cardHeader": {
                            "title": "Produto de vetores - Aula 5"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/vetorial/aula5.jpg",
                            "imgAlt": "Vetorial",
                            "date": "23/03/21",
                            "aHref": "https://youtu.be/Xj0jhA0H3ow"
                        },
                        "theaterMode": {
                            "iframe": "Xj0jhA0H3ow"
                        }
                    }
                },
                {
                    "card": {
                        "id": 6,
                        "cardHeader": {
                            "title": "Aula de exercícios - Aula 6"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/vetorial/aula6.jpg",
                            "imgAlt": "Vetorial",
                            "date": "25/03/21",
                            "aHref": "https://youtu.be/M7APg1l986s"
                        },
                        "theaterMode": {
                            "iframe": "M7APg1l986s"
                        }
                    }
                },
                {
                    "card": {
                        "id": 7,
                        "cardHeader": {
                            "title": "Resumão da monitoria #ficatranquilo"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/vetorial/resumo1.jpg",
                            "imgAlt": "Vetorial",
                            "date": "09/04/21",
                            "aHref": "https://youtu.be/7HB-vQJ7oM4"
                        },
                        "theaterMode": {
                            "iframe": "7HB-vQJ7oM4"
                        }
                    }
                }
            ]
        },
        {
            "introProg": [
                {
                    "card": {
                        "id": 1,
                        "cardHeader": {
                            "title": "O Computador - Aula 1"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introProg/aula1.jpg",
                            "imgAlt": "Introdução a Programação",
                            "date": "11/03/21",
                            "aHref": "https://youtu.be/LFu_zqqtvbE"
                        },
                        "theaterMode": {
                            "iframe": "LFu_zqqtvbE"
                        }
                    }
                },
                {
                    "card": {
                        "id": 2,
                        "cardHeader": {
                            "title": "Algoritmos - Aula 2"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introProg/aula2.jpg",
                            "imgAlt": "Introdução a Programação",
                            "date": "16/03/21",
                            "aHref": "https://youtu.be/4wI_sOpKauk"
                        },
                        "theaterMode": {
                            "iframe": "4wI_sOpKauk"
                        }
                    }
                },
                {
                    "card": {
                        "id": 3,
                        "cardHeader": {
                            "title": "Começando a programar: usando a memória e E/S - Aula 3"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introProg/aula3.jpg",
                            "imgAlt": "Introdução a Programação",
                            "date": "23/03/21",
                            "aHref": "https://youtu.be/LambNMJJck4"
                        },
                        "theaterMode": {
                            "iframe": "LambNMJJck4"
                        }
                    }
                },
                {
                    "card": {
                        "id": 4,
                        "cardHeader": {
                            "title": "Estruturas de controle: desvio condicional - Aula 4"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introProg/aula4.jpg",
                            "imgAlt": "Introdução a Programação",
                            "date": "25/03/21",
                            "aHref": "https://youtu.be/DcWGyOFANyM"
                        },
                        "theaterMode": {
                            "iframe": "DcWGyOFANyM"
                        }
                    }
                },
                {
                    "card": {
                        "id": 5,
                        "cardHeader": {
                            "title": "Estruturas de controle: repetições - Aula 5"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introProg/aula5.jpg",
                            "imgAlt": "Introdução a Programação",
                            "date": "06/04/21",
                            "aHref": "https://youtu.be/AuUzEIIX8zs"
                        },
                        "theaterMode": {
                            "iframe": "AuUzEIIX8zs"
                        }
                    }
                },
                {
                    "card": {
                        "id": 6,
                        "cardHeader": {
                            "title": "Arrays - Aula 6"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introProg/aula6.jpg",
                            "imgAlt": "Introdução a Programação",
                            "date": "08/04/21",
                            "aHref": "https://youtu.be/-HPEgmwRZZY"
                        },
                        "theaterMode": {
                            "iframe": "-HPEgmwRZZY"
                        }
                    }
                }
            ]
        },
        {
            "introComp": [
                {
                    "card": {
                        "id": 1,
                        "cardHeader": {
                            "title": "Arquitetura Básica de um Computador (Parte 1) - Aula 1"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introComp/aula1.jpg",
                            "imgAlt": "Introdução ao Computador",
                            "date": "11/03/21",
                            "aHref": "https://youtu.be/HEkGTFp8_G8"
                        },
                        "theaterMode": {
                            "iframe": "HEkGTFp8_G8"
                        }
                    }
                },
                {
                    "card": {
                        "id": 2,
                        "cardHeader": {
                            "title": "Arquitetura Básica de um Computador | Processador - Aula 2"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introComp/aula2.jpg",
                            "imgAlt": "Introdução ao Computador",
                            "date": "16/03/21",
                            "aHref": "https://youtu.be/wee2mCtT45g"
                        },
                        "theaterMode": {
                            "iframe": "wee2mCtT45g"
                        }
                    }
                },
                {
                    "card": {
                        "id": 3,
                        "cardHeader": {
                            "title": "Arquitetura Básica de um Computador - Aula 3"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introComp/aula3.jpg",
                            "imgAlt": "Introdução ao Computador",
                            "date": "23/03/21",
                            "aHref": "https://youtu.be/lZJ1X_1QWzI"
                        },
                        "theaterMode": {
                            "iframe": "lZJ1X_1QWzI"
                        }
                    }
                },
                {
                    "card": {
                        "id": 4,
                        "cardHeader": {
                            "title": "Arquitetura Básica de um Computador - Aula 4"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introComp/aula4.jpg",
                            "imgAlt": "Introdução ao Computador",
                            "date": "25/03/21",
                            "aHref": "https://youtu.be/IhZA6woCZ1M"
                        },
                        "theaterMode": {
                            "iframe": "IhZA6woCZ1M"
                        }
                    }
                },
                {
                    "card": {
                        "id": 5,
                        "cardHeader": {
                            "title": "Arquitetura Básica de um Computador | Memórias - Aula 5"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introComp/aula5.jpg",
                            "imgAlt": "Introdução ao Computador",
                            "date": "06/04/21",
                            "aHref": "https://youtu.be/LALCQWHNpHA"
                        },
                        "theaterMode": {
                            "iframe": "LALCQWHNpHA"
                        }
                    }
                },
                {
                    "card": {
                        "id": 6,
                        "cardHeader": {
                            "title": "Primeiro exame e Arquitetura Básica de um Computador - Aula 6"
                        },
                        "cardBody": {
                            "imgSrc": "/public/images/thumbl/introComp/aula6.jpg",
                            "imgAlt": "Introdução ao Computador",
                            "date": "08/04/21",
                            "aHref": "https://youtu.be/rlC9AQbdjSo"
                        },
                        "theaterMode": {
                            "iframe": "rlC9AQbdjSo"
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