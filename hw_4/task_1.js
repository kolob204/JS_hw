 
function getEmployeeInfo(employee) {
    const employees         = ['Tolya', 'Vasya', 'Petya', 'Oksana', 'Alien'];
    const salary            = ['10', '11', '12', '13', '14']
    const result            = []; 
    const requestedIndex    = employees.indexOf(employee); 

    if(requestedIndex>=0) {
        result.push(employees[requestedIndex]) ;
        result.push(salary[requestedIndex]) ;
        return result;
    } else {return null;}
    
   
  }

  console.log(getEmployeeInfo('Vasy1a'));