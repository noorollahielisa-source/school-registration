let students = JSON.parse(localStorage.getItem('students') || '[]');

const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const gradeInput = document.getElementById('gradeInput');
const addBtn = document.getElementById('addBtn');
const studentList = document.getElementById('studentList');

function save() {
  localStorage.setItem('students', JSON.stringify(students));
}

function renderStudents() {
  studentList.innerHTML = '';
  if (students.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'هیچ دانش‌آموزی ثبت نشده.';
    studentList.appendChild(p);
    return;
  }
  students.forEach((s, idx) => {
    const li = document.createElement('li');
    li.textContent = `${idx + 1}. ${s.name}, سن: ${s.age}, پایه: ${s.grade}`;
    studentList.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const grade = gradeInput.value.trim();

  if (!name || !age || !grade) return alert('همه فیلدها باید پر شوند.');

  students.push({ name, age, grade });
  save();
  nameInput.value = '';
  ageInput.value = '';
  gradeInput.value = '';
  renderStudents();
});

renderStudents();
