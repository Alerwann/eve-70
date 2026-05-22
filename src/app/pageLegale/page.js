export default function pageLegale(){
    return(
        <main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
    <span>🔒</span> Utilisation de vos contenus
  </h2>
  
  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
    Dans le cadre de l'organisation, nous tenons à ce que chacun se sente en parfaite confiance concernant ses partages.
  </p>

  <div className="space-y-4 text-sm">
    <div className="p-3 bg-slate-50 rounded-lg">
      <strong className="text-slate-800 block mb-1">1. Jusqu'à la soirée</strong>
      <p className="text-slate-600">Les images et anecdotes seront  utilisées pour l'animation de la soirée ainsi que pour lui faire un livre récapitulatif.</p>
    </div>

    <div className="p-3 bg-slate-50 rounded-lg">
      <strong className="text-slate-800 block mb-1">2. Après l'événement</strong>
      <p className="text-slate-600">L'accès au partage restera actif pendant une durée de <span className="font-semibold text-slate-900">3 mois</span>.</p>
    </div>
  </div>

  <p className="mt-6 text-xs text-center text-slate-500">
    Un doute ou une modification ? Merci de <a href="mailto:marieguehl@gmail.com?subject=aide%20site%20annivEve" className="text-indigo-600 underline font-medium hover:text-indigo-700">me contacter</a>.
  </p>
</main>
    )
}