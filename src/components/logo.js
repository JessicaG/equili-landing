import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/">{props.title}</Link>
    <img src={props.picture} />
  </div>
)

export default Logo