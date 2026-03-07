const DATA = {
  firstNames: ["Axel","Mira","Kai","Zara","Luca","Nova","Eli","Soren","Aria","Finn","Vera","Cass","Noel","Ren","Lyra","Theo","Sia","Dex","Zoe","Orion","Hana","Bram","Wren","Sol","Piper","Remy","Io","Juno","Atlas","Cleo"],
  lastNames: ["Müller","Nakamura","Petrov","Osei","Larsson","Ferreira","Tanaka","Volkov","Park","Hassan","Bergmann","Ito","Svensson","Mehta","Kowalski","Ibarra","Lindqvist","Yamamoto","Andersen","Nkosi"],
  
  usernamePatterns: [
    (f,l,lang) => `${f.toLowerCase()}${l.toLowerCase().slice(0,4)}`,
    (f,l,lang) => `${lang}${f.toLowerCase()}`,
    (f,l,lang) => `0x${f.toLowerCase()}`,
    (f,l,lang) => `${f.toLowerCase()}_dev`,
    (f,l,lang) => `${f.toLowerCase()}${Math.floor(Math.random()*9)+1}`,
    (f,l,lang) => `${l.toLowerCase()}${f.slice(0,1).toLowerCase()}`,
    (f,l,lang) => `the${f.toLowerCase()}`,
    (f,l,lang) => `${lang}_${f.toLowerCase()}`,
    (f,l,lang) => `${f.slice(0,1).toLowerCase()}${l.toLowerCase()}`,
    (f,l,lang) => `_${f.toLowerCase()}_`,
  ],

  stacks: {
    fullstack: ["TypeScript","React","Node.js","PostgreSQL","Redis","Docker","Tailwind","GraphQL","Prisma","Vite","Next.js","Kubernetes"],
    backend: ["Go","Rust","PostgreSQL","gRPC","Kafka","Redis","Docker","K8s","Prometheus","NATS","etcd","Terraform"],
    frontend: ["TypeScript","React","Vue","CSS","Figma","Three.js","Framer","Vite","GSAP","Radix UI","Storybook","WebGL"],
    devops: ["Terraform","K8s","Helm","ArgoCD","Prometheus","Grafana","Ansible","AWS","GCP","Pulumi","Vault","Cilium"],
    ml: ["Python","PyTorch","JAX","CUDA","Ray","Triton","HuggingFace","NumPy","Weights & Biases","FastAPI","ONNX","MLflow"],
    security: ["C","Python","Rust","GDB","IDA Pro","Burp Suite","Nmap","Wireshark","LLVM","eBPF","Ghidra","Metasploit"],
    mobile: ["Kotlin","Swift","Jetpack","Compose","Flutter","Dart","Xcode","Coroutines","Room","Ktor","Realm","Firebase"],
    blockchain: ["Solidity","Rust","TypeScript","Foundry","Hardhat","IPFS","ethers.js","Cairo","Move","Anchor","The Graph","Chainlink"],
    gamedev: ["C++","Rust","OpenGL","Vulkan","WASM","Bevy","Godot","GLSL","Box2D","Dear ImGui","SDL2","WebGPU"],
    embedded: ["C","Rust","C++","ARM","RISC-V","FreeRTOS","Zephyr","JTAG","LLVM","CMake","OpenOCD","GDB"],
  },

  bioTemplates: {
    fullstack: [
      "Building things end-to-end. Obsessed with the DX of the full stack — from DB schema to CSS animation.",
      "I make servers talk to browsers and browsers talk back. Sometimes they even agree.",
      "Compilers on one side, pixels on the other. I live in the middle.",
    ],
    backend: [
      "Latency is a moral failing. I write distributed systems that don't lie.",
      "I think about consistency models the way other people think about movies.",
      "Services, queues, caches. Zero-downtime deploys. No `kubectl exec` in prod.",
    ],
    frontend: [
      "Turning design tokens into delight. CSS should spark joy.",
      "I care deeply about 60fps and the scroll event. Web is a canvas.",
      "Accessibility is not optional. Animations should be intentional.",
    ],
    devops: [
      "If it's not in version control, it doesn't exist. Infrastructure as vibes.",
      "YAML wrangler. Service mesh enthusiast. P99 is the only latency that matters.",
      "Making deployments boring since the before times.",
    ],
    ml: [
      "Training loops, loss curves, and the occasional existential crisis at 3am.",
      "Turning GPUs into understanding. Slowly. Expensively.",
      "ML infra → research → deployment. Repeat until the loss converges.",
    ],
    security: [
      "Breaking things so you don't have to. All vulnerabilities are logic errors.",
      "CTF player, fuzzer writer, kernel patch submitter.",
      "Threat models as architecture. Defense in depth. Zero trust, always.",
    ],
    mobile: [
      "Shipping pixels to pockets. Coroutines over callbacks, always.",
      "Native performance. Smooth scrolling. Dark mode that actually looks good.",
      "I obsess over app cold-start time and onboarding flows.",
    ],
    blockchain: [
      "Re-entrancy free since 2021. Every bug in prod is a lesson in immutability.",
      "Trustless protocols, zero-knowledge proofs, and way too much time on testnets.",
      "Smart contracts that are actually smart. Audits welcome.",
    ],
    gamedev: [
      "Entity-component systems, SIMD math, and the eternal struggle with floating point.",
      "Making interactive worlds. Every frame is a chance to do less work.",
      "Game feel > game design. The juice is the game.",
    ],
    embedded: [
      "Writing software that touches metal. Stack overflows are not metaphorical.",
      "Interrupt-driven, register-aware, and deeply unimpressed by frameworks.",
      "Closer to the hardware, further from the problems.",
    ],
  },

  vibeLines: {
    indie: ["building in public →", "side projects are my main projects", "shipping > perfecting"],
    oss: ["all my code belongs to the commons", "open by default", "PRs welcome, RFCs preferred"],
    corporate: ["staff eng @ [redacted]", "opinions are my own", "ex-FAANG refugee"],
    researcher: ["adjacent to academia", "reading papers so you don't have to", "ms → phd dropout → engineer"],
    startup: ["0→1 specialist", "prev: 3 startups, 2 exits, 1 fire", "currently building something new"],
    minimalist: ["less code is better code", "delete first, add later", "simplicity is the ultimate sophistication"],
    chaotic: ["git push --force is a valid strategy", "idk it worked on my machine", "semicolons are optional"],
  },

  interests: ["compilers","distributed systems","type theory","functional programming","OS internals","networking","game engines","graphics","cryptography","formal verification","robotics","audio DSP","WebAssembly","language design","reverse engineering"],

  emoji: {
    fullstack: "🌐", backend: "⚙️", frontend: "🎨", devops: "🚀", ml: "🧠", security: "🔐", mobile: "📱", blockchain: "⛓️", gamedev: "🎮", embedded: "🔧"
  },

  langEmoji: { rust:"🦀", go:"🐹", python:"🐍", ts:"🔷", cpp:"⚡", kotlin:"🎯", haskell:"λ", elixir:"💜", zig:"⚡", ocaml:"🐫" },
};

