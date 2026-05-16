// ============================================
// 茶源记 — i18n Dictionary & Language System
// ============================================

const i18n = {
  // Nav
  brand_name:       { en: 'Tea<span>Origin</span>', zh: '茶源记', fil: 'Tea<span>Origin</span>' },
  copyright:        { en: '&copy; 2026 Tea Origin. All rights reserved.', zh: '&copy; 2026 茶源记. 保留所有权利', fil: '&copy; 2026 Tea Origin. Lahat ng karapatan ay nakalaan.' },
  nav_products:     { en: 'Our Teas',        zh: '我们的茶',        fil: 'Aming mga Tsaa' },
  nav_story:        { en: 'Our Story',       zh: '品牌故事',         fil: 'Aming Kuwento' },
  nav_contact:      { en: 'Contact Us',      zh: '联系我们',         fil: 'Makipag-ugnayan' },
  nav_shopee:       { en: 'Shopee →',        zh: 'Shopee 购买 →',   fil: 'Shopee →' },

  // Hero
  hero_badge:       { en: 'Direct to Philippines',          zh: '直运菲律宾 · Direct to Philippines',  fil: 'Diretso sa Pilipinas' },
  hero_title_1:     { en: 'Authentic Chinese Tea',          zh: '正宗中国茶叶',                          fil: 'Tunay na Chinese Tea' },
  hero_title_2:     { en: 'A Cup of <span>Tea Origin</span>, Taste the East',  zh: '一杯 <span>茶源记</span>，品味东方',  fil: 'Isang Tasa ng <span>Tea Origin</span>, Tikman ang Silangan' },
  hero_subtitle:    { en: 'From China\'s most famous tea regions to your cup. The orchid fragrance of Tie Guan Yin, the fresh briskness of Long Jing, the deep richness of Pu-erh — every leaf is carefully selected and shipped directly to the Philippines.',
                       zh: '从中国名茶产地到您的茶杯。铁观音的兰花香、龙井的鲜爽、普洱的醇厚——每一片茶叶都精心甄选，直送菲律宾。',
                       fil: 'Mula sa pinakasikat na rehiyon ng tsaa sa Tsina hanggang sa iyong tasa. Ang bango ng orkid ng Tie Guan Yin, ang sariwang lasa ng Long Jing, ang malalim na yaman ng Pu-erh — bawat dahon ay maingat na pinipili at direktang ipinapadala sa Pilipinas.' },
  hero_btn_primary: { en: 'Explore Our Teas',               zh: '探索我们的茶',     fil: 'Tuklasin ang Aming mga Tsaa' },
  hero_btn_shopee:  { en: 'Shop on Shopee →',               zh: 'Shopee 购买 →',   fil: 'Bumili sa Shopee →' },

  // Features
  feat_1_title:     { en: 'Direct from Source',             zh: '源头直供',   fil: 'Diretso mula sa Pinagmulan' },
  feat_1_desc:      { en: 'Sourced from China\'s premier tea regions — Anxi, Hangzhou, Yunnan — ensuring every leaf meets the highest quality standards.',
                       zh: '精选中国核心茶产区，从福建安溪、浙江杭州到云南普洱，确保每一片茶叶的品质',
                       fil: 'Galing sa mga pangunahing rehiyon ng tsaa ng Tsina — Anxi, Hangzhou, Yunnan — tinitiyak na ang bawat dahon ay nakakatugon sa pinakamataas na pamantayan ng kalidad.' },
  feat_2_title:     { en: 'Delivery Across Philippines',    zh: '菲律宾全境配送',      fil: 'Nagdedeliver sa Buong Pilipinas' },
  feat_2_desc:      { en: 'Serving Manila, Cebu, Davao and nationwide. Free shipping on orders over ₱999, delivered in 3–5 days.',
                       zh: '马尼拉、宿务、达沃全菲配送，订单满 ₱999 免运费，3-5 日送达',
                       fil: 'Naghahatid sa Manila, Cebu, Davao at sa buong bansa. Libreng shipping sa mga order na ₱999 pataas, naihahatid sa loob ng 3–5 araw.' },
  feat_3_title:     { en: 'Quality Guaranteed',             zh: '品质保证',   fil: 'Garantisadong Kalidad' },
  feat_3_desc:      { en: 'Vacuum-sealed packaging locks in freshness. Not satisfied? Returns and exchanges are always无条件 — your satisfaction is our promise.',
                       zh: '真空密封包装，锁住新鲜。不满意无条件退换，您的满意是我们的承诺',
                       fil: 'Vacuum-sealed na packaging upang mapanatili ang kasariwaan. Hindi nasiyahan? Pwedeng ibalik o palitan anumang oras — ang iyong kasiyahan ang aming pangako.' },

  // Products Section
  products_tag:     { en: 'Our Selection',                  zh: 'Our Selection',       fil: 'Aming Napili' },
  products_title:   { en: 'Premium Selection',              zh: '精选好茶',              fil: 'Premium na Pili' },
  products_desc:    { en: 'Six classic Chinese teas, each one sourced directly from its origin. Quality guaranteed.',
                       zh: '六大经典中国名茶，总有一款适合你。每款都是原产地直供，品质保证。',
                       fil: 'Anim na klasikong Chinese tea, bawat isa ay direktang galing sa pinagmulan. Garantisadong kalidad.' },

  // About Section
  about_tag:        { en: 'Our Story',                      zh: 'Our Story',              fil: 'Aming Kuwento' },
  about_title:      { en: 'From China\'s Tea Mountains<br/>to Your Cup in the Philippines',
                       zh: '从中国茶山<br/>到菲律宾茶杯',
                       fil: 'Mula sa Mga Bundok ng Tsaa ng Tsina<br/>hanggang sa Iyong Tasa sa Pilipinas' },
  about_p1:         { en: 'Tea Origin was born from a simple idea — let tea lovers in the Philippines taste the most authentic Chinese tea. We travel to China\'s most renowned tea regions and partner with multi-generational tea farmers who pour their craft into every harvest.',
                       zh: '茶源记诞生于一个简单的想法——让菲律宾的茶爱好者品尝到最正宗的中国茶。我们深入中国最负盛名的茶产区，与世代制茶的茶农合作，精心挑选每一批茶叶。',
                       fil: 'Ang Tea Origin ay isinilang mula sa isang simpleng ideya — hayaang matikman ng mga mahilig sa tsaa sa Pilipinas ang pinaka-tunay na Chinese tea. Naglalakbay kami sa pinakasikat na mga rehiyon ng tsaa ng Tsina at nakikipagsosyo sa mga magsasaka ng tsaa na ilang henerasyon nang nagtatanim at nag-aalaga ng bawat ani.' },
  about_p2:         { en: 'From Tie Guan Yin in Anxi, Fujian to Long Jing at West Lake, Hangzhou, and ancient-tree Pu-erh deep in Yunnan — each tea carries the story of its origin. We believe a great cup of tea can cross borders and connect cultures.',
                       zh: '从福建安溪的铁观音、杭州西湖的龙井，到云南深山的古树普洱——每款茶都承载着它的产地故事和文化底蕴。我们相信，一杯好茶能跨越国界，连接不同的文化与心灵。',
                       fil: 'Mula sa Tie Guan Yin sa Anxi, Fujian hanggang sa Long Jing sa West Lake, Hangzhou, at sa sinaunang-punong Pu-erh sa Yunnan — bawat tsaa ay may dalang kuwento ng pinagmulan nito. Naniniwala kami na ang isang mahusay na tasa ng tsaa ay maaaring tumawid sa mga hangganan at mag-ugnay ng mga kultura.' },
  about_stat_1_num: { en: '6+',                              zh: '6+',                     fil: '6+' },
  about_stat_1_lbl: { en: 'Tea Varieties',                  zh: '名茶品种',                fil: 'Mga Uri ng Tsaa' },
  about_stat_2_num: { en: '5',                               zh: '5',                      fil: '5' },
  about_stat_2_lbl: { en: 'Premium Tea Regions',            zh: '中国核心茶区',             fil: 'Pangunahing Rehiyon ng Tsaa' },
  about_stat_3_num: { en: '50+',                             zh: '50+',                    fil: '50+' },
  about_stat_3_lbl: { en: 'Cities Served in PH',            zh: '菲律宾城市配送',           fil: 'Lungsod na Pinaglilingkuran sa PH' },

  // Contact Section
  contact_tag:      { en: 'Get In Touch',                   zh: 'Get In Touch',        fil: 'Makipag-ugnayan' },
  contact_title:    { en: 'Contact Us',                     zh: '联系我们',              fil: 'Makipag-ugnayan sa Amin' },
  contact_desc:     { en: 'Have questions about our teas? Interested in bulk orders? Or just want to say hello — we\'d love to hear from you.',
                       zh: '对茶叶有疑问？想批量订购？或者只是想聊聊天？我们很乐意听到你的声音。',
                       fil: 'May mga tanong tungkol sa aming mga tsaa? Interesado sa maramihang order? O gusto lang bumati — gusto naming marinig mula sa iyo.' },
  contact_heading:  { en: 'Let us help you find<br/>the perfect cup of tea',
                       zh: '让我们帮你找到<br/>最适合的那杯茶',
                       fil: 'Tulungan ka naming mahanap<br/>ang perpektong tasa ng tsaa' },
  contact_body:     { en: 'Whether you\'re buying a gift or stocking your own pantry, we\'ll recommend the right tea for you. You can also order directly on Shopee for fast delivery.',
                       zh: '无论是送礼还是自饮，我们都能为你推荐最合适的茶款。也可以通过 Shopee 直接下单，享受快捷配送。',
                       fil: 'Kung ikaw ay bumibili ng regalo o nag-iimbak para sa iyong sarili, irerekumenda namin ang tamang tsaa para sa iyo. Maaari ka ring umorder nang direkta sa Shopee para sa mabilis na paghahatid.' },
  contact_shopee_title: { en: 'Shopee Flagship Store',      zh: 'Shopee 旗舰店',        fil: 'Shopee Flagship Store' },
  contact_shopee_sub:   { en: 'Order now, delivered in 3 days',  zh: '立即下单，最快 3 天送达',  fil: 'Umorder na ngayon, maihahatid sa loob ng 3 araw' },
  contact_shopee_btn:   { en: 'Shop Now →',                zh: '去购买 →',             fil: 'Bumili Na →' },

  // Form
  form_name:        { en: 'Name *',                         zh: '姓名 *',                fil: 'Pangalan *' },
  form_name_ph:     { en: 'Your name',                      zh: '您的姓名',              fil: 'Iyong pangalan' },
  form_email:       { en: 'Email *',                        zh: '邮箱 *',                fil: 'Email *' },
  form_email_ph:    { en: 'your@email.com',                 zh: 'your@email.com',        fil: 'iyong@email.com' },
  form_phone:       { en: 'Phone',                          zh: '电话',                  fil: 'Telepono' },
  form_phone_ph:    { en: '+63 9XX XXX XXXX',               zh: '+63 9XX XXX XXXX',      fil: '+63 9XX XXX XXXX' },
  form_product:     { en: 'Interested in',                  zh: '感兴趣的产品',            fil: 'Interesado sa' },
  form_product_ph:  { en: 'Select a tea...',                zh: '请选择...',              fil: 'Pumili ng tsaa...' },
  form_message:     { en: 'Message',                        zh: '留言',                  fil: 'Mensahe' },
  form_message_ph:  { en: 'Tell us what\'s on your mind...', zh: '有什么想对我们说的？',     fil: 'Sabihin mo sa amin kung ano ang nasa isip mo...' },
  form_submit:      { en: 'Send Message',                   zh: '发送消息',              fil: 'Magpadala ng Mensahe' },
  form_sending:     { en: 'Sending...',                     zh: '发送中...',             fil: 'Ipinapadala...' },
  form_sent:        { en: '✓ Sent!',                        zh: '✓ 已发送！',             fil: '✓ Naipadala!' },
  form_failed:      { en: 'Failed, please retry',           zh: '发送失败，请重试',        fil: 'Nabigo, pakisubukan muli' },

  // Footer
  footer_desc:      { en: 'Authentic Chinese tea, delivered to your door in the Philippines. From tea mountain to teacup — we select every leaf with care.',
                       zh: '正宗中国茶叶，直送菲律宾。从茶山到茶杯，我们用心甄选每一片茶叶。',
                       fil: 'Tunay na Chinese tea, direktang inihatid sa iyong pinto sa Pilipinas. Mula sa bundok ng tsaa hanggang sa iyong tasa — pinipili namin ang bawat dahon nang may pag-aalaga.' },
  footer_quick:     { en: 'Quick Links',                    zh: '快捷链接',      fil: 'Mabilis na Link' },
  footer_our_teas:  { en: 'Our Teas',                       zh: '我们的茶',      fil: 'Aming mga Tsaa' },
  footer_our_story: { en: 'Our Story',                      zh: '品牌故事',       fil: 'Aming Kuwento' },
  footer_contact:   { en: 'Contact Us',                     zh: '联系我们',       fil: 'Makipag-ugnayan' },
  footer_follow:    { en: 'Follow Us',                      zh: '关注我们',       fil: 'Sumunod sa Amin' },
  footer_shopee:    { en: 'Shopee Store',                   zh: 'Shopee 店铺',   fil: 'Shopee Store' },
};

