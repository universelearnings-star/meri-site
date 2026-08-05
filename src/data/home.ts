// src/data/home.ts
import {
    ShieldCheck,
    UserCheck,
    Lock,
    EyeOff,
    MessageCircleHeart,
    CalendarCheck,
    Sparkles,
    BookOpen,
    Wind,
    Moon,
    Users,
    HeartHandshake,
} from "lucide-react";

export const HERO_STATS = [
    { value: 42000, suffix: "+", label: "Conversations held" },
    { value: 1200, suffix: "+", label: "Verified professionals" },
    { value: 98, suffix: "%", label: "Would recommend us" },
];

export const TRUST_STATS = [
    { value: 15000, suffix: "+", label: "People supported monthly" },
    { value: 1200, suffix: "+", label: "Licensed & verified counsellors" },
    { value: 4.9, suffix: "/5", label: "Average session rating" },
    { value: 24, suffix: "/7", label: "Volunteer listeners online" },
];

export const HOW_IT_WORKS_STEPS = [
    {
        icon: UserCheck,
        title: "Share, at your pace",
        description:
            "Tell us a little about what's on your mind. No forms that feel clinical — just a few gentle questions to point you the right way.",
    },
    {
        icon: HeartHandshake,
        title: "Get matched thoughtfully",
        description:
            "We connect you with a licensed counsellor or trained volunteer listener suited to what you need, whether that's therapy or simply a caring ear.",
    },
    {
        icon: MessageCircleHeart,
        title: "Talk, whenever you're ready",
        description:
            "Chat, call, or video — on your schedule, from anywhere. Your pace, your privacy, your choice of how support shows up.",
    },
];

export const WHY_CHOOSE_FEATURES = [
    {
        icon: EyeOff,
        title: "Anonymous by default",
        description:
            "Use a nickname, skip the camera, share only what feels comfortable. Your identity is yours to reveal, or not.",
    },
    {
        icon: ShieldCheck,
        title: "Verified professionals",
        description:
            "Every counsellor is licensed and credential-checked before they ever speak with someone on MindBridge.",
    },
    {
        icon: Lock,
        title: "Encrypted & secure",
        description:
            "End-to-end encrypted conversations. Nothing you share is sold, mined, or used to train anything.",
    },
    {
        icon: Wind,
        title: "No pressure, no urgency",
        description:
            "Come back tomorrow, next week, or not at all. MindBridge adapts to your rhythm, not the other way around.",
    },
];

export const COUNSELLORS = [
    {
        name: "Dr. Amara Osei",
        role: "Clinical Psychologist",
        focus: "Anxiety · Trauma · Grief",
        years: 12,
        rating: 4.9,
    },
    {
        name: "Daniel Ruiz, LMFT",
        role: "Licensed Family Therapist",
        focus: "Relationships · Family",
        years: 9,
        rating: 4.8,
        highlighted: true,
    },
    {
        name: "Dr. Priya Nair",
        role: "Psychiatrist",
        focus: "Depression · Burnout",
        years: 15,
        rating: 5.0,
    },
];

export const VOLUNTEERS = [
    {
        name: "Jordan",
        tags: ["Late-night listener", "LGBTQ+ friendly"],
        blurb: "\"I'm here for the 2am thoughts that feel too big to sit with alone.\"",
    },
    {
        name: "Mei",
        tags: ["Student life", "Loneliness"],
        blurb: "\"Sometimes you just need someone to say 'that makes sense.' I get it.\"",
    },
    {
        name: "Theo",
        tags: ["Grief support", "New parents"],
        blurb: "\"I listen without trying to fix — just to walk alongside you a while.\"",
    },
];

export const STORIES = [
    {
        title: "Learning to sit with silence",
        excerpt:
            "For months I thought needing help meant I'd failed at handling things myself. My listener never once made me feel that way.",
        tag: "Anxiety",
        readTime: "3 min",
    },
    {
        title: "The message I almost didn't send",
        excerpt:
            "I typed and deleted it four times. On the fifth try I hit send — and it turned into the conversation that changed my year.",
        tag: "First step",
        readTime: "4 min",
    },
    {
        title: "Grief doesn't need fixing",
        excerpt:
            "Nobody rushed me to feel better. My counsellor just made room for however I showed up that day, every time.",
        tag: "Grief",
        readTime: "5 min",
    },
];

export const RESOURCES = [
    {
        icon: Wind,
        title: "Breathing exercises",
        description: "Short guided practices to ease your nervous system in under five minutes.",
    },
    {
        icon: Moon,
        title: "Sleep & rest",
        description: "Gentle audio and reading for the nights your mind won't slow down.",
    },
    {
        icon: BookOpen,
        title: "Guided journaling",
        description: "Prompts to help you notice patterns and put words to what you're feeling.",
    },
    {
        icon: Users,
        title: "Community circles",
        description: "Small, moderated group spaces built around shared experiences.",
    },
];

export const TESTIMONIALS = [
    {
        quote:
            "I'd tried therapy apps before that felt transactional. This is the first one that felt like someone actually saw me.",
        name: "Rae M.",
        context: "Member since 2023",
    },
    {
        quote:
            "The volunteer listener program got me through the loneliest stretch of my life. No judgment, just presence.",
        name: "K. Whitfield",
        context: "Volunteer listener user",
    },
    {
        quote:
            "Booking a licensed counsellor took less time than ordering dinner. The care itself has been the real thing.",
        name: "Sam O.",
        context: "Counselling member",
    },
];

export const FAQS = [
    {
        question: "Is MindBridge really anonymous?",
        answer:
            "Yes. You can use a nickname, keep your camera off, and share only what feels safe. Full identity is never required to access support.",
    },
    {
        question: "How are counsellors verified?",
        answer:
            "Every licensed professional on MindBridge goes through credential verification, background checks, and an interview before they're approved to take sessions.",
    },
    {
        question: "What's the difference between a counsellor and a volunteer listener?",
        answer:
            "Counsellors are licensed professionals for clinical support. Volunteer listeners are trained peers who offer a caring, judgment-free ear — not a substitute for therapy, but valuable in their own right.",
    },
    {
        question: "How much does it cost?",
        answer:
            "Volunteer listener conversations are free. Licensed counselling sessions have transparent, upfront pricing with no hidden fees, shown before you book.",
    },
    {
        question: "What if I'm in crisis right now?",
        answer:
            "MindBridge is not an emergency service. If you're in immediate danger, please contact your local emergency number or a crisis hotline right away.",
    },
];

export { Sparkles, CalendarCheck };