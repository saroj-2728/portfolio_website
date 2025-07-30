'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ActivityCalendar, { Activity } from 'react-activity-calendar';
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

interface ContributionAPIItem {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

const mapLevel = (level: string): number => {
  switch (level) {
    case 'FIRST_QUARTILE': return 1;
    case 'SECOND_QUARTILE': return 2;
    case 'THIRD_QUARTILE': return 3;
    case 'FOURTH_QUARTILE': return 4;
    default: return 0;
  }
};

const loadingMessages = [
  'Brewing contribution squares...',
  'Warming up GitHub servers...',
  'Counting commits while sipping coffee...',
  'Fetching my coding secrets...',
];

export default function GitHubContributions() {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingMsg, setLoadingMsg] = useState(loadingMessages[0]);

  const sectionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, bidirectional: true });

  // Pick random loading message once on mount to avoid hydration mismatch
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    setLoadingMsg(loadingMessages[randomIndex]);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch('https://github-contributions-api.deno.dev/saroj-2728.json');

        if (!res.ok) {
          setError(`Oops! The GitHub elves are on strike. (Error ${res.status})`);
          setLoading(false);
          return;
        }

        const json = await res.json();
        if (!json.contributions) {
          setError("Hmm... it seems my contribution graph took a day off.");
          setLoading(false);
          return;
        }

        const flatContributions = json.contributions.flat();
        const formatted: Activity[] = flatContributions.map((c: ContributionAPIItem) => ({
          date: c.date,
          count: c.contributionCount,
          level: mapLevel(c.contributionLevel),
        }));

        setData(formatted);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching contributions:', err);
        setError('Network issue! My graph is probably binge-watching Netflix.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || error) {
    return (
      <motion.div
        ref={sectionAnimation.ref}
        className="p-6 rounded-xl border border-brd bg-surface shadow-lg min-h-[200px] flex items-center justify-center text-center"
        initial="hidden"
        animate={sectionAnimation.controls}
        variants={fadeUpVariants}
      >
        {loading ? (
          <span className="text-secondary font-mono">{loadingMsg}</span>
        ) : (
          <span className="text-red-500 font-mono">{error}</span>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={sectionAnimation.ref}
      className="space-y-4"
      initial="hidden"
      animate={sectionAnimation.controls}
      variants={staggerContainer}
    >
      <motion.p
        className="text-sm md:text-base text-secondary italic font-wenkai text-center"
        variants={staggerItem}
      >
         &quot;Behind every square is a late-night 3 AM fight with code and AI.&quot;
      </motion.p>

      <motion.div
        className="p-6 rounded-xl border border-brd bg-surface shadow-lg"
        variants={staggerContainer}
      >
        <motion.h3
          className="text-lg md:text-xl font-fira-code text-primary mb-4"
          variants={staggerItem}
        >
          GitHub Contributions
        </motion.h3>

        <motion.div variants={staggerItem}>
          <ActivityCalendar
            data={data}
            theme={{
              dark: ['#1c1c1c', '#2a2f4f', '#5b3fa4', '#9d5bd2', '#d56df7'],
              light: ['#f5f5f5', '#d1b3ff', '#a78bfa', '#8b5cf6', '#6d28d9'],
            }}
            colorScheme="dark"
            hideColorLegend
            hideTotalCount
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}