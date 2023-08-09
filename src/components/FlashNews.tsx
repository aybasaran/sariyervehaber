import { FC } from "react";

const FlashNews: FC = () => {
  return (
    <div className="container py-3">
      <div className="flex flex-col items-center gap-0 px-6 py-3 bg-yellow-400 shadow-md lg:gap-6 lg:flex-row">
        <h2 className="text-xl font-bold text-red-600">FLAŞ HABER</h2>
        <p className="flex-1 font-semibold text-neutral-700">
          Talihsiz genç F.K.K, 1.Cadde üzerinde lüks aracı ile tabelalara
          çarparak feci bir kaza yaptı.
        </p>
      </div>
    </div>
  );
};

export default FlashNews;
