import { FC } from "react";

const FlashNews: FC = () => {
  return (
    <div className="container py-3">
      <div className="flex items-center gap-8 px-6 py-3 bg-yellow-400 shadow-md">
        <h2 className="text-xl font-bold text-red-600">FLAŞ HABER</h2>
        <p className="flex-1 text-neutral-700">
          Talihsiz genç F.K.K, 1.Cadde üzerinde lüks aracı ile tabelalara
          çarparak feci bir kaza yaptı.
        </p>
      </div>
    </div>
  );
};

export default FlashNews;
