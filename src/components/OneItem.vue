<template>
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
</template>

<script>
export default {
    name: 'OneItem',
    props: ['nameItem', 'image', 'price']
}
</script>

<style>

</style>