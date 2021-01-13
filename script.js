    // game intro
    
    var userName = prompt('Welcome to the Guessing Game, you will have five changes to answer yes or no questions. Let\'s see how well you know Dan. If you are ready, place your name below and select OK!');
    alert('Alright ' + userName + ', let\'s go! Click OK to start question 1.');
    //console.log('The users name is ' + userName + ' and they have started the game.');
    
    
    // game question 1
    var danCity = prompt('Does Dan live in Bellevue, WA?');
    if (danCity.toLowerCase() === 'yes') {
        //console.log('That\'s correct, ' + userName + '! Press OK to continue to question 2.');
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 2.');
    } else if (danCity.toLowerCase() === 'y') {
        //console.log('That\'s correct, ' + userName + '! Press OK to continue to question 2.');
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 2.');
    } else {
        //console.log('Sorry '+ userName + ', that was not correct. Dan lives in Bellevue. Press OK to continue to question 2.');
        alert('Sorry '+ userName + ', that was not correct. Dan lives in Bellevue. Press OK to continue to question 2.');
    }

    //game question 2
    var danCollege = prompt('Did Dan go to College at WSU?');
    if (danCollege.toLowerCase() === 'no') {
        //console.log('That\'s correct, ' + userName + '! Dan went to Bellevue College. Press OK to continue to question 3.');
        alert('That\'s correct, ' + userName + '! Dan went to Bellevue College. Press OK to continue to question 3.');
    } else if (danCollege.toLowerCase() === 'n') {
        //console.log('That\'s correct, ' + userName + '! Dan went to Bellevue College. Press OK to continue to question 3.');
        alert('That\'s correct, ' + userName + '! Dan went to Bellevue College. Press OK to continue to question 3.');
    } else {
        //console.log('Sorry '+ userName + ', that was not correct. Dan went to Bellevue College. Press OK to continue to question 3.');
        alert('Sorry '+ userName + ', that was not correct. Dan went to Bellevue College. Press OK to continue to question 3.');
    }

    //game question 3
    var danCode = prompt('Does Dan want to master JavaScript at CodeFellows?');
    if (danCode.toLowerCase() === 'yes') {
        //console.log('That\'s correct, ' + userName + '! Press OK to continue to question 4.');
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 4.');
    } else if (danCode.toLowerCase() === 'y') {
        //console.log('That\'s correct, ' + userName + '! Press OK to continue to question 4.');
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 4.');
    } else {
        //console.log('Sorry '+ userName + ', that was not correct. Dan does want to master JavaScript at CodeFellows. Press OK to continue to question 4.');
        alert('Sorry '+ userName + ', that was not correct. Dan does want to master JavaScript at CodeFellows. Press OK to continue to question 4.');
    }

    //game question 4
    var danEmployment = prompt('Is Dan\'s prior employment in Real Estate?');
    if (danEmployment.toLowerCase() === 'yes') {
        //console.log('That\'s correct, ' + userName + '! Press OK to continue to question 5.');
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 5.');
    } else if (danEmployment.toLowerCase() === 'y') {
        //console.log('That\'s correct, ' + userName + '! Press OK to continue to question 5.');
        alert('That\'s correct, ' + userName + '! Press OK to continue to question 2.');
    } else {
        //console.log('Sorry '+ userName + ', that was not correct. Dan lives in Bellevue. Press OK to continue to question 2.');
        alert('Sorry '+ userName + ', that was not correct. Dan lives in Bellevue. Press OK to continue to question 2.');
    }
    
    //game question 5
    var danTech = prompt('Did Dan manage the online marketing at New Tier Real Estate?');
    if (danTech.toLowerCase() === 'yes') {
        //console.log('That\'s correct, ' + userName + '! Press OK to finish.');
        alert('That\'s correct, ' + userName + '! Press OK to continue to finish.');
    } else if (danTech.toLowerCase() === 'y') {
        //console.log('That\'s correct, ' + userName + '! Press OK to continue to finish');
        alert('That\'s correct, ' + userName + '! Press OK to continue to finish.');
    } else {
        //console.log('Sorry '+ userName + ', that was not correct. Dan did manage the online marketing at New Tier Real Estate. Press OK to continue to finish.');
        alert('Sorry '+ userName + ', that was not correct. Dan did manage the online marketing at New Tier Real Estate. Press OK to continue to finish.');
    }