// Product data
const products = [
  // 1. 红茶
  {
    id: 5, slug: 'hc',
    name: '红茶', nameEn: 'Black Tea',
    emoji: '\uD83C\uDF3F',
    origin: '福建武夷山', originEn: 'Wuyi Mountain, Fujian',
    desc: '蜜香甘甜，口感醇厚饱满。源自世界红茶发源地——福建武夷山的正山小种工艺，是全发酵茶的经典代表。独特的松烟熏制赋予其标志性的烟熏风味，同时带着桂圆的甘甜和蜜香。既能清饮细品层次，也适合加奶加糖，是中西方饮茶方式的完美桥梁。',
    descEn: 'Honey sweetness with a smooth, bold character. Made using the traditional Zheng Shan Xiao Zhong process from Wuyi Mountain, Fujian — the birthplace of black tea. This fully oxidized tea offers a distinctive smoky aroma with notes of longan fruit and honey. It pairs beautifully with milk and sugar, making it perfect for both traditional Chinese gongfu and Western-style brewing. A bold amber-red liquor with remarkable depth.',
    price: '\u20B1360', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=600&q=80'
  },
  // 2. 绿茶
  {
    id: 2, slug: 'lj',
    name: '龙井绿茶', nameEn: 'Long Jing',
    emoji: '\uD83C\uDF31',
    origin: '浙江杭州', originEn: 'Hangzhou, Zhejiang',
    desc: '清香鲜爽，色泽翠绿。西湖产区明前采摘，传统锅炒工艺赋予其独特的板栗香，口感甘醇鲜爽。每片茶叶都是手工在高温铁锅中压扁成型——这项技艺已传承数百年。作为中国第一贡茶，龙井被历代帝王推崇千年。建议80°C水冲泡，避免高温破坏其鲜嫩风味。',
    descEn: 'Fresh and clean with a vibrant jade color. Pre-Ming harvest from the West Lake region, this pan-fired green tea delivers a distinctive nutty chestnut aroma and a smooth, sweet taste. Each leaf is hand-pressed flat in the traditional wok-firing process — a technique passed down for centuries. Known as China\'s first imperial tea, Long Jing has been prized by emperors for over a thousand years. Brew with 80°C water to preserve its delicate flavor.',
    price: '\u20B1520', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80'
  },
  // 3. 白茶
  {
    id: 6, slug: 'bc',
    name: '白茶', nameEn: 'White Tea',
    emoji: '\uD83C\uDF8B',
    origin: '福建福鼎', originEn: 'Fuding, Fujian',
    desc: '自然萎凋，越存越珍贵。白茶是所有茶类中加工工艺最简单的——鲜叶采摘后不经杀青揉捻，只在阳光下自然萎凋干燥。满披白毫的银针在热水中舒展，汤色杏黄透亮，口感清甜鲜爽，带有独特蜜韵。随着年份增长，白茶风味愈发醇厚，出现枣香和药香。富含抗氧化物，是兼顾口感与健康的佳选。建议85°C水冲泡。',
    descEn: 'Naturally withered, ages gracefully. The least processed of all teas, white tea is simply picked and gently dried under the sun. Silver buds coated in fine down produce a pale apricot-colored liquor with a subtle, honeyed sweetness. As it ages, the flavor deepens and develops notes of dried fruit and herbs — much like a fine wine. Rich in antioxidants, it\'s the perfect choice for both its delicate taste and health benefits. Brew at 85°C.',
    price: '\u20B1580', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1594134858547-8b126843389e?w=600&q=80'
  },
  // 4. 铁观音
  {
    id: 1, slug: 'tgy',
    name: '铁观音', nameEn: 'Tie Guan Yin',
    emoji: '\uD83D\uDD52',
    origin: '福建安溪', originEn: 'Anxi, Fujian',
    desc: '兰花香持久，七泡有余香。传统碳焙工艺，茶汤金黄透亮，回甘悠长。产自福建安溪海拔600米以上高山茶园，半发酵工艺造就独特的兰花香气——入口清雅，回味甘甜。其名源于美丽传说：一位虔诚的茶农因梦中受观音点化，在铁铸观音像后发现此茶树。建议100°C沸水冲泡，可连续冲泡7次以上，每一泡都有不同的风味变化。',
    descEn: 'Lasting orchid fragrance with a rich sweet finish. Traditional charcoal roast produces a golden amber liquor with remarkable depth. Grown in the misty high-mountain tea gardens of Anxi, Fujian, this semi-fermented oolong reveals new layers with each infusion. The name comes from an old legend — an iron statue of the goddess Guanyin inspired the farmer who discovered this tea. Brew with 100°C water; this tea rewards you with 7+ infusions, each revealing a different facet of its character.',
    price: '\u20B1450', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80'
  },
  // 5. 普洱
  {
    id: 3, slug: 'per',
    name: '普洱茶', nameEn: 'Pu-erh',
    emoji: '\uD83D\uDED6',
    origin: '云南普洱', originEn: "Pu'er, Yunnan",
    desc: '越陈越香，醇厚顺滑。采用云南深山古树原料，独特的后发酵工艺使其越陈越醇——汤色红浓明亮，入口陈香扑鼻，回味甘甜。如同红酒，普洱存放越久越珍贵，被誉为"能喝的古董"。在中国饮食文化中，普洱被视为餐后助消化的佳品。建议沸水冲泡，先润茶一次，可冲泡5次以上，从浓烈渐变为甘甜。',
    descEn: 'Aged to perfection, smooth and mellow. Made from ancient tree leaves in Yunnan\'s deep mountains, this post-fermented tea develops a deep red liquor with earthy, woody notes and a clean, sweet finish. Like fine wine, Pu-erh improves with age — often called "a liquid antique." Prized in Chinese culture as a digestive aid after rich meals. Rinse the leaves once with boiling water before brewing, then enjoy 5+ infusions that evolve from robust to sweet.',
    price: '\u20B1380', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80'
  },
  // 6. 茉莉花茶
  {
    id: 4, slug: 'ml',
    name: '茉莉花茶', nameEn: 'Jasmine Tea',
    emoji: '\uD83C\uDF38',
    origin: '福建福州', originEn: 'Fuzhou, Fujian',
    desc: '清新怡人，花香入骨。精选优质绿茶茶坯，与新鲜茉莉花层层窨制，让茶叶在夜间充分吸收花香——这道工序最多重复七次。成品茶只见茶形不见花影，花香却深入骨髓，没有任何人工香精。建议85°C水冲泡，看茶叶在水中慢慢舒展，释放出清雅怡人的茉莉芬芳。午后一杯，静心宁神。',
    descEn: 'Light and refreshing with intoxicating jasmine fragrance. Fine green tea leaves are layered with fresh jasmine blossoms and left to absorb the fragrance overnight — a process repeated up to seven times. The result is a tea that carries the true essence of jasmine without any artificial flavoring, with the blossoms themselves removed after scenting. Brew with 85°C water and watch the leaves unfurl, releasing their delicate floral aroma. The perfect afternoon tea to calm the mind.',
    price: '\u20B1320', unit: '/100g',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=600&q=80'
  }
];

