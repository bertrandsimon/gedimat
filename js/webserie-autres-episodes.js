(function () {
  const EPISODES = [
    {
      href: '/article-ma-maison-de-a-a-z-le-defi-renovation-la-web-serie-episode-1-2613.htm',
      title: 'Prolonger le carrelage de la cuisine jusqu’à la terrasse',
      thumbnail: 'https://uploads.gedimat.fr/CMS/images/webserie/video.jpg',
      thumbnailAlt: 'Miniature vidéo',
    },
    {
      href: 'article-ma-maison-de-a-a-z-le-defi-renovation-la-web-serie-2598.htm',
      title: 'Comment apporter un max de lumière dans vos combles ?',
      thumbnail: 'https://uploads.gedimat.fr/CMS/images/webserie/video-2.jpg',
      thumbnailAlt: 'Miniature vidéo',
    },
  ];

  function normalizeEpisodes(raw) {
    if (!Array.isArray(raw)) return null;

    const out = raw
      .filter(Boolean)
      .map((ep) => {
        if (!ep || typeof ep !== 'object') return null;
        return {
          href: ep.href ? String(ep.href) : '#',
          title: ep.title ? String(ep.title) : '',
          duration: ep.duration ? String(ep.duration) : '',
          thumbnail: ep.thumbnail ? String(ep.thumbnail) : '',
          thumbnailAlt: ep.thumbnailAlt ? String(ep.thumbnailAlt) : '',
        };
      })
      .filter(Boolean);

    return out.length ? out : [];
  }

  function readInlineEpisodes(mount) {
    const id =
      (mount && mount.dataset && mount.dataset.episodesJsonId) || 'webserie-autres-episodes-data';
    const el = document.getElementById(id);
    if (!el) return null;

    try {
      const parsed = JSON.parse(el.textContent || '');
      return normalizeEpisodes(parsed);
    } catch {
      return null;
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function cardMarkup(ep, idx) {
    const bg = idx % 2 === 1 ? 'bg-[#e8e8e8]' : 'bg-[#d9d9d9]';
    const href = ep && ep.href ? String(ep.href) : '#';
    const title = ep && ep.title ? ep.title : '';
    const duration = ep && ep.duration ? ep.duration : '';
    const thumbnail = ep && ep.thumbnail ? String(ep.thumbnail) : '';
    const thumbnailAlt = ep && ep.thumbnailAlt ? ep.thumbnailAlt : 'Miniature vidéo';

    return `
<a href="${escapeHtml(href)}" class="block">
  <div class="w-full">
    <div class="rounded-[8px] h-[220px] w-full overflow-hidden ${bg}">
      <img src="${escapeHtml(thumbnail)}" class="h-full w-full object-cover" alt="${escapeHtml(thumbnailAlt)}" />
    </div>
    <div class="mt-5 flex flex-col gap-[6px]">
      <div>${escapeHtml(title)}</div>
      ${duration ? `<div class="text-[16px] leading-[25px] text-[#757575]">${escapeHtml(duration)}</div>` : ''}
    </div>
  </div>
</a>
`.trim();
  }

  function markup(episodes, heading) {
    const cards = (episodes || []).map(cardMarkup).join('\n\n');
    return `
<div class="border border-[#c0c0c0] rounded-[8px] px-6 pt-[30px] pb-[60px]">
  <div class="flex flex-col gap-10">
    <div class="flex items-end gap-4">
      <div class="w-full">
        <h2>${escapeHtml(heading || 'Autres épisodes')}</h2>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[14px]">
      ${cards}
    </div>
  </div>
</div>
`.trim();
  }

  function render() {
    const scriptEl = document.currentScript;
    const targetId = (scriptEl && scriptEl.dataset && scriptEl.dataset.target) || 'videos';
    const mount =
      document.getElementById(targetId) ||
      document.querySelector('[data-component="webserie-autres-episodes"]');

    if (!mount) return;
    const heading = (mount.dataset && mount.dataset.heading) || 'Autres épisodes';
    const inlineEpisodes = readInlineEpisodes(mount);
    const episodes = inlineEpisodes ?? EPISODES;
    mount.innerHTML = markup(episodes, heading);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
})();

