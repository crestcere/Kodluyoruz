import React from "react";

const GetItem = ({ item }) => {
    return (
        <div>
            <div className="GetItem" id={item.name}>
                <p>Name: {item.name}</p>
                <p>Height: {item.height}</p>
                <p>Gender: {item.gender}</p>
                <p>Films: {item.films}</p>
            </div>
        </div>
    );
}

export default GetItem;