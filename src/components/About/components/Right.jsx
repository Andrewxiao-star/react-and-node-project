import React from 'react'

export const Right = ({ children, classes }) => (
  <div className={classes.right}>
    <div className={`card ${ classes.inner }`}>{children}</div>
  </div>
)