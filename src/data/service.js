export const generateRandomUsers = (count) => {
    const departments = [
      'Computer Engineering',
      'Electrical Engineering',
      'Chemical Engineering',
      'Petroleum Engineering',
      'Civil Engineering',
      'Mechanical Engineering',
      'Food Engineering',
      'Agric Engineering',
    ];
  
    const levels = ['100', '200', '300', '400', '500'];
  
    const userData = [];
  
    for (let i = 1; i <= count; i++) {
      const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
      const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  
      userData.push({
        id: i,
        name: `User ${i}`,
        department: randomDepartment,
        level: randomLevel,
        imgUrl: `https://via.placeholder.com/500?text=User${i}&bg=222`,
      });
    }
  
    return userData;
  };
  