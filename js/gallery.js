
  const gallery = document.getElementById('gallery');
  
  // Clear existing gallery items (if there are any in your real HTML)
  gallery.innerHTML = '';

  const aspectClasses = ['aspect-[5/4]','aspect-square', 'aspect-[3/2]' ];


  data.forEach( (item, i) => {
    const { img_url, link } = item;

      // Pick the aspect class by cycling through aspectClasses
      const aspect = aspectClasses[i % aspectClasses.length * 2.5];

    const wrapper = document.createElement('div');
    // 'block' makes it a block element; 'overflow-hidden' ensures the scaled image is clipped
    wrapper.classList.add('block', 'overflow-hidden', 'rounded-md', 'mb-6');
      

    // Create an <a> element
    const a = document.createElement('a');
    a.href = link;
    a.classList.add('block'); 

    // Create an <img> element
    const img = document.createElement('img');
    img.src = img_url;
    img.classList.add(
      'w-full', 
      'transition', 
      'duration-500', 
      'transform', 
      'hover:scale-110', 
      'cursor-pointer',
      aspect,
      'object-cover'
    );
    // Set the object-fit based on the class property
    //img.style.objectFit = aspect || 'cover';

    // Append <img> to <a>, then <a> to #gallery
    a.appendChild(img);

    wrapper.appendChild(a);
    gallery.appendChild(wrapper);
  });
