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
      q: "Is this really free?",
      a: "Yes. The deals are free and come from our sponsors who promote their apps and services. You are rewarded for participating.",
    },
    {
      q: "Why do I need to enter my email?",
      a: "Your email is used to track your progress and send your JB Hifi gift card",
    },
    {
      q: "When do I get the JB HiFi gift card?",
      a: "After you finish the recommended deals, your reward is sent by email",
    },
  ];

  function FAQSection() {
    return (
      <section className="mt-10 rounded-2xl bg-white border border-gray-200 p-5 md:p-7 shadow-sm">
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
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 relative shadow-lg">
        <span className="text-2xl font-bold text-black">$</span>
        <div className="absolute -top-2 -right-2 sparkle-animation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="#facc15"/>
            <path d="M5 3L6 6L9 7L6 8L5 11L4 8L1 7L4 6L5 3Z" fill="#fde68a"/>
          </svg>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-3 text-black">
        Get Your $750 JB HiFi Credit
      </h1>

      <p className="text-center mb-6 text-gray-600">
        Complete a few quick tasks to unlock your reward
      </p>

      <button
        onClick={handleClaimClick}
        className="w-full max-w-md bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-full mb-6 shein-cta-button cta-pump-enhanced flex items-center justify-center gap-2 shadow-lg"
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <span className="text-yellow-500 font-bold text-xs">$</span>
        </div>
        <div className="text-left">
          <div className="font-bold text-sm">$750 JB HiFi Gift Card</div>
          <div className="text-xs opacity-90">(Enter Email & Complete Deals)</div>
        </div>
      </button>

      <div className="w-full max-w-lg rounded-2xl border border-gray-200 p-6 mb-6 bg-white">
  <div className="space-y-6">
    {[1, 2, 3, 4].map((step, i) => (
      <div key={i} className="flex items-start gap-4">
        <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
          {step}
        </div>
        <div>
          <h3 className="font-semibold text-black mb-1">
            {[
              "Click The Button Above 👆",
              "Enter Your Email & Basic Info",
              "Complete 3-5 Deals",
              "Claim Your Gift Card"
            ][i]}
          </h3>
          <p className="text-sm text-gray-600">
            {[
              "Start your JB HiFi reward claim",
              "This is needed to send your reward",
              "Simple tasks like app downloads, and surveys",
              "Your JB HiFi reward will be sent by email"
            ][i]}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="w-full max-w-lg mb-6">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Top Claims Of The Week
        </h2>

        <p className="text-center text-sm mb-4 text-gray-600">
          Real results from real people
        </p>

        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span>Swipe to see more</span>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="hidden md:flex md:justify-center md:gap-6">
            {["proof1", "proof2", "proof3"].map((img, i) => (
              <div key={i} className="w-80">
                <img
                  src={`/images/${img}.jpeg`}
                  className="w-full max-h-96 object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>

          <div className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4 px-2">
              {["proof1", "proof2", "proof3"].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-72 snap-center">
                  <img
                    src={`/images/${img}.jpeg`}
                    className="w-full max-h-[500px] object-contain rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6 text-sm mt-6 text-gray-500">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-yellow-500" />
            <span>25,000+ Claims Completed</span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full" />
          <div className="flex items-center gap-2">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span>4.8★ average rating</span>
          </div>
        </div>
      </div>

      <FAQSection />
    </div>
  );
};

export default Index;
