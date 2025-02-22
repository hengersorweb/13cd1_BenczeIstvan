import TablazatSzoba  from "./TablazatSzoba.jsx";


function Foglaltsag() {
    return (<>
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-6">
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
                    <p><img src="./ketagyas.jpg"   width="600px" height="400px" className="img-thumbnail" alt="turizmus" title="turizmus" /></p>
                </div>
                <div className="col-md-6">
                    <h3>A hét törpe fogadó</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Szoba neve</th>
                                <th scope="col">Ágyak száma</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                    <h6>A házban összesen 21 fő fér el.</h6>
                    <h6>Felszereltségük:</h6>
                    <ol>
                        <li>Ruhásszekrény</li>
                        <li>Saját fürdőszoba zuhanytálca</li>
                        <li>WC (fürdőszobával egyben)</li>
                    </ol>
                    <TablazatSzoba/>
                </div>

            </div>
        </div>
    </>
    )

}
export default Foglaltsag;