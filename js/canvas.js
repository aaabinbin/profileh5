/*p2小球弹跳的效果*/
var _ballcan = document.getElementsByClassName("ballcan");
var _ball = document.getElementsByClassName("ball");
var _ballin = document.getElementsByClassName("infor");
var time1 = 0;
var time2 = 0;

var firtime1 = setInterval("ballbomb1(100,100,-50)",15);
var firtime2 = setInterval("ballbomb2(158,100,50)",15);

function ballbomb1(translate1,translate2,r){
		var ballcancxt0 = _ballcan[0].getContext("2d");
		ballcancxt0.clearRect(0,0,300,150);
		ballcancxt0.fillStyle = "#05df57";
		ballcancxt0.save();
		ballcancxt0.translate(translate1,translate2);
		ballcancxt0.rotate(time1*50/Math.PI/180);
		ballcancxt0.beginPath();
		ballcancxt0.arc(r,0,10,0,Math.PI*2,false);
		ballcancxt0.fill();
		ballcancxt0.restore();
		ballcancxt0.closePath();

		var ballcancxt1 = _ballcan[1].getContext("2d");
		ballcancxt1.clearRect(0,0,300,150);
		ballcancxt1.fillStyle = "#FFC125";
		ballcancxt1.save();
		ballcancxt1.translate(translate1,translate2);
		ballcancxt1.rotate(time1*50/Math.PI/180);
		ballcancxt1.beginPath();
		ballcancxt1.arc(r,0,10,0,Math.PI*2,false);
		ballcancxt1.fill();
		ballcancxt1.closePath();
		ballcancxt1.restore();

		var ballcancxt2 = _ballcan[2].getContext("2d");
		ballcancxt2.clearRect(0,0,300,150);
		ballcancxt2.fillStyle = "#E26A6C";
		ballcancxt2.save();
		ballcancxt2.translate(translate1,translate2);
		ballcancxt2.rotate(time1*50/Math.PI/180);
		ballcancxt2.beginPath();
		ballcancxt2.arc(r,0,10,0,Math.PI*2,false);
		ballcancxt2.fill();
		ballcancxt2.closePath();
		ballcancxt2.restore();
		
		
		time1++;
		if(time1 == 35){
			clearInterval(firtime1);
			sedtime1 = setInterval("ballbomb1(172,100,-22)",6);
			time1=72;
		}
		else if(time1==108){
			clearInterval(sedtime1);
			tirtime1 = setInterval("ballbomb1(200,100,-5)",5);
			time1 = 142;
		}
		else if(time1==178){
			clearInterval(tirtime1);
			_ball[0].style.display = "block";
			_ball[0].className = "ball ballleft ball1 ballpop";
			setTimeout(function(){
				_ballin[0].style.opacity = "1";
			},800);
			setTimeout(function(){
					_ball[1].style.display = "block";
					_ball[1].className = "ball ballleft ball2 ballpoplarge";
					setTimeout(function(){
						_ballin[1].style.opacity = "1";
					},800);
					setTimeout(function(){
						_ball[2].style.display = "block";
						_ball[2].className = "ball ballleft ball3 ballpop";
						setTimeout(function(){
							_ballin[2].style.opacity = "1";
						},400);
					},400);
			},400);
		}
	}

	function ballbomb2(translate1,translate2,r){
		var ballcancxt3 = _ballcan[3].getContext("2d");
		ballcancxt3.clearRect(0,0,300,150);
		ballcancxt3.fillStyle = "#6A5ACD";
		ballcancxt3.save();
		ballcancxt3.translate(translate1,translate2);
		ballcancxt3.rotate(-time2*50/Math.PI/180);
		ballcancxt3.beginPath();
		ballcancxt3.arc(r,0,10,0,Math.PI*2,false);
		ballcancxt3.fill();
		ballcancxt3.restore();
		ballcancxt3.closePath();

		var ballcancxt4 = _ballcan[4].getContext("2d");
		ballcancxt4.clearRect(0,0,300,150);
		ballcancxt4.fillStyle = "#6495ED";
		ballcancxt4.save();
		ballcancxt4.translate(translate1,translate2);
		ballcancxt4.rotate(-time2*50/Math.PI/180);
		ballcancxt4.beginPath();
		ballcancxt4.arc(r,0,10,0,Math.PI*2,false);
		ballcancxt4.fill();
		ballcancxt4.closePath();
		ballcancxt4.restore();

		var ballcancxt5 = _ballcan[5].getContext("2d");
		ballcancxt5.clearRect(0,0,300,150);
		ballcancxt5.fillStyle = "#696969";
		ballcancxt5.save();
		ballcancxt5.translate(translate1,translate2);
		ballcancxt5.rotate(-time2*50/Math.PI/180);
		ballcancxt5.beginPath();
		ballcancxt5.arc(r,0,10,0,Math.PI*2,false);
		ballcancxt5.fill();
		ballcancxt5.closePath();
		ballcancxt5.restore();

		var ballcancxt6 = _ballcan[6].getContext("2d");
		ballcancxt6.clearRect(0,0,300,150);
		ballcancxt6.fillStyle = "#EE7600";
		ballcancxt6.save();
		ballcancxt6.translate(translate1,translate2);
		ballcancxt6.rotate(-time2*50/Math.PI/180);
		ballcancxt6.beginPath();
		ballcancxt6.arc(r,0,10,0,Math.PI*2,false);
		ballcancxt6.fill();
		ballcancxt6.closePath();
		ballcancxt6.restore();

		time2++;
		if(time2 == 35){
			clearInterval(firtime2);
			sedtime2 = setInterval("ballbomb2(87,100,22)",6);
			time2=72;
		}
		else if(time2==108){
			clearInterval(sedtime2);
			tirtime2 = setInterval("ballbomb2(60,100,5)",5);
			time2 = 142;
		}
		else if(time2==178){
			clearInterval(tirtime2);
			setTimeout(function(){
				_ball[5].style.display = "block";
				_ball[5].className = "ball ballright ball6 ballpoplarge";
				setTimeout(function(){
					_ballin[5].style.opacity = "1";
				},800);
				setTimeout(function(){
						_ball[4].style.display = "block";
						_ball[4].className = "ball ballright ball5 ballpop";
						setTimeout(function(){
							_ballin[4].style.opacity = "1";
						},800);
						setTimeout(function(){
							_ball[3].style.display = "block";
							_ball[3].className = "ball ballright ball4 ballpoplarge";
							setTimeout(function(){
								_ballin[3].style.opacity = "1";
							},800);
							setTimeout(function(){
								_ball[6].style.display = "block";
								_ball[6].className = "ball ballright ball7 ballpop"
								setTimeout(function(){
									_ballin[6].style.opacity = "1";
									console.log("1");
								},800);
							},400);
						},400);
				},400);
			},1200);
		}
	}





	
	
