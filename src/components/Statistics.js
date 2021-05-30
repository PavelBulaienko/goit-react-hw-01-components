import React from 'react'
import propTypes from 'prop-types'
import '../styles/statistics.scss'

const Statistics = ({ title, stats }) => (
    <section className="statistics">
        {title && (<h2 className="title">{title}</h2>)}
        <ul className="stat-list">
            {stats.map(stat =>(
                <li key={stat.id} className="item">
                    <div className="label">{stat.label}</div>
                    <div className="percentage">{stat.percentage}%</div>
                </li>
            ))}
        </ul>
    </section>
)

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.object).isRequired
}

export default Statistics