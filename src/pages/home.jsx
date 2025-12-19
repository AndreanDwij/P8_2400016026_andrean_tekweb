import foto from "../assets/foto.png";

export default function Home() {
  return (
    <section className="pt-32 pb-20 w-full flex justify-center items-center">
      <div className="flex flex-col items-center text-center max-w-xl px-6 gap-6">
        
        <img
          src={foto}
          alt="Foto Profil"
          className="w-60 h-60 rounded-full border-4 border-blue-700 object-cover"
        />

        {/* TEKS */}
        <h1 className="text-4xl font-bold text-blue-900">
          Halo, Andrean dwi julyan
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          saya mahasiswa biasaa makan nasi hanya ingin belajar dan kuliah, fokus utama saya adalah belajar, kuliah dengan sungguh-sungguh, dan mempersiapkan diri untuk masa depan serta saya mencari finesyit
        </p>

        <h3 className="text-2xl font-bold text-black mt-4">
          Keahlian & Hobi
        </h3>

        <ul className="list-disc text-gray-800 text-left">
          <li>design ui/ux</li>
          <li>bermain game</li>
          <li>gym dan tidur</li>
        </ul>

      </div>
    </section>
  );
}
