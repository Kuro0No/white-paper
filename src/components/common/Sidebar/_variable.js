export default [
  { id: 1, name: 'Axie Infinity', hasChild: false },
  {
    id: 2,
    name: 'Gameplay',
    hasChild: true,
    child: [
      {
        id: 'child2-1',
        name: 'Battling',
        hasChild: true,
        child: [{ name: 'Tournaments and Esports', id: 'child2-sub-1-1' }],
      },
      {
        id: 'child2-2',
        name: 'Breeding and $SLP',
        hasChild: false,
      },
      {
        id: 'child2-3',
        name: 'Axie Economy & Long-term Sustainability',
        hasChild: false,
      },
      {
        id: 'child2-4',
        name: 'Land',
        hasChild: true,
        child: [
          { name: 'Axie Infinity: Raylights', id: 'child2-sub4--1' },
          { name: 'Lunacia SDK', id: 'child2-sub4-2' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Axie Infinity Shards - $AXS',
    hasChild: true,
    child: [
      {
        name: 'Smart contracts and GitHub Repo',
        id: 'child3-1',
        hasChild: true,
        child: [
          { id: 'child3-sub1-1', name: 'Play and Earn' },
          { id: 'child3-sub1-2', name: 'Staking and Staking Rewards' },
          { id: 'child3-sub1-3', name: 'Ecosystem Fund' },
          { id: 'child3-sub1-4', name: 'Sky Mavis' },
          { id: 'child3-sub1-5', name: 'Advisors' },
          { id: 'child3-sub1-6', name: 'Public Sale' },
          { id: 'child3-sub1-7', name: 'Private Sale' },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Community',
    hasChild: true,
    child: [{ name: 'Third-party development', id: 'child4-1', hasChild: false }],
  },
  { id: 5, name: 'Decentralized Organization', hasChild: false },
  {
    id: 6,
    name: 'Key Metrics',
    hasChild: true,
    child: [
      { name: 'Past Revenue streams', id: 'child6-1', hasChild: false },
      { name: 'Future Revenue streams', id: 'child6-2', hasChild: false },
    ],
  },
  {
    id: 7,
    name: 'Technology',
    hasChild: true,
    child: [
      { name: 'Ronin Ethereum Sidechain', hasChild: false, id: 'child7-1' },
      { name: 'Smart contracts and GitHub Repo', hasChild: false, id: 'child7-2' },
    ],
  },
  { id: 8, name: 'Roadmap and completed milestones', hasChild: false },
  { id: 9, name: 'Team', hasChild: false },
  { id: 10, name: 'Partner', hasChild: false },
];
