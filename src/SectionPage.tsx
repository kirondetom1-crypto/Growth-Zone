import { useState } from "react"
import {
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronRight,
  Copy,
  Landmark,
  ListFilter,
  Plus,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react"

type Item = {
  title: string
  meta: string
  value: string
  status: string
  progress?: number
}
type Page = {
  eyebrow: string
  title: string
  description: string
  action: string
  tabs: string[]
  metrics: [string, string, string][]
  items: Item[]
  insight: [string, string]
}

const pages: Record<string, Page> = {
  "Money tracker": {
    eyebrow: "YOUR FINANCES",
    title: "Know where every shilling goes",
    description:
      "Track income, expenses, budgets, bills and debts in one place.",
    action: "Add transaction",
    tabs: ["Transactions", "Budgets", "Bills", "Debts"],
    metrics: [
      ["May income", "UGX 2,450,000", "8.2% above April"],
      ["May expenses", "UGX 1,128,600", "46% of income"],
      ["Available", "UGX 1,321,400", "After expenses"],
    ],
    items: [
      {
        title: "Freelance project",
        meta: "Income · 20 May",
        value: "+ UGX 850,000",
        status: "Received",
      },
      {
        title: "Groceries",
        meta: "Food · 19 May",
        value: "- UGX 126,500",
        status: "Paid",
      },
      {
        title: "Internet subscription",
        meta: "Bills · 18 May",
        value: "- UGX 85,000",
        status: "Paid",
      },
      {
        title: "Shop sales",
        meta: "Business · 17 May",
        value: "+ UGX 380,000",
        status: "Received",
      },
    ],
    insight: [
      "Your spending is on track",
      "You have used 46% of your monthly income, 7% less than this time last month.",
    ],
  },
  "Growth savings": {
    eyebrow: "DEMO SAVINGS",
    title: "Turn your plans into progress",
    description:
      "Create goals and practice consistent saving. No real money is moved.",
    action: "Create a goal",
    tabs: ["My goals", "Activity", "Calculators"],
    metrics: [
      ["Total simulated savings", "UGX 3,490,000", "Across 3 goals"],
      ["Added this month", "UGX 420,000", "16% more than April"],
      ["Goals on track", "2 of 3", "One needs attention"],
    ],
    items: [
      {
        title: "Business equipment",
        meta: "Target · UGX 2,500,000",
        value: "UGX 1,750,000",
        status: "70%",
        progress: 70,
      },
      {
        title: "Emergency fund",
        meta: "Target · UGX 2,000,000",
        value: "UGX 1,120,000",
        status: "56%",
        progress: 56,
      },
      {
        title: "December holiday",
        meta: "Target · UGX 1,500,000",
        value: "UGX 620,000",
        status: "41%",
        progress: 41,
      },
    ],
    insight: [
      "Small steps add up",
      "Adding UGX 125,000 monthly could complete your equipment goal by November.",
    ],
  },
  "Investment zone": {
    eyebrow: "LEARN BEFORE YOU INVEST",
    title: "Build confidence, not hype",
    description:
      "Explore investing concepts, research notes and risk-aware practice trades.",
    action: "Add to watchlist",
    tabs: ["Watchlist", "Learn", "Practice trades", "Journal"],
    metrics: [
      ["Watchlist items", "6", "For research only"],
      ["Lessons completed", "8 of 12", "67% complete"],
      ["Practice trades", "4", "Simulated examples"],
    ],
    items: [
      {
        title: "Uganda government bonds",
        meta: "Fixed income · Research note",
        value: "Low–medium",
        status: "Risk",
      },
      {
        title: "Collective investment schemes",
        meta: "Diversification · Guide",
        value: "Beginner",
        status: "Read",
      },
      {
        title: "Regional equities basket",
        meta: "Practice list · No live prices",
        value: "Medium–high",
        status: "Risk",
      },
      {
        title: "Fraud prevention checklist",
        meta: "Safety · Updated today",
        value: "7 steps",
        status: "Open",
      },
    ],
    insight: [
      "Risk reminder",
      "All examples are educational simulations. Returns are never guaranteed.",
    ],
  },
  "Business hub": {
    eyebrow: "IDEAS FOR UGANDA",
    title: "Build your next opportunity",
    description:
      "Explore practical ideas and turn the best one into a focused business plan.",
    action: "Start a business plan",
    tabs: ["Discover", "Saved ideas", "My business plan"],
    metrics: [
      ["Ideas explored", "12", "Across 7 categories"],
      ["Saved ideas", "4", "Ready to compare"],
      ["Active plans", "1", "6 milestones remaining"],
    ],
    items: [
      {
        title: "Home Wi-Fi installation",
        meta: "Digital services · Startup estimate",
        value: "UGX 1.8M",
        status: "Saved",
      },
      {
        title: "Custom printing & branding",
        meta: "Creative services · Startup estimate",
        value: "UGX 3.2M",
        status: "Explore",
      },
      {
        title: "Fresh produce delivery",
        meta: "Food & delivery · Startup estimate",
        value: "UGX 950K",
        status: "Popular",
      },
      {
        title: "Mobile phone accessories",
        meta: "Retail · Startup estimate",
        value: "UGX 2.5M",
        status: "Explore",
      },
    ],
    insight: [
      "Your plan is taking shape",
      "Complete the customer and pricing sections to unlock your first milestone.",
    ],
  },
  "Learn & grow": {
    eyebrow: "YOUR LEARNING PATH",
    title: "Skills that move you forward",
    description:
      "Learn money, business, digital and investment skills at your own pace.",
    action: "Browse lessons",
    tabs: ["Continue learning", "All courses", "Bookmarks"],
    metrics: [
      ["Lessons completed", "14", "3 this week"],
      ["Current streak", "6 days", "A personal best"],
      ["Quiz average", "84%", "Keep it going"],
    ],
    items: [
      {
        title: "Building a monthly budget",
        meta: "Financial literacy · 5 min left",
        value: "75%",
        status: "Continue",
        progress: 75,
      },
      {
        title: "Finding your first customers",
        meta: "Entrepreneurship · 12 min",
        value: "40%",
        status: "Continue",
        progress: 40,
      },
      {
        title: "Staying safe from online scams",
        meta: "Digital skills · 8 min",
        value: "New",
        status: "Start",
      },
      {
        title: "Understanding compound growth",
        meta: "Investment basics · 10 min",
        value: "Saved",
        status: "Open",
      },
    ],
    insight: [
      "One lesson from your weekly goal",
      "Finish a short lesson today to reach your target of four this week.",
    ],
  },
  "Everyday Uganda": {
    eyebrow: "PLAN YOUR DAY",
    title: "Life, a little more organised",
    description: "Keep tasks, bills, reminders and personal goals together.",
    action: "Add a task",
    tabs: ["Today", "Tasks", "Bills", "Goals"],
    metrics: [
      ["Tasks today", "5", "2 completed"],
      ["Upcoming bills", "3", "UGX 215,000 total"],
      ["Goals in progress", "4", "One milestone this week"],
    ],
    items: [
      {
        title: "Pay electricity bill",
        meta: "Today · 5:00 PM",
        value: "UGX 68,000",
        status: "Due today",
      },
      {
        title: "Call equipment supplier",
        meta: "Today · Business",
        value: "10:30 AM",
        status: "To do",
      },
      {
        title: "Complete budgeting lesson",
        meta: "Tomorrow · Learning",
        value: "15 min",
        status: "Planned",
      },
      {
        title: "Renew internet subscription",
        meta: "24 May · Bill",
        value: "UGX 85,000",
        status: "Upcoming",
      },
    ],
    insight: [
      "A clear week ahead",
      "Your busiest day is Thursday. Consider moving one flexible task to Friday.",
    ],
  },
  Referrals: {
    eyebrow: "DEMO REFERRALS",
    title: "Grow better, together",
    description:
      "Invite friends to explore Growth Zone. Rewards shown are simulations only.",
    action: "Share invite",
    tabs: ["Overview", "Referral history", "Demo rewards"],
    metrics: [
      ["Invites sent", "8", "This month"],
      ["Friends joined", "3", "Verified demo accounts"],
      ["Demo rewards", "UGX 22,500", "No real payout"],
    ],
    items: [
      {
        title: "Sarah K.",
        meta: "Joined 18 May",
        value: "UGX 7,500",
        status: "Approved",
      },
      {
        title: "Daniel O.",
        meta: "Joined 11 May",
        value: "UGX 7,500",
        status: "Approved",
      },
      {
        title: "Patricia A.",
        meta: "Joined 4 May",
        value: "UGX 7,500",
        status: "Review",
      },
      {
        title: "Invite link opened",
        meta: "Today · Activity",
        value: "2 visits",
        status: "New",
      },
    ],
    insight: ["Your referral code", "AMINA-GROW24"],
  },
  Settings: {
    eyebrow: "ACCOUNT & PREFERENCES",
    title: "Make Growth Zone yours",
    description:
      "Manage your profile, notifications, privacy and demo preferences.",
    action: "Save changes",
    tabs: ["Profile", "Notifications", "Privacy", "Account"],
    metrics: [
      ["Profile status", "Complete", "All details added"],
      ["Notifications", "On", "Bills and milestones"],
      ["Privacy", "Protected", "Private by default"],
    ],
    items: [
      {
        title: "Personal details",
        meta: "Name, phone and location",
        value: "Amina N.",
        status: "Edit",
      },
      {
        title: "Notification preferences",
        meta: "Bills, tasks and learning",
        value: "4 enabled",
        status: "Manage",
      },
      {
        title: "Password & security",
        meta: "Last changed 3 months ago",
        value: "Secure",
        status: "Update",
      },
      {
        title: "Data & privacy",
        meta: "Download or delete your data",
        value: "Private",
        status: "Manage",
      },
    ],
    insight: [
      "Your data stays yours",
      "This prototype stores no personal or financial information on a server.",
    ],
  },
}

const itemIcons: Record<string, typeof Target> = {
  "Money tracker": WalletCards,
  "Investment zone": Landmark,
  "Business hub": BriefcaseBusiness,
  "Learn & grow": BookOpenCheck,
  "Everyday Uganda": CalendarCheck,
  Referrals: Users,
  Settings: ShieldCheck,
}

export function SectionPage({ section }: { section: string }) {
  const page = pages[section] ?? pages["Money tracker"]
  const [tab, setTab] = useState(page.tabs[0])
  const [query, setQuery] = useState("")
  const [composer, setComposer] = useState(false)
  const [saved, setSaved] = useState(false)
  const [entry, setEntry] = useState("")
  const Icon = itemIcons[section] ?? Target
  const shown = page.items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  )
  const save = () => {
    if (!entry.trim()) return
    setComposer(false)
    setEntry("")
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="content section-page">
      <section className="section-hero">
        <div>
          <p className="date">{page.eyebrow}</p>
          <h2>{page.title}</h2>
          <span>{page.description}</span>
        </div>
        <button
          className="primary-button"
          onClick={() => setComposer(!composer)}
        >
          <Plus size={18} /> {page.action}
        </button>
      </section>
      {composer && (
        <section className="prototype-composer">
          <div>
            <strong>{page.action}</strong>
            <span>Saved for this prototype session only.</span>
          </div>
          <input
            autoFocus
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Enter a name or description"
            onKeyDown={(e) => e.key === "Enter" && save()}
          />
          <button className="primary-button" onClick={save}>
            Save
          </button>
          <button className="icon-button" onClick={() => setComposer(false)}>
            ×
          </button>
        </section>
      )}
      {saved && (
        <div className="prototype-toast">
          <Check size={16} /> Saved in this prototype
        </div>
      )}
      <section className="section-metrics">
        {page.metrics.map(([label, value, note], i) => (
          <article key={label}>
            <span className={`section-metric-icon tone-${i}`}>
              <TrendingUp size={20} />
            </span>
            <div>
              <small>{label}</small>
              <strong>{value}</strong>
              <em>{note}</em>
            </div>
          </article>
        ))}
      </section>
      <section className="section-layout">
        <article className="panel records-panel">
          <div className="section-tabs">
            {page.tabs.map((name) => (
              <button
                className={tab === name ? "selected" : ""}
                onClick={() => setTab(name)}
                key={name}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="records-toolbar">
            <div>
              <h3>{tab}</h3>
              <span>{shown.length} demo records</span>
            </div>
            <label>
              <Search size={16} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
              />
            </label>
            <button className="filter-button">
              <ListFilter size={16} /> Filter
            </button>
          </div>
          <div className="records-list">
            {shown.map((item) => (
              <button className="record" key={item.title}>
                <span className="record-icon">
                  <Icon size={19} />
                </span>
                <span className="record-copy">
                  <strong>{item.title}</strong>
                  <small>{item.meta}</small>
                  {item.progress !== undefined && (
                    <i>
                      <b style={{ width: `${item.progress}%` }} />
                    </i>
                  )}
                </span>
                <span className="record-value">
                  <strong>{item.value}</strong>
                  <small>{item.status}</small>
                </span>
                <ChevronRight size={17} />
              </button>
            ))}
            {shown.length === 0 && (
              <div className="empty-state">
                <Search size={22} />
                <strong>No matches found</strong>
                <span>Try another search term.</span>
              </div>
            )}
          </div>
        </article>
        <aside className="section-aside">
          <article className="insight-card">
            <span className="insight-icon">
              <Target size={22} />
            </span>
            <p>GROWTH INSIGHT</p>
            <h3>{page.insight[0]}</h3>
            <span>{page.insight[1]}</span>
            {section === "Referrals" && (
              <button
                onClick={() => navigator.clipboard?.writeText("AMINA-GROW24")}
              >
                <Copy size={15} /> Copy code
              </button>
            )}
          </article>
          <article className="panel mini-plan">
            <div className="panel-heading">
              <div>
                <h3>Next best step</h3>
                <span>Suggested for you</span>
              </div>
              <Target size={18} />
            </div>
            <div className="mini-plan-row">
              <span>
                <TrendingUp size={18} />
              </span>
              <div>
                <strong>Review your weekly progress</strong>
                <small>About 5 minutes</small>
              </div>
            </div>
            <button
              onClick={() =>
                setTab(page.tabs[Math.min(1, page.tabs.length - 1)])
              }
            >
              Get started <ChevronRight size={15} />
            </button>
          </article>
        </aside>
      </section>
    </div>
  )
}
