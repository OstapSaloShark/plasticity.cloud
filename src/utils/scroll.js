const onScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -102;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

export {
  onScrollToSection,
};