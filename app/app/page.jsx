export default function Home() {
  return (
    <main>
      {/* Bandeau du haut */}
      <header className="header">
        <div className="logo">Francesco <span>Action</span></div>
        <nav>
          <a href="#offres">Offres</a>
          <a href="#exemples">Exemples</a>
          <a href="#faq">FAQ</a>
          <a className="btn small" href="#offres">Commencer</a>
        </nav>
      </header>

      {/* Section principale */}
      <section className="hero">
        <h1>Multiplie tes ventes avec des <em>vidéos IA</em> ultra-réalistes</h1>
        <p>
          Produits physiques, formations, coaching, services — plus besoin de te filmer
          ni de payer une agence. Génère tes vidéos prêtes à diffuser en moins de 5 minutes.
        </p>
        <a className="btn big" href="#offres">Créer ma première vidéo</a>
        <div className="tags">
          <span>✅ Sans caméra</span>
          <span>✅ Sans expérience</span>
          <span>✅ Prêt pour TikTok, Instagram, Facebook & WhatsApp</span>
        </div>
      </section>

      {/* Exemples */}
      <section className="section" id="exemples">
        <h2>Des vidéos qui <em>cartonnent</em></h2>
        <p className="muted">Remplace cette zone par tes propres vidéos de démonstration.</p>
        <div className="grid">
          <div className="card">🎬 Vidéo démo 1</div>
          <div className="card">🎬 Vidéo démo 2</div>
          <div className="card">🎬 Vidéo démo 3</div>
        </div>
      </section>

      {/* Offres / crédits */}
      <section className="section" id="offres">
        <h2>Choisis ton <em>pack de crédits</em></h2>
        <div className="grid">
          <div className="card price">
            <h3>Découverte</h3>
            <div className="amount">5 000 FCFA</div>
            <ul>
              <li>✅ 300 crédits</li>
              <li>✅ ≈ 8 vidéos standard</li>
              <li>✅ Modèles image de base</li>
            </ul>
            <a className="btn" href="https://wa.me/237XXXXXXXXX">Acheter</a>
          </div>
          <div className="card price featured">
            <h3>Pro</h3>
            <div className="amount">22 000 FCFA</div>
            <ul>
              <li>✅ 1 320 crédits</li>
              <li>✅ ≈ 32 vidéos standard / 21 premium</li>
              <li>✅ Tous les modèles vidéo & image</li>
            </ul>
            <a className="btn" href="https://wa.me/237XXXXXXXXX">Acheter</a>
          </div>
          <div className="card price">
            <h3>Business</h3>
            <div className="amount">50 000 FCFA</div>
            <ul>
              <li>✅ 3 500 crédits</li>
              <li>✅ Production pour plusieurs produits</li>
              <li>✅ Support prioritaire</li>
            </ul>
            <a className="btn" href="https://wa.me/237XXXXXXXXX">Acheter</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <h2>Questions fréquentes</h2>
        <div className="faq">
          <p><strong>C'est vraiment sans caméra ?</strong><br/>
          Oui. Tout est généré par intelligence artificielle à partir de ton produit et d'un texte.</p>
          <p><strong>Combien de temps pour une vidéo ?</strong><br/>
          En moyenne moins de 5 minutes.</p>
          <p><strong>Comment je paie ?</strong><br/>
          Mobile Money (MTN / Orange). Contacte-nous sur WhatsApp après avoir choisi ton pack.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Francesco Action — Tous droits réservés</p>
      </footer>
    </main>
  )
}
