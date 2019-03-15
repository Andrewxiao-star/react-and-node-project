import React from 'react'
import Skill from '../Icons/Skills'
import Icon from '../Icons/Icon'
import module from './footer.module.styl'

const Footer = () => (
  <footer className={module.Footer}>
    {/* <button role="button" type="button">
      <Icon id="moon" />
    </button> */}
    <span>
      Desenvolvido em{' '}
      <address itemScope itemType="https://schema.org/PostalAddress">
        Curitiba-PR, Brasil
      </address>{' '}
      com o{' '}
      <Icon
        id="heart"
        size="20"
        role="img"
        aria-label="coração"
        title="coração"
      />{' '}
      por <strong>Fernando Moreira</strong>, usando{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        title="Desenvolvido usando React com Gatsby"
      >
        <Skill id="gatsby" size="18px" />
      </a>{' '}
      e hospedado no{' '}
      <a
        href="https://netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="Hospedado no Netlify"
      >
        <Skill id="netlify" size="18px" />
      </a>
      . Veja o código no{' '}
      <a
        href="https://github.com/nandomoreirame/nandomoreira.dev"
        target="_blank"
        rel="noopener noreferrer"
        title="Veja o código no Github"
      >
        <Skill id="github" size="18px" />
      </a>
      .
    </span>
  </footer>
)

export default Footer
