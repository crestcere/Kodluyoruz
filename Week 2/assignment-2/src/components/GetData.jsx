import React, { useState, useEffect } from "react";
import axios from "axios";
import GetItem from "./GetItem";
import Select from "react-select";

const GetData = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);

    const getJson = async () => {
        const resp = await axios
            .get("https://swapi.dev/api/people");
        setData(resp.data.results);
        // console.log("resp", resp);
    };

    const Searching = (a) => {
        setSearch(a);
        // console.log("Search: ", search);
    }

    // const filteredSearch = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    // const filteredSearch = data.filter(item => if (item.name.toLowerCase() == search && item.gender == "male") { filteredSearch.push(item) });
    const filteredSearch = [];
    data.forEach(element => {
        // console.log(element);
        // let a = (search !== null) ? ((element.name.toLowerCase().includes(search.toLowerCase()) && element.gender.includes(selected)) ? (element) : ("")) :
        //     ((element.name.toLowerCase() == search.toLowerCase()) ? (element) : (""));
        // let a = (element.name.toLowerCase() == search.toLowerCase()) ? (element) : (continue);
        if (element.name.toLowerCase().includes(search.toLowerCase())) {
            if (selected != null) {
                if (element.gender == selected.value) {
                    filteredSearch.push(element);
                }
            } else {
                filteredSearch.push(element);
            }
        }
        // filteredSearch.push(a);
        // if (element.name.toLowerCase() == search && )
    });


    useEffect(() => {
        getJson();
    }, [])


    return (
        <div className="GetData">
            <input type="search" name="search" id="search" placeholder="Search" value={search} onChange={(e) => Searching(e.target.value)} />
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
            {filteredSearch.map(item => (
                <GetItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default GetData;