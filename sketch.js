
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
var o;
var p;
var q;
var r;
var s;
var t;
var u; 
var v; 
var w,x,y,z;
var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;
var LA1;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a19,a20,a21,a22,a23,a24,a25,a26
var flag


function setup() {
	createCanvas(800, 800);
   
   A = createSprite(380,0,700,20);
   B = createSprite(380,800,700,20);

   C = createSprite(500,220,20,400);
   D = createSprite(180,170,300,20);
   E = createSprite(320,230,20,130);
   F = createSprite(340,410,300,20);
   G = createSprite(180,355,20,130);
   H = createSprite(180,530,300,20);
   I = createSprite(180,600,20,130);
   J = createSprite(260,655,140,20);
   K = createSprite(500,480,20,130);
   L = createSprite(620,220,20,400);
   M = createSprite(670,530,130,20);
   N = createSprite(610,720,20,130);
   O = createSprite(540,665,130,20);
   P = createSprite(460,290,80,20);
   Q = createSprite(180,95,300,20);
   R = createSprite(20,400,20,800);
   S = createSprite(740,400,20,800);
   e = createSprite(550,145,40,40);
   
 c = createSprite(Math.round(random(20,350)),Math.round(random(20,780)),40,40);

	engine = Engine.create();
	world = engine.world;

   
	//Create the Bodies Here.
  


}
function draw() {
   rectMode(CENTER);

   edges= createEdgeSprites();
   e.collide(A);
   e.collide(B);
  
   e.collide(C);
   e.collide(D);
   e.collide(E);
   e.collide(F);
   e.collide(G);
   e.collide(H);
   e.collide(I);
   
   e.collide(J);
   e.collide(K);
   e.collide(L);
   e.collide(M);
   e.collide(N);
   e.collide(O);
   e.collide(P);
   e.collide(Q);
   c.collide(A);
   c.collide(B);
  
   c.collide(C);
   c.collide(D);
   c.collide(E);
   c.collide(F);
   c.collide(G);
   c.collide(H);
   c.collide(I);
   
   c.collide(J);
   c.collide(K);
   c.collide(L);
   c.collide(M);
   c.collide(N);
   c.collide(O);
   c.collide(P);
   c.collide(Q);
   c.collide(R);
   c.collide(S);
   e.collide(R);
   e.collide(S);

   if(keyCode === 50){
      bee();
   }
   if(keyCode === 51){
      see();
   }

   if(e.collide(c)){
      flag = createSprite(400,400,800,800);
   }

   background(0);
   drawSprites();
   
   text("press 2 or 3 to go to different maps",235,50);
   mousePressed();

}


function mousePressed(){
	if (keyCode === 37){
		e.x = e.x-6
	}
	if (keyCode === 39){
		e.x = e.x+6
	}
	if (keyCode === 40){
		e.y = e.y+6
	}
	if (keyCode === 38){
		e.y = e.y-6
	}
   
}

function bee(){
  
      A.x = 10000;
      B.x = 10000;
      C.x = 10000;
      D.y = 10000;
      E.x = 10000;
      F.y = 10000;
      G.x = 10000;
      H.x = 10000;
      I.x = 10000;
      J.x = 10000;
      K.x = 10000;
      L.x = 10000;
      M.x = 10000;
      N.x = 10000;
      O.x = 10000;
      P.x = 10000;
      Q.x = 10000;
      e.x = 550;
      e.y = 145;
      
      
      a = createSprite(380,20,700,20);
      b = createSprite(380,780,700,20);
    
      e = createSprite(550,145,40,40);
      g = createSprite(500,100,20,200);
      h = createSprite(550,190,100,20);
      i = createSprite(600,150,20,100);
      j = createSprite(260,150,20,300);
      k = createSprite(310,100,100,20);
      l = createSprite(380,305,20,210);
      m = createSprite(490,305,240,20);
      n = createSprite(600,350,20,110);
      o = createSprite(660,395,120,20);
      p = createSprite(200,200,100,20);
      q = createSprite(155,295,20,210);
      r = createSprite(80,100,110,20);
      s = createSprite(205,395,120,20);
      t = createSprite(255,450,20,130);
      u = createSprite(315,505,140,20);
      v = createSprite(490,520,20,240);
      w = createSprite(335,630,300,20);
      x = createSprite(610,640,20,280);
      y = createSprite(90,510,120,20);
      z = createSprite(320,700,20,140);
      
      e.collide(a);
   e.collide(b);
   
   e.collide(R);
   e.collide(e);
   e.collide(S);
   e.collide(g);
   e.collide(h);
   e.collide(i);
   e.collide(j);
   
   e.collide(k);
   e.collide(l);
   e.collide(m);
   e.collide(n);
   e.collide(o);
   e.collide(p);
   e.collide(q);
   e.collide(r);
   e.collide(s);
   e.collide(t);
   e.collide(u);
   e.collide(v);
   e.collide(w);
   e.collide(x);
   e.collide(y);
   e.collide(z);
   
   c.collide(a);
   c.collide(b);
   
   c.collide(D);
   c.collide(e);
   c.collide(F);
   c.collide(g);
   c.collide(h);
   c.collide(i);
   c.collide(j);
   
   c.collide(k);
   c.collide(l);
   c.collide(m);
   c.collide(n);
   c.collide(o);
   c.collide(p);
   c.collide(q);
   c.collide(r);
   c.collide(s);
   c.collide(t);
   c.collide(u);
   c.collide(v);
   c.collide(w);
   c.collide(x);
   c.collide(y);
   c.collide(z);
   c.x = Math.round(random(20,350));
   c.y = Math.round(random(20,780));
   }



   
