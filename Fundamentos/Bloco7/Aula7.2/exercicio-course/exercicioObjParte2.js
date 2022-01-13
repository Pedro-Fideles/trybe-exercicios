const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo'
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom'
  };

  const listSkills =  (student) => {
      for (let key of Object.keys(student)) {
          console.log(`${key}, Nível: ${student[key]}`);
      }
  }

  listSkills(student1);
  listSkills(student2);
