// OLD LINK
// <div class="flex flex-col items-center">
// <div class="overflow-hidden rounded-md">
//    <a href="/menu-tendances-loft-industriel-179.htm">
// 		   <img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/2.jpg" class="min-w-[180px] min-h-[180px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
//    </a>
// </div>
// <span class="pt-2 font-semibold">Loft Contemporain</span>
// </div>

(function () {
  const MARKUP = `
<section id="tendance_select" class="mb-3">

		<div class="flex flex-row my-3">
			<div class="pr-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="5" height="100%" viewBox="0 0 6 72" fill="none">
				<path d="M0 3L6 0L5 69.5L0 72V3Z" fill="#CA002D"/>
				</svg>
			</div>
			<div class="flex flex-col justify-around gap-2">
				<h2 class="text-4xl font-semibold">C'est tendance !</h2>
				<span class="text-2xl font-semibold text-[#CA002D]">Parmi nos 7 tendances, trouvez celle qui vous ressemble. Pour un chez vous bien &agrave; vous !</span>
			</div>
		</div>


	</section>
	

	<section id="slideshowMobile" class="block md:hidden mb-4 w-full z-1 my-10 pb-10">
		<div class="flex no-wrap overflow-x-scroll pb-4 gap-4 touch-auto">

			<div class="flex flex-col items-center">
				<div class="overflow-hidden rounded-md">
					<a href="/menu-tendances-evasion-exotique-178.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/1.jpg" class="min-w-[180px] min-h-[180px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
					</a>
				</div>
				<span class="pt-2 font-semibold">&Eacute;vasion Exotique</span>
			</div>

			<div class="flex flex-col items-center">
				<div class="overflow-hidden rounded-md">
				   <a href="/menu-tendance-loft-contemporain-197.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/2.jpg" class="min-w-[180px] min-h-[180px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Loft Contemporain</span>
			</div>

			<div class="flex flex-col items-center">
				<div class="overflow-hidden rounded-md">
				   <a href="/menu-tendances-scandi-boheme-180.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/3.jpg" class="min-w-[180px] min-h-[180px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Scandi Boh&egrave;me</span>
			</div>

			<div class="flex flex-col items-center">
				<div class="overflow-hidden rounded-md">
				   <a href="/menu-tendances-noir-et-blanc-181.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/4.jpg" class="min-w-[180px] min-h-[180px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Noir & Blanc</span>
			</div>

			<div class="flex flex-col items-center basis-1/4">
				<div class="overflow-hidden rounded-md">
				   <a href="/menu-tendances-retro-cool-182.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/5.jpg" class="min-w-[180px] min-h-[180px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">R&eacute;tro Cool</span>
			</div>

			<div class="flex flex-col items-center basis-1/4">
				<div class="overflow-hidden rounded-md">
				   <a href="/menu-tendances-design-epure-176.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/6.jpg" class="min-w-[180px] min-h-[180px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Design &Eacute;pur&eacute;</span>
			</div>

			<div class="flex flex-col items-center basis-1/4">
				<div class="overflow-hidden rounded-md">
				   <a href="/menu-tendances-classique-chic-177.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/7.jpg" class="min-w-[180px] min-h-[180px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Classique Chic</span>
			</div>

		</div>

	</section>


	<section id="slideshow desktop" class="hidden md:block mb-20 mt-10 max-w-[1280px] flex justify-center">

		<!-- line 1 -->
		<div class="flex items-center justify-between text-center pt-4 gap-1">
			
			<div class="flex flex-col items-center basis-1/4">
				<div class="max-w-[274px] max-h-[152px] overflow-hidden rounded-2xl">
				   <a href="/menu-tendances-evasion-exotique-178.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/1.jpg" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">&Eacute;vasion Exotique</span>
			</div>

			<div class="flex flex-col items-center basis-1/4">
				<div class="max-w-[274px] max-h-[152px] overflow-hidden rounded-2xl">
				   <a href="/menu-tendances-loft-industriel-179.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/2.jpg" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Loft Contemporain</span>
			</div>

			<div class="flex flex-col items-center basis-1/4">
				<div class="max-w-[274px] max-h-[152px] overflow-hidden rounded-2xl">
				   <a href="/menu-tendances-scandi-boheme-180.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/3.jpg" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Scandi Boh&egrave;me</span>
			</div>

			<div class="flex flex-col items-center basis-1/4">
				<div class="max-w-[274px] max-h-[152px] overflow-hidden rounded-2xl">
				   <a href="/menu-tendances-noir-et-blanc-181.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/4.jpg" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Noir & Blanc</span>
			</div>

	
		
			
		</div>
		<!-- #1line 1 -->

		<!-- line 2 -->
		<div class="flex items-center justify-center text-center pt-10 gap-1">
			
			<div class="flex flex-col items-center basis-1/4">
				<div class="max-w-[274px] max-h-[152px] overflow-hidden rounded-2xl">
				   <a href="/menu-tendances-retro-cool-182.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/5.jpg" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">R&eacute;tro Cool</span>
			</div>

			<div class="flex flex-col items-center basis-1/4">
				<div class="max-w-[274px] max-h-[152px] overflow-hidden rounded-2xl">
				   <a href="/menu-tendances-design-epure-176.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/6.jpg" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Design &Eacute;pur&eacute;</span>
			</div>

			<div class="flex flex-col items-center basis-1/4">
				<div class="max-w-[274px] max-h-[152px] overflow-hidden rounded-2xl">
				   <a href="/menu-tendances-classique-chic-177.htm">
				   		<img src="https://uploads.gedimat.fr/CMS/images/tendances2025/tend/7.jpg" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
				   </a>
				</div>
				<span class="pt-2 font-semibold">Classique Chic</span>
			</div>

		</div>
		<!-- #line 2 -->

	</section>
`.trim();

  function render() {
    const scriptEl = document.currentScript;
    const targetId = (scriptEl && scriptEl.dataset && scriptEl.dataset.target) || 'tendances-slideshow';
    const mount =
      document.getElementById(targetId) ||
      document.querySelector('[data-component="tendances-slideshow"]');

    if (!mount) return;
    mount.innerHTML = MARKUP;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
})();
