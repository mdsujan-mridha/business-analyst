import React from "react";
import { MdCheckBox } from "react-icons/md";
const plans = [
    {
        name: "Basic",
        features: [
            "Predictive Analysis",
            "Profit Calculators",
            "Advanced Region-Based Insights",
            "Performance Metrics",
            "Analysis Tools",
            "Downloadable Reports",
        ],
    },
    {
        name: "Pro",
        features: [
            "Customer Retention",
            "Inventory Alerts",
            "Automated Workflows",
            "Performance Metrics",
            "Product Diversification Suggestions",
            "Analysis Tools",
            "Profit Calculators",
            "Downloadable Reports",
        ],
    },
    {
        name: "Business",
        features: [
            "Analytics Dashboard",
            "Product Diversification Suggestions",
            "Analysis Tools",
            "Performance Metrics",
            "Revenue Comparison",
            "Anomaly Detection & Recommendations",
            "Inventory Management Alerts",
            "Automated Workflows",
            "Profit Calculators",
            "Downloadable Reports",
        ],
    },
];

const PricingComparison = () => {
    return (
        <div className="py-12 ">
            <h2 className="text-4xl font-semibold text-gray-800  mb-8 text-center">
                Compare Features
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div key={plan.name} className="text-left">
                        <h3 className="text-2xl font-bold text-gray-700 py-4 border-b border-gray-300">
                            {plan.name}
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {plan.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center text-gray-600 text-xl"
                                >
                                    <MdCheckBox />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingComparison;
