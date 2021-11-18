import React from 'react';
import './App.css';
import Button from "./Button.js";
import Bag from "./Bag.js";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonName="collection-button"
                    buttonDescription="to the collection"
                    buttonMessage="button 1 werkt"
                    disabled={false}
                />
                <Button
                    buttonName="bags-button"
                    buttonDescription="shop all bags"
                    buttonMessage="button 2 werkt"
                    disabled={false}
                />
                <Button
                    buttonName="pre-order-button"
                    buttonDescription="pre-orders"
                    buttonMessage="button 3 werkt"
                    disabled={true}
                />
            </nav>
            <main>
                <Bag
                    bagLabel="best seller"
                    imgbagImage={bag1}
                    bagTitle="bag1"
                    bagName="The handy bag"
                    bagPrice="€400,-"
                />
                <Bag
                    bagLabel="best seller"
                    imgbagImage={bag2}
                    bagTitle="bag2"
                    bagName="The stylish bag"
                    bagPrice="€250,-"
                />
                <Bag
                    bagLabel="best seller"
                    imgbagImage={bag3}
                    bagTitle="bag3"
                    bagName="The simple bag"
                    bagPrice="€150,-"
                />
                <Bag
                    bagLabel="best seller"
                    imgbagImage={bag4}
                    bagTitle="bag4"
                    bagName="The trendy bag"
                    bagPrice="€300,-"
                />



            </main>
        </>
    );
}

export default App;



