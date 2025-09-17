
    // Theme toggle with persistence
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){ root.setAttribute('data-theme', savedTheme); themeToggle?.setAttribute('aria-pressed', savedTheme==='dark') }
    themeToggle?.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.setAttribute('aria-pressed', String(next==='dark'));
    });

    // Contact dialog
    const dialog = document.getElementById('contactDialog');
    const openers = [document.getElementById('openContact'), document.getElementById('openContact2')].filter(Boolean);
    const closeBtn = document.getElementById('closeDialog');
    openers.forEach(btn => btn.addEventListener('click', () => dialog.showModal()));
    closeBtn.addEventListener('click', () => dialog.close());

    // Basic validation (prevent accidental empty submit in some browsers)
    document.getElementById('contactForm').addEventListener('submit', (e)=>{
      const form = e.currentTarget;
      if(!form.checkValidity()){
        e.preventDefault();
      }
      // TODO: hook your FormSubmit/EmailJS here if needed
    });

    // Simple mobile menu (could open a drawer if you want)
    document.getElementById('openMenu')?.addEventListener('click', ()=>{
      alert('Menu mobile à brancher (drawer)');
    });