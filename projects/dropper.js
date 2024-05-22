const drop=t=>{class e{constructor(t,e,i,s){this.x=t,this.y=e,this.w=i,this.speed=s}move(){this.y+=this.speed,this.y>t.height&&this.reset().bind(this)}get cords(){return[this.x,this.y,this.w]}reset(){this.x=t.random(t.width-this.w),this.y=0,this.speed=t.random(2,4),console.log(this.speed)}chkLoss(e,i){let s=e[0],o=e[1],r=e[2];this.y>=t.height-50&&!(this.x>=s&&this.x<=s+o&&this.y>=t.height-(50+r))&&i()}draw(){t.fill("black"),t.square(this.x,this.y,this.w)}}class i{constructor(e,i,s){this.x=t.width/2,this.w=e,this.h=i,this.speed=s}move(e){this.x+=this.speed*e,this.x<0?this.x=0:this.x>t.width-this.w&&(this.x=t.width-this.w)}chkCollision(e,i,s){let o=e[0],r=e[1],d=e[2];o+d>=this.x&&o<=this.x+this.w&&r>=t.height-(50+this.h)&&r<=t.height-50&&(console.log("hit"),i(),s())}get info(){return[this.x,this.w,this.h]}draw(){t.fill("red"),t.rect(this.x,t.height-(50+this.h),this.w,this.h)}}let s,o,r,d=0,n=!0,$=!0,l;t.setup=()=>{h=w=250,s=t.color(165,165,223),l=null===t.getItem("highscore")?0:t.getItem("highscore"),t.createCanvas(w,h),t.noStroke(),o=new i(50,30,5),r=new e(t.random(t.width),0,15,5)},t.draw=()=>{t.background(s),$?n?(t.textAlign(t.CENTER),t.textSize(.07*t.width),t.text("Dropper!",t.width/2,t.height/2),t.textSize(.04*t.width),t.text("Catch the falling squares to get a point",t.width/2,t.height/2+20),t.text("Press ENTER to play...",t.width/2,t.height/2+40)):(t.env(),t.keyIsDown(t.RIGHT_ARROW)?o.move(1):t.keyIsDown(t.LEFT_ARROW)&&o.move(-1),r.move(),r.draw(),o.chkCollision(r.cords,t.incrementScore,r.reset.bind(r)),r.chkLoss(o.info,t.lose),o.draw(),t.textSize(.05*t.width),t.textAlign(t.CENTER),t.text(`Score: ${d}`,t.width/2,20),t.textAlign(t.LEFT),t.textSize(.03*t.width),t.text(`Highscore: ${l}`,5,15)):t.lose()},t.incrementScore=()=>{++d>l&&(l=d,t.storeItem("highscore",l))},t.lose=()=>{r.y=0,$=!1,t.background(s),t.textAlign(t.CENTER),t.fill(0),t.textSize(.05*t.width),t.text(`Game Over!
Highscore: ${l}
Score: ${d}
Press Enter to restart`,t.width/2,t.height/2)},t.keyPressed=()=>{t.keyCode!==t.ENTER||$||($=!0,d=0),t.keyCode===t.ENTER&&$&&n&&(n=!1)},t.env=()=>{t.fill("rgb(22,167,22)"),t.rect(0,t.height-50,t.width,50)}};let myp51=new p5(drop);