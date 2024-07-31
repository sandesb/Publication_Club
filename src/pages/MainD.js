import {Link} from "react-router-dom";
const MainD = () => {
    return (
        <div>

<main className="mainc">
<section class="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-12 mx-auto">
                            <h1 class="vcolor text-center">Veröffentlichungsclub</h1>

                            <h2 class="newcolor text-center ">- Startpaket für öffentliches Sprechen -</h2>

                    
                        </div>

                    </div>
                </div>
            </section>



            <section class="featured-section ">
                <div class="container ">
                    <div class="row justify-content-center ">

                        <div class="col-lg-4 col-12 mb-4 mb-lg-0 ">
                            <div class="custom-block bg-white shadow-lg mt-4 ">
                                    <div class="d-flex ">
                                        <div>
                                            <h5 class="mb-2 newcolor">Was machen wir?</h5>

                                            <p class="mb-0">Nun, wir haben den komplizierten Tanz des 'Nichtstuns... überhaupt nichts' gemeistert.</p>
                                        </div>

                                    </div>

                                    <img src="/undraw_online_ad_re_ol62.png" class="custom-block-image img-fluid" alt=""/>
                             
                            </div>
                        </div>

                        <div class="col-lg-6 col-12 mt-4 ">
                            <div class="custom-block custom-block-overlay">
                                <div class="d-flex flex-column h-100 ">
                                    <img src="/publics.png" class="custom-block-image img-fluid" alt=""/>

                                    <div class="custom-block-overlay-text d-flex">
                                        <div>
                                            <h5 class="text-white mb-2">Öffentliches Sprechen</h5>

                                            <p class="text-white">Kontaktieren Sie uns am Virinchi College, um mehr über unsere Programme zum öffentlichen Sprechen zu erfahren.</p>

                                            <Link className="linky" to="/pages/AboutUs"><a href="topics-detail.html" class="custom-btn vcolor mt-2 mt-lg-3">Erfahren Sie mehr</a>
                                            </Link> </div>

                                    </div>

                                    <div class="social-share d-flex">
                                        <p class="text-white me-4">Teilen:</p>

                                        <ul class="social-icon"/>
                                            <li class="social-icon-item">
                                                <a href="#" class="social-icon-link bi-instagram"></a>
                                            </li>

                                           
                                    </div>

                                    <div class="section-overlay"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="faq-section section-padding" id="section_4">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <h2 class="mb-4">Häufig gestellte Fragen</h2>
                        </div>

                        <div class="clearfix"></div>

                        <div class="col-lg-5 col-12">
                            <img src="/faq_graphic.jpg" class="img-fluid" alt="FAQs"/>
                        </div>

                        <div class="col-lg-6 col-12 m-auto">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Was ist Thema-Listing?
                                        </button>
                                    </h2>

                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Thema-Listing ist eine kostenlose Bootstrap 5 CSS-Vorlage. <strong>Sie dürfen diese Vorlage nicht auf anderen Vorlagensammlungs-Websites ohne unsere Erlaubnis weiterverteilen.</strong> Kontaktieren Sie TemplateMo für weitere Details. Danke!
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Wie finde ich ein Thema?
                                    </button>
                                    </h2>

                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Suchen Sie einfach auf Google nach <strong>Schlüsselwörtern</strong> wie templatemo portfolio, templatemo Einseitenlayouts, Fotografie, digitales Marketing usw.
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Muss ich dafür bezahlen?
                                    </button>
                                    </h2>

                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Sie können dies mit benutzerdefiniertem CSS oder durch Überschreiben unserer Standardvariablen ändern. Es ist auch erwähnenswert, dass fast jedes HTML in den <code>.accordion-body</code> gehen kann, obwohl die Übergänge das Überlaufen begrenzen.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="contact-section section-padding" id="section_5">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">
                            <h2 class="mb-5">Kontakt aufnehmen</h2>
                        </div>

                        <div class="col-lg-5 col-12 mb-4 mb-lg-0">
                            <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4428889158485!2d85.31597057546615!3d27.67270327620255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cb05097d61%3A0x66d083a187176a11!2sVIRINCHI%20COLLEGE!5e0!3m2!1sen!2snp!4v1711903457485!5m2!1sen!2snp" width="400" height="300" ></iframe>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
                            <h4 class="mb-3">Hauptquartier</h4>

                            <p>Bay St &amp;, Larkin St, San Francisco, CA 94109, Vereinigte Staaten</p>

                            <hr/>

                            <p class="d-flex align-items-center mb-1">
                                <span class="me-2">Telefon</span>

                                <a href="tel: 305-240-9671" class="site-footer-link">
                                    305-240-9671
                                </a>
                            </p>

                            <p class="d-flex align-items-center">
                                <span class="me-2">E-Mail</span>

                                <a href="mailto:info@company.com" class="site-footer-link">
                                    info@company.com
                                </a>
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12 mx-auto">
                            <h4 class="mb-3">Dubai Büro</h4>

                            <p>Burj Park, Downtown Dubai, Vereinigte Arabische Emirate</p>

                            <hr/>

                            <p class="d-flex align-items-center mb-1">
                                <span class="me-2">Telefon</span>

                                <a href="tel: 110-220-3400" class="site-footer-link">
                                    110-220-3400
                                </a>
                            </p>

                            <p class="d-flex align-items-center">
                                <span class="me-2">E-Mail</span>

                                <a href="mailto:info@company.com" class="site-footer-link">
                                    info@company.com
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            
</main>   
        
        </div>
    );
};

export default MainD;
