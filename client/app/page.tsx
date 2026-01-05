'use client';

import { useRouter } from 'next/navigation';
import { Play, Target, Heart, Trophy, BookOpen, ArrowRight, Sparkles, Lightbulb } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/login');
  };

  return (
    <div className="h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-amber-950 flex items-center justify-center p-2 overflow-hidden">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-2xl p-4 max-w-5xl w-full h-[98vh] border-4 border-amber-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="text-center mb-3 flex-shrink-0">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-amber-600" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800">
              HANG QUIZ
            </h1>
            <Sparkles className="w-8 h-8 text-amber-600" />
          </div>
          <p className="text-amber-800 text-sm font-semibold">Game Quiz Hangman yang Menantang!</p>
        </div>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto mb-3">
          {/* Cara Bermain */}
          <div className="mb-4">
            <h2 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Cara Bermain
            </h2>
            
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 border-2 border-amber-300 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-2 flex-shrink-0">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-sm mb-1">Tebak Kata</h3>
                    <p className="text-amber-800 text-xs leading-tight">Klik huruf-huruf pada keyboard untuk menebak kata yang tersembunyi. Setiap kata memiliki kategori yang berbeda!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border-2 border-amber-300 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-2 flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-sm mb-1">5 Kesempatan Salah</h3>
                    <p className="text-amber-800 text-xs leading-tight">Setiap level kamu punya 5 nyawa. Jika salah menebak, nyawa akan berkurang. Hati-hati!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border-2 border-amber-300 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-2 flex-shrink-0">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-sm mb-1">10 Level Menantang</h3>
                    <p className="text-amber-800 text-xs leading-tight">Selesaikan 10 level dengan berbagai kategori menarik. Setiap kata yang berhasil ditebak akan menampilkan trivia menarik!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border-2 border-amber-300 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-2 flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-sm mb-1">Pelajari Trivia</h3>
                    <p className="text-amber-800 text-xs leading-tight">Setelah berhasil menebak kata, kamu akan mendapatkan informasi menarik tentang kata tersebut!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fitur */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-3 border-2 border-blue-400">
            <h3 className="font-bold text-blue-900 text-sm mb-2">Fitur Game:</h3>
            <div className="grid grid-cols-2 gap-2 text-blue-800">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs">10 Kategori Berbeda</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs">100+ Kata Menantang</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs">Trivia Informatif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs">Quotes Motivasi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Button Start */}
        <button
          onClick={handleStart}
          className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:via-orange-700 hover:to-amber-800 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base flex-shrink-0"
        >
          <Play className="w-5 h-5" />
          Mulai Bermain
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
