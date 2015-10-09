/*p3的效果*/

var p3_bg_or = document.getElementsByClassName("p3-bg-or")[0];
var p3_wrap = document.getElementsByClassName("p3-wrap")[0];
var block = document.getElementsByClassName("animatebg")[0].getElementsByTagName("div");
var p3_content = document.getElementsByClassName("p3-content");
var p3_item_ti = document.getElementsByClassName("p3-item-ti");
var p3_ct_skewY = document.getElementsByClassName("p3-ct-skewY");
var p3_ct_text = document.getElementsByClassName("p3-ct-text");


setTimeout(function(){
	p3_wrap.style.opacity = p3_bg_or.style.opacity = "1";
	setTimeout(function(){
		block[0].style.transform = "translateX(800px)";
		setTimeout(function(){
			block[1].style.transform = "translateX(900px)";
			setTimeout(function(){
				block[2].style.transform = "translateX(800px)";
				setTimeout(function(){
					block[2].style.transform = "translateX(-150px)";
					setTimeout(function(){
						block[2].style.transform = "translateX(0px)";
					},1100);
				},1100);
			},500);
			setTimeout(function(){
				block[1].style.transform = "translateX(-100px)";
				setTimeout(function(){
					block[1].style.transform = "translateX(0px)";
				},1200);
			},1200);
		},500);
		setTimeout(function(){
			block[0].style.transform = "translateX(-50px)";
			setTimeout(function(){
				block[0].style.transform = "translateX(0px)";
			},1300);
		},1300);
	},500);
},0);

for(var i=0; i<p3_item_ti.length; i++){
		p3green(i);
}

function p3green(i){
	setTimeout(function(){
		p3_item_ti[i].style.paddingRight = "20px";
		p3_item_ti[i].style.width = "150px";
		setTimeout(function(){
			p3_item_ti[i].getElementsByTagName("span")[0].style.display = "block";
			p3_ct_skewY[i].style.width = "50px";
			p3_ct_skewY[i].style.marginTop = "84px";
			setTimeout(function(){
				p3_ct_text[i].style.transform = "translateX(0)";
			},800);
		},1800); 
	},4000);
}



