package lblionbrand.lblionbrand.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lblionbrand.lblionbrand.model.Signup;
import lblionbrand.lblionbrand.repository.Signuprepository;


@Service
public class Signupservice {
    
    @Autowired
    private Signuprepository signuprepository;
   
   
   
    
    public List<Signup> getAllusers(){
       return signuprepository.findAll();
    }
   
    public Optional<Signup> getUserbyId(String Email){
       return signuprepository.findByEmail(Email);
    }
   
   /*  public Signup createsignup(Signup user){
      return signuprepository.save(user);
    }
      */
   
      public Signup createsignup(Signup user) {
         Optional<Signup> existingUser = signuprepository.findByEmail(user.getEmail());
         if (existingUser.isPresent()) {
             throw new RuntimeException("Email already registered");
         }
         return signuprepository.save(user);
     }
}
