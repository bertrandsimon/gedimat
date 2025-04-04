const gallery = document.getElementById('gallery');
  

gallery.innerHTML = '';

const aspectClasses = ['aspect-square','aspect-video','aspect-[3/2]' ];


data.forEach( (item, i) => {
  const { img_url, link } = item;

    // Pick the aspect class by cycling through aspectClasses
    const aspect = aspectClasses[i % aspectClasses.length];

  const wrapper = document.createElement('div');
  // 'block' makes it a block element; 'overflow-hidden' ensures the scaled image is clipped
  wrapper.classList.add('block', 'overflow-hidden', 'rounded-md', 'mb-6');
    


  const a = document.createElement('a');
  a.href = link;
  a.classList.add('block'); 


  const img = document.createElement('img');
  img.src = img_url;
  img.classList.add(
    'w-full', 
    'transition', 
    'duration-500', 
    'transform', 
    'hover:scale-110', 
    'cursor-pointer',
    'object-cover',
    aspect
  );
  // Set the object-fit based on the class property
  img.style.objectFit = aspect || 'cover';


  a.appendChild(img);

  wrapper.appendChild(a);
  gallery.appendChild(wrapper);
});