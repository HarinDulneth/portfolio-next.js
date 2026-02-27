"use client"
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Card, CardContent, CardHeader } from '../components/ui/card-ach'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { MatrixText } from '../components/ui/matrix-text'
import { TextShimmer } from '../components/ui/text-shimmer'

export default function Awards() {
    const headingRef = useRef(null)
    const isInView = useInView(headingRef, { amount: 0.5 })

    return (
        <section className="h-[100vh] py-20 md:py-40">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-4xl space-y-5 text-center md:space-y-10">
                    <div ref={headingRef}>
                        <MatrixText text="Awards and Winnings" className="text-4xl font-medium lg:text-5xl font-orbitron" trigger={isInView} />
                    </div>
                    <TextShimmer
                        as="p"
                        className="mx-auto block whitespace-pre-line text-center"
                        duration={5}
                        spread={2}
                    >
                        {"A collection of competitions, hackathons, and achievements\nthat highlight teamwork, problem-solving, and continuous growth."}
                    </TextShimmer>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <div className="gradient-card p-[2px] sm:col-span-2 lg:row-span-2 group">
                    <Card className="grid grid-rows-[auto_1fr] gap-3 sm:p-6 h-full" style={{ background: "radial-gradient(120% 120% at 30% 10%, #1a1a1a 0%, #0f0f10 60%, #0b0b0c 100%)" }}>
                        <CardHeader>
                            <h3 className="text-xl font-medium text-white/85">🏆 Champions - Kelani Xtreme</h3>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
                                <img
                                    className="w-full rounded-xl object-cover max-h-64 transition-transform duration-300 group-hover:scale-105 "
                                    src="/IMG-20251022-WA0000.jpg"
                                    alt="Kelani Xtreme Hackathon Winners"
                                />
                                <p className="text-md font-medium text-white/85">Led the team to secure 1st Place at Kelani Xtreme - a 5-hour Hackathon organized by IEEE Student Branch of University of Kelaniya. An intense and rewarding experience of brainstorming, coding, and rapid problem-solving under pressure.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/image.png"
                                            alt="IEEE Student Branch"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>IE</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium text-gray-400">IEEE Student Branch of University of Kelaniya</cite>
                                        <a
                                            href="https://www.linkedin.com/posts/harin-dulneth-1b8455352_kelanixtreme-programmingcompetition-ieee-activity-7385370553915969536-VNoj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFf8x9wBHMeYKNE2KP6ojgr1V-VwQenN5vo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#9100FF]/85 block text-sm hover:animate-glitch-color"
                                        >
                                            View Certificate ↗
                                        </a>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    </div>
                    <div className="gradient-card p-[2px] md:col-span-2 group">
                    <Card className="h-full" style={{ background: "radial-gradient(120% 120% at 70% 10%, #1a1a1a 0%, #0f0f10 60%, #0b0b0c 100%)" }}>
                        <CardContent className="h-full pt-6">
                            <div className="grid grid-cols-[1fr_auto] h-full gap-4">
                                <blockquote className="grid h-full grid-rows-[auto_1fr_auto] gap-4">
                                    <h3 className="text-xl font-medium text-white/85">📄 Nexus - FCTSRS 2025</h3>
                                    <p className="text-sm font-medium text-white/85">Presented "Nexus" - a centralized project management platform at FCTSRS 2025, University of Kelaniya.</p>

                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarImage
                                                src="/307383143_629957038918421_2997862064393786701_n.jpg"
                                                alt="Faculty of Computing and Technology"
                                                height="400"
                                                width="400"
                                                loading="lazy"
                                            />
                                            <AvatarFallback>FC</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-medium text-gray-400">Faculty of Computing and Technology</cite>
                                            <a
                                                href="https://www.linkedin.com/posts/harin-dulneth-1b8455352_fctsrs2025-universityofkelaniya-research-activity-7387117470098141184-69Rl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFf8x9wBHMeYKNE2KP6ojgr1V-VwQenN5vo"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#9100FF]/85 block text-sm hover:animate-glitch-color"
                                            >
                                                View Certificate ↗
                                            </a>
                                        </div>
                                    </div>
                                </blockquote>
                                <img
                                    className="w-44 h-full rounded-xl object-cover object-[70%] transition-transform duration-300 group-hover:scale-105"
                                    src="/1761225956269.jpg"
                                    alt="FCTSRS 2025 Presentation"
                                />
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                    <div className="gradient-card p-[2px]">
                    <Card className="h-full" style={{ background: "radial-gradient(120% 120% at 50% 50%, #1a1a1a 0%, #0f0f10 60%, #0b0b0c 100%)" }}>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[auto_1fr_auto] gap-4">
                                <h3 className="text-lg font-medium text-white/85">Stage 01 - Xcelerate SpiritX 2025</h3>
                                <p className="text-sm text-white/85">Led Team Telusko in Stage 01 Xcelerate of SpiritX 2025 - an inter-university development competition filled with intensity, creativity, and true teamwork.</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/moraspirit.png"
                                            alt="MoraSpirit 360"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>MS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium text-gray-400">MoraSpirit 360</cite>
                                        <a
                                            href="https://www.linkedin.com/posts/harin-dulneth-1b8455352_spiritx2025-xcelerate-teamtelusko-activity-7381208988702650368-XYD_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFf8x9wBHMeYKNE2KP6ojgr1V-VwQenN5vo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#9100FF]/85 block text-sm hover:animate-glitch-color"
                                        >
                                            View Certificate ↗
                                        </a>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    </div>
                    <div className="gradient-card p-[2px]">
                    <Card className="h-full" style={{ background: "radial-gradient(120% 120% at 50% 50%, #1a1a1a 0%, #0f0f10 60%, #0b0b0c 100%)" }}>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[auto_1fr_auto] gap-4">
                                <h3 className="text-lg font-medium text-white/85">IX'25 - Designathon</h3>
                                <p className="text-sm text-white/85">Secured a top 20 placement at IX&apos;25 Designathon - our first designathon experience, exploring ideas and pushing creative boundaries as a team.</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/ieee-iit.png"
                                            alt="IEEE Student Branch of IIT"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>IE</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium text-gray-400">IEEE Student Branch of IIT Sri Lanka</cite>
                                        <a
                                            href="https://www.linkedin.com/posts/harin-dulneth-1b8455352_designathon-ix25-firstdesignathon-activity-7412934376746979328-Ki-X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFf8x9wBHMeYKNE2KP6ojgr1V-VwQenN5vo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#9100FF]/85 block text-sm hover:animate-glitch-color"
                                        >
                                            View Certificate ↗
                                        </a>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}