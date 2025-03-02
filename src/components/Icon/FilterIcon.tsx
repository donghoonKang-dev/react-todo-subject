import React, { useContext } from 'react';
import UIContext from '../../context/UIContext';
import { THEME_RED, THEME_BLACK } from '../../utils/GlobalStyle';
import { FilterIconContainer } from './styles';

const ICON_SIZE = "32px";

const FilterIcon: React.VFC = () => {
  const { filterModalVisible } = useContext(UIContext);

  return (
    <FilterIconContainer
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      fill={filterModalVisible ? THEME_RED : THEME_BLACK}
    ><g>
      <path
        d="M0,0h24 M24,24H0"
        fill="none"
      />
      <path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/>
      <path d="M0,0h24v24H0V0z" fill="none"/></g>
    </FilterIconContainer>
  )
}

export default FilterIcon;