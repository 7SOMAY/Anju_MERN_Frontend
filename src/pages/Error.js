import React from 'react'
import {Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

export default function Error() {
  return (
    <Wrapper>

        <div>
        <img src={img} alt="not-found" />
        <h3>Ohh! page not found</h3>

        <p>We can't seem to find the page you are looking for</p>

        <Link to="/Landing">back Home</Link>
        </div>
    </Wrapper>
  )
}