// ─── Language State ─────────────────────────────

let currentLang = 'en';

function t(key) {
  return i18n[key] ? i18n[key][currentLang] : '';
}

// ─── Render Products ────────────────────────────

function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = products.map((p, i) => {
    const featured = i === 0 ? ' featured' : '';
    const delay = 0.1 + (i * 0.1);
    return `
      <article class="product-card${featured} reveal" style="transition-delay: ${delay}s">
        <div class="product-card__image">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <span class="product-card__origin">${currentLang === 'zh' ? p.origin : p.originEn}</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__header">
            <div>
              <h3 class="product-card__name">
                <span class="product-card__emoji">${p.emoji}</span> ${currentLang === 'zh' ? p.name : p.nameEn}
              </h3>
              <div class="product-card__name-en">${currentLang === 'zh' ? p.nameEn : ''}</div>
            </div>
            <div class="product-card__price">${p.price}<span style="font-size:0.8rem;font-weight:400;color:var(--text-muted)">${p.unit}</span></div>
          </div>
          <p class="product-card__desc">${currentLang === 'zh' ? p.desc : p.descEn}</p>
        </div>
        <div class="product-card__overlay">
          <h3 style="font-family:'Playfair Display',serif;font-size:1.3rem">${p.emoji} ${currentLang === 'zh' ? p.name : p.nameEn}</h3>
          <p>${currentLang === 'zh' ? p.desc : p.descEn}</p>
          <span style="color:var(--gold);font-weight:600;font-size:1.2rem">${p.price}${p.unit}</span>
        </div>
      </article>
    `;
  }).join('');

  // Observe new product cards for scroll-reveal animation
  grid.querySelectorAll('.reveal').forEach(el => { revealObserver.observe(el); });
}

