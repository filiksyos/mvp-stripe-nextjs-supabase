
'use client';

import { CheckIcon } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-gray-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Pricing that scales with you</h2>
          <p className="text-gray-400">Choose the perfect plan for your needs.</p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-full p-1 flex items-center">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${billingCycle === "monthly" ? "bg-white text-gray-900" : "text-gray-400"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${billingCycle === "yearly" ? "bg-white text-gray-900" : "text-gray-400"}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 md:p-8 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Free</h3>
            <div className="text-4xl font-bold mb-4">
              $0
            </div>
            <p className="text-gray-400 mb-6">For individuals and small teams</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>5 Projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Basic Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Community Support</span>
              </li>
            </ul>
            <button className="w-full bg-white text-gray-900 py-2 rounded-md">Get Started</button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 md:p-8 flex flex-col relative border-2 border-purple-500">
            <div className="absolute -top-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <div className="text-4xl font-bold mb-4">
              {billingCycle === "monthly" ? "$29" : "$290"}
              <span className="text-base font-normal text-gray-400">{billingCycle === "monthly" ? "/month" : "/year"}</span>
            </div>
            <p className="text-gray-400 mb-6">For growing businesses</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Unlimited Projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Priority Support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Team Collaboration</span>
              </li>
            </ul>
            <button className="w-full bg-purple-500 text-white py-2 rounded-md">Get Started</button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 md:p-8 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-4">Custom</div>
            <p className="text-gray-400 mb-6">For large organizations</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Unlimited Everything</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Dedicated Support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Custom Integrations</span>
              </li>
            </ul>
            <button className="w-full bg-white text-gray-900 py-2 rounded-md">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
