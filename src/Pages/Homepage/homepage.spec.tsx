import { render, screen, waitFor } from "@testing-library/react"
import { Homepage } from "."
import { MemoryRouter } from "react-router-dom"

const mockResponse = {
    page: 1,
    results: [
        {
            adult: false,
            backdrop_path: "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
            genre_ids: [
                18,
                80
            ],
            id: 278,
            original_language: "en",
            original_title: "The Shawshank Redemption",
            overview: "Em 1946, Andy Dufresne, um banqueiro jovem e bem sucedido, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela. Ele é mandado para uma prisão que é o pesadelo de qualquer detento, a Penitenciária Estadual de Shawshank, no Maine. Lá ele irá cumprir a pena perpétua. Andy logo será apresentado a Warden Norton, o corrupto e cruel agente penitenciário, que usa a Bíblia como arma de controle e ao Capitão Byron Hadley que trata os internos como animais. Andy faz amizade com Ellis Boyd Redding, um prisioneiro que cumpre pena há 20 anos e controla o mercado negro da instituição.",
            popularity: 36.201,
            poster_path: "/xSnM4ahmz692msbMTBsfBWHvR3M.jpg",
            release_date: "1994-09-23",
            title: "Um Sonho de Liberdade",
            video: false,
            vote_average: 8.708,
            vote_count: 28010
        },
        {
            adult: false,
            backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
            genre_ids: [
                18,
                80
            ],
            id: 238,
            original_language: "en",
            original_title: "The Godfather",
            overview: "Em 1945, Don Corleone é o chefe de uma mafiosa família italiana de Nova York. Ele costuma apadrinhar várias pessoas, realizando importantes favores para elas, em troca de favores futuros. Com a chegada das drogas, as famílias começam uma disputa pelo promissor mercado. Quando Corleone se recusa a facilitar a entrada dos narcóticos na cidade, não oferecendo ajuda política e policial, sua família começa a sofrer atentados para que mudem de posição. É nessa complicada época que Michael, um herói de guerra nunca envolvido nos negócios da família, vê a necessidade de proteger o seu pai e tudo o que ele construiu ao longo dos anos.",
            popularity: 38.6438,
            poster_path: "/uP46DujkD3nwcisOjz9a0Xw0Knj.jpg",
            release_date: "1972-03-14",
            title: "O Poderoso Chefão",
            video: false,
            vote_average: 8.688,
            vote_count: 21228
        },
        {
            adult: false,
            backdrop_path: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
            genre_ids: [
                18,
                80
            ],
            id: 240,
            original_language: "en",
            original_title: "The Godfather Part II",
            overview: "Após a máfia matar sua família, o jovem Vito foge da sua cidade na Sicília e vai para a América. Vito luta para manter sua família. Ele mata Black Hand Fanucci, que exigia dos comerciantes uma parte dos seus ganhos. Com a morte de Fanucci, o poderio de Vito cresce, mas sua família é o que mais importa para ele. Agora baseado no Lago Tahoe, Michael planeja fazer incursões em Las Vegas e Havana instalando negócios ligados ao lazer, mas descobre que aliados como Hyman Roth estão tentando matá-lo.",
            popularity: 17.7084,
            poster_path: "/7g6wvsWHxBQujUcSXvZLhdFpDUy.jpg",
            release_date: "1974-12-20",
            title: "O Poderoso Chefão: Parte II",
            video: false,
            vote_average: 8.569,
            vote_count: 12822
        },
        {
            adult: false,
            backdrop_path: "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
            genre_ids: [
                18,
                36,
                10752
            ],
            id: 424,
            original_language: "en",
            original_title: "Schindler's List",
            overview: "O alemão Oskar Schindler viu na mão de obra judia uma solução barata e viável para lucrar com negócios durante a guerra. Com sua forte influência dentro do partido nazista, foi fácil conseguir as autorizações e abrir uma fábrica. O que poderia parecer uma atitude de um homem não muito bondoso, transformou-se em um dos maiores casos de amor à vida da História, pois este alemão abdicou de toda sua fortuna para salvar a vida de mais de mil judeus em plena luta contra o extermínio alemão.",
            popularity: 20.2365,
            poster_path: "/bGhhNzJYDsuLruNN5bJ2PvLcMiq.jpg",
            release_date: "1993-12-15",
            title: "A Lista de Schindler",
            video: false,
            vote_average: 8.566,
            vote_count: 16290
        },
        {
            adult: false,
            backdrop_path: "/bxgTSUenZDHNFerQ1whRKplrMKF.jpg",
            genre_ids: [
                18
            ],
            id: 389,
            original_language: "en",
            original_title: "12 Angry Men",
            overview: "Um jovem porto-riquenho é acusado do brutal crime de ter matado o próprio pai. Quando ele vai a julgamento, doze jurados se reúnem para decidir a sentença, levando em conta que o réu deve ser considerado inocente até que se prove o contrário. Onze dos jurados têm plena certeza de que ele é culpado, e votam pela condenação, mas um jurado acha que é melhor investigar mais para que a sentença seja correta. Para isso ele terá que enfrentar diferentes interpretações dos fatos, e a má vontade dos outros jurados, que só querem ir logo para suas casas.",
            popularity: 11.5659,
            poster_path: "/q8RGf4SbVCObCySZ4PIGsn5wFm6.jpg",
            release_date: "1957-04-10",
            title: "12 Homens e uma Sentença",
            video: false,
            vote_average: 8.6,
            vote_count: 9015
        },
        {
            adult: false,
            backdrop_path: "/6oaL4DP75yABrd5EbC4H2zq5ghc.jpg",
            genre_ids: [
                16,
                10751,
                14
            ],
            id: 129,
            original_language: "ja",
            original_title: "千と千尋の神隠し",
            overview: "Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los",
            popularity: 25.1504,
            poster_path: "/hhoKhsyJ3hFaxEm5pMdZRiTu2lJ.jpg",
            release_date: "2001-07-20",
            title: "A Viagem de Chihiro",
            video: false,
            vote_average: 8.5,
            vote_count: 16955
        },
        {
            adult: false,
            backdrop_path: "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
            genre_ids: [
                35,
                18,
                10749
            ],
            id: 19404,
            original_language: "hi",
            original_title: "दिलवाले दुल्हनिया ले जायेंगे",
            overview: "Raj e Simran são dois jovens indianos vivendo em Londres que, acidentalmente, se conhecem durante uma viagem pela Europa. Eles se apaixonam, mas Simran está prometida a um indiano. Raj não desanima e segue seu amor até a Índia, onde os dois tentam convencer a todos que precisam ficar juntos.",
            popularity: 5.8792,
            poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            release_date: "1995-10-20",
            title: "Dilwale vai levar a noiva",
            video: false,
            vote_average: 8.519,
            vote_count: 4471
        },
        {
            adult: false,
            backdrop_path: "/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg",
            genre_ids: [
                18,
                28,
                80,
                53
            ],
            id: 155,
            original_language: "en",
            original_title: "The Dark Knight",
            overview: "Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.",
            popularity: 29.269,
            poster_path: "/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
            release_date: "2008-07-16",
            title: "Batman: O Cavaleiro das Trevas",
            video: false,
            vote_average: 8.5,
            vote_count: 33629
        },
        {
            adult: false,
            backdrop_path: "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
            genre_ids: [
                14,
                18,
                80
            ],
            id: 497,
            original_language: "en",
            original_title: "The Green Mile",
            overview: "Milagres acontecem em lugares inesperados, mesmo no bloco de celas para o corredor da morte na Penitenciária Cold Mountain. Lá, John Coffey, um gentil e gigante prisioneiro com poderes sobrenaturais, traz um senso de espírito e humanidade aos seus guardas e colegas de cela.",
            popularity: 18.0707,
            poster_path: "/14hEqW67IiHlKpzKMLUXyktzZIV.jpg",
            release_date: "1999-12-10",
            title: "À Espera de um Milagre",
            video: false,
            vote_average: 8.504,
            vote_count: 17959
        },
        {
            adult: false,
            backdrop_path: "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
            genre_ids: [
                35,
                53,
                18
            ],
            id: 496243,
            original_language: "ko",
            original_title: "기생충",
            overview: "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família glamorosa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
            popularity: 25.062,
            poster_path: "/bik2BZjmVjeE6LOZqtuTjb4jJPQ.jpg",
            release_date: "2019-05-30",
            title: "Parasita",
            video: false,
            vote_average: 8.501,
            vote_count: 18868
        },
        {
            adult: false,
            backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
            genre_ids: [
                53,
                80
            ],
            id: 680,
            original_language: "en",
            original_title: "Pulp Fiction",
            overview: "Vincent Vega e Jules Winnfield são dois assassinos profissionais que trabalham fazendo cobranças para Marsellus Wallace, um poderosos gângster. Vega é forçado a sair com a garota do chefe, temendo passar dos limites. Enquanto isso, o pugilista Butch Coolidge se mete em apuros por ganhar uma luta que deveria perder.",
            popularity: 21.7358,
            poster_path: "/tptjnB2LDbuUWya9Cx5sQtv5hqb.jpg",
            release_date: "1994-09-10",
            title: "Pulp Fiction: Tempo de Violência",
            video: false,
            vote_average: 8.489,
            vote_count: 28496
        },
        {
            adult: false,
            backdrop_path: "/8x9iKH8kWA0zdkgNdpAew7OstYe.jpg",
            genre_ids: [
                16,
                10749,
                18
            ],
            id: 372058,
            original_language: "ja",
            original_title: "君の名は。",
            overview: "Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos.",
            popularity: 18.3307,
            poster_path: "/bMOKAjTU1TNUjRSF7icldbii06u.jpg",
            release_date: "2016-08-26",
            title: "Your Name",
            video: false,
            vote_average: 8.484,
            vote_count: 11677
        },
        {
            adult: false,
            backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
            genre_ids: [
                12,
                14,
                28
            ],
            id: 122,
            original_language: "en",
            original_title: "The Lord of the Rings: The Return of the King",
            overview: "O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.",
            popularity: 29.9968,
            poster_path: "/egSO4klmc9pnI1CNnHoYKV70XKI.jpg",
            release_date: "2003-12-17",
            title: "O Senhor dos Anéis: O Retorno do Rei",
            video: false,
            vote_average: 8.482,
            vote_count: 24896
        },
        {
            adult: false,
            backdrop_path: "/mzfx54nfDPTUXZOG48u4LaEheDy.jpg",
            genre_ids: [
                35,
                18,
                10749
            ],
            id: 13,
            original_language: "en",
            original_title: "Forrest Gump",
            overview: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump, um rapaz com QI abaixo da média e com boas intenções. Por obra do acaso, ele consegue participar de momentos cruciais, como a Guerra do Vietnã e o Caso Watergate, mas continua pensando no seu amor de infância, Jenny Curran.",
            popularity: 21.2787,
            poster_path: "/d74WpIsH8379TIL4wUxDneRCYv2.jpg",
            release_date: "1994-06-23",
            title: "Forrest Gump: O Contador de Histórias",
            video: false,
            vote_average: 8.467,
            vote_count: 28027
        },
        {
            adult: false,
            backdrop_path: "/x4biAVdPVCghBlsVIzB6NmbghIz.jpg",
            genre_ids: [
                37
            ],
            id: 429,
            original_language: "it",
            original_title: "Il buono, il brutto, il cattivo",
            overview: "Durante o auge da Guerra Civil, um misterioso pistoleiro vaga pela fronteira do oeste. Ele não possui um lar, lealdade ou companhia... Até que encontra dois estrangeiros, que são tão brutos e desapegados quanto ele. Unidos pelo destino, os três homens juntam suas forças para tentar encontrar uma fortuna em ouro roubado. Mas trabalho em equipe não é uma coisa natural para voluntariosos pistoleiros, e eles logo descobrem que seu maior desafio é concentrar-se em sua perigosa missão — e em manterem-se vivos — atravessando um país arrasado pela guerra.",
            popularity: 13.9902,
            poster_path: "/bHwIzQrbJKiFwArLLngS1Ej6xPc.jpg",
            release_date: "1966-12-22",
            title: "Três Homens em Conflito",
            video: false,
            vote_average: 8.462,
            vote_count: 8896
        },
        {
            adult: false,
            backdrop_path: "/7TF4p86ZafnxFuNqWdhpHXFO244.jpg",
            genre_ids: [
                18,
                80
            ],
            id: 769,
            original_language: "en",
            original_title: "GoodFellas",
            overview: "A história real de Henry Hill, um garoto meio irlandês e meio siciliano do Brooklyn que é adotado por gangsters do bairro ainda jovem e sobe na hierarquia de uma família da máfia sob a orientação de Jimmy Conway.",
            popularity: 15.9619,
            poster_path: "/lanYBnyCcqkaFqz66B8PrBRCtCW.jpg",
            release_date: "1990-09-12",
            title: "Os Bons Companheiros",
            video: false,
            vote_average: 8.5,
            vote_count: 13232
        },
        {
            adult: false,
            backdrop_path: "/sJNNMCc6B7KZIY3LH3JMYJJNH5j.jpg",
            genre_ids: [
                28,
                18
            ],
            id: 346,
            original_language: "ja",
            original_title: "七人の侍",
            overview: "Um bando de bandidos aterroriza os habitantes de uma pequena cidade, saqueando-os periodicamente sem piedade. Para repelir estes ataques, os aldeões decidem contratar mercenários. Por fim, obtêm os serviços de 7 guerreiros, 7 samurais dispostos a defendê-los em troca apenas de abrigo e comida.",
            popularity: 7.0223,
            poster_path: "/telXEMxGtJvffm5JDsx1rQzwWlf.jpg",
            release_date: "1954-04-26",
            title: "Os Sete Samurais",
            video: false,
            vote_average: 8.5,
            vote_count: 3845
        },
        {
            adult: false,
            backdrop_path: "/8sNiAPPYU14PUepFNeSNGUTiHW.jpg",
            genre_ids: [
                12,
                18,
                878
            ],
            id: 157336,
            original_language: "en",
            original_title: "Interstellar",
            overview: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
            popularity: 45.0875,
            poster_path: "/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
            release_date: "2014-11-05",
            title: "Interestelar",
            video: false,
            vote_average: 8.453,
            vote_count: 36828
        },
        {
            adult: false,
            backdrop_path: "/tDFvXn4tane9lUvFAFAUkMylwSr.jpg",
            genre_ids: [
                16,
                18,
                10752
            ],
            id: 12477,
            original_language: "ja",
            original_title: "火垂るの墓",
            overview: "O filme relata a história de dois irmãos, Seita e Setsuko, no período da Segunda Guerra Mundial no Japão. O pai deles é convocado para defender o país na guerra, pois faz parte da marinha japonesa e a mãe falece em um bombardeio de aviões norte-americanos. A partir daí, o filme mostra a luta pela sobrevivência das duas crianças em meio à pobreza e miséria que assola o país. Fome, doenças e a falta de generosidade e sensibilidade dos adultos faz deste percurso um dos filmes mais bonitos e comoventes sobre o trágico quadro gerado pela guerra.",
            popularity: 0.0121,
            poster_path: "/kHFUyxNJfhMkKk1FwrNHd62KTEs.jpg",
            release_date: "1988-04-16",
            title: "O Túmulo dos Vagalumes",
            video: false,
            vote_average: 8.4,
            vote_count: 5808
        },
        {
            adult: false,
            backdrop_path: "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
            genre_ids: [
                35,
                18
            ],
            id: 637,
            original_language: "it",
            original_title: "La vita è bella",
            overview: "Durante a Segunda Guerra Mundial na Itália, o judeu Guido e seu filho Giosué são levados para um campo de concentração nazista. Afastado da mulher, ele tem que usar sua imaginação para fazer o menino acreditar que estão participando de uma grande brincadeira, com o intuito de protegê-lo do terror e da violência que os cercam.",
            popularity: 8.9532,
            poster_path: "/mdqU2CHabmbdkWKs1IvCfksbtNM.jpg",
            release_date: "1997-12-20",
            title: "A Vida é Bela",
            video: false,
            vote_average: 8.4,
            vote_count: 13268
        }
    ],
    total_pages: 504,
    total_results: 10066
}

describe('Homepage', () => {
    it('should have the title "Melhores filmes:"', async () => {
        render(
            <Homepage />
        );

        const title = await screen.findByRole('heading', {
            name: 'Melhores filmes:'
        });

        expect(title).toBeInTheDocument();
    })

    it('should show the 20 top rated movies list if the request is successful', async () => {
        global.fetch = vi.fn().mockImplementation(() => Promise.resolve({
            json: vi.fn().mockImplementation(() => Promise.resolve(mockResponse))
        }))

        render(
            <MemoryRouter>
                <Homepage />
            </MemoryRouter>
        );

        const movieList = await screen.findByRole('list');
        await waitFor(async () => {
            expect(movieList.children.length).toBe(20);
        })
    })

    it('should not display anything if the request fails', async () => {
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));

        render(
            <MemoryRouter>
                <Homepage />
            </MemoryRouter>
        );


        const movieList = await screen.findByRole('list')
        expect(movieList.children.length).toBe(0);

    })
})