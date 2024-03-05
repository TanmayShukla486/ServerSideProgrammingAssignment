var student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

console.log('Original Object: ', student);
delete student['rollno'];
console.log('Altered Object', student);
