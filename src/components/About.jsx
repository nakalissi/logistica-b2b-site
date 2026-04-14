import styles from './About.module.css'

const VALUES = [
  {
    icon: '🎯',
    title: 'Missão',
    desc: 'Simplificar e otimizar a cadeia logística das empresas, entregando soluções que reduzem custos e aumentam a eficiência operacional.',
  },
  {
    icon: '👁️',
    title: 'Visão',
    desc: 'Ser a referência em soluções logísticas B2B no Brasil, reconhecida pela inovação tecnológica e pela excelência no atendimento.',
  },
  {
    icon: '💎',
    title: 'Valores',
    desc: 'Comprometimento, transparência e inovação em cada operação — porque acreditamos que confiança é a base de toda parceria de sucesso.',
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
                  <span className={styles.imageBadgeNumber}>15+</span>
                  <span className={styles.imageBadgeText}>anos de mercado</span>
                </div>
                <div className={styles.imageDecor}>
                  <div className={styles.truck}>
                    <span>🚛</span>
                  </div>
                  <div className={styles.warehouse}>
                    <span>🏭</span>
                  </div>
                  <div className={styles.globe}>
                    <span>🌎</span>
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
            <div className="section-badge">Quem Somos</div>
            <h2 id="about-title" className="section-title">
              Mais de 15 anos movendo o Brasil
            </h2>
            <p className={styles.lead}>
              Somos uma empresa especializada em soluções logísticas B2B, combinando
              tecnologia de ponta com expertise operacional para transformar a cadeia de
              suprimentos dos nossos clientes.
            </p>
            <p className={styles.body}>
              Desde a coleta até a entrega final, atuamos em todas as etapas do processo
              logístico com foco em eficiência, rastreabilidade e redução de custos.
              Nossa plataforma digital integra transportadoras, armazéns e clientes em
              tempo real.
            </p>

            <ul className={styles.highlights}>
              <li>
                <span className={styles.highlightIcon} aria-hidden="true">✓</span>
                Cobertura em todo o território nacional
              </li>
              <li>
                <span className={styles.highlightIcon} aria-hidden="true">✓</span>
                Integração via API com ERPs e WMS
              </li>
              <li>
                <span className={styles.highlightIcon} aria-hidden="true">✓</span>
                Equipe dedicada para cada conta
              </li>
              <li>
                <span className={styles.highlightIcon} aria-hidden="true">✓</span>
                Relatórios e dashboards em tempo real
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