// ─── Set Language ───────────────────────────────

function setLanguage(lang) {
  currentLang = lang;

  // 1. Update data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) {
      el.innerHTML = val;
    }
  });

  // 2. Update page-level attributes
  const langMap = { en: 'en', zh: 'zh-CN', fil: 'fil' };
  document.documentElement.lang = langMap[lang] || 'en';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'en'
      ? 'Tea Origin — authentic Chinese tea delivered to the Philippines. Premium Tie Guan Yin, Long Jing, Pu-erh, Jasmine, Black Tea, White Tea. Direct from origin.'
      : lang === 'zh'
        ? '茶源记 — 正宗中国茶叶直送菲律宾。精选铁观音、龙井、普洱、茉莉花茶、红茶、白茶，原产地直供。'
        : 'Tea Origin — tunay na Chinese tea na inihatid sa Pilipinas. Premium Tie Guan Yin, Long Jing, Pu-erh, Jasmine, Black Tea, White Tea. Diretso mula sa pinagmulan.';
  }

  const titleEl = document.querySelector('title');
  if (titleEl) {
    titleEl.textContent = lang === 'en'
      ? 'Tea Origin — Authentic Chinese Tea · Delivered to Philippines'
      : lang === 'zh'
        ? '茶源记 — 正宗中国茶叶 · 直送菲律宾'
        : 'Tea Origin — Tunay na Chinese Tea · Inihatid sa Pilipinas';
  }

  // 3. Hero alt text
  const heroImg = document.querySelector('.hero__bg img');
  if (heroImg) {
    heroImg.alt = lang === 'en' ? 'Tea mountains' : lang === 'zh' ? '茶山' : 'Mga bundok ng tsaa';
  }

  // 4. About image alt
  const aboutImg = document.querySelector('.about__image img');
  if (aboutImg) {
    aboutImg.alt = lang === 'en' ? 'Chinese tea ceremony' : lang === 'zh' ? '中国茶道' : 'Seremonya ng tsaa ng Tsina';
  }

  // 5. Form labels, placeholders, selects
  const nameLabel = document.querySelector('label[for="name"]');
  if (nameLabel) nameLabel.textContent = t('form_name');
  const nameInput = document.getElementById('name');
  if (nameInput) nameInput.placeholder = t('form_name_ph');

  const emailLabel = document.querySelector('label[for="email"]');
  if (emailLabel) emailLabel.textContent = t('form_email');
  const emailInput = document.getElementById('email');
  if (emailInput) emailInput.placeholder = t('form_email_ph');

  const phoneLabel = document.querySelector('label[for="phone"]');
  if (phoneLabel) phoneLabel.textContent = t('form_phone');
  const phoneInput = document.getElementById('phone');
  if (phoneInput) phoneInput.placeholder = t('form_phone_ph');

  const productLabel = document.querySelector('label[for="product"]');
  if (productLabel) productLabel.textContent = t('form_product');
  const productSelect = document.getElementById('product');
  if (productSelect) {
    const firstOpt = productSelect.querySelector('option:first-child');
    if (firstOpt) firstOpt.textContent = t('form_product_ph');
  }

  const msgLabel = document.querySelector('label[for="message"]');
  if (msgLabel) msgLabel.textContent = t('form_message');
  const msgTextarea = document.getElementById('message');
  if (msgTextarea) msgTextarea.placeholder = t('form_message_ph');

  const submitBtn = document.querySelector('.form-submit');
  if (submitBtn) submitBtn.textContent = t('form_submit');

  // 6. Re-render product cards
  renderProducts();

  // 7. Toggle button text — shows next language
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    const next = lang === 'en' ? 'zh' : lang === 'zh' ? 'fil' : 'en';
    toggleBtn.textContent = next === 'en' ? 'EN' : next === 'zh' ? '中' : 'FIL';
    toggleBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Chinese' : lang === 'zh' ? 'Switch to Filipino' : 'Switch to English');
  }

  // 8. Store preference
  try {
    localStorage.setItem('teorigin_lang', lang);
  } catch (_) {}

  // 9. Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

