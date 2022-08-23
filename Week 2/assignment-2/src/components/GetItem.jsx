import React from "react";

const GetItem = ({ item }) => {
    return (
        <div className="GetItem">
            <p>Name: {item.name}</p>
            <p>Height: {item.height}</p>
            <p>Gender: {item.gender}</p>
            <p>Films: {item.films}</p>
        </div>
    );
}

export default GetItem;