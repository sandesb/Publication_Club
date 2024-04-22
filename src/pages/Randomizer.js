import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
const Randomizer = () => {
    const initialInputValue = 10;
    const initialItems = [1, 2, 3, 4];
    const [inputValue, setInputValue] = useState(initialInputValue);
    const [items, setItems] = useState(initialItems);
    const [isRandomizing, setIsRandomizing] = useState(false);
    const [isExploding, setIsExploding] = useState(false);


    useEffect(() => {
        const input = document.querySelector('.spinner__input');
        input.addEventListener('change', handleInputChange);

        return () => {
            input.removeEventListener('change', handleInputChange);
        };
    }, []);

    const handleInputChange = (e) => {
        let newValue = parseInt(e.target.value);
        if (isNaN(newValue) || newValue < 1) {
            newValue = 1;
        }
        setInputValue(newValue);
    };

    const startRandomization = () => {
        if (isRandomizing) {
            resetRandomizer();
            
        } else {
            randomizeItems();
            const plate = document.querySelector('.spinner__plate');
            if (!plate.classList.contains('spinner__plate--spin')) {
                plate.classList.add('spinner__plate--spin');
            }
            setIsRandomizing(true);
            setIsExploding(true);
            const audio = new Audio('/spin.mp3');
            audio.play();
            
        }
    };

    const randomizeItems = () => {
        const newItems = [];
        for (let i = 0; i < initialItems.length; i++) {
            newItems.push(random(1, inputValue));
        }
        setItems(newItems);
    
    };

    useEffect(() => {
        const plate = document.querySelector('.spinner__plate');
        if (plate && plate.classList.contains('spinner__plate--spin')) {
            const newPlate = plate.cloneNode(true);
            plate.parentNode.replaceChild(newPlate, plate);
        }
    }, [items]);

    const resetRandomizer = () => {
        <>{isExploding && <ConfettiExplosion
            />}</>
        setInputValue(initialInputValue);
        setIsRandomizing(false);
        window.location.reload(); // Refresh the page
    };

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <div class="flex-wrap3">
            
            <div className="spinner">
                <div className="spinner__body"></div>
                <button className="spinner__start-button" onClick={startRandomization}>
                    {isRandomizing ? 'X' : 'GO!'}
                </button>
                   {/* Render ConfettiExplosion if isExploding is true */}
            {isExploding && <ConfettiExplosion />}
                <input type="number" className="spinner__input" value={inputValue} onChange={handleInputChange} />
                <div className="spinner__plate">
                    {items.map((item, index) => (
                        <div key={index} className={`spinner__item spinner__item--${index === 0 ? 'top' : index === 1 ? 'right' : index === 2 ? 'bottom' : 'left'}`}>{item}</div>
                    ))}
                </div>
                
            </div>
            
        </div>
    );
};

export default Randomizer;
