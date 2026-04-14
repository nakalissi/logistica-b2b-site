import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '🌐',
    title: 'Acesse o Site',
    desc: 'Entre na nossa plataforma de qualquer dispositivo — computador, tablet ou celular. Sem necessidade de cadastro para cotar.',
    features: ['Acesso rápido', 'Sem cadastro obrigatório', 'Responsivo e mobile-friendly'],
  },
  {
    icon: '📐',
    title: 'Informe Medidas, Peso e Volume',
    desc: 'Preencha os dados da sua carga: peso, altura, largura e comprimento. Nossa calculadora faz o resto automaticamente.',
    features: ['Campos simples e intuitivos', 'Cálculo automático de cubagem', 'Múltiplos volumes'],
  },
  {
    icon: '✅',
    title: 'Receba sua Cotação na Hora',
    desc: 'Em segundos, receba cotações de diversas transportadoras. Compare preços, prazos e escolha a melhor opção para sua empresa.',
    features: ['Cotação instantânea', 'Comparativo de transportadoras', 'Melhor custo-benefício'],
  },
  {
    icon: '🚚',
    title: 'Gestão de Transporte',
    desc: 'Planejamento e execução de rotas otimizadas para entrega de cargas fracionadas e lotação em todo o Brasil.',
    features: ['Roteirização inteligente', 'Múltiplas transportadoras', 'Rastreio em tempo real'],
  },
  {
    icon: '📊',
    title: 'Analytics & Visibilidade',
    desc: 'Dashboard completo com KPIs logísticos e relatórios personalizados para tomada de decisão baseada em dados.',
    features: ['Dashboard em tempo real', 'Relatórios customizados', 'Alertas inteligentes'],
  },
  {
    icon: '🔗',
    title: 'Integração via API',
    desc: 'Conecte sua plataforma ao nosso ecossistema logístico via API RESTful. Integração com principais ERPs do mercado.',
    features: ['API RESTful', 'Webhooks', 'Suporte SAP, TOTVS, Oracle'],
  },
]

export default function Services() {
  return (
    <section id="servicos" className={`section ${styles.services}`} aria-labelledby="services-title">
      <div className="container">
        <header className={`text-center ${styles.header}`}>
          <div className="section-badge">Como Funciona</div>
          <h2 id="services-title" className="section-title">
            Simples, rápido e sem complicação
          </h2>
          <p className="section-subtitle">
            Em apenas 3 passos você recebe a cotação do frete para sua empresa.
            Além disso, oferecemos ferramentas completas para sua logística.
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
            <h3 className={styles.ctaTitle}>Facilite sua logística hoje mesmo!</h3>
            <p className={styles.ctaDesc}>
              Acesse agora e faça sua primeira cotação de frete gratuitamente.
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
            Calcular Frete Agora
          </a>
        </div>
      </div>
    </section>
  )
}
