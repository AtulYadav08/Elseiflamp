"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(1);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize drag handling and auto-advance
    useEffect(() => {
        const cards = document.querySelectorAll('.feature-card');
        cardsRef.current = cards as NodeListOf<HTMLDivElement>;

        // Set up auto-advance
        intervalRef.current = setInterval(() => {
            setActiveFeature(prev => (prev === 4 ? 1 : prev + 1));
        }, 5000);

        // Clean up interval on component unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Update classes when activeFeature changes
    useEffect(() => {
        if (cardsContainerRef.current) {
            // Remove all feature classes
            cardsContainerRef.current.classList.remove(
                'feature-1-active',
                'feature-2-active',
                'feature-3-active',
                'feature-4-active'
            );

            // Add the active feature class
            cardsContainerRef.current.classList.add(`feature-${activeFeature}-active`);
        }
    }, [activeFeature]);

    const switchToFeature = (featureId: number) => {
        setActiveFeature(featureId);

        // Reset auto-advance timer
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setActiveFeature(prev => (prev === 4 ? 1 : prev + 1));
        }, 5000);
    };

    // Initialize drag handling for cards
    const initDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, featureId: number) => {
        if (featureId !== activeFeature) return;

        const isTouchEvent = 'touches' in e;
        const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;

        let startX = clientX;
        let isDragging = true;

        const handleDrag = (moveEvent: MouseEvent | TouchEvent) => {
            if (!isDragging) return;

            const moveClientX = 'touches' in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX;
            const diff = moveClientX - startX;
            const card = cardsRef.current?.[activeFeature - 1];

            if (!card) return;

            if (diff > 20) {
                card.classList.add('dragging-right');
                card.classList.remove('dragging-left');
            } else if (diff < -20) {
                card.classList.add('dragging-left');
                card.classList.remove('dragging-right');
            } else {
                card.classList.remove('dragging-left', 'dragging-right');
            }
        };

        const endDrag = () => {
            if (!isDragging) return;
            isDragging = false;

            const card = cardsRef.current?.[activeFeature - 1];
            if (!card) return;

            if (card.classList.contains('dragging-right')) {
                switchToFeature(activeFeature === 1 ? 4 : activeFeature - 1);
            } else if (card.classList.contains('dragging-left')) {
                switchToFeature(activeFeature === 4 ? 1 : activeFeature + 1);
            }

            card.classList.remove('dragging-left', 'dragging-right');

            // Remove event listeners
            document.removeEventListener('mousemove', handleDrag as EventListener);
            document.removeEventListener('touchmove', handleDrag as EventListener);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchend', endDrag);
        };

        // Add event listeners
        document.addEventListener('mousemove', handleDrag as EventListener);
        document.addEventListener('touchmove', handleDrag as EventListener, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    };

    return (
        <div className="bg-slate-900 text-white antialiased">
            <iframe
                src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO"
                frameBorder="0"
                className="fixed top-0 w-full h-screen"
                title="Background Animation"
            />

            {/* Hero Section */}
            <section className="hero-gradient min-h-screen flex items-center pt-20">
                <div className="max-w-7xl mx-auto px-6 py-12 z-10 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium text-gray-300 uppercase tracking-wide font-sans"> ELseifAI platform for the next generation of AI</span>
                                </div>
                                <h1 className="lg:text-7xl gradient-text text-5xl tracking-tighter font-manrope">
                                    Build Production-Ready Agentic
                                    <span className="block tracking-tighter font-manrope">Workflow</span>
                                </h1>
                                <p className="max-w-lg text-3xl font-light text-gray-300">
                                    AI Solutions                </p>
                            </div>

                            {/* Navigation Dots */}
                            <div className="flex items-center gap-3">
                                {[1, 2, 3, 4].map((id) => (
                                    <button
                                        key={id}
                                        id={`nav-${id}`}
                                        className={`w-3 h-3 rounded-full transition-all ${activeFeature === id ? 'bg-white scale-125' : 'bg-gray-500 hover:bg-gray-300'
                                            }`}
                                        onClick={() => switchToFeature(id)}
                                    />
                                ))}
                            </div>

                            {/* Feature Details */}
                            <div id="feature-details" className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-gray-300 font-sans">Smart collaboration tools</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span className="text-gray-300 font-sans">AI-powered insights</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="text-gray-300 font-sans">Seamless integrations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300 font-sans">Advanced analytics</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 relative">
                                <button className="button font-sans relative font-medium px-6 py-3 text-base font-normal text-[#f4f0ff] rounded-lg cursor-pointer select-none">
                                    Start Free Trial
                                    <span className="button-border absolute top-0 left-0 h-full w-full rounded-lg z-[-1] pointer-events-none">
                                        <span className="absolute rounded-lg p-px inset-0 bg-gradient-to-b from-[rgba(184,238,255,0.24)] to-transparent bg-[rgba(184,238,255,0.32)] mask-gradient"></span>
                                    </span>
                                </button>
                                <Link href="/" className="button font-sans relative font-medium px-6 py-3 text-base font-normal text-[#0f172a] bg-white rounded-lg cursor-pointer select-none border border-transparent transition-colors hover:bg-gray-100">
                                    Watch Demo
                                    <span className="button-border absolute top-0 left-0 h-full w-full rounded-lg z-[-1] pointer-events-none">
                                        <span className="absolute rounded-lg p-px inset-0 bg-gradient-to-b from-[rgba(184,238,255,0.24)] to-transparent bg-[rgba(184,238,255,0.32)] mask-gradient"></span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Interactive Cards */}
                        <div className="flex lg:justify-end justify-center h-[36rem]">
                            <div
                                ref={cardsContainerRef}
                                className="cards-section feature-1-active h-[36rem]"
                            >
                                {/* Collaboration Card */}
                                <div
                                    className="feature-card glass-card rounded-2xl p-8 float-animation h-[36rem]"
                                    onMouseDown={(e) => initDrag(e, 1)}
                                    onTouchStart={(e) => initDrag(e, 1)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-white">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                    <circle cx="9" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Collaboration</span>
                                                <h3 className="text-2xl font-manrope tracking-tighter">Team Sync</h3>
                                            </div>
                                        </div>

                                        <p className="flex-1 text-2xl text-gray-300 mb-6">
                                            Real-time collaboration that keeps everyone aligned. Share ideas, track progress, and make decisions together.
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-sans">Active Users</span>
                                                <span className="text-white font-medium font-sans">24/7</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-sans">Response Time</span>
                                                <span className="text-white font-medium font-sans">&lt;100ms</span>
                                            </div>
                                        </div>

                                        <div className="mb-6 text-gray-400 text-sm font-sans space-y-2">
                                            <ul className="list-disc list-inside">
                                                <li>Instant messaging and video calls</li>
                                                <li>Shared task boards and calendars</li>
                                                <li>Document collaboration in real-time</li>
                                            </ul>
                                        </div>

                                        <button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors font-sans">
                                            Boost team productivity 3x
                                        </button>
                                    </div>
                                </div>

                                {/* Analytics Card */}
                                <div
                                    className="feature-card glass-card rounded-2xl p-8 h-[36rem]"
                                    onMouseDown={(e) => initDrag(e, 2)}
                                    onTouchStart={(e) => initDrag(e, 2)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3 w-6 h-6 text-white">
                                                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                                    <path d="M18 17V9"></path>
                                                    <path d="M13 17V5"></path>
                                                    <path d="M8 17v-3"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Analytics</span>
                                                <h3 className="text-2xl font-manrope tracking-tighter">Smart Insights</h3>
                                            </div>
                                        </div>

                                        <p className="flex-1 text-gray-300 mb-6 text-2xl">
                                            AI-powered analytics that reveal patterns, predict trends, and help you make data-driven decisions.
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-sans">Accuracy Rate</span>
                                                <span className="text-white font-medium font-sans">99.2%</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-sans">Data Processing</span>
                                                <span className="text-white font-medium font-sans">Real-time</span>
                                            </div>
                                        </div>

                                        <div className="mb-6 text-gray-400 text-sm font-sans space-y-2">
                                            <ul className="list-disc list-inside">
                                                <li>Customizable dashboards</li>
                                                <li>Predictive trend analysis</li>
                                                <li>Exportable reports and alerts</li>
                                            </ul>
                                        </div>

                                        <button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors font-sans">
                                            Get deeper insights
                                        </button>
                                    </div>
                                </div>

                                {/* Automation Card */}
                                <div
                                    className="feature-card glass-card rounded-2xl p-8 h-[36rem]"
                                    onMouseDown={(e) => initDrag(e, 3)}
                                    onTouchStart={(e) => initDrag(e, 3)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot w-6 h-6 text-white">
                                                    <path d="M12 8V4H8"></path>
                                                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                                    <path d="M2 14h2"></path>
                                                    <path d="M20 14h2"></path>
                                                    <path d="M15 13v2"></path>
                                                    <path d="M9 13v2"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Automation</span>
                                                <h3 className="text-2xl font-manrope tracking-tighter">Smart Workflows</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 mb-6 flex-1 font-sans text-2xl">
                                            Intelligent automation that learns from your patterns and handles repetitive tasks automatically.
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-sans">Time Saved</span>
                                                <span className="text-white font-medium font-sans">40 hrs/week</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-sans">Error Reduction</span>
                                                <span className="text-white font-medium font-sans">95%</span>
                                            </div>
                                        </div>

                                        <div className="mb-6 text-gray-400 text-sm font-sans space-y-2">
                                            <ul className="list-disc list-inside">
                                                <li>Automated task assignment</li>
                                                <li>Rule-based notifications</li>
                                                <li>Integration with calendar and email</li>
                                            </ul>
                                        </div>

                                        <button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors font-sans">
                                            Automate workflows
                                        </button>
                                    </div>
                                </div>

                                {/* Integration Card */}
                                <div
                                    className="feature-card glass-card rounded-2xl p-8 h-[36rem]"
                                    onMouseDown={(e) => initDrag(e, 4)}
                                    onTouchStart={(e) => initDrag(e, 4)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-puzzle w-6 h-6 text-white">
                                                    <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Integration</span>
                                                <h3 className="text-2xl font-manrope tracking-tighter">Connect Everything</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 mb-6 flex-1 font-sans text-2xl">
                                            Seamlessly connect with 500+ tools and platforms. Create a unified workspace that works the way you do.
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-sans">Supported Apps</span>
                                                <span className="text-white font-medium font-sans">500+</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-sans">Setup Time</span>
                                                <span className="text-white font-medium font-sans">2 minutes</span>
                                            </div>
                                        </div>

                                        <div className="mb-6 text-gray-400 text-sm font-sans space-y-2">
                                            <ul className="list-disc list-inside">
                                                <li>APIs for custom workflows</li>
                                                <li>Single sign-on support</li>
                                                <li>Cross-platform sync</li>
                                            </ul>
                                        </div>

                                        <button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors font-sans">
                                            Connect your tools
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        * { font-family: 'Inter', sans-serif; }
        .cards-section {
          --_offset-steps: 5rem;
          --_scale-steps: 12;
          --_opacity-steps: 18;
          --_offset-steps-two: calc(var(--_offset-steps) * -1);
          --_offset-steps-three: calc(var(--_offset-steps) * -2);
          --scale-steps-two: calc(1 - var(--_scale-steps) * 0.01);
          --scale-steps-three: calc(1 - var(--_scale-steps) * 0.02);
          --opacity-steps-two: calc(1 - var(--_opacity-steps) * 0.015);
          --opacity-steps-three: calc(1 - var(--_opacity-steps) * 0.03);
          display: grid;
          grid-template-areas: "stack";
          width: min(calc(100% - 2rem), 28rem);
          perspective: 1000px;
        }
        .feature-card {
          grid-area: stack;
          transition: 600ms cubic-bezier(0.4, 0, 0.2, 1);
          translate: var(--_offset) 0;
          order: var(--_order);
          z-index: var(--_order);
          scale: var(--_scale);
          opacity: var(--_opacity);
          cursor: grab;
          user-select: none;
          transform-style: preserve-3d;
        }
        .feature-card:active { cursor: grabbing; }
        .feature-card:nth-of-type(1) {
          --_order: var(--_1-order);
          --_scale: var(--_1-scale);
          --_opacity: var(--_1-opacity);
          --_offset: var(--_1-offset);
        }
        .feature-card:nth-of-type(2) {
          --_order: var(--_2-order);
          --_scale: var(--_2-scale);
          --_opacity: var(--_2-opacity);
          --_offset: var(--_2-offset);
        }
        .feature-card:nth-of-type(3) {
          --_order: var(--_3-order);
          --_scale: var(--_3-scale);
          --_opacity: var(--_3-opacity);
          --_offset: var(--_3-offset);
        }
        .feature-card:nth-of-type(4) {
          --_order: var(--_4-order);
          --_scale: var(--_4-scale);
          --_opacity: var(--_4-opacity);
          --_offset: var(--_4-offset);
        }
        .cards-section.feature-1-active {
          --_1-order: 4; --_1-scale: 1; --_1-opacity: 1; --_1-offset: 0;
          --_2-order: 3; --_2-scale: var(--scale-steps-two); --_2-opacity: var(--opacity-steps-two); --_2-offset: var(--_offset-steps-two);
          --_3-order: 2; --_3-scale: var(--scale-steps-three); --_3-opacity: var(--opacity-steps-three); --_3-offset: var(--_offset-steps-three);
          --_4-order: 1; --_4-scale: calc(1 - var(--_scale-steps) * 0.025); --_4-opacity: calc(1 - var(--_opacity-steps) * 0.045); --_4-offset: calc(var(--_offset-steps) * -2.5);
        }
        .cards-section.feature-2-active {
          --_2-order: 4; --_2-scale: 1; --_2-opacity: 1; --_2-offset: 0;
          --_3-order: 3; --_3-scale: var(--scale-steps-two); --_3-opacity: var(--opacity-steps-two); --_3-offset: var(--_offset-steps-two);
          --_4-order: 2; --_4-scale: var(--scale-steps-three); --_4-opacity: var(--opacity-steps-three); --_4-offset: var(--_offset-steps-three);
          --_1-order: 1; --_1-scale: calc(1 - var(--_scale-steps) * 0.025); --_1-opacity: calc(1 - var(--_opacity-steps) * 0.045); --_1-offset: calc(var(--_offset-steps) * -2.5);
        }
        .cards-section.feature-3-active {
          --_3-order: 4; --_3-scale: 1; --_3-opacity: 1; --_3-offset: 0;
          --_4-order: 3; --_4-scale: var(--scale-steps-two); --_4-opacity: var(--opacity-steps-two); --_4-offset: var(--_offset-steps-two);
          --_1-order: 2; --_1-scale: var(--scale-steps-three); --_1-opacity: var(--opacity-steps-three); --_1-offset: var(--_offset-steps-three);
          --_2-order: 1; --_2-scale: calc(1 - var(--_scale-steps) * 0.025); --_2-opacity: calc(1 - var(--_opacity-steps) * 0.045); --_2-offset: calc(var(--_offset-steps) * -2.5);
        }
        .cards-section.feature-4-active {
          --_4-order: 4; --_4-scale: 1; --_4-opacity: 1; --_4-offset: 0;
          --_1-order: 3; --_1-scale: var(--scale-steps-two); --_1-opacity: var(--opacity-steps-two); --_1-offset: var(--_offset-steps-two);
          --_2-order: 2; --_2-scale: var(--scale-steps-three); --_2-opacity: var(--opacity-steps-three); --_2-offset: var(--_offset-steps-three);
          --_3-order: 1; --_3-scale: calc(1 - var(--_scale-steps) * 0.025); --_3-opacity: calc(1 - var(--_opacity-steps) * 0.045); --_3-offset: calc(var(--_offset-steps) * -2.5);
        }
        .dragging-left { transform: translateX(-30px) rotateY(-5deg); }
        .dragging-right { transform: translateX(30px) rotateY(5deg); }
        .glass-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .gradient-text {
          background: linear-gradient(135deg, #ffffff, #e5e7eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-animation { animation: float 3s ease-in-out infinite; }
        
        #aura-emcna3j5o button.button::before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          border-radius: 0.5rem;
          background: linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24);
          box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
          z-index: -1;
        }
        #aura-emcna3j5o button.button::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24);
          box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
          border-radius: 0.5rem;
          opacity: 0;
          z-index: -1;
          transition: all 0.3s ease-in;
        }
        #aura-emcna3j5o button.button:hover::after {
          opacity: 1;
        }
      `}</style>
        </div>
    );
};

export default HeroSection;