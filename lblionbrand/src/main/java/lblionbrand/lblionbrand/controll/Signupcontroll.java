package lblionbrand.lblionbrand.controll;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lblionbrand.lblionbrand.model.Signup;
import lblionbrand.lblionbrand.service.Signupservice;

@RestController
@RequestMapping("/api/signup")
@CrossOrigin(origins = "http://localhost:3000")
public class Signupcontroll {
   @Autowired
    private Signupservice signupservice;

    
{/* 
   @PostMapping("/save")
  public Signup createuser(@RequestBody Signup user){
    return signupservice.createsignup(user);
  }

*/}

@PostMapping("/save")
public ResponseEntity<?> createuser(@RequestBody Signup user) {
    try {
        Signup newUser = signupservice.createsignup(user);
        return ResponseEntity.ok(newUser);
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}

  @GetMapping("/users")
    public List<Signup> getAllUsers() {
        return signupservice.getAllusers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Signup> getUserById(@PathVariable String Email) {
        Optional<Signup> user = signupservice.getUserbyId(Email);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    

  @GetMapping("/getbyemail/{email}")
public ResponseEntity<Signup> getUserByEmail(@PathVariable String email) {
    Optional<Signup> user = signupservice.getUserbyId(email);
    return user.map(ResponseEntity::ok)
               .orElseGet(() -> ResponseEntity.notFound().build());
}   
}
