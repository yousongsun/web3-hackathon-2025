"use client"

import Sidebar from "~~/app/property-app/components/Sidebar";
import { useState } from 'react';
import Link from 'next/link';

export default function Transactions() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchOpenAIResponse = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemma-3-12b-it:free",
          "messages": [
            {
              "role": "user",
              "content": "generate a random proposal regarding to real estate decision in 50 words, only give me the proposal without markdown"
            }
          ]
        })
      });

      const data = await res.json();
      console.log(data.choices[0].message.content);
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching from OpenAI:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col justify-center items-center w-full">

        {!response &&

          <button
            onClick={fetchOpenAIResponse}
            className="mt-4 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium
                     text-white bg-purple-600 hover:bg-purple-700 transition rounded-lg"
          >
            Generate a new proposal
          </button>
        }


        <div className="px-8">
          {response && <div className="flex flex-col justify-center items-center w-full"><p>{response}</p>
            <div className="flex gap-6">
              <button
                onClick={fetchOpenAIResponse}
                className="mt-4 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium
                     text-white bg-purple-600 hover:bg-purple-700 transition rounded-lg"
              >
                Generate a new proposal
              </button>

              <Link href="/dao"> {/* Replace '/your-target-url' with the actual URL */}
                <a>
                  <button
                    className="mt-4 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium
                     text-white bg-purple-600 hover:bg-purple-700 transition rounded-lg"
                  >
                    Vote for this proposal
                  </button>
                </a>
              </Link>

            </div>


          </div>}
        </div>

        {loading && <p>Loading...</p>}

      </div>
    </div>
  );
}
