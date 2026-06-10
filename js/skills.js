const skillsContainer = document.getElementById('skills-container');

skills.forEach((skill, index) => {
  const logoClass = skill.darkLogo
    ? 'skill-logo bg-white rounded-xl p-2'
    : 'skill-logo';

  skillsContainer.innerHTML += `
    <div class="skill-logo-item scale-in group flex flex-col items-center text-center" style="transition-delay: ${index * 0.06}s;">
      <img src="${skill.logo}" alt="${skill.name} logo" class="${logoClass}" loading="lazy">
      <span class="mt-4 text-base md:text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">${skill.name}</span>
    </div>
  `;
});
