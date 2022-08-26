import React, { useState, useEffect } from "react";
import axios from "axios";
import GetItem from "./GetItem";
import Select from "react-select";

const GetData = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);


    /* Get data from axios */
    const getJson = async () => {
        const resp = await axios
            .get("https://swapi.dev/api/people");
        /* Assigning data from axios */    
        setData(resp.data.results);
        // console.log("resp", resp);
    };

    // const Searching = (a) => {
    //     setSearch(a);
    //     // console.log("Search: ", search);
    // }

    const filteredSearch = [];
    data.forEach(element => {
        // If a variable includes
        if (element.name.toLowerCase().includes(search.toLowerCase())) {
            // Check gender if it's selected continue to below
            if (selected != null) {
                if (element.gender == selected.value) {
                    filteredSearch.push(element);
                }
            } else {
                filteredSearch.push(element);
            }
        }
    });

    const deleteItem = (item) => {
        document.getElementById(item).remove();
    }

    useEffect(() => {
        getJson();
    }, [])

    return (
        <div className="GetData">
            {/* Search input */}
            <input type="search" name="search" id="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

            {/* Select dropdown menu */}
            <Select
                onChange={setSelected}
                options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "n/a", label: "N/A" }
                ]}
                placeholder="Pick Gender"
                isClearable={true}
            />

            {/* Printing data here with searched value */}
            {filteredSearch.map(item => (
                <div  id={item.name}>
                    <GetItem key={item.id} item={item}/>
                    <button className="DelButton" id="DelButton" onClick={() => {deleteItem(item.name)}}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default GetData;