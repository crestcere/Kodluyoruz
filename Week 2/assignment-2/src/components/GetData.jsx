import React, { useState, useEffect } from "react";
import axios from "axios";
import GetItem from "./GetItem";
import Select from "react-select";

const GetData = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);
    const [filtered, setFiltered] = useState([]);

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
    const searching = () => {
        data.forEach(element => {
            // If a variable includes
            if (element.name.toLowerCase().includes(search.toLowerCase())) {
                // console.log("Element", element);
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
        setFiltered(filteredSearch);
    }

    const deleteItem = (item) => {
        let a = data.indexOf(item);
        let b = [...data];
        b.splice(a, 1);
        setData(b);
        console.log(data);
    }
    
    useEffect(() => {
        getJson();
    }, []);

    useEffect(() => {
        searching();
    }, [search]);

    useEffect(() => {
        searching();
        // console.log("called data effect");
    }, [data]);

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
            {filtered.map(item => (
                <div  key={item.name} class="GetData">
                    <GetItem item={item}/>
                    <button className="DelButton" id="DelButton" onClick={() => {deleteItem(item)}}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default GetData;