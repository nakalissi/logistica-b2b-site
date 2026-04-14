import styles from './Hero.module.css'

const STATS = [
  { value: 'Online', label: 'Cotação Imediata' },
  { value: '100%', label: 'Plataforma Digital' },
  { value: 'B2B', label: 'Foco Empresarial' },
  { value: '24/7', label: 'Disponível Sempre' },
]

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault()
    const el = document.querySelector('#contato')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const scrollToAbout = (e) => {
    e.preventDefault()
    const el = document.querySelector('#sobre')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className={styles.hero} aria-label="Seção principal">
      {/* Background decoration */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgShape1} />
        <div className={styles.bgShape2} />
        <div className={styles.bgGrid} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <div className="section-badge">Logística B2B Simplificada</div>

          <h1 className={styles.title}>
            Cotação de frete{' '}
            <span className={styles.titleAccent}>rápida, fácil e online</span>
          </h1>

          <p className={styles.description}>
            Precisa calcular frete para sua empresa? Agora ficou simples!
            Informe as medidas, peso e volume e receba sua cotação na hora.
          </p>

          <div className={styles.actions}>
            <a href="#contato" className="btn btn-primary" onClick={scrollToContact}>
              <span>Calcular Frete</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#sobre" className="btn btn-outline" onClick={scrollToAbout}>
              Saiba Mais
            </a>
          </div>
        </div>

        {/* Hero visual */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualCard}>
            <div className={styles.visualIcon}>�</div>
            <div className={styles.visualContent}>
              <span className={styles.visualLabel}>Peso</span>
              <span className={styles.visualValue}>25 kg</span>
              <span className={styles.visualMeta}>Medidas: 60×40×30 cm</span>
            </div>
          </div>
          <div className={`${styles.visualCard} ${styles.visualCardAlt}`}>
            <div className={styles.visualIcon}>🚚</div>
            <div className={styles.visualContent}>
              <span className={styles.visualLabel}>Melhor cotação encontrada</span>
              <span className={styles.visualValue}>R$ 47,90</span>
              <span className={styles.visualMeta}>Entrega em 3 dias úteis</span>
            </div>
          </div>
          <div className={`${styles.visualCard} ${styles.visualCardSmall}`}>
            <span className={styles.visualIcon}>✅</span>
            <span className={styles.visualSmallText}>Cotação instantânea • Sem cadastro</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <ul className={styles.statsList}>
            {STATS.map(({ value, label }) => (
              <li key={label} className={styles.statItem}>
                <strong className={styles.statValue}>{value}</strong>
                <span className={styles.statLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
