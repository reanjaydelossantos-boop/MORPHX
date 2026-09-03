"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";

export function DitherCursor() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvas.current;
    if (
      !c ||
      matchMedia("(pointer: coarse)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const x = c.getContext("2d");
    if (!x) return;
    let w = 0,
      h = 0,
      raf = 0;
    const dots: Array<{ x: number; y: number; a: number; s: number }> = [];
    const size = () => {
      w = c.width = innerWidth;
      h = c.height = innerHeight;
    };
    const move = (e: PointerEvent) => {
      for (let i = 0; i < 3; i++)
        dots.push({
          x: e.clientX + (Math.random() - 0.5) * 18,
          y: e.clientY + (Math.random() - 0.5) * 18,
          a: 0.5,
          s: 2 + Math.random() * 4,
        });
    };
    const draw = () => {
      x.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.a -= 0.018;
        d.s += 0.08;
        x.fillStyle = `rgba(174,143,255,${Math.max(0, d.a)})`;
        x.fillRect(Math.round(d.x / 4) * 4, Math.round(d.y / 4) * 4, d.s, d.s);
      });
      while (dots[0]?.a <= 0) dots.shift();
      raf = requestAnimationFrame(draw);
    };
    size();
    addEventListener("resize", size);
    addEventListener("pointermove", move);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", size);
      removeEventListener("pointermove", move);
    };
  }, []);
  return <canvas className="mx-dither" ref={canvas} aria-hidden="true" />;
}

export function ConnectionGlobe() {
  return (
    <div
      className="mx-globe"
      aria-label="Animated network of creator and customer connections"
    >
      <div className="mx-sphere">
        <i className="latitude l1" />
        <i className="latitude l2" />
        <i className="longitude g1" />
        <i className="longitude g2" />
        <span className="globe-core">MX</span>
        {["Manila", "Cebu", "Singapore", "London", "New York"].map((x, i) => (
          <b className={`place p${i + 1}`} key={x}>
            <em />
            {x}
          </b>
        ))}
        <div className="globe-arc a1" />
        <div className="globe-arc a2" />
        <div className="globe-arc a3" />
      </div>
      <p>
        <span>12,480</span> creator-to-customer connections today
      </p>
    </div>
  );
}

