import { Users, Star } from "lucide-react";
import "../index.css";

const Index = () => {
  const baseUrl = "https://trkfy.org/aff_c?offer_id=127&aff_id=150406";

  const handleClaimClick = () => {
    window.location.href = `${baseUrl}&source=dm`;
  };

  const faqs = [
    {
      q: "How long does it take?",
      a: "Usually around 10-15 mins for 5 deals",
    },
    {
      q: "What are ‘deals’?",
      a: "Simple tasks like app downloads, surveys, or trials",
    },
    {
      q: "Do I have to pay anything?",
      a: "Some deals are totally free, and some may include a trial or subscription",
    },
    {
      q: "Why do I need to enter my email?",
      a: "So your reward and updates can be sent to you",
    },
    {
      q: "When do I get the JB HiFi gift card?",
      a: "After you finish the recommended deals, your reward is sent by email",
    },
  ];

  function FAQSection() {
    return (
      <section className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-5 md:p-7">
        <h2 className="text-xl md:text-2xl font-bold text-pink-400 text-center">
          Common Questions
        </h2>

        <div className="mt-5 space-y-3">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl bg-black/25 border border-white/10 px-4 py-3"
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
      {/* Dollar icon */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 relative shadow-lg">
        <span className="text-2xl font-bold text-black">$</span>
        <div className="absolute -top-2 -right-2 sparkle-animation">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
              fill="#ec4899"
            />
            <path
              d="M5 3L6 6L9 7L6 8L5 11L4 8L1 7L4 6L5 3Z"
              fill="#f9a8d4"
            />
          </svg>
        </div>
      </div>

      {/* Main headline */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-3 text-pink-400 halloween-text-glow">
        Get Your $750 JB HiFi Credit
      </h1>

      <p className="text-center mb-6 text-gray-300">
        Complete a few quick tasks to unlock your reward
      </p>

      {/* CTA Button */}
      <button
        onClick={handleClaimClick}
        className="w-full max-w-md bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-full mb-6 shein-cta-button cta-pump-enhanced flex items-center justify-center gap-2 shadow-lg"
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <span className="text-pink-500 font-bold text-xs">$</span>
        </div>
        <div className="text-left">
          <div className="font-bold text-sm">$750 JB HiFi Gift Card</div>
          <div className="text-xs opacity-90">(Enter Email & Complete Deals)</div>
        </div>
      </button>

      {/* Steps */}
      <div className="w-full max-w-lg bg-gray-900 rounded-2xl p-6 shadow-lg step-card halloween mb-6">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              1
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                Click The Button Above 👆
              </h3>
              <p className="text-sm text-gray-400">
                Start your JB HiFi reward claim
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              2
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                Enter Your Email & Basic Info
              </h3>
              <p className="text-sm text-gray-400">
                This is needed to send your reward
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              3
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                Complete 3-5 Deals
              </h3>
              <p className="text-sm text-gray-400">
                Simple tasks like app downloads, surveys, and trials
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              4
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                Claim Your Gift Card
              </h3>
              <p className="text-sm text-gray-400">
                Your JB HiFi reward will be sent by email
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          * Terms and conditions apply. Gift card values may vary based on completed offers.
        </p>
      </div>

      {/* Proof Section */}
      <div className="w-full max-w-lg mb-6">
        <h2 className="text-2xl font-bold text-center mb-2 text-pink-400">
          Top Claims Of The Week
        </h2>
        <p className="text-center text-sm mb-4 text-gray-300">
          Real results from real people
        </p>

        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            <span>Swipe to see more</span>
          </div>
        </div>

        <div className="w-full px-4">
          {/* Desktop view */}
          <div className="hidden md:flex md:justify-center md:gap-6">
            <div className="w-80">
              <img
                src="/images/proof1.jpeg"
                alt="Proof of JB HiFi reward claim 1"
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="w-80">
              <img
                src="/images/proof2.jpeg"
                alt="Proof of JB HiFi reward claim 2"
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="w-80">
              <img
                src="/images/proof3.jpeg"
                alt="Proof of JB HiFi reward claim 3"
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4 px-2">
              <div className="flex-shrink-0 w-72 snap-center">
                <img
                  src="/images/proof1.jpeg"
                  alt="Proof of JB HiFi reward claim 1"
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                />
              </div>
              <div className="flex-shrink-0 w-72 snap-center">
                <img
                  src="/images/proof2.jpeg"
                  alt="Proof of JB HiFi reward claim 2"
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                />
              </div>
              <div className="flex-shrink-0 w-72 snap-center">
                <img
                  src="/images/proof3.jpeg"
                  alt="Proof of JB HiFi reward claim 3"
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6 text-sm mt-6 text-gray-400">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-pink-500" />
            <span className="text-xs md:text-sm">
              25,000+ Claims Completed
            </span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full" />
          <div className="flex items-center gap-2">
            <Star size={14} className="text-pink-500 fill-pink-500" />
            <span className="text-xs md:text-sm">4.8★ average rating</span>
          </div>
        </div>
      </div>

      <FAQSection />

      {/* Footer note */}
      <p className="text-xs text-gray-500 max-w-2xl mx-auto text-center mt-4 leading-tight">
        This is a promotional experience and is not affiliated with or endorsed by JB HiFi.
        By proceeding, you agree to receive relevant communications about this reward.
      </p>
    </div>
  );
};

export default Index;
