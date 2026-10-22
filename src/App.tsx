import { useState } from "react"
import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  CircleDollarSign,
  HandCoins,
  Home,
  Landmark,
  Lightbulb,
  Menu,
  MoreHorizontal,
  PiggyBank,
  Plus,
  Search,
  Settings,
  Target,
  Users,
  WalletCards,
  X,
} from "lucide-react"
import { SectionPage } from "./SectionPage"

const nav = [
  { label: "Overview", icon: Home },
  { label: "Money tracker", icon: WalletCards },
  { label: "Growth savings", icon: PiggyBank },
  { label: "Investment zone", icon: Landmark },
  { label: "Business hub", icon: BriefcaseBusiness },
  { label: "Learn & grow", icon: BookOpen },
  { label: "Everyday Uganda", icon: CalendarDays },
  { label: "Referrals", icon: Users },
]

const transactions = [
  {
    name: "Freelance project",
    meta: "Income · Today",
    amount: "+ UGX 850,000",
    icon: ArrowDownLeft,
    positive: true,
  },
  {
    name: "Groceries",
    meta: "Food · Yesterday",
    amount: "- UGX 126,500",
    icon: ArrowUpRight,
    positive: false,
  },
  {
    name: "Internet subscription",
    meta: "Bills · 18 May",
    amount: "- UGX 85,000",
    icon: ArrowUpRight,
    positive: false,
  },
]

function ugx(value: number) {
  return `UGX ${value.toLocaleString("en-UG")}`
}

