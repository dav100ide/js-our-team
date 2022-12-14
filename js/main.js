// creo l'array di oggetti
const team = [
   {
      fristname: 'Wayne',
      lastName: 'Barnett',
      role: 'Founder & CEO',
      photo: 'wayne-barnett-founder-ceo.jpg',
   },

   {
      fristname: 'Angela',
      lastName: 'Caroll',
      role: 'Chief Editor',
      photo: 'angela-caroll-chief-editor.jpg',
   },

   {
      fristname: 'Walter',
      lastName: 'Gordon',
      role: 'Office Manager',
      photo: 'walter-gordon-office-manager.jpg',
   },

   {
      fristname: 'Angela',
      lastName: 'Lopez',
      role: 'Social Media Manager',
      photo: 'angela-lopez-social-media-manager.jpg',
   },

   {
      fristname: 'Scott',
      lastName: 'Estrada',
      role: 'Developer',
      photo: 'scott-estrada-developer.jpg',
   },

   {
      fristname: 'Barbara',
      lastName: 'Ramos',
      role: 'Graphic Designer',
      photo: 'barbara-ramos-graphic-designer.jpg',
   },
];

const teamList = document.getElementById('team-list');

for (let i = 0; i < team.length; i++) {
   const teamMember = team[i];
   const listItem = `
   <li>
   <h3>${teamMember.fristname}</h3>
   <p>${teamMember.role}</p>
   <div class="photo">
      ${teamMember.photo}
   </div>
   </li>
   `;
   teamList.innerHTML += listItem;
}
