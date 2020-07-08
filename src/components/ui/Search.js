import React, { useState } from 'react'
import PoweredByGoogle from '../../resources/images/powered_by_google_on_white.png'
import BookImage from '../../resources/svgs/find_books.svg'
import Axios from 'axios'

function Search() {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState(process.env.REACT_APP_GOOGLE_API_KEY);

    function handleChange(event) {
        const query = event.target.value;
        setQuery(query);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&maxResults=40&key=${apiKey}`)
        .then(data => {

            if (data.data.totalItems == 0) {
                setResult([]);
                return;
            }

            // Filter volumes without thumbnail
            const volumesWithThumbnail = data.data.items.filter(book => book.volumeInfo.hasOwnProperty('imageLinks'))
            setResult(volumesWithThumbnail);
        });
    }

    return (
        <section className="text-gray-700 body-font">
            <form onSubmit={handleSubmit}  className="container pt-16 px-12 md:px-24  relative mx-auto text-gray-600">
                <h1 className="title-font text-center sm:text-3xl text-1xl mb-4 font-semibold text-gray-900">Find your next favourite book</h1>
                <div className="flex pt-5">
                    <input onChange={handleChange} type="text" className="bg-white focus:outline-none border border-gray-400 rounded-l-lg py-2 px-4 block w-full leading-normal"/>
                    <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-r-lg inline-block focus:outline-none">Search</button>
                </div>
                <img className="mt-2 ml-auto mr-2" src={PoweredByGoogle} alt="powered by Google" />
            </form>   

            <section className="container pt-5 px-24 mt-10 relative mx-auto text-gray-600 ">
                <div className="grid grid-cols-4 gap-4">
                    { result.map(book => (
                            <img className="rounded h-64 w-40" src={book.volumeInfo.imageLinks.thumbnail + '&zoom=2'} alt={book.title}/>
                        )
                    )}
                </div>

                { result.length===0 && <img className="mx-auto" src={BookImage} alt="Search books" />}

            </section>
        </section>
    )
}

export default Search
