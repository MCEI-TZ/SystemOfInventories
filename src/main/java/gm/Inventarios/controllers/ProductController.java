package gm.Inventarios.controllers;

import gm.Inventarios.models.Product;
import gm.Inventarios.services.ProducService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("inventory-app") //http://localhost:8080/inventory-app
@CrossOrigin(value = "http://localhost:4200") //Port of Angular
public class ProductController {
    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProducService producService;

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        logger.info("Get all products");
        return this.producService.listProducts();
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        logger.info("Add product");
        return this.producService.save(product);
    }
}
