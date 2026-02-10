import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageSquare, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function LaunchOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if modal has been dismissed in this session
    const isDismissed = sessionStorage.getItem("launchOfferDismissed");

    if (!isDismissed) {
      // Show modal after 1.5 seconds delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        setIsAnimating(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      sessionStorage.setItem("launchOfferDismissed", "true");
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black transition-opacity duration-300",
          isAnimating ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none",
        )}
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 transition-all duration-300 max-h-[90vh] overflow-y-auto",
          isAnimating
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none",
        )}
      >
        <div className="relative rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-3 sm:right-4 top-3 sm:top-4 z-10 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors h-10 w-10 flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Content */}
          <div className="p-5 sm:p-8">
            {/* Header */}
            <div className="mb-4 pr-8">
              <h2 className="text-xl sm:text-3xl font-poppins font-bold text-foreground mb-2 leading-tight">
                🎉 Special Launch Offer
              </h2>
            </div>

            {/* Main Text */}
            <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed">
              Get your professional business website starting at{" "}
              <span className="font-bold text-tech-500">₹4,999</span>.
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
              Limited-time launch pricing for photographers, hotels, small
              businesses & ecommerce brands.
            </p>

            {/* Value Line */}
            <div className="flex flex-wrap gap-2 mb-6 text-xs text-muted-foreground">
              <span className="inline-flex items-center">✓ Fast delivery</span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center">
                ✓ Customizable templates
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center">
                ✓ WhatsApp support
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-13 text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
                onClick={() => {
                  window.open(
                    "https://wa.me/918105784258?text=Hi%20Cloud%20Media%20Tech%2C%20I%27m%20interested%20in%20your%20website%20launch%20offer%20starting%20at%20%E2%82%B94%2C999.",
                    "_blank",
                  );
                  handleClose();
                }}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Get Launch Offer
              </Button>

              <Button
                variant="outline"
                className="w-full font-semibold h-12 sm:h-13 text-sm sm:text-base rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors active:scale-95"
                onClick={() => {
                  window.open("https://cmt-platform.com/", "_blank");
                  handleClose();
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Demo Templates
              </Button>
            </div>
          </div>

          {/* Footer Brand Line */}
          <div className="px-5 sm:px-8 py-2 sm:py-3 bg-tech-50 dark:bg-tech-900/30 border-t border-gray-200 dark:border-slate-700">
            <p className="text-xs text-center text-muted-foreground">
              Cloud Media Tech • Professional Web Solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
