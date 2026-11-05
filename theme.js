(()=>{
 const button=document.getElementById('theme-toggle');
 if(!button)return;
 const media=window.matchMedia('(prefers-color-scheme: dark)');
 function read(){try{return localStorage.getItem('resenha-theme')}catch{return null}}
 function apply(theme){
  const dark=theme==='dark';
  document.documentElement.dataset.theme=dark?'dark':'light';
  button.setAttribute('aria-pressed',String(dark));
  button.setAttribute('aria-label',dark?'Ativar modo claro':'Ativar modo escuro');
  button.querySelector('[data-theme-icon]').textContent=dark?'☀':'☾';
  button.querySelector('[data-theme-label]').textContent=dark?'Modo claro':'Modo escuro';
 }
 const saved=read();
 apply(document.documentElement.dataset.theme||(['light','dark'].includes(saved)?saved:(media.matches?'dark':'light')));
 button.addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  try{localStorage.setItem('resenha-theme',theme)}catch{}
  apply(theme);
 });
 media.addEventListener('change',event=>{if(!['light','dark'].includes(read()))apply(event.matches?'dark':'light')});
})();
