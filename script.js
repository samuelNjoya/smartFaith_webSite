/* ============================================================
   SmartFaith — Main Script
   Palette: SmartFaith App · Dark mode · Animations premium
   ============================================================ */

/* ==================== CONFIGURATION ==================== */

/* Phone mockup — 8 écrans phares */
const PHONE_SCREENSHOTS = [
    'img/onboarding1.png',
    'img/home1.png',
    'img/discover.png',
    'img/prayScreen.png',
    'img/storyDetail.png',
    'img/gameScreen.png',
    'img/favorite.png',
    'img/themeDetail.png',
    'img/sitting.png',
];

/* Galerie — 22 screenshots avec légendes spirituelles */
const GALLERY_SCREENSHOTS = [
    { url: 'img/onboarding1.png',       caption: 'Explorerez les histoires' },
    { url: 'img/onboarding2.png',       caption: 'Explorez les Thèmes' },
    { url: 'img/onboarding3.png',       caption: 'Testez vos connaissances' },
    { url: 'img/onboarding4.png',       caption: 'Progressez et decouvrez' },
    { url: 'img/home1.png',              caption: 'Écran d\'accueil' },
    // { url: 'img/home.png',              caption: 'Écran d\'accueil' },
    { url: 'img/discover.png',          caption: 'Découvertes spirituelles' },
    { url: 'img/storyDetail.png',       caption: 'Récit biblique' },
    { url: 'img/prayScreen.png',        caption: 'Espace prière' },
    { url: 'img/proverb.png',           caption: 'Proverbes & Sagesse' },
    { url: 'img/liveWithGod.png',       caption: 'Vivre avec Dieu' },
    { url: 'img/gameScreen2.png',        caption: 'Quiz biblique' },
    { url: 'img/themeDetail.png',       caption: 'Thèmes spirituels' },
    { url: 'img/favorite.png',          caption: 'Vos favoris' },
    { url: 'img/level.png',             caption: 'Progression des niveaux' },
    { url: 'img/prayScreenList.png',    caption: 'Bibliothèque de prières' },
    { url: 'img/prayDetail.png',        caption: 'Détail d\'une prière' },
    { url: 'img/prayWithPsaumes.png',   caption: 'Prier avec les Psaumes' },
    { url: 'img/story.png',             caption: 'Liste des histoires' },
    { url: 'img/theme.png',             caption: 'Explorer les thèmes' },
    { url: 'img/sitting.png',           caption: 'Paramètres' },
    { url: 'img/gameScreen3.png',       caption: 'Quiz — -2 options de réponse' },
    { url: 'img/gameScreen.png',       caption: 'Quiz — Résultat' },
    { url: 'img/favorite2.png',         caption: 'Favoris avancés' },
    { url: 'img/liveWithGod2.png',      caption: 'Vivre avec Dieu' },
    { url: 'img/liveWithGodDetail.png', caption: 'Détail spirituel' },
];

/* 7 features spirituelles */
const FEATURES = [
    {
        icon: 'book-open',
        title: '4500+ Versets bibliques',
        desc: 'Avec audio et favoris, classés par thèmes et situations de la vie pour t\'accompagner chaque jour.'
    },
    {
        icon: 'target',
        title: '1500+ Questions de quiz',
        desc: '200 niveaux progressifs pour tester ta connaissance biblique et apprendre en t\'amusant.'
    },
    {
        icon: 'book',
        title: '50+ Histoires bibliques',
        desc: 'Personnages, moments clés et leçons spirituelles pour nourrir ta foi et ta réflexion.'
    },
    {
        icon: 'heart',
        title: 'Prières & Psaumes',
        desc: 'Des prières pour chaque situation : gratitude, détresse, demande, intercession, louange.'
    },
    {
        icon: 'lightbulb',
        title: 'Découvertes bibliques',
        desc: 'Faits fascinants sur la Bible : records, secrets, curiosités qui révèlent sa richesse insoupçonnée.'
    },
    {
        icon: 'star',
        title: 'Favoris illimités',
        desc: 'Sauvegarde hors ligne de tes versets, histoires, prières et thèmes préférés, accessibles à tout moment.'
    },
    {
        icon: 'palette',
        title: 'Thèmes spirituels',
        desc: 'Parcours thématiques structurés pour grandir dans la foi : foi, amour, espérance, persévérance...'
    }
];

