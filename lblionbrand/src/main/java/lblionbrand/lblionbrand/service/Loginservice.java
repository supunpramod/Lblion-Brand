package lblionbrand.lblionbrand.service;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import lblionbrand.lblionbrand.model.Login;
import lblionbrand.lblionbrand.model.Signup;
import lblionbrand.lblionbrand.repository.Loginrepository;
import lblionbrand.lblionbrand.repository.Signuprepository;

@Service
public class Loginservice {
   
    private static final Logger logger = LoggerFactory.getLogger(Loginservice.class);

    @Autowired
    private Loginrepository loginRepository;

    @Autowired
    private Signuprepository signupRepository;

    public Login createLogin(Login login) {
        logger.info("Creating new login record for email: {}", login.getEmail());
        return loginRepository.save(login);
    }

    public Optional<Login> getLoginByEmail(String email) {
        logger.info("Fetching login record for email: {}", email);
        return loginRepository.findByEmail(email);
    }

    public boolean authenticateUser(String email, String password) {
        System.out.println("Searching for email: " + email);
    
        Optional<Signup> user = signupRepository.findByEmail(email);
    
        if (user.isPresent()) {
            System.out.println("User found: " + user.get().getEmail());
            return user.get().getPassword().equals(password);
        } else {
            System.out.println("User NOT found for email: " + email);
            return false;
        }
    }

    public boolean authenticateUseragain(String email, String password) {
        Optional<Signup> user = signupRepository.findByEmail(email);
    
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return true; 
        } 
        return false; 
    }
}
