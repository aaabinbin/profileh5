/*skill animate*/
	//function skill(){
		var p4_l_title = document.getElementsByClassName("p4-l-title");
		var Listf = document.getElementsByClassName("p4-skillcountli");

		var p4_r_main = document.getElementsByClassName("p4-r-main");

		Listf[0].setAttribute("class","p4-skillcountli listfir");
		Listf[1].setAttribute("class","p4-skillcountli listsec");
		Listf[2].setAttribute("class","p4-skillcountli listthi");
		Listf[3].setAttribute("class","p4-skillcountli listfor");
		Listf[4].setAttribute("class","p4-skillcountli listfif");
		Listf[5].setAttribute("class","p4-skillcountli listsix");

		setTimeout(function(){
			p4_l_title[0].style.transform = "scale(1.6,1.6)";
			p4_l_title[0].style.opacity = "0.6";
			setTimeout(function(){
				p4_l_title[0].style.transition = "transform 0.1s ease,opacity 0.1s ease";
				p4_l_title[0].style.transform = "scale(0.5,0.5)";
				p4_l_title[0].style.opacity = "1.5";
				setTimeout(function(){
					p4_l_title[0].style.transition = "transform 0.1s ease,opacity 0.2s ease";
					p4_l_title[0].style.transform = "scale(1.1,1.1)";
					setTimeout(function(){
						p4_l_title[0].style.transition = "transform 0.3s ease,opacity 0.2s ease";
						p4_l_title[0].style.transform = "scale(0.9,0.9)";
						setTimeout(function(){
							p4_l_title[0].style.transition = "transform 0.3s ease,opacity 0.2s ease";
							p4_l_title[0].style.transform = "scale(1.07,1.07)";
							setTimeout(function(){
								p4_l_title[0].style.transition = "transform 0.3s ease,opacity 0.2s ease";
								p4_l_title[0].style.transform = "scale(0.93,0.93)";
								setTimeout(function(){
									p4_l_title[0].style.transition = "transform 0.2s ease,opacity 0.2s ease";
									p4_l_title[0].style.transform = "scale(1.04,1.04)";
									setTimeout(function(){
										p4_l_title[0].style.transition = "transform 0.2s ease,opacity 0.2s ease";
										p4_l_title[0].style.transform = "scale(0.96,0.96)";
										setTimeout(function(){
											p4_l_title[0].style.transition = "transform 0.2s ease,opacity 0.2s ease";
											p4_l_title[0].style.transform = "scale(1,1)";
										},200)
									},200)
								},200)
							},200)
						},200)
					},200)
				},100)
			},1200);
		},800);
		
		setTimeout(function(){
			p4_r_main[0].style.transform = "translateX(0)";
		},2000);
		
	//}