import React, { useEffect, useState} from "react";
import { works } from "../../data.js";
import {
  SectionContainer,
  Titel,
  SectionCentr,
  PersonIMG,
  Artical,
  TitleSize,
  TitleTerm,
  Window,
  MainContainer,
  Arrow,
} from "./WorkOur.styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


 const PAGE_WIDTH = 1170

export const WorkOur = () => {
  const [imageWork, setImageWork] = useState(works);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
   
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      
      return Math.min(newOffset, 0);
    })

}
  const handleRightArrowClick = () => {
   
    
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (imageWork.length-1))
     
      return Math.max(newOffset, maxOffset);
    })
}

  console.log(imageWork)
 
  
 
  return (
    <>
      
        <Titel>Наши работы</Titel>
        <MainContainer>
          <Arrow onClick={handleLeftArrowClick} style={{marginRight: 20}}>
            <FaChevronLeft/>
          </Arrow>
        <Window>
            <SectionCentr style={{ transform: `translateX(${offset}px)`}}>
          {imageWork.map((appartment) => {
            const { id, image, size, type, term_work } = appartment;

         
            return (
              <Artical  key={id}>
                <PersonIMG src={image} alt={type}></PersonIMG>
                <h3>Тип объекта {type}</h3>
                <TitleSize>Квартира {size} м.кв</TitleSize>
                <TitleTerm>Сроки разработки {term_work} дней</TitleTerm>
              </Artical>
            );
          })}
          
          </SectionCentr>
          </Window>
          <Arrow onClick={handleRightArrowClick} style={{marginLeft: 20}}>
            <FaChevronRight/>
          </Arrow>
          </MainContainer>
      
    </>
  );
};