package com.twuc.shopping.repository;

import com.twuc.shopping.entity.Products;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Products,Integer> {

    List<Products> findAllById(String id);

    Products save(Products products);


}
