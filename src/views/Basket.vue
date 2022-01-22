<template>
    <div class="wrap-body">




	<section id="page-content">
		<div class="wrap-container zerogrid">

			<div id="contact-area">

				<div class="contact-main_wrapper">
					<div class="row">
						<div class="sm-2-5 ">
							<div class="wrap-col">
								<div class="wow fadeInLeft" data-wow-delay=".1s" data-wow-duration="1s">
									<h3>Have any questions? Let's get in touch!</h3>
									<p>Contact us if your are thinking of redesigning your garden, adding some garden features or simply looking for a bit of garden maintenance.</p>
								</div>
							</div>
						</div>
						<div class="sm-2-5 offset-sm-1-5">
							<div class="wrap-col">
								<div id="contact_form" class="wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">
									<div id="contact_results"></div>
									<div id="contact_body">
										<label>
											<input type="text" name="name" id="name" required="true" placeholder="Your Name"/>
										</label>
										<label>
											<input type="email" name="email" required="true" placeholder="Your Email"/>
										</label>
										<label for="field5">
											<textarea name="message" id="message" class="textarea-field" required="true" placeholder="Message"></textarea>
										</label>
										<label>
											<button class="button button-skin" type="submit" id="submit_btn">Submit</button>
										</label>
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
export default {
name: 'Basket'
}
</script>

<style>

</style>