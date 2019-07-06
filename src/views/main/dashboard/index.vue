<template>
<div class="tab-container">

  <!-- BEGIN MAIN LAYOUT -->
	<!-- Header BEGIN -->
    <header class="page-header">
        <nav class="navbar navbar-fixed-top" role="navigation">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="toggle-icon">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </span>
                    </button>
                    <a class="navbar-brand" href="#intro">
                        <img class="logo-default" src="@/assets/dashboard/logo_default.png" alt="Logo">
                        <img class="logo-scroll" src="@/assets/dashboard/logo_scroll.png" alt="Logo">
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-responsive-collapse">
                    <ul class="nav navbar-nav">
                        <li class="page-scroll active">
                            <a href="#intro">主页</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#about">新闻资讯</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#features">平台特色</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#team">团队</a>
                        </li>
                        <!-- <li class="page-scroll">
                            <a href="#clients">Clients</a>
                        </li> -->
                        <li class="page-scroll">
                            <a href="#portfolio">科研项目</a>
                        </li>
                        <!-- <li class="page-scroll">
                            <a href="#pricing">Pricing</a>
                        </li> -->
                        <li class="page-scroll">
                            <a href="#contact">联系我们</a>
                        </li>
                    </ul>
                </div>
                <!-- End Navbar Collapse -->
            </div>
            <!--/container-->
        </nav>
    </header>
    <!-- Header END -->

    <!-- BEGIN INTRO SECTION -->
    <section id="intro">
        <!-- Slider BEGIN -->
        <div class="page-slider">
            <div class="fullwidthbanner-container revolution-slider">
                <div class="banner">
                    <ul id="revolutionul">
                        <!-- THE NEW SLIDE -->
                        <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="9400" data-thumb="">
                            <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
                            <img src="@/assets/dashboard/bg_slider1.jpg" alt="">

                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-340"
                                data-voffset="-70"
                                data-speed="900"
                                data-start="1000"
                                data-easing="easeOutExpo">
                                <h3>纳米钛酸钡</h3>
                            </div>
                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-385"
                                data-voffset="45"
                                data-speed="900"
                                data-start="1500"
                                data-easing="easeOutExpo">
                                <p class="subtitle-v1">目前钛酸钡基材料<br>
                            被广泛的应用动态随机储存器、电子滤波器、<br>
                            谐振器、超声探测、温控传感器及高介电常数的电容器等</p>
                            </div>
                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-500"
                                data-voffset="140"
                                data-speed="900"
                                data-start="2000"
                                data-easing="easeOutExpo">
                                <a href="#" class="btn-brd-white">了解更多</a>
                            </div>
                            <div class="caption lfb tp-resizeme"
                                data-x="right"
                                data-y="bottom"
                                data-hoffset="50"
                                data-speed="900"
                                data-start="2500"
                                data-easing="easeOutExpo">
                                <img src="@/assets/dashboard/index1.PNG" alt="Image 3">
                            </div>
                        </li>
                        <!-- THE NEW SLIDE -->
                        <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="6000" data-thumb="">
                            <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
                            <img src="@/assets/dashboard/bg_slider2.jpg" alt="">

                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-322"
                                data-voffset="-30"
                                data-speed="900"
                                data-start="1000"
                                data-easing="easeOutExpo">
                                <h3 class="title-v2">Ultimate Apps <br>
                                for Business</h3>
                            </div>
                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-490"
                                data-voffset="110"
                                data-speed="900"
                                data-start="1500"
                                data-easing="easeOutExpo">
                                <p class="subtitle-v2">Available in:</p>
                            </div>
                            <a href="#" class="caption lft tp-resizeme slide_thumb_img slide_border"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-370"
                                data-voffset="102"
                                data-speed="900"
                                data-start="1500"
                                data-easing="easeOutExpo">
                                <img src="@/assets/dashboard/icon_android.png" alt="Image 1">
                                |
                            </a>
                            <a href="#" class="caption lft tp-resizeme slide_thumb_img"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-318"
                                data-voffset="102"
                                data-speed="900"
                                data-start="1500"
                                data-easing="easeOutExpo">
                                <img src="@/assets/dashboard/icon_ios.png" alt="Image 2">
                            </a>
                            <div class="caption lfb tp-resizeme"
                                data-x="right"
                                data-y="bottom"
                                data-hoffset="100"
                                data-speed="900"
                                data-start="2000"
                                data-easing="easeOutExpo">
                                <img src="@/assets/dashboard/index2.PNG" alt="Image 3">
                            </div>
                        </li>

                        <!-- THE NEW SLIDE -->
                        <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="6000" data-thumb="">
                            <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
                            <img src="@/assets/dashboard/bg_slider2.jpg" alt="">

                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-322"
                                data-voffset="-30"
                                data-speed="900"
                                data-start="1000"
                                data-easing="easeOutExpo">
                                <h3 class="title-v2">Ultimate Apps <br>
                                for Business</h3>
                            </div>
                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-490"
                                data-voffset="110"
                                data-speed="900"
                                data-start="1500"
                                data-easing="easeOutExpo">
                                <p class="subtitle-v2">Available in:</p>
                            </div>
                            <a href="#" class="caption lft tp-resizeme slide_thumb_img slide_border"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-370"
                                data-voffset="102"
                                data-speed="900"
                                data-start="1500"
                                data-easing="easeOutExpo">
                                <img src="@/assets/dashboard/icon_android.png" alt="Image 1">
                                |
                            </a>
                            <a href="#" class="caption lft tp-resizeme slide_thumb_img"
                                data-x="center"
                                data-y="center"
                                data-hoffset="-318"
                                data-voffset="102"
                                data-speed="900"
                                data-start="1500"
                                data-easing="easeOutExpo">
                                <img src="@/assets/dashboard/icon_ios.png" alt="Image 2">
                            </a>
                            <div class="caption lfb tp-resizeme"
                                data-x="right"
                                data-y="bottom"
                                data-hoffset="100"
                                data-speed="900"
                                data-start="2000"
                                data-easing="easeOutExpo">
                                <img src="@/assets/dashboard/index3.PNG" alt="Image 3">
                            </div>
                        </li>
                        <!-- THE NEW SLIDE -->
                        <!-- <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="6000" data-thumb="">
                            <img src="@/assets/dashboard/blank.png" alt="">

                            <div class="caption fulllscreenvideo tp-videolayer"
                                    data-x="0"
                                    data-y="0"
                                    data-speed="600"
                                    data-start="1000"
                                    data-easing="Power4.easeOut"
                                    data-endspeed="500"
                                    data-endeasing="Power4.easeOut"
                                    data-autoplay="true"
                                    data-autoplayonlyfirsttime="false"
                                    data-nextslideatend="true"
                                    data-videowidth="100%"
                                    data-videoheight="100%"
                                    data-videopreload="meta"
                                    data-videomp4="http://themepunch.com/revolution/wp-content/uploads/2014/05/among_the_stars.mp4"
                                    data-videowebm="http://themepunch.com/revolution/wp-content/uploads/2014/05/among_the_stars.webm"
                                    data-videocontrols="none"
                                    data-forcecover="1"
                                    data-forcerewind="on"
                                    data-aspectratio="16:9"
                                    data-volume="mute"
                                    data-videoposter="@/assets/dashboard/bg_slider3.jpg">
                            </div>

                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-voffset="-100"
                                data-speed="900"
                                data-start="1000"
                                data-easing="easeOutExpo">
                                <h3>Let us show you</h3>
                            </div>
                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-voffset="10"
                                data-speed="900"
                                data-start="1500"
                                data-easing="easeOutExpo">
                                <h3 class="red-title">A few things</h3>
                            </div>
                            <div class="caption lft tp-resizeme"
                                data-x="center"
                                data-y="center"
                                data-voffset="130"
                                data-speed="900"
                                data-start="2000"
                                data-easing="easeOutExpo">
                                <a href="#" class="btn-brd-white">Learn More</a>
                            </div>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
        <!-- Slider END -->
    </section>
    <!-- END INTRO SECTION -->

    <!-- BEGIN MAIN LAYOUT -->
    <div class="page-content">
        <!-- SUBSCRIBE BEGIN -->
        <div class="subscribe">
            <div class="container">
                <div class="subscribe-wrap">
                    <div class="subscribe-body subscribe-desc md-margin-bottom-30">
                        <h1>免费注册</h1>
                        <p>To try the most advanced business platform for mobile and desktop</p>
                    </div>
                    <div class="subscribe-body">
                        <form class="form-wrap input-field">
                            <div class="form-wrap-group">
                                <input type="name" class="form-control" id="name" placeholder="用户名">
                            </div>
                            <div class="form-wrap-group border-left-transparent">
                                <input type="email" class="form-control" id="email" placeholder="Email">
                            </div>
                            <div class="form-wrap-group">
                                <button type="submit" class="btn-danger btn-md btn-block">登录</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- SUBSCRIBE END -->

        <!-- BEGIN ABOUT SECTION -->
        <section id="about">
            <!-- Services BEGIN -->
            <div class="container service-bg">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="services sm-margin-bottom-100">
                            <div class="services-wrap">
                                <div class="service-body">
                                    <img src="@/assets/dashboard/icon1.png" alt="">
                                </div>
                            </div>
                            <h2>Metronic is time saver</h2>
                            <p>Lorem ipsum dolor consetuer <br> erat votpat dolore</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services sm-margin-bottom-100">
                            <div class="services-wrap">
                                <div class="service-body">
                                    <img src="@/assets/dashboard/icon2.png" alt="">
                                </div>
                            </div>
                            <h2>Created for all type Devices</h2>
                            <p>Lorem ipsum dolor consetuer <br> erat votpat dolore</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services">
                            <div class="services-wrap">
                                <div class="service-body">
                                    <img src="@/assets/dashboard/icon3.png" alt="">
                                </div>
                            </div>
                            <h2>Great individual Design</h2>
                            <p>Lorem ipsum dolor consetuer <br> erat votpat dolore</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Services END -->
        </section>
        <!-- END ABOUT SECTION -->

        <!-- BEGIN FEATURES SECTION -->
        <section id="features">
            <!-- Features BEGIN -->
            <div class="features-bg">
                <div class="container">
                    <div class="heading">
                        <h2><strong>Metronics</strong> Main Features</h2>
                        <p>To try the most advanced business</p>
                    </div><!-- //end heading -->

                    <!-- Features -->
                    <div class="row margin-bottom-70">
                        <div class="col-md-6 md-margin-bottom-70">
                            <div class="features">
                                <img src="@/assets/dashboard/screen1.png" alt="">
                                <div class="features-in">
                                    <h3><a href="#">Full sass support</a></h3>
                                    <p>Lorem niam ipsum dolor sit ammet adipiscing et suitem elit et nonuy nibh elit niam dolor</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="features">
                                <img src="@/assets/dashboard/screen2.png" alt="">
                                <div class="features-in">
                                    <h3><a href="#">Awesome design</a></h3>
                                    <p>Lorem niam ipsum dolor sit ammet adipiscing et suitem elit et nonuy nibh elit niam dolor</p>
                                </div>
                            </div>
                        </div>
                    </div><!-- //end row -->
                    <div class="row margin-bottom-80">
                        <div class="col-md-6 md-margin-bottom-70">
                            <div class="features">
                                <img src="@/assets/dashboard/screen3.png" alt="">
                                <div class="features-in">
                                    <h3><a href="#">Built with bootstrap</a></h3>
                                    <p>Lorem niam ipsum dolor sit ammet adipiscing et suitem elit et nonuy nibh elit niam dolor</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="features">
                                <img src="@/assets/dashboard/screen4.png" alt="">
                                <div class="features-in">
                                    <h3><a href="#">AngularJS support</a></h3>
                                    <p>Lorem niam ipsum dolor sit ammet adipiscing et suitem elit et nonuy nibh elit niam dolor</p>
                                </div>
                            </div>
                        </div>
                    </div><!-- //end row -->
                    <!-- End Features -->

                    <center><a href="#" class="btn-brd-danger">Try it for free</a></center>
                </div>
            </div>
            <!-- Features END -->
        </section>
        <!-- END FEATURES SECTION -->

        <!-- BEGIN TEAM SECTION -->
        <section id="team">
            <!-- Team BEGIN -->
            <div class="team-bg parallax">
                <div class="container">
                    <div class="heading-light">
                        <h2>Our <strong>Great Team</strong></h2>
                    </div><!-- //end heading -->

                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="team-members">
                                        <div class="team-avatar">
                                            <img class="img-responsive" src="@/assets/dashboard/member1.png" alt="">
                                        </div>
                                        <div class="team-desc">
                                            <div class="team-details">
                                                <h4>John Doe</h4>
                                                <span>Marketing</span>
                                            </div>
                                            <ul class="team-socials">
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="team-members">
                                        <div class="team-avatar">
                                            <img class="img-responsive" src="@/assets/dashboard/member2.png" alt="">
                                        </div>
                                        <div class="team-desc">
                                            <div class="team-details">
                                                <h4>Melisa Doe</h4>
                                                <span>Founder</span>
                                            </div>
                                            <ul class="team-socials">
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="team-members">
                                        <div class="team-avatar">
                                            <img class="img-responsive" src="@/assets/dashboard/member3.png" alt="">
                                        </div>
                                        <div class="team-desc">
                                            <div class="team-details">
                                                <h4>Alex Atkinson</h4>
                                                <span>Director</span>
                                            </div>
                                            <ul class="team-socials">
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- //end row -->
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="team-members">
                                        <div class="team-avatar">
                                            <img class="img-responsive" src="@/assets/dashboard/member4.png" alt="">
                                        </div>
                                        <div class="team-desc">
                                            <div class="team-details">
                                                <h4>John Doe</h4>
                                                <span>Marketing</span>
                                            </div>
                                            <ul class="team-socials">
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="team-members">
                                        <div class="team-avatar">
                                            <img class="img-responsive" src="@/assets/dashboard/member5.png" alt="">
                                        </div>
                                        <div class="team-desc">
                                            <div class="team-details">
                                                <h4>Melisa Doe</h4>
                                                <span>Founder</span>
                                            </div>
                                            <ul class="team-socials">
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="team-members">
                                        <div class="team-avatar">
                                            <img class="img-responsive" src="@/assets/dashboard/member6.png" alt="">
                                        </div>
                                        <div class="team-desc">
                                            <div class="team-details">
                                                <h4>Alex Atkinson</h4>
                                                <span>Director</span>
                                            </div>
                                            <ul class="team-socials">
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- //end row -->
                        </div>
                        <div class="col-md-4">
                            <div class="team-about">
                                <h3>Built with bootstrap</h3>
                                <p>Lorem niam ipsum dolor sit ammet adipiscing et suitem elit et nonuy nibh elit niam dolor suit elit amet nonummy nibh dolore onec placerat interdum purus.</p>
                                <div class="margin-bottom-40"></div>
                                <h3>AngularJS Support</h3>
                                <p>Etiam aliquam ex pulvinar odio dictum commodo. Nulla dui risus, egestas sit amet nisi et, eleifend cursus odio.</p>
                                <div class="margin-bottom-40"></div>
                                <h3>and WOW Features</h3>
                                <p>Donec placerat interdum purus, at finibus enim aliquam non. Etiam congue fringilla pharetra. Vestibulum facilisis lectus eros. Etiam congue fringilla pharetra. Lorem niam ipsum dolor sit ammet adipiscing e</p>
                            </div>
                        </div>
                    </div><!-- //end row -->
                </div>
            </div>
            <!-- Team END -->
        </section>
        <!-- END TEAM SECTION -->

        <!-- BEGIN CLIENTS SECTION -->
        <section id="clients">
            <div class="clients">
                <div class="clients-bg">
                    <div class="container">
                        <div class="heading-blue">
                            <h2>Over <strong>30.000</strong> Customers</h2>
                            <p>and let's see what are they saying</p>
                        </div><!-- //end heading -->

                        <!-- Owl Carousel -->
                        <div class="owl-carousel">
                            <div class="item" data-quote="#client-quote-1">
                                <img src="@/assets/dashboard/logo1.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-2">
                                <img src="@/assets/dashboard/logo2.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-3">
                                <img src="@/assets/dashboard/logo3.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-4">
                                <img src="@/assets/dashboard/logo4.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-5">
                                <img src="@/assets/dashboard/logo5.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-6">
                                <img src="@/assets/dashboard/logo6.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-7">
                                <img src="@/assets/dashboard/logo7.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-8">
                                <img src="@/assets/dashboard/logo8.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-9">
                                <img src="@/assets/dashboard/logo9.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-10">
                                <img src="@/assets/dashboard/logo10.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-11">
                                <img src="@/assets/dashboard/logo11.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-12">
                                <img src="@/assets/dashboard/logo12.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-13">
                                <img src="@/assets/dashboard/logo13.png" alt="">
                            </div>
                            <div class="item" data-quote="#client-quote-14">
                                <img src="@/assets/dashboard/logo14.png" alt="">
                            </div>
                        </div>
                        <!-- End Owl Carousel -->
                    </div>
                </div>

                <!-- Clients Quotes -->
                <div class="clients-quotes">
                    <div class="container">
                        <div class="client-quote" id="client-quote-1">
                            <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit euismod tincidunt ut laoreet dolore magna aliquam dolor sit amet consectetuer elit</p>
                            <h4>Mark Nilson</h4>
                            <span>Director</span>
                        </div>
                        <div class="client-quote" id="client-quote-2">
                            <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit euismod tincidunt aliquam dolor sit amet consectetuer elit</p>
                            <h4>Lisa Wong</h4>
                            <span>Artist</span>
                        </div>
                        <div class="client-quote" id="client-quote-3">
                            <p>Lorem ipsum dolor sit amet consectetuer elit euismod tincidunt aliquam dolor sit amet elit</p>
                            <h4>Nick Dalton</h4>
                            <span>Developer</span>
                        </div>
                        <div class="client-quote" id="client-quote-4">
                            <p>Fusce mattis vestibulum felis, vel semper mi interdum quis. Vestibulum ligula turpis, aliquam a molestie quis, gravida eu libero.</p>
                            <h4>Alex Janmaat</h4>
                            <span>Co-Founder</span>
                        </div>
                        <div class="client-quote" id="client-quote-5">
                            <p>Vestibulum sodales imperdiet euismod.</p>
                            <h4>Jeffrey Veen</h4>
                            <span>Designer</span>
                        </div>
                        <div class="client-quote" id="client-quote-6">
                            <p>Praesent sed sollicitudin mauris. Praesent eu metus laoreet, sodales orci nec, rutrum dui.</p>
                            <h4>Inna Rose</h4>
                            <span>Google</span>
                        </div>
                        <div class="client-quote" id="client-quote-7">
                            <p>Sed ornare enim ligula, id imperdiet urna laoreet eu. Praesent eu metus laoreet, sodales orci nec, rutrum dui.</p>
                            <h4>Jacob Nelson</h4>
                            <span>Support</span>
                        </div>
                        <div class="client-quote" id="client-quote-8">
                            <p>Adipiscing elit euismod tincidunt ut laoreet dolore magna aliquam dolor sit amet consectetuer elit</p>
                            <h4>John Doe</h4>
                            <span>Marketing</span>
                        </div>
                        <div class="client-quote" id="client-quote-9">
                            <p>Nam euismod fringilla turpis vitae tincidunt, adipiscing elit euismod tincidunt aliquam dolor sit amet consectetuer elit</p>
                            <h4>Michael Stawson</h4>
                            <span>Graphic Designer</span>
                        </div>
                        <div class="client-quote" id="client-quote-10">
                            <p>Quisque eget mi non enim efficitur fermentum id at purus.</p>
                            <h4>Liam Nelsson</h4>
                            <span>Actor</span>
                        </div>
                        <div class="client-quote" id="client-quote-11">
                            <p>Integer et ante dictum, hendrerit metus eget, ornare massa.</p>
                            <h4>Madison Klarsson</h4>
                            <span>Director</span>
                        </div>
                        <div class="client-quote" id="client-quote-12">
                            <p>Vestibulum sodales imperdiet euismod.</p>
                            <h4>Ava Veen</h4>
                            <span>Writer</span>
                        </div>
                        <div class="client-quote" id="client-quote-13">
                            <p>Ut sit amet nisl nec dui lobortis gravida ut et neque. Praesent eu metus laoreet, sodales orci nec, rutrum dui.</p>
                            <h4>Sophia Williams</h4>
                            <span>Apple</span>
                        </div>
                        <div class="client-quote" id="client-quote-14">
                            <p>Nam non vulputate orci. Duis sed mi nec ligula tristique semper vitae pretium nisi. Pellentesque nec enim vel magna pulvinar vulputate.</p>
                            <h4>Melissa Korn</h4>
                            <span>Reporter</span>
                        </div>
                    </div>
                </div>
                <!-- End Clients Quotes -->
            </div>
        </section>
        <!-- END CLIENTS SECTION -->

        <!-- BEGIN PORTFOLIO SECTION -->
        <section id="portfolio">
            <div class="portfolio">
                <div class="container">
                    <div class="heading">
                        <h2>Theme <strong>Portfolio</strong></h2>
                    </div>

                    <div class="cube-portfolio">
                        <div id="filters-container" class="cbp-l-filters-alignCenter">
                            <div data-filter="*" class="cbp-filter-item-active cbp-filter-item"> All Stuff </div>
                            <div data-filter=".ecommerce" class="cbp-filter-item"> Ecommerce </div>
                            <div data-filter=".admin" class="cbp-filter-item"> Admin Theme </div>
                            <div data-filter=".corporate" class="cbp-filter-item"> Corporate </div>
                            <div data-filter=".retail" class="cbp-filter-item"> Retail </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5 md-margin-bottom-50">
                                <div class="heading-left">
                                    <h2>
                                        <strong>Our Work</strong>
                                        <br>
                                        Lorem ipsum dolor
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet consectetuer ipsum elit sed diam nonummy et euismod tincidunt ut laoreet dolore elit magna aliquam erat et ipsum volutpat magna aliquam  sed diam dolore lorem ipsum dolor sit amet consectetuer ipsum.</p><br>
                                    <a href="#" class="btn-brd-primary">Read More</a>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <!-- Cube Portfolio -->
                                <div id="grid-container" class="cbp-l-grid-agency">
                                    <div class="cbp-item ecommerce">
                                        <div class="cbp-caption">
                                            <div class="cbp-caption-hover-gradient">
                                                <img src="@/assets/dashboard/01.jpg" alt="">
                                            </div>
                                            <div class="cbp-caption-activeWrap">
                                                <div class="cbp-l-caption-alignCenter">
                                                    <div class="cbp-l-caption-body portfolio-icons">
                                                        <a href="@/assets/dashboard/01.jpg" class="cbp-lightbox" data-title="Title"><i class="fa fa-search"></i></a>
                                                        <a href="#"><i class="fa fa-file"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cbp-item admin">
                                        <div class="cbp-caption">
                                            <div class="cbp-caption-hover-gradient">
                                                <img src="@/assets/dashboard/02.jpg" alt="">
                                            </div>
                                            <div class="cbp-caption-activeWrap">
                                                <div class="cbp-l-caption-alignCenter">
                                                    <div class="cbp-l-caption-body portfolio-icons">
                                                        <a href="@/assets/dashboard/02.jpg" class="cbp-lightbox" data-title="Title"><i class="fa fa-search"></i></a>
                                                        <a href="#"><i class="fa fa-file"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cbp-item corporate">
                                        <div class="cbp-caption">
                                            <div class="cbp-caption-hover-gradient">
                                                <img src="@/assets/dashboard/03.jpg" alt="">
                                            </div>
                                            <div class="cbp-caption-activeWrap">
                                                <div class="cbp-l-caption-alignCenter">
                                                    <div class="cbp-l-caption-body portfolio-icons">
                                                        <a href="@/assets/dashboard/03.jpg" class="cbp-lightbox" data-title="Title"><i class="fa fa-search"></i></a>
                                                        <a href="#"><i class="fa fa-file"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cbp-item retail">
                                        <div class="cbp-caption">
                                            <div class="cbp-caption-hover-gradient">
                                                <img src="@/assets/dashboard/07.jpg" alt="">
                                            </div>
                                            <div class="cbp-caption-activeWrap">
                                                <div class="cbp-l-caption-alignCenter">
                                                    <div class="cbp-l-caption-body portfolio-icons">
                                                        <a href="@/assets/dashboard/04.jpg" class="cbp-lightbox" data-title="Title"><i class="fa fa-search"></i></a>
                                                        <a href="#"><i class="fa fa-file"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Cube Portfolio -->
                        </div>
                    </div><!-- //end row -->
                </div>
            </div>
        </section>
        <!-- END PORTFOLIO SECTION -->

        <!-- BEGIN PRICING SECTION -->
        <section id="pricing">
            <div class="pricing-bg">
                <div class="container">
                    <div class="heading">
                        <h2>Theme <strong>Pricing</strong></h2>
                        <P>To try the most advanced business platform <br> for mobile and desktop</P>
                    </div><!-- //end heading -->

                    <!-- Pricing -->
                    <div class="row no-space-row">
                        <div class="col-md-4">
                            <div class="pricing no-right-brd">
                                <img src="@/assets/dashboard/icon4.png" alt="">
                                <h4>Starter Plan</h4>
                                <span>$99 / Month</span>
                                <ul class="pricing-features">
                                    <li>1000 Copies</li>
                                    <li>Unlimited Data</li>
                                    <li>Unlimited Users</li>
                                    <li>Forst 7 days free</li>
                                </ul>
                                <button type="button" class="btn-brd-primary">Purchase</button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pricing pricing-red">
                                <img src="@/assets/dashboard/icon5.png" alt="">
                                <h4>Business Plan</h4>
                                <span>$99 / Month</span>
                                <ul class="pricing-features">
                                    <li>1000 Copies</li>
                                    <li>Unlimited Data</li>
                                    <li>Unlimited Users</li>
                                    <li>Forst 7 days free</li>
                                </ul>
                                <button type="button" class="btn-brd-white">Purchase</button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pricing no-left-brd">
                                <img src="@/assets/dashboard/icon6.png" alt="">
                                <h4>Expert Plan</h4>
                                <span>$199 / Month</span>
                                <ul class="pricing-features">
                                    <li>1000 Copies</li>
                                    <li>Unlimited Data</li>
                                    <li>Unlimited Users</li>
                                    <li>Forst 7 days free</li>
                                </ul>
                                <button type="button" class="btn-brd-primary">Purchase</button>
                            </div>
                        </div>
                    </div><!-- //end row -->
                    <!-- End Pricing -->
                </div>
            </div>
        </section>
        <!-- END PRICING SECTION -->

        <!-- BEGIN CONTACT SECTION -->
        <section id="contact">
            <!-- Footer -->
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="heading-left-light">
                                <h2>Say hello to Metronic</h2>
                                <p>To try the most advanced business platform <br> for mobile and desktop</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form">
                                <div class="form-wrap">
                                    <div class="form-wrap-group">
                                        <input type="text" placeholder="Your Name" class="form-control">
                                        <input type="text" placeholder="Subject" class="border-top-transparent form-control">
                                    </div>
                                    <div class="form-wrap-group border-left-transparent">
                                        <input type="text" placeholder="Your Email" class="form-control">
                                        <input type="text" placeholder="Contact Phone" class="border-top-transparent form-control">
                                    </div>
                                </div>
                            </div>
                            <textarea rows="8" name="message" placeholder="Write comment here ..." class="border-top-transparent form-control"></textarea>
                            <button type="submit" class="btn-danger btn-md btn-block">Send it</button>
                        </div>
                    </div><!-- //end row -->
                </div>
            </div>
            <!-- End Footer -->

            <!-- Footer Coypright -->
            <div class="footer-copyright">
                <div class="container">
                    <h3>Metronic</h3>
                    <ul class="copyright-socials">
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                    <P>Designed with love by KeenThemes</P>
                </div>
            </div>
            <!-- End Footer Coypright -->
        </section>
        <!-- END CONTACT SECTION -->
    </div>
    <!-- END MAIN LAYOUT -->
    <a href="#intro" class="go2top"><i class="fa fa-arrow-up"></i></a>

