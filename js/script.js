// Product data
const products = [
  {
    id: 1, slug: 'tgy',
    name: '铁观音', nameEn: 'Tie Guan Yin',
    emoji: '\uD83D\uDD52',
    origin: '福建安溪',
    desc: '兰花香持久，七泡有余香。传统碳焙工艺，茶汤金黄透亮，回甘悠长。',
    descEn: 'Lasting orchid fragrance with a rich sweet finish. Traditional charcoal roast, golden amber liquor.',
    price: '\u20B1450', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80'
  },
  {
    id: 2, slug: 'lj',
    name: '龙井绿茶', nameEn: 'Long Jing',
    emoji: '\uD83C\uDF31',
    origin: '浙江杭州',
    desc: '清香鲜爽，色泽翠绿。西湖产区明前采摘，豆香馥郁，口感甘醇。',
    descEn: 'Fresh and clean with a vibrant jade color. Pre-Ming harvest from West Lake region, nutty aroma.',
    price: '\u20B1520', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80'
  },
  {
    id: 3, slug: 'per',
    name: '普洱茶', nameEn: 'Pu-erh',
    emoji: '\uD83D\uDED6',
    origin: '云南普洱',
    desc: '越陈越香，醇厚顺滑。古树原料，传统发酵工艺，汤色红浓明亮。',
    descEn: 'Aged to perfection, smooth and mellow. Ancient tree leaves, traditional fermentation, deep red liquor.',
    price: '\u20B1380', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80'
  },
  {
    id: 4, slug: 'ml',
    name: '茉莉花茶', nameEn: 'Jasmine Tea',
    emoji: '\uD83C\uDF38',
    origin: '福建福州',
    desc: '清新怡人，花香入骨。茉莉花多次窨制，茶引花香，相得益彰。',
    descEn: 'Light and refreshing with intoxicating jasmine fragrance. Multi-layer scenting process for perfect harmony.',
    price: '\u20B1320', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=600&q=80'
  },
  {
    id: 5, slug: 'hc',
    name: '红茶', nameEn: 'Black Tea',
    emoji: '\uD83C\uDF3F',
    origin: '福建武夷山',
    desc: '蜜香甘甜，可加奶饮用。正山小种工艺，松烟香与桂圆甜完美融合。',
    descEn: 'Honey sweetness, great with milk. Lapsang Souchong process with smoky aroma and longan sweetness.',
    price: '\u20B1360', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=600&q=80'
  },
  {
    id: 6, slug: 'bc',
    name: '白茶', nameEn: 'White Tea',
    emoji: '\uD83C\uDF8B',
    origin: '福建福鼎',
    desc: '自然萎凋，越存越珍贵。满披白毫，汤色杏黄，毫香蜜韵。',
    descEn: 'Naturally withered, ages gracefully. Silver buds with apricot-colored liquor, honeyed finish.',
    price: '\u20B1580', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1594134858547-8b126843389e?w=600&q=80'
  }
];

// Detect language from URL
function getLang() {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang') || 'zh';
}

// Render product cards
function renderProducts(lang) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = products.map((p, i) => {
    const featured = i === 0 ? ' featured' : '';
    const delay = 0.1 + (i * 0.1);
    return `
      <article class="product-card${featured} reveal" style="transition-delay: ${delay}s">
        <div class="product-card__image">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <span class="product-card__origin">${p.origin}</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__header">
            <div>
              <h3 class="product-card__name">
                <span class="product-card__emoji">${p.emoji}</span> ${p.name}
              </h3>
              <div class="product-card__name-en">${p.nameEn}</div>
            </div>
            <div class="product-card__price">${p.price}<span style="font-size:0.8rem;font-weight:400;color:var(--text-muted)">${p.unit}</span></div>
          </div>
          <p class="product-card__desc">${lang === 'en' ? p.descEn : p.desc}</p>
        </div>
        <div class="product-card__overlay">
          <h3 style="font-family:'Playfair Display',serif;font-size:1.3rem">${p.emoji} ${p.name}</h3>
          <p>${lang === 'en' ? p.descEn : p.desc}</p>
          <span style="color:var(--gold);font-weight:600;font-size:1.2rem">${p.price}${p.unit}</span>
        </div>
      </article>
    `;
  }).join('');
}

// Initialize products
const currentLang = getLang();
renderProducts(currentLang);

// --- Navigation scroll effect ---
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile nav toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  navOverlay.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

navOverlay.addEventListener('click', () => {
  navToggle.classList.remove('active');
  navLinks.classList.remove('active');
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Close nav on link click
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// --- Scroll Reveal Animation ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// --- Contact Form ---
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = '发送中...';
  btn.disabled = true;

  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || '',
    product: formData.get('product') || '',
    message: formData.get('message') || ''
  };

  try {
    const res = await fetch('https://tea-backend.30347594.workers.dev/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      btn.textContent = '✓ 已发送！';
      btn.style.background = '#4a8c5c';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    } else {
      throw new Error('Failed');
    }
  } catch (_err) {
    btn.textContent = '发送失败，请重试';
    btn.style.background = '#c0392b';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }
});
