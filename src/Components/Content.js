import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ItemSettings from './ItemSettings/ItemSettings.js'
import CategoryFilter from './CategoryFilter/CategoryFilter.js';
import RecipeResult from './RecipeResult/RecipeResult.js'

import './Content.css'
import { SelectAndUpdateContext, useSelect } from './Hooks/SelectedContext';
import { AcessRecipeContext } from './Hooks/AcessRecipeContext';
import Arrow from './SVG/Icons/Arrow';

export const Content = () => {
  const [filter, setFilter] = useState('')
  const [totalRecipe, setTotalRecipe] = useState([])
  const [colapse, setColapse] = useState(false)

  return (
    <div className={`ContentArea${colapse ? ' Expand' : ''}`}>
      <SelectAndUpdateContext>
          <AcessRecipeContext>
            <div className='ColapseButtom' onClick={() => setColapse(!colapse)}>
                <Arrow className="Colapse"/>
                <Arrow className="Colapse"/>
                <Arrow className="Colapse"/>
            </div>
            <Sidebar filter={filter}/>
            <CategoryFilter filter={filter} setFilter={setFilter}/>
            <ItemSettings/>
            <RecipeResult/>
          </AcessRecipeContext>
      </SelectAndUpdateContext>
    </div>
  )
}