// ─── Toggle Language ────────────────────────────

function toggleLanguage() {
  const next = currentLang === 'en' ? 'zh' : currentLang === 'zh' ? 'fil' : 'en';
  setLanguage(next);
}

// ─── Init ───────────────────────────────────────

function initLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get('lang');
  const fromStorage = (() => {
    try { return localStorage.getItem('teorigin_lang'); } catch (_) { return null; }
  })();
  const lang = fromUrl || fromStorage || (navigator.language.startsWith('zh') ? 'zh' : navigator.language.startsWith('fil') || navigator.language.startsWith('tl') ? 'fil' : 'en');
  setLanguage(lang);
}

// ─── Navigation ───────────────────────────────

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

document.addEventListener('click', (e) => {
  if (!navLinks.classList.contains('active')) return;
  if (navLinks.contains(e.target)) return;
  if (navToggle.contains(e.target)) return;
  navToggle.classList.remove('active');
  navLinks.classList.remove('active');
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Close nav on link click
document.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Language toggle event
document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// ─── Scroll Reveal ──────────────────────────────

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

// ─── Contact Form ──────────────────────────────

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = t('form_sending');
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
      btn.textContent = t('form_sent');
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
    btn.textContent = t('form_failed');
    btn.style.background = '#c0392b';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }
});

