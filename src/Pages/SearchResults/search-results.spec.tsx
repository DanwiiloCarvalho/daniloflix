import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchResults } from ".";

const mockResponse = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/frDS8A5vIP927KYAxTVVKRIbqZw.jpg",
            "genre_ids": [
                14,
                28,
                80
            ],
            "id": 268,
            "original_language": "en",
            "original_title": "Batman",
            "overview": "Em Gotham City o milionário Bruce Wayne, que quando jovem teve os pais assassinados por bandidos, resolve combater o crime como Batman, o Homem-Morcego. Mas chega o dia em que o vilão Coringa decide dominar a cidade e se torna um grande desafio para o super-herói.",
            "popularity": 7.2564,
            "poster_path": "/1aadn0aD7h1VKq4yap2uKl7cTSL.jpg",
            "release_date": "1989-06-21",
            "title": "Batman",
            "video": false,
            "vote_average": 7.23,
            "vote_count": 8001
        },
        {
            "adult": false,
            "backdrop_path": "/bHxJA9rllKF2jhb11ARAwZJYSp6.jpg",
            "genre_ids": [
                28,
                12,
                80,
                878,
                53,
                10752
            ],
            "id": 125249,
            "original_language": "en",
            "original_title": "Batman",
            "overview": "Em Gotham City, Batman (Lewis Wilson) luta contra Dr. Daka (J. Carrol Naish), um japonês mentor de um grupo de espionagem que sabota instituições. Daka tem um aparelho que pulveriza uma radiação mortal, tendo assim, muita facilidade de destruir seus inimigos, além de poder recrutar homens, fazer uma lavagem cerebral neles e transformá-los em seus servos. Batman precisa usar todo o seu poder de morcego para enfrentar este inimigo.",
            "popularity": 1.0854,
            "poster_path": "/AvzD3mrtokIzZOiV6zAG7geIo6F.jpg",
            "release_date": "1943-07-16",
            "title": "O Morcego (Batman)",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 109
        },
        {
            "adult": false,
            "backdrop_path": "/e807jDKiFcntZS32ze88X6I96OD.jpg",
            "genre_ids": [
                16,
                28
            ],
            "id": 1297763,
            "original_language": "ja",
            "original_title": "ニンジャバットマン対ヤクザリーグ",
            "overview": "Nesta continuação de Batman Ninja, a Família Batman volta ao presente e descobre que o Japão desapareceu, e agora uma ilha gigante chamada “Hinomoto” flutua nos céus de Gotham City. No topo estão os Yakuza, um grupo de indivíduos superpoderosos que reinam sem honra ou humanidade e se parecem estranhamente com a Liga da Justiça. Agora, cabe a Batman e seus aliados salvar Gotham!",
            "popularity": 175.1912,
            "poster_path": "/E0Kfd0UsphezvdhLVNtOTXzOLT.jpg",
            "release_date": "2025-03-17",
            "title": "Batman Ninja vs. Liga da Yakuza",
            "video": false,
            "vote_average": 6.811,
            "vote_count": 95
        },
        {
            "adult": false,
            "backdrop_path": "/nOWOU0bdX76iF9XA1YPlInLbI4Y.jpg",
            "genre_ids": [
                28,
                35,
                80
            ],
            "id": 2661,
            "original_language": "en",
            "original_title": "Batman",
            "overview": "Em Gotham City, Charada, Pinguim, Coringa e Mulher-Gato roubam uma invenção secreta e planejam usá-la de forma maléfica. Além disto, planejam também destruir o Homem-Morcego e o Menino-Prodígio.",
            "popularity": 1.8669,
            "poster_path": "/ocfATpIo0O4JYaDc5jpyePPG87k.jpg",
            "release_date": "1966-07-30",
            "title": "Batman: O Homem Morcego",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 971
        },
        {
            "adult": false,
            "backdrop_path": "/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg",
            "genre_ids": [
                18,
                28,
                80,
                53
            ],
            "id": 155,
            "original_language": "en",
            "original_title": "The Dark Knight",
            "overview": "Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.",
            "popularity": 29.269,
            "poster_path": "/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
            "release_date": "2008-07-16",
            "title": "Batman: O Cavaleiro das Trevas",
            "video": false,
            "vote_average": 8.519,
            "vote_count": 33631
        },
        {
            "adult": false,
            "backdrop_path": "/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg",
            "genre_ids": [
                28,
                12,
                14
            ],
            "id": 209112,
            "original_language": "en",
            "original_title": "Batman v Superman: Dawn of Justice",
            "overview": "Temendo que as ações de um super-herói divino não tenham sido controladas, o formidável e vigoroso vigilante de Gotham City enfrenta o salvador mais reverenciado e moderno de Metrópolis, enquanto o mundo luta com o tipo de herói que realmente precisa. E com Batman e Superman em guerra um contra o outro, uma nova ameaça rapidamente surge, colocando a humanidade em maior perigo do que nunca antes.",
            "popularity": 12.1547,
            "poster_path": "/f43gE7oFn3nCUZX3FRw0jVQK8GK.jpg",
            "release_date": "2016-03-23",
            "title": "Batman vs Superman: A Origem da Justiça",
            "video": false,
            "vote_average": 5.976,
            "vote_count": 18187
        },
        {
            "adult": false,
            "backdrop_path": "/mo1eLCJTp5JGGz2tKlW98KXpRo0.jpg",
            "genre_ids": [
                16,
                28,
                35,
                10751
            ],
            "id": 324849,
            "original_language": "en",
            "original_title": "The Lego Batman Movie",
            "overview": "No spin-off de Uma Aventura Lego, Batman (Will Arnett) descobre que adotou acidentalmente um garoto órfão. Ele se torna ninguém menos que seu ajudante Robin (Michael Cera). A dupla formada pelo arrogante Homem-Morcego e o seu empolgado ajudante deve combater o crime e prender o Coringa (Zach Galifianakis).",
            "popularity": 4.2192,
            "poster_path": "/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg",
            "release_date": "2017-02-08",
            "title": "Lego Batman: O Filme",
            "video": false,
            "vote_average": 7.225,
            "vote_count": 5084
        },
        {
            "adult": false,
            "backdrop_path": "/snlu32RmjldF9b068UURJg8sQtn.jpg",
            "genre_ids": [
                28,
                80,
                14
            ],
            "id": 414,
            "original_language": "en",
            "original_title": "Batman Forever",
            "overview": "Duas-Caras e Charada, dois excêntricos bandidos, decidem descobrir a identidade do Homem-Morcego para depois matá-lo. Este por sua vez recebe a ajuda de um jovem que tem sede de vingança, por ter perdido a família em um acidente provocado exatamente pelo Duas-Caras.",
            "popularity": 4.475,
            "poster_path": "/tEwd28NegRgXmZdiEJeVrclYZfX.jpg",
            "release_date": "1995-06-16",
            "title": "Batman Eternamente",
            "video": false,
            "vote_average": 5.437,
            "vote_count": 5243
        },
        {
            "adult": false,
            "backdrop_path": "/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg",
            "genre_ids": [
                80,
                9648,
                53
            ],
            "id": 414906,
            "original_language": "en",
            "original_title": "The Batman",
            "overview": "Em seu segundo ano de combate ao crime, Batman descobre corrupção em Gotham City que se conecta à sua própria família enquanto enfrenta um serial killer conhecido como Charada.",
            "popularity": 18.8743,
            "poster_path": "/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg",
            "release_date": "2022-03-01",
            "title": "Batman",
            "video": false,
            "vote_average": 7.655,
            "vote_count": 10772
        },
        {
            "adult": false,
            "backdrop_path": "/sreACNpiCB8SxGVINQR5mY3Y4tp.jpg",
            "genre_ids": [
                16,
                10751,
                28,
                35
            ],
            "id": 602307,
            "original_language": "en",
            "original_title": "LEGO DC Batman: Family Matters",
            "overview": "Em LEGO DC: Batman - Family Matters, a suspeita está em alta depois que Batman, Batgirl, Robin e outros super-heróis da DC recebem convites misteriosos. No entanto, os valores da família devem permanecer fortes quando Batman e sua equipe encontram o vilão Red Hood, que é obcecado em destruir a família Bat e toda Gotham City.",
            "popularity": 1.2524,
            "poster_path": "/9lhrNJdqMV9nPwML00bUlr4AMxm.jpg",
            "release_date": "2019-07-21",
            "title": "Lego DC Batman: Assunto de Família",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 148
        },
        {
            "adult": false,
            "backdrop_path": "/zRJqGtOGS6PRYdEtH69XQmIlQQc.jpg",
            "genre_ids": [
                28,
                12,
                16,
                10751,
                35,
                10770
            ],
            "id": 300424,
            "original_language": "en",
            "original_title": "LEGO DC Comics Super Heroes: Batman Be-Leaguered",
            "overview": "Os integrantes da Liga da Justiça começam a desaparecer um a um, e agora só Batman poderá solucionar o mistério e salvar o mundo.",
            "popularity": 0.7624,
            "poster_path": "/7JmTzxQx78PfRKVuQjpG80jjXoM.jpg",
            "release_date": "2014-10-27",
            "title": "LEGO DC Super-Heróis: Batman Bem-Ligado",
            "video": false,
            "vote_average": 6.511,
            "vote_count": 142
        },
        {
            "adult": false,
            "backdrop_path": "/y2DB71C4nyIdMrANijz8mzvQtk6.jpg",
            "genre_ids": [
                28,
                80,
                18,
                53
            ],
            "id": 49026,
            "original_language": "en",
            "original_title": "The Dark Knight Rises",
            "overview": "Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece. As coisas mudam com a chegada de uma ladra misteriosa, a Mulher-Gato, e Bane, um terrorista mascarado, que fazem Batman abandonar seu exílio forçado.",
            "popularity": 14.0545,
            "poster_path": "/w7KDOBOKoZNzZkiKInFBlqo7Cbg.jpg",
            "release_date": "2012-07-17",
            "title": "Batman: O Cavaleiro das Trevas Ressurge",
            "video": false,
            "vote_average": 7.784,
            "vote_count": 23085
        },
        {
            "adult": false,
            "backdrop_path": "/3WP0RObZ2t7ShHfqQpKPljF9B22.jpg",
            "genre_ids": [
                28,
                14
            ],
            "id": 364,
            "original_language": "en",
            "original_title": "Batman Returns",
            "overview": "O monstruoso Pinguim, que vive nos arredores de Gotham, se junta ao diabólico empresário Max Shreck para vencer Batman de uma vez por todas. Porém, a secretária de Shreck, Selina Kyle, descobre os planos e se transforma na irresistível Mulher Gato que se alia na destruição de Batman.",
            "popularity": 6.5688,
            "poster_path": "/trmToqPh8XYS6tzI2Nmv5ctfuSI.jpg",
            "release_date": "1992-06-19",
            "title": "Batman: O Retorno",
            "video": false,
            "vote_average": 6.934,
            "vote_count": 6647
        },
        {
            "adult": false,
            "backdrop_path": "/jYqOnJDPI7QD9cGbE6CwDTp1tID.jpg",
            "genre_ids": [
                16,
                28,
                12
            ],
            "id": 251519,
            "original_language": "en",
            "original_title": "Son of Batman",
            "overview": "Quando Batman descobre que tem um filho, Damian, que é neto de Ra’s Al Ghul, ele decide criar o menino, para evitar que ele se transforme no assassino que estava preparado para ser.",
            "popularity": 2.2477,
            "poster_path": "/oPfc2Q0FZ1QObSLhGq9mAv7L2GV.jpg",
            "release_date": "2014-05-13",
            "title": "O Filho do Batman",
            "video": false,
            "vote_average": 7.049,
            "vote_count": 1073
        },
        {
            "adult": false,
            "backdrop_path": "/efhcb9m2xqrjbRTrPjIgF5l17EI.jpg",
            "genre_ids": [
                28,
                16,
                10770
            ],
            "id": 264170,
            "original_language": "en",
            "original_title": "Batman: Strange Days",
            "overview": "Batman: Strange Days, foi produzido em comemoração ao 75º aniversário do Homem-Morcego.  O curta é descrito como um conto perdido do passado de Batman, onde o Cavaleiro das Trevas segue um gigante estranho ate o covil misterioso do Dr. Hugo Strange. O curta é na verdade baseado na versão mais antiga do Batman, e a história se passa neste período onde o Dr. Hugo Strange foi usado como o vilão.",
            "popularity": 0.5425,
            "poster_path": "/doNcszmSj14ik6owOlGx5Ul9hwC.jpg",
            "release_date": "2014-04-09",
            "title": "Batman: Dias Estranhos",
            "video": false,
            "vote_average": 7.0,
            "vote_count": 104
        },
        {
            "adult": false,
            "backdrop_path": "/bNLLjc6NT80FmFknvHn8demDHhl.jpg",
            "genre_ids": [
                878,
                28,
                16,
                9648
            ],
            "id": 123025,
            "original_language": "en",
            "original_title": "Batman: The Dark Knight Returns, Part 1",
            "overview": "Dez anos se passaram desde que Batman abandonou sua capa, abatido pela morte de Robin. Agora, Gotham City está nas mãos de uma quadrilha de mutantes. Com o apoio de uma jovem que tenta ser como Robin, o herói retorna para combater o mal.",
            "popularity": 3.4208,
            "poster_path": "/sVj31D8aAkF5bZ860Bx9aybYJJh.jpg",
            "release_date": "2012-08-21",
            "title": "Batman: O Cavaleiro das Trevas, Parte 1",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 1626
        },
        {
            "adult": false,
            "backdrop_path": "/qY6paotRMvKbswBwrBRc6al6Rar.jpg",
            "genre_ids": [
                9648,
                80,
                16
            ],
            "id": 40662,
            "original_language": "en",
            "original_title": "Batman: Under the Red Hood",
            "overview": "Batman enfrenta o maior de todos os seus desafios quando o misterioso Capuz Vermelho toma Gotham City  de assalto. Parte vigilante, parte criminoso, o Capuz Vermelho inicialmente limpa as ruas da cidade com a  mesma eficiência do Batman, mas sem seguir o mesmo código de ética do Cavaleiro das Trevas. Para ele,  matar é sempre uma opção. E quando o Coringa fica dividido entre os dois, a dura verdade vem à tona e  velhas feridas são reabertas.",
            "popularity": 2.6542,
            "poster_path": "/1aZNSOI7yoCkx53RTSXat9WyRph.jpg",
            "release_date": "2010-07-27",
            "title": "Batman: Contra o Capuz Vermelho",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 1621
        },
        {
            "adult": false,
            "backdrop_path": "/74H4XXU0q22TSrkPmlqkcWoX5ZZ.jpg",
            "genre_ids": [
                878,
                28,
                12,
                16
            ],
            "id": 45162,
            "original_language": "en",
            "original_title": "Superman/Batman: Apocalypse",
            "overview": "Semanas depois dos eventos que levaram à prisão de Lex Luthor após o Impeachment na presidência dos Estados Unidos, e do sucesso de Batman em salvar o mundo do impacto de um meteoro, uma nave espacial cai na Baía de Gotham City. Estava a bordo uma jovem de aparência adolescente e que manifesta super-poderes idênticos ao do Superman ao ser perseguida por policiais e assustar a população.",
            "popularity": 1.5501,
            "poster_path": "/vZqD8QMXiZh977LipOsXQmaMM7l.jpg",
            "release_date": "2010-09-28",
            "title": "Superman & Batman: Apocalipse",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 711
        },
        {
            "adult": false,
            "backdrop_path": "/7eccX0xay9pDj6ZQvU4cu3whw18.jpg",
            "genre_ids": [
                16,
                14,
                28,
                9648
            ],
            "id": 1003579,
            "original_language": "en",
            "original_title": "Batman: The Doom That Came to Gotham",
            "overview": "Durante uma longa viagem de descoberta, na qual adotou três órfãos pelo mundo, Bruce Wayne encontra o Pinguim no ártico e descobre que um culto planeja a destruição de Gotham City. Agora, ele precisa voltar para casa e vestir o manto do Batman para proteger a cidade onde seus pais foram assassinados por um louco vinte anos antes. Mas será que o herói que acredita na ciência conseguirá manter sua sanidade quando descobrir que não está enfrentando criminosos ou loucos, mas magia antiga, demônios de fogo e deuses antigos interdimensionais?",
            "popularity": 2.2781,
            "poster_path": "/hTQMObXnPjV8Yo90hiC7quSz0U7.jpg",
            "release_date": "2023-03-10",
            "title": "Batman: A Perdição Chegou a Gotham",
            "video": false,
            "vote_average": 6.613,
            "vote_count": 221
        },
        {
            "adult": false,
            "backdrop_path": "/iQJ1gC2p6yn5wnBEklhPaEFJ3n1.jpg",
            "genre_ids": [
                16,
                28,
                878
            ],
            "id": 886396,
            "original_language": "en",
            "original_title": "Batman and Superman: Battle of the Super Sons",
            "overview": "Jonathan Kent e o jovem companheiro relutante Damian Wayne estão encarregados de salvar o mundo da destruição iminente. Os dois devem unir forças para resgatar seus pais e salvar o planeta, tornando-se os super-heróis que deveriam ser.",
            "popularity": 2.4361,
            "poster_path": "/jkJjwFsZeQByufSkoY52SsmxdP0.jpg",
            "release_date": "2022-10-17",
            "title": "Batman e Superman: Batalha dos Super Filhos",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 305
        }
    ],
    "total_pages": 10,
    "total_results": 190
}

