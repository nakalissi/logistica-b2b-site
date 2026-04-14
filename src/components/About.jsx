import styles from './About.module.css'

const VALUES = [
  {
    icon: '⚡',
    title: 'Cotação Imediata',
    desc: 'Receba a cotação do seu frete na hora, sem espera. Basta informar os dados da carga e pronto.',
  },
  {
    icon: '📱',
    title: 'Plataforma Simples e Intuitiva',
    desc: 'Interface fácil de usar, acessível de qualquer dispositivo. Sem complicação, sem burocracia.',
  },
  {
    icon: '💰',
    title: 'Economia de Tempo e Dinheiro',
    desc: 'Compare preços de diversas transportadoras em segundos e escolha a melhor opção para o seu negócio.',
  },
]

export default function About() {
  return (
    <section id="sobre" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className="container">
        <div className={styles.grid}>
          {/* Left column — image/visual */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageBadge}>
                  <span className={styles.imageBadgeNumber}>B2B</span>
                  <span className={styles.imageBadgeText}>simplificada</span>
                </div>
                <div className={styles.imageDecor}>
                  <div className={styles.truck}>
                    <span>🏪</span>
                  </div>
                  <div className={styles.warehouse}>
                    <span>🏭</span>
                  </div>
                  <div className={styles.globe}>
                    <span>📦</span>
                  </div>
                </div>
                <svg viewBox="0 0 400 320" className={styles.svg} aria-hidden="true">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a3a5c" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#2557a7" stopOpacity="0.7"/>
                    </linearGradient>
                  </defs>
                  <rect width="400" height="320" rx="20" fill="url(#grad1)"/>
                  <path d="M0 200 Q100 150 200 180 Q300 210 400 160 L400 320 L0 320 Z" fill="rgba(244,128,26,0.1)"/>
                  <path d="M0 240 Q100 200 200 220 Q300 240 400 200 L400 320 L0 320 Z" fill="rgba(255,255,255,0.04)"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right column — text */}
          <div className={styles.text}>
            <div className="section-badge">Para Quem É</div>
            <h2 id="about-title" className="section-title">
              Ideal para operações B2B
            </h2>
            <p className={styles.lead}>
              Nossa plataforma foi desenvolvida para empresas que precisam de
              agilidade e economia no cálculo de frete. Atendemos diversos segmentos
              do mercado B2B.
            </p>
            <p className={styles.body}>
              Se você precisa calcular frete para sua empresa, agora ficou simples.
              Acesse o site, informe as medidas, peso e volume, e receba sua
              cotação na hora.
            </p>

            <ul className={styles.highlights}>
              <li>
                <span className={styles.highlightIcon} aria-hidden="true">✓</span>
                Lojas Online e E-commerces
              </li>
              <li>
                <span className={styles.highlightIcon} aria-hidden="true">✓</span>
                Atacadistas e Distribuidores
              </li>
              <li>
                <span className={styles.highlightIcon} aria-hidden="true">✓</span>
                Indústrias e Manufaturas
              </li>
              <li>
                <span className={styles.highlightIcon} aria-hidden="true">✓</span>
                Qualquer empresa que envia mercadorias
              </li>
            </ul>
          </div>
        </div>

        {/* Values row */}
        <div className={styles.valuesRow}>
          {VALUES.map(({ icon, title, desc }) => (
            <article key={title} className={styles.valueCard}>
              <span className={styles.valueIcon} aria-hidden="true">{icon}</span>
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueDesc}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
