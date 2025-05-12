package lblionbrand.lblionbrand.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import lblionbrand.lblionbrand.model.Signup;

public interface Signuprepository extends JpaRepository<Signup ,Long>{
    Optional<Signup> findByEmail(String email);
}
