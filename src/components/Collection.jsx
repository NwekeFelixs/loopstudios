import React from 'react'
import '../css/style.css'

import curiosity from '../images/desktop/image-curiosity.jpg'
import deepEarth from '../images/desktop/image-deep-earth.jpg'
import fishEye from '../images/desktop/image-fisheye.jpg'
import fromAbove from '../images/desktop/image-from-above.jpg'
import grid from '../images/desktop/image-grid.jpg'
import nightArcade from '../images/desktop/image-night-arcade.jpg'
import pocket from '../images/desktop/image-pocket-borealis.jpg'
import soccer from '../images/desktop/image-soccer-team.jpg'

function Collection() {
    const collections = [
        {
            title: "DEEP EARTH",
            image: deepEarth
        },

        {
            title: "Night arcade",
            image: nightArcade
        },

        {
            title: "Soccer Team Vr",
            image: soccer
        },

        {
            title: "The grid",
            image: grid
        },

        {
            title: "From Up above vr",
            image: fromAbove
        },

        {
            title: "pocket borealis",
            image: pocket
        },

        {
            title: "The curiosity",
            image: curiosity
        },

        {
            title: "Make it fisheye",
            image: fishEye
        },

    ]
  return (
    <div className='collection'>
        <h2>OUR CREATIONS</h2>
        <div className='collection-grid'>
            {
                collections.map( collection => (
                    <div className='collection-card'>
                        <img src={collection.image} alt={collection.title} />

                        <h3>{collection.title}</h3>
                    </div>
                ))
            }
        </div>
        <button className='btn-primary'>SEE ALL</button>
    </div>
  )
}

export default Collection