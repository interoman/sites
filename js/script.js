window.onload = function(){
	var imagemain = document.getElementsByClassName("portfolio_image_main");
	var image1 = document.getElementsByClassName("portfolio_images_1");
	var images = document.getElementsByClassName("portfolio_images_2-10");
	image1[0].onclick = myFunc;
	images[0].onclick = myFunc1;
	images[1].onclick = myFunc2;
	images[2].onclick = myFunc3;
	images[3].onclick = myFunc4;
	images[4].onclick = myFunc5;
	images[5].onclick = myFunc6;
	images[6].onclick = myFunc7;
	images[7].onclick = myFunc8;
	images[8].onclick = myFunc9;
	
	function myFunc() {
		imagemain[0].style.display = "block";
		imagemain[0].style.backgroundImage = 'url(images/1.png)';
		imagemain[0].style.width = "300px";
		imagemain[0].style.height = "300px";
		imagemain[0].style.transition = "1s";
	}
	function myFunc1() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "250px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/2.png)';
		imagemain[0].style.transition = "1s";
	}
	function myFunc2() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "249px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/3.png)';
		imagemain[0].style.transition = "1s";
	}
	function myFunc3() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "249px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/4.png)';
		imagemain[0].style.transition = "1s";
	}
	function myFunc4() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "249px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/5.png)';
		imagemain[0].style.transition = "1s";
	}
	function myFunc5() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "249px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/6.png)';
		imagemain[0].style.transition = "1s";
	}
	function myFunc6() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "249px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/7.png)';
		imagemain[0].style.transition = "1s";
	}
	function myFunc7() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "249px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/8.png)';
		imagemain[0].style.transition = "1s";
	}
	function myFunc8() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "249px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/9.png)';
		imagemain[0].style.transition = "1s";
	}
	function myFunc9() {
		imagemain[0].style.display = "block";
		imagemain[0].style.width = "249px";
		imagemain[0].style.height = "121px";
		imagemain[0].style.backgroundImage = 'url(images/10.png)';
		imagemain[0].style.transition = "1s";
	}

	
	
}