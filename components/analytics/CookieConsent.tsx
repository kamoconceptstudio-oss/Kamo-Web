"use client";

import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Button from "@/components/ui/Button";

const CONSENT_KEY = "kamo-analytics-consent";
const CONSENT_EVENT = "kamo-consent-change";
type Consent = "accepted" | "rejected" | null;

function readConsent(): Consent {
  const stored = window.localStorage.getItem(CONSENT_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : null;
}

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getServerSnapshot(): Consent {
  return null;
}

function decide(value: Exclude<Consent, null>) {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export default function CookieConsent({ gaId }: { gaId?: string }) {
  const consent = useSyncExternalStore(subscribe, readConsent, getServerSnapshot);

  return (
    <>
      {gaId && consent === "accepted" && <GoogleAnalytics gaId={gaId} />}

      {consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-neutral-200 bg-white px-sm py-md md:px-lg">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-sm md:flex-row md:items-center md:justify-between">
            <p className="text-small text-neutral-600">
              Usamos cookies de analítica para entender cómo mejorar la web.
            </p>
            <div className="flex shrink-0 gap-sm">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => decide("rejected")}
              >
                Rechazar
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => decide("accepted")}
              >
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
