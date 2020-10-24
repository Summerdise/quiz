package com.twuc.shopping.api;

import com.twuc.shopping.dto.Product;
import com.twuc.shopping.entity.Products;
import com.twuc.shopping.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.stream.Collectors;

@ResponseBody
public class ProductManagement {
    @Autowired
    ProductService productService;


    @GetMapping("/products/{id}")
    public ResponseEntity<List<Product>> queryOrderList(@PathVariable String id){

        List<Products> orderListEntities = productService.queryAllList(id);
        List<Product> orderList = orderListEntities.stream()
                .map(Product::get).collect(Collectors.toList());
        return ResponseEntity.ok().body(orderList);

    }
}
