import "../index.css";

const Index = () => {
  const baseUrl = "https://linkthem.net/aff_c?offer_id=4136&aff_id=150406";

  const handleClaimClick = () => {
    window.location.href = `${baseUrl}&source=dm`;
  };

  const faqs = [
    {
      q: "How long do the deals take?",
      a: "Quick 10-15 minutes for 5 deals",
    },
    {
      q: "Is this really free?",
      a: "Yes. The deals are free and come from our sponsors who promote their apps and services. You are rewarded for participating.",
    },
    {
      q: "What are deals?",
      a: "Simple tasks like app downloads, surveys, or trial",
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
          src="/images/jbhifi-logo.png"
          alt="JB Hi-Fi"
          className="h-14 md:h-16 object-contain"
        />
      </div>

      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 relative shadow-lg">
        <span className="text-2xl font-bold text-black">$</span>
        <div className="absolute -top-2 -right-2 sparkle-animation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
              fill="#facc15"
            />
            <path
              d="M5 3L6 6L9 7L6 8L5 11L4 8L1 7L4 6L5 3Z"
              fill="#fde68a"
            />
          </svg>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black max-w-lg leading-snug">
        Complete the steps below to claim your $750 JB HiFi credit
      </h1>

      <div className="w-full max-w-lg rounded-2xl border border-gray-200 p-6 mb-6 bg-white">
        <div className="space-y-6">
          {[1, 2, 3].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
                {step}
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">
                  {[
                    "Provide a valid email address",
                    "Complete 4-5 required deals",
                    "Claim your discount code",
                  ][i]}
                </h3>
                <p className="text-sm text-gray-600">
                  {[
                    "Discount code is emailed here",
                    "Tasks like app downloads and surveys",
                    "Upon completion of required deals",
                  ][i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleClaimClick}
        className="w-full max-w-md bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-5 px-6 rounded-full mb-6 shein-cta-button cta-pump-enhanced flex items-center justify-center gap-3 shadow-lg"
      >
        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
          <span className="text-yellow-500 font-bold text-sm">$</span>
        </div>

        <div className="text-left">
          <div className="font-bold text-base md:text-lg">Start Now</div>
          <div className="text-sm opacity-90">
            (Enter email and complete deals)
          </div>
        </div>
      </button>

      <FAQSection />
    </div>
  );
};

export default Index;
