function Contact() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-12">
        Hubungi Saya
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-blue-700 mb-2">
            Email
          </h3>
          <p className="text-blue-600 break-word">
            andreandwij@gmail.com
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-blue-700 mb-2">
            Whatsapp
          </h3>
          <p className="text-blue-600">
            +62 821-7962-1570
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-blue-700 mb-2">
            Lokasi
          </h3>
          <p className="text-blue-600">
            Yogyakarta, Indonesia
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
