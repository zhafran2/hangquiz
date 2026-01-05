'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Play, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [playerName, setPlayerName] = useState('');
  const router = useRouter();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      localStorage.setItem('playerName', playerName.trim());
      router.push('/game');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-amber-950 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-12 max-w-md w-full border-4 border-amber-800">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-amber-600" />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800">
              HANG QUIZ
            </h1>
            <Sparkles className="w-12 h-12 text-amber-600" />
          </div>
          <p className="text-amber-800 text-lg font-semibold">Selamat Datang di Game Quiz!</p>
        </div>

        <form onSubmit={handleStart} className="space-y-6">
          <div>
            <label htmlFor="playerName" className="block text-amber-900 font-bold text-lg mb-3 flex items-center gap-2">
              <User className="w-5 h-5" />
              Masukkan Nama Pemain
            </label>
            <input
              id="playerName"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Nama kamu..."
              className="w-full px-4 py-4 text-lg border-3 border-amber-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-400 bg-white text-amber-900 font-semibold placeholder-amber-400"
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:via-orange-700 hover:to-amber-800 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-xl"
          >
            <Play className="w-6 h-6" />
            Mulai Bermain
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-amber-700 text-sm">
            <span className="font-semibold">10 Level</span> • <span className="font-semibold">5 Kesempatan</span> • <span className="font-semibold">Banyak Kategori</span>
          </p>
        </div>
      </div>
    </div>
  );
}

