import React from "react";

export default function Venue() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

    // Single source of truth for the venue address
    const address = "5810 Almeda Genoa Rd, Houston, TX 77048";

    const params = new URLSearchParams({
        key: apiKey || "",
        q: address,
    });
    const mapSrc = `https://www.google.com/maps/embed/v1/place?${params.toString()}`;
    const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

    return (
        <section id="venue" className="content-section venue-section" style={{ minHeight: '60vh', backgroundColor: 'white' }}>
            <div className="venue-container">
                <div className="venue-content">
                    <div className="venue-left">
                        <h2 className="venue-heading">Venue location</h2>
                        <p className="venue-paragraph">
                            See you on October 21st at Houston Trinity MTC Sunday School Hall— {address}. The celebration will start at 5:00 pm. Your love, prayers, and presence mean more to us than any gift.  
                        </p>
                        <br/>       
                        <p>
                            Note: If you wish to bless Justopher, we kindly request no toys, please. (We're saturated with toys already!)
                        </p>
                    </div>
                    <div className="venue-right">
                        {apiKey ? (
                            <iframe
                                title="Venue location map"
                                className="venue-iframe"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={mapSrc}
                                allowFullScreen
                            />
                        ) : (
                            <p className="venue-fallback">
                                Map is unavailable because the Google Maps API key is missing. Add <code>VITE_GOOGLE_MAPS_KEY</code> to your <code>.env</code> file and reload the app.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
