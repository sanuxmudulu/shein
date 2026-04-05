import "../index.css";
import { useEffect, useMemo, useState } from "react";

const Index = () => {
  const baseUrl = "https://linkthem.net/aff_c?offer_id=4129&aff_id=150406";

  const handleClaimClick = () => {
    window.location.href = `${baseUrl}&source=dm`;
  };

  // ✅ CLEAN NOTIFICATIONS (no fake claims)
  const notifications = [
    <>Olivia claimed <span className="text-green-500 font-semibold">$750</span> for completing 6 deals</>,
  <>Charlotte received <span className="text-green-500 font-semibold">$500</span> for doing 4 deals</>,
  <>Amelia claimed <span className="text-green-500 font-semibold">$250</span> for completing 3 deals</>,
  <>Isla received <span className="text-green-500 font-semibold">$500</span> for doing 5 deals</>,
  <>Ava claimed <span className="text-green-500 font-semibold">$400</span> for completing 4 deals</>,
  <>Noah received <span className="text-green-500 font-semibold">$250</span> for doing 3 deals</>,
  <>Grace claimed <span className="text-green-500 font-semibold">$750</span> for completing 7 deals</>,
  <>Willow received <span className="text-green-500 font-semibold">$400</span> for doing 4 deals</>,
  <>Harper claimed <span className="text-green-500 font-semibold">$250</span> for completing 3 deals</>,
  <>Chloe received <span className="text-green-500 font-semibold">$500</span> for doing 5 deals</>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const shuffledNotifications = notifications;

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    const cycleTimer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % shuffledNotifications.length);
        setVisible(true);
      }, 350);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleTimer);
    };
  }, [shuffledNotifications.length]);

  const faqs = [
    {
      q: "How long do the deals take?",
      a: "Most deals take just a few minutes to complete. You can finish them at your own pace with no time limit once you've registered.",
    },
    {
      q: "What are deals?",
      a: "Deals are sponsored offers from our partner brands like free trials, discount sign-ups, or sample requests. They're how the voucher is funded.",
    },
    {
      q: "How many deals do I have to do?",
      a: "We recommend completing 4 to 5 deals to qualify. The more you complete, the higher your voucher value climbs - up to $750.",
    },
    {
      q: "When will I receive my voucher?",
      a: "Once your deals are verified, your JB Hifi voucher code will be delivered to your email within 24-48 hours.",
    },
  ];

  function FAQSection() {
    return (
      <section className="mt-10 rounded-2xl bg-white border border-gray-200 p-5 md:p-7 shadow-sm w-full max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
          Common Questions
        </h2>

        <div className="mt-5 space-y-3">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl bg-black/80 border border-black/20 px-4 py-3"
            >
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between">
                <span>{item.q}</span>
                <span className="text-white/60 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen halloween-gradient flex flex-col items-center justify-center px-4 py-4 fade-in-up">
      <div className="mb-4">
        <img
          src="/images/jb logo.jpg"
          alt="JB Hi-Fi"
          className="h-14 md:h-16 object-contain"
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black max-w-lg leading-snug">
        $750 JB Hifi Voucher
      </h1>

      {/* STEPS */}
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 p-6 mb-6 bg-white">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FFF200] text-black rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {step}
              </div>
              <h3 className="font-semibold text-black">
                {[
                  'Click "Claim Now"',
                  "Enter your email and basic info",
                  "Complete 4-6 sponsored deals",
                  "Enjoy your $750 Voucher!",
                ][i]}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleClaimClick}
        className="w-full max-w-md bg-[#FFF200] hover:bg-[#e6d800] text-black font-semibold py-5 px-6 rounded-full mb-6 flex items-center justify-center gap-3 shadow-lg"
      >
        <div className="font-bold text-base md:text-lg">Claim Now</div>
      </button>

      <FAQSection />

      {/* 🔥 FLOATING NOTIFICATION (ADDED) */}
      <div className="pointer-events-none fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-md -translate-x-1/2 md:bottom-5">
        <div
          className={`rounded-2xl border border-gray-200 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm transition-all duration-300 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            {/* Green dot */}
            <span className="h-3 w-3 rounded-full bg-green-500" />

            {/* Text */}
            <p className="truncate text-base md:text-lg font-semibold text-black">
              {shuffledNotifications[currentIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
