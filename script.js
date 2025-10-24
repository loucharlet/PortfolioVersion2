const backdrop = document.querySelector('.code-background');
const linesCount = 24;           
const speedMin = 12;       
const speedMax = 28;

const snippets = [
  'const hello = name => `Hello ${name}!`;',
  'fetch("/api").then(r=>r.json()).then(console.log)',
  'for (let i=0;i<10;i++){ console.log(i); }',
  'function sum(a,b){ return a+b }',
  'SELECT * FROM users WHERE id = 1;',
  '<div class="card">…</div>',
  'git commit -m "feat: pink vibes"',
  'npm run build && npm run preview',
  'border-radius: 12px; box-shadow: var(--shadow);',
  'gsap.to(".box",{y:100, duration:1})',
];

function rand(min, max){ return Math.random() * (max - min) + min }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)] }

function spawnLine(i){
  const el = document.createElement('div');
  el.className = 'code-line';
  el.style.left = rand(0, 100) + 'vw';
  el.style.top = '-120px';
  el.style.animationDuration = rand(speedMin, speedMax) + 's';
  el.style.fontSize = rand(10, 15) + 'px';
  el.style.opacity = Math.random()*0.25 + 0.08;
  el.textContent = pick(snippets);
  backdrop.appendChild(el);

  el.addEventListener('animationend', () => {
    el.remove();
    spawnLine(i); 
  });
}

for (let i=0; i<linesCount; i++) spawnLine(i);

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    history.replaceState(null, '', '#'+id);
  });
});

(function(){
  const backdrop = document.querySelector('.code-background');
  if(!backdrop) return;

  const linesCount = 24;
  const speedMin = 12;
  const speedMax = 28;

  const snippets = [
    'const hello = name => `Hello ${name}!`;',
    'git commit -m "feat: pink vibes"',
    'npm run build && npm run preview',
    'SELECT * FROM users WHERE id = 1;',
    '<div class="card">…</div>',
    'fetch("/api").then(r=>r.json())',
    'border-radius: 12px; box-shadow: var(--shadow);',
    'for(let i=0;i<10;i++){ console.log(i) }',
  ];

  function rand(min, max){ return Math.random() * (max - min) + min }
  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)] }

  function spawnLine(i){
    const el = document.createElement('div');
    el.className = 'code-line';
    el.style.left = rand(0, 100) + 'vw';
    el.style.top = '-120px';
    el.style.animationDuration = rand(speedMin, speedMax) + 's';
    el.style.fontSize = rand(10, 15) + 'px';
    el.style.opacity = Math.random()*0.25 + 0.08;
    el.textContent = pick(snippets);
    backdrop.appendChild(el);
    el.addEventListener('animationend', ()=>{ el.remove(); spawnLine(i); });
  }

  for(let i=0;i<linesCount;i++) spawnLine(i);
})();



//stackof eclat


document.addEventListener('click', (e) => {
  const numSparks = 8; 
  for (let i = 0; i < numSparks; i++) {
    const spark = document.createElement('div');
    spark.classList.add('click-spark');
    document.body.appendChild(spark);

    const angle = (Math.PI * 2 * i) / numSparks;
    const distance = 30 + Math.random() * 10;
    const x = e.clientX + Math.cos(angle) * distance;
    const y = e.clientY + Math.sin(angle) * distance;

    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;


    spark.animate(
      [
        {
          transform: `translate(${Math.cos(angle) * 0}px, ${Math.sin(angle) * 0}px) scale(1)`,
          opacity: 1,
        },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
          opacity: 0,
        },
      ],
      {
        duration: 600 + Math.random() * 200,
        easing: 'ease-out',
      }
    );

    setTimeout(() => spark.remove(), 700);
  }
});