describe('SearchResults', () => {

    it('should show the search results if the request is successful', async () => {
        
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockResponse)
        }));

        render(
            <MemoryRouter>
                <SearchResults />
            </MemoryRouter>
        );

        const movieList = await screen.findByRole('list')
        expect(movieList.children.length).toBeGreaterThan(0);
    })

    it('should not display anything if the request fails(API is down)', async () => {

        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));
        render(
            <MemoryRouter>
                <SearchResults />
            </MemoryRouter>
        );

        await expect(fetch).rejects.toThrowError(TypeError);
        await expect(fetch).rejects.toThrow('Failed to fetch');

        const movieList = await screen.findByRole('list')
        expect(movieList.children.length).toBe(0);

    })

    it('should display the message "Nenhum resultado encontrado" if the search term is not found', async () => {
        const mockNotFound = { "page": 1, "results": [], "total_pages": 1, "total_results": 0 }

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockNotFound)
        }));

        render(
            <MemoryRouter>
                <SearchResults />
            </MemoryRouter>
        );

        const message = await screen.findByRole('paragraph');
        expect(message.textContent).toBe('Nenhum resultado encontrado');
    })

    it('should have a button "Ver mais" that expands the search results when it is clicked', async () => {

        vi.stubGlobal('fetch', vi.fn().mockImplementation((url: string) => {
            if (url.includes('page=2')) {
                const results = mockResponse.results.map((movie) => {
                    return {
                        ...movie,
                        id: crypto.randomUUID()
                    }
                })

                return {
                    json: vi.fn().mockResolvedValue({ ...mockResponse, results })
                }
            }
            return {
                json: vi.fn().mockResolvedValue(mockResponse),
            }
        }));

        render(
            <MemoryRouter>
                <SearchResults />
            </MemoryRouter>
        );

        const movieList = await screen.findByRole('list');
        const listLength = movieList.children.length;

        const seeMoreButton = await screen.findByRole('button', {
            name: 'Ver mais',
        });
        expect(seeMoreButton).toBeInTheDocument()

        fireEvent.click(seeMoreButton);

        const expandedMovieList = await screen.findByRole('list');
        const expandedListLength = expandedMovieList.children.length;

        expect(expandedListLength).toBeGreaterThan(listLength);
    })

    it('should do not anything when clicking "Ver mais" if the request fails', async () => {

        vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({
            json: vi.fn().mockResolvedValueOnce(mockResponse)
        }).mockRejectedValue(new TypeError('Failed to fetch')))

        render(
            <MemoryRouter>
                <SearchResults />
            </MemoryRouter>
        );

        const movieList = await screen.findByRole('list');
        const listLength = movieList.children.length;

        const seeMoreButton = await screen.findByRole('button', {
            name: 'Ver mais',
        });

        expect(seeMoreButton).toBeInTheDocument();

        fireEvent.click(seeMoreButton);

        const expandedMovieList = await screen.findByRole('list');
        const expandedListLength = expandedMovieList.children.length;

        expect(expandedListLength).toEqual(listLength);
    })
})