import { Textarea } from "./components/ui/textarea"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { useState } from "react";
import { Loader2 } from 'lucide-react'

export default function SummarizerPage() {
  const [showNotes, setShowNotes] = useState(false);
  const [isSummarizingLoading, setIsSummarizingLoading] = useState(false);

  const handleSummarize = () => {
    setIsSummarizingLoading(true);

    setTimeout(() => {
      setIsSummarizingLoading(false);
      setShowNotes(true);
    }, 3000); 
  };

  const soapNotes = {
    subjective: "Patient reports persistent headache for 3 days, described as dull and aching. No recent medication or diet changes, denies nausea or visual disturbances. Mild discomfort and irritability noted, affecting daily activities.",
    objective: "Patient alert, vital signs normal. No fever, neurological deficits, or abnormal physical findings. Normal cranial nerves, no swelling or tenderness observed.",
    assessment: "Tension headache likely due to stress or prolonged physical activity, without evidence of serious underlying conditions.",
    plan: "1. Advise hydration, physical activity, and stress management. 2. Over-the-counter pain relief as needed. 3. Follow-up if symptoms persist or worsen. 4. Neurology referral if persistent headaches continue."
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 px-4">
      <div className="mx-auto max-w-4xl py-20 text-center">
        <h1 className="mb-10 text-4xl font-bold tracking-tight sm:text-6xl">
          MediScribe AI - Summarizer
        </h1>
        
        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 tracking-normal leading-9">
          Summarize doctor-patient conversations into structured SOAP notes for efficient medical documentation.
        </p>

        <Card className="mx-auto max-w-4xl overflow-hidden bg-white">
          <div className="mb-4 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          
          <h2 className="mb-5 text-3xl font-semibold">Summarizing Tool</h2>
          <p className="mb-6 text-lg text-gray-500">
            Add dialogue below to be summarized.
          </p>
          
          <Textarea 
            placeholder="Type or insert your dialogue here..."
            className="mb-6 min-h-[250px] resize-none"
          />
          
          <Button 
            className="w-full bg-primary hover:bg-senary"
            onClick={handleSummarize}
          >
            Summarize
          </Button>

          {isSummarizingLoading ? (
            <div className="mt-10 flex flex-col items-center justify-center h-full w-full rounded-lg p-12">
              <Loader2 className="h-24 w-24 animate-spin text-primary" />
              <p className="mt-8 text-2xl font-semibold text-gray-700">Summarizing...</p>
              <div className="mt-10 flex space-x-4">
                <div className="h-4 w-4 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="h-4 w-4 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="h-4 w-4 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <p className="mt-6 text-lg text-gray-500">This may take a few moments</p>
            </div>
          ) : (
            showNotes && (
              <div className="mt-10 text-left mb-10 leading-7 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Subjective</h3>
                  <p className="text-gray-600">{soapNotes.subjective}</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Objective</h3>
                  <p className="text-gray-600">{soapNotes.objective}</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Assessment</h3>
                  <p className="text-gray-600">{soapNotes.assessment}</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Plan</h3>
                  <p className="text-gray-600">{soapNotes.plan}</p>
                </div>
              </div>
            )
          )}
        </Card>
      </div>
    </main>
  )
}