import { useEffect, useState } from "react";

import "./App.css";
import { coordinates } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/constants";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather } from "../../utils/weatherApi";
import { APIkey} from "../../utils/constants";
import { filterWeatherData } from "../../utils/weatherApi";

function App() {
const [clothingItems, setClothingItems] = useState(defaultClothingItems);
const [weatherData, setWeatherData] = useState({type: "", temp: {F: 999, C: 999},city: "",});
const [activeModal, setActiveModal] = useState("");
const [selectedCard, setSelectedCard] = useState(defaultClothingItems[0]);

const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
}

const handleAddClick = () => {  
    setActiveModal("new-garment");
};

const closeActiveModal = () => {
    setActiveModal("");
};

useEffect(() => {
    if (!coordinates) return;
    
    getWeather(coordinates, APIkey)
        .then((data) => {
          setWeatherData(filterWeatherData(data));
        })
        .catch(console.error);
    }, [coordinates]);


  return ( 
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} clothingItems={clothingItems} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm 
        buttonText="Add Garment" 
        title="New garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
        >
        <label htmlFor="name" className="modal__label">
                        Name {""}
                        <input 
                            type="text" 
                            id="name" 
                            className="modal__input" 
                            placeholder="Name" 
                        />
                    </label>
                    <label htmlFor="imageUrl" className="modal__label">
                        Image {""}
                        <input 
                            type="text" 
                            id="imageUrl" 
                            className="modal__input" 
                            placeholder="Image URL" 
                        />
                    </label>
                    <fieldset className="modal__radio-buttons">
                        <legend className="modal__legend">Select the weather type:</legend>
                        <label 
                            htmlFor="hot" 
                            className="modal__label modal__label_type_radio"
                        >
                            <input id="hot" type="radio" className="modal__radio-input" /> Hot
                        </label>
                        <label 
                            htmlFor="warm" 
                            className="modal__label modal__label_type_radio"
                        >
                            <input id="warm" type="radio" className="modal__radio-input" /> Warm
                        </label>
                        <label 
                            htmlFor="cold" 
                            className="modal__label modal__label_type_radio"
                        >
                            <input id="cold" type="radio" className="modal__radio-input" /> Cold
                        </label>
                    </fieldset>
      </ModalWithForm>
      <ItemModal 
        activeModal={activeModal} 
        card={selectedCard} 
        onClose={closeActiveModal} 
    />
    </div>
  );
  
};

export default App;