/* 6 découvertes bibliques (Le saviez-vous ?) */
const DISCOVERIES = [
    {
        icon: 'users',
        title: '40 auteurs, 1 seule histoire',
        content: 'La Bible a été écrite sur environ 1500 ans par plus de 40 auteurs — bergers, rois, pêcheurs, médecins, prophètes. Pourtant, elle raconte une seule histoire cohérente : celle du salut de Dieu pour l\'humanité.',
        category: 'Bible'
    },
    {
        icon: 'message-circle',
        title: 'Le verset le plus court',
        content: '« Jésus pleura » (Jean 11:35) est le verset le plus court de la Bible, avec seulement deux mots en français. Ce verset révèle que Dieu lui-même a connu la douleur de la perte.',
        category: 'Bible'
    },
    {
        icon: 'bookmark',
        title: 'Le chapitre le plus long',
        content: 'Le Psaume 119 est le chapitre le plus long de la Bible avec 176 versets. C\'est un poème acrostiche organisé autour des 22 lettres de l\'alphabet hébreu.',
        category: 'Bible'
    },
    {
        icon: 'file-text',
        title: 'Le chapitre le plus court',
        content: 'Le Psaume 117 est le chapitre le plus court de la Bible avec seulement 2 versets. Malgré sa brièveté, il appelle toutes les nations à louer l\'Éternel.',
        category: 'Bible'
    },
    {
        icon: 'crosshair',
        title: 'Le verset central',
        content: 'Le Psaume 118:8 — « Mieux vaut chercher un refuge en l\'Éternel que de se confier à l\'homme » — se trouve pile au milieu des 1189 chapitres de la Bible.',
        category: 'Bible'
    },
    {
        icon: 'library',
        title: 'Le livre le plus long',
        content: 'Le livre des Psaumes est le plus long de la Bible avec 150 chapitres. Il couvre toute la gamme des émotions humaines : joie, peur, rage, espoir, gratitude.',
        category: 'Bible'
    }
];

/* 30 versets du jour en rotation */
const DAILY_VERSES = [
    { text: 'Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.', ref: 'Jean 3:16' },
    { text: 'L\'Éternel est mon berger : je ne manquerai de rien.', ref: 'Psaume 23:1' },
    { text: 'Je puis tout par celui qui me fortifie.', ref: 'Philippiens 4:13' },
    { text: 'Confie-toi en l\'Éternel de tout ton cœur, et ne t\'appuie pas sur ta sagesse.', ref: 'Proverbes 3:5' },
    { text: 'Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.', ref: 'Matthieu 11:28' },
    { text: 'Tout concourt au bien de ceux qui aiment Dieu.', ref: 'Romains 8:28' },
    { text: 'L\'Éternel est ma lumière et mon salut : de qui aurais-je crainte ?', ref: 'Psaume 27:1' },
    { text: 'Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.', ref: 'Psaume 119:105' },
    { text: 'Cherchez premièrement le royaume et la justice de Dieu ; et toutes ces choses vous seront données par-dessus.', ref: 'Matthieu 6:33' },
    { text: 'Ne t\'effraie point, car je suis ton Dieu ; je te fortifie, je viens à ton secours.', ref: 'Ésaïe 41:10' },
    { text: 'Que la paix de Christ, à laquelle vous avez été appelés, règne dans vos cœurs.', ref: 'Colossiens 3:15' },
    { text: 'Nous savons que toutes choses concourent au bien de ceux qui aiment Dieu.', ref: 'Romains 8:28' },
    { text: 'Fortifie-toi et prends courage. Ne t\'effraie point et ne t\'épouvante point.', ref: 'Josué 1:9' },
    { text: 'Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu.', ref: 'Jean 1:1' },
    { text: 'L\'amour est patient, il est plein de bonté ; l\'amour n\'est point envieux.', ref: '1 Corinthiens 13:4' },
    { text: 'Il n\'y a donc maintenant aucune condamnation pour ceux qui sont en Jésus-Christ.', ref: 'Romains 8:1' },
    { text: 'Réjouissez-vous toujours dans le Seigneur ; je le répète, réjouissez-vous.', ref: 'Philippiens 4:4' },
    { text: 'Car c\'est par la grâce que vous êtes sauvés, par le moyen de la foi.', ref: 'Éphésiens 2:8' },
    { text: 'Jésus lui dit : Je suis le chemin, la vérité, et la vie.', ref: 'Jean 14:6' },
    { text: 'Béni soit l\'homme qui se confie dans l\'Éternel, et dont l\'Éternel est l\'espérance !', ref: 'Jérémie 17:7' },
    { text: 'Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières.', ref: 'Philippiens 4:6' },
    { text: 'Soyez bons les uns envers les autres, compatissants, vous pardonnant réciproquement.', ref: 'Éphésiens 4:32' },
    { text: 'L\'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l\'esprit dans l\'abattement.', ref: 'Psaume 34:18' },
    { text: 'Car je connais les projets que j\'ai formés sur vous, dit l\'Éternel.', ref: 'Jérémie 29:11' },
    { text: 'Mais ceux qui se confient en l\'Éternel renouvellent leur force.', ref: 'Ésaïe 40:31' },
    { text: 'Que tout ce que vous faites, se fasse avec amour.', ref: '1 Corinthiens 16:14' },
    { text: 'Cherchez l\'Éternel pendant qu\'il se trouve ; invoquez-le, tandis qu\'il est près.', ref: 'Ésaïe 55:6' },
    { text: 'Une chose ai-je demandée à l\'Éternel, une chose que je recherche.', ref: 'Psaume 27:4' },
    { text: 'Que la grâce et la paix te soient multipliées par la connaissance de Dieu.', ref: '2 Pierre 1:2' },
    { text: 'Le juste vivra par la foi.', ref: 'Romains 1:17' },
];


