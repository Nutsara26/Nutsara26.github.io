const caseData = {
 bkk:{tag:"MOBILE APP / REAL-TIME DATA",title:"BKK Alert",intro:"แอปพลิเคชันที่ช่วยให้ผู้ใช้ตรวจสอบสถานการณ์ในพื้นที่กรุงเทพฯ ก่อนเดินทาง โดยจัดข้อมูลเหตุการณ์และระดับความเสี่ยงให้อ่านง่ายในหน้าเดียว",points:[
  ["Problem","ผู้ใช้ต้องรวบรวมข้อมูลจากหลายแหล่งก่อนตัดสินใจเดินทาง และอาจมองไม่เห็นภาพรวมของแต่ละเขต"],
  ["Approach","แสดงภาพรวมทุกเขต การ์ดสรุปจำนวนข่าวใน 24 ชั่วโมง และระดับความเสี่ยง พร้อมรายละเอียดวัน เวลา และความรุนแรง"],
  ["Implementation","React Native + Expo + TypeScript เชื่อม Supabase / PostgreSQL และรองรับการอัปเดตด้วย Supabase Realtime"],
  ["Next step","เชื่อม API ข่าวและข้อมูลเปิดภาครัฐ เพิ่ม AI สำหรับจัดประเภทข่าว และขยายการติดตามไปยังจังหวัดอื่น"]
 ]},
 mulberry:{tag:"IOT / SMART AGRICULTURE",title:"Smart Mulberry Farming System",intro:"ระบบต้นแบบเกษตรอัจฉริยะสำหรับติดตามสภาพแวดล้อมของแปลงมัลเบอร์รี่ โดยเชื่อมต่อ Sensor, ESP32, Cloud Dashboard และระบบควบคุมรดน้ำ",points:[
  ["Problem","การดูแลแปลงต้องติดตามความชื้นในดิน ปริมาณน้ำ ค่า pH และอุณหภูมิ การตรวจสอบด้วยตนเองไม่ต่อเนื่อง"],
  ["Architecture","Sensor → ESP32 → Network → Firebase → Dashboard เพื่อส่งค่าจากอุปกรณ์ไปยังระบบแสดงผล"],
  ["Contribution","พัฒนาโค้ด ESP32 ต่อบอร์ด Master เชื่อมข้อมูล Cloud และทดสอบการสื่อสารระหว่าง Hardware กับ Cloud"],
  ["Outcome","ต้นแบบสามารถส่งข้อมูลจาก Sensor ขึ้น Cloud แสดงผลบน Dashboard และรองรับการควบคุมปั๊มน้ำผ่าน Relay"]
 ]},
 classroom:{tag:"AIoT / SOFTWARE PROOF OF CONCEPT",title:"AI Smart Classroom Display System",intro:"แนวคิดระบบที่ช่วยให้ผู้เรียนมองเห็นเนื้อหาจากโปรเจกเตอร์ได้ชัดขึ้น โดยใช้ข้อมูลแสงและฟังก์ชันวิเคราะห์เนื้อหาเพื่อสนับสนุนการเรียนในห้อง",points:[
  ["Research","ใช้แบบสอบถามและการวัดแสงเพื่อระบุพื้นที่ห้องเรียนที่มีปัญหาในการมองเห็นจอและแสงสะท้อน"],
  ["AI Light Analysis","BH1750 วัดค่า Lux ส่งผ่าน ESP32 ไปยัง Backend เพื่อช่วยวิเคราะห์และปรับ Brightness / Contrast"],
  ["Smart Zoom","แนวคิดตรวจจับข้อความ โค้ด ตาราง และกราฟ เพื่อซูมอัตโนมัติเมื่อเนื้อหามีขนาดเล็กเกินไป"],
  ["Screen Sharing","วางแนวทางแชร์หน้าจอผ่าน Web App และ QR Code เพื่อให้เข้าถึงเนื้อหาได้สะดวกขึ้น"]
 ]},
 robot:{tag:"DIGITAL LOGIC / HARDWARE",title:"Line Following Robot",intro:"รถเคลื่อนที่ตามเส้นสีดำที่ใช้ IR Sensor 5 ตัวและวงจร Digital Logic โดยออกแบบจาก Truth Table ลดรูปด้วย K-Map และทดสอบบน Hardware",points:[
  ["Problem","ตรวจจับตำแหน่งเส้นสีดำและปรับทิศทางล้อซ้าย/ขวา โดยกำหนดเส้นดำ = 1 และพื้นขาว = 0"],
  ["Logic design","Sensor Input → Truth Table → Boolean Simplification / K-Map → Logic Gate"],
  ["Contribution","จัดทำตาราง K-Map วิเคราะห์สมการ Boolean และออกแบบวงจรควบคุมมอเตอร์ซ้ายและขวา"],
  ["Key learning","ฝึกการแปลงโจทย์การเคลื่อนที่เป็นเงื่อนไขเชิงตรรกะ และตรวจสอบผลผ่านการจำลองก่อนประกอบวงจรจริง"]
 ]}
};
const casePanel=document.getElementById('casePanel');
function showCase(key){
 const d=caseData[key]; if(!d)return;
 casePanel.innerHTML=`<div class="eyebrow">${d.tag}</div><h3>${d.title}</h3><p>${d.intro}</p><div class="case-points">${d.points.map(([h,p])=>`<div class="case-point"><b>${h}</b><p>${p}</p></div>`).join('')}</div>`;
 document.querySelectorAll('.case-tab').forEach(b=>b.classList.toggle('active',b.dataset.case===key));
}
document.querySelectorAll('.case-tab').forEach(b=>b.addEventListener('click',()=>showCase(b.dataset.case)));
document.querySelectorAll('.case-jump').forEach(a=>a.addEventListener('click',()=>showCase(a.dataset.case)));
showCase('bkk');

document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b===btn));
 const filter=btn.dataset.filter;
 document.querySelectorAll('.project-card').forEach(card=>card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter));
}));

const menuToggle=document.getElementById('menuToggle'),navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{
 const open=navLinks.classList.toggle('open');
 menuToggle.setAttribute('aria-expanded',String(open));
 menuToggle.textContent=open?'✕':'☰';
});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
 navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';
}));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const navItems=[...document.querySelectorAll('.nav-links a')];
const sectionObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}});
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>sectionObserver.observe(s));

/* ===== Photo frames + lightbox ===== */
document.querySelectorAll('.frame img, .project-art .shot').forEach(img=>{
  const host=img.closest('.frame, .project-art');
  const ok=()=>host.classList.add('has-img');
  img.addEventListener('load',ok);
  if(img.complete&&img.naturalWidth>0)ok();
});
const lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
document.querySelectorAll('.frame, .project-art').forEach(h=>h.addEventListener('click',e=>{
  if(!h.classList.contains('has-img')||e.target.closest('a'))return;
  const img=h.querySelector('img');lbImg.src=img.src;lbImg.alt=img.alt;lb.classList.add('open');
}));
lb.addEventListener('click',e=>{if(e.target!==lbImg)lb.classList.remove('open')});
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});
