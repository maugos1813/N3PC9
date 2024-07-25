import React from 'react'
import { Filters } from './Filters'

export const Header = ({changeFilters}) => {
  return (
    <header className='flex flex-col text-center py-6 text-green-700'>
        <h1 className='text-[40px]'>React Shop</h1>
        <Filters onChange={changeFilters} />
    </header>
  )
}
