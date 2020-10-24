package com.twuc.shopping.dto;

import com.twuc.shopping.entity.Products;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    private int id;

    private String productName;

    private BigDecimal price;

    private String unit;

    private String url;

    public static Product get(Products products){
        return Product.builder()
                .id(products.getId())
                .productName(products.getProductName())
                .price(products.getPrice())
                .unit(products.getUnit())
                .url(products.getUrl())
                .build();
    }
}
