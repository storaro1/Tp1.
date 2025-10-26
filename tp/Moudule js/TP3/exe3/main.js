const form = document.getElementById('studentForm');
const errorDiv = document.getElementById('errorMessages');
const tbody = document.querySelector('#studentsTable tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  errorDiv.textContent = '';

  // Récupérer les valeurs
  const code = form.code.value.trim();
  const nom = form.nom.value.trim();
  const prenom = form.prenom.value.trim();
  const semestre = form.semestre.value;

  const notes = [];
  for(let i=1; i<=6; i++) {
    const val = form['note'+i].value.trim();
    notes.push(val);
  }

  // Validation
  let errors = [];

  if(!code) errors.push("Le code étudiant est obligatoire.");
  if(!nom) errors.push("Le nom étudiant est obligatoire.");
  if(!prenom) errors.push("Le prénom étudiant est obligatoire.");
  if(!semestre) errors.push("Veuillez sélectionner un semestre.");

  // Validation des notes
  for(let i=0; i<notes.length; i++) {
    if(notes[i] === '') {
      errors.push(`La note du module ${i+1} est obligatoire.`);
    } else if (isNaN(notes[i])) {
      errors.push(`La note du module ${i+1} doit être un nombre.`);
    } else {
      const num = parseFloat(notes[i]);
      if(num < 0 || num > 20) {
        errors.push(`La note du module ${i+1} doit être entre 0 et 20.`);
      }
    }
  }

  if(errors.length > 0) {
    errorDiv.innerHTML = errors.join('<br>');
    return;
  }

  // Conversion en nombres
  const notesNum = notes.map(n => parseFloat(n));

  // Calcul de la moyenne
  const moyenne = notesNum.reduce((a,b) => a+b, 0) / notesNum.length;

  // Calcul du nombre de modules non validés (note <12 et >=8)
  let nonValidesCount = 0;
  let noteEliminatoire = false;
  for(let note of notesNum) {
    if(note < 8) {
      noteEliminatoire = true;
    } else if(note < 12) {
      nonValidesCount++;
    }
  }

  // Détermination du résultat
  let resultat = '';

  if(noteEliminatoire) {
    resultat = 'Échec (note éliminatoire)';
  } else if(nonValidesCount >= 3) {
    resultat = 'Échec (plus de 3 modules non validés)';
  } else if(moyenne >= 12) {
    resultat = 'Validé';
  } else {
    resultat = 'Échec';
  }

  // Ajout dans le tableau
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${code}</td>
    <td>${nom}</td>
    <td>${prenom}</td>
    <td>${semestre}</td>
    <td>${notesNum[0].toFixed(2)}</td>
    <td>${notesNum[1].toFixed(2)}</td>
    <td>${notesNum[2].toFixed(2)}</td>
    <td>${notesNum[3].toFixed(2)}</td>
    <td>${notesNum[4].toFixed(2)}</td>
    <td>${notesNum[5].toFixed(2)}</td>
    <td>${moyenne.toFixed(2)}</td>
    <td>${resultat}</td>
  `;
  tbody.appendChild(tr);

  // Réinitialiser le formulaire
  form.reset();
});