let currentProfile = null;

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function generate() {
  const spec = document.getElementById('spec').value;
  const vibe = document.getElementById('vibe').value;
  const lang = document.getElementById('lang').value;
  const loc  = document.getElementById('location').value;

  const firstName = rand(DATA.firstNames);
  const lastName  = rand(DATA.lastNames);
  const usernameFn = rand(DATA.usernamePatterns);
  const username = usernameFn(firstName, lastName, lang);
  const displayName = `${firstName} ${lastName}`;

  const bioLine = rand(DATA.bioTemplates[spec]);
  const vibeLine = rand(DATA.vibeLines[vibe]);
  const interest1 = rand(DATA.interests);
  let interest2 = rand(DATA.interests);
  while (interest2 === interest1) interest2 = rand(DATA.interests);

  const stack = DATA.stacks[spec];
  const stackSubset = [...stack].sort(() => 0.5 - Math.random()).slice(0, randInt(5, 8));

  const repos   = randInt(12, 240);
  const stars   = randInt(50, 8400);
  const followers = randInt(20, 3200);
  const yearsActive = randInt(2, 12);

  const locLabel = {SF:"San Francisco, CA", NYC:"New York, NY", SEA:"Seattle, WA", BER:"Berlin, DE", LON:"London, UK", TKY:"Tokyo, JP", SGP:"Singapore", AUS:"Austin, TX", RMT:"Remote 🌍"}[loc];

  const avatarEmoji = DATA.langEmoji[lang] || DATA.emoji[spec];
  const specLabel = document.getElementById('spec').options[document.getElementById('spec').selectedIndex].text;

  // Build profile README
  const readme = `<!-- github profile readme -->

# Hey, I'm ${firstName} ${lastName}

${bioLine}

## About
- 🔭 Currently working on: ${rand(["a new OSS project","improving DX at $dayjob","something I can't talk about yet","a side project that got out of hand"])}
- 🌱 Learning: ${rand(["formal methods","new compiler techniques","making my benchmarks lie less","distributed consensus protocols","things I should have learned earlier"])}
- 💬 Ask me about: ${interest1}, ${interest2}
- 📍 ${locLabel}
- ${vibeLine}

## Stack
\`\`\`
${stackSubset.join(' • ')}
\`\`\`

## Stats
> ${repos} repos · ${stars} ⭐ earned · ${followers} followers · ${yearsActive}yr on GitHub`;

  currentProfile = { username, displayName, bio: bioLine, vibe: vibeLine, stack: stackSubset, loc: locLabel, spec: specLabel, lang, repos, stars, followers, yearsActive, readme };

  // Render
  document.getElementById('avatarEmoji').textContent = avatarEmoji;
  document.getElementById('displayName').textContent = displayName;
  document.getElementById('username').textContent = username;
  document.getElementById('bioShort').textContent = bioLine;

  // Tags
  const tagsEl = document.getElementById('profileTags');
  tagsEl.innerHTML = '';
  [specLabel, lang.charAt(0).toUpperCase()+lang.slice(1), vibe].forEach((t,i) => {
    const tag = document.createElement('span');
    tag.className = 'tag ' + (['','green','purple'][i]);
    tag.textContent = t;
    tagsEl.appendChild(tag);
  });

  // Stats
  document.getElementById('profileStats').innerHTML = `
    <span class="stat"><strong>${repos}</strong> repos</span>
    <span class="stat"><strong>${stars.toLocaleString()}</strong> ⭐ stars</span>
    <span class="stat"><strong>${followers.toLocaleString()}</strong> followers</span>
    <span class="stat"><strong>${yearsActive}yr</strong> active</span>`;

  // Identity JSON
  document.getElementById('identityText').innerHTML = `
    <div class="section-label">fields</div>
    <div class="field-row"><span class="field-key">"username":</span><span class="field-val"><span class="str">"${username}"</span></span></div>
    <div class="field-row"><span class="field-key">"name":</span><span class="field-val"><span class="str">"${displayName}"</span></span></div>
    <div class="field-row"><span class="field-key">"bio":</span><span class="field-val"><span class="str">"${bioLine}"</span></span></div>
    <div class="field-row"><span class="field-key">"location":</span><span class="field-val"><span class="str">"${locLabel}"</span></span></div>
    <div class="field-row"><span class="field-key">"specialization":</span><span class="field-val"><span class="str">"${specLabel}"</span></span></div>
    <div class="field-row"><span class="field-key">"primary_lang":</span><span class="field-val"><span class="str">"${lang}"</span></span></div>
    <div class="field-row"><span class="field-key">"vibe":</span><span class="field-val"><span class="str">"${vibeLine}"</span></span></div>
    <div class="field-row"><span class="field-key">"public_repos":</span><span class="field-val"><span class="num">${repos}</span></span></div>
    <div class="field-row"><span class="field-key">"total_stars":</span><span class="field-val"><span class="num">${stars}</span></span></div>
    <div class="field-row"><span class="field-key">"followers":</span><span class="field-val"><span class="num">${followers}</span></span></div>
    <div class="field-row"><span class="field-key">"hireable":</span><span class="field-val"><span class="bool">${rand([true,false,true])}</span></span></div>
  `;

  // Stack grid
  const stackEl = document.getElementById('stackGrid');
  stackEl.innerHTML = '';
  stack.forEach(t => {
    const d = document.createElement('div');
    d.className = 'stack-item';
    d.textContent = t;
    stackEl.appendChild(d);
  });

  // Bio full
  document.getElementById('bioFull').textContent = readme;

  // Contribution graph
  const grid = document.getElementById('contribGrid');
  grid.innerHTML = '';
  for (let i = 0; i < 52 * 7; i++) {
    const cell = document.createElement('div');
    const r = Math.random();
    cell.className = 'contrib-cell ' + (r < 0.35 ? 'c0' : r < 0.55 ? 'c1' : r < 0.72 ? 'c2' : r < 0.88 ? 'c3' : 'c4');
    grid.appendChild(cell);
  }

  const result = document.getElementById('result');
  result.classList.add('visible');
  result.querySelectorAll('.animate-in').forEach((el, i) => {
    el.style.opacity = '0';
    setTimeout(() => { el.style.animation = 'none'; el.offsetHeight; el.style.animation = ''; el.style.opacity = ''; }, i * 80);
  });
}

function copySection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText || el.textContent).then(() => {
    const btn = el.closest('.card').querySelector('.copy-btn');
    if (btn) { btn.textContent = 'copied!'; setTimeout(() => btn.textContent = 'copy', 1500); }
  });
}

function copyAll() {
  if (!currentProfile) return;
  const text = `Username: ${currentProfile.username}
Name: ${currentProfile.displayName}
Bio: ${currentProfile.bio}
Location: ${currentProfile.loc}
Specialization: ${currentProfile.spec}
Primary Language: ${currentProfile.lang}
Vibe: ${currentProfile.vibe}
Stack: ${currentProfile.stack.join(', ')}
Repos: ${currentProfile.repos} | Stars: ${currentProfile.stars} | Followers: ${currentProfile.followers}

README:
${currentProfile.readme}`;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelectorAll('.btn-secondary')[1];
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = '⎘ Copy All Fields', 1800);
  });
}

// Auto-generate on load
generate();