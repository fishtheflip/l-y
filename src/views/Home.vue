<template>
  
<div class="wrap-body">
	

	<!--////////////////////////////////////Header-->
	<header>
		<div class="wrap-header" >
			
			<!---Main Header--->
			<div class="main-header">
				<div class="bg-overlay">
					<!---Hero Content--->
					<div class="hero-content-wrapper">
					  <div class="hero-content">
						<h4 class="h-alt hero-subheading wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">Шымкент</h4>
						<h1 class="hero-lead wow fadeInLeft" data-wow-duration="1.5s">Бомбочки<br> Подарки </h1>
						<li class="active"><router-link :to="'/allgoods'" class="button button-skin wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">Каталог</router-link></li>
						<!-- <a href="single.html" class="button button-skin wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">Каталог</a> -->
					  </div>
					</div>
					<!---Scroller--->
					<div id="scroll-page-content">
						<a href="#page-content" class="scroller">
							<span class="scroller-text">scroll down</span>
							<div class="scroller-button">
								<i class="fa fa-angle-double-down"></i>
							</div>
						</a>
					</div>
				</div>
			</div>
			<!-- ванн волос лица тела губ -->
			<!---Top Menu--->
			<div id="cssmenu" >
				<ul>
				   <!-- <li class="active"><a :href="'/#/bathgoods#'"><span>Для ванн</span></a></li> -->
				   	<li class="active"><router-link :to="'/allgoods'"><span>Все товары</span></router-link></li>
				   <li class="active"><router-link :to="'/bathgoods'"><span>Для ванн</span></router-link></li>
				   <li class="active"><router-link :to="'/hairgoods'"><span>Для волос</span></router-link></li>
				   <li><router-link :to="'/facegoods'"><span>Для лица</span></router-link></li>
				   <li><router-link :to="'/bodygoods'"><span>Для тела</span></router-link></li>
				   <li class="last"><router-link :to="'/lipsgoods'"><span>Для губ</span></router-link></li>
				   <li><router-link :to="'/othergoods'"><span>Другое</span></router-link></li>
				</ul>
			</div>
		</div>
	</header>


	<!--////////////////////////////////////Container-->
	<section id="page-content" class="index-page">
		<div class="wrap-container">
			<!-----------------content-box-1-------------------->
			<section class="content-box box-1">
				<div class="zerogrid">
					<div class="wrap-box"><!--Start Box-->
						<div class="header wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">
							<h2>Почему стоит выбрать нас</h2>
							<!-- <span class="intro">Lorem ipsum dolor sit amet consectetur adipisicing</span> -->
						</div>
						<div class="content">
							<div class="row">
								<div class="lg-1-3 wow fadeInLeft" data-wow-duration=".8s">
									<div class="ft-item">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-cancer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<circle cx="6" cy="12" r="3" />
											<circle cx="18" cy="12" r="3" />
											<path d="M3 12a10 6.5 0 0 1 14 -6.5" />
											<path d="M21 12a10 6.5 0 0 1 -14 6.5" />
										  </svg>
										<h5>Забота о себе</h5>
										<p style="opacity:0;">Начните кайфовать от своего гладкого и шелковистого тела</p>
									</div>
									<div class="ft-item">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-woman" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<circle cx="12" cy="5" r="2" />
											<path d="M10 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
										  </svg>
										<h5>Раслабляет тело и сознание</h5>
										<p style="opacity:0;">Quae delectus cumque, tempore explicabo odit beatae! Nesciunt tempora cum consequuntur.</p>
									</div>
									<div class="ft-item">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
											<path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
										  </svg>
										<h5>Вкусные цены</h5>
										<p style="opacity:0;">Quae delectus cumque, tempore explicabo odit beatae! Nesciunt tempora cum consequuntur.</p>
									</div>
								</div>
								<div class="lg-1-3">
									<img src="images/ly.png" alt="" class="ft-image-center wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s" />
								</div>
								<div class="lg-1-3 t-right-xs wow fadeInRight" data-wow-duration=".8s">
									<div class="ft-item">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<circle cx="7" cy="17" r="2" />
											<circle cx="17" cy="17" r="2" />
											<path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
										  </svg>
										<h5>Доставка по всему Казахстану</h5>
										<p style="opacity:0;">Quae delectus cumque, tempore explicabo odit beatae! Nesciunt tempora cum consequuntur.</p>
									</div>
									<div class="ft-item">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
										  </svg>
										<h5>Счастливые покупатели</h5>
										<p style="opacity:0;">Quae delectus cumque, tempore explicabo odit beatae! Nesciunt tempora cum consequuntur.</p>
									</div>
									<div class="ft-item">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
											<circle cx="12" cy="12" r="4" />
											<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
										  </svg>
										<h5>Борьба с токсинами</h5>
										<p style="opacity:0;">Quae delectus cumque, tempore explicabo odit beatae! Nesciunt tempora cum consequuntur.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			

			
			<!-----------------content-box-3-------------------->
			<section class="content-box box-3 box-style-1">
				<div class="zerogrid">
					<div class="wrap-box"><!--Start Box-->
						<div class="header wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">
							<h2>Популярные товары</h2>
							<span class="intro">Выбор покупателей</span>
						</div>
						<div class="content wow fadeIn" data-wow-delay=".1s" data-wow-duration="1s">
							<div class="row">


								<div class="lg-1-4 md-1-3 sm-1-2">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail"><a href="#"><img src="images/p1.jpg"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">Лак</a></h2>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
													</div>
												</div>
												<div class="row">
													<div class="categories">
														<a href="#" rel="tag">Для лица</a>
													</div> 
													<span class="price">
														5000₸
													</span> 
												</div>
											</div>
										</div>
									</div>
								</div>


								<div class="lg-1-4 md-1-3 sm-1-2">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail"><a href="#"><img src="images/p2.jpg"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">Бомбочки</a></h2>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
													</div>
												</div>
												<div class="row">
													<div class="categories">
														<a href="#" rel="tag">Для ванн</a>
													</div> 
													<span class="price">
														5000₸
													</span> 
												</div>
											</div>
										</div>
									</div>
								</div>


								<div class="lg-1-4 md-1-3 sm-1-2">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail"><a href="#"><img src="images/p3.jpg"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">Щетка</a></h2>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
												</div>
												<div class="row">
													<div class="categories">
														<a href="#" rel="tag">Для тела</a>
													</div> 
													<span class="price">
														5000₸
													</span> 
												</div>
											</div>
										</div>
									</div>
								</div>


								<div class="lg-1-4 md-1-3 sm-1-2">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail"><a href="#"><img src="images/p4.jpg"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">Крем</a></h2>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
												</div>
												<div class="row">
													<div class="categories">
														<a href="#" rel="tag">Для лица</a>
													</div> 
													<span class="price">
														5000₸
													</span> 
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>


							<div class="row">
								<div class="lg-1-4 md-1-3 sm-1-2">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail"><a href="#"><img src="images/p5.jpg"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">Мыло</a></h2>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
												</div>
												<div class="row">
													<div class="categories">
														<a href="#" rel="tag">Другое</a>
													</div> 
													<span class="price">
														5000₸
													</span> 
												</div>
											</div>
										</div>
									</div>
								</div>


								<div class="lg-1-4 md-1-3 sm-1-2">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail"><a href="#"><img src="images/p6.jpg"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">Скраб</a></h2>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
												</div>
												<div class="row">
													<div class="categories">
														<a href="#" rel="tag">Для тела</a>
													</div> 
													<span class="price">
														5000₸
													</span> 
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- <div class="lg-1-4 md-1-3 sm-1-2">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail"><a href="#"><img src="images/p7.jpg"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">Green decor</a></h2>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
												</div>
												<div class="row">
													<div class="categories">
														<a href="#" rel="tag">Accessories</a>, <a href="#" rel="tag">Plants</a>
													</div> 
													<span class="price">
														5000₸
													</span> 
												</div>
											</div>
										</div>
									</div>
								</div> -->
								<!-- <div class="lg-1-4 md-1-3 sm-1-2">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail"><a href="#"><img src="images/p8.jpg"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">Green decor</a></h2>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
												</div>
												<div class="row">
													<div class="categories">
														<a href="#" rel="tag">Accessories</a>, <a href="#" rel="tag">Plants</a>
													</div> 
													<span class="price">
														5000₸
													</span> 
												</div>
											</div>
										</div>
									</div>
								</div> -->
							</div>
						</div>
					</div>
				</div>
			</section>
			



			
			<!-----------------content-box-6-------------------->

			
			<!-----------------content-box-7-------------------->
			<section class="content-box box-7">
				<div class="zerogrid-fluid">
					<div class="wrap-box"><!--Start Box-->
						<div class="content wow fadeInLeft" data-wow-delay=".1s" data-wow-duration="1s">
							<div class="row">
								<div class="md-1-3">
									<div class="wrap-col">
										<div class="row">
											<div class="sm-1-3">
												<i class="fa fa-map-marker"></i>
											</div>
											<div class="sm-2-3 t-left-sm">
												<h3>Адресс</h3>
												<p>Шымкент, Абая 150б</p>
											</div>
										</div>
									</div>
								</div>
								<div class="md-1-3">
									<div class="wrap-col">
										<div class="row">
											<div class="sm-1-3">
												<i class="fa fa-phone"></i>
											</div>
											<div class="sm-2-3 t-left-sm">
												<h3>Телефон</h3>
												<p>+7 (777) 7777 777</p>
											</div>
										</div>
									</div>
								</div>
								<div class="md-1-3">
									<div class="wrap-col">
										<div class="row">
											<div class="sm-1-3">
												<i class="fa fa-instagram"></i>
											</div>
											<div class="sm-2-3 t-left-sm">
												<h3>Instagram</h3>
												<p><span>loveyourself_13kz</span></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
		</div>
	</section>

	<!--////////////////////////////////////Footer-->

	<div id="page-top"><a href="#page-top" class="button button-toTop f-right"><i class="fa fa-angle-double-up"></i></a></div>

	
</div>
</template>

<script>
// @ is an alias to /src


export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>