export default function App() {
  const [active, setActive] = useState("Overview")
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBalance, setShowBalance] = useState(true)
  const [notice, setNotice] = useState(false)

  const selectNav = (label: string) => {
    setActive(label)
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">
            <Target size={22} strokeWidth={2.5} />
          </div>
          <div>
            <strong>Growth Zone</strong>
            <span>Grow. Play. Achieve.</span>
          </div>
          <button
            className="icon-button sidebar-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <p className="nav-label">Workspace</p>
          {nav.map(({ label, icon: Icon }) => (
            <button
              className={active === label ? "active" : ""}
              onClick={() => selectNav(label)}
              key={label}
            >
              <Icon size={19} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="demo-note">
            <span>DEMO</span>
            <p>Explore safely. No real money is moved.</p>
          </div>
          <button className="profile" onClick={() => selectNav("Settings")}>
            <div className="avatar">AN</div>
            <div>
              <strong>Amina N.</strong>
              <span>Personal account</span>
            </div>
            <MoreHorizontal size={18} />
          </button>
        </div>
      </aside>
      {menuOpen && (
        <button
          className="scrim"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
      )}

      <main>
        <header>
          <div className="header-left">
            <button
              className="icon-button menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
            <div>
              <span className="eyebrow">MY WORKSPACE</span>
              <h1>{active}</h1>
            </div>
          </div>
          <div className="header-actions">
            <label className="search">
              <Search size={18} />
              <input aria-label="Search" placeholder="Search anything…" />
            </label>
            <button
              className="icon-button notification"
              onClick={() => setNotice(!notice)}
              aria-label="Notifications"
            >
              <Bell size={20} />
              <i />
            </button>
            <button
              className="icon-button"
              onClick={() => selectNav("Settings")}
              aria-label="Settings"
            >
              <Settings size={20} />
            </button>
          </div>
          {notice && (
            <div className="notification-popover">
              <strong>You’re all caught up</strong>
              <span>No new notifications right now.</span>
            </div>
          )}
        </header>

        {active === "Overview" ? (
          <div className="content">
            <section className="welcome-row">
              <div>
                <p className="date">MONDAY, 20 MAY</p>
                <h2>Good morning, Amina</h2>
                <span>Here’s how your money is growing this month.</span>
              </div>
              <button
                className="primary-button"
                onClick={() => selectNav("Money tracker")}
              >
                <Plus size={18} /> Add transaction
              </button>
            </section>

            <section className="summary-grid">
              <article className="balance-card">
                <div className="card-top">
                  <span>Total balance</span>
                  <button onClick={() => setShowBalance(!showBalance)}>
                    {showBalance ? "Hide" : "Show"}
                  </button>
                </div>
                <h3>{showBalance ? ugx(3842500) : "UGX •••••••"}</h3>
                <div className="balance-footer">
                  <span>
                    <i className="green-dot" /> 12.4% this month
                  </span>
                  <small>Updated today</small>
                </div>
              </article>
              <article className="metric-card">
                <div className="metric-icon income">
                  <ArrowDownLeft size={20} />
                </div>
                <div>
                  <span>Income</span>
                  <h3>{ugx(2450000)}</h3>
                  <small className="up">↑ 8.2% from April</small>
                </div>
              </article>
              <article className="metric-card">
                <div className="metric-icon expense">
                  <ArrowUpRight size={20} />
                </div>
                <div>
                  <span>Expenses</span>
                  <h3>{ugx(1128600)}</h3>
                  <small>46% of income</small>
                </div>
              </article>
              <article className="metric-card">
                <div className="metric-icon savings">
                  <PiggyBank size={20} />
                </div>
                <div>
                  <span>Saved this month</span>
                  <h3>{ugx(420000)}</h3>
                  <small className="up">↑ UGX 70,000</small>
                </div>
              </article>
            </section>

            <section className="dashboard-grid">
              <article className="panel cashflow-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Cash flow</h3>
                    <span>Income and spending overview</span>
                  </div>
                  <select aria-label="Cash flow period">
                    <option>Last 6 months</option>
                  </select>
                </div>
                <div className="chart-wrap">
                  <div className="chart-y">
                    <span>3M</span>
                    <span>2M</span>
                    <span>1M</span>
                    <span>0</span>
                  </div>
                  <div className="bars">
                    {[
                      ["Dec", 50, 30],
                      ["Jan", 65, 38],
                      ["Feb", 58, 42],
                      ["Mar", 76, 46],
                      ["Apr", 68, 37],
                      ["May", 86, 42],
                    ].map(([month, inc, exp]) => (
                      <div className="bar-group" key={month}>
                        <div className="bar-pair">
                          <i style={{ height: `${inc}%` }} />
                          <i style={{ height: `${exp}%` }} />
                        </div>
                        <span>{month}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chart-legend">
                  <span>
                    <i className="income-key" /> Income
                  </span>
                  <span>
                    <i className="expense-key" /> Expenses
                  </span>
                </div>
              </article>

              <article className="panel savings-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Savings goals</h3>
                    <span>Demo contributions only</span>
                  </div>
                  <button
                    className="text-button"
                    onClick={() => selectNav("Growth savings")}
                  >
                    View all <ChevronRight size={16} />
                  </button>
                </div>
                <div className="goal-feature">
                  <div className="goal-icon">
                    <Lightbulb size={21} />
                  </div>
                  <div className="goal-info">
                    <div>
                      <strong>Business equipment</strong>
                      <span>70%</span>
                    </div>
                    <div className="progress">
                      <i style={{ width: "70%" }} />
                    </div>
                    <small>UGX 1,750,000 of UGX 2,500,000</small>
                  </div>
                </div>
                <div className="goal-row">
                  <div className="goal-icon small purple">
                    <CalendarDays size={17} />
                  </div>
                  <div>
                    <strong>December holiday</strong>
                    <span>UGX 620,000 saved</span>
                  </div>
                  <b>41%</b>
                </div>
                <div className="goal-row">
                  <div className="goal-icon small orange">
                    <HandCoins size={17} />
                  </div>
                  <div>
                    <strong>Emergency fund</strong>
                    <span>UGX 1,120,000 saved</span>
                  </div>
                  <b>56%</b>
                </div>
                <button
                  className="outline-button"
                  onClick={() => selectNav("Growth savings")}
                >
                  <Plus size={17} /> Create a goal
                </button>
              </article>

              <article className="panel transactions-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Recent activity</h3>
                    <span>Your latest money movements</span>
                  </div>
                  <button
                    className="text-button"
                    onClick={() => selectNav("Money tracker")}
                  >
                    View all <ChevronRight size={16} />
                  </button>
                </div>
                <div className="transaction-list">
                  {transactions.map(
                    ({ name, meta, amount, icon: Icon, positive }) => (
                      <div className="transaction" key={name}>
                        <div
                          className={`transaction-icon ${
                            positive ? "positive" : ""
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <strong>{name}</strong>
                          <span>{meta}</span>
                        </div>
                        <b className={positive ? "positive-text" : ""}>
                          {amount}
                        </b>
                      </div>
                    ),
                  )}
                </div>
              </article>

              <article className="panel quick-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Quick actions</h3>
                    <span>Keep your plans moving</span>
                  </div>
                </div>
                <div className="quick-grid">
                  <button onClick={() => selectNav("Money tracker")}>
                    <span className="quick-icon mint">
                      <CircleDollarSign size={20} />
                    </span>
                    <strong>Add expense</strong>
                    <small>Track spending</small>
                  </button>
                  <button onClick={() => selectNav("Money tracker")}>
                    <span className="quick-icon lavender">
                      <Target size={20} />
                    </span>
                    <strong>Set a budget</strong>
                    <small>Plan this month</small>
                  </button>
                  <button onClick={() => selectNav("Learn & grow")}>
                    <span className="quick-icon sand">
                      <BookOpen size={20} />
                    </span>
                    <strong>Continue lesson</strong>
                    <small>5 min remaining</small>
                  </button>
                  <button onClick={() => selectNav("Business hub")}>
                    <span className="quick-icon blue">
                      <BriefcaseBusiness size={20} />
                    </span>
                    <strong>Explore ideas</strong>
                    <small>Build a business</small>
                  </button>
                </div>
              </article>
            </section>
          </div>
        ) : (
          <SectionPage key={active} section={active} />
        )}
      </main>
    </div>
  )
}
