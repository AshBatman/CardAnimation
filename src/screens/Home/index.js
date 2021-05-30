import React, { useState } from 'react';
import CardDesign from '../../components/card';
import { cardsInfo } from '../../utils/cardsInfo'
export default function HomePage() {
    const [firstLevel, setFirstLevel] = useState(false);
    const [secLevel, setSectLevel] = useState(false);


    const handleClickCard = () => {
        setFirstLevel(true)
    }

    const handleSecondClick = () => {
        setSectLevel(true)
    }
    return (
        <div>
            {cardsInfo.map((cardInfo) => {
                const factories = cardInfo.factories;
                return <div onClick={handleClickCard}>
                    <CardDesign name={cardInfo.name} totoalSales={cardInfo.TotoalSales} targetSales={cardInfo.TargetSales} />
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                        {firstLevel ? factories.map((factory, index) => {
                            return <div key={index.toString()} onClick={handleSecondClick}>
                                <CardDesign name={factory.name} totoalSales={factory.TotoalSales} targetSales={factory.TargetSales} />
                            </div>
                        }) : <></>}
                    </div>
                </div>
            })}
        </div>
    )
}