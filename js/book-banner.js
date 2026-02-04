/**
 * Reusable "BOOK 2025 Tendances & Inspirations" banner block.
 *
 * Usage:
 *   <div id="book-banner"></div>
 *   <script src="js/book-banner.js" defer></script>
 */
(function () {
  const MARKUP = `
<section id="book" class="my-20">
		<div class="bannerBlock flex flex-wrap items-center gap-6">

			<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/book/catalogue-2025.jpg" alt="" class="rounded-md">


			
			<div class="flex flex-col justify-around items-center md:items-start gap-6">
				<span class="text-2xl font-semibold text-center md:text-left">D&eacute;couvrez le BOOK 2025 Tendances & Inspirations</span>

				<div class="flex gap-2 items-center justify-center">
					<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
					</svg></span>
					<span>Le guide des Tendances 2025</span>
				</div>

				<div class="flex gap-2 items-center justify-center">
					<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
					</svg></span>
					<span>&Agrave; consulter gratuitement</span>
				</div>

				<div class="flex gap-2 items-center justify-center">
					<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
					</svg></span>
					<span>31 projets pour vos espaces de vie</span>
				</div>

				<a href=" https://www.gedimat.fr/catalogues/Tendances-2025#pk_campaign=Catalogue-Tendances-2025&pk_source=Siteweb&pk_medium=Page" target="_blank"><div class="lgBtn thin redBtn">D&eacute;couvrir le catalogue</div></a>
			</div>

		</div>
	</section>
`.trim();

  function render() {
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