/* Vocabulaire biblique pour les bulles (50 mots) */
const BUBBLE_WORDS = [
    'Foi', 'Grâce', 'Espérance', 'Amour', 'Paix', 'Prière',
    'Verset', 'Psaume', 'Évangile', 'Salut', 'Louange', 'Sagesse',
    'Béni', 'Gloire', 'Alliance', 'Promesse', 'Lumière', 'Chemin',
    'Vérité', 'Vie', 'Berger', 'Rocher', 'Bouclier', 'Couronne',
    'Jésus', 'Christ', 'Seigneur', 'Emmanuel', 'Rédemption', 'Sanctification',
    'Miséricorde', 'Compassion', 'Pardon', 'Repentir', 'Baptême', 'Communion',
    'Prophète', 'Apôtre', 'Disciple', 'Brebis', 'Vigne',
    'Semailles', 'Moisson', 'Royaume', 'Éternité', 'Paradis', 'Ciel',
    'Esprit', 'Sainteté', 'Adoration'
];

const BUBBLE_COLORS = [
    { bg: 'rgba(74, 144, 226, 0.07)',   text: 'rgba(74, 144, 226, 0.4)',   border: 'rgba(74, 144, 226, 0.15)' },
    { bg: 'rgba(108, 99, 255, 0.06)',   text: 'rgba(108, 99, 255, 0.38)',  border: 'rgba(108, 99, 255, 0.12)' },
    { bg: 'rgba(245, 158, 11, 0.06)',   text: 'rgba(180, 100, 0, 0.36)',   border: 'rgba(245, 158, 11, 0.14)' },
    { bg: 'rgba(16, 185, 129, 0.06)',   text: 'rgba(16, 185, 129, 0.38)',  border: 'rgba(16, 185, 129, 0.12)' }
];

/* ==================== INIT ==================== */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    lucide.createIcons();
      initBurger();          // ← AJOUTER CETTE LIGNE
    initWordBubbles();
    initParticles();
    initFeatures();
    initDiscoveries();
    initPathway();
    initPhoneSlider();
    initGallery();
    initNavScroll();
    initProgressBar();
    initBackToTop();
    initFAQ();
    initFadeInUp();
    initCounterAnimation();
    initVerseOfDay();
    initToast();
});

/* ==================== THEME (DARK MODE) ==================== */
function initTheme() {
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');

    // Charge la préférence sauvegardée ou celle du système
    const saved = localStorage.getItem('smartfaith-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    html.setAttribute('data-theme', initial);

    toggle?.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('smartfaith-theme', next);
    });
}