// ─── Background Music ────────────────────────────

const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.3;
const musicToggle = document.getElementById('musicToggle');
let musicStarted = false;

const musicPref = (() => {
  try { return localStorage.getItem('teorigin_music'); } catch (_) { return null; }
})();

function updateMusicUI(playing) {
  musicToggle.classList.toggle('playing', playing);
  musicToggle.classList.toggle('muted', !playing);
  musicToggle.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
}

function startMusic() {
  if (musicStarted) return;
  musicStarted = true;
  if (musicPref !== 'off') {
    bgMusic.play().then(() => updateMusicUI(true)).catch(() => updateMusicUI(false));
  } else {
    updateMusicUI(false);
  }
}

// First user interaction starts music (browsers block autoplay)
// Skip if the first click is the toggle button itself — its own handler manages playback
['click', 'touchstart', 'keydown'].forEach(evt => {
  document.addEventListener(evt, function handler(e) {
    if (e.target?.closest?.('#musicToggle')) return;
    startMusic();
  }, { once: true });
});

musicToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!musicStarted) musicStarted = true;
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      updateMusicUI(true);
      try { localStorage.setItem('teorigin_music', 'on'); } catch (_) {}
    }).catch(() => {});
  } else {
    bgMusic.pause();
    updateMusicUI(false);
    try { localStorage.setItem('teorigin_music', 'off'); } catch (_) {}
  }
});

// ─── Hero Slideshow ────────────────────────────

(() => {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
})();

// ─── Bootstrap ──────────────────────────────────

initLanguage();
