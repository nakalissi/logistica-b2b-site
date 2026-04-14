import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '🚚',
    title: 'Gestão de Transporte',
    desc: 'Planejamento e execução de rotas otimizadas para entrega de cargas fracionadas e lotação em todo o Brasil, com rastreamento em tempo real.',
    features: ['Roteirização inteligente', 'Múltiplas transportadoras', 'Rastreio em tempo real'],
  },
  {
    icon: '🏭',
    title: 'Armazenagem & WMS',
    desc: 'Centros de distribuição estrategicamente localizados com controle total de estoque via sistema WMS integrado à sua operação.',
    features: ['Controle de inventário', 'Separação e embalagem', 'Cross-docking'],
  },
  {
    icon: '📊',
    title: 'Analytics & Visibilidade',
    desc: 'Dashboard completo com KPIs logísticos, relatórios personalizados e alertas proativos para tomada de decisão baseada em dados.',
    features: ['Dashboard em tempo real', 'Relatórios customizados', 'Alertas inteligentes'],
  },
  {
    icon: '🔗',
    title: 'Integração via API',
    desc: 'Conecte sua plataforma ao nosso ecossistema logístico via API RESTful. Integração nativa com principais ERPs do mercado.',
    features: ['API RESTful', 'Webhooks', 'Suporte SAP, TOTVS, Oracle'],
  },
  {
    icon: '🌍',
    title: 'Comércio Exterior',
    desc: 'Serviços de importação e exportação com assessoria aduaneira completa, despacho e gerenciamento de carga internacional.',
    features: ['Assessoria aduaneira', 'Despacho marítimo e aéreo', 'Consolidação de cargas'],
  },
  {
    icon: '♻️',
    title: 'Logística Reversa',
    desc: 'Gestão eficiente do fluxo reverso de produtos, desde a coleta até o processamento, garantindo sustentabilidade e conformidade.',
    features: ['Coleta programada', 'Triagem e destinação', 'Laudos de conformidade'],
  },
]

export default function Services() {
  return (
    <section id="servicos" className={`section ${styles.services}`} aria-labelledby="services-title">
      <div className="container">
        <header className={`text-center ${styles.header}`}>
          <div className="section-badge">O que Fazemos</div>
          <h2 id="services-title" className="section-title">
            Soluções completas para toda a cadeia logística
          </h2>
          <p className="section-subtitle">
            Do planejamento à entrega final, oferecemos um portfólio integrado de
            serviços logísticos para impulsionar o crescimento do seu negócio.
          </p>
        </header>

        <ul className={styles.grid}>
          {SERVICES.map(({ icon, title, desc, features }) => (
            <li key={title} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <ul className={styles.cardFeatures} aria-label={`Recursos de ${title}`}>
                {features.map((f) => (
                  <li key={f} className={styles.cardFeature}>
                    <span className={styles.featureDot} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Precisa de uma solução personalizada?</h3>
            <p className={styles.ctaDesc}>
              Nossa equipe de especialistas está pronta para entender os desafios únicos do seu negócio.
            </p>
          </div>
          <a
            href="#contato"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              const el = document.querySelector('#contato')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
            }}
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  )
}
