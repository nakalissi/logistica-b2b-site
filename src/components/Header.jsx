import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo} onClick={(e) => handleNavClick(e, '#inicio')} aria-label="Log-ística B2B - Início">
          <span className={styles.logoIcon} aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#f4801a"/>
              <path d="M6 22L10 10L16 18L20 14L26 22H6Z" fill="white" opacity="0.9"/>
              <circle cx="24" cy="12" r="3" fill="white"/>
            </svg>
          </span>
          <span className={styles.logoText}>
            Log<span className={styles.logoAccent}>-ística</span> B2B
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} role="navigation" aria-label="Menu principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contato')}>
            Fale Conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contato" className={`btn btn-primary ${styles.mobileCta}`} onClick={(e) => handleNavClick(e, '#contato')}>
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