/* ==================== BULLES DE MOTS ==================== */
function initWordBubbles() {
    const container = document.getElementById('bubbles-bg');
    if (!container) return;

    function spawnBubble() {
        const word     = BUBBLE_WORDS[Math.floor(Math.random() * BUBBLE_WORDS.length)];
        const color    = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
        const size     = Math.random() * 72 + 48;
        const duration = Math.random() * 14 + 16;
        const leftPct  = Math.random() * 92;

        const el = document.createElement('div');
        el.className = 'bubble';
        el.textContent = word;
        el.setAttribute('aria-hidden', 'true');

        Object.assign(el.style, {
            width:        `${size}px`,
            height:       `${size}px`,
            left:         `${leftPct}%`,
            bottom:       '-130px',
            background:   color.bg,
            color:        color.text,
            border:       `1px solid ${color.border}`,
            fontSize:     `${Math.max(9, size * 0.17)}px`,
            animationDuration: `${duration}s`
        });

        container.appendChild(el);
        el.addEventListener('animationend', () => el.remove(), { once: true });
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(spawnBubble, i * 600);
    }
    setInterval(spawnBubble, 2400);

    document.addEventListener('visibilitychange', () => {
        container.style.animationPlayState = document.hidden ? 'paused' : 'running';
    });
}

/* ==================== PARTICULES DORÉES ==================== */
function initParticles() {
    const container = document.getElementById('particles-bg');
    if (!container) return;

    function spawnParticle() {
        const el = document.createElement('div');
        el.className = 'particle';
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 12 + 10;
        const leftPct = Math.random() * 100;

        Object.assign(el.style, {
            width:  `${size}px`,
            height: `${size}px`,
            left:   `${leftPct}%`,
            bottom: '-10px',
            animationDuration: `${duration}s`
        });

        container.appendChild(el);
        el.addEventListener('animationend', () => el.remove(), { once: true });
    }

    setInterval(spawnParticle, 1500);
}

/* ==================== FEATURES GRID ==================== */
function initFeatures() {
    const grid = document.getElementById('features-grid');
    if (!grid) return;

    FEATURES.forEach((feature, i) => {
        const card = document.createElement('article');
        card.className = 'card feature-card fade-in-up';
        card.style.transitionDelay = `${i * 80}ms`;
        card.innerHTML = `
            <div class="feature-card__icon-circle">
                <i data-lucide="${feature.icon}"></i>
            </div>
            <h3 class="feature-card__title">${feature.title}</h3>
            <p class="feature-card__description">${feature.desc}</p>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

/* ==================== DÉCOUVERTES ==================== */
function initDiscoveries() {
    const grid = document.getElementById('discoveries-grid');
    if (!grid) return;

    DISCOVERIES.forEach((item, i) => {
        const card = document.createElement('article');
        card.className = 'discovery-card fade-in-up';
        card.style.transitionDelay = `${i * 80}ms`;
        card.innerHTML = `
            <div class="discovery-card__icon">
                <i data-lucide="${item.icon}"></i>
            </div>
            <h3 class="discovery-card__title">${item.title}</h3>
            <p class="discovery-card__text">${item.content}</p>
            <span class="discovery-card__category">${item.category}</span>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

/* ==================== PARCOURS (3 ONGLETS) ==================== */
function initPathway() {
    const slider = document.getElementById('pathway-slider');
    const tabs = document.querySelectorAll('.pathway__tab');
    if (!slider) return;

    function renderPathway(type) {
        slider.innerHTML = '';
        const items = PATHWAY_DATA[type] || [];

        items.forEach((item, i) => {
            const card = document.createElement('div');
            card.className = 'pathway__card fade-in-up';
            card.style.transitionDelay = `${i * 60}ms`;
            card.innerHTML = `
                <span class="pathway__badge">${item.level}</span>
                <h3 class="pathway__block-title">${item.title}</h3>
                <div class="pathway__lessons">
                    <i data-lucide="book-open"></i>
                    <span>${item.lessons}</span>
                </div>
            `;
            slider.appendChild(card);
        });

        lucide.createIcons();
        // Re-observe les nouveaux éléments
        document.querySelectorAll('.pathway__card.fade-in-up').forEach(el => {
            setTimeout(() => el.classList.add('visible'), 50);
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderPathway(tab.dataset.tab);
        });
    });

    renderPathway('quiz');
}

/* ==================== PHONE SLIDER ==================== */
function initPhoneSlider() {
    const screenshot = document.getElementById('phone-screenshot');
    const dotsContainer = document.getElementById('phone-dots');
    if (!screenshot || !dotsContainer) return;

    let currentIndex = 0;
    let intervalId;

    PHONE_SCREENSHOTS.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'phone-mockup__dot';
        dot.setAttribute('aria-label', `Capture ${i + 1}`);
        dot.addEventListener('click', () => { goToSlide(i); resetAutoPlay(); });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.phone-mockup__dot');

    function goToSlide(index) {
        screenshot.style.opacity = '0';
        setTimeout(() => {
            screenshot.src = PHONE_SCREENSHOTS[index];
            screenshot.style.opacity = '1';
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            currentIndex = index;
        }, 380);
    }

    const nextSlide = () => goToSlide((currentIndex + 1) % PHONE_SCREENSHOTS.length);
    const prevSlide = () => goToSlide((currentIndex - 1 + PHONE_SCREENSHOTS.length) % PHONE_SCREENSHOTS.length);

    document.getElementById('phone-prev')?.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });
    document.getElementById('phone-next')?.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });

    function startAutoPlay() {
        stopAutoPlay();
        intervalId = setInterval(() => requestAnimationFrame(nextSlide), 3200);
    }
    function stopAutoPlay()  { if (intervalId) clearInterval(intervalId); }
    function resetAutoPlay() { stopAutoPlay(); startAutoPlay(); }

    document.addEventListener('visibilitychange', () => {
        document.hidden ? stopAutoPlay() : startAutoPlay();
    });

    goToSlide(0);
    startAutoPlay();
}