<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- BEGIN CORE PLUGINS -->
</div>
</template>

<script>
import mixin from '@/mixins/list' // 引入
import BMap from 'BMap'

export default {
  mixins: [mixin], // 使用mixins
  components: {
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  created() {
  },
  mounted() {
  },
  computed: {},
  methods: {

    changePro(name) {
      this.$router.push({
        path: '/product',
        query: {
          type: name,
        }
      })
    },

    play() {
      console.log('play callback')
    },
    jumpTo(name) {
      this.$router.push({
        path: '/' + name
      })
    },
    baiduMap() {

      // 百度地图API功能
      let map = new BMap.Map("allmap");
      // 百度坐标系坐标(地图中需要使用这个)
      var bPoints = new Array();
      //设置中心点
      map.centerAndZoom(new BMap.Point(120.963583, 30.874271), 15);
      //后台数据
      var data_info = [
        [120.963583, 30.874271, "地址：浙江省嘉善县惠民街道金嘉大道50号内2号厂房"],
      ];
      //信息窗口样式
      var opts = {
        width: 250, // 信息窗口宽度
        height: 80, // 信息窗口高度
        title: "<p style='color: red;'>浙江袋田精密制造有限公司</p>", // 信息窗口标题
        enableMessage: true //设置允许信息窗发送短息
      };
      addMarker(data_info);

      //创建标注点并添加到地图中
      function addMarker(data_info) {
        //循环建立标注点
        for (var i = 0; i < data_info.length; i++) {

          var point = new BMap.Point(data_info[i][0], data_info[i][1]); //将标注点转化成地图上的点
          bPoints.push(point); // 添加到百度坐标数组 用于自动调整缩放级别
          var marker = new BMap.Marker(point); // 创建标注
          var content = data_info[i][2];
          map.addOverlay(marker); // 将标注添加到地图中
          addClickHandler(content, marker);
        }
      }

      function addClickHandler(content, marker) {
        marker.addEventListener("click", function(e) {
          openInfo(content, e)
        });
      }

      function openInfo(content, e) {
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point); //开启信息窗口
      }
      // 根据点的数组自动调整缩放级别
      function setZoom(bPoints) {
        var view = map.getViewport(eval(bPoints));
        var mapZoom = view.zoom;
        var centerPoint = view.center;
        map.centerAndZoom(centerPoint, mapZoom);
      }
      map.addControl(new BMap.MapTypeControl());
      map.enableScrollWheelZoom(true);
      setTimeout(function() {
        setZoom(bPoints);
      }, 1000)
    },
    cfm_msg() {
      if ($("#nickname").val() == "" || $("#nickname").val() == "请填写联系人姓名") {
        alert("请填写联系人姓名！");
        $("#nickname").focus();
        return false;
      }
      if ($("#email").val() == "" || $("#email").val() == "请填写联系人邮箱") {
        alert("请填写联系人邮箱！");
        $("#email").focus();
        return false;
      }
      if ($("#content").val() == "") {
        alert("请填写留言内容！");
        $("#content").focus();
        return false;
      }

      alert("提交成功！");
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
    }
  },
  watch: {
    '$i18n.locale'(to, from) {
      this.reload()

    }
  }
}
</script>

<style lang="scss">
// @import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
