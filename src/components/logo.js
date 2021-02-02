import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <img src={props.picture} />
  </div>
)

export default Logo