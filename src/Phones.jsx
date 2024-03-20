import axios from "axios";
import { useEffect, useState } from "react";


const Phones = () => {
    const [Phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(response => response.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => setPhones(data.data.data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl "> Phones : {Phones.length} </h2>

        </div>
    );
};

export default Phones;