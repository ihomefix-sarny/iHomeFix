const SERVICES = [
  {k:"screenC", t:"Екран (копія)", d:"Якісний модуль, 30–60 хв."},
  {k:"screenO", t:"Екран (оригінал)", d:"Сервісний OLED/LCD, True Tone за можливості."},
  {k:"batt", t:"Акумулятор", d:"Нова АКБ, перевірка циклів."},
  {k:"back", t:"Задня кришка / скло", d:"Заміна кришки без пошкодження рамки."},
  {k:"cam", t:"Камера", d:"Основна або фронтальна."},
  {k:"port", t:"Роз’єм зарядки", d:"Lightning / USB-C."},
];
const PHONES = [
  ["x","iPhone X","2017","Space Gray","phones/x.jpg","2 камери вертикально"],
  ["xr","iPhone XR","2018","Coral","phones/xr.jpg","1 камера"],
  ["xs","iPhone XS","2018","Gold","phones/xs.jpg","2 камери, OLED"],
  ["xsm","iPhone XS Max","2018","Gold","phones/xsm.jpg","6.5″ OLED, 2 камери"],
  ["11","iPhone 11","2019","Green","phones/11.jpg","квадрат, 2 камери"],
  ["11p","iPhone 11 Pro","2019","Midnight Green","phones/11p.jpg","3 камери + спалах"],
  ["11pm","iPhone 11 Pro Max","2019","Midnight Green","phones/11pm.jpg","3 камери, 6.5″"],
  ["12","iPhone 12","2020","Blue","phones/12.jpg","2 камери, плоскі грані"],
  ["12m","iPhone 12 mini","2020","Blue","phones/12m.jpg","5.4″, 2 камери"],
  ["12p","iPhone 12 Pro","2020","Pacific Blue","phones/12p.jpg","3 камери + LiDAR"],
  ["12pm","iPhone 12 Pro Max","2020","Pacific Blue","phones/12pm.jpg","3 камери + LiDAR, 6.7″"],
  ["13","iPhone 13","2021","Midnight","phones/13.jpg","2 камери по діагоналі"],
  ["13m","iPhone 13 mini","2021","Midnight","phones/13m.jpg","5.4″, діагональні камери"],
  ["13p","iPhone 13 Pro","2021","Graphite","phones/13p.jpg","3 камери + LiDAR, 120 Гц"],
  ["13pm","iPhone 13 Pro Max","2021","Graphite","phones/13pm.jpg","3 камери + LiDAR, 6.7″"],
  ["14","iPhone 14","2022","Blue","phones/14.jpg","2 камери по діагоналі"],
  ["14plus","iPhone 14 Plus","2022","Blue","phones/14plus.jpg","6.7″, 2 камери"],
  ["14p","iPhone 14 Pro","2022","Deep Purple","phones/14p.jpg","3 камери + LiDAR, Dynamic Island"],
  ["14pm","iPhone 14 Pro Max","2022","Deep Purple","phones/14pm.jpg","3 камери + LiDAR, 6.7″"],
  ["15","iPhone 15","2023","Pink","phones/15.jpg","USB-C, 2 камери"],
  ["15plus","iPhone 15 Plus","2023","Pink","phones/15plus.jpg","USB-C, 6.7″"],
  ["15p","iPhone 15 Pro","2023","Natural Titanium","phones/15p.jpg","титан, 3 камери + LiDAR"],
  ["15pm","iPhone 15 Pro Max","2023","Natural Titanium","phones/15pm.jpg","5× tetraprism + LiDAR"],
  ["16","iPhone 16","2024","Ultramarine","phones/16.jpg","2 камери вертикально, Camera Control"],
  ["16plus","iPhone 16 Plus","2024","Ultramarine","phones/16plus.jpg","6.7″, вертикальні камери"],
  ["16p","iPhone 16 Pro","2024","Desert Titanium","phones/16p.jpg","3 камери + LiDAR, Camera Control"],
  ["16pm","iPhone 16 Pro Max","2024","Desert Titanium","phones/16pm.jpg","3 камери + LiDAR, 6.9″"],
  ["17","iPhone 17","2025","Sky Blue","phones/17.jpg","2 камери вертикально"],
  ["17p","iPhone 17 Pro","2025","Deep Blue","phones/17p.jpg","camera plateau, 3 камери"],
  ["17pm","iPhone 17 Pro Max","2025","Cosmic Orange","phones/17pm.jpg","camera plateau, 6.9″"],
  ["air","iPhone Air","2025","Sky Blue","phones/air.jpg","ультратонкий, 2 камери"],
].map(([id,name,year,color,img,note]) => ({id,name,year,color,img,note}));
const R = (a,b,c,d,e,f) => ({screenC:a,screenO:b,batt:c,back:d,cam:e,port:f});
const DEFAULT_PRICES = {
  x:R(2200,4200,900,1400,1100,700), xr:R(2100,3800,900,1300,1100,700), xs:R(2400,4600,1000,1500,1200,800),
  xsm:R(2600,5000,1100,1700,1400,850), "11":R(2400,4500,1000,1500,1300,800), "11p":R(2700,5200,1150,1700,1500,850),
  "11pm":R(2900,5600,1250,1900,1650,900), "12":R(2900,5200,1200,1700,1600,900), "12m":R(2700,4900,1150,1600,1500,850),
  "12p":R(3300,6500,1350,1900,1800,950), "12pm":R(3500,7000,1450,2100,2000,1000), "13":R(3500,6500,1400,1900,1800,1000),
  "13m":R(3300,6200,1350,1800,1700,950), "13p":R(4000,8200,1550,2100,2100,1050), "13pm":R(4300,8700,1650,2300,2300,1100),
  "14":R(4500,7800,1700,2000,2200,1200), "14plus":R(4800,8500,1800,2100,2400,1250), "14p":R(5400,12000,2100,2500,2700,1450),
  "14pm":R(5600,12800,2300,2700,2900,1550), "15":R(5500,8900,2000,2000,2500,1400), "15plus":R(5800,9800,2100,2100,2700,1500),
  "15p":R(7200,13500,2500,2800,3200,1700), "15pm":R(8000,14500,2800,3000,3500,1800), "16":R(5500,11000,2000,1800,3000,1600),
  "16plus":R(6200,12500,2000,2000,3200,1700), "16p":R(11500,14500,3000,3000,4200,3300), "16pm":R(11500,16500,3000,3000,4500,3500),
  "17":R(6000,12000,2300,2200,3200,1800), "17p":R(6500,13500,2500,2500,3500,2000), "17pm":R(7500,15500,2800,2800,4200,2200),
  air:R(6200,12800,2400,2400,3300,1900)
};
const ADMIN_PHONE = "0678661083";
const ADMIN_PASS = "Yakovets2002";
const BAD = "неправильний логін або пароль";