/* ==================== GALERIE ==================== */
function initGallery() {
    const slider = document.getElementById('gallery-slider');
    const dotsContainer = document.getElementById('gallery-dots');
    if (!slider || !dotsContainer) return;

    let currentIndex = 0;

    GALLERY_SCREENSHOTS.forEach((shot, i) => {
        const slide = document.createElement('div');
        slide.className = 'gallery__slide';
        slide.innerHTML = `
            <figure>
                <div class="gallery__phone-frame">
                    <img src="${shot.url}" alt="${shot.caption}" class="gallery__image" loading="lazy">
                </div>
                <figcaption class="gallery__caption">${shot.caption}</figcaption>
            </figure>
        `;
        slider.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = 'gallery__dot';
        dot.setAttribute('aria-label', `Capture ${i + 1}`);
        dot.addEventListener('click', () => scrollToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const slides = slider.querySelectorAll('.gallery__slide');
    const dots = dotsContainer.querySelectorAll('.gallery__dot');

    function scrollToSlide(index) {
        const slide = slides[index];
        const scrollPos = slide.offsetLeft - slider.offsetWidth / 2 + slide.offsetWidth / 2;
        slider.scrollTo({ left: scrollPos, behavior: 'smooth' });
        updateActive(index);
    }

    function updateActive(index) {
        currentIndex = index;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            slide.classList.toggle('adjacent', Math.abs(i - index) === 1);
        });
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    slider.addEventListener('scroll', () => {
        const center = slider.scrollLeft + slider.offsetWidth / 2;
        let closest = 0, closestDist = Infinity;
        slides.forEach((slide, i) => {
            const dist = Math.abs(center - (slide.offsetLeft + slide.offsetWidth / 2));
            if (dist < closestDist) { closestDist = dist; closest = i; }
        });
        updateActive(closest);
    }, { passive: true });

    document.getElementById('gallery-prev')?.addEventListener('click', () => scrollToSlide(Math.max(0, currentIndex - 1)));
    document.getElementById('gallery-next')?.addEventListener('click', () => scrollToSlide(Math.min(GALLERY_SCREENSHOTS.length - 1, currentIndex + 1)));

    updateActive(0);
}

/* ==================== NAVIGATION SCROLL ==================== */
function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav--scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ==================== PROGRESS BAR TOP ==================== */
function initProgressBar() {
    const bar = document.getElementById('progress-bar-top');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const h = document.documentElement;
        const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        bar.style.width = scrolled + '%';
    }, { passive: true });
}

