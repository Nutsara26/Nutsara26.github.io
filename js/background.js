(function(){
  const cv=document.getElementById('bg'),ctx=cv.getContext('2d');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W,H,dpr,pts=[],mouse={x:-9999,y:-9999},raf;
  const COLORS=['155,123,255','81,229,245'];
  function resize(){
    dpr=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;
    cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    const n=Math.min(110,Math.floor(W*H/15000));
    pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.4+.6,c:COLORS[Math.random()<.7?0:1]}));
  }
  function frame(){
    ctx.clearRect(0,0,W,H);
    const L=130,M=170;
    for(const p of pts){
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.hypot(dx,dy);
      if(d<M&&d>0){p.x+=dx/d*.6;p.y+=dy/d*.6}
    }
    for(let i=0;i<pts.length;i++){
      const a=pts[i];
      for(let j=i+1;j<pts.length;j++){
        const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<L){ctx.strokeStyle=`rgba(${a.c},${(1-d/L)*.28})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
      }
      const dm=Math.hypot(a.x-mouse.x,a.y-mouse.y);
      if(dm<M){ctx.strokeStyle=`rgba(81,229,245,${(1-dm/M)*.5})`;ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke()}
      ctx.fillStyle=`rgba(${a.c},.8)`;ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,6.283);ctx.fill();
    }
    if(!reduce)raf=requestAnimationFrame(frame);
  }
  addEventListener('resize',()=>{resize();if(reduce)frame()});
  addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});
  addEventListener('mouseout',()=>{mouse.x=mouse.y=-9999});
  document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(raf);if(!document.hidden&&!reduce)frame()});
  resize();frame();
})();
