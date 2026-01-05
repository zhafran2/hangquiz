'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, Trophy, RotateCcw, ArrowRight, X, Info, 
  Sparkles, LogOut, Lightbulb, Award, Target
} from 'lucide-react';
import { quizData, type WordData, type Category } from '@/data/quiz';
import { motivationalQuotes, encouragementQuotes } from '@/data/quotes';

const MAX_WRONG_GUESSES = 5;
const MAX_LEVELS = 10;

export default function GamePage() {
  const router = useRouter();
  const [playerName, setPlayerName] = useState('');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(quizData[0]);
  const [currentWordData, setCurrentWordData] = useState<WordData | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showTrivia, setShowTrivia] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [encouragementQuote, setEncouragementQuote] = useState('');
  const [victoryQuote, setVictoryQuote] = useState('');
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());

  useEffect(() => {
    const name = localStorage.getItem('playerName');
    if (!name) {
      router.push('/');
      return;
    }
    setPlayerName(name);
  }, [router]);

  const getRandomWord = () => {
    // Collect all available words from all categories
    const allWords: Array<{ category: Category; wordData: WordData }> = [];
    
    quizData.forEach(category => {
      category.words.forEach(wordData => {
        if (!usedWords.has(wordData.word)) {
          allWords.push({ category, wordData });
        }
      });
    });

    // If all words are used, reset used words
    if (allWords.length === 0) {
      setUsedWords(new Set());
      quizData.forEach(category => {
        category.words.forEach(wordData => {
          allWords.push({ category, wordData });
        });
      });
    }

    // Pick random word
    const randomIndex = Math.floor(Math.random() * allWords.length);
    const selected = allWords[randomIndex];
    
    return selected;
  };

  const startNewLevel = () => {
    const selected = getRandomWord();
    
    setCurrentCategory(selected.category);
    setCurrentWordData(selected.wordData);
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setGameStatus('playing');
    setShowTrivia(false);
    
    // Mark word as used
    setUsedWords(prev => new Set(prev).add(selected.wordData.word));
  };

  useEffect(() => {
    if (playerName) {
      startNewLevel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLevel, playerName]);

  const handleLetterClick = (letter: string) => {
    if (gameStatus !== 'playing' || guessedLetters.has(letter) || !currentWordData) {
      return;
    }

    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    setGuessedLetters(newGuessedLetters);

    if (!currentWordData.word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);

      if (newWrongGuesses >= MAX_WRONG_GUESSES) {
        setGameStatus('lost');
        const randomQuote = encouragementQuotes[Math.floor(Math.random() * encouragementQuotes.length)];
        setEncouragementQuote(randomQuote);
        setShowGameOverModal(true);
      }
    } else {
      const wordComplete = currentWordData.word.split('').every(char => 
        char === ' ' || newGuessedLetters.has(char)
      );
      
      if (wordComplete) {
        setGameStatus('won');
        setCompletedLevels(prev => [...prev, currentLevel]);
        setShowTrivia(true);
        
        if (currentLevel === MAX_LEVELS) {
          const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
          setVictoryQuote(randomQuote);
          setTimeout(() => setShowVictoryModal(true), 500);
        }
      }
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < MAX_LEVELS) {
      setCurrentLevel(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentLevel(1);
    setCompletedLevels([]);
    setUsedWords(new Set());
    setShowGameOverModal(false);
    setShowVictoryModal(false);
    startNewLevel();
  };

  const handleLogout = () => {
    localStorage.removeItem('playerName');
    router.push('/');
  };

  if (!playerName || !currentWordData) {
    return null;
  }

  const displayWord = currentWordData.word.split('').map((char, index) => {
    if (char === ' ') {
      return <span key={index} className="mx-1">&nbsp;</span>;
    }
    return (
      <span
        key={index}
        className="inline-block w-12 h-16 mx-1 text-4xl font-bold text-center border-b-4 border-amber-700 flex items-center justify-center text-amber-900"
      >
        {guessedLetters.has(char) ? char : ''}
      </span>
    );
  });

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-amber-950 flex items-center justify-center p-2 overflow-hidden">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-2xl p-4 max-w-7xl w-full h-[98vh] border-4 border-amber-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-2 rounded-lg shadow-lg">
              <div className="text-xs text-amber-100 font-semibold uppercase">Pemain</div>
              <div className="text-base font-bold text-white">{playerName}</div>
            </div>
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 px-5 py-2 rounded-lg shadow-lg">
              <div className="text-xs text-blue-100 font-semibold uppercase">Level</div>
              <div className="text-xl font-bold text-white">{currentLevel}/{MAX_LEVELS}</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 font-semibold text-sm"
          >
            <LogOut className="w-5 h-5" />
            Keluar
          </button>
        </div>

        {/* Category Banner */}
        <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 rounded-lg p-2.5 mb-3 shadow-lg flex-shrink-0">
          <div className="flex items-center justify-center gap-2">
            <Target className="w-5 h-5 text-blue-200" />
            <h2 className="text-sm font-bold text-white text-center uppercase tracking-wide">
              {currentCategory.name}
            </h2>
            <Target className="w-5 h-5 text-blue-200" />
          </div>
        </div>

        {/* Lives Display */}
        <div className="flex items-center justify-center gap-2 mb-3 bg-amber-100 rounded-lg p-2.5 border-2 border-amber-300 flex-shrink-0">
          <span className="text-sm font-bold text-amber-900">Nyawa:</span>
          {Array.from({ length: MAX_WRONG_GUESSES }).map((_, index) => (
            <Heart
              key={index}
              className={`w-8 h-8 transition-all ${
                index < MAX_WRONG_GUESSES - wrongGuesses
                  ? 'fill-red-500 text-red-500'
                  : 'fill-gray-300 text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-bold text-amber-900">
            ({MAX_WRONG_GUESSES - wrongGuesses})
          </span>
        </div>

        {/* Word Display */}
        <div className="bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 rounded-xl p-5 mb-3 border-2 border-amber-400 shadow-inner flex-shrink-0">
          <div className="flex flex-wrap justify-center items-center min-h-[80px]">
            {displayWord}
          </div>
        </div>

        {/* Trivia Display */}
        {showTrivia && currentWordData && (
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-400 rounded-lg p-2 mb-2 animate-fade-in flex-shrink-0">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 mb-1 flex items-center gap-1 text-xs">
                  <Info className="w-3 h-3" />
                  Trivia:
                </h3>
                <p className="text-blue-800 text-xs leading-tight">{currentWordData.trivia}</p>
              </div>
            </div>
          </div>
        )}

        {/* Keyboard */}
        <div className="mb-2 flex-1 overflow-y-auto flex items-center">
          <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto w-full">
            {alphabet.map((letter) => {
              const isGuessed = guessedLetters.has(letter);
              const isCorrect = isGuessed && currentWordData.word.includes(letter);
              
              return (
                <button
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  disabled={isGuessed || gameStatus !== 'playing'}
                  className={`
                    w-14 h-14 rounded-xl font-bold text-lg transition-all transform
                    ${isGuessed
                      ? isCorrect
                        ? 'bg-green-600 text-white cursor-not-allowed shadow-lg scale-95'
                        : 'bg-red-600 text-white cursor-not-allowed shadow-lg scale-95'
                      : gameStatus === 'playing'
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 active:scale-90 shadow-md hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Game Status Messages */}
        {gameStatus === 'won' && !showVictoryModal && (
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 rounded-xl p-4 mb-2 text-center shadow-xl flex-shrink-0">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2 animate-bounce" />
            <h2 className="text-lg font-bold text-green-800 mb-1">Selamat! Level {currentLevel} Selesai!</h2>
            <p className="text-green-700 text-sm mb-3">Kata: <span className="font-bold text-base">{currentWordData.word}</span></p>
            {currentLevel < MAX_LEVELS ? (
              <button
                onClick={handleNextLevel}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto text-sm"
              >
                Level Berikutnya
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div>
                <p className="text-green-800 font-bold text-base mb-2 flex items-center justify-center gap-1">
                  <Sparkles className="w-5 h-5" />
                  Semua Level Selesai!
                  <Sparkles className="w-5 h-5" />
                </p>
              </div>
            )}
          </div>
        )}

        {/* Level Progress */}
        <div className="flex-shrink-0">
          <div className="text-center mb-1">
            <span className="text-xs font-bold text-amber-900 flex items-center justify-center gap-1">
              <Award className="w-3 h-3" />
              Progress:
            </span>
          </div>
          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: MAX_LEVELS }).map((_, index) => {
              const levelNum = index + 1;
              const isCompleted = completedLevels.includes(levelNum);
              const isCurrent = levelNum === currentLevel && gameStatus === 'playing';
              
              return (
                <div
                  key={levelNum}
                  className={`
                    h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-all
                    ${isCompleted
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
                      : isCurrent
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-2 ring-blue-300 shadow-lg'
                        : 'bg-gray-200 text-gray-500'
                    }
                  `}
                >
                  {levelNum}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Game Over Modal */}
      {showGameOverModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 max-w-lg w-full border-4 border-red-500 shadow-2xl animate-scale-in">
            <div className="text-center">
              <X className="w-20 h-20 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-red-700 mb-4">Game Over!</h2>
              <p className="text-red-600 text-lg mb-4">Kata yang benar: <span className="font-bold text-xl">{currentWordData.word}</span></p>
              <div className="bg-white rounded-xl p-6 mb-6 border-2 border-amber-300">
                <Sparkles className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <p className="text-amber-900 text-lg font-semibold italic leading-relaxed">{encouragementQuote}</p>
              </div>
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto text-lg"
              >
                <RotateCcw className="w-6 h-6" />
                Main Lagi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Victory Modal */}
      {showVictoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl p-10 max-w-2xl w-full border-4 border-yellow-500 shadow-2xl animate-scale-in">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Trophy className="w-16 h-16 text-yellow-500" />
                <Sparkles className="w-12 h-12 text-amber-500 animate-spin" />
                <Trophy className="w-16 h-16 text-yellow-500" />
              </div>
              <h2 className="text-4xl font-bold text-amber-800 mb-6">Selamat {playerName}!</h2>
              <h3 className="text-2xl font-bold text-amber-700 mb-6">Kamu Telah Menyelesaikan Semua Level!</h3>
              <div className="bg-white rounded-xl p-8 mb-8 border-4 border-amber-400">
                <Sparkles className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <p className="text-amber-900 text-xl font-semibold italic leading-relaxed">{victoryQuote}</p>
              </div>
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:via-orange-700 hover:to-amber-800 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto text-lg"
              >
                <RotateCcw className="w-6 h-6" />
                Main Lagi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

