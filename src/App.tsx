import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Star, Scissors, Sparkles, Droplet, Wind, Heart, ChevronRight, Menu, X, Quote, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-olive selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-sand/95 backdrop-blur-md border-b border-brand-dark/10 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-3xl font-semibold tracking-wide">Glorimar</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollTo('services')} className="text-xs uppercase tracking-widest font-medium hover:text-brand-olive transition-colors">Services</button>
              <button onClick={() => scrollTo('about')} className="text-xs uppercase tracking-widest font-medium hover:text-brand-olive transition-colors">About</button>
              <button onClick={() => scrollTo('testimonials')} className="text-xs uppercase tracking-widest font-medium hover:text-brand-olive transition-colors">Reviews</button>
              <button onClick={() => scrollTo('contact')} className="px-6 py-2.5 bg-brand-dark text-brand-light rounded-full text-xs uppercase tracking-widest font-medium hover:bg-brand-olive transition-colors">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-dark p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-sand pt-24 px-4 pb-8 flex flex-col md:hidden"
          >
            <div className="flex flex-col space-y-6 items-center text-lg">
              <button onClick={() => scrollTo('services')} className="uppercase tracking-widest font-medium">Services</button>
              <button onClick={() => scrollTo('about')} className="uppercase tracking-widest font-medium">About</button>
              <button onClick={() => scrollTo('testimonials')} className="uppercase tracking-widest font-medium">Reviews</button>
              <button onClick={() => scrollTo('contact')} className="uppercase tracking-widest font-medium">Contact</button>
              <a href="tel:+14079691029" className="mt-8 px-8 py-4 bg-brand-dark text-brand-light rounded-full text-sm uppercase tracking-widest font-medium w-full text-center">
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hairsalon1/1920/1080" 
            alt="Salon interior" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-sand/60 via-brand-sand/80 to-brand-sand"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-xs md:text-sm uppercase tracking-[0.3em] text-brand-olive mb-6 font-semibold">Welcome to Glorimar</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.1] tracking-tight">
              Transform Your Look <br/>
              <span className="italic text-brand-olive">with Expert Styling</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 mb-12 font-light leading-relaxed">
              At Glorimar Unisex Salon in Orlando, we bring out your best look with professional care, precision, and style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-brand-light rounded-full text-xs uppercase tracking-widest font-medium hover:bg-brand-olive transition-all flex items-center justify-center gap-2 group">
                Book Appointment <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+14079691029" className="w-full sm:w-auto px-8 py-4 border border-brand-dark/20 rounded-full text-xs uppercase tracking-widest font-medium hover:border-brand-dark transition-all flex items-center justify-center gap-2">
                <Phone size={16} /> Call Now
              </a>
              <a href="https://wa.me/14079691029" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Boost */}
      <section className="py-12 border-y border-brand-dark/10 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Star className="text-brand-olive" size={24} />
              <span className="font-serif text-3xl">90+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/60 font-semibold">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Scissors className="text-brand-olive" size={24} />
              <span className="font-serif text-3xl">Expert</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/60 font-semibold">Pro Stylists</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="text-brand-olive" size={24} />
              <span className="font-serif text-3xl">Orlando</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/60 font-semibold">Location</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="text-brand-olive" size={24} />
              <span className="font-serif text-3xl">7 Days</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/60 font-semibold">Open Weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="block text-xs uppercase tracking-[0.3em] text-brand-olive mb-4 font-semibold">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">Our Services</h2>
            <p className="max-w-2xl mx-auto text-lg text-brand-dark/70 font-light leading-relaxed">
              Whether you want a bold new look or a simple refresh, our experienced stylists deliver results you'll love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Haircuts", desc: "Precision cuts for men and women tailored to your face shape and lifestyle.", icon: Scissors },
              { title: "Coloring & Highlights", desc: "From subtle balayage to bold transformations using premium color products.", icon: Sparkles },
              { title: "Relaxers & Treatments", desc: "Nourishing treatments to restore health, shine, and manageability.", icon: Droplet },
              { title: "Styling & Blowouts", desc: "Flawless styling for special occasions or your weekly confidence boost.", icon: Wind },
              { title: "Natural Hair Care", desc: "Expert care and styling for all natural hair textures and curl patterns.", icon: Heart },
            ].map((service, idx) => (
              <div key={idx} className="p-8 md:p-10 rounded-[2rem] bg-brand-sand/30 hover:bg-brand-sand/80 transition-colors group border border-brand-dark/5">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-brand-olive" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-brand-dark/70 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/stylist2/800/1000" 
                  alt="Stylist at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-brand-olive/20 flex items-center justify-center bg-brand-sand p-6 hidden md:flex backdrop-blur-sm">
                <p className="text-center font-serif text-xl italic text-brand-olive leading-tight">Passionate about your confidence.</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="block text-xs uppercase tracking-[0.3em] text-brand-olive mb-6 font-semibold">About Us</span>
              <h2 className="text-4xl md:text-6xl font-light mb-8 leading-[1.1] tracking-tight">
                Delivering quality <br/>
                <span className="italic text-brand-olive">in a welcoming environment</span>
              </h2>
              <div className="space-y-6 text-lg text-brand-dark/80 font-light leading-relaxed">
                <p>
                  Located in the heart of Orlando, Glorimar Unisex Salon is known for delivering quality hair services in a friendly and welcoming environment.
                </p>
                <p>
                  Our team, led by experienced stylists like Adriana, is passionate about helping every client feel confident and beautiful. We take the time to understand your vision and use our expertise to bring it to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 bg-[#141414] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="block text-xs uppercase tracking-[0.3em] text-brand-olive mb-4 font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">Client Stories</h2>
            <div className="flex justify-center gap-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-white/50 uppercase tracking-widest text-xs font-medium">Rated 4.2+ on Birdeye</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { text: "I've been coming here for almost a year and always leave feeling like a new person.", author: "Happy Client" },
              { text: "Adriana did an excellent job on my hair. I'm very happy with the results!", author: "Satisfied Customer" },
              { text: "Amazing experience with color and styling — very professional and patient.", author: "Loyal Client" }
            ].map((review, idx) => (
              <div key={idx} className="p-10 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <Quote className="text-brand-olive mb-8 opacity-60" size={32} strokeWidth={1.5} />
                <p className="text-xl font-light leading-relaxed mb-8 text-white/90">"{review.text}"</p>
                <p className="font-serif text-lg italic text-white/50">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-brand-olive mb-6 font-semibold">Get In Touch</span>
              <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">Visit Us</h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-brand-sand flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand-olive" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-3">Location</h3>
                    <p className="text-brand-dark/70 font-light text-lg leading-relaxed">
                      4751 Old Goldenrod Rd #2<br/>
                      Orlando, FL 32822
                    </p>
                    <a href="https://maps.google.com/?q=4751+Old+Goldenrod+Rd+%232,+Orlando,+FL+32822" target="_blank" rel="noreferrer" className="inline-block mt-4 text-xs uppercase tracking-[0.2em] font-semibold text-brand-olive hover:text-brand-dark transition-colors">Get Directions &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-brand-sand flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand-olive" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-3">Contact</h3>
                    <p className="text-brand-dark/70 font-light text-lg leading-relaxed">+1 407-969-1029</p>
                    <a href="tel:+14079691029" className="inline-block mt-4 text-xs uppercase tracking-[0.2em] font-semibold text-brand-olive hover:text-brand-dark transition-colors">Call Now &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-[#25D366]" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-3">WhatsApp</h3>
                    <p className="text-brand-dark/70 font-light text-lg leading-relaxed">+1 407-969-1029</p>
                    <a href="https://wa.me/14079691029" target="_blank" rel="noreferrer" className="inline-block mt-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#25D366] hover:text-[#128C7E] transition-colors">Message Us &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-brand-sand flex items-center justify-center flex-shrink-0">
                    <Clock className="text-brand-olive" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-3">Hours</h3>
                    <p className="text-brand-dark/70 font-light text-lg leading-relaxed">
                      Mon – Sun: 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[500px] lg:h-auto rounded-[2rem] overflow-hidden bg-brand-sand relative shadow-xl shadow-brand-dark/5">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '500px' }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://maps.google.com/maps?q=4751%20Old%20Goldenrod%20Rd%20%232,%20Orlando,%20FL%2032822&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Glorimar Unisex Salon Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-brand-dark/10 text-center text-brand-dark/50 text-sm font-light bg-brand-sand">
        <p>&copy; {new Date().getFullYear()} Glorimar Unisex Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}

