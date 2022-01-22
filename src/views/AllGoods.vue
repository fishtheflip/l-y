<template>  
            <div>
            <Navbar/>
  			<section class="content-box box-3 box-style-1">
				<div class="zerogrid">
					<div class="wrap-box"><!--Start Box-->
						<div class="header wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">
							<h2>Все товары</h2>
							<span class="intro">Выбор покупателей</span>
						</div>
						<div class="content wow fadeIn" data-wow-delay=".1s" data-wow-duration="1s">
							<div class="row">

								<!--1  -->
								<div class="lg-1-4 md-1-3 sm-1-2" v-for="(item, index) in dataItems" :key="index">
									<div class="wrap-col">
										<div class="product"> 
											<div class="product-thumbnail" ><a href="#" ><img :src="`goods-image/${item.img}.jpeg`" class="img-love"></a></div>
											<div class="product-content">
												<div class="row">
													<h2 class="product-title"><a href="#">{{item.name}}</a></h2>
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
														<router-link :to="`/${item.cat}goods`" rel="tag">{{item.categories}}</router-link>
													</div> 
													<span class="price">
														{{item.price}}₸
													</span> 
												</div>
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
</template>

<script>
import Navbar from '../components/Navbar.vue'
import dataItems from '../data/data'
export default {
	data(){
		return{
			dataItems: dataItems
		}
	},
    components: {Navbar}

}
</script>

<style>
	.img-love{
		width: 4300px;
		height: 300px;
	}
</style>