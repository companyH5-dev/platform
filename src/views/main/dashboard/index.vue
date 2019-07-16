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
              <a href="#features">平台简介</a>
            </li>
            <!-- <li class="page-scroll">
                            <a href="#clients">Clients</a>
                        </li> -->
            <li class="page-scroll">
              <a href="#portfolio"style="font-size:17px;font-weight:border;color: #fa3232;">选项目</a>
            </li>
            <li class="page-scroll">
              <a href="#zijin" style="font-size:16px;font-weight:border;color: #f8e276;">找资金</a>
            </li>
            <li class="page-scroll">
              <a href="#about">新闻资讯</a>
            </li>
            <!-- <li class="page-scroll">
              <a href="#team">团队介绍</a>
            </li> -->
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

            <!-- THE NEW SLIDE -->



            <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="129400" data-thumb="">
              <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
              <img src="@/assets/dashboard/bg_slider1.jpg" alt="">

              <div style="padding-right:90px;" class="caption lft tp-resizeme" data-x="center" data-y="center" data-hoffset="-350" data-voffset="-70" data-speed="900" data-start="1000" data-easing="easeOutExpo">
                <h3>纳米钛酸钡</h3>
              </div>
              <div class="caption lft tp-resizeme" data-x="center" data-y="center" data-hoffset="-285" data-voffset="55" data-speed="900" data-start="1500" data-easing="easeOutExpo">
                <p class="subtitle-v1"
                >目前钛酸钡基材料<br> 被广泛的应用动态随机储存器、电子滤波器、
                  <br> 谐振器、超声探测、温控传感器及高介电常数的电容器等
                </p>
              </div>
              <div class="caption lft tp-resizeme" data-x="center" data-y="center" data-hoffset="-500" data-voffset="140" data-speed="900" data-start="2000" data-easing="easeOutExpo">
                <a href="#" class="btn-brd-white">了解更多</a>
              </div>
              <div class="caption lfb tp-resizeme" data-x="right" data-y="bottom" data-hoffset="50" data-speed="900" data-start="2500" data-easing="easeOutExpo" style="left: 217px;top: 280px;z-index: 0;">
                <img src="@/assets/dashboard/index1.PNG" alt="Image 3">
              </div>
            </li>
            <!-- THE NEW SLIDE -->
            <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="226000" data-thumb="">
              <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
              <img src="@/assets/dashboard/bg_slider2.jpg" alt="">

              <div class="caption lft tp-resizeme" data-x="center" data-y="center" data-hoffset="-370" data-voffset="-30" data-speed="900" data-start="1000" data-easing="easeOutExpo">
                <h3 class="title-v2">SnO2@SnS2</h3>
              </div>
              <div class="caption lft tp-resizeme" data-x="center" data-y="center" data-hoffset="-385" data-voffset="110" data-speed="900" data-start="1500" data-easing="easeOutExpo">
                <p class="subtitle-v2">制备复合电极材料用于高效锂/钠存储</p>
              </div>

              <div class="caption lfb tp-resizeme" data-x="right" data-y="bottom" data-hoffset="100" data-speed="900" data-start="2000" data-easing="easeOutExpo">
                <img src="@/assets/dashboard/index2.PNG" alt="Image 3">
              </div>
            </li>
            <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="226000" data-thumb="">
              <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
              <img src="@/assets/dashboard/bg_slider2.jpg" alt="">

              <div class="caption lft tp-resizeme" data-x="center" data-y="center" data-hoffset="-370" data-voffset="-70" data-speed="900" data-start="1000" data-easing="easeOutExpo">
                <h3 class="title-v2">有机P-N异质结</h3>
              </div>
              <div class="caption lft tp-resizeme" data-x="center" data-y="center" data-hoffset="-385" data-voffset="50" data-speed="900" data-start="1500" data-easing="easeOutExpo">
                <p class="subtitle-v2">制备复合电极材料用于高效锂</p>
              </div>

              <div class="caption lfb tp-resizeme" data-x="right" data-y="bottom" data-hoffset="100" data-speed="900" data-start="2000" data-easing="easeOutExpo">
                <img src="@/assets/dashboard/index3.PNG" alt="Image 3">
              </div>
            </li>
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
            <h2 style="color:#fff;margin-top:0">加入我们</h2>
            <p style="font-size:16px;">享受线上+线下、标准化+个性化的服务体系，资本机构免费入驻！</p>
          </div>
          <div class="subscribe-body">
            <form class="form-wrap input-field">
              <div class="form-wrap-group">
                <input type="name" class="form-control" id="name" placeholder="手机号码">
              </div>
              <div class="form-wrap-group border-left-transparent">
                <input type="password" class="form-control" id="password" placeholder="密码">
              </div>
              <div class="form-wrap-group">
                <button type="submit" @click="cfm_msg" class="btn-danger btn-md btn-block">登录</button>
              </div>
              <div class="form-wrap-group">
                <button type="submit" @click="cfm_msg" class="btn-danger btn-md btn-block" style="margin-left: 20px;width: 62px;background: #2bad3b;border: 2px solid #2bad3b">注册</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- SUBSCRIBE END -->


    <!-- BEGIN FEATURES SECTION -->
    <section id="features">
      <!-- Features BEGIN -->
      <div class="features-bg">
        <div class="container">
          <div class="heading">
            <h2>平台<strong>简介</strong></h2>
            <p style=" padding: 0 160px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从一个全新的角度出发，打造科研互联网平台，为高校内的优势技术急需产业化<br>提供资金的支持，同时也解决了投资机构找项目难的问题。 项目-资金，快速达成合作意向的优秀互联网平台，
              <br>将科研产业化变得高效、清晰、明了。
            </p>
          </div>
          <!-- //end heading -->

          <!-- Features -->
          <div class="row margin-bottom-70">
            <div class="col-md-6 md-margin-bottom-70">
              <div class="features">
                <img src="@/assets/dashboard/ys1.png" alt="" style="width:100px;">
                <div class="features-in">
                  <h3><a href="#">高附加值、实际应用</a></h3>
                  <p>此新材料项目能够带来较高的生产价值及社会价值。</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="features">
                <img src="@/assets/dashboard/ys2.png" alt="" style="width:100px;">
                <div class="features-in">
                  <h3><a href="#">专业性（技术含金量）</a></h3>
                  <p>具有较高的技术含量，原创或打破国外垄断。</p>
                </div>
              </div>
            </div>
          </div>
          <!-- //end row -->
          <div class="row margin-bottom-80">
            <div class="col-md-6 md-margin-bottom-70">
              <div class="features">
                <img src="@/assets/dashboard/ys3.png" alt="" style="width:100px;">
                <div class="features-in">
                  <h3><a href="#">高效、快捷</a></h3>
                  <p>在平台权限范围内进行线上或线下的有效交流。</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="features">
                <img src="@/assets/dashboard/ys4.png" alt="" style="width:100px;">
                <div class="features-in">
                  <h3><a href="#">专家、教授相关资质</a></h3>
                  <p>技术研发成熟，相关技术成果已经以论文或专利的形式进行发表、申请。</p>
                </div>
              </div>
            </div>
          </div>
          <!-- //end row -->
          <!-- End Features -->

          <center><a href="#" class="btn-brd-danger">了解更多</a></center>
        </div>
      </div>
      <!-- Features END -->
    </section>
    <!-- END FEATURES SECTION -->


    <!-- BEGIN CLIENTS SECTION -->
    <section id="clients">
      <div class="clients">
        <div class="clients-bg">
          <div class="container">
            <div class="heading-blue">
              <h2>国家政策 <strong>扶持</strong></h2>
              <p>为了更好的引导我国新材料产业健康有序发展，在2016年国家出台《新材料产业发展指南》、《国家新材料生产应用示范平台建设方案》、《国家新材料产业资源共享平台建设方案》、
                《重点新材料首批次应用示范指导目录（2018年版）》及《新材料标准领航行动计划（2018-2020年）》等一系列新材料产业政策，积极抢占新材料领域的竞争制高点，随后
                全国主要省市在2018年陆续出台扶持新材料产业发展的规划...</p>
            </div>
            <!-- //end heading -->

            <!-- Owl Carousel -->
            <div class="owl-carousel">
              <div class="item" data-quote="#client-quote-1">
                <div class="" st>
                  浙江省
                </div>
              </div>
              <div class="item" data-quote="#client-quote-2">
                厦门市
              </div>
              <div class="item" data-quote="#client-quote-3">
                山东省
              </div>
              <div class="item" data-quote="#client-quote-4">
                天津市
              </div>
              <div class="item" data-quote="#client-quote-5">
                东莞市
              </div>
              <div class="item" data-quote="#client-quote-6">
                云南省
              </div>
              <div class="item" data-quote="#client-quote-7">
                深圳市
              </div>
              <div class="item" data-quote="#client-quote-8">
                河南省
              </div>
              <div class="item" data-quote="#client-quote-9">
                安徽省
              </div>
              <!-- <div class="item" data-quote="#client-quote-10">
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
              </div> -->
            </div>
            <!-- End Owl Carousel -->
          </div>
        </div>

        <!-- Clients Quotes -->
        <div class="clients-quotes">
          <div class="container">
            <div class="client-quote" id="client-quote-1">
              <p>2019年，《浙江省加快新材料产业发展行动计划（2019－2022年）》延续国家布局的三大重点领域，提出到2022年，新材料产业年产值突破1万亿元，比2018年增长53%以上，年均增长11.2%，产业规模稳居全国前4位；综合竞争力进一步提升，在浙江省经济社会发展中的地位更加突出。</p>
              <!-- <span>浙江省</span> -->
            </div>
            <div class="client-quote" id="client-quote-2">
              <p>2019年，厦门市出台的《新材料产业链群2018-2022年发展规划》厦门市将力争2020年全市新材料规上工业产值突破1000亿元，2022年超过1300亿元，壮大“特种金属及功能材料、光电信息材料、先进高分子材料、新能源材料、先进碳材料”等五大特色产业集群，到2025年新材料规上工业总产值突破2000亿元。</p>
              <!-- <span>厦门市</span> -->
            </div>
            <div class="client-quote" id="client-quote-3">
              <p>2018年，《山东省新材料产业发展专项规划（2018-2022年）》提出重点扶持的前沿新材料、关键战略材料、先进基础材料三大方向，将产业链条延伸，向高端进军，提升附加值。到2022年，全省新材料产业主营业务收入达到1.5万亿元，年均增长10%以上，产业规模保持全国前三，力争位次前移。</p>
              <!-- <span>山东省</span> -->
            </div>
            <div class="client-quote" id="client-quote-4">
              <p>2018年，《天津市新材料产业发展三年行动计划(2018—2020年)》提出重点发展基础材料，到2020年，新材料产业产值达到1800亿元，年均增长10%，重点领域新材料达到行业领先水平，建成国内一流的新材料产业基地。</p>
              <!-- <span>天津市</span> -->
            </div>
            <div class="client-quote" id="client-quote-5">
              <p>2018年，《东莞市重点新兴产业发展规划（2018－2025年）》明确重点发展先进材料、加快布局前沿材料，打通从基础科学发现、关键技术突破到产业应用的完整创新链。至2025年新材料产值超2000亿元。</p>
              <!-- <span>东莞市</span> -->
            </div>
            <div class="client-quote" id="client-quote-6">
              <p>2018年，云南省新材料产业发展三年行动计划（2018-2020年）》提出示范工程建设行动、招商引资推进行动、公共平台搭建及其他重点行动来推动云南省新材料产业发展，到2020年，全省新材料产业将实现1000亿元产值，年均产值增长率18.9%。</p>
              <!-- <span>云南省</span> -->
            </div>
            <div class="client-quote" id="client-quote-7">
              <p>2018年，《深圳市战略性新兴产业发展 “十三五”规划》到2020年，努力构建具有国际竞争力的新材料产业集群，产业规模达到2300亿元。</p>
              <!-- <span>深圳市</span> -->
            </div>
            <div class="client-quote" id="client-quote-8">
              <p>2018年，《河南省新型材料业转型升级行动计划（2017—2020年)》明确到2020年,新型材料业主营业务收入突破7000亿元、年均增长10%以上。</p>
              <!-- <span>河南省</span> -->
            </div>
            <div class="client-quote" id="client-quote-9">
              <p>2018年，《安徽省新材料产业发展规划(2018-2025年)》到2025年，全省新材料工业总产值将达到8000亿元，年均增长速度15%左右，销售产值超百亿元企业累计达30家左右，涌现一批具有国际竞争力的创新型领军企业和高成长性的科技型中小企业。</p>
              <!-- <span>安徽省</span> -->
            </div>
            <!-- <div class="client-quote" id="client-quote-10">
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
            </div> -->
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
            <h2>特色 <strong>项目</strong></h2>
            <P>具有较高的技术含量，<br> 原创或打破国外垄断，能够带来较高的生产价值及社会价值。 </P>
          </div>

          <div class="cube-portfolio">
            <div id="filters-container" class="cbp-l-filters-alignCenter">
              <div data-filter="*" class="cbp-filter-item-active cbp-filter-item"> 所有</div>
              <div data-filter=".ecommerce" class="cbp-filter-item"> 新能源 </div>
              <div data-filter=".admin" class="cbp-filter-item"> 新材料</div>
              <!-- <div data-filter=".corporate" class="cbp-filter-item"> 化学分类3 </div>
              <div data-filter=".retail" class="cbp-filter-item"> 化学分类4 </div> -->
            </div>
            <div class="row">
              <!-- <div class="col-md-5 md-margin-bottom-50">
                <div class="heading-left">
                  <h2>
                    <strong>我们的职责</strong>
                    <div class="" style="padding: 10px 30px;margin-top: 20px;">
                      创新 超越 品质 责任
                    </div>

                  </h2>
                  <p>近些年在新材料领域、各种原创技术贴合实际生产生活需要应运而生。如：锂电电极材料、陶瓷材料、合金材料、能源转化材料。</p><br>
                  <a href="#" class="btn-brd-primary">查看更多</a>
                </div>
              </div> -->
              <div class="col-md-12">
                <!-- Cube Portfolio -->
                <div id="grid-container" class="cbp-l-grid-agency">
                  <div class="cbp-item ecommerce">
                    <div class="cbp-caption">
                      <div class="cbp-caption-hover-gradient">
                        <img src="@/assets/dashboard/p1.jpg" alt="">
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
                  <div class="cbp-item ecommerce">
                    <div class="cbp-caption">
                      <div class="cbp-caption-hover-gradient">
                        <img src="@/assets/dashboard/p2.jpg" alt="">
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
                  <div class="cbp-item admin">
                    <div class="cbp-caption">
                      <div class="cbp-caption-hover-gradient">
                        <img src="@/assets/dashboard/p3.jpg" alt="">
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
                  <div class="cbp-item admin">
                    <div class="cbp-caption">
                      <div class="cbp-caption-hover-gradient">
                        <img src="@/assets/dashboard/p4.jpg" alt="">
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
                  <div class="cbp-item admin">
                    <div class="cbp-caption">
                      <div class="cbp-caption-hover-gradient">
                        <img src="@/assets/dashboard/p5.jpg" alt="">
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
                  <div class="cbp-item admin">
                    <div class="cbp-caption">
                      <div class="cbp-caption-hover-gradient">
                        <img src="@/assets/dashboard/p6.jpg" alt="">
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
                  <div class="cbp-item admin">
                    <div class="cbp-caption">
                      <div class="cbp-caption-hover-gradient">
                        <img src="@/assets/dashboard/p7.jpg" alt="">
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
                  <div class="cbp-item admin">
                    <div class="cbp-caption">
                      <div class="cbp-caption-hover-gradient">
                        <img src="@/assets/dashboard/p8.jpg" alt="">
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
          </div>
          <!-- //end row -->
        </div>
      </div>
    </section>
    <!-- END PORTFOLIO SECTION -->
    <!-- BEGIN PORTFOLIO SECTION -->
    <section id="zijin">
      <div class="portfolio">
        <div class="container">
          <div class="heading">
            <h2>找 <strong>资金</strong></h2>
            <P>引入实力投资，助推企业发展<br> 早期项目的福音，从这开始</P>
          </div>

          <div class="cube-portfolio">
            <!-- <div id="filters-container" class="cbp-l-filters-alignCenter">
              <div data-filter="*" class="cbp-filter-item-active cbp-filter-item"> 所有</div>
              <div data-filter=".ecommerce" class="cbp-filter-item"> 化学分类1 </div>
              <div data-filter=".admin" class="cbp-filter-item"> 化学分类2</div>
              <div data-filter=".corporate" class="cbp-filter-item"> 化学分类3 </div>
              <div data-filter=".retail" class="cbp-filter-item"> 化学分类4 </div>
            </div> -->
            <div class="row">

              <div class="col-md-12">
                <!-- Cube Portfolio -->
                <div id="grid-container" class="cbp-l-grid-agency">
                  <div class="cbp-item ecommerce" style="width: 270px;left: 0px;top: 0px;">
                    <div class="service-bg">
                      <div class="services sm-margin-bottom-100">
                        <div class="services-wrap">
                          <div class="service-body">
                            <img src="@/assets/dashboard/icon2.png" alt="">
                          </div>
                        </div>
                        <h2>公司1</h2>
                        <p>需求内容</p>
                      </div>
                    </div>
                  </div>
                  <div class="cbp-item admin" style="width: 270px;left: 0px;top: 0px;">
                    <div class="service-bg">
                      <div class="services sm-margin-bottom-100">
                        <div class="services-wrap">
                          <div class="service-body">
                            <img src="@/assets/dashboard/icon2.png" alt="">
                          </div>
                        </div>
                        <h2>公司2</h2>
                        <p>需求内容</p>
                      </div>
                    </div>
                  </div>
                  <div class="cbp-item corporate" style="width: 270px;left: 0px;top: 0px;">
                    <div class="service-bg">
                      <div class="services sm-margin-bottom-100">
                        <div class="services-wrap">
                          <div class="service-body">
                            <img src="@/assets/dashboard/icon3.png" alt="">
                          </div>
                        </div>
                        <h2>公司3</h2>
                        <p>需求内容</p>
                      </div>
                    </div>
                  </div>
                  <div class="cbp-item retail" style="width: 270px;left: 0px;top: 0px;">
                    <div class="service-bg">
                      <div class="services sm-margin-bottom-100">
                        <div class="services-wrap">
                          <div class="service-body">
                            <img src="@/assets/dashboard/icon3.png" alt="">
                          </div>
                        </div>
                        <h2>公司3</h2>
                        <p>需求内容</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Cube Portfolio -->
            </div>
          </div>
          <!-- //end row -->
        </div>
      </div>
    </section>
    <!-- END PORTFOLIO SECTION -->

    <!-- BEGIN ABOUT SECTION -->
    <section id="about">
      <!-- Services BEGIN -->
      <div class="pricing-bg">
        <div class="container">
          <div class="heading">
            <h2>行业 <strong>资讯</strong></h2>
            <P>新能源、新材料是中国重点培育发展的七大战略性新兴产业之一，<br> 是高技术产业、高端制造及国防工业的基础和先导。</P>
          </div>
          <!-- //end heading -->

          <!-- Pricing -->
          <div class="row no-space-row">
            <div class="col-md-4">
              <div class="pricing no-right-brd">
                <img src="@/assets/dashboard/hy1.jpg" alt="">
                <h4>湖南新型节能环保陶瓷材料生产建设项目</h4>
                <span>成功融资1000万元</span>
                <button type="button" class="btn-brd-primary">查看</button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pricing pricing-red">
                <img src="@/assets/dashboard/hy2.jpg" alt="">
                <h4>辽宁锂电原料扩产项目</h4>
                <span>成功融资4000万元</span>
                <button type="button" class="btn-brd-white">查看</button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pricing no-left-brd">
                <img src="@/assets/dashboard/hy3.jpg" alt="">
                <h4>山西新能源氢燃料电池及整车项目</h4>
                <span>成功融资10亿元</span>
                <button type="button" class="btn-brd-primary">查看</button>
              </div>
            </div>
          </div>
          <!-- //end row -->
          <!-- End Pricing -->
        </div>
      </div>
      <!-- Services END -->
    </section>
    <!-- END ABOUT SECTION -->


    <!-- BEGIN CONTACT SECTION -->
    <section id="contact">
      <!-- Footer -->
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="heading-left-light">
                <h2>联系我们</h2>
                <p>我们是一个专业的融资信息服务平台，欢饮投融资机构、企业与个人用户入驻。禾投融通过线上+线下、标准化+个性化的服务体系，为客户提供针对性的投融资信息对接和项目撮配服务！</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form">
                <div class="form-wrap">
                  <div class="form-wrap-group">
                    <input type="text" placeholder="你的名字" class="form-control">
                    <input type="text" placeholder="项目名" class="border-top-transparent form-control">
                  </div>
                  <div class="form-wrap-group border-left-transparent">
                    <input type="text" placeholder="你的邮箱" class="form-control">
                    <input type="text" placeholder="联系方式" class="border-top-transparent form-control">
                  </div>
                </div>
              </div>
              <textarea rows="8" name="message" placeholder="说出你的想法..." class="border-top-transparent form-control"></textarea>
              <button type="submit" class="btn-danger btn-md btn-block">发送</button>
            </div>
          </div>
          <!-- //end row -->
        </div>
      </div>
      <!-- End Footer -->

      <!-- Footer Coypright -->
      <!-- <div class="footer-copyright">
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
      </div> -->
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
  components: {},
  data() {
    return {
      isRouterAlive: true,
    }
  },
  created() {},
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
      if ($("#name").val() == "" || $("#name").val() == "请填写手机号") {
        alert("请填写手机号！");
        $("#nickname").focus();
        return false;
      }
      if ($("#password").val() == "" || $("#password").val() == "请填写密码") {
        alert("请填写密码！");
        $("#password").focus();
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
