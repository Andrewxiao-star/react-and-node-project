import React from 'react'
import { Icon } from 'Components/Common'
import classes from './socialIcons.module.styl'

export const SocialIcons = ({ icons, ...props }) => {
  if (!icons) return null
  return (
    <ul className={`SocialIcons ${classes.Social}`} {...props}>
      {Object.keys(icons).map((item, i) => {
        const link = icons[item]
        if (!link) return null
        return (
          <li className={`SocialIcons__item ${classes.Social__item}`} key={i}>
            <a
              className={`SocialIcons__link ${classes.Social__link}`}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon id={item} style={{ padding: '4px' }} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