const people = ["RJ", "KM", "AL", "JC", "SN", "MP", "DG", "YA"];
export function UserCircles() {
  return (
    <section className="mx-users">
      <div>
        <p className="kicker">PEOPLE BUILDING WITH MORPHX</p>
        <h2>
          Ideas move further
          <br />
          <span>when people connect.</span>
        </h2>
        <p>
          Creators, students, customers and collaborators meet around useful
          knowledge.
        </p>
      </div>
      <div className="orbit-stage" aria-label="MorphX community">
        <i className="orbit-ring ring-one" />
        <i className="orbit-ring ring-two" />
        <div className="orbit-logo">MX</div>
        {people.map((p, i) => (
          <span className={`orbit-person person-${i + 1}`} key={p}>
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

const networks = ["Facebook", "Instagram", "TikTok", "YouTube", "LinkedIn"];
export function MagicConnections() {
  const [joined, setJoined] = useState(false);
  return (
    <section className={`mx-connections ${joined ? "joined" : ""}`}>
      <div>
        <p className="kicker">ONE CONNECTED WORKSPACE</p>
        <h2>
          Your audience is everywhere.
          <br />
          <span>Your work stays in MorphX.</span>
        </h2>
        <p>
          Bring your social channels together, publish from one place and
          understand what brings people to your store.
        </p>
        <button onClick={() => setJoined((v) => !v)}>
          {joined ? "Show all channels" : "Connect everything"}
          <Sparkles />
        </button>
      </div>
      <div className="connection-stage">
        {networks.map((n, i) => (
          <span className={`network-node node-${i + 1}`} key={n}>
            {n}
            <Check />
          </span>
        ))}
        <div className="connection-core">
          <b>MX</b>
          <small>{joined ? "All connected" : "MorphX Social"}</small>
        </div>
      </div>
    </section>
  );
}

const ideaSteps = ["Courses", "Ebooks", "Expertise"];
export function IdeaMagicTransform() {
  const [earning, setEarning] = useState(false);
  return (
    <section className={`idea-transform ${earning ? "earning" : ""}`}>
      <div className="idea-copy">
        <p className="kicker">FROM KNOWLEDGE TO INCOME</p>
        <h2>Turn your ideas into<br/><span>money or earnings.</span></h2>
        <p>Package what you know, put it on your MorphX page and connect it with people who need it.</p>
        <button onClick={() => setEarning((value) => !value)}>
          {earning ? "Show my ideas" : "Turn ideas into earnings"}<Sparkles />
        </button>
      </div>
      <div className="idea-stage" aria-live="polite">
        {ideaSteps.map((idea, index) => <span className={`idea-pill idea-${index + 1}`} key={idea}>{idea}</span>)}
        <div className="idea-result"><small>{earning ? "READY TO SELL" : "YOUR KNOWLEDGE"}</small><b>{earning ? "₱ Earnings" : "Ideas"}</b><em>{earning ? "Store live • Payments ready" : "Courses • Ebooks • Expertise"}</em></div>
      </div>
    </section>
  );
}

export type ProductTuple = readonly [string, string, string, string, string];
export function InfiniteMarketplaceGallery({
  items,
}: {
  items: readonly ProductTuple[];
}) {
  const cards = [...items, ...items];
  return (
    <div className="mx-infinite" aria-label="Featured marketplace products">
      <div className="mx-gallery-track">
        {cards.map((p, i) => (
          <Link
            href="/product/ai-freelancing"
            className="mx-gallery-card"
            key={`${p[0]}-${i}`}
          >
            <div className={`product-art ${p[4]}`}>
              <span>{p[2].slice(0, 2)}</span>
            </div>
            <small>{p[2]}</small>
            <h3>{p[0]}</h3>
            <p>{p[1]}</p>
            <b>{p[3]}</b>
          </Link>
        ))}
      </div>
    </div>
  );
}

const featureSlides = [
  [
    "01",
    "Create with AI",
    "Turn a simple idea into an ebook, course, sales page or full launch plan.",
    "IDEA → PRODUCT",
  ],
  [
    "02",
    "Sell from your page",
    "Give every product, course and bundle a clear mobile-first selling page.",
    "PAGE → CHECKOUT",
  ],
  [
    "03",
    "Manage social media",
    "Connect your channels, schedule posts and see what sends people to your store.",
    "POST → AUDIENCE",
  ],
  [
    "04",
    "Grow with clear data",
    "See what sells, where customers come from and what to improve next.",
    "DATA → NEXT STEP",
  ],
];
export function ParallaxFeatureCarousel() {
  const [active, setActive] = useState(0);
  return (
    <section className="mx-parallax">
      <div className="mx-parallax-copy">
        <p className="kicker">ALL THE IMPORTANT TOOLS</p>
        <h2>
          Run your business
          <br />
          <span>without the busy work.</span>
        </h2>
        <div className="carousel-nav">
          <button
            aria-label="Previous feature"
            onClick={() =>
              setActive(
                (active + featureSlides.length - 1) % featureSlides.length,
              )
            }
          >
            <ArrowLeft />
          </button>
          <span>
            {active + 1} / {featureSlides.length}
          </span>
          <button
            aria-label="Next feature"
            onClick={() => setActive((active + 1) % featureSlides.length)}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="parallax-deck">
        {featureSlides.map((s, i) => {
          const d = (i - active + featureSlides.length) % featureSlides.length;
          return (
            <button
              className={`parallax-card depth-${d}`}
              onClick={() => setActive(i)}
              key={s[0]}
              aria-label={`Show ${s[1]}`}
            >
              <small>{s[0]}</small>
              <span>{s[3]}</span>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
              <i>
                <b />
              </i>
            </button>
          );
        })}
      </div>
    </section>
  );
}

const plans = [
  [
    "Free",
    "₱0",
    "Start your first idea",
    ["1 storefront", "3 digital products", "20 AI credits", "Basic analytics"],
  ],
  [
    "Creator",
    "₱299",
    "Build consistent income",
    [
      "Unlimited products",
      "10 courses",
      "500 AI credits",
      "Social media tools",
    ],
  ],
  [
    "Pro",
    "₱799",
    "Scale a serious business",
    [
      "Custom domain",
      "2,500 AI credits",
      "Bundles and upsells",
      "Priority support",
    ],
  ],
] as const;
export function LenticularPricingCarousel() {
  const [active, setActive] = useState(1);
  return (
    <section className="mx-pricing">
      <div className="pricing-tabs">
        {plans.map((p, i) => (
          <button
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
            key={p[0]}
          >
            {p[0]}
          </button>
        ))}
      </div>
      <div
        className="lenticular-card"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty(
            "--px",
            `${((e.clientX - r.left) / r.width) * 100}%`,
          );
          e.currentTarget.style.setProperty(
            "--py",
            `${((e.clientY - r.top) / r.height) * 100}%`,
          );
        }}
      >
        <div className="lenticular-shine" />
        <div>
          <small>{plans[active][0].toUpperCase()}</small>
          <h2>
            {plans[active][1]}
            <span>/month</span>
          </h2>
          <p>{plans[active][2]}</p>
          <Link href="/register">
            Start with {plans[active][0]} <ArrowRight />
          </Link>
        </div>
        <ul>
          {plans[active][3].map((x) => (
            <li key={x}>
              <Check />
              {x}
            </li>
          ))}
        </ul>
      </div>
      <p className="pricing-note">
        Change plans anytime. No hidden setup fees.
      </p>
    </section>
  );
}
