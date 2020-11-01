let username = '';
username    ? console.log('Hello!, ' + username) :
console.log('Hello! ' + username);

let userQuestion = 'Es adrian gei?';

console.log(`El usuario ${username} pregunta: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eigthBall = '';

switch (randomNumber) { 
  case 0:
  eigthBall = 'Estoy 100% seguro que así será';
  break;
  case 1:
  eigthBall = 'Es muy posible que sea así';
  break;
  case 2:
  eigthBall = 'Poco probable';
  break;
  case 3:
  eigthBall = 'Prueba de nuevo';
  break;
  case 4:
  eigthBall = 'No cuentes conmigo para eso';
  break;
  case 5:   
  eigthBall = 'Mis datos dicen que puede que no';
  break;
  case 6:
  eigthBall = 'Creo que no';
  break;
  case 7:
  eigthBall = 'No.';
  break;
}

// if (randomNumber === 0){
//   (eigthBall = 'Estoy 100% seguro que así será');
// } else if (randomNumber === 1){
//   (eigthBall = 'Es muy posible que sea así');
//  } else if (randomNumber === 2){
//   (eigthBall = 'Poco probable');
//  } else if (randomNumber === 3){
//  (eigthBall = 'Prueba de nuevo');
//   }  else if (randomNumber === 4){
//  (eigthBall = 'No cuentes conmigo para eso');
//    }  else if (randomNumber === 5){
//   (eigthBall = 'Mis datos dicen que puede que no');
//    } else if (randomNumber === 6){
//   (eigthBall = 'Creo que no');
//    } else if (randomNumber === 7){ 
//   (eigthBall = 'NO.');
//    }

  

console.log(`La bola mágica ha respondido: ${eigthBall}`);
