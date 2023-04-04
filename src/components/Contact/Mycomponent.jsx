import React from 'react'
import { Gallery } from "react-grid-gallery";
import foto1 from '../../assets/galery/20220523_221732.jpg'
import foto2 from "../../assets/galery/20220602_142744.jpg"
import foto3 from '../../assets/galery/20220608_163750.jpg'

const Mycomponent = () => {
  const images = [
    {
       src: foto1,
       width: 320,
       height: 174,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: foto2,
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
  
    {
       src: foto3,
       width: 420,
       height: 212,
    },
 ];


  return (
    <div>
      <Gallery images={images} />
    </div>
  )
}

export default Mycomponent
