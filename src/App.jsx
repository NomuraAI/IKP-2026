import React from 'react';
import { Video, ClipboardCheck, BookOpen } from 'lucide-react';
import LinkCard from './components/LinkCard';
import { LINKS, LABELS } from './config';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Logo Bapperida Lombok Barat"
              className="h-32 w-auto drop-shadow-md"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
            Bapperida Lombok Barat
          </h1>
          <p className="text-slate-500 font-medium">
            Portal Akses Cepat Meeting & Materi
          </p>
        </div>

        {/* Links Grid */}
        <div className="space-y-4 mt-8">
          <LinkCard
            href={LINKS.zoom}
            label={LABELS.zoom}
            icon={<Video size={32} />}
            color="bg-gradient-to-r from-blue-500 to-blue-600"
          />
          <LinkCard
            href={LINKS.absensi}
            label={LABELS.absensi}
            icon={<ClipboardCheck size={32} />}
            color="bg-gradient-to-r from-emerald-500 to-emerald-600"
          />
          <LinkCard
            href={LINKS.materi}
            label={LABELS.materi}
            icon={<BookOpen size={32} />}
            color="bg-gradient-to-r from-orange-400 to-orange-500"
          />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Bapperida Lombok Barat</p>
          <p>Dibuat untuk kemudahan akses informasi</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