function see(){
   a.x = 10000;
   b.x = 10000;
   c.x = Math.round(random(20,350));
   c.y = Math.round(random(20,780));
  
   e.x = 10000;
  
   g.x = 10000;
   h.x = 10000;
   i.x = 10000;
   j.x = 10000;
   k.x = 10000;
   l.x = 10000;
   m.x = 10000;
   n.x = 10000;
   o.x = 10000;
  p.x = 10000;
   q.x = 10000;
   e.x = 650;
   e.y = 145;
   r.x = 10000;
   s.x = 10000;
   t.x = 10000;
   u.x = 10000;
   v.x = 10000;
   w.x = 10000;
   x.x = 10000;
  y.x = 10000;
   z.x = 10000;

   a1 = createSprite(290,113,330,20);
   a2 = createSprite(660,113,150,20);
   a3 = createSprite(575,303,20,400);
   a4 = createSprite(659,310,20,100);
   a5 = createSprite(690,350,80,20);
   a6 = createSprite(625,493,80,20);
   a7 = createSprite(230,233,20,230);
   a8 = createSprite(450,220,238,20);
   a9 = createSprite(285,353,130,20);
   a11 = createSprite(355,408,20,130);
   a10 = createSprite(510,353,110,20);
   a12 = createSprite(420,463,110,20);
   a13 = createSprite(80,230,100,20);
   a14 = createSprite(120,280,20,120);
   a15 = createSprite(80,463,100,20);
   a16 = createSprite(80,563,100,20);
   a17 = createSprite(230,563,20,210);
   a18 = createSprite(180,663,120,20);
   a19 = createSprite(440,593,440,20);
   a20 = createSprite(465,533,20,130);
   a21 = createSprite(575,650,20,120);
   a22 = createSprite(655,730,20,120);
   a23 = createSprite(445,700,250,20);
   a24 = createSprite(330,750,20,100);
   a25 = createSprite(200,770,20,65);
   a26 = createSprite(300,30,20,65);

   e.collide(a1);
   e.collide(a2);
  
   e.collide(a3);
   e.collide(a4);
   e.collide(a5);
   e.collide(a6);
   e.collide(a7);
   e.collide(a8);
   e.collide(a9);
   
   e.collide(a10);
   e.collide(a11);
   e.collide(a12);
   e.collide(a13);
   e.collide(a14);
   e.collide(a15);
   e.collide(a16);
   e.collide(a17);
   e.collide(a18);
   e.collide(a19);
   e.collide(a20);
   e.collide(a21);
   e.collide(a22);
   e.collide(a23);
   e.collide(a24);
   e.collide(a26);
   c.collide(A);
   c.collide(B);
  
   c.collide(a1);
   c.collide(a2);
   c.collide(a3);
   c.collide(a4);
   c.collide(a5);
   c.collide(a6);
   c.collide(a7);
   
   c.collide(a8);
   c.collide(a9);
   c.collide(a11);
   c.collide(a12);
   c.collide(a13);
   c.collide(a14);
   c.collide(a15);
   c.collide(a16);
   c.collide(a17);
   c.collide(a18);
   c.collide(a19);
   c.collide(a20);
   c.collide(a21);
   c.collide(a22);
   c.collide(a23);
   c.collide(a24);
   c.collide(a25);
   c.collide(a26);
}