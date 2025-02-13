function validate(email, password) {
    let status = false;
    
    
    for (let i = 0; i < credentials.length; i++) {
    if (credentials[i].email === email && credentials[i].password === password) {
    status = true;
    break;
    }
    }
    
    return status;
    }