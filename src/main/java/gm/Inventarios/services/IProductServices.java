package gm.Inventarios.services;

import gm.Inventarios.models.Product;

import java.util.List;

public interface IProductServices {
    List<Product> listProducts();
    Product findById(Long id);
    void save(Product product);
    void deleteById(Long id);
}
