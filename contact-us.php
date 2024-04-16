<!DOCTYPE html>
<html lang="en">
<head>

<!-- Start Head -->

<title>Bug Digit - Contact Us</title>
<?php include('./assets/commons/head.php') ?>

<!-- End Head -->

</head>
<body>

    <!-- Start Navbar -->

    <?php include('./assets/commons/navbar.php') ?>

    <!-- End Navbar -->

  <div class="viewport">
   <div class="scroll-container" id="scroll-container">

    <!-- Start Header -->

    <header class="contact-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="contact-header-content">
                        <h1 class="wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">Contact Us</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- End Header -->

    <!-- Start Contact Form -->

    <section class="contact-form">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="respond wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">
                      <h2>we'll respond to you in an hour.</h2>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="para wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="reverse">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-container">
                        <a href="#" class="get-in-touch wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">
                            <div class="line"><img src="assets/images/line.webp" alt=""></div>
                            <div class="dot"><img src="assets/images/dot.webp" alt=""></div>
                            <h2>Get In Touch</h2>
                        </a>

                        <div class="form-heading wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">
                           <h2>reach out to us</h2>
                        </div>

                        <form action="#">
                            <div class="row wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">
                               <div class="col-lg-6 col-md-6 col-sm-12"><input type="text" id="fname" placeholder="First Name"></div>
                               <div class="col-lg-6 col-md-6 col-sm-12"><input type="text" id="lname" placeholder="Last Name"></div>
                            </div>

                            <div class="row wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">
                               <div class="col-lg-6 col-md-6 col-sm-12"><input type="tel"  id="phone" placeholder="Your Number"></div>
                               <div class="col-lg-6 col-md-6 col-sm-12"><input type="email" id="email" placeholder="Email Address"></div>
                            </div>
                          
                          
                          <input class="wow animate__ animate__zoomIn animated" data-wow-duration="1.5s" type="text" id="company" placeholder="Company Name">
                          <textarea class="wow animate__ animate__zoomIn animated" data-wow-duration="1.5s" id="message"  placeholder="Message"></textarea>

                          <button type="submit" class="contact-form-submit wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">Submit 
                          <i class="fas fa-long-arrow-alt-right"></i></button>
                        </form>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="center-box">
                       <div class="info-container wow animate__ animate__zoomIn animated" data-wow-duration="1.5s">
                        <h2>say hello!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut.</p>
                        <div class="icon-list list-1">
                           <a href="tel:123-456-789-0"><i class="fas fa-phone-alt"></i><span>123-456-789-0</span></a>
                        </div>
                        <div class="icon-list list-2">
                           <a href="mailto:Loremipsum@gamil.com"><i class="fas fa-envelope"></i><span>Loremipsum@gamil.com</span></a>
                        </div>
                        <div class="icon-list list-3">
                           <a href="https://www.google.com/maps" target="blank"><i class="fas fa-map-marker-alt"></i><span>Loremipsum</span></a>
                        </div>
                        <h3>follow us</h3>
                        <div class="social-icons">
                            <div class="facebook"><a href="https://www.facebook.com/" target="blank"><i class="fab fa-facebook-f"></i></a></div>
                            <div class="insta"><a href="https://www.instagram.com/" target="blank"><i class="fab fa-instagram"></i></a></div>
                            <div class="linkedin"><a href="https://www.linkedin.com/" target="blank"><i class="fab fa-linkedin-in"></i></a></div>
                        </div>
                       </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>

    <!-- End Contact Form -->

    <!-- Start Footer -->

    <?php include('./assets/commons/footer.php') ?>

    <!-- End Footer -->

   </div>
  </div>

  <div class="cursor"></div>

    <!-- Start Script -->

    <?php include('./assets/commons/script.php') ?>

    <!-- End Script -->
    
</body>
</html>