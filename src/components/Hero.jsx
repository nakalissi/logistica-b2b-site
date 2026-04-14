import styles from './Hero.module.css'

const STATS = [
  { value: '500+', label: 'Clientes Ativos' },
  { value: '98%', label: 'Entregas no Prazo' },
  { value: '15+', label: 'Anos de Experiência' },
  { value: '24/7', label: 'Suporte Dedicado' },
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
          <div className="section-badge">Logística B2B de Alta Performance</div>

          <h1 className={styles.title}>
            Conectamos sua empresa ao{' '}
            <span className={styles.titleAccent}>sucesso logístico</span>
          </h1>

          <p className={styles.description}>
            Soluções inteligentes de transporte, armazenagem e distribuição para
            empresas que buscam eficiência, agilidade e redução de custos na cadeia de suprimentos.
          </p>

          <div className={styles.actions}>
            <a href="#contato" className="btn btn-primary" onClick={scrollToContact}>
              <span>Solicitar Proposta</span>
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
            <div className={styles.visualIcon}>🚚</div>
            <div className={styles.visualContent}>
              <span className={styles.visualLabel}>Rastreamento em Tempo Real</span>
              <div className={styles.visualBar}>
                <div className={styles.visualBarFill} />
              </div>
              <span className={styles.visualMeta}>Carga #LB-2024-001 · Em trânsito</span>
            </div>
          </div>
          <div className={`${styles.visualCard} ${styles.visualCardAlt}`}>
            <div className={styles.visualIcon}>📦</div>
            <div className={styles.visualContent}>
              <span className={styles.visualLabel}>Entregas concluídas hoje</span>
              <span className={styles.visualValue}>1.247</span>
              <span className={styles.visualMeta}>↑ 12% em relação a ontem</span>
            </div>
          </div>
          <div className={`${styles.visualCard} ${styles.visualCardSmall}`}>
            <span className={styles.visualIcon}>⚡</span>
            <span className={styles.visualSmallText}>Eficiência operacional: 98,3%</span>
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
