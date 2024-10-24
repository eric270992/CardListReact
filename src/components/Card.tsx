import React, { useState } from "react";
import { Card as CardModel } from "../models/Card";

interface CardProps{
    card:CardModel;
}

function Card({card}:CardProps) {

    return (
        <>
            <div 
                className="bg-white rounded-lg shadow-md p-4 m-2"
            >
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
            </div>
        </>
    )
}

export default Card;