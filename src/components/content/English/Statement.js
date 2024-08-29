import { Scrollbars } from 'react-custom-scrollbars-2';
import { isMobile } from 'react-device-detect';

export default function Statement({site}) {

    

    return (

        <>
       <Scrollbars style={{right: "8px"}}>
        <div id="artwork_page">
            <h3>Curatorial statement</h3>
            <div id="curatorialContainer">
                <p id="curatorial">
                Shih Shu-ching, in writing her Hong Kong trilogy, came across a specimen of eurema hecabe, a small pierid butterfly species commonly found in Hong Kong.<br /><br />
                Shih* used eurema hecabe as an analogy of the city, writing that this butterfly 'contains a decisive force to challenge its fate, albeit covered by its delicate, fragile appearance.'<br /><br />
                While literary works tend to narrate the stories of the city via its complicated history, contemporary art is open to diverse perspectives that center nonlinearity and indeterminacy.<br /><br />
                Critically unpacking the imagery of Hong Kong, the virtual exhibition Metro Via Virtual features artworks that tap into the topics of history, myth, religion, capital, gender, and race. <br /><br />
                Such multilayered representations are intertwined with multimedia experiments, ranging from interactive game-based system, 3D animation, figurative art and 360° video, to sound art.<br /><br />
                The result is a symphony of the metropolis, albeit the texture, the size, and the site of specific media are somewhat compromised by the virtual nature of the exhibition.<br /><br />
                Andrew Luk, Alexis Mailles, and Peter Nelson recreated the WWII bunkers and tunnels in Kowloon Peninsula to allow game players to immerse themselves in a historical site. <br /><br />Vvzela Kook’s animation presents the myth of a survived, hidden underground Kowloon Walled City, reigned by artificial intelligence. <br /><br />Kat Suryna’s pastel delineated the spiritual spaces she experienced in Hong Kong by way of a demonic online persona that looms in the transformation of Buddha’s face. <br /><br />Elaine Wong projected the moving image of cityscape onto her own living room as broken-down frames in 360° panorama, commenting on the fragmentation of city space as a result of spatial capitalization as well as gendered demarcation. <br /><br />Also reflecting on the division of the public/domestic, Riar Rizaldi mixed the soundscape of Victoria Park on Sunday, where Indonesian domestic workers enjoy their weekly day off, with composed noise of household utensils, to virtually ‘suture’ these women workers’ separated worlds.
                </p>
                <p className="quotation"><br />
                * Shih Shu-ching: "City of the Queen: A Novel of Colonial Hong Kong"<br />1997&nbsp; |&nbsp; Hung-fan Bookstore
                <br /><br /><br />
                </p>
            </div>
        </div>
        </Scrollbars>
        </>

    )

}

