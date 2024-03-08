import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {description:"This is the background color of of the card that will be displayed.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Upload", tagcolor: "green"}, },
        {description:"This is the background color of of the card that will be displayed.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagcolor: "blue"}, },
        {description:"This is the background color of of the card that will be displayed.", filesize: ".9mb", close: true, tag: {isOpen: false, tagTitle: "Download Now", tagcolor: "green"}, }  ];
  
    return (
    <div ref={ref} className='fixed top-0 left-o z-[3] w-full h-full flex gap-5 flex-wrap p-10'>
        {data.map((items, index) => (
            <Card data={items} reference= {ref}/>
        ))}
    </div>
  )
}

export default Foreground
