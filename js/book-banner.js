
(function () {
  const STYLE_ID = 'catalogues-tendance-2026-styles';
  const CSS = `
.catalogues-tendance-wrapper{
    margin-top:80px;
    padding:0 20px;
}

.catalogues-tendance-container{
    max-width:1280px;
    margin:0 auto 60px;
    background:#fad4b9;
    padding:60px 20px;
    border-radius:16px;
}

.catalogues-tendance-content{
    display:flex;
    gap:30px;
    padding:30px;
    background:#fff;
    border-radius:12px;
    box-shadow:0 8px 20px rgba(0,0,0,.08);
    align-items:flex-start;
}

.catalogues-tendance-cover{
    width:220px;
    flex-shrink:0;
}

.catalogues-tendance-cover img{
    width:100%;
    height:auto;
    box-shadow:0 8px 18px rgba(0,0,0,.18);
    transition:.3s;
}

.catalogues-tendance-cover:hover img{
    transform:translateY(-4px);
    box-shadow:0 16px 28px rgba(0,0,0,.25);
}

.catalogues-tendance-text{
    flex:1;
    display:flex;
    flex-direction:column;
}

.catalogues-tendance-text h2{
    margin:0 0 12px;
    line-height:1.3;
}

.catalogues-tendance-text p{
    margin-bottom:18px;
}

.catalogues-tendance-text .o-button{
    align-self:flex-start;
    margin-top:auto;
}

.catalogues-tendance-right{
    width:35%;
}

.catalogues-tendance-right img{
    width:100%;
    display:block;
}

/* Tablette */
@media (max-width:1024px){
  .catalogues-tendance-content{
      flex-direction:column;
      text-align:center;
      align-items:center;
  }

  .catalogues-tendance-cover{
      width:200px;
  }

  .catalogues-tendance-right{
      width:100%;
      max-width:500px;
  }

  .catalogues-tendance-text .o-button{
      align-self:center;
  }
}

/* Mobile */
@media (max-width:640px){
  .catalogues-tendance-container{
      padding:40px 20px;
  }

  .catalogues-tendance-content{
      padding:20px;
  }

  .catalogues-tendance-cover{
      width:160px;
  }
}
`.trim();

  const MARKUP = `
<div class="catalogues-tendance-wrapper mb-40">
  <div class="catalogues-tendance-container">
    <div class="catalogues-tendance-content">
      <a class="catalogues-tendance-cover" href="https://www.gedimat.fr/catalogues/Tendances-2026" target="_blank">
        <img src="https://uploads.gedimat.fr/CMS/images/catalogues/Couverture-Tendances-2026.jpg" alt="Couverture Tendances 2026">
      </a>

      <div class="catalogues-tendance-text">
        <h2>Laissez place &agrave; votre cr&eacute;ativit&eacute; !</h2>
        <p>Les couleurs, les mati&egrave;res, la lumi&egrave;re font partie int&eacute;grante du d&eacute;cor. D&eacute;corer sa maison, c&#39;est comme &eacute;laborer une &oelig;uvre d&#39;art ou s&#39;approprier une recette de cuisine, il faut y mettre du c&oelig;ur.</p>
        <p>D&eacute;couvrez 40 projets &amp; inspirations pour la maison !</p>
        <a class="o-button o-button--gb-primary2" href="https://www.gedimat.fr/catalogues/Tendances-2026" target="_blank">
          Feuilleter le catalogue
        </a>
      </div>

      <div class="catalogues-tendance-right">
        <img src="https://uploads.gedimat.fr/CMS/images/catalogues/Img-Tendances-2026.jpg" alt="Catalogue Tendances">
      </div>
    </div>
  </div>
</div>
`.trim();

  function render() {
    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement('style');
      styleEl.id = STYLE_ID;
      styleEl.textContent = CSS;
      document.head.appendChild(styleEl);
    }

    const scriptEl = document.currentScript;
    const targetId = (scriptEl && scriptEl.dataset && scriptEl.dataset.target) || 'book-banner';
    const mount =
      document.getElementById(targetId) ||
      document.querySelector('[data-component="book-banner"]');

    if (!mount) return;
    mount.innerHTML = MARKUP;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
})();

