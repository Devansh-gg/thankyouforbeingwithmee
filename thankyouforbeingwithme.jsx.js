import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function ThankYouForBeingWithMe() {
  const [showLetter, setShowLetter] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white p-6">
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-300 mb-4">
          Thank You For Being With Me
        </h1>
        <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
          A letter, a memory, a quiet corner of the internet for you, Ananya — from a man who once dreamed of a forever, and still carries it silently.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-10">
        <Card className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-pink-200">Our Memories</h2>
            <p className="text-sm text-pink-100">Captured moments from a time I’ll always hold close</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img src="/gallery1.jpg" className="rounded-xl" alt="Memory 1" />
              <img src="/gallery2.jpg" className="rounded-xl" alt="Memory 2" />
              <img src="/gallery3.jpg" className="rounded-xl" alt="Memory 3" />
              <img src="/gallery4.jpg" className="rounded-xl" alt="Memory 4" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-pink-200">Special For You</h2>
            <Button onClick={() => setShowLetter(!showLetter)} className="w-full bg-pink-500 hover:bg-pink-600">
              {showLetter ? "Hide" : "Read The Letter"}
            </Button>
            {showLetter && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-pink-100 space-y-2 max-h-96 overflow-y-auto">
                <p><strong>To the woman I cherished deeply,</strong></p>
                <p>There are goodbyes that stay silent, and there are memories that never leave. This letter is both. You gave me something I didn’t even know I was missing — genuine love, deep connection, and the kind of presence that stays even when you’re not around.</p>
                <p>I know life moves forward, and so must you. But a part of me will always pause here — where we laughed, where we fought, and where we imagined a future together. If you ever wonder whether it all mattered — it did. More than words can hold.</p>
                <p>You were not just someone I loved. You were the woman I envisioned standing beside through every season of life. I may not be part of your tomorrow, but thank you — truly — for being my today.</p>
                <p>— Devansh</p>
              </motion.div>
            )}

            <Button onClick={() => setShowMessage(!showMessage)} className="w-full bg-pink-500 hover:bg-pink-600">
              {showMessage ? "Hide" : "Short Message"}
            </Button>
            {showMessage && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-pink-100">
                Wherever life takes you, may it be kind. Just know — someone once loved you quietly, truly, and completely. And he always will.
              </motion.div>
            )}
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-pink-200 mt-10 text-sm">
        Made with <FaHeart className="inline text-red-500" /> by Devansh for Ananya
      </footer>
    </main>
  );
}
