
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablazat from "./Tablazat";

function Home() {
    return (
 <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
                        A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára.  A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében.<a target="_blank">Tájékoztató oldal</a><br />
                        <p><img src="./holloko_masolata.jpg"  className="img-thumbnail" alt="turizmus" title="turizmus" /></p>
                    </div>
                    <div className="col-md-4">
                        <h3>Falusi szálláshely fajtái</h3> 
                        <ul>
                            <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy
                                lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                            <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől
                                függően hozzátartozó mellékhelyiségekkel együtt</li>
                            <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel
                                rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                            <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve
                                üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                        </ul>
                        <p><img src="./ketagyas.jpg"   className="img-thumbnail" alt="turizmus" title="turizmus" /></p>
                    </div>
                    <div className="col-md-4">
                        <h3>A hét törpe fogadó</h3>
                        
                        <h6>A házban összesen 21 fő fér el.</h6>
                        <h6>Felszereltségük:</h6>
                        <ol>
                            <li>Ruhásszekrény</li>
                            <li>Saját fürdőszoba zuhanytálca</li>
                            <li>WC (fürdőszobával egyben)</li>
                        </ol>
                      <Tablazat />
                    </div>
                </div>
            </div>

        </>
    )

}

            export default Home;