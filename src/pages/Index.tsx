import "../index.css";
import { useEffect, useState } from "react";

const Index = () => {
  const baseUrl = "https://linkthem.net/aff_c?offer_id=4129&aff_id=150406";

  const handleClaimClick = () => {
    window.location.href = `${baseUrl}&source=dm`;
  };

  const notifications = [
  {
    message: "STOPPP I literally got mine and im about to checkout a macbook rn 😭",
    name: "Chloe R, Melbourne",
  },
  {
    message: "I swear I thought this was fake but I just ordered a pink ipad 🥹",
    name: "Jessica M, Sydney",
  },
  {
    message: "just placed my order and im literally so excited rn ✌️😭",
    name: "Lily J, Adelaide",
  },
  {
    message: "it actually worked?? i just used it on jb hifi and im shaking 😭",
    name: "Emily T, Brisbane",
  },
  {
    message: "did the deals last night and woke up to the email omg",
    name: "Sophie L, Perth",
  },
  {
    message: "i didnt believe it at first but i just ordered my ipad in pink 💀",
    name: "Ava K, Adelaide",
  },
  {
    message: "this is crazy i just checked out and it actually applied",
    name: "Mia D, Sydney",
  },
  {
    message: "lowkey the easiest thing ive done and i just bought my macbook",
    name: "Olivia P, Melbourne",
  },
  {
    message: "WHY did no one tell me about this earlier 😭 just got mine",
    name: "Hannah S, Brisbane",
  },
  {
    message: "i thought it was one of those scams but it actually worked for me",
    name: "Grace W, Perth",
  },
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

      <div className="w-full max-w-lg rounded-2xl border border-gray-200 p-6 mb-6 bg-white">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FFF200] text-black rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
                {step}
              </div>
              <h3 className="font-semibold text-black">
                {[
                  'Click "Claim Now"',
                  "Enter your email and basic info",
                  "Complete 4-5 sponsored deals",
                  "Enjoy your $750 Voucher!",
                ][i]}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleClaimClick}
        className="w-full max-w-md bg-[#FFF200] hover:bg-[#e6d800] text-black font-semibold py-5 px-6 rounded-full mb-3 shein-cta-button cta-pump-enhanced flex items-center justify-center gap-3 shadow-lg"
      >
        <div className="text-left">
          <div className="font-bold text-base md:text-lg">Claim Now</div>
        </div>
      </button>

      <p className="text-sm text-gray-600 text-center mb-4">
        Higher value deals = higher payout
      </p>

      <div className="w-full max-w-lg mb-2">
  <div
    className={`rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 ${
      visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
    }`}
  >
    <div className="flex flex-col gap-2">
      
      {/* Message (top, left aligned, italic) */}
      <p className="text-base md:text-lg italic text-black leading-snug text-left">
        {shuffledNotifications[currentIndex].message}
      </p>

      {/* Name (bottom right) */}
      <p className="text-sm text-gray-600 text-right font-semibold">
        — {shuffledNotifications[currentIndex].name}
      </p>

    </div>
  </div>
</div>

      <FAQSection />
    </div>
  );
};

export default Index;
