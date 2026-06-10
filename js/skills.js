const skillsContainer = document.getElementById('skills-container');

skills.forEach((skill, index) => {
  skillsContainer.innerHTML += `
    <div class="scale-in group rounded-2xl card-gradient border border-border hover:border-primary/50 p-5 flex items-center gap-4" style="transition-delay: ${index * 0.08}s;">
      <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors">
        ${skill.icon}
      </div>
      <span class="font-medium text-foreground group-hover:text-primary transition-colors">${skill.name}</span>
    </div>
  `;
});
