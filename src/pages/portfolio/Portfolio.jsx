import React from 'react'
import { portfolio } from '../../data'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio__section'>
      <h2 className='section__title'>My <span>Portfolio</span></h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <Portfolio key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Portfolio