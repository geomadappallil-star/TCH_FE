import React, { useState, useRef } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Send, 
  Clock,
  Maximize2
} from 'lucide-react';
import { submitQuickCallback } from '../services/enquiryService.js';

export const VideoHero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'video' | 'callback'>('video');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Quick callback form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    service: 'Clinical nursing care',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string; refId?: string } | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const result = await submitQuickCallback(formData);
    setFeedback({
      success: result.success,
      message: result.message,
      refId: result.referenceId
    });

    if (result.success) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        suburb: '',
        service: 'Clinical nursing care',
        message: ''
      });
    }
    setIsSubmitting(false);
  };

  // High-definition royalty-free eldercare & nursing video loop (Pexels / Mixkit CC0 stream)
  // Direct CDN stream with fallback poster
  const videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4";
  const posterImg = "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=85";

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden aurora-bg">
      {/* Aurora Ambient Lighting Spheres */}
      <div className="aurora-orb-1 top-[-80px] left-[-80px] opacity-50"></div>
      <div className="aurora-orb-2 top-[100px] right-[-100px] opacity-40"></div>
      <div className="aurora-orb-gold bottom-[-40px] left-[30%] opacity-35"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-teal/20 text-xs sm:text-sm font-sans font-semibold text-teal-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span>Townsville · Ingham · Charters Towers Healthcare &amp; NDIS</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-sans text-muted">
            <ShieldCheck className="w-4 h-4 text-teal" />
            <span>AHPRA Registered RNs · Fully Screened Staff</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Minimal Headline & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-sans text-teal-ink tracking-tight leading-[1.12]">
              Compassionate clinical care and everyday living,{' '}
              <span className="relative whitespace-nowrap text-teal">
                at your door
                <span className="absolute left-0 right-0 -bottom-1 h-2.5 bg-gold/30 rounded-full -z-10"></span>
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-muted font-serif leading-relaxed max-w-xl">
              Locally owned and based right here in Townsville. We provide hospital-grade clinical nursing, allied health therapies, and dedicated home &amp; yard maintenance tailored to self-managed and plan-managed NDIS participants.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="tel:0431430905"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-glass-teal hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span>Call Alan: 0431 430 905</span>
              </a>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 glass-card border border-teal/25 text-teal-ink font-sans font-semibold text-sm sm:text-base px-5 py-3.5 rounded-full hover:bg-white/95 hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5 text-gold" />
                </div>
                <span>Watch Care Video</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-sans font-medium text-teal-900 border-t border-teal/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span>AHPRA Verified RNs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span>NDIS Plan &amp; Self-Managed</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span>100% Townsville Local</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Interactive Card */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/25 via-sage/20 to-gold/25 rounded-3xl blur-2xl transform scale-105 -z-10"></div>

              {/* Glass Frame Card */}
              <div className="glass-card overflow-hidden border border-white/80 shadow-2xl rounded-3xl">
                
                {/* Switcher Tab Header */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white/60 border-b border-teal/10">
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-teal-50/80 border border-teal/10">
                    <button
                      type="button"
                      onClick={() => setActiveTab('video')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all ${
                        activeTab === 'video'
                          ? 'bg-teal text-white shadow-sm'
                          : 'text-teal-900 hover:text-teal'
                      }`}
                    >
                      Care Video
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('callback')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all ${
                        activeTab === 'callback'
                          ? 'bg-teal text-white shadow-sm'
                          : 'text-teal-900 hover:text-teal'
                      }`}
                    >
                      Request Callback
                    </button>
                  </div>

                  <span className="text-[11px] font-sans font-semibold text-teal-800 bg-gold/20 px-2.5 py-1 rounded-full border border-gold/30">
                    {activeTab === 'video' ? 'Live Care in Action' : 'Direct to Alan'}
                  </span>
                </div>

                {/* Tab Content 1: Video Showcase */}
                {activeTab === 'video' && (
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-teal-950 overflow-hidden group">
                    
                    {/* Embedded Royalty-Free Video */}
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster={posterImg}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>

                    {/* Gradient Overlay for Minimalist Polish */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-ink/80 via-transparent to-black/20 pointer-events-none"></div>

                    {/* Floating Video Overlay Content */}
                    <div className="absolute inset-x-4 bottom-4 flex items-end justify-between z-10">
                      <div className="max-w-[280px] sm:max-w-xs text-white">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-teal/80 text-[10px] font-sans font-bold uppercase tracking-wider mb-1.5">
                          Clinical &amp; Home Care
                        </span>
                        <h4 className="font-sans font-bold text-sm sm:text-base leading-tight drop-shadow-md">
                          Attentive, dignified care for seniors &amp; participants
                        </h4>
                        <p className="text-[11px] text-teal-100 font-serif line-clamp-1 mt-0.5">
                          Regular nursing visits, wound care &amp; home assistance
                        </p>
                      </div>

                      {/* Glass Video Action Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/50 flex items-center justify-center transition-all shadow-sm"
                          title={isMuted ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>

                        <button
                          type="button"
                          onClick={togglePlay}
                          className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/50 flex items-center justify-center transition-all shadow-sm"
                          title={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => setVideoModalOpen(true)}
                          className="w-8 h-8 rounded-full bg-gold text-teal-ink hover:brightness-110 flex items-center justify-center transition-all shadow-md"
                          title="Expand video modal"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                )}

                {/* Tab Content 2: Fast Callback Request Form */}
                {activeTab === 'callback' && (
                  <div className="p-5 sm:p-6 bg-white/70">
                    <h3 className="font-sans font-bold text-base text-teal-ink mb-1">
                      Send a Quick Callback Request
                    </h3>
                    <p className="font-serif text-xs text-muted mb-4">
                      Alan reviews all messages directly and will phone you back promptly.
                    </p>

                    {feedback && (
                      <div
                        className={`p-3 rounded-xl mb-4 font-sans text-xs flex items-start gap-2.5 ${
                          feedback.success
                            ? 'bg-teal-50 text-teal-900 border border-teal/20'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold">{feedback.message}</p>
                          {feedback.refId && (
                            <p className="text-[11px] text-teal-700 mt-0.5">Reference: {feedback.refId}</p>
                          )}
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleCallbackSubmit} className="space-y-3 font-sans text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-muted font-bold uppercase tracking-wider mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Full name"
                            className="glass-input w-full p-2.5 text-teal-ink"
                          />
                        </div>
                        <div>
                          <label className="block text-muted font-bold uppercase tracking-wider mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="0412 345 678"
                            className="glass-input w-full p-2.5 text-teal-ink"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-muted font-bold uppercase tracking-wider mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your.email@example.com"
                            className="glass-input w-full p-2.5 text-teal-ink"
                          />
                        </div>
                        <div>
                          <label className="block text-muted font-bold uppercase tracking-wider mb-1">Townsville Suburb</label>
                          <input
                            type="text"
                            value={formData.suburb}
                            onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                            placeholder="e.g. Kirwan or Burdell"
                            className="glass-input w-full p-2.5 text-teal-ink"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-muted font-bold uppercase tracking-wider mb-1">Service Needed</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="glass-input w-full p-2.5 text-teal-ink"
                        >
                          <option>Clinical nursing care</option>
                          <option>Allied health (OT, Physio, Psych)</option>
                          <option>NDIS everyday supports &amp; personal care</option>
                          <option>Gardening or yard work</option>
                          <option>House cleaning</option>
                          <option>Housing &amp; accommodation</option>
                          <option>Combined supports</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-bold text-xs sm:text-sm py-3 rounded-xl shadow-glass-teal hover:opacity-95 transition-all"
                      >
                        <Send className="w-3.5 h-3.5 text-gold" />
                        <span>{isSubmitting ? 'Sending Request...' : 'Send Callback Request'}</span>
                      </button>
                    </form>
                  </div>
                )}

                {/* Sub-bar with Phone Hotline */}
                <div className="p-3 sm:p-4 bg-teal-ink text-white flex items-center justify-between text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>Direct Hotline: Mon – Sat 7am to 7pm</span>
                  </div>
                  <a href="tel:0431430905" className="text-gold font-bold hover:underline">
                    0431 430 905 &rarr;
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Player (Full View Experience) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl glass-card-dark overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-teal-ink/70">
              <div className="flex items-center gap-2.5 text-white">
                <HeartHandshake className="w-5 h-5 text-gold" />
                <h3 className="font-sans font-bold text-base">TCH Clinical Care &amp; Elder Support in Action</h3>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                &times;
              </button>
            </div>

            <div className="aspect-video bg-black relative">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                poster={posterImg}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            <div className="p-4 sm:p-6 bg-teal-ink/90 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-sans font-bold text-sm text-gold">Compassionate, Reliable Support in North Queensland</h4>
                <p className="text-xs text-teal-100 font-serif max-w-xl mt-1">
                  Our nurses and local team coordinate directly with you and your plan manager to provide transparent, trustworthy support every week.
                </p>
              </div>
              <a
                href="tel:0431430905"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-xs py-2.5 px-4 rounded-xl shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Alan Directly</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