/* ==================== BACK TO TOP ==================== */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ==================== FAQ ACCORDION ==================== */
function initFAQ() {
    const items = document.querySelectorAll('.faq__item');
    items.forEach(item => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                items.forEach(other => { if (other !== item) other.open = false; });
            }
        });
    });
}

/* ==================== FADE-IN-UP ==================== */
function initFadeInUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

/* ==================== COUNTER ANIMATION ==================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            let start = 0;
            const step = Math.ceil(target / 60);
            const tick = () => {
                start = Math.min(start + step, target);
                el.textContent = start + suffix;
                if (start < target) requestAnimationFrame(tick);
            };
            tick();
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

/* ==================== VERSET DU JOUR ==================== */
function initVerseOfDay() {
    const textEl = document.getElementById('verse-text');
    const refEl = document.getElementById('verse-reference');
    const dateEl = document.getElementById('verse-date');
    const copyBtn = document.getElementById('verse-copy');
    const shareBtn = document.getElementById('verse-share');

    if (!textEl || !refEl) return;

    // Sélection basée sur le jour de l'année (rotation quotidienne)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86400000);
    const index = dayOfYear % DAILY_VERSES.length;
    const verse = DAILY_VERSES[index];

    // Date lisible
    if (dateEl) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        dateEl.textContent = now.toLocaleDateString('fr-FR', options);
    }

    // Effet machine à écrire
    typeWriter(textEl, `« ${verse.text} »`, 22, () => {
        refEl.textContent = `— ${verse.ref}`;
        refEl.style.opacity = '1';
    });
    refEl.textContent = '';
    refEl.style.opacity = '0';
    refEl.style.transition = 'opacity 0.5s ease';

    // Bouton copier
    copyBtn?.addEventListener('click', async () => {
        const fullText = `« ${verse.text} »\n— ${verse.ref}\n\nVia SmartFaith`;
        try {
            await navigator.clipboard.writeText(fullText);
            showToast('Verset copié !');
        } catch {
            showToast('Impossible de copier');
        }
    });

    // Bouton partager
    shareBtn?.addEventListener('click', async () => {
        const fullText = `« ${verse.text} »\n— ${verse.ref}\n\nVia SmartFaith`;
        if (navigator.share) {
            try {
                await navigator.share({ title: 'Verset du jour', text: fullText });
            } catch { /* user cancelled */ }
        } else {
            await navigator.clipboard.writeText(fullText);
            showToast('Verset copié !');
        }
    });
}

/* Effet machine à écrire */
function typeWriter(el, text, speed, onComplete) {
    el.textContent = '';
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    el.appendChild(cursor);

    function type() {
        if (i < text.length) {
            cursor.insertAdjacentText('beforebegin', text.charAt(i));
            i++;
            setTimeout(type, speed);
        } else {
            cursor.remove();
            onComplete?.();
        }
    }
    setTimeout(type, 600);
}

/* ==================== TOAST ==================== */
function initToast() {
    // Rien à initialiser, juste la fonction exposée
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('visible');
    }, 2500);
}

/* ==================== MENU BURGER MOBILE ==================== */
function initBurger() {
    const burger = document.getElementById('nav-burger');
    const menu = document.querySelector('.nav__menu');
    if (!burger || !menu) return;

    function closeMenu() {
        menu.classList.remove('nav__menu--open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }

    function toggleMenu() {
        const isOpen = menu.classList.contains('nav__menu--open');
        if (isOpen) {
            closeMenu();
        } else {
            menu.classList.add('nav__menu--open');
            burger.classList.add('active');
            burger.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');
        }
    }

    // Clic sur le burger
    burger.addEventListener('click', toggleMenu);

    // Clic sur un lien → ferme le menu
    menu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Clic en dehors → ferme le menu
    document.addEventListener('click', (e) => {
        if (
            menu.classList.contains('nav__menu--open') &&
            !menu.contains(e.target) &&
            !burger.contains(e.target)
        ) {
            closeMenu();
        }
    });

    // Échap → ferme le menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('nav__menu--open')) {
            closeMenu();
        }
    });

    // Si l'écran repasse en desktop → ferme le menu
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}