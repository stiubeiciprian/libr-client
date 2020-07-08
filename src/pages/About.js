import React from 'react'
import CollectionImage from '../resources/svgs/collection.svg'
import FriendsImage from '../resources/svgs/friends.svg'
import ReviewImage from '../resources/svgs/review.svg'

function About() {
    return (
        <div>
            <section className="text-gray-700 body-font" id="about">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">What is Libr?</h1>
                        <p className="mt-6 lg:w-2/3 mx-auto leading-relaxed text-base ">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>

                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">What can I do on Libr.com?</h1>
 
                    </div>

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                            <div className="w-50 h-50 inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-500 mb-5 flex-shrink-0">
                                <img src={CollectionImage} alt="Collection" width="300px"/>
                            </div>
                            <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Manage your book collection</h2>
                            <p className="leading-relaxed text-base">Keep track of the books you've read, want to read. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            </div>
                    </div>
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                        <div className="w-50 h-50 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5 flex-shrink-0">
                        <img src={FriendsImage} alt="Friends" width="300px"/>
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Stay connected with friends</h2>
                        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                        <div className="w-50 h-50 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5 flex-shrink-0">
                        <img src={ReviewImage} alt="Review" width="300px"/>
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Write and read book reviews</h2>
                        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    )
}

export default  About

