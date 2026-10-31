// Configurazione di LiveLearn per questo sito.
// LiveLearn.html arriva da solo (lo scarica la GitHub Action ad ogni pubblicazione):
// si modifica solo QUESTO file.
window.LIVELEARN_CONFIG = {
  // Email dell'account docente creato in Firebase → Authentication → Utenti.
  // Non è un segreto: la password la controlla Firebase.
  teacherEmail: 'smarras79@gmail.com',

  // Firebase → Impostazioni progetto → Le tue app → app web → "Configurazione".
  // Si copiano i valori così come sono. databaseURL è obbligatorio
  // (se manca: Realtime Database → in alto c'è l'indirizzo che finisce con .firebasedatabase.app).
  firebase: {
    apiKey:            'AIzaSyA4Pw6ARD25Y4ch3PzsDqPAQWeeThefF-U',
    authDomain:        'livelearn-marras.firebaseapp.com',
    databaseURL:       'https://livelearn-marras-default-rtdb.europe-west1.firebasedatabase.app',
    projectId:         'livelearn-marras',
    storageBucket:     'livelearn-marras.firebasestorage.app',
    messagingSenderId: '979939743651',
    appId:             '1:979939743651:web:c828e0ef4e395891506c16'
  },

  // true = solo quiz: nasconde StudentApp, piani personalizzati, MyClass e i drill.
  soloQuiz: true
};
