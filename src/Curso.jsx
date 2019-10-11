import React from 'react';
import PropTypes from 'prop-types';


const Curso = ({image, title, price, profesor}) => (

    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{title}</h3>
        <div className="s-main-center">
            {`Prof.: ${profesor}`}
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="#">{ `$ ${price}`}</a>
        </div>
      </div>
    </article>

)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontró titulo",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ5oB4s7kvHrxP1TsdP8tgBZTd8HVE2rq3yo_kKtWAK-_otw3",
  price: "--",
  profesor: ""
}

export default Curso;