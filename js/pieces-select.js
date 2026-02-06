
(function () {
  const MARKUP = `
<section id="pieces_select" class="my-10"> 
		<h2 class="text-3xl font-semibold text-center my-10">De l'inspiration pour toutes les pi&egrave;ces de la maison !</h2>
		<div class="flex justify-start md:justify-center items-center gap-4 py-4 overflow-x-scroll lg:overflow-hidden no-wrap">

			<div class="flex flex-col justify-center items-center greyBg gap-3">
				
					<img src="https://uploads.gedimat.fr/CMS/images/tendances2024/pieces/1.jpg" alt="">
					<span class="text-xl font-semibold">Entr&eacute;e</span>
					<a href="/menu-inspirations-pour-votre-entree-183.htm"><div class="lgBtn thin greyBtn min-w-[130px]">Voir les projets</div></a>
			</div>

			<div class="flex flex-col justify-center items-center greyBg gap-3">
				
					<img src="https://uploads.gedimat.fr/CMS/images/tendances2024/pieces/2.jpg" alt="">
					<span class="text-xl font-semibold">S&eacute;jour</span>
					<a href="/menu-inspirations-pour-votre-sejour-184.htm"><div class="lgBtn thin greyBtn min-w-[130px]">Voir les projets</div></a>
			</div>

			<div class="flex flex-col justify-center items-center greyBg gap-3">
				
					<img src="https://uploads.gedimat.fr/CMS/images/tendances2024/pieces/3.jpg" alt="">
					<span class="text-xl font-semibold">Cuisine</span>
					<a href="/menu-inspirations-pour-votre-cuisine-185.htm"><div class="lgBtn thin greyBtn min-w-[130px]">Voir les projets</div></a>
			</div>

			<div class="flex flex-col justify-center items-center greyBg gap-3">
				
					<img src="https://uploads.gedimat.fr/CMS/images/tendances2024/pieces/4.jpg" alt="">
					<span class="text-xl font-semibold">Chambre</span>
					<a href="/menu-inspirations-pour-votre-chambre-186.htm"><div class="lgBtn thin greyBtn min-w-[130px]">Voir les projets</div></a>
			</div>

			<div class="flex flex-col justify-center items-center greyBg gap-3">
				
					<img src="https://uploads.gedimat.fr/CMS/images/tendances2024/pieces/5.jpg" alt="">
					<span class="text-xl font-semibold">Salle de bains</span>
					<a href="/menu-inspirations-pour-votre-salle-de-bains-187.htm"><div class="lgBtn thin greyBtn min-w-[130px]">Voir les projets</div></a>
			</div>

			<div class="flex flex-col justify-center items-center greyBg gap-3">
				
					<img src="https://uploads.gedimat.fr/CMS/images/tendances2024/pieces/6.jpg" alt="">
					<span class="text-xl font-semibold">Ext&eacute;rieur</span>
					<a href="/menu-inspirations-pour-votre-exterieur-188.htm"><div class="lgBtn thin greyBtn min-w-[130px]">Voir les projets</div></a>
			</div>
		
		</div>
	</section>
`.trim();

  function render() {
    const scriptEl = document.currentScript;
    const targetId = (scriptEl && scriptEl.dataset && scriptEl.dataset.target) || 'pieces-select';
    const mount =
      document.getElementById(targetId) ||
      document.querySelector('[data-component=\"pieces-select\"]');

    if (!mount) return;
    mount.innerHTML = MARKUP;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
})();

