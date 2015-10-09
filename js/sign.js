/*页面最下部分的波浪箭头效果*/
	var _sign = document.getElementsByClassName("sign");
	var _signup = document.getElementsByClassName("signup");
	var _signa = document.getElementById("signa");

	function sign(){
		setTimeout(function(){
			_sign[2].style.bottom = "-35px";
			setTimeout(function(){
				_sign[1].style.bottom = "-25px";
				setTimeout(function(){
					_sign[0].style.bottom = "-15px";
					setTimeout(function(){
						for( var i=0 ; i<_sign.length ; i++){
							_sign[i].transition = "bottom ease-in 0s";
							_sign[i].style.display = "none";
						}
						_sign[2].style.bottom = "70px";
						_sign[1].style.bottom = "80px";
						_sign[0].style.bottom = "90px";
						setTimeout(function(){
							for( var i=0 ; i<_sign.length ; i++){
								_sign[i].transition = "bottom ease-out 0.5s";
								_sign[2].style.display = "block";
							}
							setTimeout(function(){
								_sign[2].style.bottom = "30px";
								_sign[1].style.display = "block";
								setTimeout(function(){
									_sign[1].style.bottom = "40px";
									_sign[0].style.display = "block";
									setTimeout(function(){
										_sign[0].style.bottom = "50px";
									},150);
								},150);
							},0);
						},700);
					},500);
				},150);
			},150);
		},0);
	}