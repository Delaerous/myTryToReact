import React from 'react'

import  {Category, PizzaBlock, Sort} from '../reactComponents/index';
function Home() {
    return (
        <div className="container">
          <div className="content__top">
            <Category items={[
              'Мясные',
              'Вегетарианская',
              'Гриль',
              'Острые',
              'Закрытые'

            ]}/>
            <Sort items={[
              'популярности',
              'цене',
              'алфавиту'

            ]}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
          </div>
        </div>
    )
}

export default Home
