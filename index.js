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
                            title: "Olá"
                        },
                        cardBody: {
                            imgSrc: "link",
                            imgAlt: "name",
                            date: "00/00/00",
                            aHref: "link"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Olá2"
                        },
                        cardBody: {
                            imgSrc: "link",
                            imgAlt: "name",
                            date: "00/00/00",
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
                            title: "Olá"
                        },
                        cardBody: {
                            imgSrc: "link",
                            imgAlt: "name",
                            date: "00/00/00",
                            aHref: "link"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Olá2"
                        },
                        cardBody: {
                            imgSrc: "link",
                            imgAlt: "name",
                            date: "00/00/00",
                            aHref: "link"
                        }
                    }
                }
                //-----------------------------------------------------
            ]
        },
        {
            introProg:[
                {
                    card:{
                        cardHeader:{
                            title: "Olá"
                        },
                        cardBody: {
                            imgSrc: "link",
                            imgAlt: "name",
                            date: "00/00/00",
                            aHref: "link"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Olá2"
                        },
                        cardBody: {
                            imgSrc: "link",
                            imgAlt: "name",
                            date: "00/00/00",
                            aHref: "link"
                        }
                    }
                }
                //-----------------------------------------------------
            ]
        },
        {
            introComp:[
                {
                    card:{
                        cardHeader:{
                            title: "Olá"
                        },
                        cardBody: {
                            imgSrc: "link",
                            imgAlt: "name",
                            date: "00/00/00",
                            aHref: "link"
                        }
                    }
                },
                //------------------------------------------------
                {
                    card:{
                        cardHeader:{
                            title: "Olá2"
                        },
                        cardBody: {
                            imgSrc: "link",
                            imgAlt: "name",
                            date: "00/00/00",
                            aHref: "link"
                        }
                    }
                }
                //-----------------------------------------------------
            ]
        }
    ])
})


app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});