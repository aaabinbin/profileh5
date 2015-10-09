/*翻页效果*/
var sign_wrapper = document.getElementsByClassName("sign-wrapper")[0];

	var scrollFunc=function(e){ 
	    ee = e || window.event; 
	    if(e.wheelDelta){//IE/Opera/Chrome 
	    	if(e.wheelDelta>0 && pageNum > 0){
	    		UpPage();
	    		if(pageNum == 1){
	        		setTimeout(function(){
	        			var canvasjs = document.getElementsByClassName("canvasjs")[0];
		    			canvasjs.setAttribute("src","./js/canvas.js");
	        		},1500);	
	    		}
	    		if(pageNum == 2){
	    			setTimeout(function(){
	        			var p3js = document.getElementsByClassName("p3js")[0];
		    			p3js.setAttribute("src","./js/p3.js");
	        		},1000);
	        		sign_wrapper.style.display = "block";
	    		}
	    		if(pageNum == 3){
	    			setTimeout(function(){
	        			var p4js = document.getElementsByClassName("p4js")[0];
		    			p4js.setAttribute("src","./js/p4.js");
	        		},1500);
	        		sign_wrapper.style.display = "none";
	    		}
	        }
	        else if(e.wheelDelta<0 && pageNum<3){
	        	NextPage();
	        	if(pageNum == 1){
	        		setTimeout(function(){
	        			var canvasjs = document.getElementsByClassName("canvasjs")[0];
		    			canvasjs.setAttribute("src","./js/canvas.js");
	        		},1500);	
	    		}
	    		if(pageNum == 2){
	    			setTimeout(function(){
	        			var p3js = document.getElementsByClassName("p3js")[0];
		    			p3js.setAttribute("src","./js/p3.js");
	        		},1000);
	        		sign_wrapper.style.display = "block";
	    		}
	    		if(pageNum == 3){
	    			setTimeout(function(){
	        			var p4js = document.getElementsByClassName("p4js")[0];
		    			p4js.setAttribute("src","./js/p4.js");
	        		},1500);
	        		sign_wrapper.style.display = "none";
	    		}
	        }
	    }else if(e.detail){//Firefox 
	    	
	    }
		window.onmousewheel=document.onmousewheel = null;
	} 

	function UpPage(){
		pageNum--;
		setTimeout(function(){
			_wrapper[0].style.transform = "translateY(-" + pageNum*_wheight + "px)";
			/*翻页动画*/
			/*setTimeout(function(){
				_wrapper[0].style.transition = "transform 0.2s ease-out";
				_wrapper[0].style.transform = "translateY(-" + (pageNum*_wheight+40) + "px)";
				setTimeout(function(){
					_wrapper[0].style.transition = "transform 0.2s ease-in";
					_wrapper[0].style.transform = "translateY(-" + pageNum*_wheight + "px)";
					setTimeout(function(){
						_wrapper[0].style.transition = "transform 0.2s ease-out";
						_wrapper[0].style.transform = "translateY(-" + (pageNum*_wheight+15) + "px)";
						setTimeout(function(){
							_wrapper[0].style.transition = "transform 0.2s ease-in";
							_wrapper[0].style.transform = "translateY(-" + pageNum*_wheight + "px)";
							setTimeout(function(){
								_wrapper[0].style.transition = "transform 0.1s ease-out";
								_wrapper[0].style.transform = "translateY(-" + (pageNum*_wheight+3) + "px)";
								setTimeout(function(){
									_wrapper[0].style.transition = "transform 0.1s ease-in";
									_wrapper[0].style.transform = "translateY(-" + pageNum*_wheight + "px)";
								},100);
							},200);
						},200);
					},200);
				},200);
			},1100);*/
		},0);
		//_wrapper[0].style.transition = "transform 1s ease-in";
	    setTimeout(function(){
			window.onmousewheel=document.onmousewheel=scrollFunc;
	    },2000);
	    window.onmousewheel=document.onmousewheel = null;
	}

	function NextPage(){
		pageNum++;
	    setTimeout(function(){
			_wrapper[0].style.transform = "translateY(-" + pageNum*_wheight + "px)";
			/*翻页动画*/
			/*setTimeout(function(){
				_wrapper[0].style.transition = "transform 0.2s ease-out";
				_wrapper[0].style.transform = "translateY(-" + (pageNum*_wheight-50) + "px)";
				setTimeout(function(){
					_wrapper[0].style.transition = "transform 0.2s ease-in";
					_wrapper[0].style.transform = "translateY(-" + pageNum*_wheight + "px)";
					setTimeout(function(){
						_wrapper[0].style.transition = "transform 0.2s ease-out";
						_wrapper[0].style.transform = "translateY(-" + (pageNum*_wheight-20) + "px)";
						setTimeout(function(){
							_wrapper[0].style.transition = "transform 0.2s ease-in";
							_wrapper[0].style.transform = "translateY(-" + pageNum*_wheight + "px)";
							setTimeout(function(){
								_wrapper[0].style.transition = "transform 0.1s ease-out";
								_wrapper[0].style.transform = "translateY(-" + (pageNum*_wheight-3) + "px)";
								setTimeout(function(){
									_wrapper[0].style.transition = "transform 0.1s ease-in";
									_wrapper[0].style.transform = "translateY(-" + pageNum*_wheight + "px)";
								},100);
							},200);
						},200);
					},200);
				},200);
			},1100);*/
		},0);
		//_wrapper[0].style.transition = "transform 1s ease-in";
	    _signa.removeAttribute("onclick");
	    setTimeout(function(){
		    window.onmousewheel=document.onmousewheel=scrollFunc;
		    _signa.setAttribute("onclick","NextPage()");
	    },2000);
	    window.onmousewheel=document.onmousewheel = null;
	}

	/*注册事件*/
	if(document.addEventListener){ 
	    document.addEventListener('DOMMouseScroll',scrollFunc,false); 
	}//W3C 
	window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome