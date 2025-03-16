package gm.Inventarios.services;

import gm.Inventarios.models.Product;
import gm.Inventarios.repo.IProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProducService implements IProductServices{

    @Autowired
    IProduct iProduct;

    @Override
    public List<Product> listProducts() {
        return this.iProduct.findAll();
    }

    @Override
    public Product findById(Long id) {
        var findProduct = iProduct.findById(id).orElse(null);
        return findProduct;
    }

    @Override
    @Transactional
    public void save(Product product) {
        this.iProduct.save(product);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        this.iProduct.deleteById(id);
    }
}
