package com.twuc.shopping.service;

import com.twuc.shopping.entity.Products;
import com.twuc.shopping.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Products> queryAllList(String id){
        List<Products> productsList =  productRepository.findAllById(id);
        return productsList;
    }

    public Products addOrder (Products orderListEntity){
        Products orderEntity = productRepository.save(orderListEntity);
        return orderEntity;
    }

}