function esc(s){
  return String(s ?? "").split('"').join("&#34;").split("<").join("&#60;");
}
const money = n => (n||0).toLocaleString("uk-UA") + " ₴";
function canon(raw){ let d=String(raw).replace(/\D/g,""); if(d.startsWith("380")) d="0"+d.slice(3); else if(d.startsWith("38")&&d.length>=11) d="0"+d.slice(2); if(d.length===9) d="0"+d; return d; }
function load(k, fb){ try { return JSON.parse(localStorage.getItem(k)||"null") ?? fb } catch { return fb } }
function save(k,v){
  localStorage.setItem(k, JSON.stringify(v));
  if(k==="ihomefix_sess_v4"){ if(!v) draft=null; render(); }
}
const CLOUD_INBOX="https://webhook.site/b611e6b3-9950-432a-a641-d343f437667d";
let _cloudTimer=null;
function rev(){ return Number(localStorage.getItem("ihomefix_rev_v1")||0); }
function bumpRev(t){ localStorage.setItem("ihomefix_rev_v1", String(t)); }
function scheduleCloud(){
  if(!sess()?.admin) return;
  clearTimeout(_cloudTimer);
  _cloudTimer=setTimeout(pushCloud, 200);
}
function postCloud(obj){
  fetch(CLOUD_INBOX,{method:"POST", mode:"no-cors", headers:{"Content-Type":"text/plain"}, body:JSON.stringify(obj)});
}
function pushCloud(){
  if(!sess()?.admin) return;
  const t=Date.now();
  bumpRev(t);
  postCloud({k:"ihf", t, prices:prices(), services:services()});
  const ph=photos();
  Object.keys(ph).forEach(id=>{
    const data=ph[id];
    if(data && String(data).indexOf("data:image")===0) postCloud({k:"ihf-photo", t, id, data});
  });
  const el=document.getElementById("cloudNote") || document.querySelector(".save-hint");
  if(el) el.textContent="Збережено локально. Для всіх відвідувачів з’явиться протягом хвилини.";
}
async function loadCloud(){
  try{
    const r=await fetch("data.json?t="+Date.now(),{cache:"no-store"});
    if(!r.ok) return;
    const j=await r.json();
    if(!j || !j.t) return;
    const localT=rev();
    const admin=!!sess()?.admin;
    const cloudNewer = j.t > localT;
    if(cloudNewer){
      if(j.prices && typeof j.prices==="object") localStorage.setItem("ihomefix_prices_v4", JSON.stringify(j.prices));
      if(Array.isArray(j.services) && j.services.length) localStorage.setItem("ihomefix_services_v1", JSON.stringify(j.services));
      bumpRev(j.t);
    }
    if(j.photos && typeof j.photos==="object"){
      const cur=load("ihomefix_photos_v4",{});
      let changed=false;
      Object.keys(j.photos).forEach(k=>{
        const v=j.photos[k];
        if(!v) return;
        const localData=String(cur[k]||"").indexOf("data:image")===0;
        if(admin && localData && !cloudNewer) return;
        if(cur[k]!==v){ cur[k]=v; changed=true; }
      });
      if(changed) localStorage.setItem("ihomefix_photos_v4", JSON.stringify(cur));
    }
  }catch(e){}
}
function prices(){ const raw=load("ihomefix_prices_v4",{}); const out={}; for (const p of PHONES) out[p.id]={...(DEFAULT_PRICES[p.id]||{}), ...(raw[p.id]||{})}; return out; }
function services(){ return load("ihomefix_services_v1", SERVICES); }
function photos(){ return load("ihomefix_photos_v4", {}); }
function sess(){ return load("ihomefix_sess_v4", null); }
function users(){ return load("ihomefix_users_v4", {}); }
function loginAdmin(phone, pass){
  const c=canon(phone);
  const p=String(pass||"");
  if(c===ADMIN_PHONE && p===ADMIN_PASS){ save("ihomefix_sess_v4", {name:"Адмін", phone:c, admin:true}); return ""; }
  return BAD;
}
window.openAdmin=function(){
  const u=new URL(location.href);
  u.hash="#/admin";
  window.open(u.toString(), "_blank", "noopener");
};
window.adminSubmit=function(e){
  e.preventDefault();
  const fd=new FormData(e.target);
  const err=loginAdmin(String(fd.get("phone")||"").trim(), String(fd.get("password")||""));
  const el=document.getElementById("adminErr");
  if(el) el.textContent=err;
  return false;
};
function adminGate(){
  const s=sess();
  if(s?.admin){
    return `<main><section class="box" style="margin:2rem 0">
      <p class="pill">Це вікно тільки для адміністратора</p>
      <h1 style="margin-top:1rem">Вхід адміністратора</h1>
      <p class="muted" id="cloudNote" style="margin-top:.75rem">Ви в системі. Правки з’являться на сайті для всіх.</p>
      <button class="chip" style="margin-top:1rem" type="button" onclick="save('ihomefix_sess_v4',null)">Вийти</button>
    </section>${adminDesk()}</main>`;
  }
  return `<main><section class="box" style="margin:2rem 0">
    <p class="pill">Це вікно тільки для адміністратора</p>
    <h1 style="margin-top:1rem">Вхід адміністратора</h1>
    <form onsubmit="return adminSubmit(event)" style="margin-top:1.25rem">
      <label>Логін</label><input name="phone" placeholder="логін" autocomplete="username">
      <label>Пароль</label><input name="password" type="password" placeholder="пароль" autocomplete="current-password">
      <p class="err" id="adminErr"></p>
      <button class="glow" style="margin-top:.75rem;width:100%;border-radius:.6rem" type="submit">Увійти</button>
    </form>
  </section></main>`;
}
function compress(file, cb){
  const img=new Image();
  const url=URL.createObjectURL(file);
  img.onload=()=>{
    const max=900;
    const scale=Math.min(1, max/Math.max(img.width,img.height));
    const c=document.createElement("canvas");
    c.width=Math.round(img.width*scale);
    c.height=Math.round(img.height*scale);
    c.getContext("2d").drawImage(img,0,0,c.width,c.height);
    URL.revokeObjectURL(url);
    cb(c.toDataURL("image/jpeg",0.72));
  };
  img.src=url;
}
window.setPhoto=function(id, file){
  if(!file || !sess()?.admin) return;
  ensureDraft();
  compress(file, data=>{
    ensureDraft();
    draft.photos[id]=data;
    document.querySelectorAll('[data-ph="'+id+'"]').forEach(img=>{ img.src=data; });
    dirtyNote();
  });
};
window.renSvc=function(k, field, val){
  if(!sess()?.admin) return;
  ensureDraft();
  draft.services=draft.services.map(x=>x.k===k?{...x,[field]:val}:x);
  dirtyNote();
};
window.delSvc=function(k){
  if(!sess()?.admin) return;
  ensureDraft();
  draft.services=draft.services.filter(x=>x.k!==k);
  render();
};
window.addSvc=function(){
  if(!sess()?.admin) return;
  const t=document.getElementById("newSvcT")?.value.trim();
  const d=document.getElementById("newSvcD")?.value.trim()||"";
  if(!t) return;
  ensureDraft();
  draft.services=[...draft.services, {k:"s"+Date.now(), t, d}];
  render();
};
window.updPrice=function(id,k,v){
  if(!sess()?.admin) return;
  ensureDraft();
  draft.prices[id]={...(draft.prices[id]||{}), [k]:Number(v)||0};
  dirtyNote();
};
let draft=null;
function ensureDraft(){
  if(!sess()?.admin) return;
  if(!draft) draft={ prices:JSON.parse(JSON.stringify(prices())), services:JSON.parse(JSON.stringify(services())), photos:{...photos()} };
}
function viewServices(){ return (sess()?.admin && draft) ? draft.services : services(); }
function viewPrices(){ return (sess()?.admin && draft) ? draft.prices : prices(); }
function viewPhotos(){ return (sess()?.admin && draft) ? {...photos(), ...draft.photos} : photos(); }
function pic(id, fallback){ return viewPhotos()[id] || fallback; }
function dirtyNote(){
  document.querySelectorAll(".save-admin").forEach(b=>{
    b.textContent="Зберегти зміни";
  });
  document.querySelectorAll(".save-hint").forEach(p=>{
    p.textContent="Є незбережені правки.";
  });
}
window.commitAdmin=function(){
  if(!sess()?.admin) return;
  ensureDraft();
  document.querySelectorAll("[data-svc]").forEach(el=>{
    const k=el.getAttribute("data-svc");
    const field=el.getAttribute("data-field");
    const s=draft.services.find(x=>x.k===k);
    if(s) s[field]=el.value;
  });
  document.querySelectorAll("[data-price]").forEach(el=>{
    const id=el.getAttribute("data-phone");
    const k=el.getAttribute("data-price");
    draft.prices[id]=draft.prices[id]||{};
    draft.prices[id][k]=Number(el.value)||0;
  });
  const t=Date.now();
  bumpRev(t);
  localStorage.setItem("ihomefix_prices_v4", JSON.stringify(draft.prices));
  localStorage.setItem("ihomefix_services_v1", JSON.stringify(draft.services));
  localStorage.setItem("ihomefix_photos_v4", JSON.stringify({...photos(), ...draft.photos}));
  draft=null;
  pushCloud();
  render();
};
function saveBar(){
  return `<button class="glow save-admin" style="margin-top:1.5rem;width:100%;border-radius:.8rem;padding:1rem;font-size:1.1rem" type="button" onclick="commitAdmin()">Зберегти</button>
    <p class="muted save-hint" id="cloudNote" style="text-align:center;margin-top:.45rem">Зміни застосуються тільки після збереження.</p>`;
}
let adminTab="all";
window.setAdminTab=function(id){ adminTab=id; ensureDraft(); render(); };
function adminDesk(){
  if(!sess()?.admin) return "";
  const sv=viewServices();
  const tab=adminTab;
  const tabs=`<nav class="nav" style="margin-top:1rem">
    <button class="chip ${tab==="all"?"on":""}" type="button" onclick="setAdminTab('all')">Загальне</button>
    ${PHONES.map(p=>`<button class="chip ${tab===p.id?"on":""}" type="button" onclick="setAdminTab('${p.id}')">${p.name.replace("iPhone ","")}</button>`).join("")}
  </nav>`;
  let body="";
  if(tab==="all"){
    body=`<h3>Види ремонту</h3>
    <div class="grid" style="grid-template-columns:1fr 1fr auto;margin-top:.5rem">
      <input id="newSvcT" placeholder="Назва нового ремонту">
      <input id="newSvcD" placeholder="Опис">
      <button class="glow" type="button" style="border-radius:.6rem;padding:.6rem 1rem" onclick="addSvc()">Додати</button>
    </div>
    ${sv.map(s=>`<div class="grid" style="grid-template-columns:1fr 1fr auto;margin-top:.4rem">
      <input data-svc="${s.k}" data-field="t" value="${esc(s.t)}" oninput="renSvc('${s.k}','t',this.value)">
      <input data-svc="${s.k}" data-field="d" value="${esc(s.d)}" oninput="renSvc('${s.k}','d',this.value)">
      <button class="chip" type="button" onclick="delSvc('${s.k}')">Видалити</button>
    </div>`).join("")}
    <h3>Загальні фото</h3>
    <div class="grid" style="margin-top:.5rem">
      ${[["hero","Головне фото","phones/hero-bench.jpg"],["sideLeft","Лівий край","phones/side-17pm.png"],["sideRight","Правий край","phones/side-15pm.png"]].map(([id,label,fb])=>`
        <label class="thumb">${label}<img data-ph="${id}" src="${pic(id,fb)}" alt=""><input type="file" accept="image/*" onchange="setPhoto('${id}', this.files[0])"></label>`).join("")}
    </div>`;
  } else {
    const p=PHONES.find(x=>x.id===tab);
    const pr=viewPrices()[p.id]||{};
    body=`<h3>${p.name}</h3>
      <p class="muted">Фото моделі і ціни саме для цього iPhone.</p>
      <label class="thumb" style="max-width:16rem;margin-top:.75rem">
        <img data-ph="${p.id}" src="${pic(p.id,p.img)}" alt="${p.name}">
        Змінити фото
        <input type="file" accept="image/*" onchange="setPhoto('${p.id}', this.files[0])">
      </label>
      <div class="grid" style="grid-template-columns:1fr;margin-top:1rem">
        ${sv.map(x=>`<article class="box">
          <p style="font-weight:800">${esc(x.t)}</p>
          <p class="muted" style="font-size:.85rem">${esc(x.d||"")}</p>
          <input type="number" data-price="${x.k}" data-phone="${p.id}" style="margin-top:.6rem;font-size:1.3rem;font-weight:800;color:var(--bright)" value="${pr[x.k]||0}" oninput="updPrice('${p.id}','${x.k}',this.value)">
        </article>`).join("")}
      </div>`;
  }
  return `<section class="admin">
    <h2>Адмін: фото і ремонти</h2>
    <p class="muted">Обери модель вкладкою, зміни ціну або фото, потім натисни «Зберегти».</p>
    <button class="chip" type="button" style="margin-top:.6rem" onclick="save('ihomefix_sess_v4',null)">Вийти</button>
    ${tabs}
    ${body}
    ${saveBar()}
  </section>`;
}
function footer(){
  return `<footer><div class="foot">
    <div><p style="font-family:Syne;font-weight:800;font-size:1.2rem;margin:0">iHome Fix</p>
    <p class="muted" style="margin:.25rem 0 0">Сарни, вул. Княгині Ольги, 40<button class="admin-dot" type="button" onclick="openAdmin()" title="Вхід адміністратора" aria-label="Вхід адміністратора">.</button></p>
    <a href="tel:+380678661083" style="color:var(--bright);font-weight:800">067 866 10 83</a></div>
    <div class="row" style="flex-wrap:wrap">
      <a class="glow" href="https://instagram.com/ihome_fix" target="_blank" rel="noreferrer">Instagram</a>
      <a class="glow" href="https://www.tiktok.com/@ih0mefix" target="_blank" rel="noreferrer">TikTok</a>
      <a class="glow" href="viber://chat?number=%2B380678661083">Viber</a>
      <a class="glow" href="https://t.me/+380678661083" target="_blank" rel="noreferrer">Telegram</a>
    </div></div></footer>`;
}
function home(){
  return `<main>
    <section class="hero">
      <div>
        <p class="pill">Сарни · вул. Княгині Ольги, 40</p>
        <h1 style="font-size:clamp(1.8rem,4vw,3rem);margin-top:1rem">Ремонт телефонів, планшетів, ноутбуків</h1>
        <p class="muted" style="font-size:1.1rem;margin-top:1rem">Якісний ремонт ваших пристроїв. Швидка діагностика одразу на місці. Гарантія на всі види робіт.</p>
        <a class="glow" style="display:inline-flex;margin-top:1.5rem" href="tel:+380678661083">067 866 10 83</a>
      </div>
      <div>
        <div class="card"><img src="${pic("hero","phones/hero-bench.jpg")}" alt="Ремонт" style="height:16rem;width:100%;object-fit:cover"></div>
      </div>
    </section>
    ${adminDesk()}
    <section style="margin-top:3rem">
      <h2 style="font-size:1.8rem">Моделі iPhone</h2>
      <p class="muted">Окрема вкладка для кожної моделі — фото ззаду і прайс саме для неї.</p>
      <div class="grid" style="margin-top:1.25rem">
        ${PHONES.map(p=>`<a class="ph" href="#/m/${p.id}"><div class="stage"><img src="${pic(p.id,p.img)}" alt="${p.name}"></div><div class="pad"><p style="font-weight:800">${p.name}</p><p class="muted" style="font-size:.75rem">${p.color} · ${p.year}</p></div></a>`).join("")}
      </div>
    </section>
    <section style="margin-top:3rem;padding-bottom:2rem">
      <h2 style="font-size:1.8rem">Ми на карті</h2>
      <div class="card" style="margin-top:1rem">
        <iframe title="Карта iHomeFix" style="height:20rem;width:100%;border:0" loading="lazy"
          src="https://maps.google.com/maps?q=%D0%A1%D0%B0%D1%80%D0%BD%D0%B8%20%D0%B2%D1%83%D0%BB.%20%D0%9A%D0%BD%D1%8F%D0%B3%D0%B8%D0%BD%D1%96%20%D0%9E%D0%BB%D1%8C%D0%B3%D0%B8%2040&hl=uk&z=17&output=embed"></iframe>
      </div>
      <p class="muted" style="margin-top:.75rem">м. Сарни, вул. Княгині Ольги, 40<button class="admin-dot" type="button" onclick="openAdmin()" title="Вхід адміністратора" aria-label="Вхід адміністратора">.</button></p>
    </section>
  </main>`+footer();
}
function model(id){
  const p=PHONES.find(x=>x.id===id); if(!p) return home();
  const admin=!!sess()?.admin; const pr=viewPrices()[id]||{}; const sv=viewServices();
  return `<main>
    <a href="#/" style="color:var(--bright);font-weight:700">← усі моделі</a>
    <nav class="nav">${PHONES.map(x=>`<a class="chip ${x.id===id?"on":""}" href="#/m/${x.id}">${x.name.replace("iPhone ","")}</a>`).join("")}</nav>
    <section class="hero">
      <div class="stage">
        <img data-ph="${p.id}" src="${pic(p.id,p.img)}" alt="${p.name}" style="height:24rem;width:100%;object-fit:contain">
        ${admin?`<label class="chip" style="display:inline-block;margin:.6rem">Змінити фото<input type="file" accept="image/*" style="display:block;margin-top:.3rem" onchange="setPhoto('${p.id}', this.files[0])"></label>`:""}
      </div>
      <div>
        <p style="color:var(--bright);font-size:.75rem;font-weight:800;letter-spacing:.12em">${p.year}</p>
        <h1 style="font-size:2.2rem;margin-top:.25rem">${p.name}</h1>
        <p class="muted" style="letter-spacing:.18em;font-size:.75rem;text-transform:uppercase">made in california</p>
        <p class="muted">${p.color} · ${p.note}</p>
        <a class="glow" style="display:inline-flex;margin-top:1.5rem" href="tel:+380678661083">Записатись · 067 866 10 83</a>
      </div>
    </section>
    <section style="margin-top:2.5rem;padding-bottom:2rem">
      <h2>Прайс для ${p.name}</h2>
      ${admin?`<div class="grid" style="grid-template-columns:1fr 1fr auto;margin-top:1rem">
        <input id="newSvcT" placeholder="Назва нового ремонту">
        <input id="newSvcD" placeholder="Опис">
        <button class="glow" type="button" style="border-radius:.6rem;padding:.6rem 1rem" onclick="addSvc()">Додати ремонт</button>
      </div>`:""}
      <div class="grid" style="grid-template-columns:1fr;margin-top:1rem">
        ${sv.map(x=>`<article class="box">
          ${admin?`<input data-svc="${x.k}" data-field="t" value="${esc(x.t)}" oninput="renSvc('${x.k}','t',this.value)">`:`<h3>${x.t}</h3>`}
          ${admin?`<input data-svc="${x.k}" data-field="d" style="margin-top:.4rem" value="${esc(x.d)}" oninput="renSvc('${x.k}','d',this.value)">`:`<p class="muted" style="font-size:.9rem">${x.d||""}</p>`}
          ${admin?`<input type="number" data-price="${x.k}" data-phone="${id}" style="margin-top:.6rem" value="${pr[x.k]||0}" oninput="updPrice('${id}','${x.k}',this.value)">`:`<p class="price">${money(pr[x.k])}</p>`}
          ${admin?`<button class="chip" style="margin-top:.5rem" onclick="delSvc('${x.k}')">Видалити цей ремонт</button>`:""}
        </article>`).join("")}
      </div>
      ${admin?saveBar():""}
    </section>
  </main>`+footer();
}
function render(opts){
  try {
    const h=location.hash.slice(1) || "/";
    if(h==="/admin" || h.startsWith("/admin")){
      document.body.classList.add("admin-win");
      document.getElementById("app").innerHTML = adminGate();
      if(opts && opts.top) window.scrollTo(0,0);
      return;
    }
    document.body.classList.remove("admin-win");
    const m=h.match(/^\/m\/([\w]+)/);
    document.getElementById("app").innerHTML = m ? model(m[1]) : home();
    const L=document.getElementById("sideL");
    const Rimg=document.getElementById("sideR");
    if(L) L.src=pic("sideLeft","phones/side-17pm.png");
    if(Rimg) Rimg.src=pic("sideRight","phones/side-15pm.png");
    if(opts && opts.top) window.scrollTo(0,0);
    syncTopBtn();
  } catch (err) {
    document.getElementById("app").innerHTML = "<main><p class=err>Помилка завантаження. Оновіть сторінку.</p></main>";
    console.error(err);
  }
}
function syncTopBtn(){
  const b=document.getElementById("toTop");
  if(!b) return;
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const near=max>80 && window.scrollY>=max-80;
  b.classList.toggle("show", near && !document.body.classList.contains("admin-win"));
}
document.getElementById("toTop")?.addEventListener("click", ()=>window.scrollTo(0,0));
window.addEventListener("scroll", syncTopBtn, {passive:true});
window.addEventListener("resize", syncTopBtn);
window.addEventListener("hashchange", ()=>render({top:true}));
window.addEventListener("storage", ()=>render());
loadCloud().finally(()=>render({top:true}));
setInterval(()=>{ if(!sess()?.admin) loadCloud().then(()=>render()); }, 20000);
(function rain(){
  const c=document.getElementById("rain"); if(!c) return; const ctx=c.getContext("2d");
  let drops=[], speed=1, lastY=window.scrollY;
  const gutter=()=>Math.max(0,(window.innerWidth-Math.min(896,window.innerWidth))/2);
  function spawn(n){ const g=gutter(); if(g<24) return; for(let i=0;i<n;i++){ const side=Math.random()>.5?"l":"r"; drops.push({x:side==="l"?Math.random()*g:window.innerWidth-g+Math.random()*g,y:-Math.random()*innerHeight,len:40+Math.random()*90,v:1.4+Math.random()*2.4,side,a:.25+Math.random()*.55}); } }
  function resize(){ c.width=innerWidth; c.height=innerHeight; drops=[]; spawn(70); }
  addEventListener("resize", resize); addEventListener("scroll", ()=>{ const y=scrollY, dy=y-lastY; lastY=y; speed=dy>0?Math.min(5.2,1.1+dy*.12):Math.max(.18,.55+dy*.04); }, {passive:true});
  resize();
  (function tick(){ const g=gutter(); ctx.clearRect(0,0,c.width,c.height); speed+=(1-speed)*.02; for(const d of drops){ d.y+=d.v*speed*2.2; if(d.y>c.height+40){ d.y=-d.len; d.x=d.side==="l"?Math.random()*Math.max(g,1):c.width-g+Math.random()*Math.max(g,1);} if(g<24) continue; if(d.side==="l"&&d.x>g) continue; if(d.side==="r"&&d.x<c.width-g) continue; const gr=ctx.createLinearGradient(d.x,d.y,d.x,d.y+d.len); gr.addColorStop(0,"rgba(29,185,84,0)"); gr.addColorStop(.4,`rgba(29,185,84,${d.a})`); gr.addColorStop(1,"rgba(13,122,69,0.05)"); ctx.strokeStyle=gr; ctx.lineWidth=1.4; ctx.beginPath(); ctx.moveTo(d.x,d.y); ctx.lineTo(d.x,d.y+d.len); ctx.stroke(); } requestAnimationFrame(tick); })();
})();
