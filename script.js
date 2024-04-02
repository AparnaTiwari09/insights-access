const mentors = window.mentors;

const mentorList = document.getElementById('mentor-list');

mentors.forEach((mentor) => {
  const mentorCard = document.createElement('div');
  mentorCard.classList.add('mentor-card');

  const mentorImage = document.createElement('img');
  mentorImage.src = mentor.imgURL;

  const mentorName = document.createElement('h5');
  mentorName.textContent = mentor.name;

  const mentorRole = document.createElement('p');
  mentorRole.textContent = mentor.role;

  mentorCard.appendChild(mentorImage);
  mentorCard.appendChild(mentorName);
  mentorCard.appendChild(mentorRole);

  mentorList.appendChild(mentorCard);
});
