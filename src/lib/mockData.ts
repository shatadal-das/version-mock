export const MOCK_COMPANIES = [
  { id: "1", name: "Google", experienceCount: 12 },
  { id: "2", name: "Microsoft", experienceCount: 8 },
  { id: "3", name: "Amazon", experienceCount: 24 },
  { id: "4", name: "Atlassian", experienceCount: 5 },
  { id: "5", name: "Goldman Sachs", experienceCount: 3 },
  { id: "6", name: "DeShaw", experienceCount: 7 },
];

export const MOCK_EXPERIENCES = [
  // --- GOOGLE ---
  {
    id: "101",
    companyId: "1",
    type: "OT",
    result: "QUALIFIED",
    createdAt: new Date("2023-10-15"),
    description:
      "3 coding questions. 1. Dynamic Programming (Hard) - Variation of Knapsack. 2. Graph (Medium) - BFS traversal. 3. Array manipulation (Easy). Solved 2.5/3 and qualified.",
  },
  {
    id: "102",
    companyId: "1",
    type: "TECHNICAL",
    result: "QUALIFIED",
    createdAt: new Date("2023-10-20"),
    description:
      "Asked about projects in depth. Deep dive into React internal working (Virtual DOM, Diffing algorithm). One DSA question: Merge K Sorted Lists. Also asked about cache eviction policies.",
  },
  {
    id: "103",
    companyId: "1",
    type: "HR",
    result: "QUALIFIED",
    createdAt: new Date("2023-10-22"),
    description:
      "Standard behavioral questions. 'Tell me about a time you failed'. Discussed relocation, team preferences, and 'Googliness' (working in ambiguity).",
  },
  {
    id: "104",
    companyId: "1",
    type: "TECHNICAL",
    result: "NOT_QUALIFIED",
    createdAt: new Date("2023-10-21"),
    description:
      "Round 3 was pure system design. Asked to design a URL shortener like Bit.ly. Struggled with the database sharding part and concurrency handling.",
  },

  // --- MICROSOFT ---
  {
    id: "201",
    companyId: "2",
    type: "OT",
    result: "NOT_QUALIFIED",
    createdAt: new Date("2023-11-01"),
    description:
      "2 questions on Codility. Both were Hard level DP. Could only solve 1 partially. The constraints were very tight (N <= 10^5).",
  },
  {
    id: "202",
    companyId: "2",
    type: "TECHNICAL",
    result: "QUALIFIED",
    createdAt: new Date("2023-11-05"),
    description:
      "Interviewer was very friendly. Asked 'Lowest Common Ancestor in a Binary Tree' and 'Rotate Matrix by 90 degrees'. We also discussed my internship project in Azure.",
  },
  {
    id: "203",
    companyId: "2",
    type: "HR",
    result: "QUALIFIED",
    createdAt: new Date("2023-11-07"),
    description:
      "Asked 'Why Microsoft?'. Discussed favorite Microsoft products and how I would improve them. Standard salary expectation and location discussions.",
  },

  // --- AMAZON ---
  {
    id: "301",
    companyId: "3",
    type: "TECHNICAL",
    result: "QUALIFIED",
    createdAt: new Date("2023-09-10"),
    description:
      "Focus on Leadership Principles (LPs). Be ready with stories in STAR format. Coding question was 'Rotting Oranges' (Medium). They care 50% about code and 50% about LPs.",
  },
  {
    id: "302",
    companyId: "3",
    type: "OT",
    result: "QUALIFIED",
    createdAt: new Date("2023-08-15"),
    description:
      "Standard Amazon OA. 2 Coding questions (Sliding window, Graph) + Work Style Assessment. The behavioral part is very important, don't ignore it.",
  },
  {
    id: "303",
    companyId: "3",
    type: "TECHNICAL",
    result: "NOT_QUALIFIED",
    createdAt: new Date("2023-09-12"),
    description:
      "Bar Raiser round. The interviewer drilled deep into a specific situation where I disagreed with a manager. I didn't have a concrete example prepared. Coding question was generic Tree traversal.",
  },

  // --- ATLASSIAN ---
  {
    id: "401",
    companyId: "4",
    type: "OT",
    result: "QUALIFIED",
    createdAt: new Date("2023-08-20"),
    description:
      "HackerRank test. 3 Questions. 1 Easy (Strings), 1 Medium (Greedy), 1 Hard (Graph API based). You need to pass all test cases for at least 2 questions.",
  },
  {
    id: "402",
    companyId: "4",
    type: "TECHNICAL",
    result: "QUALIFIED",
    createdAt: new Date("2023-08-25"),
    description:
      "Code Design Round. They don't ask LeetCode style here. They gave a 'File System' problem and asked to write a clean, object-oriented solution with proper interfaces. Code quality matters most.",
  },
  {
    id: "403",
    companyId: "4",
    type: "HR",
    result: "QUALIFIED",
    createdAt: new Date("2023-08-28"),
    description:
      "Values Interview. Atlassian is huge on values (Open company, no BS, etc.). They asked specific questions mapping to each value. Read their values page before going!",
  },

  // --- GOLDMAN SACHS ---
  {
    id: "501",
    companyId: "5",
    type: "OT",
    result: "QUALIFIED",
    createdAt: new Date("2023-09-01"),
    description:
      "HackerRank. 2 Coding questions (1 Hard DP, 1 Medium Array) + 10 MCQs on CS fundamentals (OS, DBMS, Probability). The MCQs are tricky.",
  },
  {
    id: "502",
    companyId: "5",
    type: "TECHNICAL",
    result: "QUALIFIED",
    createdAt: new Date("2023-09-05"),
    description:
      "Heavy focus on Math and Puzzles. Asked the '100 Prisoners Problem' and a probability question involving coin tosses. Coding question was 'Trapping Rain Water'.",
  },
  {
    id: "503",
    companyId: "5",
    type: "TECHNICAL",
    result: "NOT_QUALIFIED",
    createdAt: new Date("2023-09-06"),
    description:
      "Asked to implement a HashMap from scratch handling collisions. Then moved to a question about circular buffers. I got stuck on the resizing logic of the HashMap.",
  },

  // --- DE SHAW ---
  {
    id: "601",
    companyId: "6",
    type: "OT",
    result: "QUALIFIED",
    createdAt: new Date("2023-10-01"),
    description:
      "3 Questions on HackerRank. 1. DP (Hard) 2. Graph/Tree (Hard) 3. SQL Query (Medium). The standard is very high, need optimized solutions for all.",
  },
  {
    id: "602",
    companyId: "6",
    type: "TECHNICAL",
    result: "QUALIFIED",
    createdAt: new Date("2023-10-05"),
    description:
      "Round 1: CS Fundamentals. grilled on OS (Virtual Memory, Paging, Semaphores) and DBMS (Indexing, B-Trees, Normalization). Coding was finding the median in a stream of integers.",
  },
  {
    id: "603",
    companyId: "6",
    type: "TECHNICAL",
    result: "QUALIFIED",
    createdAt: new Date("2023-10-06"),
    description:
      "Round 2: DSA + Low Level Design. Asked to design a Cache with LRU eviction policy. Then optimized it for multi-threaded environment using ReadWrite locks.",
  },
  {
    id: "604",
    companyId: "6",
    type: "HR",
    result: "NOT_QUALIFIED",
    createdAt: new Date("2023-10-08"),
    description:
      "Surprisingly technical HR round. Asked about my projects and why I used MongoDB instead of SQL. Rejection email came 2 days later, no specific reason given.",
  },
];