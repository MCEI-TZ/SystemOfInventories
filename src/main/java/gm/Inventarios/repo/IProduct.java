package gm.Inventarios.repo;

import gm.Inventarios.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProduct extends JpaRepository<Product, Long> {
}
