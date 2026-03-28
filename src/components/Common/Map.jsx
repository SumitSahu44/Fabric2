import { useState, useEffect } from "react";

const locations = [
    { id: 1, name: "Parekh Fabrics", city: "Ahmedabad", short: "Fabrics", x: 300, y: 475 },
    { id: 2, name: "Parekh Silk", city: "Surat", short: "Silk", x: 330, y: 550 },
    { id: 3, name: "Parekh Rayon", city: "Raipur", short: "Rayon", x: 488, y: 505 },
    { id: 4, name: "Parekh Linen", city: "Kolkata", short: "Linen", x: 625, y: 515 },
    { id: 5, name: "Parekh e-Trade Market", city: "Hyderabad", short: "e-Trade", x: 450, y: 635 },
    { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore", short: "Chamber", x: 405, y: 755 },
    { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai", short: "Southern", x: 475, y: 755 },
];

const PIN_COLOR = "#c5a059";

function Pin({ loc, index, onClick }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), index * 120 + 100);
        return () => clearTimeout(t);
    }, [index]);

    let labelX = loc.x;
    let labelY = loc.y - 35;
    let textAnchor = "middle";

    if (loc.id === 6) {
        labelX = loc.x - 45;
        labelY = loc.y - 8;
        textAnchor = "end";
    } else if (loc.id === 7) {
        labelX = loc.x + 45;
        labelY = loc.y - 8;
        textAnchor = "start";
    }

    return (
        <g
            onClick={() => onClick(loc.id)}
            style={{ opacity: visible ? 1 : 0, cursor: "pointer" }}
        >
            {/* Blink dot */}
            <circle cx={loc.x} cy={loc.y} r="6" fill={PIN_COLOR}>
                <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
            </circle>

            {/* Glow effect */}
            <circle cx={loc.x} cy={loc.y} r="10" fill="none" stroke={PIN_COLOR} strokeWidth="2">
                <animate attributeName="r" values="10;24" dur="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0" dur="1.8s" repeatCount="indefinite" />
            </circle>

            {/* Label */}
            <text
                x={labelX}
                y={labelY}
                textAnchor={textAnchor}
                fontSize="15.5"
                fontWeight="700"
                fill="#1a237e"
                style={{ pointerEvents: "none" }}
            >
                <tspan x={labelX}>{loc.name}</tspan>
                <tspan x={labelX} dy="17" fontSize="12.5" fill="#444">
                    {loc.city}
                </tspan>
            </text>
        </g>
    );
}

export default function MapPointerPolished() {
    const [active, setActive] = useState(null);

    return (
        <div style={{ maxWidth: "920px", margin: "0 auto", padding: "10px 0" }}>
            <svg
                viewBox="0 0 1000 1000"
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    margin: "0 auto"
                }}
            >
                {/* Heading - Bigger & Bolder */}
                <text
                    x="500"
                    y="68"
                    textAnchor="middle"
                    fontSize="34"
                    fontWeight="800"
                    fill="#0f172b"
                    letterSpacing="0.5"
                >
                    HC PAREKH & ASSOCIATES
                </text>

                <text
                    x="500"
                    y="98"
                    textAnchor="middle"
                    fontSize="14.5"
                    fill="#334155"
                    fontWeight="500"
                >
                    www.hcparekh.com
                </text>

                {/* India Map Image - No Border */}
                <image
                    href="https://img.freepik.com/premium-vector/vector-map-black-outline-india-vector-illustration_686498-514.jpg?w=1060"
                    x="38"
                    y="125"
                    width="924"
                    height="840"
                    preserveAspectRatio="xMidYMid meet"
                    opacity="0.42"
                />

                {/* All Pins */}
                {locations.map((loc, i) => (
                    <Pin
                        key={loc.id}
                        loc={loc}
                        index={i}
                        onClick={setActive}
                    />
                ))}
            </svg>
        </div>
    );
}